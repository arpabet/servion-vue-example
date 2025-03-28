import { createRouter, createWebHashHistory } from 'vue-router';
import App from '../App.vue';

const router = createRouter({
    history: createWebHashHistory(), // Hash-based navigation
    routes: [
        { path: '/', component: App },
    ],
});

export default router;
