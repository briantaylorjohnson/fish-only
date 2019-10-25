import axios from "axios"

export default
{
    authUser: (authData) => { return axios.post("/api/authUser", authData)}
}