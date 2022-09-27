
import Visibility from '@mui/icons-material/Visibility';
import React from "react";
import "./WidgetSm.css";

export default function WidgetSm() {
  return (
    <div className="WidgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://img.freepik.com/free-photo/portrait-handsome-young-man-with-crossed-arms_176420-15569.jpg?w=2000"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">CodeBindHex</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">CodeBindHex</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"  />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4NONZvdQAfKk2qTPNrbndXY-sWoqs3MsGlA&usqp=CAU"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">CodeBindHex</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5qc_t9z5eRfoyHgN2O8BOCahtrze71pyi5A&usqp=CAU"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">CodeBindHex</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2PwJtMipqQMVvlZpnsm_JcVUW97F7EBOY8Q&usqp=CAU"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">CodeBindHex</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
