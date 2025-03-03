import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import createCourse from './createCourse';
import generateUniqueId from '../utils/id-generator';

export default function EducationInformationSection({ updateParent }) {
  
  const [educationInfo, setEducationInfo] = useState({
    courses: [{
      schoolName: "", 
        degree: "",
        fieldOfStudy: "",
        graduationYear: "",
        id: 0
      },
    ]
  });

  const [currentCourseId, setCurrentCourseId] = useState(0)
  
  const handleChange = (e) => { 
    const { name, value } = e.target; 
    setEducationInfo((prevData) => ({ 
      ...prevData,
      courses: prevData.courses.map((course) => { 
        if (course.id === currentCourseId) { 
          return { ...course, [name]: value }; // Update the specific course 
          }
        return course; // Return the course unchanged if it doesn't match 
      }) // end map
    })); // end setEducaiton 
  }; // end handleChange

    useEffect(() => {
      updateParent(educationInfo.courses)
    }, [educationInfo.courses]);

  const selectNextCourse = () => {
    const courseIndex = educationInfo.courses.indexOf(educationInfo.courses.find(course => {
      return course.id == currentCourseId}));
      // % operator loops the courseIndex
      setCurrentCourseId(educationInfo.courses[(courseIndex + 1) % educationInfo.courses.length].id);
  }

  const addCourse = () => {
    const newCourse = createCourse();
    setCourseId(newCourse);
    setEducationInfo(prevData => ({
      ...prevData,
      courses: [...prevData.courses, newCourse]
    }))
  }

  const setCourseId = (course) => {
    const idList = educationInfo.courses
      .map(course => course.id)
      .filter(id => id !== currentCourseId);
    const currentCourse = typeof course === "string" ? 
    educationInfo.courses.find(course => course.id == currentCourseId) :
    course;
    const courseName = currentCourse?.schoolName || "tempName";
    const id = generateUniqueId(courseName, idList);
    currentCourse.id = id;
    setCurrentCourseId(id);
  }



  return (
    <div data-id={currentCourseId}>
      <h3>Education</h3>
      <div>
        {Object.entries(educationInfo.courses.find((course) => 
        course.id === currentCourseId)).map(([key, value]) => 
          {
            if(key !== "id")return (<div key={key}> 
            <label>{key}:
              </label> 
              <input type="text" name={key} value={value} 
              onChange={(e) => handleChange(e)} 
              onBlur={key === "schoolName" ? () => setCourseId(value) : undefined} 
              /> 
              </div>) })}
      </div>
      <button onClick={addCourse}>Add Course</button>
      <button onClick={selectNextCourse}>Next Course</button>
    </div>
  );
}

EducationInformationSection.propTypes = {
  courseId: PropTypes.number,
  coursesArray: PropTypes.arrayOf (
    PropTypes.shape({
    schoolName: PropTypes.string,
    degree: PropTypes.string,
    fieldOfStudy: PropTypes.string,
    graduationYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })
),
  handleChange: PropTypes.func,
  updateParent: PropTypes.func
};