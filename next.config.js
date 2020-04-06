const path = require("path");

module.exports = {
	target: "serverless",
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

		config.resolve.alias = {
			...config.resolve.alias,
			Libs: path.join(__dirname, "lib/"),
			Components: path.join(__dirname, "components/"),
			Layouts: path.join(__dirname, "layout/")
		};
		return config;
	}
};
