import React, {useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {getUsers} from "../services/api.axios";

const UsersPage = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    // @ts-ignore
    getUsers().then(({data}) => setUsers(data));
  }, []);


  return (
    <div>
      {users.map(item=>(<div >{item.name}{item.address.geo.lat}</div>))}


    </div>
  );
};

export default UsersPage;