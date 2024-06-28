export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = response.json();
    return data;
};

export const  ExerciseOptions = {
	method: 'GET',
	hostname: 'exercisedb.p.rapidapi.com',
	port: null,
	path: '/status',
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_X_RAPID_API_KEY,
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};