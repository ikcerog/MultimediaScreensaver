# MultimediaScreensaver

A drag-and-drop photo + video screensaver / slideshow that runs entirely in
the browser. Drop images (JPG/PNG/GIF) and/or clips (MP4/WEBM) onto the page
and it cycles between a full-page "1-Up" pan-and-zoom view (landscape-biased)
and a "3-Up" triple-cascade view (portrait-biased). Click a lane in 3-Up to
lock it; open the gear icon to tweak pace, zoom, audio, and order.

Videos autoplay, loop, and start muted. Only the 1-Up background may emit
sound — toggle **Background Audio** in the panel to enable it. 3-Up lanes are
always muted so multiple clips can play visually without an audio pile-up.

## Run it

It's a static page. Either open `index.html` directly, or serve the folder so
the ES module imports work in all browsers:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000/
```

## Project layout

```
index.html        Markup + Tailwind CDN + <script type="module" src="js/main.js">
style.css         All page styles (extracted from the original one-pager)
js/
  main.js         Entry point: wires DOM events on DOMContentLoaded
  state.js        Constants (MAX_IMAGES, SCENES, ...) + mutable `state` object
  dom.js          Cached document.getElementById references (initDom())
  utils.js        createImageElement, findNextImages, status/message helpers
  status.js       Three-up + background countdown status display
  scenes.js       1-Up background + 3-Up foreground scene cycle
  lock.js         Lock/unlock a 3-Up lane (click handler + icon swap)
  files.js        Drag/drop, processFile (FileReader → base64), clearImages
  controls.js     Zoom slider + pace button handlers
```

The modules share mutable state via the `state` object exported from
`state.js`. DOM lookups are centralised in `dom.js` so each module can grab
nodes via `dom.foo` rather than re-querying.
