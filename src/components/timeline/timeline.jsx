import "./timeline.css";
// import { ReactComponent as SchoolIcon } from "./school.svg";
import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  // let schoolIconStyles = { background: "#f9c74f" dark:"background-white"};
    let schoolIconStyles = {background:"#f9c747"};


  return (
    <div id="EduPage" className="mb-20 mt-10">
      <h1 id="title" className="title text-white">Education</h1>
      <hr className="hrule-tl"/>
      <div className="mobile-tl "></div>

      <VerticalTimeline 
        lineColor="blue"
      >
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.key}
              dateClassName="date"
              iconStyle={schoolIconStyles}
              // icon={<SchoolIcon />}
              className = {"box"}
              contentStyle={{ background: '#eab308', color: 'black' }}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              <p id="description">{element.date}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
