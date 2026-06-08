import { getDinoById, DINOS } from '../data.js';

const FEATURED = [
  'tyrannosaurus-rex', 'triceratops', 'brachiosaurus', 'velociraptor',
  'stegosaurus', 'spinosaurus', 'ankylosaurus', 'diplodocus'
];

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
      <div class="stat">
        <span class="stat-number">${DINOS.length}+</span>
        <span class="stat-label">Especies</span>
      </div>
      <div class="stat">
        <span class="stat-number">3</span>
        <span class="stat-label">Períodos</span>
      </div>
      <div class="stat">
        <span class="stat-number">${familias}</span>
        <span class="stat-label">Familias</span>
      </div>
      <div class="stat">
        <span class="stat-number">230M</span>
        <span class="stat-label">Años de historia</span>
      </div>
    </div>
  `;
}
