// s3tech interactions
(function(){
  const qs = (s, el=document)=>el.querySelector(s);
  const qsa = (s, el=document)=>[...el.querySelectorAll(s)];

  // Mobile nav
  const hamburger = qs('#hamburger');
  const nav = qs('#primary-nav');
  hamburger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', String(open));
  });

  // Smooth close menu on link click (mobile)
  qsa('#primary-nav a').forEach(a => a.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      nav.classList.remove('open'); hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  }));

  // Hero slider
  const slides = qsa('.slide');
  const dotsWrap = qs('#dots');
  let idx = 0, timer = null, delay = 5500;

  function applySlideBackgrounds(){
    slides.forEach(slide => {
      const styleBg = slide.getAttribute('style');
      const urlMatch = /--bg:url\(([^)]+)\)/.exec(styleBg || '');
      if (urlMatch) {
        slide.style.backgroundImage = `url(${urlMatch[1]})`;
      }
    });
  }
  applySlideBackgrounds();

  function show(i){
    slides.forEach((s, j)=>{ s.classList.toggle('active', j===i); });
    qsa('button', dotsWrap).forEach((d, j)=>d.classList.toggle('active', j===i));
    idx = i;
  }
  function next(){ show((idx+1)%slides.length); }
  function prev(){ show((idx-1+slides.length)%slides.length); }
  function play(){ timer = setInterval(next, delay); }
  function stop(){ clearInterval(timer); }

  // Dots
  slides.forEach((_, i)=>{
    const b = document.createElement('button');
    b.setAttribute('aria-label', `Ir a imagen ${i+1}`);
    b.addEventListener('click', ()=>{ stop(); show(i); play(); });
    dotsWrap.appendChild(b);
  });

  // Controls
  qs('#next').addEventListener('click', ()=>{ stop(); next(); play(); });
  qs('#prev').addEventListener('click', ()=>{ stop(); prev(); play(); });

  show(0); play();

  // Year
  qs('#year').textContent = new Date().getFullYear();

  // Form validation (front-end only)
  const form = qs('#contact-form');
  const status = qs('#form-status');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let ok = true;
    const required = qsa('[required]', form);
    required.forEach(el=>{
      const field = el.closest('.form-field');
      const msg = field ? qs('.error-msg', field) : null;
      el.classList.remove('error'); if (msg) msg.textContent='';
      if (!el.value || (el.type==='checkbox' && !el.checked)){
        ok = false; el.classList.add('error');
        if (msg){
          msg.textContent = 'Campo obligatorio';
        }
      } else if (el.type === 'email' && !/^\S+@\S+\.\S+$/.test(el.value)){
        ok = false; el.classList.add('error');
        if (msg){
          msg.textContent = 'Ingresá un email válido';
        }
      }
    });

    if (!ok){
      status.textContent = 'Revisá los campos marcados en rojo.';
      return;
    }

    // Simulate success (replace with real backend or service)
    const data = Object.fromEntries(new FormData(form).entries());
    console.log('Consulta enviada:', data);
    status.textContent = '¡Gracias! Tu consulta fue enviada. Te contactaré a la brevedad.';
    form.reset();
  });
})();
