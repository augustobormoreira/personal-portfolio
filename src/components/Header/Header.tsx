import ExternalLink from '../ExternalLink/ExternalLink'
import './Header.css'

export default function Header() {
    return <header>
        <span className="mark"></span>
        <nav>
            <ExternalLink href={"#portfolio-projects"} linkName='Projetos'/>
            <ExternalLink href={"#portfolio-skills"} linkName='Skills'/>
            <ExternalLink href={"#portfolio-contact"} linkName='Contato'/>
        </nav>
    </header>
}