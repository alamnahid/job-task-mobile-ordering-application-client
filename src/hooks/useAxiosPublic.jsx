import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://job-task-mobile-ordering-application-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;