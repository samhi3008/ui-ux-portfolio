import "./Home.css";

export default function Home() {
  return (
    <>

		{/* Wrapper */}
			<div id="wrapper" className="divided">

				{/* One */}
					<section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
						<div className="content">
							<h1>Samhita Nagamalli</h1>
							<p className="major">Lead Frontend Engineer specializing in React, TypeScript, AI applications, and Azure.</p>
							<ul className="actions stacked">
								<li><a href="/projects" className="button big wide smooth-scroll-middle">Explore my experience</a></li>
							</ul>
						</div>
						<div className="image">
							<img src="./images/samhita.jpg" alt="" />
						</div>
					</section>

				{/* Two */}
					<section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">
						<div className="content">
							<h2>Enterprise frontend delivery</h2>
							<p>I own end-to-end frontend delivery for enterprise web applications, translating business requirements into scalable, accessible, and high-performing user experiences.</p>
							<ul className="actions stacked">
								<li><a href="/projects" className="button">Learn More</a></li>
							</ul>
						</div>
						<div className="image">
							<img src="./images/web-app.png" alt="" />
						</div>
					</section>

				{/* Three */}
					<section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
						<div className="content">
							<h2>Accessible, maintainable systems</h2>
							<p>I build reusable React and TypeScript component architectures and lead WCAG accessibility and performance improvements across applications.</p>
							<ul className="actions stacked">
								<li><a href="/projects" className="button">Learn More</a></li>
							</ul>
						</div>
						<div className="image">
							<img src="./images/wcag.jpg" alt="" />
						</div>
					</section>

				{/* Four */}
					<section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
						<div className="content">
							<h2>AI application development</h2>
							<p>I led end-to-end frontend development of a React-based AI chat application, from Figma UX design through API integration, Azure DevOps CI/CD, and Azure deployment.</p>
							<ul className="actions stacked">
								<li><a href="/projects" className="button">Learn More</a></li>
							</ul>
						</div>
						<div className="image">
							<img src="./images/ai-app.png" alt="" />
						</div>
					</section>

			</div>

		{/* Scripts */}
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</>
  );
}
