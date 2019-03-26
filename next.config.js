const withSass = require("@zeit/next-sass");
const path = require("path");

module.exports = withSass({
	cssModules: true,
	cssLoaderOptions: {
		getLocalIdent: (loaderContext, localIdentName, localName, options) => {
			const fileName = path.basename(loaderContext.resourcePath);
			if (
				fileName.indexOf("global.scss") !== -1
				|| fileName.indexOf("node_modules") !== -1
			) {
				return localName;
			}
			const name = fileName.replace(/\.[^/.]+$/, "");
			return `${name}__${localName}`;
		}
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
			use: {
				loader: "url-loader",
				options: {
					limit: 8192,
					publicPath: "/_next/static/",
					outputPath: "static/",
					name: "[name].[ext]"
				}
			}
		});
		return config;
	}
});
