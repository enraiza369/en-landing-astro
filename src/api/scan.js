// src/scripts/init.js
import AOS from 'aos';
import 'aos/dist/aos.css';

import * as Anime from 'animejs';
const anime = Anime.default;

export function initAnimations() {
  AOS.init({
    duration: 1000,
    once: true,
  });

  anime({
    targets: '.animate-me',
    opacity: [0, 1],
    translateY: [50, 0],
    easing: 'easeOutExpo',
    duration: 1200
  });
}


