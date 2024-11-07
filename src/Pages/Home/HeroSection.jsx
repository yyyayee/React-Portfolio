export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hello And Welcome!</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">I'm Tanida</span>{" "}
            <br />
            Thiwakorn
          </h1>
          <p className="hero--section-description">
            Students of King Mongkut's University of Technology North Bangkok
            <br /> Major of Electronic Engineering Technology (Computer)
          </p>
        </div>
        <button className="btn btn-primary" onClick={() => window.open('https://github.com/yyyayee?tab=repositories', '_blank')}>
          Visit My GitHub
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
