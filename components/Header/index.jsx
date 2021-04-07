import Head from "next/head";
import Navbar from "../Navbar";

export default function Header() {
  return (
    <>
      <Head>
        <title>Luis Alberto | Portfolio WEB</title>
        <meta property="og:site_name" content="Portafolio WEB Luis" />
        <meta property="og:site_type" content="website" />
        <meta property="og:title" content="Portfolio WEB" />
        <meta property="og:url" content="https://luisalbertoarana.com" />
        <meta property="og:image" content="assets/img/og-image.jpg" />
        <meta
          property="og:description"
          content="Hola, Soy Luis Alberto, Bienvenid@s a mi portafolio WEB, aquí encontrarás información acerca de mi y mis proyectos; ¡Te invito a verla! :D"
        />
        <meta
          name="keywords"
          content="portfolio, portfolio web, portfolio WEB, Portfolio, Portfolio WEB, curriculum, website, luis, luis alberto, Luis, Luis Alberto, book web"
        />
        <meta
          name="description"
          content="Hola, Soy Luis Alberto, Bienvedi@s a mi portafolio WEB, aqui encontrarás información acerca de mi y mis proyectos; ¡Te invito a verla! :D"
        />
        <meta name="theme-color" content="#4A86E8" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="author" content="assets/humans.txt" />
        <link rel="apple-touch-icon" href="assets/img/icon-32x32.png" />
        <link
          rel="apple-touch-startup-image"
          href="assets/img/icon-32x32.png"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          href="assets/img/icon-32x32.png"
        />
        <link rel="author" type="text/plain" href="assets/humans.txt" />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="assets/sitemap.xml"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <script src="https://www.google.com/recaptcha/api.js"></script>
        <link rel="manifest" href="manifest.json" />
        <meta name="theme-color" content="#1976d2" />
      </Head>
      <header>
        <Navbar />
      </header>
      <style jsx>{`
        header {
          padding: 10px 0;
          background-color: var(--secondColor);
        }
        `}</style>
    </>
  );
}
