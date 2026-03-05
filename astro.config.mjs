import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightImageZoom from 'starlight-image-zoom';
import starlightLlmsTxt from 'starlight-llms-txt';
import starlightThemeFlexoki from 'starlight-theme-flexoki';

// https://astro.build/config
export default defineConfig({
    site: 'https://http.shokupan.dev',
    base: '/',
    integrations: [
        sitemap({
            customPages: [
                'https://http.shokupan.dev/llms.txt',
                'https://http.shokupan.dev/llms-full.txt',
                'https://http.shokupan.dev/llms-small.txt',
            ],
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date()
        }),
        starlight({
            components: {
                SocialIcons: './src/components/SocialIcons.astro',
            },
            plugins: [
                starlightImageZoom({ showCaptions: true }),
                starlightThemeFlexoki(),
                starlightLlmsTxt(),
                starlightTypeDoc({
                    typeDoc: {
                        interfacePropertiesFormat: 'htmlTable',
                    },
                    entryPoints: ['../src/index.ts'],
                    tsconfig: '../tsconfig.json'
                }),
            ],
            title: 'Shokupan',
            description: 'A low-lift modern web framework for Bun',
            social: [
                { label: 'GitHub', href: 'https://github.com/knackstedt/shokupan', icon: 'github' },
            ],
            editLink: {
                baseUrl: 'https://github.com/knackstedt/shokupan/edit/main/docs/',
            },
            sidebar: [

            ],
            customCss: [
                './src/styles/custom.css',
            ],
        }),
    ],
    vite: {
        resolve: {
            preserveSymlinks: true,
        },
        server: {
            fs: {
                allow: ['..'],
            }
        }
    }
});
