export const fetchData = async (url, options) => {
	try {
	  const response = await fetch(url, options);
	  if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	  }
	  const data = await response.json();
	  return data;
	} catch (error) {
	  console.error('Error fetching data:', error);
	  throw error; 
	}
  };
  
  export const ExerciseOptions = {
	method: 'GET',
	headers: {
	  'x-rapidapi-key': process.env.REACT_APP_X_RAPID_API_KEY,
	  'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};
