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
        console.log(index, infoVisibility[index].showInfo)
        const newVisibility = [...infoVisibility]
        newVisibility[index].showInfo = !newVisibility[index].showInfo
        setInfoVisibility(newVisibility)
    }

    const getIcon = (item) => {
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
                {timelineData.map((item, index) => {
                    return (
                        <VerticalTimelineElement
                            key = {index}
                            date={item.date}
                            icon={getIcon(item.type)}
                            iconStyle={{
                                backgroundColor: getColor(item.type),
                            }}
                            contentStyle={{
                                borderTop: getBorder(item.type),
                            }}
                        >
                            <div className="project-card">
                                <div className="foto" onClick={() => toggleVisibility(index)}>
                                    <img src={item.imgUrl} width="400px" alt={item.title}></img>
                                    <h3>{item.title}</h3>
                                </div>
                                {item.showInfo &&
                                    <div className="info" onClick={()=> toggleVisibility(index)}>
                                        <ul>
                                            {item.talen.map((item, index) => {
                                                return (
                                                    <li key ={index}>{getIcon(item)}</li>
                                                )
                                            })}
                                        </ul>
                                        <p>{item.text}</p>
                                        <br />
                                        <div className="links">
                                            {item.siteUrl &&
                                                <a 
                                                href={item.siteUrl} 
                                                target="_blank"
                                                style ={{
                                                    color: getColor(item.type)
                                                }}>Website</a>}
                                            {item.secondSiteUrl &&
                                                <a href={item.secondSiteUrl} 
                                                target="_blank"
                                                style ={{
                                                    color: getColor(item.type)
                                                }}>spin-off</a>}
                                            <a 
                                                href={item.gitHubRepo} 
                                                target="_blank"
                                                style ={{
                                                    color: getColor(item.type)
                                                }}>Code op Github</a>
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