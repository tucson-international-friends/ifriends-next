import Head from "next/head";
import Script from "next/script";

const Meta = () => (
	<>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
			<title>Tucson International Friends</title>
			<link rel="shortcut icon" type="image/x-icon" href="/icons/favicon.ico" />
		</Head>
		<div>
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=UA-106394359-1"
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-106394359-1');
        `}
			</Script>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-106394359-1', 'auto');
          ga('send', 'pageview');
        `}
			</Script>
		</div>
	</>
);

export default Meta;;
