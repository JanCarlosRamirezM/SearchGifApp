import PropTypes from "prop-types";

export const GifItem = ({ url, name, title }) => {
  return (
    <div className="col">
      <div className="card">
        <img src={url} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
};

GifItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
