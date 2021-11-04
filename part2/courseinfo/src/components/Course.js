import React from "react";

const Header = ({course}) => <h2>{course.name}</h2>;

const Part = ({part}) => <p>{part.name} {part.exercises}</p>;

const Content = ({course}) => course.parts.map(part => <Part key={part.id} part={part} />);

const Total = ({course}) => {
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);
    return <p style={{fontWeight: "bold"}}>Total of {total} exercises</p>
};

const Course = ({course}) => {
    return(
        <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
        </div>
    );
};

export default Course;