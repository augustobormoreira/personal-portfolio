import './Skill.css'
export default function Skill(
    {
        skillName
    } : 
    {
        skillName: string
    }
) {
    return <span className='skillstrip-span'>{skillName}</span>
}