import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const courses = useLoaderData();
    const { title, image, description, id } = courses
    console.log(courses);
    return (
        <div>
            <div className="title">{title}</div>
            <div className="img">{image}</div>
            <div className="description">{description}</div>
        </div>
    );
};

export default CourseDetail;