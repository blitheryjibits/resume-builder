import PropTypes from "prop-types"; 
export default function WorkExperienceSection({ data }) {
  const [companyName, jobTitle, startDate, endDate, responsibilities] = data;
  return (
    <div>
        <p>{companyName}</p>
        <p>{jobTitle}</p>
        <p>{startDate}</p>
        <p>{endDate}</p>
        <p>{responsibilities}</p>
    </div>
  );
}

WorkExperienceSection.propTypes = {
    data: PropTypes.array,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    responsibilities: PropTypes.string
};