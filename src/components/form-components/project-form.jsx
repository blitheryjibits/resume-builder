import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import generateUniqueId from '../utils/id-generator';

export default function ProjectSection({ updateParent }) {
  const [projectData, setProjectData] = useState({
    projects: [{ 
      projectName: '', 
        projectDescription: '',
        id: 0
      },
    ]
  });

  const [currentProjectId, setCurrentProjectId] = useState(0);

  const handleChange = (e) => { 
    const { name, value } = e.target; 
    setProjectData((prevData) => ({ 
      ...prevData,
      projects: prevData.projects.map((project) => { 
        if (project.id === currentProjectId) { 
          return { ...project, [name]: value }; // Update the specific course 
          }
        return project; // Return the project unchanged if it doesn't match 
      }) // end map
    })); // end setProjectData 
  }; // end handleChange

  useEffect(() => {
    updateParent(projectData.projects)
  }, [projectData.projects]);

  const selectNextProject = () => {
    const courseIndex = projectData.projects.indexOf(projectData.projects.find(project => {
      return project.id == currentProjectId}));
      // % operator loops the courseIndex
      setCurrentProjectId(projectData.projects[(courseIndex + 1) % projectData.projects.length].id);
  }
  
  const selectPreviousProject = () => {
    const projectIndex = projectData.projects.indexOf(projectData.projects.find(project => {
        return project.id == currentProjectId;
    }));
    // Use the % operator to loop the courseIndex
    setCurrentProjectId(projectData.projects[
        (projectIndex - 1 + projectData.projects.length) % projectData.projects.length
    ].id);
  }

  const addProject = () => {
    const _course = projectData.projects.find(project => project.id == currentProjectId)
    if (!_course.schoolName.length > 0) return;
    const newCourse = createProject();
    setProjectId(newCourse);
    setProjectData(prevData => ({
      ...prevData,
      courses: [...prevData.courses, newCourse]
    }))
  }

  const setProjectId = (project) => {
    const idList = projectData.projects
      .map(course => course.id)
      .filter(id => id !== currentProjectId);
    const currentProject = typeof project === "string" ? 
    projectData.projects.find(course => course.id == currentProjectId) :
    project;
    const projectName = currentProject?.projectName || "tempName";
    const id = generateUniqueId(projectName, idList);
    currentProject.id = id;
    setCurrentProjectId(id);
  }

  const createProject = () => {
    return {
      projectName: '',
      projectDescription: '',
      id: 0
    }
  }

  return (
    <div data-id={currentProjectId} className="form-section">
      <h3>Projects</h3>
      <div className="input-field-wrapper">
        {Object.entries(projectData.projects.find((project) =>
          project.id === currentProjectId)).map(([key, value]) => {
            if(key !== "id")
              return (
                <div key={key} className="input-field-container"> 
                <label>{key}:</label>
                <input
                  type="text"
                  name={key}
                  value={value}
                  onChange={handleChange}
                />
            </div>);
          })// end map
        }
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', 
                    paddingTop: '1rem',
                  }}>
          <button onClick={selectPreviousProject} type='button'>&lt;</button>
          <button onClick={addProject} type='button'>+</button>
          <button onClick={selectNextProject} type='button'>&gt;</button>
        </div>
      </div>
    </div>
  );
}

ProjectSection.propTypes = {
  projectData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  handleChange: PropTypes.func,
  updateParent: PropTypes.func,
};
