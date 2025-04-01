import PropTypes from 'prop-types';

export default function WorkExperienceSection({ data }) {
  // let res = (data[0]).Responsibilities.split("\n");
  // console.log(res);
  return (
    <div className="jobs">
      <h3 className="section-title">Work Experieince</h3>
      {data.map((job, index) => (
        <div key={index} data-key={job.id} className={'section-container'}>
           {Object.keys(job).map((key) => {
            if (key === 'Responsibilities' && job[key]) {
              // Render responsibilities as a <ul> with <li> items
              const responsibilitiesArray = job[key].split('\n'); // Split by newlines
              return (
                <ul key={key} className={`section-${key}`}>
                  {responsibilitiesArray.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              );
            } else if (key !== 'id' && job[key]) {
              // Render other fields as <p>
              return <p key={key} className={`section-${key}`}>{job[key]}</p>;
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
}

WorkExperienceSection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
  
};