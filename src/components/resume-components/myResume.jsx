import PropTypes from "prop-types";
import "../../styles/resumeStyle.css";
import HeaderSection from "./resume-header-section";
import EducationSection from "./resume-education-section";

export default function CreateResume({ appData }) {
  return (
    <>
      <div className="resume-container">
        <h1 className="resume-title">Resume</h1>
        <div className="page">
          <HeaderSection className="res-head" data={ appData.contactDetails } />
          <EducationSection data={ appData.courses } />
          {/* <div className="work-experience">{appData.experiences}</div>
          <div className="projects">{appData.projects}</div> */}
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
    experiences: PropTypes.arrayOf(PropTypes.object),
    projects: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
