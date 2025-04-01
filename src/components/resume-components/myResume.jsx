import PropTypes from "prop-types";
import "../../styles/resumeStyle.css";
import HeaderSection from "./resume-header-section";
import EducationSection from "./resume-education-section";
import WorkExperienceSection from "./resume-workExperience-section";
import ProjectSection from "./resume-project-section";

export default function CreateResume({ appData }) {
  return (
    <>
      <div className="resume-container">
        <h3 className="resume-title">Resume</h3>
        {/* add download button */}
        <div className="page">
          <HeaderSection className="res-head" data={ appData.contactDetails } />
          <EducationSection data= { appData.courses } />
          <WorkExperienceSection data = { appData.experience } />
          <ProjectSection data= { appData.projects } />
        </div>
      </div>
    </>
  );
}

CreateResume.propTypes = {
  appData: PropTypes.shape({
    contactDetails: PropTypes.object,
    courses: PropTypes.arrayOf(PropTypes.object),
    skills: PropTypes.arrayOf(PropTypes.object),
    experience: PropTypes.arrayOf(PropTypes.object),
    projects: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
