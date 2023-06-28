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
                    As an aspiring web developer, I am passionate about creating attractive and interactive websites that meet customer needs and exceed expectations. I have a strong foundation in HTML, CSS, JavaScript, and server/database development, and am committed to continuous learning and development in this rapidly-evolving field.
                    <br />
                    <br />
                    In addition, I bring over 11 years of experience in the hospitality industry, where I have demonstrated professional growth by starting in entry-level positions and advancing to desired roles through hard work and dedication. I excel in working collaboratively with others and am skilled in problem-solving and providing exceptional customer service.
                    <br />
                    <br />
                    I am eager to apply my skills and experience to a web development role where I can contribute to a team and help create meaningful products that make a positive impact.
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