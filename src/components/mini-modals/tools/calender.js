import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
 
function Calendary() {
    const [value, onChange] = useState(new Date());
 
    return (
        <div>
            <center>
            {/* <h1>Calendar - GeeksforGeeks</h1> */}
            <Calendar
                onChange={onChange}
                value={value}
                calendarType="US"
                className="m-2 text-black"
                
            />
            </center>
            
        </div>
    );
}
export default Calendary;