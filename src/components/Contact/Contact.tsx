import ExternalLink from "../ExternalLink/ExternalLink";
import "./Contact.css";

export default function Contact() {
  const links = {
    github: "https://github.com/augustobormoreira" ,
    linkedin: "https://www.linkedin.com/in/augusto-borges-a96638121/" ,
    email: "augustobormoreira@gmail.com" ,
  };
  return (
    <footer id="portfolio-contact" className="contact">
      <h2 className="poster">Fala Comigo</h2>
      <div className="links">
        <ExternalLink href={`mailto:${links.email}`} linkName="E-mail"/>
        <ExternalLink href={links.github} linkName="Github"/>
        <ExternalLink href={links.linkedin} linkName="Linkedin"/>
      </div>
    </footer>
  );
}
