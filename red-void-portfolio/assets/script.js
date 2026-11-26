// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i % 4, 3) * 90}ms`;
  revealObserver.observe(el);
});

// Mobile navigation
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => nav.classList.toggle('open'));

// Subtle custom cursor (desktop only)
const dot = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
if (dot && follower && matchMedia('(pointer:fine)').matches) {
  let x = innerWidth / 2, y = innerHeight / 2, fx = x, fy = y;
  addEventListener('mousemove', (e) => { x = e.clientX; y = e.clientY; dot.style.left = x + 'px'; dot.style.top = y + 'px'; });
  const animate = () => {
    fx += (x - fx) * .14; fy += (y - fy) * .14;
    follower.style.left = fx + 'px'; follower.style.top = fy + 'px';
    requestAnimationFrame(animate);
  };
  animate();
  document.querySelectorAll('a,button').forEach(el => {
    el.addEventListener('mouseenter', () => follower.classList.add('hover'));
    el.addEventListener('mouseleave', () => follower.classList.remove('hover'));
  });
}
