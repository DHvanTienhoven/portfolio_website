import React from 'react';
import { BsFillBriefcaseFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import {FaFan, FaBriefcase } from "react-icons/fa";

function TimelineHeader() {
    return (
        <div className = "projecten">
            <h1>Projecten:</h1>
            <ul>
                <li key = "1">
                    <IoMdSchool
                    style={{
                        backgroundColor: "#4f8bc9"
                    }}/>
                    <span>Werk voor de opleiding</span>
                </li>
                <li key = "2">
                    <BsFillBriefcaseFill
                        style={{
                            backgroundColor: "#ffd900",
                        }}/>
                    <span>Werk in opdracht</span>
                </li>
                <li key = "3">
                    <FaFan
                        style={{
                            backgroundColor: "#ff9faf"
                        }}/>
                    <span>Hobbyprojecten</span>
                </li>
            </ul>
            <em>Click op een foto voor meer informatie</em>
        </div>
    )
}

export default TimelineHeader
