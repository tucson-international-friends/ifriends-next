const express = require("express");
const bodyParser = require("body-parser");

const app = express();
module.exports = app;

app.use(bodyParser.json());

app.post("*", (req, res) => {
	if (req.body == null) {
		return res.status(400).send({ error: "no JSON object in the request" });
	}

	res.set("Content-Type", "application/json");
	return res.status(200).send(JSON.stringify(req.body, null, 4));
});

app.all("*", (req, res) => {
	res.status(405).send({ error: "only POST requests are accepted" });
});
