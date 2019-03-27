const withSass = require("@zeit/next-sass");
const path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultGetLocalIdent = require("css-loader/lib/getLocalIdent");

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
			return defaultGetLocalIdent(
				loaderContext,
				localIdentName,
				localName,
				options
			);
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
