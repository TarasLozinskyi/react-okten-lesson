import axios, {AxiosResponse} from "axios";
import {IPostModel} from "../models/IPostModel";
import {IUsersResponseModel} from "../models/response/IUsersResponseModel";
import {IPostsResponseModel} from "../models/response/IPostsResponseModel";


const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers:{"Content-Type":'application/json'}
    }
)

const getAllUsers =():Promise<AxiosResponse<IUsersResponseModel>> =>{
    return axiosInstance.get('/users');
}

const getAllPostsOfSingleUser =(userId:number):Promise<AxiosResponse<IPostsResponseModel>> =>{
     return axiosInstance.get('posts/user/' + userId);
}

export {
    getAllUsers,
    getAllPostsOfSingleUser
}
