import PersonalInformationSection from "./form-components/personal-form";
import EducationInformationSection from "./form-components/education-form";
// import WorkExperienceSection from "./form-components/work-experience-form";
// import ProjectSection from "./form-components/project-form";
import PropTypes from "prop-types";

const MyForm = ({ setAppData }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const updateContactDetails = (info) => { 
    setAppData((prevData) => ({ ...prevData, contactDetails: info, })); }

  const updateCourseInfo = (info) => {
    setAppData((prevData) => ({ ...prevData, courses: info, }));
  }

  return (
    <div className="form-container">
      <h1>Job Application Form</h1>
      <form onSubmit={handleSubmit}>
        <PersonalInformationSection updateParent={updateContactDetails} />
        <EducationInformationSection updateParent={updateCourseInfo} />
        {/* <WorkExperienceSection />
        <ProjectSection /> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

MyForm.propTypes = { setAppData: PropTypes.func.isRequired };

export default MyForm;
