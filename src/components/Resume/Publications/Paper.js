import React from 'react';
import PropTypes from 'prop-types';

const Paper = ({ data }) => (
  <article className="publication-container">
    <header>
      <h4 className="paper">{data.title}</h4>
      <p className="where">{data.authors}, <b>{data.me}</b>, {data.others}, {data.where}</p>
    </header>
  </article>
);

Paper.propTypes = {
  data: PropTypes.shape({
    authors: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    where: PropTypes.string.isRequired,
    me: PropTypes.string.isRequired,
    others: PropTypes.string.isRequired,
  }).isRequired,
};

export default Paper;
