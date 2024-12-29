// this page contain time line of hackathon 
import React from "react";


// function 

export default function Timeline() {

    // here creating event list event and when it happens
    
    const events=[
        {
            title:'Day 1',
            time:'Best of luck'
        },
        
        {
            title:'Inaugural Ceremony ',
            time:'10:00 AM - 11:30 AM'
        },

        {
            title:'Hackathon Starts ',
            time:'12:00 PM'
        },

        {
            title:'VLSI Workshop ',
            time:'03:00 PM - 05:00 PM'
        },

        {
            title:'First Round of Evaluation ',
            time:'06:00 PM - 07:45 PM'
        },

        {
            title:'Date 2 ',
            time:'Best of Luck'
        },
        {
            title:'VLSI Workshop ',
            time:'10:00 AM - 12:00 PM'
        },

        {
            title:'Hackathon Ends ',
            time:'01:00 PM'
        },

        {
            title:'Final Round of Evaluation ',
            time:'03:00 PM - 04:45 PM'
        },

        {
            title:'Valedictory Ceremony  ',
            time:'06:00 PM - 07:30 PM'
        },


    ]

    return (
        <div className=" min-h-screen about-section  ">

            <div className="timeline-section fade-in rounded-lg ">

                <h2 className="mx-auto justify-center flex font-agu font-semibold highlight">Timeline</h2>
                <div className="timeline flex justify-center items-center">
                    {['Best of luck','10:00 AM - 11:30 AM','12:00 PM','03:00 PM - 05:00 PM','06:00 PM - 07:45 PM','Best of Luck','10:00 AM - 12:00 PM','01:00 PM','03:00 PM - 04:45 PM','06:00 PM - 07:30 PM'].map((Time, index) => (
                        <div key={index} className="timeline-item font-roboto">
                            <div className="timeline-content">
                                
                                <p>Event {index + 1}: {events[index]?.title || "Coming Soon"}</p>
                                <h3>Time : {Time || "Best of luck"}</h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

