import Navbar from "../Home/Header/Navbar";
import EventLayout from "./EventLayout";

const Event = () => {
    return (
        <div className="bg-gradient-to-tr from-green-200 via-green-300 to-blue-500">
            <Navbar />
            <EventLayout/>
        </div>
    );
};

export default Event;
