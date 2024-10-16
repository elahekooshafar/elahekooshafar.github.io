import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Elahe Kooshafar</h2>
        <p><a href="mailto:elahe.kooshafar@mila.quebec">elahe.kooshafar@mila.quebec</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>Graph Representation Learning, Machine Learning, Data Mining</h2>
      {/* <p>Github Hi, I&apos;m Elahe. I am currently a graduate student in Computer Science at McGill University/Mila. I got my bachelors in Computer Science from Sharif University of Technology. <a href="https://icme.stanford.edu/">Stanford ICME</a> graduate, YC Alumni,
        and the VP of Engineering at <a href="https://smileidentity.com">Smile Identity</a>. Previously,
        I was the co-founder and CTO of <a href="https://arthena.com">Arthena</a>
        , co-founder of <a href="https://matroid.com">Matroid</a>, and worked at
        {' '}<a href="https://planet.com">Planet</a> and <a href="https://facebook.com">Facebook</a>.
      </p> */}
      <ul className="actions">
        <li>
          {window.location.pathname !== '/' ? <Link to="/" className="button">Homepage</Link> : null}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Elahe Kooshafar <Link to="/">elahekooshafar.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
