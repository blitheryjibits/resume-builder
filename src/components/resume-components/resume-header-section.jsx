import PropTypes from "prop-types"; 
export default function HeaderSection({ className, data }) {
  return (
    <div className={className}>
      <h2 className="client-name">{data["First-Name"]} {data["Last-Name"]}</h2>
        <div className="contact-info">
        {Object.entries(data).map(([key, value], index) => {
          const isLast = index === Object.keys(data).length - 1;``
          if (key !== "First-Name" && key !== "Last-Name" && value) {
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
    data: PropTypes.object,
    className: PropTypes.string
};
