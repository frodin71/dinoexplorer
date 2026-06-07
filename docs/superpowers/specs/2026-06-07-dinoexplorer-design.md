# DinoExplorer — Design Spec
**Date:** 2026-06-07

## Overview

A static wiki-style website for learning about dinosaurs, hosted on GitHub Pages. Combines an interactive taxonomic tree with a geological timeline so users can explore 45+ dinosaur species from ancestor to individual. Designed to be approachable for all ages while remaining scientifically accurate.

---

## Visual Style

Adventure/nature theme:
- Background: deep greens (`#081c15` → `#1b4332`)
- Accent: `#52b788` (bright green), `#95d5b2` (soft green)
- Text: `#d8f3dc` (light), `#ffffff` (headings)
- Typography: sans-serif, bold headings, italic for scientific names
- Feel: expedition journal meets natural history museum

---

## Architecture

Single-page application with hash-based routing. No build process — pure vanilla HTML/CSS/JS deployed directly to GitHub Pages.

```
dinoexplorer/
├── index.html        ← single entry point
├── style.css         ← adventure theme
├── app.js            ← router + view rendering
├── data.js           ← all dinosaur data (45+ species)
└── assets/
    └── icons/        ← optional SVG silhouettes
```

### Routes

| Hash | View |
|------|------|
| `#/` | Home |
| `#/explorar` | Tree + Timeline (with toggle) |
| `#/dino/:id` | Individual dinosaur page |
| `#/grupo/:id` | Taxonomic group page |

---

## Data Model

Each dinosaur entry in `data.js`:

```js
{
  id: "tyrannosaurus-rex",           // slug for routing
  nombre: "Tyrannosaurus rex",       // scientific name
  nombreComun: "T. rex",             // common name
  taxonomia: {
    clado: "Dinosauria",
    orden: "Saurischia",
    suborden: "Theropoda",
    familia: "Tyrannosauridae",
    genero: "Tyrannosaurus"
  },
  periodo: "Cretácico",
  rangoMa: [68, 66],                 // millions of years ago
  dieta: "Carnívoro",
  longitud: 12,                      // meters
  peso: 9000,                        // kg
  alturaFosil: 4,                    // meters at hip
  region: ["América del Norte"],
  descubrimiento: { año: 1902, autor: "Barnum Brown" },
  descripcion: "...",                // 2-3 paragraphs, accessible but accurate
  curiosidad: "...",                 // one fun fact
}
```

### Taxonomic tree structure (for `data.js`)

```
Dinosauria
├── Saurischia
│   ├── Sauropodomorpha → Sauropoda
│   │   ├── Diplodocidae        (Diplodocus, Apatosaurus)
│   │   ├── Brachiosauridae     (Brachiosaurus, Giraffatitan)
│   │   └── Titanosauria        (Argentinosaurus, Saltasaurus)
│   └── Theropoda
│       ├── Megalosauridae      (Megalosaurus, Spinosaurus, Baryonyx)
│       ├── Allosauridae        (Allosaurus, Saurophaganax)
│       ├── Carcharodontosauridae (Giganotosaurus, Carcharodontosaurus)
│       ├── Abelisauridae       (Carnotaurus, Majungasaurus)
│       ├── Ceratosauria        (Ceratosaurus, Dilophosaurus)
│       ├── Tyrannosauridae     (T. rex, Albertosaurus, Tarbosaurus)
│       ├── Ornithomimosauria   (Gallimimus, Struthiomimus)
│       ├── Therizinosauridae   (Therizinosaurus)
│       ├── Oviraptoridae       (Oviraptor, Citipati)
│       └── Dromaeosauridae     (Velociraptor, Deinonychus, Utahraptor)
└── Ornithischia
    ├── Thyreophora
    │   ├── Stegosauria         (Stegosaurus, Kentrosaurus)
    │   └── Ankylosauria        (Ankylosaurus, Euoplocephalus, Sauropelta)
    ├── Ornithopoda             (Iguanodon, Parasaurolophus, Edmontosaurus, Hypsilophodon)
    └── Marginocephalia
        ├── Ceratopsia          (Triceratops, Protoceratops, Styracosaurus, Pachyrhinosaurus)
        └── Pachycephalosauria  (Pachycephalosaurus, Stygimoloch)
```

Also included: early dinosaurs outside main clades — Eoraptor, Herrerasaurus, Coelophysis, Plateosaurus.

---

## Pages

### 1. Home (`#/`)

- Nav bar: logo + search button (opens an inline text filter over all 45+ species by name)
- Hero section: title, subtitle, two CTAs ("Explorar el árbol", "Período geológico")
- Featured dinosaurs: horizontal scroll of 6–8 cards with emoji icon + name + period
- Stats bar: total species, periods, families, millions of years covered

### 2. Explore (`#/explorar`)

- Toggle at top: **Árbol** / **Cronología**
- **Árbol mode:** Interactive DOM tree (no SVG library — pure HTML elements + CSS lines). Starts collapsed at root (Dinosauria), expands on click level by level. Clicking a leaf node navigates to `#/dino/:id`. Clicking an intermediate node navigates to `#/grupo/:id`.
- **Cronología mode:** Vertical timeline. Three collapsible sections (Triásico, Jurásico, Cretácico) each showing dinosaurs from that period as clickable chips.

### 3. Dinosaur page (`#/dino/:id`)

- Breadcrumb: Dinosauria → Order → Suborder → Family → Species
- Header: scientific name (italic), common name, period + family tags
- Stats grid (6 cards): Longitud, Peso, Dieta, Período (Ma range), Región, Descubierto
- Description: 2–3 paragraphs — accessible language, scientific accuracy
- "¿Sabías que?" highlight block (fun fact)
- "De la misma familia" — chips linking to related species

### 4. Group page (`#/grupo/:id`)

- Name + description of the taxonomic group
- List of all member species as cards
- Position in the tree (parent + children groups)

---

## Taxonomic Group Pages

One page per intermediate node in the tree (e.g., Theropoda, Sauropoda, Tyrannosauridae). Shows:
- Group name + clade description
- Child groups or species
- Link back up the tree

---

## Scope — 45+ Species

**Triásico (5):** Eoraptor, Herrerasaurus, Coelophysis, Plateosaurus, Liliensternus

**Jurásico (15):** Brachiosaurus, Diplodocus, Apatosaurus, Camarasaurus, Stegosaurus, Kentrosaurus, Allosaurus, Ceratosaurus, Dilophosaurus, Megalosaurus, Compsognathus, Archaeopteryx, Camptosaurus, Giraffatitan, Saurophaganax

**Cretácico (25+):** Tyrannosaurus rex, Albertosaurus, Tarbosaurus, Velociraptor, Deinonychus, Utahraptor, Triceratops, Protoceratops, Styracosaurus, Pachyrhinosaurus, Spinosaurus, Baryonyx, Giganotosaurus, Carcharodontosaurus, Carnotaurus, Argentinosaurus, Parasaurolophus, Edmontosaurus, Iguanodon, Ankylosaurus, Euoplocephalus, Pachycephalosaurus, Therizinosaurus, Gallimimus, Oviraptor

---

## Deployment

- GitHub repository: `dinoexplorer`
- Deploy from `main` branch, `/docs` folder (or `gh-pages` branch)
- No build step — push HTML/CSS/JS directly
- URL pattern: `https://<user>.github.io/dinoexplorer/#/dino/tyrannosaurus-rex`

---

## Out of Scope (v1)

- Images or illustrations of dinosaurs (emoji + silhouette SVGs only)
- User accounts or favorites
- External API calls
- Comments or community features
- Non-Spanish language support (site is in Spanish)
