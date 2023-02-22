import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			'X-RapidAPI-Key':
				'266fd1f939mshc50e936c1430855p133d4fjsn65367d843745',
			'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
		},
	});

	return data;
};
