import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {link} from "node:fs";

interface IProps{
    user:IUserModel;
}

type IPropsType = IProps & {lift?:(userId:number)=>void}

const UserComponent:FC<IPropsType> = ({user, lift}) => {

    const handler =()=>{
       if(lift){
           lift(user.id);
       }
    }
    return (
        <div>
            <img src={user.image} />
            <h2>{user.id} {user.lastName} {user.firstName} {user.maidenName}</h2>
            <p>
                age: {user.age}<br/>
                gender: {user.gender}<br/>
                email: {user.email}<br/>
                phone: {user.phone}<br/>
                username: {user.username}<br/>
                password:{user.password}<br/>
                birthDate:{user.birthDate}<br/>
                height:{user.height}<br/>
                weight:{user.weight}<br/>

            </p>
            <button onClick={handler}>Show Posts</button>
            <hr/>

        </div>
    );
};

export default UserComponent;