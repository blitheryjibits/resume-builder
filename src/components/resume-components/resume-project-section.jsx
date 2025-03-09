import PropTypes from 'prop-types';

export default function ProjectSection({ data }) {
  return (
    <div className="projects">
      <h3 className="section-title">Projects</h3>
      {data.map((project, index) => (
        <div key={index} data-key={project.id} className={'section-container'}>
          {Object.keys(project).map((key) => (
            key !== 'id' && project[key] && <p key={key} className={`section-${key}`}>{`${project[key]}`}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

ProjectSection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
};
