import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const Details = () => {
    const [details, setDetails] = useState({
        description: "",
        date: ""
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
        <div>

            <div className="container py-4">
                <Link className="btn btn-primary" to="/title">All News</Link>

                <h1 className="display-4"></h1>

                <b>{details.title}</b>
                <hr />
                <p>{details.description}</p>
                <p>{details.date}</p>
            </div >
            <div className="container py-4">
                <Link className="btn btn-primary" to="/">Back to Home</Link>
            </div>
        </div >

    );
};

export default Details;