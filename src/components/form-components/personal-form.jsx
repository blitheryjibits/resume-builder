import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function PersonalInformationSection({ updateParent }) {
  const [personalInfo, setPersonalInfo] = useState({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      linkedIn: "",
      github: "",
      website: "",
  })

  const handleChange = (e) => { 
    const { name, value } = e.target; 
    setPersonalInfo((prevData) => ({
      ...prevData, [name]: value
    }))
  };

  useEffect(() => {
    updateParent(personalInfo)
  }, [personalInfo]);

    return (
      <div>
        <h3>Personal Information</h3>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={personalInfo.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={personalInfo.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={personalInfo.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={personalInfo.email}
            onChange={handleChange}
          />
        </div>
        {/* Change the hardcoded social media fields to a dynamic field that can be added or removed */}
        <div>
          <label>LinkedIn:</label>
          <input
            type="text"
            name="linkedIn"
            value={personalInfo.linkedIn}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Github:</label>
          <input
            type="text"
            name="github"
            value={personalInfo.github}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Website:</label>
          <input
            type="text"
            name="website"
            value={personalInfo.website}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }

  PersonalInformationSection.propTypes = {
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      phoneNumber: PropTypes.string,
      email: PropTypes.string,
      linkedIn: PropTypes.string,
      github: PropTypes.string,
      website: PropTypes.string,
    handleChange: PropTypes.func,
    updateParent: PropTypes.func,
  };
  