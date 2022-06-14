import "./App.css";
import profilepic from "./profile.jpg";

function App() {
  return (
    <div className="container">
      <div className="card">
        <img src={profilepic} alt="ted"></img>
        <h2>Ted Mureithi</h2>
        <p className="describe">Frontend Developer</p>
        <p className="site">tedmureithi.website</p>
        <section className="buttons">
          <button>
            <i className="fa fa-envelope" />
            Email
          </button>
          <button className="linkedin">
            <i className="fa fa-linkedin-square"></i> Linkedin
          </button>
        </section>
        <div className="text-area">
          <h3>About</h3>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <h3>Interests</h3>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
        <div className="bottom-bar">
          <i className="fa fa-twitter-square fa-2x"></i>
          <i className="fa fa-facebook-square fa-2x"></i>
          <i className="fa fa-instagram fa-2x"></i>
          <i className="fa fa-github-square fa-2x"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
