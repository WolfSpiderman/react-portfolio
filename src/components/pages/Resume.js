import React from 'react';

export default function Resume() {
  const resumePDF = `${process.env.PUBLIC_URL}/JoshuaJenkins_Resume.pdf`;

  return (
    <main>
      <a href={resumePDF} download="Joshua_Jenkins_Resume.pdf">
        Download my Resume!
      </a>

      <ul>
        <li></li>
      </ul>
    </main>
  );
}
