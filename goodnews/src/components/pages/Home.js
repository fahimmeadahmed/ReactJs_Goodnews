import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        loadNews();
        }, []);

    const loadNews = async (id) => {
        const result = await axios.get("http://localhost:53780/api/NList/1")
        setNews(result.data)
    }
    return (
        <div className="container">
            <div className="py-4"></div>
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">Titles</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {       <tr>
                                <td>{news.title}</td>
                            </tr>
                            
                    }
                </tbody>
            </table>
           <Link className="nav-link" exact to="/title">More</Link>
        </div>
    );
};

export default Home;