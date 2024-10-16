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
          <p>A highly motivated graduate student in Computer Science.</p>
        </div>
      </header>
      <p>
        Hi, I&apos;m Elahe, a final-year research master&apos;s student in Computer Science at 
        <a href="https://mila.quebec/en/"> Mila - Quebec Artificial Intelligence Institute</a> and 
        <a href="https://cs.mcgill.ca/"> McGill University</a>. I completed my bachelor&apos;s in Computer Science from 
        <a href="https://www.sharif.ir/"> Sharif University of Technology</a> in 2022. 

        My research interests include graph representation learning, graph neural networks, network science, and deep learning. 
        Currently, I am focusing on temporal graph learning, developing machine learning models for complex and evolving networks.
        {/* Feel free to <Link to="/contact">contact me</Link> for collaboration or inquiries. */}
      </p>
    </article>
  </Main>
);

export default Index;
