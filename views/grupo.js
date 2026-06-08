import { getGrupoById, getDinosByFamilia, getDinosByGrupo, getBreadcrumb } from '../data.js';

export function mount(container, id) {
  const grupo = getGrupoById(id);
  if (!grupo) {
    container.innerHTML = `
      <div class="not-found">
        <h2>Grupo no encontrado</h2>
        <p>El grupo "${id}" no existe en nuestra base de datos.</p>
        <a href="#/" class="btn-primary" style="margin-top:16px;display:inline-block">← Volver al inicio</a>
      </div>`;
    return;
  }

  const crumbs      = getBreadcrumb(id);
  const childGroups = (grupo.hijos || []).map(getGrupoById).filter(Boolean);
  const directDinos = getDinosByFamilia(id);
  const allDinos    = getDinosByGrupo(id);

  container.innerHTML = `
    <nav class="breadcrumb">
      ${crumbs.slice(0, -1).map(g => `<a href="#/grupo/${g.id}">${g.nombre}</a> <span>›</span>`).join(' ')}
      <span>${grupo.nombre}</span>
    </nav>

    <header class="grupo-header">
      <h1>${grupo.nombre}</h1>
      <p>${allDinos.length} especie${allDinos.length !== 1 ? 's' : ''} en este grupo</p>
    </header>

    <p class="grupo-description">${grupo.descripcion}</p>

    ${childGroups.length ? `
      <div class="section-gap">
        <p class="section-title">Subgrupos</p>
        <div class="subgrupos-grid">
          ${childGroups.map(g => {
            const count = getDinosByGrupo(g.id).length;
            return `
              <a href="#/grupo/${g.id}" class="subgrupo-card">
                <h4>${g.nombre}</h4>
                <p>${count} especie${count !== 1 ? 's' : ''}</p>
              </a>`;
          }).join('')}
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
