import SetPersonal from "./personal-info";
import EducationSection from "./education-info";
import WorkExperienceSection from "./work-experience-info";
import { useState } from "react";

const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    schoolName: "",
    degree: "",
    fieldOfStudy: "",
    graduationYear: "",
    companyName: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    responsibilities: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
    <h1>Job Application Form</h1>
    <form onSubmit={handleSubmit}>
      <SetPersonal formData={formData} handleChange={handleChange} />
      <EducationSection formData={formData} handleChange={handleChange} />
      <WorkExperienceSection formData={formData} handleChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
    </>
  );
};
export default MyForm;
