import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function PersonalInformationSection({ updateParent }) {
  const [personalInfo, setPersonalInfo] = useState({
      "First-Name": "",
      "Last-Name": "",
      "Phone-Number": "",
      "Email": "",
      "LinkedIn": "",
      "GitHub": "",
      "Website": "",
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
      <div className="form-section">
        <h3>Personal Information</h3>
        <div className='input-field-wrapper'>
            {Object.entries(personalInfo).map(([key, value]) => (
                <div key={key} className="input-field-container">
                    <label>{String(key).replace(/-/g, " ")}:</label>
                    <input
                        type={key === 'email' ? 'email' : key === 'phoneNumber' ? 'tel' : 'text'}
                        name={key}
                        value={value}
                        onChange={handleChange}
                    />
                </div>
            ))}
        </div>
      </div>
    );
  }

  PersonalInformationSection.propTypes = {
     
    handleChange: PropTypes.func,
    updateParent: PropTypes.func,
  };
  