import React from "react";
import CourseType from "../types/Course";

const Course: React.FC<CourseType> = ({ name, bgColor, image }: CourseType) => {
  return (
    <div className="Course">
      <div className="image" style={{ backgroundColor: bgColor }}>
        <img src={image} />
      </div>
      <h1>{name}</h1>
    </div>
  );
};

export default Course;
