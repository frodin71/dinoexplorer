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

    <div class="stats-grid">
      <div class="stat-card">
        <div class="label">Longitud</div>
        <div class="value">${dino.longitud} m</div>
      </div>
      <div class="stat-card">
        <div class="label">Peso</div>
        <div class="value">${formatPeso(dino.peso)}</div>
      </div>
      <div class="stat-card">
        <div class="label">Dieta</div>
        <div class="value">${dino.dieta}</div>
      </div>
      <div class="stat-card">
        <div class="label">Período</div>
        <div class="value">${dino.rangoMa[0]}–${dino.rangoMa[1]} Ma</div>
      </div>
      <div class="stat-card">
        <div class="label">Región</div>
        <div class="value">${dino.region.join(', ')}</div>
      </div>
      <div class="stat-card">
        <div class="label">Descubierto</div>
        <div class="value">${dino.descubrimiento.año}</div>
      </div>
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
}
