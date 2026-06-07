import { mount as mountHome }    from './views/home.js';
import { mount as mountExplore } from './views/explore.js';
import { mount as mountDino }    from './views/dino.js';
import { mount as mountGrupo }   from './views/grupo.js';
import { DINOS } from './data.js';

const app = document.getElementById('app');

function parseHash() {
  const raw = location.hash.replace('#/', '') || '';
  const parts = raw.split('/');
  return { view: parts[0] || '', param: parts[1] || '' };
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
  const btn      = document.getElementById('search-btn');
  const overlay  = document.getElementById('search-overlay');
  const input    = document.getElementById('search-input');
  const results  = document.getElementById('search-results');
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
            <span class="search-result-name">${d.emoji} ${d.nombre}</span>
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
