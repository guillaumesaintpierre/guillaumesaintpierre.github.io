(() => {
  'use strict';
  const header = document.getElementById('site-header');
  if (header) {
    const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 14);
    updateHeader();
    window.addEventListener('scroll', updateHeader, {passive:true});
  }

  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-menu');
  if (menuButton && mobileNav) {
    const setMenu = open => {
      mobileNav.hidden = !open;
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    menuButton.addEventListener('click', () => setMenu(mobileNav.hidden));
    mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', event => {if(event.key === 'Escape') setMenu(false)});
  }

  const carousel = document.getElementById('project-carousel');
  if (carousel) {
    const slides = [...carousel.querySelectorAll('.project-slide')];
    const position = document.getElementById('carousel-count');
    const progress = document.getElementById('progress-fill');
    const prev = document.getElementById('prev-project');
    const next = document.getElementById('next-project');
    let active = 0;
    const show = index => {
      active = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        const selected = active === i;
        slide.classList.toggle('is-active', selected);
        slide.setAttribute('aria-hidden', String(!selected));
        slide.inert = !selected;
        slide.querySelectorAll('a').forEach(a => a.tabIndex = selected ? 0 : -1);
      });
      if (position) position.textContent = `${String(active+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
      if (progress) progress.style.width = `${(active+1)/slides.length*100}%`;
    };
    show(0);
    prev?.addEventListener('click', () => show(active-1));
    next?.addEventListener('click', () => show(active+1));
    document.addEventListener('keydown', event => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.target.matches('input,textarea,select,[contenteditable="true"]')) return;
      const bounds = carousel.getBoundingClientRect();
      const nearViewport = bounds.top < window.innerHeight && bounds.bottom > 0;
      if (!nearViewport) return;
      if (event.key === 'ArrowLeft') {event.preventDefault(); show(active-1)}
      if (event.key === 'ArrowRight') {event.preventDefault(); show(active+1)}
    });
    let touchX = null;
    carousel.addEventListener('touchstart', e => {touchX = e.touches[0].clientX}, {passive:true});
    carousel.addEventListener('touchend', e => {
      if(touchX === null) return;
      const delta = e.changedTouches[0].clientX - touchX;
      if(Math.abs(delta) > 55) show(active + (delta < 0 ? 1 : -1));
      touchX = null;
    }, {passive:true});
    document.querySelectorAll('.project-index-item').forEach(link => {
      // The index is a genuine link to each case study. Selection via its list is deliberately not intercepted.
    });
  }

  const copyButton = document.querySelector('[data-copy-email]');
  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      const email = copyButton.dataset.copyEmail;
      const original = copyButton.innerHTML;
      try {
        if (!navigator.clipboard || !window.isSecureContext) throw Error('Clipboard API unavailable');
        await navigator.clipboard.writeText(email);
        copyButton.textContent = 'Copied ✓';
      } catch (error) {
        // This fallback works on local file previews as well as published sites.
        const field = document.createElement('textarea');
        field.value=email;field.style.position='fixed';field.style.opacity='0';
        document.body.appendChild(field);field.select();
        const success = document.execCommand('copy');
        field.remove();copyButton.textContent=success?'Copied ✓':'Select the email above';
      }
      window.setTimeout(() => {copyButton.innerHTML = original}, 2400);
    });
  }

  const lightbox=document.getElementById('lightbox');
  if (lightbox) {
    const image=lightbox.querySelector('#lightbox-image');
    const caption=lightbox.querySelector('#lightbox-caption');
    const closeButton=lightbox.querySelector('.lightbox-close');
    let lastFocus=null;
    const close=()=>{
      lightbox.hidden=true;
      document.body.classList.remove('no-scroll');
      if(lastFocus?.focus) lastFocus.focus();
    };
    document.querySelectorAll('.figure-zoom').forEach(button=>button.addEventListener('click',()=>{
      const source=button.querySelector('img');
      if (!source) return;
      image.src=source.src;image.alt=source.alt||'';
      caption.textContent=button.dataset.caption||source.alt||'';
      lastFocus=document.activeElement;
      lightbox.hidden=false;
      document.body.classList.add('no-scroll');
      closeButton.focus();
    }));
    closeButton?.addEventListener('click',close);
    lightbox.addEventListener('click',event=>{if(event.target===lightbox)close()});
    document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!lightbox.hidden)close()});
  }
})();
