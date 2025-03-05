import PropTypes from 'prop-types';

export default function EducationSection({ data }) {
  return (
    <div className="education">
      <h3 className="section-title">Education</h3>
      {data.map((course, index) => (
        <div key={index} data-key={course.id} className={'section-container'}>
          {Object.keys(course).map((key) => (
            key !== 'id' && course[key] && <p key={key} className={`section-${key}`}>{`${course[key]}`}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

EducationSection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      // No need to explicitly list other fields, make it flexible
    })
  ).isRequired,
};
