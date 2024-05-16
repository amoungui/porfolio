
// Définition du composant SkillCard
const SkillsCard = ({ skillsName, skillsPercentage, classNameBxl, classNameSkill, dataTestid }) => {

    // Rendu du composant SkillCard
    return (
        <div className="skills__data">
            <div className="skills__names">
                <i className={classNameBxl}></i>
                <span className="skills__name">{skillsName}</span>
            </div>
            <div className={classNameSkill}></div>
            <div>
                <span className="skills__percentage">{skillsPercentage}</span>
            </div>
        </div>
    )
}

export default SkillsCard;
