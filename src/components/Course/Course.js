import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import './Course.css'
const Course = (props) => {
    const icon = <FontAwesomeIcon icon={faCogs} />
    const { name, level, instructor, credit, company, img } = props.course;
    // console.log(img);
    return (
        <div className="cart">
            <img className="image" src={img} alt="" />
            <h1>Course Name: {name}</h1>
            <p>Difficulty Level: {level}</p>
            <p>Instructor Name: {instructor}</p>
            <h4>Credits: {credit}</h4>
            <p><small>powered by:</small> {company}</p>
            <button
                onClick={() => props.handleClickButton(props.course)}
                className="btn-regular"
            >Entroll Now  {icon}</button>
            <br />
            <div className="social">
                <small>Join US: </small> <i className="fab fa-reddit"></i><i className="fab fa-discord"></i>
            </div>
        </div>
    );
};

export default Course;