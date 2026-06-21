/* ============================================================
   SQUATCHNET — global cryptid sightings atlas
   Live BFRO data (timothyrenner/bfro-sightings-data via jsDelivr)
   + curated global cryptid cases with Wikipedia references
   ============================================================ */

/* ---------- 1. CURATED GLOBAL CRYPTID CASES ---------- */
/* Famous, historically significant or globally notable cryptid
   reports — hand-curated with Wikipedia links and rich blurbs. */

const GLOBAL_CASES = [
  {
    title: "Patterson–Gimlin Film",
    lat: 41.4264, lng: -123.7019,
    location: "Bluff Creek, Northern California, USA",
    date: "1967-10-20", year: 1967, season: "Fall",
    cryptid: "Sasquatch / Bigfoot",
    desc: "Roger Patterson and Bob Gimlin captured ~53 seconds of 16mm color film of a large bipedal subject they identified as a Sasquatch. The 'Subject One' / 'Patty' footage remains the single most analyzed cryptid recording in history and continues to drive academic debate.",
    wiki: "https://en.wikipedia.org/wiki/Patterson%E2%80%93Gimlin_film"
  },
  {
    title: "Ape Canyon Incident",
    lat: 46.1620, lng: -122.1644,
    location: "Mount St. Helens, Washington, USA",
    date: "1924-07-16", year: 1924, season: "Summer",
    cryptid: "Sasquatch",
    desc: "Miners Fred Beck and four companions reported a night-long attack by 'mountain devils' that pelted their cabin with rocks. The episode predates the term 'Bigfoot' by decades and gave the canyon its name.",
    wiki: "https://en.wikipedia.org/wiki/Ape_Canyon"
  },
  {
    title: "Jerry Crew Tracks",
    lat: 41.4400, lng: -123.6900,
    location: "Bluff Creek, California, USA",
    date: "1958-08-27", year: 1958, season: "Summer",
    cryptid: "Bigfoot",
    desc: "Bulldozer operator Jerry Crew cast a 16-inch footprint discovered around a road-building site. Newspaper coverage popularized the name 'Bigfoot' nationwide.",
    wiki: "https://en.wikipedia.org/wiki/Bigfoot"
  },
  {
    title: "Skookum Cast",
    lat: 46.3500, lng: -121.6300,
    location: "Gifford Pinchot NF, Washington, USA",
    date: "2000-09-22", year: 2000, season: "Fall",
    cryptid: "Sasquatch",
    desc: "A BFRO expedition recovered a 3.5-by-5-foot body-impression cast from soft mud near a fruit-baited site. Researchers argue it preserves heel, thigh, forearm, and Achilles details.",
    wiki: "https://en.wikipedia.org/wiki/Skookum_cast"
  },
  {
    title: "Fouke Monster Sightings",
    lat: 33.2543, lng: -93.8868,
    location: "Fouke, Arkansas, USA",
    date: "1971-05-01", year: 1971, season: "Spring",
    cryptid: "Fouke Monster / Boggy Creek",
    desc: "A reddish-brown bipedal creature reported repeatedly around the Sulphur River bottoms. Inspired the 1972 docudrama 'The Legend of Boggy Creek'.",
    wiki: "https://en.wikipedia.org/wiki/Fouke_Monster"
  },
  {
    title: "Honey Island Swamp Monster",
    lat: 30.3550, lng: -89.6700,
    location: "Honey Island Swamp, Louisiana, USA",
    date: "1963-08-01", year: 1963, season: "Summer",
    cryptid: "Honey Island Swamp Monster",
    desc: "Tracker Harlan Ford described a yellow-eyed seven-foot bipedal creature in the Pearl River basin. Plaster casts of three-toed prints remain controversial evidence.",
    wiki: "https://en.wikipedia.org/wiki/Honey_Island_Swamp_monster"
  },
  {
    title: "Momo, the Missouri Monster",
    lat: 39.6233, lng: -91.0421,
    location: "Louisiana, Missouri, USA",
    date: "1972-07-11", year: 1972, season: "Summer",
    cryptid: "Momo",
    desc: "A six-to-seven-foot dark-furred hominid was reported by the Harrison family and others along the Mississippi River bluffs. Triggered a multi-county search that summer.",
    wiki: "https://en.wikipedia.org/wiki/Momo_the_Monster"
  },
  {
    title: "Mogollon Monster Range",
    lat: 34.3500, lng: -110.9000,
    location: "Mogollon Rim, Arizona, USA",
    date: "1903-01-01", year: 1903, season: "Unknown",
    cryptid: "Mogollon Monster",
    desc: "Seven-foot bipedal hominid reported across the Mogollon Rim country since the early 1900s. Hallmarks include a putrid odor and sustained vocalizations.",
    wiki: "https://en.wikipedia.org/wiki/Mogollon_Monster"
  },
  {
    title: "Florida Skunk Ape",
    lat: 25.8576, lng: -81.3870,
    location: "Big Cypress / Everglades, Florida, USA",
    date: "2000-12-22", year: 2000, season: "Winter",
    cryptid: "Skunk Ape",
    desc: "The infamous 'Myakka photographs' depict an orangutan-like primate in a Sarasota County yard. Tied to long-running swamp reports across South Florida.",
    wiki: "https://en.wikipedia.org/wiki/Skunk_ape"
  },
  {
    title: "Marble Mountain Wilderness",
    lat: 41.5500, lng: -123.2000,
    location: "Marble Mountains, California, USA",
    date: "1962-07-15", year: 1962, season: "Summer",
    cryptid: "Sasquatch",
    desc: "Long-running hotspot in the Klamath Mountains. Multiple track-line discoveries and the recurring stomping/howling reports made it a focus of early Bigfoot researchers.",
    wiki: "https://en.wikipedia.org/wiki/Bigfoot"
  },
  {
    title: "Cripple Foot Track-line",
    lat: 47.6747, lng: -119.7000,
    location: "Bossburg, Washington, USA",
    date: "1969-11-01", year: 1969, season: "Fall",
    cryptid: "Bigfoot",
    desc: "A continuous line of 1,089 tracks across a snowy logging road, including a notably club-footed impression Krantz and Napier cited as anatomically plausible.",
    wiki: "https://en.wikipedia.org/wiki/Bigfoot"
  },
  {
    title: "Wild Man of the Navidad",
    lat: 29.0500, lng: -96.9000,
    location: "Navidad River, Texas, USA",
    date: "1837-01-01", year: 1837, season: "Unknown",
    cryptid: "Wild Man of the Navidad",
    desc: "Pre-Civil War accounts from settlers describe a powerful, evasive 'wild man' raiding stores along the Navidad River bottoms — one of the oldest documented North American cryptid traditions.",
    wiki: "https://en.wikipedia.org/wiki/Wild_Man_of_the_Navidad"
  },
  {
    title: "Wood Booger Country",
    lat: 36.9320, lng: -82.5910,
    location: "Norton, Virginia, USA",
    date: "1990-01-01", year: 1990, season: "Unknown",
    cryptid: "Wood Booger",
    desc: "Long-running Appalachian sighting cluster in Wise County. The city of Norton designates Flag Rock Recreation Area as a 'Wood Booger sanctuary'.",
    wiki: "https://en.wikipedia.org/wiki/Bigfoot"
  },
  {
    title: "Yeti — Khumbu Footprints",
    lat: 28.0026, lng: 86.8528,
    location: "Khumbu Glacier, Nepal",
    date: "1951-11-08", year: 1951, season: "Fall",
    cryptid: "Yeti",
    desc: "Eric Shipton's photographs of large humanoid tracks at ~18,000 ft remain the most cited Yeti evidence. Sparked decades of Himalayan expeditions.",
    wiki: "https://en.wikipedia.org/wiki/Yeti"
  },
  {
    title: "Yowie Sightings — Blue Mountains",
    lat: -33.7180, lng: 150.3110,
    location: "Blue Mountains, NSW, Australia",
    date: "1979-06-01", year: 1979, season: "Winter",
    cryptid: "Yowie",
    desc: "Indigenous oral history and 19th-century colonial reports describe a hairy bipedal 'hairyman' across the eastern Australian ranges. Modern Yowie research clusters around the Blue Mountains and Gold Coast hinterland.",
    wiki: "https://en.wikipedia.org/wiki/Yowie"
  },
  {
    title: "Yeren — Shennongjia Reserve",
    lat: 31.7444, lng: 110.6760,
    location: "Shennongjia, Hubei, China",
    date: "1976-05-14", year: 1976, season: "Spring",
    cryptid: "Yeren",
    desc: "A government-funded expedition recovered hair, footprints and dozens of eyewitness statements describing a reddish 6-7 ft bipedal hominid in the protected forest.",
    wiki: "https://en.wikipedia.org/wiki/Yeren"
  },
  {
    title: "Almas — Caucasus",
    lat: 42.3154, lng: 43.3569,
    location: "Caucasus Mountains, Georgia",
    date: "1941-01-01", year: 1941, season: "Unknown",
    cryptid: "Almas",
    desc: "Recurring sightings of a short, hair-covered wild-human across the Caucasus, Pamirs, and Altai. Studied by Boris Porshnev who proposed a relict Neanderthal hypothesis.",
    wiki: "https://en.wikipedia.org/wiki/Almas_(folklore)"
  },
  {
    title: "Orang Pendek — Kerinci Seblat",
    lat: -1.6970, lng: 101.2640,
    location: "Kerinci Seblat NP, Sumatra, Indonesia",
    date: "2009-09-12", year: 2009, season: "Fall",
    cryptid: "Orang Pendek",
    desc: "A bipedal primate ~3-5 ft tall repeatedly reported by indigenous suku Kubu and visiting biologists including Debbie Martyr. Recovered hairs have produced ambiguous DNA results.",
    wiki: "https://en.wikipedia.org/wiki/Orang_Pendek"
  },
  {
    title: "Mapinguari — Amazon Basin",
    lat: -7.4350, lng: -64.5890,
    location: "Acre, Brazil",
    date: "1937-01-01", year: 1937, season: "Unknown",
    cryptid: "Mapinguari",
    desc: "A foul-smelling, single-eyed hominoid in the Amazon rainforest. Cryptozoologist David Oren has argued it may preserve folk memory of surviving ground sloths.",
    wiki: "https://en.wikipedia.org/wiki/Mapinguari"
  },
  {
    title: "Hibagon — Mount Hiba",
    lat: 35.0150, lng: 132.9100,
    location: "Mount Hiba, Hiroshima, Japan",
    date: "1970-07-20", year: 1970, season: "Summer",
    cryptid: "Hibagon",
    desc: "A 5-ft ape-like creature reported repeatedly through the 1970s around the Mount Hiba foothills. Local government even issued a 'Hibagon' commemorative campaign.",
    wiki: "https://en.wikipedia.org/wiki/Hibagon"
  },
  {
    title: "Mande Barung — Garo Hills",
    lat: 25.5000, lng: 90.2000,
    location: "Garo Hills, Meghalaya, India",
    date: "2002-04-01", year: 2002, season: "Spring",
    cryptid: "Mande Barung",
    desc: "A black-haired, 8-ft 'jungle man' reported by Garo villagers and a 2008 expedition led by Dipu Marak that collected hair samples and broken vegetation.",
    wiki: "https://en.wikipedia.org/wiki/Mande_Barung"
  },
  {
    title: "Barmanou — Chitral",
    lat: 35.8500, lng: 71.7800,
    location: "Chitral, Pakistan",
    date: "1992-05-01", year: 1992, season: "Spring",
    cryptid: "Barmanou",
    desc: "A hair-covered upright primate described across the Hindu Kush and Karakoram. Spanish naturalist Jordi Magraner spent over a decade collecting witness accounts.",
    wiki: "https://en.wikipedia.org/wiki/Barmanou"
  },
  {
    title: "Ucumar — Andes",
    lat: -25.3000, lng: -65.5000,
    location: "Salta, Argentina",
    date: "1956-01-01", year: 1956, season: "Unknown",
    cryptid: "Ucumar",
    desc: "Andean cryptid known as a bear-like upright hominoid, reported across northern Argentina, Bolivia, and Peru. Quechua oral tradition predates colonial accounts.",
    wiki: "https://en.wikipedia.org/wiki/Ucumar"
  },
  {
    title: "Salt Fork Sightings",
    lat: 40.0890, lng: -81.4980,
    location: "Salt Fork SP, Ohio, USA",
    date: "1985-06-01", year: 1985, season: "Summer",
    cryptid: "Grassman",
    desc: "Ohio's Salt Fork State Park is one of the densest BFRO clusters in the Midwest, anchoring the regional 'Grassman' tradition. Annual conferences are held nearby.",
    wiki: "https://en.wikipedia.org/wiki/Bigfoot"
  },
  {
    title: "Sierra Sounds Recordings",
    lat: 39.4000, lng: -120.7000,
    location: "Sierra Nevada, California, USA",
    date: "1972-10-01", year: 1972, season: "Fall",
    cryptid: "Sasquatch",
    desc: "Ron Morehead and Al Berry captured the 'Sierra Sounds' — long-form vocalizations later analyzed by linguist Scott Nelson, who argued they contain non-human language structure.",
    wiki: "https://en.wikipedia.org/wiki/Bigfoot"
  }
];

/* ---------- 2. STATE ---------- */
const state = {
  all: [],            // every record (curated + BFRO)
  visible: [],        // after filter
  filters: {
    yearMin: 1950, yearMax: 2025,
    classes: new Set(["A", "B", "C", "G"]),
    seasons: new Set(["Spring", "Summer", "Fall", "Winter", "Unknown"]),
    query: ""
  },
  view: "markers",    // markers | heatmap | both
  layers: {},
  charts: {}
};

/* ---------- 3. MAP ---------- */
const map = L.map("map", {
  worldCopyJump: true,
  zoomControl: true,
  preferCanvas: true,
  minZoom: 2
}).setView([39.5, -98.35], 4);

L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png", {
  subdomains: "abcd", maxZoom: 19
}).addTo(map);

L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png", {
  subdomains: "abcd", maxZoom: 19, pane: "shadowPane", opacity: .6
}).addTo(map);

const cluster = L.markerClusterGroup({
  maxClusterRadius: 55,
  showCoverageOnHover: false,
  spiderfyOnMaxZoom: true,
  chunkedLoading: true,
  iconCreateFunction(c){
    const n = c.getChildCount();
    const size = n < 25 ? 36 : n < 200 ? 44 : 56;
    const cls = n < 25 ? "small" : n < 200 ? "medium" : "large";
    return L.divIcon({
      html:`<div><span>${n}</span></div>`,
      className:`marker-cluster marker-cluster-${cls}`,
      iconSize:L.point(size,size)
    });
  }
});
state.layers.cluster = cluster;

const heatLayer = L.heatLayer([], {
  radius: 18, blur: 22, maxZoom: 12,
  gradient: { .2:"#003820", .4:"#00ff88", .6:"#aaff00", .8:"#ffb648", 1:"#ff4dd2" }
});
state.layers.heat = heatLayer;

/* ---------- 4. HELPERS ---------- */
const $ = (sel) => document.querySelector(sel);
const fmt = (n) => n == null || Number.isNaN(n) ? "—" : new Intl.NumberFormat("en-US").format(n);
const slug = (s) => (s || "").toString().trim();

function classOf(r){
  if (r.global) return "G";
  const c = (r.classification || "").toString().toUpperCase();
  if (c.includes("A")) return "A";
  if (c.includes("B")) return "B";
  if (c.includes("C")) return "C";
  return "A";
}
function makeIcon(cls){
  return L.divIcon({
    className:"",
    html:`<div class="sn-marker cls-${cls}"></div>`,
    iconSize:[14,14], iconAnchor:[7,7]
  });
}

function wikiFor(rec){
  if (rec.wiki) return rec.wiki;
  // synthesize a search link to the state's bigfoot article if available
  const st = rec.state ? rec.state : "";
  if (st) return `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent("Bigfoot sightings " + st)}`;
  return "https://en.wikipedia.org/wiki/Bigfoot";
}
function bfroFor(rec){
  if (rec.number) return `https://www.bfro.net/GDB/show_report.asp?id=${encodeURIComponent(rec.number)}`;
  if (rec.global) return "https://en.wikipedia.org/wiki/List_of_cryptids";
  return "https://www.bfro.net/GDB/";
}

/* ---------- 5. DATA NORMALIZATION ---------- */
function normalizeBFRO(row){
  if (!row || row.latitude == null || row.longitude == null) return null;
  const lat = +row.latitude, lng = +row.longitude;
  if (!isFinite(lat) || !isFinite(lng)) return null;
  const date = row.date || "";
  const year = parseInt((date.match(/\d{4}/) || [])[0] || row.year || 0, 10) || null;
  return {
    src: "bfro",
    title: row.title || `${row.classification || "Class A"} Report`,
    classification: (row.classification || "Class A").replace(/^Class\s*/i, "").trim().charAt(0).toUpperCase(),
    cryptid: "Bigfoot",
    desc: row.observed || row.summary || "Report details unavailable.",
    state: row.state || "",
    county: row.county || "",
    season: row.season || "Unknown",
    location: [row.county, row.state].filter(Boolean).join(", "),
    date, year,
    lat, lng,
    number: row.number,
    summary: row.summary || "",
    weather: {
      tempHigh: row.temperature_high, tempLow: row.temperature_low,
      moon: row.moon_phase, cloud: row.cloud_cover,
      visibility: row.visibility, wind: row.wind_speed
    }
  };
}
function normalizeGlobal(c){
  return Object.assign({ src: "global", global: true, classification: "G" }, c);
}

/* ---------- 6. RENDER ---------- */
function makeMarker(rec){
  const cls = classOf(rec);
  const m = L.marker([rec.lat, rec.lng], { icon: makeIcon(cls) });
  m.recordRef = rec;
  m.on("mouseover", () => showHoverCard(rec, m));
  m.on("mouseout", hideHoverCard);
  m.on("click", () => openModal(rec));
  return m;
}

function rebuildMap(){
  cluster.clearLayers();
  const heatPts = [];
  const markers = [];
  for (const r of state.visible){
    if (state.view !== "heatmap") markers.push(makeMarker(r));
    heatPts.push([r.lat, r.lng, r.global ? 1.0 : 0.55]);
  }
  if (state.view !== "heatmap") cluster.addLayers(markers);
  heatLayer.setLatLngs(heatPts);

  // layer toggle
  if (state.view === "markers"){
    if (!map.hasLayer(cluster)) map.addLayer(cluster);
    if (map.hasLayer(heatLayer)) map.removeLayer(heatLayer);
  } else if (state.view === "heatmap"){
    if (map.hasLayer(cluster)) map.removeLayer(cluster);
    if (!map.hasLayer(heatLayer)) map.addLayer(heatLayer);
  } else {
    if (!map.hasLayer(cluster)) map.addLayer(cluster);
    if (!map.hasLayer(heatLayer)) map.addLayer(heatLayer);
  }

  $("#vis-count").textContent = fmt(state.visible.length);
  $("#stat-total").textContent = fmt(state.visible.length);
}

/* ---------- 7. FILTERING ---------- */
function applyFilters(){
  const { yearMin, yearMax, classes, seasons, query } = state.filters;
  const q = query.trim().toLowerCase();
  state.visible = state.all.filter(r => {
    const cls = classOf(r);
    if (!classes.has(cls)) return false;
    const season = (r.season || "Unknown").trim();
    if (!seasons.has(season)) return false;
    if (r.year != null && (r.year < yearMin || r.year > yearMax)) return false;
    if (q){
      const hay = `${r.title} ${r.location} ${r.state} ${r.county} ${r.cryptid} ${r.desc}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
  rebuildMap();
  updateStats();
  updateCharts();
}

/* ---------- 8. STATS ---------- */
function updateStats(){
  const recs = state.visible;
  const states = new Set();
  const byYear = new Map();
  const byState = new Map();
  for (const r of recs){
    if (r.state) states.add(r.state);
    if (r.year){
      byYear.set(r.year, (byYear.get(r.year) || 0) + 1);
    }
    const st = r.state || (r.global ? "Global" : "");
    if (st) byState.set(st, (byState.get(st) || 0) + 1);
  }
  $("#stat-states").textContent = fmt(states.size);
  const peakYear = [...byYear.entries()].sort((a,b)=>b[1]-a[1])[0];
  const peakState = [...byState.entries()].sort((a,b)=>b[1]-a[1])[0];
  $("#stat-peak-year").textContent = peakYear ? `${peakYear[0]} · ${peakYear[1]}` : "—";
  $("#stat-peak-state").textContent = peakState ? `${peakState[0]} · ${peakState[1]}` : "—";
}

/* ---------- 9. CHARTS ---------- */
const chartFont = {
  family: "'JetBrains Mono', monospace",
  size: 10
};
Chart.defaults.color = "#8aa0b1";
Chart.defaults.borderColor = "#243240";
Chart.defaults.font = chartFont;

function buildCharts(){
  state.charts.year = new Chart($("#chart-year"), {
    type:"line",
    data:{ labels:[], datasets:[{
      data:[], label:"Sightings",
      borderColor:"#39ff14", backgroundColor:"rgba(57,255,20,.18)",
      tension:.3, fill:true, pointRadius:0, borderWidth:1.6
    }]},
    options:chartOpts({xTitle:"Decade"})
  });
  state.charts.season = new Chart($("#chart-season"), {
    type:"doughnut",
    data:{ labels:["Spring","Summer","Fall","Winter","Unknown"], datasets:[{
      data:[0,0,0,0,0],
      backgroundColor:["#52e0ff","#39ff14","#ffb648","#8aa0b1","#3b4a59"],
      borderColor:"#0b1014", borderWidth:2
    }]},
    options:{
      cutout:"58%",
      plugins:{ legend:{ position:"bottom", labels:{ font:chartFont, boxWidth:8 } } },
      maintainAspectRatio:false
    }
  });
  state.charts.state = new Chart($("#chart-state"), {
    type:"bar",
    data:{ labels:[], datasets:[{
      data:[], backgroundColor:"#39ff14",
      borderRadius:2, barThickness:9
    }]},
    options:chartOpts({hideLegend:true, horizontal:true})
  });
}
function chartOpts(o={}){
  return {
    indexAxis: o.horizontal ? "y" : "x",
    plugins:{ legend:{ display:false } },
    maintainAspectRatio:false,
    scales:{
      x:{ grid:{ color:"rgba(36,50,64,.5)" }, ticks:{ font:chartFont } },
      y:{ grid:{ color:"rgba(36,50,64,.5)" }, ticks:{ font:chartFont } }
    }
  };
}

function updateCharts(){
  const recs = state.visible;
  // by decade
  const dec = new Map();
  for (const r of recs){
    if (!r.year) continue;
    const d = Math.floor(r.year / 10) * 10;
    dec.set(d, (dec.get(d) || 0) + 1);
  }
  const decKeys = [...dec.keys()].sort((a,b)=>a-b);
  state.charts.year.data.labels = decKeys.map(d=>`${d}s`);
  state.charts.year.data.datasets[0].data = decKeys.map(k=>dec.get(k));
  state.charts.year.update("none");

  // by season
  const seasons = {Spring:0, Summer:0, Fall:0, Winter:0, Unknown:0};
  for (const r of recs){
    const s = (r.season || "Unknown").trim();
    seasons[s] != null ? seasons[s]++ : seasons.Unknown++;
  }
  state.charts.season.data.datasets[0].data = [
    seasons.Spring, seasons.Summer, seasons.Fall, seasons.Winter, seasons.Unknown
  ];
  state.charts.season.update("none");

  // top states
  const bs = new Map();
  for (const r of recs){
    const st = r.state || (r.global ? "Global" : "");
    if (!st) continue;
    bs.set(st, (bs.get(st) || 0) + 1);
  }
  const topStates = [...bs.entries()].sort((a,b)=>b[1]-a[1]).slice(0, 8);
  state.charts.state.data.labels = topStates.map(x=>x[0]);
  state.charts.state.data.datasets[0].data = topStates.map(x=>x[1]);
  state.charts.state.update("none");
}

/* ---------- 10. HOVER CARD ---------- */
const hover = $("#hover-card");
function showHoverCard(rec, marker){
  const cls = classOf(rec);
  hover.hidden = false;
  $("#hc-class").textContent = cls;
  $("#hc-class").dataset.cls = cls;
  $("#hc-title").textContent = rec.title || "Sighting Report";
  $("#hc-meta").textContent = [
    rec.year || (rec.date || "Date unknown").slice(0,10),
    rec.season || "",
    rec.location || rec.state || ""
  ].filter(Boolean).join(" · ").toUpperCase();
  $("#hc-desc").textContent = (rec.desc || rec.summary || "Details unavailable.").slice(0, 360);
  $("#hc-wiki").href = wikiFor(rec);
  $("#hc-bfro").href = bfroFor(rec);

  // position near marker in pixel space
  const pt = map.latLngToContainerPoint(marker.getLatLng());
  const mapBox = $("#map").getBoundingClientRect();
  const w = hover.offsetWidth || 280;
  const h = hover.offsetHeight || 180;
  let x = pt.x + 16, y = pt.y + 16;
  if (x + w > mapBox.width - 8) x = pt.x - w - 16;
  if (y + h > mapBox.height - 8) y = pt.y - h - 16;
  hover.style.left = x + "px";
  hover.style.top = y + "px";
  hover.style.transform = "none";

  // also push to readout
  updateReadout(rec);
}
function hideHoverCard(){ hover.hidden = true; }

function updateReadout(r){
  const cls = classOf(r);
  const html = `
    <div class="kv"><b>Type</b><span>${r.cryptid || "Bigfoot"} · Class ${cls}</span></div>
    <div class="kv"><b>Where</b><span>${r.location || r.state || "Unknown"}</span></div>
    <div class="kv"><b>When</b><span>${r.date || r.year || "Unknown"} · ${r.season || "Unknown"}</span></div>
    <p>${(r.desc || r.summary || "").slice(0, 280)}…</p>
    <p><a href="${wikiFor(r)}" target="_blank" rel="noopener">Wikipedia ↗</a> · <a href="${bfroFor(r)}" target="_blank" rel="noopener">${r.number ? "BFRO record ↗" : "More refs ↗"}</a></p>
  `;
  $("#readout").innerHTML = html;
}

/* ---------- 11. MODAL ---------- */
function openModal(r){
  const cls = classOf(r);
  $("#m-tag").textContent = r.global ? "NOTABLE / GLOBAL" : `BFRO REPORT · CLASS ${cls}`;
  $("#m-title").textContent = r.title || "Sighting Report";
  $("#m-meta").textContent = [
    r.date || r.year || "Date unknown",
    r.season || "",
    r.location || r.state || ""
  ].filter(Boolean).join(" · ").toUpperCase();
  $("#m-desc").textContent = r.desc || r.summary || "No description on file.";
  const w = r.weather || {};
  const cond = [
    w.tempHigh != null ? `High ${Math.round(w.tempHigh)}°F` : null,
    w.tempLow != null ? `Low ${Math.round(w.tempLow)}°F` : null,
    w.cloud != null ? `Cloud ${Math.round(w.cloud*100)}%` : null,
    w.moon != null ? `Moon ${Math.round(w.moon*100)}%` : null,
    w.visibility != null ? `Vis ${w.visibility} mi` : null,
    w.wind != null ? `Wind ${w.wind} mph` : null
  ].filter(Boolean).join(" · ") || "Conditions unavailable.";
  $("#m-cond").textContent = cond;

  const links = [];
  links.push(`<li><a href="${wikiFor(r)}" target="_blank" rel="noopener">Wikipedia: ${r.cryptid || "Bigfoot"}</a></li>`);
  links.push(`<li><a href="${bfroFor(r)}" target="_blank" rel="noopener">${r.number ? "BFRO report #" + r.number : "BFRO geo database"}</a></li>`);
  if (r.state) links.push(`<li><a href="https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent("Bigfoot " + r.state)}" target="_blank" rel="noopener">Wikipedia: Bigfoot in ${r.state}</a></li>`);
  links.push(`<li><a href="https://www.google.com/maps/@${r.lat},${r.lng},10z" target="_blank" rel="noopener">Open coordinates on Google Maps</a></li>`);
  $("#m-links").innerHTML = links.join("");

  $("#modal").hidden = false;
}
$("#modal-close").onclick = () => $("#modal").hidden = true;
$("#modal").addEventListener("click", (e) => { if (e.target.id === "modal") $("#modal").hidden = true; });

/* ---------- 12. UI WIRING ---------- */
function wireUI(){
  // view chips
  document.querySelectorAll(".chip").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach(b => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
      state.view = btn.dataset.view;
      rebuildMap();
    });
  });

  // class filters
  document.querySelectorAll('input[data-class]').forEach(cb => {
    cb.addEventListener("change", () => {
      const c = cb.dataset.class;
      cb.checked ? state.filters.classes.add(c) : state.filters.classes.delete(c);
      applyFilters();
    });
  });

  // season filters
  document.querySelectorAll('input[data-season]').forEach(cb => {
    cb.addEventListener("change", () => {
      const s = cb.dataset.season;
      cb.checked ? state.filters.seasons.add(s) : state.filters.seasons.delete(s);
      applyFilters();
    });
  });

  // year range
  const ymin = $("#year-min"), ymax = $("#year-max"), ylbl = $("#year-range-label");
  function syncYears(){
    let lo = +ymin.value, hi = +ymax.value;
    if (lo > hi - 1) { lo = hi - 1; ymin.value = lo; }
    state.filters.yearMin = lo;
    state.filters.yearMax = hi;
    ylbl.textContent = `${lo} – ${hi}`;
    applyFilters();
  }
  ymin.addEventListener("input", syncYears);
  ymax.addEventListener("input", syncYears);
  ylbl.textContent = `${ymin.value} – ${ymax.value}`;

  // search
  let qt;
  $("#search").addEventListener("input", (e) => {
    clearTimeout(qt);
    qt = setTimeout(() => {
      state.filters.query = e.target.value;
      applyFilters();
    }, 180);
  });

  // reset
  $("#reset-filters").addEventListener("click", () => {
    document.querySelectorAll('input[data-class]').forEach(cb => { cb.checked = true; });
    document.querySelectorAll('input[data-season]').forEach(cb => { cb.checked = true; });
    state.filters.classes = new Set(["A","B","C","G"]);
    state.filters.seasons = new Set(["Spring","Summer","Fall","Winter","Unknown"]);
    ymin.value = 1950; ymax.value = 2025;
    $("#search").value = "";
    state.filters.query = "";
    syncYears();
  });

  // fit to data
  $("#fit-bounds").addEventListener("click", () => {
    if (!state.visible.length) return;
    const b = L.latLngBounds(state.visible.map(r => [r.lat, r.lng]));
    map.fitBounds(b.pad(.1), { animate: true });
  });

  // map coords + clock
  map.on("mousemove", (e) => {
    $("#map-coords").textContent = `LAT ${e.latlng.lat.toFixed(2)}  LON ${e.latlng.lng.toFixed(2)}`;
  });
  setInterval(() => {
    const d = new Date();
    $("#clock").textContent = d.toISOString().slice(11, 19);
  }, 1000);

  // hover card position fix on map move
  map.on("move zoom", hideHoverCard);
}

/* ---------- 13. DATA LOAD ---------- */
async function loadBFRO(){
  // jsDelivr GitHub mirror — reliable CORS for the public BFRO dataset
  const urls = [
    "https://cdn.jsdelivr.net/gh/timothyrenner/bfro-sightings-data@master/data/bfro_reports_geocoded.csv",
    "https://raw.githubusercontent.com/timothyrenner/bfro-sightings-data/master/data/bfro_reports_geocoded.csv"
  ];
  for (const url of urls){
    try {
      $("#feed-status").textContent = "STREAMING BFRO…";
      const res = await fetch(url);
      if (!res.ok) throw new Error("HTTP " + res.status);
      const text = await res.text();
      const parsed = Papa.parse(text, { header: true, dynamicTyping: true, skipEmptyLines: true });
      const norm = parsed.data.map(normalizeBFRO).filter(Boolean);
      $("#feed-status").textContent = `BFRO OK · ${fmt(norm.length)} RECORDS`;
      return norm;
    } catch (err){
      console.warn("BFRO fetch failed:", url, err);
    }
  }
  $("#feed-status").textContent = "BFRO OFFLINE · CURATED ONLY";
  return [];
}

async function boot(){
  buildCharts();
  wireUI();

  const globals = GLOBAL_CASES.map(normalizeGlobal);
  state.all = globals.slice();   // show curated immediately
  applyFilters();
  if (state.visible.length){
    map.fitBounds(L.latLngBounds(state.visible.map(r => [r.lat, r.lng])).pad(.2));
  }

  const bfro = await loadBFRO();
  if (bfro.length){
    state.all = globals.concat(bfro);
    applyFilters();
  }

  // smooth zoom into North America after data loads
  setTimeout(() => map.flyTo([39.5, -98.35], 4, { duration: 1.4 }), 200);
  $("#loader").classList.add("hide");
}

boot();
