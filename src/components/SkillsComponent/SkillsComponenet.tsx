import './SkillsComponent.css';

export const SkillsComponent = () => {
    const skills = [
        { name: 'Python', src: '/img/icons/python.png' },
        { name: 'Java', src: '/img/icons/java.png' },
        { name: 'HTML', src: '/img/icons/html.png' },
        { name: 'CSS', src: '/img/icons/css.png' },
        { name: 'Git', src: '/img/icons/git.png' },
        { name: 'GitHub', src: '/img/icons/github.png' },
        { name: 'JavaScript', src: '/img/icons/javascript.png' },
        { name: 'TypeScript', src: '/img/icons/typescript.png' },
        { name: 'MongoDB', src: '/img/icons/mongo.png' },
        {name: 'My SQL', src: '/img/icons/my_sql.png' },
        { name: 'React', src: '/img/icons/react.png' },
        { name: 'Next.js', src: '/img/icons/nextjs.png' },
        { name: 'Redux', src: '/img/icons/redux.png' },
        { name: 'Figma', src: '/img/icons/figma.png' },
        { name: 'Django', src: '/img/icons/django.png' },
        { name: 'Authentication', src: '/img/icons/authentication.png' },
        { name: 'Docker', src: '/img/icons/docker.png' },
        { name: 'RestAPI', src: '/img/icons/api.png' },
        { name: 'Swagger', src: '/img/icons/swagger.png' },
        { name: 'Postman', src: '/img/icons/postman.png' },
        {name: 'IntelliJ IDEA', src: '/img/icons/intellij_idea.png' },
        {name: 'PyCharm', src: '/img/icons/pycharm.png' },
        {name: 'WebStorm', src: '/img/icons/webstorm.png' },
        {name: 'VS Code', src: '/img/icons/vscode.png' },
    ];

    return (
        <div className="skills-container">
            <h2>My Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div className="skill-item" key={index}>
                        <img src={skill.src} alt={skill.name} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsComponent;