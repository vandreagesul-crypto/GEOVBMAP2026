import json, sys, time
from faster_whisper import WhisperModel
t = time.time()
m = WhisperModel("large-v3-turbo", device="cpu", compute_type="int8", cpu_threads=4)
import wave, numpy as np
w=wave.open(sys.argv[1]); a=np.frombuffer(w.readframes(w.getnframes()),dtype=np.int16).astype(np.float32)/32768
segs, info = m.transcribe(a, language="pt", word_timestamps=True, vad_filter=False,
    beam_size=5, condition_on_previous_text=False,
    initial_prompt="Ééé, então, né, tipo... a gente vai, vai fazer o levantamento com o GNSS RTK, o bastão, a controladora.")
out = []
for s in segs:
    out.append({"start": s.start, "end": s.end, "text": s.text,
                "words": [{"w": w.word, "s": w.start, "e": w.end, "p": round(w.probability, 3)} for w in s.words]})
    print(f"[{s.start:6.2f}-{s.end:6.2f}] {s.text}", flush=True)
json.dump(out, open(sys.argv[2], "w"), ensure_ascii=False, indent=1)
print("tempo:", round(time.time() - t), "s")
