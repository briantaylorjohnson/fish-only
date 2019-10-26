import axios from "axios"

export default
{
    authUser: (authData) => { return axios.post("/api/authUser", authData)},
    getReports: (user) => {return axios.post("/api/reports", user)},
    deleteReport: (report) => {return axios.post("/api/deleteReport", report)}
}