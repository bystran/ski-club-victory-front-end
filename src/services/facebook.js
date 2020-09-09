import axios from 'axios';

const url = "https://victory.srworld.sk/"

const fetch_fb_data = async () => {
    const res = await axios.get(url);

    return res.data;
}

export default fetch_fb_data;