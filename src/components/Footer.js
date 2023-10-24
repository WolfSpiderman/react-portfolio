import React from 'react';
import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className='d-flex flex-row justify-content-center align-items-center' style={{ marginTop: 40, height: 200, backgroundImage: 'linear-gradient(144deg, #ecc66c, #4e5885 45%, #bc5032)' }}>
      <a href="https://github.com/WolfSpiderman" style={{ marginRight: 15 }}>
        <BiLogoGithub style={{ minHeight: 100, minWidth: 100, color: '#61b0bb' }}/>
      </a>
      
      <a href="https://www.linkedin.com/in/joshua-jenkins-4960aa259" style={{ marginRight: 15 }}>
        <BiLogoLinkedin style={{ minHeight: 100, minWidth: 100, color: '#61b0bb' }}/>
      </a>

      <a href="mailto:josh_jenkins93@eyahoo.com">
        <FiMail style={{ minHeight: 100, minWidth: 100, color: '#61b0bb' }} />
      </a>
    </footer>
  );
}
