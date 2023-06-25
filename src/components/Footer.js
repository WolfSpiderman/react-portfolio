import React from 'react';
import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi';

export default function Footer() {
  return (
    <footer>
      <a href="https://github.com/WolfSpiderman">
        <BiLogoGithub />
      </a>
      
      <a href="https://www.linkedin.com/in/joshua-jenkins-4960aa259">
        <BiLogoLinkedin />
      </a>
    </footer>
  );
}
