import Card from "./Card/Card";
import './Projects.css'

export default function Projects() {
  const projects = [
    {
      cardId: 1,
      projectName: "Pokedex",
      projectDesc: "Aplicação frontend feita em React que consome a PokéAPI para listar Pokémons e exibir seus detalhes (tipos, habilidades, status base, sprites, etc).",
      projectLink: "https://github.com/augustobormoreira/pokeapi",
    },
    {
      cardId: 2,
      projectName: "QA-Portfolio",
      projectDesc: "Produções relacionadas à qualidade de software e testes, que expressam minhas habilidades e conhecimentos como um profissional de QA.",
      projectLink: "https://github.com/augustobormoreira/qa-portfolio",
    },
  ];

  return (
    <div id="portfolio-projects" className="projetos">
      <div className="title-poster poster">Projetos</div>
      <div className="cards">
        {projects.map((project) => (
          <Card
            key={project.cardId}
            projectName={project.projectName}
            projectDesc={project.projectDesc}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </div>
  );
}
