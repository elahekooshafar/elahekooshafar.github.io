import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Elahe Kooshafar's personal website. New York based Stanford ICME graduate, "}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About me</Link></h2>
          <p> A highly motivated graduate student with a strong passion for research in
            graph learning and deep learning.
          </p>
        </div>
      </header>
      <p>
        I&apos;m a last year research master&apos;s student in Computer Science
        at <a href="https://mila.quebec/en/">Mila - Quebec Artificial Intelligence Institute</a> and 
        <a href="https://cs.mcgill.ca/"> McGill University</a>. 
        I have a broad interest in graph representation learning, graph neural networks, network science, and deep learning. 
        I&apos;m currently working on temporal graph representation learning methods.
        {/* Please feel free to <Link to="/contact">contact me</Link> for collaboration or else. */}
      </p>

    </article>
  </Main>
);

export default Index;
