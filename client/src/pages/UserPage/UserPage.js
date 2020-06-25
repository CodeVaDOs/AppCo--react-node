import React from 'react';
import './userPage.scss';
import { Link } from 'react-router-dom';
import { useFindUserById } from "../../ajax";

const ListUsersPage = (props) => {
   const userID = window.location.pathname.split('/')[3];
    const { data, loading } = useFindUserById(userID);

    if (!loading) console.log(data);

    return (
        <div className="userPage">
            <div className="header">
                <div className="container-block">
                    <p className="logo-text">
                        AppCo
                    </p>
                </div>
            </div>
            <div className="main">
                <div className="container-block">
                    <Link to="/"><span className="text-black-50">Main page</span></Link> <span className="mx-2"> <span className="text-black-50"> > </span> </span> <Link to="/listuserspage"><span className="text-black-50">User statistics</span></Link> <span className="text-black-50"> > </span> <Link to={`/listuserspage/userpage/${userID}`}> User page</Link>

            </div>
            </div>

            <div className="footer mx-auto">
                <div className="container-block text-center mx-auto d-flex justify-content-between align-items-center">
                    <p className="footer-text m-0">AppCo</p>
                    <p className="footer-text m-0">All rights reserved by ThemeTags</p>
                    <p className="footer-text m-0">Copyrights © 2019.</p>
                </div>
            </div>
        </div>
    );
}

export default ListUsersPage;

