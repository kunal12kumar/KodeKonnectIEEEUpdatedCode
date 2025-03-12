import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Timeline() {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });

    const events = [
        { title: "12 March", time: "Release of Problem Statement" },
        { title: "15 March", time: "Registration Deadline" },
        { title: "16 March", time: "Online Round" },
        { title: "17 March", time: "Phase 1 Result Declared" },
        { title: "17 March", time: "Phase 2 Registration Start" },
        { title: "19 March", time: "Phase 2 Registration Deadline" },
        { title: "22 March", time: "OFFLINE Round RGIPT CAMPUS" },
        { title: "23 March", time: "Hackathon Result Declared" },
        
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
                            <p className="text-sm text-black">{event.time}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
