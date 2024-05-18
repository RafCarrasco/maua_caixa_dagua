import axios from 'axios'


export const api = axios.create({
  baseURL:'http://localhost:3000/api/timeseries/v0.5/smartcampusmaua',
  
})