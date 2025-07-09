import { useEffect } from 'react';
import { initAnimations } from '../scripts/init.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function InitClient() {
  useEffect(() => {
    initAnimations();

    // Esperar a que la animación de AOS termine (~1000ms)
    setTimeout(() => {
      if (typeof window.anime !== 'undefined') {
        window.anime({
          targets: '#hero h1',
          scale: [1, 1.05],
          direction: 'alternate',
          loop: 2,
          duration: 600,
          easing: 'easeInOutSine',
        });
      }
    }, 1100); // Espera justo después de AOS
  }, []);

  return null;
}
