import React from 'react';
import PropTypes from 'prop-types';

import Paper from './Publications/Paper';

const Publications = ({ data }) => (
  <div className="publications">
    <div className="link-to" id="publications" />
    <div className="title">
      <h3>Publications</h3>
    </div>
    {data.map((paper) => (
      <Paper
        data={paper}
        key={paper.authors}
      />
    ))}
  </div>
);

Publications.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    authors: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    where: PropTypes.string,
    me: PropTypes.string,
    others: PropTypes.string,
  })),
};

Publications.defaultProps = {
  data: [],
};

export default Publications;
