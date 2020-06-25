import React from 'react';
import './listUsersPage.scss';
import { Link } from 'react-router-dom';
import { RoundLoader } from "../../components/loaders/Loaders";
import { useGetAllUsers } from "../../ajax";

const ListUsersPage = () => {

    const { data, loading } = useGetAllUsers();


    return (
            <div className="listUsersPage">
                <div className="header">
                    <div className="container-block">
                        <p className="logo-text">
                            AppCo
                        </p>
                    </div>
                </div>
                <div className="main">
                    <div className="container-block">
                        <Link to="/"><span className="text-black-50">Main page</span></Link> <span className="mx-2"> <span className="text-black-50"> > </span> </span> <Link to="/listuserspage">User statistics</Link>

                        <div className="table d-flex justify-content-center align-items-center">
                            <table>
                                <thead>
                                    <tr className="table-header-row">
                                        <td className="table-header-element">Id</td>
                                        <td className="table-header-element">First name</td>
                                        <td className="table-header-element">Last name</td>
                                        <td className="table-header-element">Email</td>
                                        <td className="table-header-element">Gender</td>
                                        <td className="table-header-element">IP address</td>
                                        <td className="table-header-element">Total clicks</td>
                                        <td className="table-header-element">Total page views</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!loading ? data.map((item, i) => {
                                        if(i < 16)
                                            return (
                                                <tr className="table-row">
                                            <td className="table-element">{item.id}</td>
                                                    <td className="table-element"><Link to={`/listuserspage/userpage/${item.id}`}>{item.first_name}</Link></td>
                                            <td className="table-element">{item.last_name}</td>
                                            <td className="table-element">{item.email}</td>
                                            <td className="table-element">{item.gender}</td>
                                            <td className="table-element">{item.ip_address}</td>
                                            <td className="table-element">290 883</td>
                                            <td className="table-element">290 883</td>
                                        </tr>
                                            )
                                        }
                                    ) : <div className="d-flex justify-content-center align-items-center loader"><RoundLoader /></div>}
                                </tbody>
                            </table>
                        </div>
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

