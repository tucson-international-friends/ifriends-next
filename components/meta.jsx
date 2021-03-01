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
	</Head>
);

export default Meta;;
