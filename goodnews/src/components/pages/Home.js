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
        const result = await axios.get("http://localhost:53780/api/NList/1")
        setNews(result.data)
    }
    return (
        <div className="container">
            <div className="py-4"></div>
            <h1>Title Page</h1>
            <table class="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">Titles</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        news.map((record, index) => (
                            <tr>

                                <td>{record.title}</td>
                            </tr>


                        ))}
                </tbody>
            </table>

        </div>

    );
};

export default Title;