import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import '../pages/Calendar.css'
import axios from "axios"
import * as jQuery from "jquery"
import moment from 'moment';
import Details from './Details'
import { Link } from "react-router-dom";




function Calendar() {
    const [selectedDate, setSelectedDate] = useState(null)
    const [news, setNews] = useState([]);


    function handleChange(e) {
        console.log(e)
        let element = jQuery("#datePicker");
        let date = element[0].defaultValue;
        // moment(date).format('ll');
        let parseDate = Date.parse(date);
        axios.post(
            `http://localhost:53780/api/NList/NewsListSearchParams`, { Id: null, Date: date }
        ).then(data => {

            setNews(data.data)

            console.log(data)
        });

    }
    // let element = jQuery("#datePicker");
    // let date = element[0].defaultValue;
    // // moment(date).format('ll');
    // let parseDate = Date.parse(date);
    // console.log(date)
    // axios.post(
    //     `http://localhost:53780/api/NList/NewsListSearchParams`, { Id: null, Date: date }
    // ).then(data => {
    //     console.log(data)
    // });
    // console.log(e.target.date)
    // handleChange = date => {
    //     const valueOfInput = date.format();
    //     ///...
    // };
    // function handleClick() {
    //     console.log("clicked");

    // }

    return (
        <div>

            <div className="date">

                {/* <div>
                <input onChange={handleClick} />
            </div> */}
                <b>News Date</b>
                <DatePicker id="datePicker"
                    // onChange={e => handleChange(e.target.value)}
                    // onClick={handleClick()}
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    // onChange = { this.eventHandler()}
                    dateFormat='dd/MM/yyyy'
                    maxDate={new Date()}
                    showYearDropdown
                    scrollableYearDropdown

                />
                <br></br>
                <br></br>
                <Link className="btn btn-info" onClick={handleChange} type="submit">Submit</Link>

            </div>
            <br>
            </br>
            <br>
            </br>
            <div>
                <table className="table border shadow">
                    {
                        news.map((details, index) => {
                            return <div>

                                <tr>
                                    <td>
                                        {details.description}
                                    </td>
                                </tr>


                            </div>
                        })
                    }
                </table>

            </div>
        </div>
    )
}
export default Calendar;
