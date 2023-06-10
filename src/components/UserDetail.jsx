import React from "react";
import { useParams } from "react-router-dom";


import usersService from '../services/user'


const UserDetail = () => {
    const {id} = useParams();

    const [user,setUser] = React.useState({});

    React.useEffect(() =>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await usersService.getById(id);
        const users = data.data
        setUser(users);
    };

    return(
        <div id="div-conteiner-detail">
            <ul id="container-detail">
                <li id="titulo">{user.first_name}</li>
                <div id="container-info-product">
                    <li id="description">{user.last_name}</li>
                    <li id="category">{user.email}</li>
                </div>
            </ul>
        </div>
    );
}

export default UserDetail