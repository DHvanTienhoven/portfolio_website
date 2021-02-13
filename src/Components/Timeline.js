import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import timelineData from './data/timelineData';
import 'react-vertical-timeline-component/style.min.css';
import { BsFillBriefcaseFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import {FaFan, FaJs, FaHtml5} from "react-icons/fa";
import {DiCss3, DiReact, DiSass} from "react-icons/di";
import {ReactComponent as Jest} from "./img/jest.svg";

const Timeline = () => {

    const [infoVisibility, setInfoVisibility] = useState(timelineData)

    const toggleVisibility = index => {
        const newVisibility = [...infoVisibility]
        newVisibility[index].showInfo = !newVisibility[index].showInfo
        setInfoVisibility(newVisibility)
    }

    const getIcon = item => {
        if (item === "Winc") {
            return <IoMdSchool 
            style={{
                color: "white",
            }}/>
        } if (item === "opdracht") {
            return <BsFillBriefcaseFill
                style={{
                    color: "white",
                }} />
        } if (item === "hobby") {
            return <FaFan
                style={{
                    color: "white",
                }} />
        } if (item === "JavaScript"){
            return <FaJs
            style={{
                fill: "#f0db4f"
            }}/>
        } if (item === "html"){
            return <FaHtml5
            style={{
                fill: "#e44d26"
            }}/>
        } if (item === "CSS"){
            return <DiCss3
            style={{
                fill: "#296de4"
            }}/>
        } if (item === "React"){
            return <DiReact
            style={{
                fill: "#61dbfb"
            }}/>
        } if (item === "Sass"){
            return <DiSass
            style={{
                fill: "#cc6699"
            }}/>
        } if (item === "jest"){
            return <Jest/>
        }
    }

    const getColor = type => {
        if (type === "Winc") {
            return "#4f8bc9"
        } if (type === "opdracht") {
            return "#ffd900"
        } if (type === "hobby") {
            return "#ff9faf"
        } 
    }

    const getBorder = type => {
        return `solid 3px ${getColor(type)}`
    }

    

    return (
        <div className ="timeline">
            <VerticalTimeline>
                {timelineData.map((project, index) => {
                    return (
                        <VerticalTimelineElement
                            key = {index}
                            date={project.date}
                            icon={getIcon(project.type)}
                            iconStyle={{
                                backgroundColor: getColor(project.type),
                            }}
                            contentStyle={{
                                borderTop: getBorder(project.type),
                            }}
                        >
                            <div className="project-card">
                                <div className="foto" onClick={() => toggleVisibility(index)}>
                                    <img src={project.imgUrl} width="400px" alt={project.title}></img>
                                    <h3>{project.title}</h3>
                                </div>
                                {project.showInfo &&
                                    <div className="info" onClick={()=> toggleVisibility(index)}>
                                        <ul>
                                            {project.talen.map((item, index) => {
                                                return (
                                                    <li key ={index}>{getIcon(item)}</li>
                                                )
                                            })}
                                        </ul>
                                        <p>{project.text}</p>
                                        <br />
                                        <div className="links">
                                            {project.siteUrl &&
                                                <a 
                                                href={project.siteUrl} 
                                                target="_blank"
                                                style ={{
                                                    color: getColor(project.type)
                                                }}>Website</a>}
                                            {project.secondSiteUrl &&
                                                <a href={project.secondSiteUrl} 
                                                target="_blank"
                                                style ={{
                                                    color: getColor(project.type)
                                                }}>spin-off</a>}
                                            <a 
                                                href={project.gitHubRepo} 
                                                target="_blank"
                                                style ={{
                                                    color: getColor(project.type)
                                                }}>Code op GitHub</a>
                                        </div>
                                    </div>}
                            </div>
                        </VerticalTimelineElement>)
                })}
            </VerticalTimeline>
        </div>
    )
}

export default Timeline