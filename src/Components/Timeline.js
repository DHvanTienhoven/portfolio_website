import React, { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import timelineData from './data/timelineData'
import 'react-vertical-timeline-component/style.min.css';
import winclogo from './img/winclogo.png'

const Timeline = () => {

const [infoVisibility, setInfoVisibility] = useState(timelineData)

const clickEvent = index =>{
    const newVisibility = [...infoVisibility]
    newVisibility[index].showInfo = !newVisibility[index].showInfo
    setInfoVisibility(newVisibility)
}

const getClassName = item =>{
    if(item.type==="Winc"){
        return "project-card project-card--blue"
    }if(item.type==="opdracht"){
        return "project-card project-card--yellow"
    } if(item.type==="hobby"){
        return "project-card project-card--pink"
    }
}

    return (
        <div>
            <VerticalTimeline>
                {timelineData.map((item, index) => {
                    return (
                        <VerticalTimelineElement
                            date={item.date}
                            icon ={winclogo}>
                            <div className={getClassName(item)}>
                                <div className="foto" onClick = {()=>clickEvent(index)}>
                                    <img src={item.imgUrl} width="400px" alt={item.title}></img>
                                    <h3>{item.title}</h3>
                                </div>
                                {item.showInfo&&
                                <div className="info">
                                    <ul>
                                        {item.talen.map(item =>{
                                            return(
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