import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Beeminder Wiki',
    themeConfig: {
        editLink: {
            pattern: 'https://github.com/narthur/beeminder-wiki/edit/master/wiki/:path'
        }
    }
})