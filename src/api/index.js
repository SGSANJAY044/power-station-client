import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:8080/api'})

//authentication
export const login = (authData) => API.post('/user/login',authData)
export const signup = (authData) => API.post('/user/signin',authData)

//getallstations

export const station = () => API.get('/station/getallstations')

//station_activate

export const activateStation = (authData) => API.post('/host/activate',authData)


//station_insert

export const insertStation = (authData) => API.post('/station/insert',authData)

//station_update

export const updateStation = (authData) => API.put('/station/updateuser',authData)

//station_delete

export const deleteStation = (authData) => API.put('/station/deleteuser',authData)

//host

export const alldata = () => API.get('/host/getall')
