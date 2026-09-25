import "./Home.css";

export default function Home() {
  return (
    <body className="is-preload">

		{/* Wrapper */}
			<div id="wrapper" className="divided">

				{/* One */}
					<section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
						<div className="content">
							<h1>Story</h1>
							<p className="major">A (modular, highly tweakable) responsive one-page template designed by <a href="https://html5up.net">HTML5 UP</a> and released for free under the <a href="https://html5up.net/license">Creative Commons</a>.</p>
							<ul className="actions stacked">
								<li><a href="#first" className="button big wide smooth-scroll-middle">Get Started</a></li>
							</ul>
						</div>
						<div className="image">
							<img src="./src/images/banner.jpg" alt="" />
						</div>
					</section>

				{/* Two */}
					<section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">
						<div className="content">
							<h2>Magna etiam feugiat</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.</p>
							<ul className="actions stacked">
								<li><a href="#" className="button">Learn More</a></li>
							</ul>
						</div>
						<div className="image">
							<img src="./src/images/spotlight01.jpg" alt="" />
						</div>
					</section>

				{/* Three */}
					<section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
						<div className="content">
							<h2>Tempus adipiscing</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.</p>
							<ul className="actions stacked">
								<li><a href="#" className="button">Learn More</a></li>
							</ul>
						</div>
						<div className="image">
							<img src="./src/images/spotlight02.jpg" alt="" />
						</div>
					</section>

				{/* Four */}
					<section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
						<div className="content">
							<h2>Pharetra etiam nulla</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.</p>
							<ul className="actions stacked">
								<li><a href="#" className="button">Learn More</a></li>
							</ul>
						</div>
						<div className="image">
							<img src="./src/images/spotlight03.jpg" alt="" />
						</div>
					</section>

				{/* Footer */}
					<footer className="wrapper style1 align-center">
						<div className="inner">
							<ul className="icons">
								<li><a href="#" className="icon brands style2 fa-twitter"><span className="label">Twitter</span></a></li>
								<li><a href="#" className="icon brands style2 fa-facebook-f"><span className="label">Facebook</span></a></li>
								<li><a href="#" className="icon brands style2 fa-instagram"><span className="label">Instagram</span></a></li>
								<li><a href="#" className="icon brands style2 fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
								<li><a href="#" className="icon style2 fa-envelope"><span className="label">Email</span></a></li>
							</ul>
							<p>&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
						</div>
					</footer>

			</div>

		{/* Scripts */}
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
  );
}
