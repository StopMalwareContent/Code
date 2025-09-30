// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightChangelogs from 'starlight-changelogs';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			plugins: [starlightSidebarTopics([
				{
					label: 'User Guide',
					link: '/extension',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', autogenerate: { directory: 'extension/reference' } },
					],
				},
				{
					label: 'API Guide',
					link: '/api',
					items: [
						{
							label: 'Reference',
							autogenerate: { directory: 'api/guides' },
						}
					]
				},
			]), starlightChangelogs()],
			components: {
				Sidebar: './src/components/Sidebar.astro'
			}
		}),
	],
});
