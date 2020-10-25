import axios from 'axios';

const url = `${process.env.GATSBY_BACKEND_SERVER}/facebook-posts`
const fetch_fb_data = async () => {
    const res = await axios.get(url);
    console.log(url);
    return res.data;
}

export default fetch_fb_data;