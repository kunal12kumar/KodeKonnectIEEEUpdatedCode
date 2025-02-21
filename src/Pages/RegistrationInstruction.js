import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function RegistrationInstructions() {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });

    const instructions = [
        "Teams should consist of 3 participants.",
        "Participants can form teams across different colleges (inter-college teams are allowed).",
        "The last date to register is 30 January, 2025.",
        "A registration fee of ₹399 per team is required for IEEE members.",
        "The team leader is required to complete the registration form on behalf of all team members.",
        "Please ensure you bring your own laptops. The college authorities will provide Wi-Fi and support for PPT screening.",
        "Any form of plagiarism, cheating, or disruptive behavior will lead to disqualification.",
        "Exciting prizes will be awarded to the top teams.",
        "For any assistance, reach out to the organizing team.",
        "Keep an eye on our official website and FAQs to stay informed."
    ];

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
                            <a>{text}</a>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </motion.section>
    );
}
