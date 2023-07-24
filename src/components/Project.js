import React from 'react';
import { BiLogoGithub } from 'react-icons/bi';
import './Project.css';

export default function Project() {
  const projects = [
    {
      title: 'Caf-Fiend',
      subtitle: 'Full Stack: MySQL, Express, Handlebars, Node.js',
      imgSrc: `${process.env.PUBLIC_URL}/images/caf-screenshot.png`,
      link: 'https://github.com/WolfSpiderman/Caf-Fiend-wolf',
      gitLink: 'https://github.com/WolfSpiderman/Caf-Fiend-wolf'
    },
    {
      title: 'TRICKvial MORTsuit',
      subtitle: 'JavaScript, CSS, HTML',
      imgSrc: `${process.env.PUBLIC_URL}/images/trickvialmortsuit.png`,
      link: 'https://wolfspiderman.github.io/t-rick-vial-mort-suit/',
      gitLink: 'https://github.com/WolfSpiderman/t-rick-vial-mort-suit'
    },
    {
      title: 'Tech Blog',
      subtitle: 'Full Stack: MySQL, Express, Handlebars, Node.js',
      imgSrc: `${process.env.PUBLIC_URL}/images/stockasdf.jpg`,
      link: 'https://timesuckblog300.herokuapp.com/',
      gitLink: 'https://github.com/WolfSpiderman/tech-blog'
    },
    {
      title: 'Social Network APIs',
      subtitle: 'Rest APIs using MongoDB, Express, Node.js',
      imgSrc: `${process.env.PUBLIC_URL}/images/sotkc.jpg`,
      link: 'https://github.com/WolfSpiderman/social-network-apis',
      gitLink: 'https://github.com/WolfSpiderman/social-network-apis'
    },
    {
      title: 'Bad Magic Random Task Generator',
      subtitle: 'Full Stack: MySQL, Express, Handlebars, Node.js',
      imgSrc: `${process.env.PUBLIC_URL}/images/danLynzeMe.jpg`,
      link: 'https://whbmsc-random-task-gen.herokuapp.com/',
      gitLink: 'https://github.com/WolfSpiderman/coinChallenge'
    },
    {
      title: 'Dungeon Finderrz',
      subtitle: 'MERN Stack w/ GraphQL',
      imgSrc: `${process.env.PUBLIC_URL}/images/workStock.jpg`,
      link: 'https://dungeon-finderrz-e6d696a81520.herokuapp.com',
      gitLink: 'https://github.com/WolfSpiderman/DungeonFinderrz'
    }
  ];
  
  return (
    <div className="d-flex justify-content-around flex-wrap">
      {projects.map((project, index) => (
        <div className='projectCard' style={{ position: "relative", display: "inline-block", margin: "10px" }} key={index}>
          <div>
            <a href={project.link}>
              <img src={project.imgSrc} alt={`Screenshot of ${project.title}`} style={{ border: "5px outset orangered", boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)' }} className="project-img" />
            </a>
          </div>
          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "#fff", padding: "10px", position: "absolute", bottom: "0", left: "0", right: "0", textAlign: "center" }}>
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
          </div>
          {project.gitLink && (
            <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
              <a href={`${project.gitLink}`} target="_blank" rel="noopener noreferrer">
                <BiLogoGithub alt="Github logo" style={{ height: "30px", width: "30px", marginLeft: "10px" }} />
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}