import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Title = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        loadNews();
    }, []);

    const loadNews = async () => {
        const result = await axios.get("http://localhost:53780/api/NList/1")
        setNews(result.data)
    }
    return (
        <div className="container">
            <div className="py-4"></div>


            <table class="table border shadow">
                <thead>
                    <tr>
                        <th scope="col"><b>{news.title}</b></th>

                        <th scope="col"></th>

                        {/* <th scope="col">Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {

                        <tr>

                            <td>{news.description}</td>


                        </tr>
                    }
                </tbody>
            </table>
            <Link className="nav-link" exact to="/title">More News</Link>

        </div>

    );
};

export default Title;