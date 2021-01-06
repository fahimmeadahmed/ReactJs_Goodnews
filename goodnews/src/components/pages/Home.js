import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Title = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        loadNews();
    }, []);

    const loadNews = async () => {
        const result = await axios.get(`http://localhost:53780/api/NList/1`)
        setNews(result.data)
        console.log(result.data);
    }
    return (
        <div className="container">
            {/* <div className="py-4"></div>
            {

                <div>
                    <table>
                        <tr>

                            <h5> {news.title}</h5>
                        </tr>
                        <tr>

                            <td>
                                {news.description}
                            </td>
                        </tr>
                    </table>

                </div>




            } */}
            <br>
            </br>
            <Link className="btn btn-primary" exact to="/title">More News</Link>


        </div >

    );
};

export default Title;