import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const publications = [
  ["2021", "Unmanned Aerial Vehicles Motion Control with Fuzzy Tuning of Cascaded-PID Gains", "https://sciprofiles.com/publication/view/7c10a222af668029a1b5a761268e5589"],
  ["2021", "Hybrid PID-Fuzzy controller for autonomous UAV stabilization", "https://ieeexplore.ieee.org/abstract/document/9529680"],
  ["2022", "Fuzzy Gain-Scheduling PID for UAV Position and Altitude Controllers", "https://sciprofiles.com/publication/view/73ddf2b8e67dc6924f095988241d2912"],
  ["2023", "Sliding Mode Controller Applied to Autonomous UAV Operation in Marine Small Cargo Transport", "https://ieeexplore.ieee.org/document/10185965"],
];

const social = [
  ["GitHub", "https://github.com/piradata", <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.55.1.75-.24.75-.53v-2.08c-3.07.67-3.72-1.3-3.72-1.3-.5-1.28-1.23-1.62-1.23-1.62-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.56 1.19 3.19.9.1-.71.38-1.19.69-1.46-2.45-.28-5.03-1.23-5.03-5.47 0-1.21.43-2.2 1.13-2.97-.12-.28-.49-1.41.11-2.93 0 0 .92-.3 3.05 1.13a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.04-1.13 3.04-1.13.61 1.52.23 2.65.12 2.93.7.77 1.12 1.76 1.12 2.97 0 4.25-2.58 5.18-5.04 5.46.4.35.74 1.02.74 2.06v3.05c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z" />],
  ["Twitter", "https://twitter.com/piradata_dev", <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.1L5.84 22H2.7l7.25-8.29L1.8 2h6.4l4.43 6.58L18.9 2Zm-1.1 18h1.73L7.26 3.88H5.4L17.8 20Z" />],
  ["Instagram", "https://www.instagram.com/piradata/", <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm5 2.3a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2.2a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6ZM17.7 5a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z" />],
  ["YouTube", "https://www.youtube.com/@eumesmo5306", <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />],
];

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("piradata-theme") || "dark");
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("piradata-theme", theme);
  }, [theme]);

  return <>
    <a className="skip" href="#about">Skip to content</a>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Piradata home"><span>◆</span> Piradata</a>
      <nav aria-label="Primary navigation"><a href="#top">Home</a></nav>
      <button className="theme-toggle" type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}>{theme === "light" ? "Dark mode ☾" : "Light mode ☼"}</button>
    </header>
    <main id="top">
      <section className="hero wrap">
        <div className="hero-copy"><p className="eyebrow">◆ Software, robotics &amp; curiosity</p><h1>You can call me<br/><em>Piradata.</em></h1><p className="lede">A tech-savvy geek, Linux enthusiast, and curious guy who is always trying and learning new things. Just for the lulz.</p><div className="hero-actions"><a className="button" href="#about">Who am I? ↓</a><a className="button secondary" href="#research">Explore my research</a></div></div>
        <figure className="hero-art"><img src="/piradata-profile.webp" alt="Piradata" fetchPriority="high"/></figure>
      </section>
      <section id="about" className="section wrap two-col"><div><p className="eyebrow">A little introduction</p><h2>Who am I?</h2></div><div className="section-copy"><p>Nice to meet you! You can call me Piradata 💚 I'm a Brazilian software developer with an engineering degree in control and automation and a master's degree in robotics. I currently work as a Software Developer at <a href="https://www.v-dev.io/" target="_blank" rel="noreferrer">v(dev)</a> because coding is the best.</p><p>I'm a tech-savvy geek who loves comics and anime, a Linux enthusiast, and someone who is always trying and learning new things just for the lulz. I also love hiking in the mountains and relaxing by the fireplace with a glass of wine, listening to the rain and spending time with my dog.</p></div></section>
      <section id="work" className="section tinted"><div className="wrap"><p className="eyebrow">More info</p><h2>Technical skills &amp; experience</h2><div className="skill-grid">
        <article><b>01</b><h3>Backend</h3><p>Python · Django<br/>Ruby · Rails<br/>Kotlin · Spring Boot<br/>Node.js · NestJS</p></article>
        <article><b>02</b><h3>Frontend</h3><p>React<br/>Interfaces that feel<br/>as good as they work.</p></article>
        <article><b>03</b><h3>Infrastructure</h3><p>Linux · Kubernetes · Docker<br/>AWS · Azure<br/>CI/CD · GitLab</p></article>
        <article><b>04</b><h3>Leadership</h3><p>Technical direction<br/>Hiring &amp; interviews<br/>Scalable solutions<br/>DevOps practices</p></article>
      </div></div></section>
      <section id="research" className="section wrap two-col research"><div><p className="eyebrow">03 / academic background</p><h2>Robotics,<br/>in motion.</h2><p className="small">Master's degree in Robotics<br/>Bachelor's in Control &amp; Automation<br/>CEFET/RJ</p><a className="text-link" href="https://drive.google.com/file/d/1XhReU0jQg7DCAdLvy5NaC5Nr546d2i3W/view" target="_blank" rel="noreferrer">Read the dissertation ↗</a></div><div className="papers">{publications.map(([year, title, url]) => <div className="paper" key={title}><span>{year}</span><a href={url} target="_blank" rel="noreferrer">{title} ↗</a></div>)}</div></section>
    </main>
    <footer className="site-footer wrap"><span>piradata ™</span><span className="footer-right"><span>built with curiosity · © {new Date().getFullYear()}</span><span className="social-icons" aria-label="Find me online">{social.map(([name, url, icon]) => <a key={name} href={url} aria-label={name} title={name} target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true">{icon}</svg></a>)}</span></span></footer>
  </>;
}
export default App;


const root = document.getElementById("root");
if (!root) throw new Error("React root element #root was not found.");
createRoot(root).render(<App />);
