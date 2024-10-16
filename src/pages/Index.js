import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Elahe Kooshafar's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Bio</Link></h2>
          <p>
            A 
          </p>
        </div>
      </header>
      <p> I&apos;m a last year research master&apos;s student in Computer Science at 
      <a href="https://mila.quebec/en">Mila</a> and <a href="https://www.mcgill.ca/">McGill University</a> under 
      the supervision of <a href="http://www.reirab.com/">Reihaneh Rabbany</a>. I got my bachelor&apos;s in Computer Science
      from [Sharif University of Technology]<a href="https://www.sharif.ir/">Sharif University of Technology</a>. I have a
        broad interest in graph representation learning, graph neural networks, network science, and deep learning. I&apos;m currently
          working on temporal graph representation learning methods.
      
      {/*Hi, I&apos;m Elahe.
        I&apos;m a research MSc student in Computer Science at <a href="https://cs.mcgill.ca/">McGill University</a> &nbsp;and
        &nbsp;<a href="https://mila.quebec/en/">Mila - Quebec Artificial Intelligence Institute</a>.
        Previously, I got my bachelors in Computer Science from Sharif University of Technology
        in 2022.
        I have a broad interest in graph representation learning, graph neural networks,
        network science, and deep learning. My current research focus is on temporal
        graph learning, which involves machine learning models for complex and
        evolving networks in the real world.*/}
        {/* Please feel free to <Link to="/contact">contact me</Link> for collaboration or else. */}
      </p>
    </article>
  </Main>
);

export default Index;
