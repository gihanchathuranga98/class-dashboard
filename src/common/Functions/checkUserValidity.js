import axios from "axios";


export const checkToken = async (token) => {
    try {
        var result;
        console.log('came to checkToken');
        axios.defaults.headers.post['Authorization'] = `Bearer ${token}`;
        // await axios.post('/checktoken', {headers: {"Acess-Control-Allow-Origin": "*", "Authorization": "Bearer " + token, "Accept": "application/json"}})
        await axios.post('/checktoken')
        .then((data) => {
        console.log("response data");
        console.log(data);
        if(data.data.isValid){
            console.log("is data valid - " + data.data.isValid);
            result = true;
        }else{
            result = false;
        }
        })
        .catch(error => {
        console.error(error);
        result = false;
        })
        console.log('before return - ' + result);
        return result;
    } catch (error) {
        console.error(error);
    }
}