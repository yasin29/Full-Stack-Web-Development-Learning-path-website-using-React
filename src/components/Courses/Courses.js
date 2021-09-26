import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Courses.css'
const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const handleClickButton = course => {
        if (!carts.includes(course)) {
            const newCarts = [...carts, course];
            setCarts(newCarts);
        }
    }
    return (
        <div className="courses">
            <div className="course">
                {
                    courses.map(course => <Course
                        key={course._id}
                        course={course}
                        handleClickButton={handleClickButton}
                    />)
                }
            </div>
            <div>
                <Cart cart={carts} />
            </div>
        </div>
    );
};

export default Courses;