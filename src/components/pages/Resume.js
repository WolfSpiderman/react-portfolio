import React from 'react';

export default function Resume() {
  const resumePDF = `${process.env.PUBLIC_URL}/JoshuaJenkins_Resume.pdf`;

  return (
    <main style={{ textAlign: 'center', fontSize: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <a href={resumePDF} download="Joshua_Jenkins_Resume.pdf">
        Download my Resume!
      </a>

      <ul style={{ width: 'fit-content' }}>
        <li>Front-end Development</li>
        <li>Back-end Development</li>
        <li>Full Stack Development</li>
        <li>Critical Thinking</li>
        <li>DRY Practices/Efficiency</li>
        <li>React.js</li>
        <li>Creative Solutions</li>
        <li>MySQL & Sequelize</li>
        <li>MongoDB & Mongoose</li>
        <li>Express.js</li>
        <li>Node.js</li>
        <li>Handlebars.js</li>
        <li>Restful API</li>
        <li>GitHub</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>GraphQL</li>
        <li>Multitasking and Organization</li>
        <li>MERN Stack</li>
      </ul>
    </main>
  );
}
