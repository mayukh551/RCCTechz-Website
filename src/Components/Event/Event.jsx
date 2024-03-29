import Navbar from "../Home/Header/Navbar";
import EventLayout from "./EventLayout";
import classes from './Event.module.css'

const Event = () => {
    return (
        <div
            // className="bg-gradient-to-tr from-green-200 via-green-300 to-blue-500"
            // className="bg-gradient-to-tr from-green-200 via-green-300 to-blue-500"
            className={`${classes.bg}`}
        >
            <Navbar />
            <EventLayout />
        </div>
    );
};

export default Event;
