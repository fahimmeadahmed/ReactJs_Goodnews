import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const Details = () => {
    const [details, setDetails] = useState({
        description: ""
    });

    const { id } = useParams();
    useEffect(() => {
        loadNews();
    }, []);
    const loadNews = async () => {
        const res = await axios.get(
            `http://localhost:53780/api/NList/${id}`
        );
        setDetails(res.data);
    };
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/title">back to Titles</Link>
            <h1 className="display-4"></h1>
            <hr />
            <p>{details.description}</p>
        </div>

    );
};

export default Details;