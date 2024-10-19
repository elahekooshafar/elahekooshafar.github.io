import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Publications from '../components/Resume/Publications';
// import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';

// import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import papers from '../data/resume/papers';
// import work from '../data/resume/work';
// import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Publications: () => <Publications data={papers} />,
  // Skills: () => <Skills skills={skills} categories={categories} />,
  // References: () => <References />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Elahe Kooshafar's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
        {/* Add a download button/link here 
        <div className="download-cv">
          <a href="/cv.pdf" download="CV.pdf" className="button">
            Download CV
          </a>
        </div>*/}
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
