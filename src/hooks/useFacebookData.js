import {useState, useEffect } from 'react';
import getFbData from '../services/facebook';

const loadLocalStorageData = () => {
    const data = JSON.parse(localStorage.getItem('fbdata'))

    if (data && data.saved_on && data.saved_on - Date.now() < 3600000){
        console.log("yay")
        return data;
    }
    else{
        console.log("nay");
        return null
    }  
}

const useFacebookData = () => {
    const [ fbData, setFbData ] = useState(null)
    useEffect(()=>{
        const storage_data = loadLocalStorageData();
        if(storage_data){
            setFbData(storage_data.data);
        }else{
            const fetchData = async () => {
                const result = await getFbData()
                console.log(result)
                setFbData(result);
                const date = Date.now()
                const to_be_stored = {
                    saved_on: date,
                    data:result
                }
                localStorage.setItem('fbdata', JSON.stringify(to_be_stored))
            };
           
            fetchData();
        }
        
    }, [])

    return fbData;
};


export default useFacebookData;

