import Head from 'next/head'
import Navbar from '@/components/Navbar'

export default function Header() {
	return (
		<>
			<Head>
				<title>Luis Alberto | Portfolio WEB</title>
				<meta property='og:site_name' content='Portafolio WEB Luis' />
				<meta property='og:site_type' content='website' />
				<meta property='og:title' content='Portfolio WEB' />
				<meta property='og:url' content='https://luisalbertoarana.com' />
				<meta property='og:image' content='assets/img/og-image.webp' />
				<meta property='og:description' content='Hola, Soy Luis Alberto, Bienvenid@s a mi portafolio WEB, aquí encontrarás información acerca de mi y mis proyectos; ¡Te invito a verla! :D' />
				<meta name='keywords' content='portfolio, portfolio web, portfolio WEB, Portfolio, Portfolio WEB, curriculum, website, luis, luis alberto, Luis, Luis Alberto, book web' />
				<meta name='description' content='Hola, Soy Luis Alberto, Bienvedi@s a mi portafolio WEB, aqui encontrarás información acerca de mi y mis proyectos; ¡Te invito a verla! :D' />
				<meta name='MobileOptimized' content='width' />
				<meta name='HandheldFriendly' content='true' />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta name='apple-mobile-web-app-status-bar-style' content='black' />
				<meta name='author' content='/assets/humans.txt' />
				<link rel='apple-touch-icon' href='/assets/img/icon-32x32.png' />
				<link rel='apple-touch-startup-image' href='/assets/img/icon-32x32.png' />
				<link rel='shortcut icon' type='image/png' href='/assets/img/icon-32x32.png' />
				<link rel='author' type='text/plain' href='assets/humans.txt' />
				<link rel='sitemap' type='application/xml' title='Sitemap' href='/assets/sitemap.xml' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' type='image/x-icon' href='favicon.ico' />
				<link rel='manifest' href='manifest.json' />
			</Head>
			<header>
				<Navbar />
			</header>
			<style jsx>{`
				header {
					background-color: var(--secondColor);
					position: fixed;
					top: 0;
					width: 100%;
					z-index: 110;
				}
			`}</style>
		</>
	)
}
