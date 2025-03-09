import PropTypes from 'prop-types';

export default function WorkExperienceSection({ data }) {
  return (
    <div className="jobs">
      <h3 className="section-title">Work Experieince</h3>
      {data.map((job, index) => (
        <div key={index} data-key={job.id} className={'section-container'}>
          {Object.keys(job).map((key) => (
            key !== 'id' && job[key] && <p key={key} className={`section-${key}`}>{`${job[key]}`}</p>
          ))}
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