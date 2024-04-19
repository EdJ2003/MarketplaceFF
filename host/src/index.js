import { registerApplication, start } from 'single-spa';

registerApplication({
    name: 'app1',
    app: () => import('http://localhost:3001'),
    activeWhen: '/app1',
});

registerApplication({
    name: 'app2',
    app: () => import('http://localhost:3002'),
    activeWhen: '/app2',
});

start();