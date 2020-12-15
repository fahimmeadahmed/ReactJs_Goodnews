import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import '../pages/Calendar.css'


function Calendar() {
    const [selectedDate, setSelectedDate] = useState(null)

    function newsdetails() {
        return (
            <div>

            </div>
        )
    }
    return (
        <div className="date">
            <b>News Date</b> <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                // onChange = { this.eventHandler()}
                dateFormat='dd/MM/yyyy'
                maxDate={new Date()}
                showYearDropdown
                scrollableYearDropdown
            />

        </div>
    )
}
export default Calendar
