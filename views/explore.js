import { DINOS, getGrupoById, getDinosByPeriodo } from '../data.js';

export function mount(container) {
  container.innerHTML = `
    <div class="explore-header">
      <h2>Explora los dinosaurios</h2>
      <div class="mode-toggle">
        <button class="mode-btn active" data-mode="arbol">🌿 Árbol</button>
        <button class="mode-btn"        data-mode="cronologia">⏳ Cronología</button>
      </div>
    </div>
    <div id="explore-view">${renderTree()}</div>
  `;

  initTree(container);

  container.querySelector('.mode-toggle').addEventListener('click', e => {
    const btn = e.target.closest('.mode-btn');
    if (!btn) return;
    container.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const view = container.querySelector('#explore-view');
    if (btn.dataset.mode === 'arbol') {
      view.innerHTML = renderTree();
      initTree(container);
    } else {
      view.innerHTML = renderTimeline();
      initTimeline(container);
    }
  });
}

// ── Tree ────────────────────────────────────────────────────────────────────

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
  const root = container.querySelector('.tree-root');
  if (!root) return;
  root.addEventListener('click', e => {
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

// ── Timeline ─────────────────────────────────────────────────────────────────

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

function initTimeline(container) {
  const timeline = container.querySelector('.timeline');
  if (!timeline) return;
  timeline.addEventListener('click', e => {
    const header = e.target.closest('.period-header');
    if (!header) return;
    const body  = container.querySelector(`#pb-${header.dataset.period}`);
    const arrow = header.querySelector('.period-arrow');
    if (!body) return;
    const open = body.classList.toggle('expanded');
    arrow.classList.toggle('open', !open);
  });
}
