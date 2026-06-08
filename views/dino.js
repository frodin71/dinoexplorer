import { getDinoById, getDinosByFamilia, getBreadcrumb } from '../data.js';

export function mount(container, id) {
  const dino = getDinoById(id);
  if (!dino) {
    container.innerHTML = `
      <div class="not-found">
        <h2>Dinosaurio no encontrado</h2>
        <p>El ID "${id}" no existe en nuestra base de datos.</p>
        <a href="#/" class="btn-primary" style="margin-top:16px;display:inline-block">← Volver al inicio</a>
      </div>`;
    return;
  }

  const crumbs    = getBreadcrumb(dino.taxonomia.familia);
  const relatives = getDinosByFamilia(dino.taxonomia.familia).filter(d => d.id !== dino.id);
  const formatPeso = kg => kg >= 1000 ? (kg / 1000).toFixed(1) + ' t' : kg + ' kg';

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

    <div id="dino-image-slot"></div>

    <div class="stats-grid">
      <div class="stat-card"><div class="label">Longitud</div><div class="value">${dino.longitud} m</div></div>
      <div class="stat-card"><div class="label">Peso</div><div class="value">${formatPeso(dino.peso)}</div></div>
      <div class="stat-card"><div class="label">Dieta</div><div class="value">${dino.dieta}</div></div>
      <div class="stat-card"><div class="label">Período</div><div class="value">${dino.rangoMa[0]}–${dino.rangoMa[1]} Ma</div></div>
      <div class="stat-card"><div class="label">Región</div><div class="value">${dino.region.join(', ')}</div></div>
      <div class="stat-card"><div class="label">Descubierto</div><div class="value">${dino.descubrimiento.año}</div></div>
    </div>

    <div class="dino-description">
      ${dino.descripcion.split('\n').filter(p => p.trim()).map(p => `<p>${p}</p>`).join('')}
    </div>

    <div class="fun-fact">
      <div class="fun-label">💡 ¿SABÍAS QUE?</div>
      <p>${dino.curiosidad}</p>
    </div>

    ${relatives.length ? `
      <div class="related-section">
        <h3>De la misma familia</h3>
        <div class="related-chips">
          ${relatives.map(r => `
            <a href="#/dino/${r.id}" class="related-chip">
              ${r.emoji} ${r.nombreComun || r.nombre}
            </a>`).join('')}
        </div>
      </div>` : ''}
  `;

  fetchGallery(dino, container);
}

// ── Wikipedia gallery ────────────────────────────────────────────────────────

const EXCLUDE = /icon|logo|flag|commons|wikidata|wikimedia|button|arrow|star|edit|pictogram|symbol|silhouette/i;

async function fetchGallery(dino, container) {
  const slot = container.querySelector('#dino-image-slot');
  if (!slot) return;

  const title = dino.nombre.replace(/ /g, '_');
  const api = `https://en.wikipedia.org/w/api.php?action=query` +
    `&generator=images&titles=${encodeURIComponent(title)}&gimlimit=30` +
    `&prop=imageinfo&iiprop=url|mime|size|thumbmime&iiurlwidth=1200` +
    `&format=json&origin=*`;

  try {
    const res  = await fetch(api);
    const data = await res.json();
    const pages = Object.values(data.query?.pages || {});

    const images = pages
      .filter(p => p.imageinfo?.[0] && !EXCLUDE.test(p.title))
      .map(p => ({ title: p.title.replace('File:', ''), ...p.imageinfo[0] }))
      .filter(img =>
        (img.mime === 'image/jpeg' || img.mime === 'image/png') &&
        img.size > 20000
      )
      .slice(0, 8);

    if (!images.length) return;

    slot.innerHTML = `
      <div class="gallery-header">
        <span class="section-title">Galería de imágenes</span>
        <span class="gallery-hint">Toca para ampliar</span>
      </div>
      <div class="dino-gallery">
        ${images.map((img, i) => `
          <figure class="dino-gallery-item ${i === 0 ? 'featured' : ''}"
                  data-full="${img.url}"
                  data-caption="${img.title}">
            <img src="${img.thumburl || img.url}"
                 alt="${img.title}" loading="lazy">
          </figure>`).join('')}
      </div>
      <p class="gallery-credit">Imágenes vía Wikipedia · Wikimedia Commons</p>
    `;

    initLightbox(slot);

  } catch (_) {}
}

// ── Lightbox ─────────────────────────────────────────────────────────────────

function initLightbox(root) {
  root.querySelectorAll('.dino-gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const src     = item.dataset.full;
      const caption = item.dataset.caption;

      const lb = document.createElement('div');
      lb.className = 'lightbox';
      lb.innerHTML = `
        <button class="lightbox-close" aria-label="Cerrar">✕</button>
        <img src="${src}" alt="${caption}">
        <p class="lightbox-caption">${caption}</p>
      `;

      const close = () => lb.remove();
      lb.querySelector('.lightbox-close').addEventListener('click', close);
      lb.addEventListener('click', e => { if (e.target === lb) close(); });

      const onKey = e => { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onKey); } };
      document.addEventListener('keydown', onKey);

      document.body.appendChild(lb);
    });
  });
}
