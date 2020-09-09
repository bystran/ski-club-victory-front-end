import axios from 'axios';

const url = "http://localhost:1337/facebook-posts" 

const fetch_fb_data = async () => {
    const res = await axios.get(url);

    return res.data;
}

export default fetch_fb_data;