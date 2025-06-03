 
# 🌿 en-landing-astro — El portal simbólico de Enraiza

**"Recicla en la Tierra. Desbloquea en la Nube."**

Este proyecto representa la entrada poética, simbólica y funcional al ecosistema de Fundación Enraiza.

Une **interfaz estática ultrarrápida (Astro)** con una **capa interactiva viva (React)** que permite validar acciones regenerativas, entregar tokens simbólicos y desbloquear portales de conciencia.

---

## ✨ Visión

Enraiza propone un tejido simbólico donde:

- Cada acto de reciclaje se reconoce digitalmente
- Cada token RAÍZ es una llave espiritual
- Cada portal desbloqueado es una experiencia de aprendizaje o conexión

Este portal comunica esa visión y permite iniciarla.

---

## 📁 Estructura del Proyecto

```
   en-landing-astro/
   ├── public/                 # Íconos, imágenes, QR
   ├── src/
   │   ├── api/                # Endpoints para validación / integración backend
   │   │   └── scan.js
   │   ├── components/
   │   │   ├── Hero.astro
   │   │   ├── Vision.astro
   │   │   ├── Manifiesto.astro
   │   │   ├── TokenScanner.jsx      # React: login + QR scan
   │   │   ├── PortalAccess.jsx      # React: acceso condicional
   │   │   └── ClientAnimationLoader.astro
   │   ├── layouts/
   │   │   └── BaseLayout.astro
   │   ├── pages/
   │   │   ├── index.astro
   │   │   └── portal.astro          # Vista desbloqueada tras validación
   │   ├── scripts/
   │   │   └── init.js               # AOS + Anime.js init
   │   ├── styles/
   │   │   └── main.scss
   │   └── content/
   │       └── manifesto.md
   ├── astro.config.mjs
   └── package.json


```


---

## ⚙️ Tecnologías

| Herramienta       | Propósito                                           |
|------------------|-----------------------------------------------------|
| **Astro**          | Framework estático, ultrarrápido                   |
| **React**          | Capa dinámica: login, validación, tokenización     |
| **SCSS**           | Estilo poético y responsivo                        |
| **AOS / Anime.js** | Animaciones suaves, simbolismo en movimiento       |
| **Fetch API**      | Comunicación con microservicios Enraiza            |

---

## 🔐 Flujo simbólico (RAÍZ)

```

      A [Escaneo del QR RAÍZ] --> B[Formulario React: wallet / código]
      B --> C[POST /api/scan]
      C --> D[Verificación en backend]
      D --> E{¿Válido?}
      E -->|Sí| F[Entrega token RAÍZ al usuario]
      F --> G[Redirección a /portal]
      E -->|No| H[Mensaje simbólico de acceso denegado]


```


## 🚀 Primeros pasos


1. **Clonar el repositorio:**

   ```
    git clone https://github.com/fundacion-enraiza/en-landing-astro.git
    cd en-landing-astro
   ```

2. **Instala dependencias:**

    ```
        npm install
    ```

3. **Inicia el servidor**

   ```
        npm run dev
   ```

4. **Abre en tu navegador:**

    ```
       http://localhost:4321
    ```

## 💡 Componentes clave y su propósito simbólico

| Componente              | Propósito simbólico                              |
|-------------------------|--------------------------------------------------|
| `Hero.astro`            | El llamado inicial del portal                    |
| `Vision.astro`          | El mapa simbólico del flujo regenerativo         |
| `Manifiesto.astro`      | El núcleo espiritual de Enraiza                  |
| `TokenScanner.jsx`      | El acto ritual de ingreso consciente             |
| `PortalAccess.jsx`      | El cruce del umbral si posee tokens RAÍZ         |
| `ClientAnimationLoader` | El soplo de vida visual al contenido             |


## 🌱 Colaborar

**Enraiza es un campo fértil para sembrar código, arte y conciencia.**  
Invitamos a quienes resuenen con la visión regenerativa a contribuir en múltiples niveles:

### ✨ Formas de colaborar

- 🎨 Mejoras visuales, accesibilidad simbólica y estilos poéticos  
- ⚛️ Componentes React: login, validación, tokenización, conexión con QR  
- 🔗 Integración con servicios RAÍZ:
  - [`en-token-service`](https://github.com/fundacion-enraiza/en-token-service)
  - [`en-access-validator`](https://github.com/fundacion-enraiza/en-access-validator)
- 🌍 Traducciones regenerativas y adaptaciones culturales o territoriales
- 🧠 Contenido: manifiestos, guías, mensajes espirituales o educativos

### 🛠 ¿Cómo contribuir?

1. Haz un fork del repositorio
2. Crea una rama descriptiva:
   
   ```
    git checkout -b feat/componente-portal
   ```
3. Realiza tus cambios con cariño, intención y cuidado simbólico del contexto.  
   Puedes agregar animaciones, componentes, validadores o mejorar la narrativa visual del portal.

4. Abre un Pull Request (PR) con un título que evoque tu contribución, por ejemplo:  
   `feat: Integración simbólica del validador`  
   `fix: Mejora en la animación del árbol guía`

5. En la descripción del PR, comparte brevemente:
   - Qué aporta tu cambio
   - Si conecta con una sección simbólica del manifiesto o del flujo RAÍZ
   - Cualquier nota para revisar o continuar el tejido

> 💌 Nos tomamos en serio cada PR como una siembra.  
> La revisión será cuidadosa y amorosa, como abonar un brote nuevo.

## 🧭 Ecosistema Enraiza

Este portal forma parte de un ecosistema de microservicios simbólicos que conectan tierra y nube:

- [`en-token-service`](https://github.com/fundacion-enraiza/en-token-service)  
  _“El árbol que reconoce tu acto y te entrega un fruto”_  
  Recibe escaneos desde nodos físicos y entrega tokens RAÍZ a wallets validadas.

- [`en-access-validator`](https://github.com/fundacion-enraiza/en-access-validator)  
  _“El guardián de los portales sagrados”_  
  Verifica si un alma tiene acceso suficiente (tokens RAÍZ) para cruzar un umbral digital.

- **Dashboard RAÍZ** _(en desarrollo)_  
  _“El espejo donde se refleja tu camino regenerativo”_  
  Visualiza estadísticas, trayectorias y frutos simbólicos obtenidos.

---

## 📬 Contacto

```
📧 fundacion@enraiza.cl  
🌐 https://github.com/fundacion-enraiza

```

**"Siembra, conecta, accede."**

— Fundación Enraiza
