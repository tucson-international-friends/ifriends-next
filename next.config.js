require("dotenv").config();
const DotEnv = require("dotenv-webpack");
const withSass = require("@zeit/next-sass");

const path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultGetLocalIdent = require("css-loader/lib/getLocalIdent");

module.exports = withSass({
	target: "serverless",
	cssModules: true,
	cssLoaderOptions: {
		getLocalIdent: (loaderContext, localIdentName, localName, options) => {
			const { resourcePath } = loaderContext;
			const fileName = path.basename(resourcePath);
			const dirName = path.dirname(resourcePath);
			if (dirName.indexOf("global") >= 0 || fileName.indexOf("global") >= 0) {
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

		config.plugins = config.plugins || [];
		config.plugins = [
			...config.plugins,
			// Read the .env file
			new DotEnv({
				path: path.join(__dirname, ".env"),
				systemvars: true
			})
		];

		config.resolve.alias = {
			...config.resolve.alias,
			Libs: path.join(__dirname, "lib/"),
			Components: path.join(__dirname, "components/"),
			Layouts: path.join(__dirname, "layout/")
		};
		return config;
	}
});
