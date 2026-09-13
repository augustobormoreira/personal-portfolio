import ExternalLink from "../../ExternalLink/ExternalLink";
import "./Card.css";

export default function Card({
  projectId,
  projectName,
  projectDesc,
  projectLink,
}: {
  projectId: number;
  projectName: string;
  projectDesc: string;
  projectLink: string;
}) {
  return (
    <div className="pcard">
      <div className="tape"></div>
      <h3>{projectName}</h3>
      <p>{projectDesc}</p>
      <ExternalLink href={projectLink} linkName="ver →" />
    </div>
  );
}
