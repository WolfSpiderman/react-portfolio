import React from 'react';
import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi';

export default function Footer() {
  return (
    <footer className='d-flex flex-row justify-content-center align-items-center' style={{ marginTop: 40, height: 200, backgroundImage: 'linear-gradient(144deg, #ecc66c, #4e5885 45%, #bc5032)' }}>
      <a href="https://github.com/WolfSpiderman">
        <BiLogoGithub style={{ minHeight: 100, minWidth: 100, color: '#61b0bb' }}/>
      </a>
      
      <a href="https://www.linkedin.com/in/joshua-jenkins-4960aa259">
        <BiLogoLinkedin style={{ minHeight: 100, minWidth: 100, color: '#61b0bb' }}/>
      </a>
    </footer>
  );
}
