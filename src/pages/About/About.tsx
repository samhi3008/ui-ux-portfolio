const expertise = [
  ["fa-gem", "React & TypeScript", "I build reusable component architectures that improve UI consistency, development efficiency, and maintainability."],
  ["fa-code", "JavaScript, HTML & CSS", "Experienced with modern JavaScript, HTML5, CSS3, Bootstrap, responsive design, and cross-browser compatibility."],
  ["fa-pencil-ruler", "UX & Figma", "I translate business requirements into user flows, UX designs, and Figma prototypes."],
  ["fa-cubes", "Design systems", "I apply design systems and component architecture to create scalable frontend foundations."],
  ["fa-universal-access", "Accessibility", "Led WCAG accessibility initiatives using tools such as axe DevTools; improved accessibility audit scores from 38% to 90%."],
  ["fa-tachometer-alt", "Performance", "Optimized frontend performance and consistently achieved PageSpeed scores of 85–90."],
  ["fa-cloud", "Azure & CI/CD", "Implemented Azure DevOps CI/CD pipelines and deployed applications through Azure Portal for lower orgs."],
  ["fa-layer-group", "Enterprise platforms", "Experienced with Sitecore, Salesforce Experience Cloud, AEM, and SAP Hybris."],
  ["fa-vial", "Quality engineering", "I use Git, Jira, BrowserStack, and Sauce Labs to support reliable, high-quality frontend releases."],
  ["fa-robot", "AI applications", "Led the frontend development of a React-based AI chat application from UX design through API integration and deployment."],
  ["fa-users", "Technical leadership", "I currently serve as a frontend subject-matter expert and also help in evaluating UI candidates for projects."],
  ["fa-award", "Recognition", "Recipient of the Star Award for individual contribution and the Team ACE Award for project excellence and business impact."],
];

export default function About() {
  return (
    <section className="wrapper style1 align-center">
      <div className="inner">
        <h2>About Samhita</h2>
        <p>
          Lead Frontend Engineer at Accenture with 11 years of experience delivering enterprise web applications. I specialize in React, TypeScript, accessible user experiences, performance optimization, AI applications, and Azure.
        </p>
        <div className="items style1 medium onscroll-fade-in">
          {expertise.map(([icon, title, description]) => (
            <section key={title}>
              <span className={`icon solid style2 major ${icon}`}></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
