import axios from 'axios'
import config from '../config'

const site = axios.create({
  baseURL: config.API.SITE_URL
})
site.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

const cnode = axios.create({
  baseURL: config.API.CNODE_URL
})

export { site, cnode }
