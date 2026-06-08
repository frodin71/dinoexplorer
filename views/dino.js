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

// Applied only to filenames, not URLs (all WP image URLs contain "wikimedia")
const EXCLUDE_TITLE = /icon|logo|flag|wikidata|button|arrow|star|edit|pictogram|symbol|silhouette|map|range|distribution|scale|comparison/i;

async function fetchGallery(dino, container) {
  const slot = container.querySelector('#dino-image-slot');
  if (!slot) return;

  const wikiTitle = dino.nombre.replace(/ /g, '_');
  const images = [];

  // Step 1: REST summary API — featured image (isolated so failures don't kill it)
  try {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikiTitle)}`
    );
    const s = await res.json();
    const url   = s.originalimage?.source || s.thumbnail?.source;
    const thumb = s.thumbnail?.source;
    if (url) images.push({ title: dino.nombre, url, thumburl: thumb || url });
  } catch (_) {}

  // Steps 2+3: prop=images list → batch imageinfo for extra photos
  try {
    const listRes  = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query` +
      `&titles=${encodeURIComponent(wikiTitle)}&prop=images&imlimit=50&redirects=1` +
      `&format=json&origin=*`
    );
    const listData = await listRes.json();
    const page     = Object.values(listData.query?.pages || {})[0];
    const files    = (page?.images || [])
      .map(img => img.title)
      .filter(t => !EXCLUDE_TITLE.test(t));

    if (files.length) {
      const infoRes  = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query` +
        `&titles=${files.slice(0, 20).map(encodeURIComponent).join('|')}` +
        `&prop=imageinfo&iiprop=url|mime|size&iiurlwidth=1200` +
        `&format=json&origin=*`
      );
      const infoData = await infoRes.json();
      const extras   = Object.values(infoData.query?.pages || {})
        .filter(p => p.imageinfo?.[0]?.url)
        .map(p => ({
          title:    p.title.replace('File:', '').replace(/_/g, ' '),
          url:      p.imageinfo[0].url,
          thumburl: p.imageinfo[0].thumburl || p.imageinfo[0].url,
          mime:     p.imageinfo[0].mime,
          size:     p.imageinfo[0].size,
        }))
        .filter(img =>
          (img.mime === 'image/jpeg' || img.mime === 'image/png') &&
          img.size > 30000 &&
          !EXCLUDE_TITLE.test(img.title)
        );

      // Deduplicate against featured image already in array
      const featuredName = images[0]?.url.split('/').pop().split('?')[0] ?? '';
      for (const img of extras) {
        if (images.length >= 8) break;
        if (featuredName && img.url.includes(featuredName)) continue;
        images.push(img);
      }
    }
  } catch (_) {}

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
