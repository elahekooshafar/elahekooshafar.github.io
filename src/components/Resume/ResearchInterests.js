import React from 'react';
import PropTypes from 'prop-types';

import interest from './ResearchInterest/interest';

const ResearchInterests = ({ data }) => (
  <div className="research-interests">
    <div className="link-to" id="research-interests" />
    <div className="title">
      <h3>Research Interests</h3>
    </div>
    <ul>
      {data.map((interest, index) => (
        <li key={index}>{interest}</li>
      ))}
    </ul>
  </div>
);

ResearchInterests.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};

ResearchInterests.defaultProps = {
  data: [],
};

export default ResearchInterests;
