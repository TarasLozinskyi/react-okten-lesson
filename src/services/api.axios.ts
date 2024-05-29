import axios, { AxiosResponse} from "axios";
import {IUser} from "../models/IUser";


const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Заміни на свій API URL
  headers: {'Content-Type': 'application/json'}
});

const getUsers = (): Promise<AxiosResponse<IUser>> => {
  return instance.get('/users')
}

export {
  getUsers
}

