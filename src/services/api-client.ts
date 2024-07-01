import axios from "axios";


export default axios.create({
    baseURL : "https://localhost:7044/api",
    // params : {
    //     key : "7148f42dc1f246b899e3c9a0bf0f63d0"
    // }
});