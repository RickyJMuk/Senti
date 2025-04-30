import React from 'react';

const MentorshipPage: React.FC = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Mentorship Program</h1>
            <p>Welcome to the Mentorship Program page. Here you can find resources, connect with mentors, and grow your skills.</p>
            
            <section>
                <h2>Available Mentors</h2>
                <ul>
                    <li>John Doe - Software Engineer</li>
                    <li>Jane Smith - Data Scientist</li>
                    <li>Michael Brown - Product Manager</li>
                </ul>
            </section>

            <section>
                <h2>How It Works</h2>
                <ol>
                    <li>Sign up for the program.</li>
                    <li>Choose a mentor based on your goals.</li>
                    <li>Schedule regular sessions to learn and grow.</li>
                </ol>
            </section>

            <section>
                <h2>Contact Us</h2>
                <p>If you have any questions, feel free to reach out at mentorship@sentiapp.com.</p>
            </section>
        </div>
    );
};

export default MentorshipPage;