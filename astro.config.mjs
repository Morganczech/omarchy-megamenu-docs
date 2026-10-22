// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://megamenu.rovix.eu',
	integrations: [
		starlight({
			title: 'Omarchy Megamenu',
			description:
				'Guide to the Omarchy Megamenu plugin: spaces, the quick-access orbit, live columns, shell commands, and saving the current page.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				cs: { label: 'Čeština', lang: 'cs' },
			},
			logo: {
				src: './src/assets/logo.png',
				alt: 'Omarchy Megamenu',
			},
			favicon: '/favicon.png',
			lastUpdated: false,
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/Morganczech/omarchy-megamenu',
				},
				{
					icon: 'email',
					label: 'Email',
					href: 'mailto:megamenu@rovix.eu',
				},
			],
			sidebar: [
				{
					label: 'Start',
					translations: { cs: 'Začátek' },
					items: [
						{ label: 'Introduction', slug: 'index', translations: { cs: 'Úvod' } },
						{
							label: 'Install and remove',
							slug: 'install',
							translations: { cs: 'Instalace a odebrání' },
						},
						{
							label: 'Save the current page',
							slug: 'save-page',
							translations: { cs: 'Uložení aktuální stránky' },
						},
						{
							label: 'Keyboard shortcuts',
							slug: 'shortcuts',
							translations: { cs: 'Klávesové zkratky' },
						},
					],
				},
				{
					label: 'Guides',
					translations: { cs: 'Průvodce' },
					items: [
						{
							label: 'Spaces, Orbit, and categories',
							slug: 'spaces',
							translations: { cs: 'Prostory, Orbit a kategorie' },
						},
						{ label: 'Search', slug: 'search', translations: { cs: 'Hledání' } },
						{
							label: 'Live columns',
							slug: 'live-columns',
							translations: { cs: 'Živé sloupce' },
						},
						{
							label: 'Shell commands',
							slug: 'commands',
							translations: { cs: 'Příkazy' },
						},
						{
							label: 'Import bookmarks',
							slug: 'import',
							translations: { cs: 'Import záložek' },
						},
					],
				},
			],
		}),
	],
});
