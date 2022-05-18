const searchApi = {
	getResultCount(input: string) {
		const result = [];
		console.log(`Results are ${input}`);
		result.push(input);
		return result.length;
	},
};

export default searchApi;
