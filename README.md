# SupremoFrota Frontend (Standalone - Angular 20)

Projeto scaffold usando **Standalone Components** (Angular 20), **PrimeNG 20**, **SCSS**, **lazy-loading**, **theme toggle (light/dark)**, e **JSON Server**.

## Requisitos
- Node.js 20+
- Angular CLI 20+ (`npm i -g @angular/cli`)
- JSON Server (`npm i -g json-server`) (opcional: use `npx json-server`)

## Instalação
```bash
# instalar dependências
npm install
```

## Executando
1. Inicie o JSON Server com dados mock (porta 3000):
```bash
npm run json-server
```
2. Em outro terminal, rode a aplicação com proxy:
```bash
npm start
# ou: ng serve --proxy-config proxy.conf.json
```
3. Abra `http://localhost:4200`

## Observações
- APIs chamadas em código devem usar caminhos relativos como `/api/produtos`.
- O proxy redireciona `/api` para `http://localhost:3000` (veja `proxy.conf.json`).
- Tema claro por padrão; clique no ícone no topo para alternar para modo escuro (adiciona `.app-dark-mode` no body).

## Estrutura principal
```
src/
  app/
    layout/
      layout.component.ts (standalone)
      layout.component.html
      layout.component.scss
      layout.routes.ts  (children lazy routes)
    pages/
      dashboard/ (standalone, lazy loaded)
      produtos/  (standalone, lazy loaded)
      funcionarios/ (standalone, lazy loaded)
    app.config.ts
    app.routes.ts
    main.ts
  styles.scss
db.json    # dados mock com muitos registros
proxy.conf.json
```

## Comandos úteis
- `npm start` — inicia frontend com proxy
- `npm run json-server` — inicia JSON Server (porta 3000)
- `npm run build` — build produção

