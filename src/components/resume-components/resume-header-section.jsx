import PropTypes from "prop-types"; 
export default function HeaderSection({ className, data }) {
  return (
    <div className={className}>
      <h2 className="client-name">{data.firstName} {data.lastName}</h2>
        <div className="contact-info">
        {Object.entries(data).map(([key, value], index) => {
          const isLast = index === Object.keys(data).length - 1;``
          if (key !== "firstName" && key !== "lastName" && value) {
            return <span key={key}>
              {value}
              {!isLast && <>&nbsp;|&nbsp;</>}
            </span>;
          }
          return null;
        })}
          </div>
    </div>
  );
}

HeaderSection.propTypes = {
    data: PropTypes.array,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    linkedIn: PropTypes.string,
    github: PropTypes.string,
    website: PropTypes.string,
    className: PropTypes.string
};
