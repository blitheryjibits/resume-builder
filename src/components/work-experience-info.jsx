import PropTypes from 'prop-types';

export default function WorkExperienceSection({ formData, handleChange }) {
  return (
    <div>
        <h3>Work Experience</h3>
      <div>
        <label>Company Name:</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Job Title:</label>
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Start Date:</label>
        <input
          type="text"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>End Date:</label>
        <input
          type="text"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Responsibilities:</label>
        <textarea
          name="responsibilities"
          value={formData.responsibilities}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

WorkExperienceSection.propTypes = {
  formData: PropTypes.shape({
    companyName: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    responsibilities: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};
