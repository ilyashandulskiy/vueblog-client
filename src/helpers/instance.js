import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vueblog-api.herokuapp.com/'
})

export default instance