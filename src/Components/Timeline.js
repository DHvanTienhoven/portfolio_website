import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import timelineData from './data/timelineData';
import 'react-vertical-timeline-component/style.min.css';
import { BsFillBriefcaseFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import {FaFan} from "react-icons/fa"

const Timeline = () => {

    const [infoVisibility, setInfoVisibility] = useState(timelineData)

    const clickEvent = index => {
        console.log(index, infoVisibility[index].showInfo)
        const newVisibility = [...infoVisibility]
        newVisibility[index].showInfo = !newVisibility[index].showInfo
        setInfoVisibility(newVisibility)
    }

    const getClassName = item => {
        if (item.type === "Winc") {
            return "project-card project-card--blue"
        } if (item.type === "opdracht") {
            return "project-card project-card--yellow"
        } if (item.type === "hobby") {
            return "project-card project-card--pink"
        }
    }

    const getIcon = item => {
        if (item.type === "Winc") {
            return <IoMdSchool 
            style={{
                color: "white",
            }}/>
        } if (item.type === "opdracht") {
            return <BsFillBriefcaseFill
                style={{
                    color: "white",
                }} />
        } if (item.type === "hobby") {
            return <FaFan
                style={{
                    color: "white",
                }} />
        }
    }

    const getColor = item => {
        if (item.type === "Winc") {
            return "#4f8bc9"
        } if (item.type === "opdracht") {
            return "#ffd900"
        } if (item.type === "hobby") {
            return "#ff9faf"
        }
    }

    const getBorder = item => {
        return `solid 3px ${getColor(item)}`
    }

    return (
        <div>
            <VerticalTimeline
                style ={{
                    backgroundColor: "#f0f8ff"
                }}>
                {timelineData.map((item, index) => {
                    return (
                        <VerticalTimelineElement
                            date={item.date}
                            icon={getIcon(item)}
                            iconStyle={{
                                backgroundColor: getColor(item),
                            }}
                            contentStyle={{
                                borderTop: getBorder(item)
                            }}
                        >
                            <div className={getClassName(item)}>
                                <div className="foto" onClick={() => clickEvent(index)}>
                                    <img src={item.imgUrl} width="400px" alt={item.title}></img>
                                    <h3>{item.title}</h3>
                                </div>
                                {item.showInfo &&
                                    <div className="info">
                                        <ul>
                                            {item.talen.map(item => {
                                                return (
                                                    <li>{item}</li>
                                                )
                                            })}
                                        </ul>
                                        <p>{item.text}</p>
                                        <br />
                                        <div className="links">
                                            {item.siteUrl &&
                                                <a href={item.siteUrl} target="_blank">Website</a>}
                                            {item.secondSiteUrl &&
                                                <a href={item.secondSiteUrl} target="_blank">spin-off</a>}
                                            <a href={item.gitHubRepo} target="_blank">Code op Github</a>
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