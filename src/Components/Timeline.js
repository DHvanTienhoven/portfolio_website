import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import timelineData from './data/timelineData'
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
    return (
        <div>
            <VerticalTimeline>
                {timelineData.map(item => {
                    return (
                        <VerticalTimelineElement
                            date={item.date}>
                            <div className="project-card">
                                <div className="foto">
                                    <img src={item.imgUrl} width="400px" alt={item.title}></img>
                                    <h3>{item.title}</h3>
                                </div>
                                <div className = "info">
                                    <p>{item.text}</p>
                                    <br/>
                                    <div className = "links">
                                    {item.siteUrl &&
                                        <a href = {item.siteUrl} target= "_blank">Website</a>}
                                    {item.secondSiteUrl &&
                                        <a href = {item.secondSiteUrl} target= "_blank">spin-off</a>}
                                    <a href = {item.gitHubRepo} target= "_blank">Github repository</a>
                                    </div>
                                </div>
                            </div>
                        </VerticalTimelineElement>)
                })}
            </VerticalTimeline>
        </div>
    )
}

export default Timeline