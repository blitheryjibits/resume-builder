import PropTypes from 'prop-types';

export default function EducationSection({ formData, handleChange }) {
  return (
    <div>
        <h3>Education</h3>
      <div>
        <label>School Name:</label>
        <input
          type="text"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Degree:</label>
        <input
          type="text"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Field of Study:</label>
        <input
          type="text"
          name="fieldOfStudy"
          value={formData.fieldOfStudy}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Graduation Year:</label>
        <input
          type="text"
          name="graduationYear"
          value={formData.graduationYear}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

EducationSection.propTypes = {
  formData: PropTypes.shape({
    schoolName: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    fieldOfStudy: PropTypes.string.isRequired,
    graduationYear: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};
