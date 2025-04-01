import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import generateUniqueId from '../utils/id-generator';
import createJob from './create-job';

export default function WorkExperienceSection({ updateParent }) {
  const [workExperience, setWorkExperience] = useState({
    jobs: [
      {
        "Job-Title": "",
        "Start-Date": "",
        "End-Date": "",
        "Company-Name": "",
        "Responsibilities": "",
        id: 0,
      }
    ]
  }); // end useState

  const [currentId, setCurrentId] = useState(0);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkExperience((prevData) => ({
      ...prevData,
      jobs: prevData.jobs.map((job) => { 
        if (job.id === currentId) { 
          return { ...job, [name]: value }; // Update the specific job 
          } return job; // Return the job unchanged if it doesn't match 
      }) // end map
    })) // end setState
  } // end handleChange

  useEffect(() => {
    updateParent(workExperience.jobs)
  }, [workExperience.jobs]);

  const setJobId = (job) => {
    const idList = workExperience.jobs
      .map(job => job.id)
      .filter(id => id !== currentId);
    const currentJob = typeof job === "string" ? 
    workExperience.jobs.find(job => job.id == currentId) :
    job;
    const companyName = currentJob?.["Company-Name"] || "tempName";
    const id = generateUniqueId(companyName, idList);
    setWorkExperience((prevData) => ({
      ...prevData,
      jobs: prevData.jobs.map(j => 
        j.id === currentId ? { ...j, id } : j
      )
    }));
    setCurrentId(id);
  }

    const addJob = () => {
      const _job = workExperience.jobs.find(job => job.id == currentId)
      if (!_job["Company-Name"].length > 0) return;
      const newJob = createJob();
      setCurrentId(newJob.id);
      setWorkExperience(prevData => ({
        ...prevData,
        jobs: [...prevData.jobs, newJob]
      }))
    }

    const selectNextJob = () => {
      const jobIndex = workExperience.jobs.indexOf(workExperience.jobs.find(job => {
        return job.id == currentId}));
        // % operator loops the courseIndex
        setCurrentId(workExperience.jobs[(jobIndex + 1) % workExperience.jobs.length].id);
    }
    
    const selectPreviousJob = () => {
      const jobIndex = workExperience.jobs.indexOf(workExperience.jobs.find(job => {
          return job.id == currentId;
      }));
      // Use the % operator to loop the courseIndex
      setCurrentId(workExperience.jobs[
          (jobIndex - 1 + workExperience.jobs.length) % workExperience.jobs.length
      ].id);
    }

  return (
    <div data-id={currentId} className="experience-section">
        <h3>Work Experience</h3>
      <div className="input-field-wrapper">
      {Object.entries(workExperience.jobs.find((job) => 
        job.id === currentId)).map(([key, value]) => {
          if(key !== "id")
          return (
            <div key={key} className="input-field-container"> 
            <label>{String(key).replace(/-/g, " ")}:</label> 
            {key === "Responsibilities" ? (
        <textarea
          name={key}
          value={value}
          className={`input-${key}`}
          onChange={(e) => handleChange(e)}
        />
      ) : (
        <input
          type={key.includes("Date") ? "date" : "text"}
          name={key}
          value={value}
          className={`input-${key}`}
          onChange={(e) => handleChange(e)}
          onBlur={key === "Company-Name" ? () => setJobId(value) : undefined}
        />
      )}
            </div>) 
          }) // end map
        }
             <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', 
                    paddingTop: '1rem',
      }}>
        <button onClick={selectPreviousJob} type='button'>&lt;</button>
        <button onClick={addJob} type='button'>+</button>
        <button onClick={selectNextJob} type='button'>&gt;</button>
      </div>
      </div>
    </div>
  );
}

WorkExperienceSection.propTypes = {
  handleChange: PropTypes.func,
  updateParent: PropTypes.func,

};
