// Example of fetching data from the MongoDB API

import axios from "axios";
const data = JSON.stringify({
	collection: "waifus",
	database: "waifuchanDB",
	dataSource: "Cluster0",
	projection: {
		_id: 1,
	},
});

const config = {
	method: "post",
	url: `process.env.VUE_APP_MONGO_DATA_API_URL/action/findOne`,
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Request-Headers": "*",
		"api-key": process.env.VUE_APP_MONGO_DATA_API_KEY,
	},
	data: data,
};

axios(config)
	.then(function (response) {
		console.log(JSON.stringify(response.data));
	})
	.catch(function (error) {
		console.log(error);
	});
