---
title: Guía de Animaciones RAÍZ
description: Patrones de entrada, movimiento y expresión simbólica con AOS y Anime.js
---

# 🌬️ Guía de Animaciones RAÍZ

**"El movimiento es el lenguaje secreto de los elementos."**

Esta guía recoge patrones de animación aplicados al portal `en-landing-astro`, usando AOS y Anime.js para generar entradas suaves, gestos vivos y expresiones simbólicas.

---

## 🎞️ AOS (Animate On Scroll)

AOS permite animaciones simples al hacer scroll, sin JavaScript adicional.

### Ejemplos de uso

```html
<section data-aos="fade-up">...</section>
<section data-aos="zoom-in">...</section>
<section data-aos="fade-up-right">...</section>
```

### Opciones recomendadas

- `data-aos="fade-up"`: entrada vertical suave
- `data-aos="zoom-in"`: para destacar símbolos o botones
- `data-aos-duration="1000"`: controla la duración
- `data-aos-delay="300"`: para secuencias simbólicas

---

## ⚛️ Anime.js

Anime.js permite animaciones programáticas más complejas.

### 🌱 Latido de título (después de entrada)

```js
anime({
  targets: '#heroText',
  scale: [1, 1.05],
  direction: 'alternate',
  loop: 2,
  duration: 600,
  easing: 'easeInOutSine',
});
```

### 🌳 Respiración del árbol

```js
anime({
  targets: '#tree',
  scale: [1, 1.03],
  direction: 'alternate',
  loop: true,
  duration: 2000,
  easing: 'easeInOutQuad',
});
```

### ♻️ Giro de flechas de reciclaje

```js
anime({
  targets: '.arrow',
  rotate: '360deg',
  duration: 4000,
  easing: 'linear',
  loop: true,
});
```

---

## 🧠 Recomendaciones simbólicas

| Efecto               | Uso sugerido                     |
|----------------------|----------------------------------|
| `fade-up` + `scale`  | Entrada de elementos clave       |
| `rotate`             | Flechas, botones circulares      |
| `opacity` + `translateY` | Secciones que aparecen al scroll |
| `loop: true`         | Elementos vivos: árbol, latido   |

---

**"No animamos por decorar, sino por significar."**

🌱 Fundación Enraiza
