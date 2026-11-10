# Audio Test Rig — Setup & Adapter Checklist

## Files
- `index.html` — the signal generator (runs on the iPad mini, iOS 9 Safari)
- `testrig.appcache` — tells Safari to keep an offline copy

Both files must sit in the same folder on the web host.

## Put it online (one time, free) — GitHub Pages
1. Make a free account at github.com.
2. Create a new **public** repository, e.g. `testrig`.
3. "Add file → Upload files" and upload `index.html` and `testrig.appcache`.
4. Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)` → Save.
5. After a minute or two it's live at `https://<your-username>.github.io/testrig/`.

## Install on the iPad (needs Wi-Fi once)
1. Open that address in Safari on the iPad. Wait ~10 seconds so it can save the offline copy.
2. Tap the Share button → **Add to Home Screen** → name it "Test Rig".
3. **Test offline:** turn on Airplane Mode, open it from the home screen, tap Tone. If it plays, you're set.
4. If you ever update `index.html`, also bump the version number in `testrig.appcache`, then open the app once on Wi-Fi.

## iPad settings for testing
- Airplane Mode on, Do Not Disturb on (no alert sounds through the PA)
- Settings → Display & Brightness → Auto-Lock: Never (while testing)
- Optional: Guided Access (Settings → General → Accessibility) to lock it to the app
- Pick one iPad volume position as your standard and mark it (e.g. 75%)

## Adapters — sender side (iPad → system)
You already have a passive DI and some adapters; check for these:

| Testing | Path | Need |
|---|---|---|
| Mic input (XLR) | iPad → DI → XLR cable → mixer/snake | 3.5mm stereo → ¼" cable; DI pad ON (start at −20 dB) |
| Guitar/instrument input | iPad → amp or pedalboard | 3.5mm → ¼" cable; keep level at −30 to −40 dBFS |
| Line input (keys, aux) | iPad → line input directly | 3.5mm → ¼" cable (no DI needed) |
| Stereo L/R wiring | iPad → two inputs | 3.5mm → dual ¼" "Y" cable (most useful single adapter) |

Handy extras: a ¼" female-to-female coupler, and an XLR female-female (gender changer).
If you hear hum through the DI, try its ground-lift switch.

**Never plug the iPad straight into an XLR mic input with phantom power on** — always go through the DI.

## Adapters — listener side (your existing mic → recorder/analyzer)
Depends on what mic you have:
- **XLR mic (e.g. a dynamic vocal mic) → laptop:** a small USB audio interface, or an XLR-to-USB adapter with a built-in preamp. A plain XLR-to-3.5mm cable into a laptop jack is usually too quiet.
- **XLR mic → newer phone:** XLR to 3.5mm TRRS (headset-style) adapter, or a USB-C/Lightning audio adapter with an XLR input.
- **USB mic:** plugs straight into a laptop — no adapter.
- Free laptop software: **Room EQ Wizard (REW)** for level, spectrum (RTA) and sweeps.

A regular vocal mic isn't flat like a measurement mic, so treat readings as pass/fail and
"before vs. after" comparisons rather than exact frequency measurements.

## Listener app (iPad Air)
Files: `listen.html` and `listen-sw.js` — upload them to the **same GitHub repository** as the generator.

1. On the iPad Air, open `https://<your-username>.github.io/testrig/listen.html` in Safari.
2. Tap **Start** and allow microphone access.
3. Share → **Add to Home Screen** → "Listener". It works offline after the first visit (test in Airplane Mode).
4. With a mic adapter plugged in, pick it from the input menu next to Start.

What it shows:
- **Detection line:** tone and its frequency (with a ✓ when it matches a generator preset), sweep, pulses, broadband noise, hum, or quiet
- **Level meter:** RMS and peak in dBFS, with a CLIP warning
- **Spectrum / RTA:** switch views; **Max hold** captures a full sweep; **Save reference** overlays a known-good speaker for comparison
- **Level history:** last 10 seconds — shows dropouts, and the on/off pattern when the generator is set to Alternate
- **Polarity:** with the generator on "Polarity", set a good speaker as reference, then check others — "REVERSED" means swapped wiring
- **Hum check:** 60/120/180 Hz compared with the background noise

**Mic options on the iPad Air:** the built-in mic works with no adapter. For your SM58-style mic, add a preamp adapter (e.g. iRig Pre 2-type into the headphone jack, or a USB interface via Apple's Lightning to USB 3 Camera Adapter). The Behringer ADI21 can't do this job — it has no XLR input.

## Quick test sequence
1. **Tone 1 kHz, −20 dBFS, Both** — follow the signal: DI → mixer input meter → channel → master → amp → speakers. Where it disappears is where the problem is.
2. **Output: Left / Right / Alternate** — confirm each side reaches the correct speaker.
3. **Sweep** — listen for dead spots, rattles, or a tweeter that drops out.
4. **Pink noise** — even, "shhh" sound from every speaker; use for EQ by ear or with REW.
5. **Polarity** — each speaker cone should push out on the pulse (a polarity tester or REW can confirm).
6. **Voice** — final real-world check.
7. **STOP** with everything up — listen for hum or hiss (noise floor).
