import PropTypes from 'prop-types';

export default function EducationSection({ data }) {
  return (
    <div className="education">
      {data.map((course, index) => (
        <div key={index} data-key={course.id}>
          <p>{course.schoolName}</p>
          <p>{course.degree}</p>
          <p>{course.fieldOfStudy}</p>
          <p>{course.graduationYear}</p>
        </div>
      ))}
    </div>
  );
}

EducationSection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      schoolName: PropTypes.string,
      degree: PropTypes.string,
      fieldOfStudy: PropTypes.string,
      graduationYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
};
