import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function RegistrationInstructions() {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });

   const instructions=[
        {
          "title": "Phase 1: Registration",
          "description": "Form a team of 3-4 members (all team members must belong to the same college). Select a problem statement from the provided options. Ensure all information submitted during registration is accurate."
        },
        {
          "title": "Phase 1: Online Assessment (OA)",
          "description": "Teams must participate in an Online Assessment to evaluate their understanding of the selected problem statement. The OA link will be sent via email to the registered teams. The OA slot will remain open for 24 hours to accommodate any technical issues."
        },
        {
          "title": "Phase 1: Selection Announcement",
          "description": "Shortlisted teams will be informed via email. These teams can continue developing real-world solutions for their selected problem statements."
        },
        {
          "title": "Phase 2: Registration",
          "description": "Shortlisted teams for Phase 2 must re-register. The registration fee is Rs. 600 per team for RGIPT students and Rs. 1200 per team for Non-RGIPT students (i.e., Rs. 600 for registration + Rs. 600 for accommodation and food). Deadline for the same is 19th March 2025."
        },
        {
          "title": "Phase 2: Offline Hackathon Finals",
          "description": "Teams will refine their solutions with guidance from industry and academic mentors."
        }
      ]
      

    return (
        <motion.section 
            ref={ref}
            className="about-section fade-in mt-12" 
            id="about"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1.5 }}
        >
            <div className="mx-auto sm:w-[80%] min-h-screen">
                <motion.div 
                    tabIndex={0} 
                    role="button" 
                    className="btn my-12 font-agu about-hover-effect text-sm text-center sm:text-5xl bg-black text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8 }}
                >
                    Registration Instructions
                </motion.div>
                <motion.ul 
                    tabIndex={0} 
                    className="dropdown-content menu rounded-box z-[1] w-full text-white bg-black p-2 shadow text-left about-hover-effect"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                >
                    {instructions.map((text, index) => (
                        <motion.li
                            key={index} 
                            className="about-hover-effect border-[1px] sm:p-1 m-1 border-[white] sm:text-[20px] hover:bg-[#554d4d] rounded-lg"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <a>{text.title}</a>
                            <p className="text-wrap bg-[#29303f] ">{text.description}</p>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </motion.section>
    );
}
