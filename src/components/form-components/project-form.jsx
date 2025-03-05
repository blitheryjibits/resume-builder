import PropTypes from 'prop-types';

export default function ProjectSection({ formData, handleChange }) {
  return (
    <div>
        <h3>Projects</h3>
        <div>
          <label>Project Name:</label>
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
          />
        </div>
    </div>
  );
}

ProjectSection.propTypes = {
  formData: PropTypes.shape({
    projectName: PropTypes.string.isRequired, // remove after mapping function is implemented
    projectDescription: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};
