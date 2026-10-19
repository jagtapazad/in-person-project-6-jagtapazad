// Presentational: the six skills are an array rendered with .map()

const skills = [
  { name: 'React', icon: '⚛️', category: 'Frontend Framework', level: 90 },
  { name: 'CSS3', icon: '🎨', category: 'Styling', level: 95 },
  { name: 'Responsive Design', icon: '📱', category: 'Design', level: 88 },
  { name: 'JavaScript', icon: '🚀', category: 'Programming', level: 85 },
  { name: 'Figma', icon: '🎯', category: 'Design Tools', level: 80 },
  { name: 'Node.js', icon: '🌐', category: 'Backend', level: 75 },
]

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2>Skills &amp; Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              <div className="skill-category">{skill.category}</div>
              <div className="skill-level">
                <div
                  className="skill-progress"
                  style={{ '--skill-level': `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
