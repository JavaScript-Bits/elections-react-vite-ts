import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(function (config) {
	// Do something before request is sent
	// config.baseURL = 'http://localhost:3000' 
	return config;
}, function (error) {
	// Do something with request error
	return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
	// Any status code that lie within the range of 2xx cause this function to trigger
	// Do something with response data
	return response;
}, function (error) {
	if(error.response){
		// 401, 403, 500, 404
	}else {
		// network failure
	}
	// Any status codes that falls outside the range of 2xx cause this function to trigger
	// Do something with response error
	return Promise.reject(error);
});

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL
// if(auth){
// 	axios.defaults.headers.common.Authorization = `Bearer ${token}`
// }
export default axios