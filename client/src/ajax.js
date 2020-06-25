import {useEffect, useState} from "react";
import axios from "axios";


export const useGetAllUsers = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    const fetchAllUsers = () => {
        axios.get("http://localhost:8000/api/users/getusers")
            .then(response => {
                setData(response.data);
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchAllUsers();
    }, []);

    return {data, loading};

};

export const useFindUserById = (id) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);


    const fetchUser = () => {
        axios.get("http://localhost:8000/api/users/getuserbyid", {
            params: {
                id: id
            }
        })
            .then(response => {
                console.log(response);

                setData(response.data);
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return {data, loading};
}