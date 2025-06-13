// src/scripts/init.js
import AOS from 'aos';
import 'aos/dist/aos.css';

export function initAnimations() {
  if (typeof window !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }

  
}
