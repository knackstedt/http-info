import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightImageZoom from 'starlight-image-zoom';

// https://astro.build/config
export default defineConfig({
    site: 'https://http.shokupan.dev',
    base: '/',
    integrations: [
        sitemap({
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date()
        }),
        starlight({
            plugins: [
                starlightImageZoom({ showCaptions: true }),
            ],
            title: 'HTTP Info',
            description: 'A comprehensive reference for HTTP verbs, status codes, and headers',
            social: [
                { label: 'GitHub', href: 'https://github.com/knackstedt/http-info', icon: 'github' },
            ],
            sidebar: [
                {
                    label: 'Verbs',
                    autogenerate: { directory: 'verbs' }
                },
                {
                    label: 'Status Codes',
                    items: [
                        { label: '1xx Informational', autogenerate: { directory: 'status-codes/1xx' } },
                        { label: '2xx Success', autogenerate: { directory: 'status-codes/2xx' } },
                        { label: '3xx Redirection', autogenerate: { directory: 'status-codes/3xx' } },
                        { label: '4xx Client Error', autogenerate: { directory: 'status-codes/4xx' } },
                        { label: '5xx Server Error', autogenerate: { directory: 'status-codes/5xx' } },
                    ]
                },
                {
                    label: 'Headers',
                    autogenerate: { directory: 'headers' }
                },
                {
                    label: 'Glossary',
                    autogenerate: { directory: 'glossary' }
                }
            ],
            customCss: [
                './src/styles/custom.css',
            ],
        }),
    ],
    vite: {
        resolve: {
            preserveSymlinks: true,
        }
    }
});
