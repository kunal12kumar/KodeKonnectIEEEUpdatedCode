import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Timeline() {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });

    const events = [
        { title: "Day 1", time: "Best of luck" },
        { title: "Inaugural Ceremony", time: "10:00 AM - 11:30 AM" },
        { title: "Hackathon Starts", time: "12:00 PM" },
        { title: "VLSI Workshop", time: "03:00 PM - 05:00 PM" },
        { title: "First Round of Evaluation", time: "06:00 PM - 07:45 PM" },
        { title: "Day 2", time: "Best of Luck" },
        { title: "VLSI Workshop", time: "10:00 AM - 12:00 PM" },
        { title: "Hackathon Ends", time: "01:00 PM" },
        { title: "Final Round of Evaluation", time: "03:00 PM - 04:45 PM" },
        { title: "Valedictory Ceremony", time: "06:00 PM - 07:30 PM" }
    ];

    return (
        <div className="min-h-screen about-section">
            <div className="timeline-section fade-in rounded-lg">
                <h2 className="mx-auto justify-center flex font-agu font-semibold highlightmobile sm:highlight">
                    Timeline
                </h2>

                {/* Timeline container */}
                <div ref={ref} className="timeline flex flex-col items-center">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item font-roboto p-4 my-4 w-[80%] sm:w-[50%] text-center bg-blue-500 text-white rounded-lg shadow-md"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(255, 255, 255, 0.4)" }}
                        >
                            <h3 className="text-lg font-semibold">{event.title}</h3>
                            <p className="text-sm">{event.time}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
