  /* Home.js */

  import React from 'react';
  import { Link } from 'react-router-dom';
  import './Home.css';

  function Home() {
    return (
      <div className="home-container">
        <div className="content">
          <h1 className="title animated-text">Welcome to Student-Teacher Portal</h1>
          <div className="button-container">
            <Link to="/student" className="student-button">Student</Link>
            <div className="button-gap"></div>
            <Link to="/teacher" className="teacher-button">Teacher</Link>
          </div>
        </div>
      </div>
    );
  }

  export default Home;
