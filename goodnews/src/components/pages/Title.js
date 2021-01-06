import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../pages/Calendar.css'
import moment from 'moment'

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
        // result.data.map(x => (
        //     x.date = x.date.toLocaleDateString()
        // ));
        setNews(result.data)
    }
    return (
        <div className="container">
            <div className="py-4"></div>

            <table className="table border shadow">
                {/* <thead>

                </thead> */}
                <tbody>
                    {
                        news.map((record, index) => (
                            <tr>
                                <th scope="row"></th>
                                <td><Link className="link" to={`/details/${record.id}`}>{record.title}</Link></td>
                                <td>
                                </td>

                                {/* <td>{moment(record.date).format('ll')}
                                </td> */}

                            </tr>

                        )
                        )}
                </tbody>
            </table>

        </div>

    );
};

export default Title;