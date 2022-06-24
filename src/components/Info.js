import profilepic from "../profile.jpg";
export default function Info() {
  return (
    <>
      <img src={profilepic} alt="ted"></img>
      <h2>Ted Mureithi</h2>
      <p className="describe">Frontend Developer</p>
      <p className="site">tedmureithi.website</p>
      <section className="buttons">
        <a className="mail--button" href="mailto:muriithited@gmail.com">
          <i className="fa fa-envelope" />
          Email
        </a>
        <button className="linkedin">
          <i className="fa fa-linkedin-square"></i> Linkedin
        </button>
      </section>
    </>
  );
}
