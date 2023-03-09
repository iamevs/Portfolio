import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";
import { technologies } from "../constants/index.js";

const ServiceCard = ({ index, name, icon }) => (
    <Tilt className='xs:w-[250px] w-full flex justify-center items-center'>
        <div
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card content-center'
        >
            <div
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <img
                    src={icon}
                    alt='web-development'
                    className='w-16 h-16 object-contain'
                />

                <h3 className='text-white text-[20px] font-bold text-center'>
                    {name}
                </h3>
            </div>
        </div>
    </Tilt>
);

const Tech = () => {
    return (
        <>
            <div className='mt-20 flex flex-wrap gap-10'>
                {technologies.map((tech, index) => (
                    <ServiceCard key={tech.name} index={index} {...tech} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "tech");
