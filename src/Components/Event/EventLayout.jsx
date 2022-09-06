import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { query, orderBy } from "firebase/firestore";
import { db } from "../../firebase.js";
import EventListItem from "./EventListItem";

const EventLayout = () => {
    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        const eventRef = collection(db, "events");

        // q is a reference to the collection events
        const q = query(eventRef, orderBy("eventNo", "desc"));

        async function fetchOrderedData(q) {
            const querySnapshot = await getDocs(q);
            var events = [];
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                events.push(doc.data());
            });
            setEventData([...events]);
        }

        fetchOrderedData(q).catch((err) => console.log("Error", err));
    }, []);

    return (
        <div className="overflow-x-hidden py-20 pl-8 sm:px-12 md:px-24">
            <h1 className="text-2xl sm:text-4xl font-semibold underline underline-offset-8 text-left mb-16">
                Timeline of Events
            </h1>
            {eventData.length !== 0 && (
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                    {eventData.map((event, index) => {
                        return <EventListItem event={event} index={index} />;
                    })}
                </ol>
            )}
        </div>
    );
};

export default EventLayout;
