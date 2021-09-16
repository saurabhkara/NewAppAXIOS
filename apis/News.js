import axios from "axios";

export default axios.create({
    baseURL:'https://newsapi.org/v2/'
})


//top-headlines?country=us&apiKey=1ab37549de57441e88b0b6bab489d36e