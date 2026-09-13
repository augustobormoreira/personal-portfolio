import Skill from "./Skill/Skill";
import './Skills.css'

export default function Skills() {
  const skills = [
    { skillName: "TypeScript" },
    { skillName: "Java" },
    { skillName: "Python" },
    { skillName: "Cypress" },
    { skillName: "Selenium" },
    { skillName: "Playwright" },
    { skillName: "Postman" },
    { skillName: "Git" },
  ];

  return (
    <div id="portfolio-skills" className="skills">
      <div className="title-poster poster">Skills</div>
      <div className="skill-strip">
        {skills.map((skill) => <Skill key={skill.skillName} skillName={skill.skillName}/>)}
      </div>
    </div>
  );
}
