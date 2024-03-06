# qr-ordering-web

QR Online Ordering web application using ReactJS.

## API

[API DOCUMENTATION](https://polarized-operation-1fb.notion.site/EQUIP-Ordering-API-20c02c91064e475aab2461f60f989996?pvs=4)

## Development

### Source

```bash
git https://github.com/edgeworks-solutions/qr-ordering-web.git
cd qr-ordering-web
```

### Setup Environment

Please make sure that your device already have `Node.js v18.17.0`

```shell
# Install all dependencies (during development npm version used is 9.6.7)
npm install

```

Create `.env`

```shell
VITE_API_URL=https://t1.equipweb.biz/EdgeCafeTraining/ordering/api
```

`VITE_API_URL` is base url for API endpoint.
Please contact your supervisor to ask available endpoint for testing and development.

running project for development

### Start Project

```shell
npm run dev
```

### VS Code Extension recommendations

- ESLint `dbaeumer.vscode-eslint`
- SonarLint `SonarSource.sonarlint-vscode`
- GitLens `eamodio.gitlens`

### For Unit Testing cypress, recomended use vite 5
- For now cypress not supported for vite v5
- to fix this we should downgrade the vite to v4

```shell
npm install vite@4.0.0
```

### How To run
- run yarn/npm script test
