import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {getAllUsers} from "../../services/jpg.api.service";
import UserComponent from "../user/UserComponent";

type IPropsType = {lift?:(userId:number)=> void}

const UsersComponent: FC<IPropsType> = ({lift}) => {
    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        getAllUsers().then(({data: {users}}) => {
            setUsers(users)
        });
    }, [])


    return (
        <div>
            {users.map((user: IUserModel) => (<UserComponent key={user.id} user={user} lift={lift}/>))}

        </div>
    );
};

export default UsersComponent;