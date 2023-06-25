import React from 'react';

export default function Resume() {
    const resumePDF = '../../../public/JoshuaJenkins_Resume.pdf';

    return (
        <main>
            <a href={resumePDF} download="JoshuaJenkins_Resume.pdf">Download my Resume!</a>

            <ul>
                <li></li>
            </ul>
        </main>
    )
}