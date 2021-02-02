import React from 'react';
import { Helmet } from 'react-helmet-async';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function HomePage() {
  return (
    <>
      <Helmet><title>Linkai Wu</title></Helmet>
      <div className="HomePage">
        <main>
          <h1>Linkai Wu</h1>
          <p>🚧 Website under construction 🚧</p>
          <footer>
            <a href="https://github.com/linkai101" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a href="https://www.instagram.com/linkaiwu_/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram}/>
            </a>
          </footer>
        </main>
      </div>
    </>
  );
}