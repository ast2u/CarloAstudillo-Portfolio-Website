## Access the Website

[Carlo Astudillo Portfolio](https://ast2u.github.io/CarloAstudillo-Portfolio-Website/)

## Run locally

Install Node.js 22, then run:

```sh
npm ci
npm start
```

Create a production build with `npm run build`. GitHub Pages deployment is handled by the workflow in `.github/workflows/deploy.yml`; it builds the Angular app with the repository's Pages base path and deploys the generated `dist/portfolio` files.
