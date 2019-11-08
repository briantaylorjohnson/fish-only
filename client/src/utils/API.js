import axios from "axios"

export default
{
    authUser: (authData) => { return axios.post("/api/authUser", authData)},
    getReports: (user) => {return axios.post("/api/reports", user)},
    deleteReport: (report) => {return axios.post("/api/deleteReport", report)},
    saveReport: (report) => {return axios.post("/api/fish", report)},
    getTackle: (user) => {return axios.post("/api/tackle", user)},
    saveTackle: (tackle) => {return axios.post("/api/saveTackle", tackle)},
    deleteTackle: (tackle) => {return axios.post("/api/deleteTackle", tackle)}
}