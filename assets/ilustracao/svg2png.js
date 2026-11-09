const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const [src,out,dsf]=process.argv.slice(2);const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1080,height:1920},deviceScaleFactor:Number(dsf)});
await p.setContent(`<html><body style="margin:0">${fs.readFileSync(src,'utf8')}</body></html>`);
await p.waitForTimeout(300);await p.screenshot({path:out,clip:{x:0,y:0,width:1080,height:1920}});await b.close();})();
