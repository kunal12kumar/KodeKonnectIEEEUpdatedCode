// This contains all the frequently asked questions
import React from "react";


export default function Faq() {
    // faq questions

    const questions = [
        "Who can participate in the event?",
        "How many max participants are allowed in a team?",
        "Do I need to pay a registration fee?",
        "Do I need prior knowledge of VLSI to attend the workshop?",
        "Is the VLSI workshop open to all participants?",
        "How do I register for the event?",
        "Will food and accommodation be provided?",
        "Is there a helpline for queries during the event?"
    ];

    // faq answers

    const answers = [
        "The hackathon is open to all undergraduate students",
        "A fixed number of 3 students are allowed.",
        "Yes you have to pay a registration fee of Rs 399",
        " Prior knowledge is required! The workshop is designed to accommodate beginners as well as those with some experience in NoVLSI.",

        "Yes, the workshop is open to all registered participants of the event."

        ,
        "Visit the official event website and follow the registration process. Ensure you provide all required details accurately.",

        "Yes, food and accommodation will be arranged for participants attending the event in person. Details will be shared upon registration confirmation.",

        "You can contact the organizers should any queries come up."



    ]

    return (
        <div className="min-h-screen about-content m-5">
            <h1 className="mx-auto justify-center flex font-agu text-5xl mb-10 mt-5 text-[#e73b38f4] font-semibold highlight">Frequently Asked Questions</h1>


            {
                questions.map((question, index) => (
                    
                    <div key={index} className="collapse bg-black about-hover-effect hover:bg-[#473939] border-[2px] m-2 border-[white]">
                        <input type="radio" name="my-accordion-1" defaultChecked />
                        <div className="collapse-title text-xl font-roboto  ">{question}</div>
                        <div className="collapse-content ">
                            <h1 className="border-[1px] about-hover-effect font-playfair border-[white] rounded-lg p-2 text-xl">{answers[index]}</h1>
                        </div>
                    </div>
                ))
            }


        </div>

    )
}