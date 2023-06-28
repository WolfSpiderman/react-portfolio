import React from 'react';

export default function About() {
    const me = `${process.env.PUBLIC_URL}/images/Selfie.jpg`;
    const meDL = `${process.env.PUBLIC_URL}/images/Dan-and-Lynze.jpg`;

    return (
        <main style={{ textAlign: 'center', padding: 10 }}>    
            <h1>About Me</h1>
            <div className='aboutPage'>
                <div className='aboutCard' style={{ padding: 10 }}>
                    <p style={{ fontSize: 20 }}>
                    Welcome to my portfolio website! I am an aspiring web developer with a passion for creating visually appealing and highly interactive websites that go above and beyond customer expectations. With a strong foundation in HTML, CSS, JavaScript, and server/database development, I am constantly striving to learn and grow in this rapidly evolving field.
                    <br />
                    <br />
                    What sets me apart is my 11 years of experience in the hospitality industry. Starting from entry level positions and working my way up, I have honed my skills in problem-solving and providing exceptional customer service. My ability to work collaboratively with others has allowed me to excel in delivering outstanding results.
                    <br />
                    <br />
                    But what truly excites me is the opportunity to leverage my knowledge and experience. I take pride in developing websites using cutting-edge technologies, and in this context, I am proud to share that this very portfolio page has been created almost exclusively with React.
                    <br />
                    <br />
                    In building this portfolio, I have aimed to showcase my diverse skillset while ensuring an enjoyable and seemless user experience. Please explore my work and projects, and feel free to reach out for any collaboration opportunities or queries. I look forward to connecting with like-minded individuals and organizations, to create meaningful digital experiences that make a positive impact.
                    <br />
                    <br />
                    Thank you for visiting my portfolio website, and I hope you have a great user experience!
                    </p>
                </div>
                <div className='picCard'>
                    <img src={me} alt='Selfie of joshua jenkins' style={{ maxHeight: 400 }}></img>
                    <img src={meDL} alt='me with dan and lynze cummins'></img>
                </div>
            </div>
        </main>
    )
}