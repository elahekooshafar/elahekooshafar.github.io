import React from 'react';
import PropTypes from 'prop-types';

const Interest = ({ data }) => (
  <article className="interest-container">
    <header>
      <h4 className="interest">{data.area}</h4>
    </header>
  </article>
);

Interest.propTypes = {
  data: PropTypes.shape({
    area: PropTypes.string.isRequired,
  }).isRequired,
};

export default Interest;
