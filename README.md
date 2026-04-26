# Flora Araya - Marketing B2B

Personal portfolio website for B2B marketing services.

## Stack

- **Framework**: TanStack Start (React)
- **Styling**: Tailwind CSS
- **Deploy**: GitHub Pages

## Development

```bash
npm install
npm run dev
```

Server runs at http://localhost:3000

## Build

```bash
npm run build
```

Output in `dist/client`

## Deploy

El deploy a GitHub Pages es automático al hacer push a `main`. También puedes dispararlo manualmente desde Actions.

### GitHub Pages

1. Ve a **Settings → Pages**
2. En "Build and deployment", selecciona:
   - **Source**: Deploy from a branch
   - **Branch**: gh-pages / (root)
3. Guarda

El workflow está en `.github/workflows/deploy.yml`

### Cloudflare Pages

El proyecto también funciona con Cloudflare Pages si prefieres ese hosting.