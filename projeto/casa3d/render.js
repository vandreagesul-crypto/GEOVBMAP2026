// Renderiza animacao.html quadro a quadro (1080x1920, 30 fps, 30 s) e codifica em H.264.
// Uso: node render.js <saida.mp4> [dir-do-three]   (dir-do-three = pasta "package" do three@0.128.0, para uso sem acesso ao CDN)
// Prévia de quadros: FRAMES=0,300,600 node render.js <prefixo-png> [dir-do-three]
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const path = require('path');
(async () => {
  const out = process.argv[2], three = process.argv[3];
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  p.on('pageerror', e => console.error('PAGEERR', e.message));
  if (three) {
    await p.route('**/three.min.js', r => r.fulfill({ path: path.join(three, 'build/three.min.js') }));
    await p.route('**/OrbitControls.js', r => r.fulfill({ path: path.join(three, 'examples/js/controls/OrbitControls.js') }));
  }
  await p.goto('file://' + path.join(__dirname, 'animacao.html') + '?render=1');
  await p.waitForFunction('window.READY===true');
  await p.evaluate(() => document.fonts.ready);
  const { DUR, FPS } = await p.evaluate(() => ({ DUR: window.DUR, FPS: window.FPS }));
  if (process.env.FRAMES) {
    for (const f of process.env.FRAMES.split(',').map(Number)) {
      await p.evaluate(t => window.setTime(t), f / FPS);
      await p.screenshot({ path: `${out}${String(f).padStart(4, '0')}.png` });
    }
    await b.close(); return;
  }
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
    '-f', 'lavfi', '-i', 'anullsrc=r=48000:cl=stereo', '-shortest',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '17', '-pix_fmt', 'yuv420p', '-color_range', 'tv', '-c:a', 'aac', '-b:a', '96k', '-movflags', '+faststart', out], { stdio: ['pipe', 'inherit', 'inherit'] });
  const n = DUR * FPS;
  for (let f = 0; f < n; f++) {
    await p.evaluate(t => window.setTime(t), f / FPS);
    const buf = await p.screenshot({ type: 'jpeg', quality: 96 });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if (f % 60 === 0) console.log(`quadro ${f}/${n}`);
  }
  ff.stdin.end(); await new Promise(r => ff.on('close', r)); await b.close();
  console.log('ok', out);
})();
