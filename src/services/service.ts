import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://gen-projetos.onrender.com/'
})