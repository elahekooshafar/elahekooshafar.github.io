import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Elahe Kooshafar's personal website. "}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Bio</Link></h2>
        </div>
      </header>
      <p>
        I&apos;m a last year Research MSc student in Computer Science at
        <a href="https://cs.mcgill.ca/">McGill University</a> &nbsp;and
        &nbsp;<a href="https://mila.quebec/en/">Mila - Quebec Artificial Intelligence Institute</a>, supervised
        by <a href="http://www.reirab.com/">Reihaneh Rabbany</a>. Previously, I got my bachelor&apos;s in Computer Science
        from <a href="https://en.sharif.ir/">Sharif University of Technology</a>.

        I have a broad interest in graph representation learning, graph neural networks
        , network science, and deep learning. I&apos;m currently working on temporal
        graph representation learning methods.
      </p>

    </article>
  </Main>
);

export default Index;
