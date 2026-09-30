import { useCallback, useEffect, useRef, useState } from "react";
import "./Projects.css";

const projects = [
  {
    imageId: "01",
    title: "Microsoft GMO Sitecore",
    url: "https://partner.microsoft.com/",
    description: "Contributed to the UI by building core components, including hero sections, image heroes, search results, and cards. Also gained hands-on experience with Sitecore components, pages, sub-sites, goals, languages, and customization.",
  },
  {
    imageId: "02",
    title: "Carrefour",
    url: "https://www.carrefour.be/nl/",
    description: "Built UI features for a Hybris-based retail website, including search suggestions, recipe pages, search results, checkout, and cart flows. Used AJAX to communicate with APIs.",
  },
  {
    imageId: "03",
    title: "American Dental Association",
    url: "https://www.ada.org/",
    description: "Contributed as a UI developer to a Sitecore website from project inception through completion.",
  },
  {
    imageId: "04",
    title: "KC EMEA Period Calculator",
    url: "https://www.ubykotex.com.au/period-calculator",
    description: "Developed the period calculator, integrating APIs and implementing complex calculations. The project received an organization-level innovation award.",
  },
  {
    imageId: "05",
    title: "Bose Support",
    url: "https://support.bose.com/",
    description: "Independently managed the site's UI for nearly two and a half years, using Salesforce Experience Cloud features including Static Resources, Sites, themes, HTML headers, and advanced CSS.",
  },
  {
    imageId: "06",
    title: "AI-Powered Chat Application",
    url: "https://ashy-water-0708a8000.7.azurestaticapps.net/",
    requiresPassword: true,
    description: "Designed the Figma UX and built the React frontend end to end. Delivered an initial working skeleton within three weeks, then added MSAL authentication, API integration, deployment, and Azure DevOps CI/CD pipelines.",
  },
] as const;

type Project = (typeof projects)[number];
const projectAccessPassword = import.meta.env.VITE_PROJECT_ACCESS_PASSWORD;

export default function Projects() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isInactive, setIsInactive] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [pendingProject, setPendingProject] = useState<Project | null>(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const closeLightbox = useCallback(() => {
    setIsImageLoaded(false);
    setIsModalVisible(false);
    closeTimerRef.current = setTimeout(() => setSelectedImage(null), 500);
  }, []);

  const closePasswordDialog = useCallback(() => {
    setPendingProject(null);
    setPassword("");
    setPasswordError("");
  }, []);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInactive(!entry.isIntersecting),
      { rootMargin: "-30% 0px -30% 0px" },
    );

    observer.observe(gallery);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrollArea = scrollAreaRef.current;
    if (!scrollArea) return;

    const handleWheel = (event: WheelEvent) => {
      const rawDelta = event.deltaX * 10;
      const delta = Math.max(-25, Math.min(25, rawDelta));
      if (!delta) return;

      event.preventDefault();
      scrollArea.scrollLeft += delta;
    };

    scrollArea.addEventListener("wheel", handleWheel, { passive: false });
    return () => scrollArea.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    if (!selectedImage) return;

    modalRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeLightbox, selectedImage]);

  useEffect(() => () => {
    if (scrollTimerRef.current) clearInterval(scrollTimerRef.current);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  }, []);

  useEffect(() => {
    if (!pendingProject) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePasswordDialog();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closePasswordDialog, pendingProject]);

  const scrollGallery = (amount: number) => {
    scrollAreaRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  const startAutoScroll = (direction: 1 | -1) => {
    if (scrollTimerRef.current) clearInterval(scrollTimerRef.current);
    scrollTimerRef.current = setInterval(() => {
      scrollAreaRef.current?.scrollBy({ left: direction * 5 });
    }, 10);
  };

  const stopAutoScroll = () => {
    if (scrollTimerRef.current) clearInterval(scrollTimerRef.current);
    scrollTimerRef.current = null;
  };

  const openLightbox = (image: string) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setIsImageLoaded(false);
    setSelectedImage(image);
    setIsModalVisible(true);
  };

  const requestProjectAccess = (project: Project) => {
    setPassword("");
    setPasswordError("");
    setPendingProject(project);
  };

  const unlockProject = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!projectAccessPassword) {
      setPasswordError("Access is not configured yet. Please contact Samhita directly.");
      return;
    }

    if (password !== projectAccessPassword) {
      setPasswordError("That password is incorrect. Please try again.");
      return;
    }

    if (pendingProject) window.open(pendingProject.url, "_blank", "noopener,noreferrer");
    closePasswordDialog();
  };

  return (
    <section className="wrapper style1 align-center">
      <div className="inner">
        <h2>Selected projects</h2>
        <p>
          A selection of enterprise web projects spanning Sitecore, Hybris, Salesforce Experience Cloud and React - all in chronological order.
        </p>
      </div>

      <div ref={galleryRef} className={`gallery style2 medium lightbox onscroll-fade-in${isInactive ? " is-inactive" : ""}`}>
        <button
          type="button"
          className="backward"
          aria-label="Scroll gallery backward"
          onClick={() => scrollGallery(-380)}
          onMouseEnter={() => startAutoScroll(-1)}
          onMouseLeave={stopAutoScroll}
          onFocus={() => startAutoScroll(-1)}
          onBlur={stopAutoScroll}
        />

        <div ref={scrollAreaRef} className="inner">
          {projects.map((project) => {
            const { imageId, title, url, description } = project;
            const requiresPassword = "requiresPassword" in project && project.requiresPassword;
            const image = `./images/gallery/thumbs/${imageId}.png`;
            return (
              <article key={title}>
                <a href={image} className="image" onClick={(event) => { event.preventDefault(); openLightbox(image); }}>
                  <img src={`./images/gallery/thumbs/${imageId}.png`} alt={title} />
                </a>
                <div className="caption">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ul className="actions fixed">
                    <li>
                      {requiresPassword ? (
                        <button type="button" className="button small button--enter-pwd" onClick={() => requestProjectAccess(project)}>Enter Password</button>
                      ) : (
                        <a className="button small" href={url} target="_blank" rel="noreferrer">Visit site</a>
                      )}
                    </li>
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <button
          type="button"
          className="forward"
          aria-label="Scroll gallery forward"
          onClick={() => scrollGallery(380)}
          onMouseEnter={() => startAutoScroll(1)}
          onMouseLeave={stopAutoScroll}
          onFocus={() => startAutoScroll(1)}
          onBlur={stopAutoScroll}
        />

        {selectedImage && (
          <div
            ref={modalRef}
            className={`modal${isModalVisible ? " visible" : ""}${isImageLoaded ? " loaded" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label="Expanded project image"
            tabIndex={-1}
            onClick={(event) => { if (event.target === event.currentTarget) closeLightbox(); }}
          >
            <div className="inner">
              <img src={selectedImage} alt="Expanded project preview" onLoad={() => setIsImageLoaded(true)} />
            </div>
          </div>
        )}
      </div>

      {pendingProject && (
        <div className="project-access-dialog" role="dialog" aria-modal="true" aria-labelledby="project-access-title" onMouseDown={(event) => { if (event.target === event.currentTarget) closePasswordDialog(); }}>
          <form className="project-access-dialog__card" onSubmit={unlockProject}>
            <h2 id="project-access-title">Protected project</h2>
            <p>Enter the password shared with you to visit {pendingProject.title}.</p>
            <label htmlFor="project-password">Password</label>
            <input id="project-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" autoFocus required />
            {passwordError && <p className="project-access-dialog__error" role="alert">{passwordError}</p>}
            <div className="project-access-dialog__actions">
              <button type="button" onClick={closePasswordDialog}>Cancel</button>
              <button type="submit" className="primary">Continue</button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}
