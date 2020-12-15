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

            <table class="table border shadow">
                <thead>

                </thead>
                <tbody>
                    {
                        news.map((record, index) => (
                            <tr>
                                <th scope="row"></th>
                                <td>{record.title}</td>
                                <td>{record.date}</td>
                                <td>
                                    <Link class="btn btn-primary" to={`/details/${record.id}`}>Details</Link>
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