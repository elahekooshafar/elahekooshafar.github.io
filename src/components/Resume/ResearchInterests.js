import React from 'react';
import PropTypes from 'prop-types';
import interest from './ResearchInterests/interest';

const ResearchInterests = ({ data }) => (
  <div className="research-interests">
    <div className="link-to" id="research-interests" />
    <div className="title">
      <h3>Research Interests</h3>
    </div>
    <ul>
      {data.map((item) => (
        <li key={item.id || item}>{item}</li>
      ))}
    </ul>
  </div>
);

ResearchInterests.propTypes = {
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),
};

ResearchInterests.defaultProps = {
  data: [],
};

export default ResearchInterests;
