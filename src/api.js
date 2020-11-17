import axios from 'axios'



const getAllGiphies=()=>{
    return axios.get(`${process.env.REACT_APP_BASE_URL}?&${process.env.REACT_APP_APIKEY}`);
    
    
};

export {getAllGiphies};