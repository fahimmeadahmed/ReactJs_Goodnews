import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import '../pages/Calendar.css'

const Details = () => {
    const [details, setDetails] = useState({
        description: "",
        title: ""
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
        <div className="container py-4" >
            <div className="margin">
                <Link className="btn btn-primary " to="/title">Back</Link>
            </div>





            {

                <div className="container py-4">
                    <table>
                        <td>
                            <tr>
                                {details.description}
                            </tr>
                        </td>
                    </table>

                </div>


            }
            <div className="container py-4">
                <Link className="btn btn-primary" to="/">Back to Home</Link>
            </div>

        </div >
    );
};

export default Details;