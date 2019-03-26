const withSass = require("@zeit/next-sass");
const path = require("path");

module.exports = withSass({
	cssModules: true,
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
