# DinoExplorer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static dinosaur wiki SPA (vanilla JS, hash routing) deployable to GitHub Pages with an interactive taxonomic tree, geological timeline, and individual dino/group pages.

**Architecture:** Single `index.html` entry point. Hash router in `app.js` renders views into `#app`. All dino data in `data.js`, exported as `DINOS` array + `GRUPOS` object + helper functions. No build step.

**Tech Stack:** HTML5, CSS3, vanilla ES modules, GitHub Pages.

---

## File Map

```
dinoexplorer/
├── index.html          ← nav, search overlay, #app mount point
├── style.css           ← all CSS (CSS vars, components, responsive)
├── app.js              ← hash router + search init
├── data.js             ← DINOS[], GRUPOS{}, helper functions
├── views/
│   ├── home.js         ← mount(container)
│   ├── explore.js      ← mount(container)  — tree + timeline + toggle
│   ├── dino.js         ← mount(container, id)
│   └── grupo.js        ← mount(container, id)
└── .gitignore
```

## Routes

| Hash | View | Handler |
|------|------|---------|
| `#/` | Home | `mountHome(app)` |
| `#/explorar` | Explore | `mountExplore(app)` |
| `#/dino/:id` | Dino page | `mountDino(app, id)` |
| `#/grupo/:id` | Group page | `mountGrupo(app, id)` |

---

## Task 1 — Scaffold: index.html + style.css + .gitignore

**Files:**
- Create: `index.html`
- Create: `style.css`
- Create: `.gitignore`

- [ ] **Step 1: Create index.html**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DinoExplorer — El árbol de vida de los dinosaurios</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="nav">
    <a href="#/" class="nav-logo">🦕 DinoExplorer</a>
    <div class="nav-links">
      <a href="#/" class="nav-link">Inicio</a>
      <a href="#/explorar" class="nav-link">Explorar</a>
    </div>
    <button class="btn-icon" id="search-btn" aria-label="Buscar">🔍</button>
  </nav>

  <div id="search-overlay" class="search-overlay hidden">
    <div class="search-box">
      <input type="text" id="search-input" placeholder="Buscar dinosaurio..." autocomplete="off">
      <button id="search-close" class="btn-icon">✕</button>
    </div>
    <div id="search-results" class="search-results"></div>
  </div>

  <main id="app"></main>

  <script type="module" src="app.js"></script>
</body>
</html>
```

- [ ] **Step 2: Create style.css**

```css
/* ── Variables ─────────────────────────────────────── */
:root {
  --bg-deep:   #081c15;
  --bg-mid:    #1b4332;
  --bg-light:  #2d6a4f;
  --accent:    #52b788;
  --accent-soft: #95d5b2;
  --text:      #d8f3dc;
  --text-dim:  #95d5b2;
  --white:     #ffffff;
  --border:    rgba(82,183,136,0.25);
  --card-bg:   rgba(82,183,136,0.08);
  --card-hover:rgba(82,183,136,0.16);
  --radius:    8px;
  --radius-lg: 20px;
  --transition: 0.2s ease;
}

/* ── Reset ──────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: var(--bg-deep);
  color: var(--text);
  min-height: 100vh;
}
a { color: inherit; text-decoration: none; }
ul { list-style: none; }

/* ── Nav ────────────────────────────────────────────── */
.nav {
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; gap: 16px;
  padding: 0 20px; height: 52px;
  background: rgba(8,28,21,0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
}
.nav-logo {
  font-size: 16px; font-weight: 800; color: var(--accent);
  letter-spacing: 0.5px;
}
.nav-links { display: flex; gap: 20px; margin-left: auto; }
.nav-link {
  font-size: 13px; color: var(--text-dim);
  transition: color var(--transition);
}
.nav-link:hover { color: var(--accent); }
.btn-icon {
  background: none; border: none; cursor: pointer;
  color: var(--text-dim); font-size: 16px; padding: 4px;
  transition: color var(--transition);
}
.btn-icon:hover { color: var(--accent); }

/* ── Search overlay ─────────────────────────────────── */
.search-overlay {
  position: fixed; inset: 0; z-index: 200;
  background: rgba(8,28,21,0.95);
  display: flex; flex-direction: column;
  align-items: center; padding-top: 80px;
}
.search-overlay.hidden { display: none; }
.search-box {
  display: flex; align-items: center; gap: 8px;
  width: min(600px, 90vw);
  background: var(--bg-mid); border: 1px solid var(--accent);
  border-radius: var(--radius-lg); padding: 8px 16px;
}
#search-input {
  flex: 1; background: none; border: none; outline: none;
  color: var(--white); font-size: 16px;
}
#search-input::placeholder { color: var(--text-dim); }
.search-results {
  width: min(600px, 90vw);
  margin-top: 12px; display: flex; flex-direction: column; gap: 4px;
}
.search-result-item {
  display: flex; justify-content: space-between; align-items: center;
  padding: 10px 16px; border-radius: var(--radius);
  background: var(--card-bg); border: 1px solid var(--border);
  cursor: pointer; transition: background var(--transition);
}
.search-result-item:hover { background: var(--card-hover); }
.search-result-name { font-weight: 600; font-style: italic; }
.search-result-meta { font-size: 12px; color: var(--text-dim); }
.search-no-results { color: var(--text-dim); text-align: center; padding: 20px; }

/* ── Buttons ────────────────────────────────────────── */
.btn-primary {
  display: inline-block; padding: 10px 24px;
  background: var(--accent); color: var(--bg-deep);
  border-radius: var(--radius-lg); font-weight: 700; font-size: 14px;
  transition: opacity var(--transition);
}
.btn-primary:hover { opacity: 0.85; }
.btn-secondary {
  display: inline-block; padding: 10px 20px;
  border: 1px solid var(--accent); color: var(--accent);
  border-radius: var(--radius-lg); font-size: 14px;
  transition: background var(--transition);
}
.btn-secondary:hover { background: var(--card-bg); }

/* ── Page wrapper ───────────────────────────────────── */
#app { max-width: 900px; margin: 0 auto; padding: 24px 16px 60px; }

/* ── Home — Hero ────────────────────────────────────── */
.hero {
  text-align: center; padding: 48px 0 36px;
}
.hero-eyebrow {
  font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
  color: var(--accent-soft); margin-bottom: 12px;
}
.hero h1 {
  font-size: clamp(28px, 6vw, 48px); font-weight: 900;
  color: var(--white); line-height: 1.15; margin-bottom: 12px;
}
.hero-sub { font-size: 14px; color: var(--text-dim); margin-bottom: 28px; }
.hero-ctas { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

/* ── Home — Featured cards ──────────────────────────── */
.section-title {
  font-size: 13px; font-weight: 700; letter-spacing: 2px;
  text-transform: uppercase; color: var(--accent-soft); margin-bottom: 14px;
}
.dino-cards-scroll {
  display: flex; gap: 10px; overflow-x: auto;
  padding-bottom: 8px; scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
}
.dino-card-sm {
  flex: 0 0 auto; width: 110px; padding: 14px 10px;
  background: var(--card-bg); border: 1px solid var(--border);
  border-radius: var(--radius); text-align: center; cursor: pointer;
  transition: background var(--transition), border-color var(--transition);
}
.dino-card-sm:hover { background: var(--card-hover); border-color: var(--accent); }
.dino-card-sm .dino-emoji { font-size: 28px; margin-bottom: 6px; }
.dino-card-sm .dino-name { font-size: 11px; font-weight: 700; color: var(--white); }
.dino-card-sm .dino-period { font-size: 10px; color: var(--text-dim); margin-top: 2px; }

/* ── Home — Stats bar ───────────────────────────────── */
.stats-bar {
  display: flex; justify-content: space-around;
  background: var(--card-bg); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 16px; margin-top: 32px;
}
.stat { text-align: center; }
.stat-number { display: block; font-size: 26px; font-weight: 900; color: var(--accent); }
.stat-label  { font-size: 11px; color: var(--text-dim); }

/* ── Explore — toggle ───────────────────────────────── */
.explore-header {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 24px; flex-wrap: wrap; gap: 12px;
}
.explore-header h2 { font-size: 20px; font-weight: 800; color: var(--white); }
.mode-toggle {
  display: flex; background: var(--card-bg);
  border: 1px solid var(--border); border-radius: var(--radius-lg);
  padding: 3px; gap: 2px;
}
.mode-btn {
  padding: 6px 16px; border-radius: var(--radius-lg);
  font-size: 12px; font-weight: 600; cursor: pointer;
  border: none; background: none; color: var(--text-dim);
  transition: all var(--transition);
}
.mode-btn.active { background: var(--accent); color: var(--bg-deep); }

/* ── Explore — Tree ─────────────────────────────────── */
.tree-root { padding: 8px 0; }
.tree-children {
  padding-left: 20px; margin-left: 14px;
  border-left: 1px solid var(--border);
  display: none;
}
.tree-children.expanded {
  display: block;
  animation: fadeIn 0.18s ease;
}
.tree-label {
  display: flex; align-items: center; gap: 8px;
  padding: 7px 10px; border-radius: var(--radius);
  cursor: pointer; user-select: none;
  transition: background var(--transition);
}
.tree-label:hover { background: var(--card-hover); }
.tree-label.is-leaf { cursor: default; }
.tree-arrow { font-size: 10px; color: var(--accent-soft); width: 12px; }
.tree-node-name { font-size: 14px; font-weight: 600; color: var(--white); flex: 1; }
.tree-node-name em { font-style: italic; font-weight: 400; }
.tree-info-link {
  font-size: 11px; color: var(--accent); opacity: 0;
  transition: opacity var(--transition);
}
.tree-label:hover .tree-info-link { opacity: 1; }
.tree-dino-leaf {
  padding: 4px 10px;
}
.tree-dino-link {
  font-size: 13px; font-style: italic; color: var(--text-dim);
  transition: color var(--transition);
}
.tree-dino-link:hover { color: var(--accent); }

/* ── Explore — Timeline ─────────────────────────────── */
.timeline { display: flex; flex-direction: column; gap: 10px; }
.period-header {
  display: flex; align-items: center; gap: 12px;
  padding: 14px 16px; border-radius: var(--radius);
  background: var(--card-bg); border: 1px solid var(--border);
  cursor: pointer; user-select: none;
  transition: background var(--transition);
}
.period-header:hover { background: var(--card-hover); }
.period-icon { font-size: 20px; }
.period-info { flex: 1; }
.period-info h3 { font-size: 15px; font-weight: 700; color: var(--white); }
.period-info p  { font-size: 12px; color: var(--text-dim); }
.period-count { font-size: 12px; color: var(--accent-soft); }
.period-arrow { font-size: 11px; color: var(--text-dim); transition: transform var(--transition); }
.period-arrow.open { transform: rotate(180deg); }
.period-body {
  display: none; padding: 12px 16px 16px;
  border: 1px solid var(--border); border-top: none;
  border-radius: 0 0 var(--radius) var(--radius);
  background: rgba(82,183,136,0.04);
}
.period-body.expanded { display: block; animation: fadeIn 0.18s ease; }
.dino-chips { display: flex; flex-wrap: wrap; gap: 8px; }
.dino-chip {
  padding: 5px 12px; border-radius: var(--radius-lg);
  background: var(--card-bg); border: 1px solid var(--border);
  font-size: 12px; font-style: italic; cursor: pointer;
  transition: all var(--transition);
}
.dino-chip:hover { background: var(--accent); color: var(--bg-deep); border-color: var(--accent); }

/* ── Dino page ──────────────────────────────────────── */
.breadcrumb {
  display: flex; flex-wrap: wrap; gap: 4px; align-items: center;
  font-size: 12px; color: var(--text-dim); margin-bottom: 20px;
}
.breadcrumb a:hover { color: var(--accent); }
.breadcrumb span { color: var(--text-dim); }
.dino-header { margin-bottom: 24px; }
.dino-header .sci-name {
  font-size: clamp(22px, 5vw, 36px); font-style: italic;
  font-weight: 900; color: var(--white); line-height: 1.2;
}
.dino-header .common-name { font-size: 16px; color: var(--accent); margin-top: 4px; }
.dino-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
.dino-tag {
  padding: 3px 12px; border-radius: var(--radius-lg);
  font-size: 11px; font-weight: 600; letter-spacing: 0.5px;
  background: var(--card-bg); border: 1px solid var(--border);
  color: var(--accent-soft);
}
.stats-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;
  margin-bottom: 28px;
}
.stat-card {
  background: var(--card-bg); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 12px;
}
.stat-card .label {
  font-size: 10px; text-transform: uppercase; letter-spacing: 1px;
  color: var(--text-dim); margin-bottom: 4px;
}
.stat-card .value { font-size: 16px; font-weight: 700; color: var(--white); }
.dino-description { line-height: 1.7; color: var(--text); margin-bottom: 20px; }
.dino-description p + p { margin-top: 12px; }
.fun-fact {
  background: var(--card-bg); border-left: 3px solid var(--accent);
  border-radius: 0 var(--radius) var(--radius) 0;
  padding: 14px 16px; margin-bottom: 28px;
}
.fun-fact .fun-label {
  font-size: 11px; font-weight: 700; color: var(--accent);
  letter-spacing: 1px; margin-bottom: 6px;
}
.fun-fact p { font-size: 14px; line-height: 1.6; }
.related-section h3 {
  font-size: 13px; font-weight: 700; letter-spacing: 1.5px;
  text-transform: uppercase; color: var(--accent-soft); margin-bottom: 12px;
}
.related-chips { display: flex; flex-wrap: wrap; gap: 8px; }
.related-chip {
  padding: 6px 14px; border-radius: var(--radius-lg);
  background: var(--card-bg); border: 1px solid var(--border);
  font-size: 13px; font-style: italic; cursor: pointer;
  transition: all var(--transition);
}
.related-chip:hover { background: var(--card-hover); border-color: var(--accent); }

/* ── Group page ─────────────────────────────────────── */
.grupo-header { margin-bottom: 24px; }
.grupo-header h1 { font-size: 32px; font-weight: 900; color: var(--white); }
.grupo-header p  { font-size: 14px; color: var(--text-dim); margin-top: 4px; }
.grupo-description { line-height: 1.7; margin-bottom: 28px; }
.subgrupos-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 10px; margin-bottom: 28px;
}
.subgrupo-card {
  padding: 14px; background: var(--card-bg); border: 1px solid var(--border);
  border-radius: var(--radius); cursor: pointer;
  transition: background var(--transition), border-color var(--transition);
}
.subgrupo-card:hover { background: var(--card-hover); border-color: var(--accent); }
.subgrupo-card h4 { font-size: 14px; font-weight: 700; color: var(--white); }
.subgrupo-card p  { font-size: 11px; color: var(--text-dim); margin-top: 4px; }
.dino-cards-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 10px;
}
.dino-card-md {
  padding: 14px; background: var(--card-bg); border: 1px solid var(--border);
  border-radius: var(--radius); cursor: pointer;
  transition: background var(--transition), border-color var(--transition);
}
.dino-card-md:hover { background: var(--card-hover); border-color: var(--accent); }
.dino-card-md h4 { font-size: 13px; font-weight: 700; font-style: italic; color: var(--white); }
.dino-card-md p  { font-size: 11px; color: var(--text-dim); margin-top: 4px; }

/* ── Utilities ──────────────────────────────────────── */
.section-gap { margin-bottom: 32px; }
.not-found { text-align: center; padding: 60px 20px; color: var(--text-dim); }
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Responsive ─────────────────────────────────────── */
@media (max-width: 600px) {
  .nav-links { display: none; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .explore-header { flex-direction: column; align-items: flex-start; }
  .subgrupos-grid { grid-template-columns: repeat(2, 1fr); }
}
```

- [ ] **Step 3: Create .gitignore**

```
.DS_Store
.superpowers/
```

- [ ] **Step 4: Open index.html via a local server and verify the nav renders**

```bash
cd /Users/aechavarrias/Desktop/dinoexplorer && npx serve .
```

Expected: nav bar visible, dark green background, no console errors.

- [ ] **Step 5: Commit**

```bash
git add index.html style.css .gitignore
git commit -m "feat: scaffold — shell HTML, full CSS theme"
```

---

## Task 2 — Data layer: data.js

**Files:**
- Create: `data.js`

Structure: `DINOS` array (45+ entries), `GRUPOS` object (26 entries), 5 helper functions.

Each dino shape:
```js
{
  id, nombre, nombreComun,
  emoji,        // single emoji for visual representation
  taxonomia: { clado, orden, suborden, familia },
  periodo,      // 'Triásico' | 'Jurásico' | 'Cretácico'
  rangoMa,      // [from, to]  — millions of years ago
  dieta,        // 'Carnívoro' | 'Herbívoro' | 'Omnívoro' | 'Piscívoro'
  longitud,     // meters (number)
  peso,         // kg (number)
  alturaFosil,  // meters at hip/shoulder (number | null)
  region,       // string[]
  descubrimiento: { año, autor },
  descripcion,  // string — 2-3 sentences, plain text
  curiosidad,   // string — one fun fact
}
```

Each grupo shape:
```js
{
  id, nombre,
  descripcion,  // 2 sentences
  padre,        // grupo id | null
  hijos,        // grupo id[]  (leaf families have empty array)
}
```

Helper functions:
```js
export function getDinoById(id)          // DINOS.find(d => d.id === id) ?? null
export function getGrupoById(id)         // GRUPOS[id] ?? null
export function getDinosByFamilia(id)    // DINOS.filter(d => d.taxonomia.familia === id)
export function getDinosByPeriodo(p)     // DINOS.filter(d => d.periodo === p)
export function getDinosByGrupo(grupoId) // DINOS.filter(d => Object.values(d.taxonomia).includes(grupoId))
export function getBreadcrumb(grupoId)   // walks GRUPOS[id].padre chain → returns grupo[] root-first
```

Species list by period (fill descriptions during implementation):

**Triásico (5):** Eoraptor, Herrerasaurus, Coelophysis, Plateosaurus, Liliensternus

**Jurásico (15):** Brachiosaurus, Diplodocus, Apatosaurus, Camarasaurus, Giraffatitan, Stegosaurus, Kentrosaurus, Allosaurus, Saurophaganax, Ceratosaurus, Dilophosaurus, Megalosaurus, Compsognathus, Archaeopteryx, Camptosaurus

**Cretácico (25+):** Tyrannosaurus rex, Albertosaurus, Tarbosaurus, Velociraptor, Deinonychus, Utahraptor, Spinosaurus, Baryonyx, Giganotosaurus, Carcharodontosaurus, Carnotaurus, Argentinosaurus, Triceratops, Protoceratops, Styracosaurus, Pachyrhinosaurus, Parasaurolophus, Edmontosaurus, Iguanodon, Ankylosaurus, Euoplocephalus, Pachycephalosaurus, Therizinosaurus, Gallimimus, Oviraptor

- [ ] **Step 1: Write data.js** — write every DINO entry and every GRUPO entry with accurate data and descriptions (no placeholders).

- [ ] **Step 2: Verify in browser console**

Open index.html via serve, then in DevTools console:
```js
import('/data.js').then(m => console.log(m.DINOS.length, Object.keys(m.GRUPOS).length))
```
Expected: `45 26` (or more)

- [ ] **Step 3: Commit**

```bash
git add data.js
git commit -m "feat: data layer — 45+ dinosaurs, 26 taxonomic groups"
```

---

## Task 3 — Router: app.js

**Files:**
- Create: `app.js`

- [ ] **Step 1: Write app.js**

```js
import { mount as mountHome }    from './views/home.js';
import { mount as mountExplore } from './views/explore.js';
import { mount as mountDino }    from './views/dino.js';
import { mount as mountGrupo }   from './views/grupo.js';
import { DINOS } from './data.js';

const app = document.getElementById('app');

function parseHash() {
  const raw = location.hash.replace('#/', '') || '';
  const [view, param] = raw.split('/');
  return { view: view || '', param: param || '' };
}

function route() {
  const { view, param } = parseHash();
  if      (view === '')          mountHome(app);
  else if (view === 'explorar')  mountExplore(app);
  else if (view === 'dino'  && param) mountDino(app, param);
  else if (view === 'grupo' && param) mountGrupo(app, param);
  else mountHome(app);
  window.scrollTo(0, 0);
}

function initSearch() {
  const btn     = document.getElementById('search-btn');
  const overlay = document.getElementById('search-overlay');
  const input   = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  const closeBtn = document.getElementById('search-close');

  const open  = () => { overlay.classList.remove('hidden'); input.focus(); };
  const close = () => { overlay.classList.add('hidden'); input.value = ''; results.innerHTML = ''; };

  btn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    if (!q) { results.innerHTML = ''; return; }
    const hits = DINOS.filter(d =>
      d.nombre.toLowerCase().includes(q) ||
      (d.nombreComun && d.nombreComun.toLowerCase().includes(q))
    ).slice(0, 10);
    results.innerHTML = hits.length
      ? hits.map(d => `
          <a href="#/dino/${d.id}" class="search-result-item">
            <span class="search-result-name">${d.nombre}</span>
            <span class="search-result-meta">${d.nombreComun ? d.nombreComun + ' · ' : ''}${d.periodo}</span>
          </a>`).join('')
      : '<p class="search-no-results">Sin resultados</p>';
  });

  results.addEventListener('click', e => {
    if (e.target.closest('.search-result-item')) close();
  });
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', () => { initSearch(); route(); });
```

- [ ] **Step 2: Create stub views so the router doesn't throw**

Create `views/home.js`, `views/explore.js`, `views/dino.js`, `views/grupo.js` each with:
```js
export function mount(container) {
  container.innerHTML = '<p style="padding:40px;color:#95d5b2">Vista en construcción</p>';
}
```
(dino.js and grupo.js accept a second `id` param)

- [ ] **Step 3: Verify routing works**

Open via serve. Navigate to `#/`, `#/explorar`, `#/dino/test`, `#/grupo/test`.
Expected: stub text for each route, no console errors. Search overlay opens/closes.

- [ ] **Step 4: Commit**

```bash
git add app.js views/home.js views/explore.js views/dino.js views/grupo.js
git commit -m "feat: hash router + search overlay wired"
```

---

## Task 4 — Home view: views/home.js

**Files:**
- Modify: `views/home.js`

Featured dino IDs (hardcoded in home.js):
```js
const FEATURED = ['tyrannosaurus-rex','triceratops','brachiosaurus','velociraptor',
                   'stegosaurus','spinosaurus','ankylosaurus','diplodocus'];
```

- [ ] **Step 1: Write views/home.js**

```js
import { getDinoById, DINOS, GRUPOS } from '../data.js';

const FEATURED = ['tyrannosaurus-rex','triceratops','brachiosaurus','velociraptor',
                  'stegosaurus','spinosaurus','ankylosaurus','diplodocus'];

export function mount(container) {
  const featured = FEATURED.map(id => getDinoById(id)).filter(Boolean);
  const familias = new Set(DINOS.map(d => d.taxonomia.familia)).size;

  container.innerHTML = `
    <section class="hero">
      <p class="hero-eyebrow">Explora 230 millones de años</p>
      <h1>El árbol de vida<br>de los dinosaurios</h1>
      <p class="hero-sub">${DINOS.length} especies · Árbol taxonómico · Línea de tiempo</p>
      <div class="hero-ctas">
        <a href="#/explorar" class="btn-primary">Explorar el árbol →</a>
        <a href="#/explorar" class="btn-secondary">Período geológico</a>
      </div>
    </section>

    <section class="section-gap">
      <p class="section-title">Dinosaurios destacados</p>
      <div class="dino-cards-scroll">
        ${featured.map(d => `
          <a href="#/dino/${d.id}" class="dino-card-sm">
            <div class="dino-emoji">${d.emoji}</div>
            <div class="dino-name">${d.nombreComun || d.nombre.split(' ')[0]}</div>
            <div class="dino-period">${d.periodo}</div>
          </a>`).join('')}
      </div>
    </section>

    <div class="stats-bar">
      <div class="stat"><span class="stat-number">${DINOS.length}+</span><span class="stat-label">Especies</span></div>
      <div class="stat"><span class="stat-number">3</span><span class="stat-label">Períodos</span></div>
      <div class="stat"><span class="stat-number">${familias}</span><span class="stat-label">Familias</span></div>
      <div class="stat"><span class="stat-number">230M</span><span class="stat-label">Años de historia</span></div>
    </div>
  `;
}
```

- [ ] **Step 2: Verify in browser**

Navigate to `#/`. Expected: hero text visible, 8 featured dino cards scroll horizontally, stats bar shows real counts.

- [ ] **Step 3: Commit**

```bash
git add views/home.js
git commit -m "feat: home view — hero, featured dinos, stats bar"
```

---

## Task 5 — Explore view: views/explore.js

**Files:**
- Modify: `views/explore.js`

- [ ] **Step 1: Write views/explore.js**

```js
import { DINOS, GRUPOS, getDinosByPeriodo, getGrupoById } from '../data.js';

export function mount(container) {
  container.innerHTML = `
    <div class="explore-header">
      <h2>Explora los dinosaurios</h2>
      <div class="mode-toggle">
        <button class="mode-btn active" data-mode="arbol">🌿 Árbol</button>
        <button class="mode-btn"        data-mode="cronologia">⏳ Cronología</button>
      </div>
    </div>
    <div id="explore-view">
      ${renderTree()}
    </div>
  `;

  // Toggle
  container.querySelector('.mode-toggle').addEventListener('click', e => {
    const btn = e.target.closest('.mode-btn');
    if (!btn) return;
    container.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const view = container.querySelector('#explore-view');
    view.innerHTML = btn.dataset.mode === 'arbol' ? renderTree() : renderTimeline();
    if (btn.dataset.mode === 'arbol') initTree(container);
  });

  initTree(container);
}

// ── Tree ────────────────────────────────────────────────

function renderTree() {
  return `<ul class="tree-root">${buildNodeHTML('dinosauria')}</ul>`;
}

function buildNodeHTML(grupoId) {
  const g = getGrupoById(grupoId);
  if (!g) return '';
  const childGroups = g.hijos || [];
  const leafDinos   = DINOS.filter(d => d.taxonomia.familia === grupoId);
  const hasChildren = childGroups.length > 0 || leafDinos.length > 0;
  return `
    <li class="tree-node">
      <div class="tree-label${hasChildren ? '' : ' is-leaf'}" data-group="${grupoId}">
        <span class="tree-arrow">${hasChildren ? '▶' : '·'}</span>
        <span class="tree-node-name">${g.nombre}</span>
        <a href="#/grupo/${grupoId}" class="tree-info-link" data-no-toggle>ver grupo →</a>
      </div>
      ${hasChildren ? `
        <ul class="tree-children" id="tc-${grupoId}">
          ${childGroups.map(id => buildNodeHTML(id)).join('')}
          ${leafDinos.map(d => `
            <li class="tree-dino-leaf">
              <a href="#/dino/${d.id}" class="tree-dino-link">
                <em>${d.nombre}</em>${d.nombreComun ? ` — ${d.nombreComun}` : ''}
              </a>
            </li>`).join('')}
        </ul>` : ''}
    </li>`;
}

function initTree(container) {
  container.querySelector('.tree-root')?.addEventListener('click', e => {
    if (e.target.closest('[data-no-toggle]')) return;
    const label = e.target.closest('.tree-label:not(.is-leaf)');
    if (!label) return;
    const id       = label.dataset.group;
    const children = container.querySelector(`#tc-${id}`);
    const arrow    = label.querySelector('.tree-arrow');
    if (!children) return;
    const open = children.classList.toggle('expanded');
    arrow.textContent = open ? '▼' : '▶';
  });
}

// ── Timeline ────────────────────────────────────────────

function renderTimeline() {
  const periodos = [
    { key: 'Triásico',  icon: '🌋', rango: '252 – 201 Ma' },
    { key: 'Jurásico',  icon: '🌿', rango: '201 – 145 Ma' },
    { key: 'Cretácico', icon: '🦖', rango: '145 – 66 Ma'  },
  ];
  return `
    <div class="timeline">
      ${periodos.map(p => {
        const dinos = getDinosByPeriodo(p.key);
        return `
          <div class="periodo-block">
            <div class="period-header" data-period="${p.key}">
              <span class="period-icon">${p.icon}</span>
              <div class="period-info">
                <h3>${p.key}</h3>
                <p>${p.rango}</p>
              </div>
              <span class="period-count">${dinos.length} especies</span>
              <span class="period-arrow">▼</span>
            </div>
            <div class="period-body expanded" id="pb-${p.key}">
              <div class="dino-chips">
                ${dinos.map(d => `
                  <a href="#/dino/${d.id}" class="dino-chip">
                    ${d.emoji} ${d.nombreComun || d.nombre}
                  </a>`).join('')}
              </div>
            </div>
          </div>`;
      }).join('')}
    </div>`;
}
```

After writing, add the timeline toggle listener (event delegation on `.timeline`):

```js
// append inside mount(), after the tree/timeline toggle listener:
container.querySelector('#explore-view').addEventListener('click', e => {
  const header = e.target.closest('.period-header');
  if (!header) return;
  const body  = document.getElementById(`pb-${header.dataset.period}`);
  const arrow = header.querySelector('.period-arrow');
  const open  = body.classList.toggle('expanded');
  arrow.classList.toggle('open', open);
});
```

- [ ] **Step 2: Verify in browser**

Navigate to `#/explorar`.
- Tree mode: click "Dinosauria" → expands two children. Click "Theropoda" → expands families. Click a leaf dino link → navigates to dino page.
- Toggle to Cronología: three periods visible and expanded. Click a chip → navigates. Click a period header → collapses.

- [ ] **Step 3: Commit**

```bash
git add views/explore.js
git commit -m "feat: explore view — interactive tree + timeline with toggle"
```

---

## Task 6 — Dino page: views/dino.js

**Files:**
- Modify: `views/dino.js`

- [ ] **Step 1: Write views/dino.js**

```js
import { getDinoById, getDinosByFamilia, getBreadcrumb } from '../data.js';

export function mount(container, id) {
  const dino = getDinoById(id);
  if (!dino) {
    container.innerHTML = `<div class="not-found"><h2>Dinosaurio no encontrado</h2><a href="#/">← Volver al inicio</a></div>`;
    return;
  }

  const crumbs    = getBreadcrumb(dino.taxonomia.familia);
  const relatives = getDinosByFamilia(dino.taxonomia.familia).filter(d => d.id !== dino.id);

  container.innerHTML = `
    <nav class="breadcrumb">
      ${crumbs.map(g => `<a href="#/grupo/${g.id}">${g.nombre}</a> <span>›</span>`).join(' ')}
      <span>${dino.nombre}</span>
    </nav>

    <header class="dino-header">
      <div class="sci-name">${dino.emoji} ${dino.nombre}</div>
      ${dino.nombreComun ? `<div class="common-name">${dino.nombreComun}</div>` : ''}
      <div class="dino-tags">
        <span class="dino-tag">${dino.periodo}</span>
        <span class="dino-tag">${dino.dieta}</span>
        <span class="dino-tag">${dino.taxonomia.familia}</span>
      </div>
    </header>

    <div class="stats-grid">
      <div class="stat-card"><div class="label">Longitud</div><div class="value">${dino.longitud} m</div></div>
      <div class="stat-card"><div class="label">Peso</div><div class="value">${dino.peso >= 1000 ? (dino.peso/1000).toFixed(1)+' t' : dino.peso+' kg'}</div></div>
      <div class="stat-card"><div class="label">Dieta</div><div class="value">${dino.dieta}</div></div>
      <div class="stat-card"><div class="label">Período</div><div class="value">${dino.rangoMa[0]}–${dino.rangoMa[1]} Ma</div></div>
      <div class="stat-card"><div class="label">Región</div><div class="value">${dino.region.join(', ')}</div></div>
      <div class="stat-card"><div class="label">Descubierto</div><div class="value">${dino.descubrimiento.año}</div></div>
    </div>

    <div class="dino-description">
      ${dino.descripcion.split('\n').filter(Boolean).map(p => `<p>${p}</p>`).join('')}
    </div>

    <div class="fun-fact">
      <div class="fun-label">💡 ¿SABÍAS QUE?</div>
      <p>${dino.curiosidad}</p>
    </div>

    ${relatives.length ? `
      <div class="related-section">
        <h3>De la misma familia</h3>
        <div class="related-chips">
          ${relatives.map(r => `<a href="#/dino/${r.id}" class="related-chip">${r.emoji} ${r.nombreComun || r.nombre}</a>`).join('')}
        </div>
      </div>` : ''}
  `;
}
```

- [ ] **Step 2: Verify in browser**

Navigate to `#/dino/tyrannosaurus-rex`.
Expected: breadcrumb shows Dinosauria › Saurischia › Theropoda › Tyrannosauridae, stats grid with 6 cards, description, fun fact, related family chips.

- [ ] **Step 3: Verify not-found state**

Navigate to `#/dino/fake-dino`.
Expected: "Dinosaurio no encontrado" message.

- [ ] **Step 4: Commit**

```bash
git add views/dino.js
git commit -m "feat: dino page — stats, breadcrumb, description, related species"
```

---

## Task 7 — Group page: views/grupo.js

**Files:**
- Modify: `views/grupo.js`

- [ ] **Step 1: Write views/grupo.js**

```js
import { getGrupoById, getDinosByGrupo, getDinosByFamilia, getBreadcrumb, GRUPOS } from '../data.js';

export function mount(container, id) {
  const grupo = getGrupoById(id);
  if (!grupo) {
    container.innerHTML = `<div class="not-found"><h2>Grupo no encontrado</h2><a href="#/">← Volver al inicio</a></div>`;
    return;
  }

  const crumbs     = getBreadcrumb(id);
  const childGroups = (grupo.hijos || []).map(getGrupoById).filter(Boolean);
  const directDinos = getDinosByFamilia(id);  // dinos whose familia === this group
  const allDinos    = getDinosByGrupo(id);    // all dinos under this clade

  container.innerHTML = `
    <nav class="breadcrumb">
      ${crumbs.slice(0,-1).map(g => `<a href="#/grupo/${g.id}">${g.nombre}</a> <span>›</span>`).join(' ')}
      <span>${grupo.nombre}</span>
    </nav>

    <header class="grupo-header">
      <h1>${grupo.nombre}</h1>
      <p>${allDinos.length} especies en este grupo</p>
    </header>

    <p class="grupo-description">${grupo.descripcion}</p>

    ${childGroups.length ? `
      <div class="section-gap">
        <p class="section-title">Subgrupos</p>
        <div class="subgrupos-grid">
          ${childGroups.map(g => `
            <a href="#/grupo/${g.id}" class="subgrupo-card">
              <h4>${g.nombre}</h4>
              <p>${getDinosByGrupo(g.id).length} especies</p>
            </a>`).join('')}
        </div>
      </div>` : ''}

    ${directDinos.length ? `
      <div class="section-gap">
        <p class="section-title">Especies</p>
        <div class="dino-cards-grid">
          ${directDinos.map(d => `
            <a href="#/dino/${d.id}" class="dino-card-md">
              <h4>${d.emoji} ${d.nombre}</h4>
              <p>${d.nombreComun ? d.nombreComun + ' · ' : ''}${d.periodo}</p>
            </a>`).join('')}
        </div>
      </div>` : ''}
  `;
}
```

- [ ] **Step 2: Verify in browser**

Navigate to `#/grupo/theropoda`.
Expected: breadcrumb, "X especies en este grupo", list of subgroups as cards, no direct-dinos section (Theropoda has no familia=theropoda dinos, only sub-families).

Navigate to `#/grupo/tyrannosauridae`.
Expected: species grid shows T. rex, Albertosaurus, Tarbosaurus.

- [ ] **Step 3: Commit**

```bash
git add views/grupo.js
git commit -m "feat: group page — breadcrumb, subgroups, species grid"
```

---

## Task 8 — GitHub Pages setup

**Files:**
- Create: `README.md` (brief, just deploy instructions)

- [ ] **Step 1: Create a GitHub repo and push**

```bash
# In /Users/aechavarrias/Desktop/dinoexplorer
git remote add origin https://github.com/<YOUR_USER>/dinoexplorer.git
git push -u origin main
```

- [ ] **Step 2: Enable GitHub Pages**

Go to repo Settings → Pages → Source: "Deploy from branch" → Branch: `main` / `/ (root)` → Save.

- [ ] **Step 3: Verify live URL**

After ~1 min: `https://<YOUR_USER>.github.io/dinoexplorer/`
Expected: site loads, navigation works, at least one dino page renders correctly.

- [ ] **Step 4: Commit README**

```bash
cat > README.md << 'EOF'
# DinoExplorer

Wiki interactiva de dinosaurios con árbol taxonómico y línea de tiempo geológica.

**Live:** https://<YOUR_USER>.github.io/dinoexplorer/

## Desarrollo local

```bash
npx serve .
```

## Agregar un dinosaurio

Añade una entrada al array `DINOS` en `data.js` y haz push a `main`.
EOF
git add README.md
git commit -m "docs: README with deploy and contribution instructions"
```

---

## Checklist de verificación final

- [ ] `#/` — hero, 8 featured cards, stats bar
- [ ] `#/explorar` (árbol) — Dinosauria expande, navegar hasta un dino leaf
- [ ] `#/explorar` (cronología) — 3 períodos, chips clickeables, colapsar sección
- [ ] `#/dino/tyrannosaurus-rex` — stats grid, breadcrumb, fun fact, relatives
- [ ] `#/grupo/theropoda` — subgrupos listados, conteo correcto
- [ ] Búsqueda: escribir "raptor" → aparecen Velociraptor, Utahraptor, Deinonychus
- [ ] Mobile (360px): nav sin links, stats grid 2 col, cards scrollean
