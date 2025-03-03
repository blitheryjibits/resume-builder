import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function WorkExperienceSection({ updateParent }) {
  const [workExperience, setWorkExperience] = useState({
    experience: [
      {
        companyName: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
        responsibilities: "",
        id: "",
      }
    ]
  }); // end useState

  const [currentId, setCurrentId] = useState(0);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkExperience((prevData) => ({
      ...prevData,
      experience: prevData.experience.map((job) => { 
        if (job.id === currentId) { 
          return { ...job, [name]: value }; // Update the specific job 
          }  job; // Return the job unchanged if it doesn't match 
      }) // end map
    })) // end setState
  } // end handleChange

  useEffect(() => {
    updateParent(workExperience.experience)
  }, [workExperience.experience]);

  return (
    <div>
        <h3>Work Experience</h3>
      <div>
        <label>Company Name:</label>
        <input
          type="text"
          name="companyName"
          value={workExperience.companyName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Job Title:</label>
        <input
          type="text"
          name="jobTitle"
          value={workExperience.jobTitle}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Start Date:</label>
        <input
          type="text"
          name="startDate"
          value={workExperience.startDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>End Date:</label>
        <input
          type="text"
          name="endDate"
          value={workExperience.endDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Responsibilities:</label>
        <textarea
          name="responsibilities"
          value={workExperience.responsibilities}
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
  updateParent: PropTypes.func,

};
