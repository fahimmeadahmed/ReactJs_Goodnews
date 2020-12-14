import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Title = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        loadNews();
        // return () => {
        //     cleanup
        // }
    }, []);

    const loadNews = async () => {
        const result = await axios.get("http://localhost:53780/api/NList")
        setNews(result.data)
    }
    return (
        <div className="container">
            <div className="py-4"></div>
            <h1>Title Page</h1>
            <table className="table border shadow">
                <thead>
                    <tr><th scope="col">No</th>
                        <th scope="col">Titles</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        news.map((record, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{record.title}</td>
                                <td>
                                    <Link className="btn btn-primary" to={`/details/${record.id}`}>View</Link>
                                </td>
                            </tr>

                        )
                        )}
                </tbody>
            </table>

        </div>

    );
};

export default Title;