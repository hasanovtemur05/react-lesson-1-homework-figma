import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import johnImage from './assets/images/john.jpg';
import rect30Image from './assets/images/Rectangle 30.jpg';
import rect32Image from './assets/images/Rectangle 32.jpg';
import rect34Image from './assets/images/Rectangle 34.jpg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <header>
          <ul>
            <li><a href="./pages/blog.html">Blog</a></li>
            <li><a href="./pages/works.html">Works</a></li>
            <li><a href="./pages/contact.html">Contact</a></li>
          </ul>
        </header>
        <section className="john">
          <div className="box">
            <h1>Hi, I am John, Creative Technologist</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button>Download Resume</button>
          </div>
          <div className="box">
            <img src={johnImage} alt="john" />
          </div>
        </section>
        <div className="text">
          <p id="p1">Recent posts</p>
          <p id="p2">View all</p>
        </div>
        <section className="Recent-posts">
          <main>
            <h2>Making a design system from scratch</h2>
            <p id="text">12 Feb 2020 | Figma, Icon Design</p>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </main>
          <main>
            <h2>Creating pixel perfect icons in Figma</h2>
            <p id="text">12 Feb 2020 | Design, Pattern</p>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </main>
        </section>
        <div className="text2"><h2>Featured works</h2></div>
        <section className="Featured-works">
          <main>
            <div><img src={rect30Image} alt="30" /></div>
            <div>
              <h2>Designing Dashboards</h2>
              <h3>Dashboard</h3>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </main>
          <hr />
          <main>
            <div><img src={rect32Image} alt="32" /></div>
            <div>
              <h2>Vibrant Portraits of 2020</h2>
              <h3>Illustration</h3>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </main>
          <hr />
          <main>
            <div><img src={rect34Image} alt="34" /></div>
            <div>
              <h2>36 Days of Malayalam type</h2>
              <h3>Typography</h3>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </main>
          <hr />
        </section>

        <footer>
          <div>
            <div className="icon">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
            <p>Copyright ©2020 All rights reserved </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
