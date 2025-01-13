import React from "react";

export default function RegistrationInstructions() {
    {/* Registration Instructions */ }

    return (
        <section className="about-section fade-in mt-12"  id="about">
            <div className="dropdown sm:dropdown-hover   w-[80%] h-[700px]">
                <div tabIndex={0} role="button" className="btn my-12 font-agu about-hover-effect text-sm text-center sm:text-5xl bg-black text-white">Registration Instructions</div>
                <ul tabIndex={0} className="dropdown-content menu  rounded-box z-[1] w-full text-white bg-black p-2 shadow text-left about-hover-effect ">
                    <li className=" about-hover-effect border-[1px] p-1 m-1 border-[white] text-[20px]   hover:bg-[#554d4d] rounded-lg"><a>Teams should consist of 3 participants.</a></li>
                    <li className=" about-hover-effect border-[1px] p-1 m-1 border-[white] text-[20px]   hover:bg-[#554d4d] rounded-lg"><a>Participants can form teams across different colleges (inter-college teams are allowed).</a></li>
                    <li className=" about-hover-effect border-[1px] p-1 m-1 border-[white] text-[20px]   hover:bg-[#554d4d] rounded-lg"><a>The last date to register is 30 January, 2025 .</a></li>
                    <li className=" about-hover-effect border-[1px] p-1 m-1 border-[white] text-[20px]   hover:bg-[#554d4d] rounded-lg"><a>A registration fee of ₹399 per team is required for IEEE members.</a></li>
                    <li className=" about-hover-effect border-[1px] p-1 m-1 border-[white] text-[20px] px-4   hover:bg-[#554d4d] rounded-lg">The team leader is required to complete the registration form on behalf of all team members.</li>
                    <li className=" about-hover-effect border-[1px] p-1 m-1 border-[white] text-[20px] px-4   hover:bg-[#554d4d] rounded-lg">Please ensure you bring your own laptops. The college authorities will provide Wi-Fi and support for PPT screening.</li>
                    <li className=" about-hover-effect border-[1px] p-1 m-1 border-[white] text-[20px]   hover:bg-[#554d4d] rounded-lg"><a>Any form of plagiarism, cheating, or disruptive behavior will lead to disqualification.</a></li>
                    <li className=" about-hover-effect border-[1px] p-1 m-1 border-[white] text-[20px]   hover:bg-[#554d4d] rounded-lg"><a>Exciting prizes will be awarded to the top teams.</a></li>
                    <li className=" about-hover-effect border-[1px] p-1 m-1 border-[white] text-[20px]   hover:bg-[#554d4d] rounded-lg"><a>For any assistance, reach out to the organizing team.</a></li>
                    <li className=" about-hover-effect border-[1px] p-1 m-1 border-[white] text-[20px]   hover:bg-[#554d4d] rounded-lg"><a>Keep an eye on our official website and FAQs to stay informed.</a></li>

                </ul>
            </div>
        </section>
    )
}