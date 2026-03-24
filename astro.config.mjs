// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'OwO 插件使用文档',
			description: 'Luna Bot、Koishi 与 AstrBot 的用户向插件使用文档。',
			tagline: 'OwO 指令手册',
			lastUpdated: true,
			customCss: ['/src/styles/custom.css'],
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 3,
			},
			components: {
				Head: './src/components/Head.astro',
				PageFrame: './src/components/PageFrame.astro',
				PageTitle: './src/components/PageTitle.astro',
			},
			markdown: {
				headingLinks: true,
			},
			sidebar: [
				{
					label: '开始',
					items: [
						{ label: '首页', slug: '' },
						{ label: '留言板', slug: 'message-board' },
					],
				},
				{
					label: '插件教程',
					items: [
						{ label: 'Luna Bot', slug: 'luna-bot' },
						{ label: 'Koishi', slug: 'koishi' },
						{ label: 'AstrBot', slug: 'astrbot' },
					],
				},
			],
		}),
	],
});
