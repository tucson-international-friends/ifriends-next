import Head from "next/head";

const Meta = () => (
	<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta charSet="utf-8" />
		<title>Tucson International Friends</title>
		<link rel="shortcut icon" type="image/x-icon" href="/icons/favicon.ico" />
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-106394359-1"></script>
		<script
			dangerouslySetInnerHTML={{
				__html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-106394359-1');`,
			}}
		/>
		<script
			dangerouslySetInnerHTML={{
				__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-WM8XF8R');`
			}}
		/>
	</Head>
);

export default Meta;;
