import axios from "axios";

const checkUserDuplications = async (filters) => {
    try {
        let f_data;
        console.log('filters', filters);
        await axios.post('/findUser', filters)
        .then(data => {
            console.log('camt to user data', data);
            if(data.data.userId){
                console.log('fucking user is available', data.data.userId);
                f_data = data.data.userId;
            }else{
                console.log('fucking user is not available');
                return false;

            }
        })
        .catch(error => {
            return false;
        })
        return f_data;
    } catch (error) {
        return false;
    }
}

export default checkUserDuplications;