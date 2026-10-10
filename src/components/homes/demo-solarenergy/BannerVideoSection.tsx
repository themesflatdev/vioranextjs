export default function BannerVideoSection() {
  return (
    <div className="section-banner-10">
      <video className="thumb thumbs-video" muted autoPlay loop playsInline>
        <source src="/assets/video/video-solar.mp4" type="video/mp4" />
      </video>
      <div className="wrap-box">
        <div className="tf-container">
          <div className="box ms-auto" data-direction="right">
            <h3 className="title">Create Impact: Choose Green Solutions, Defeat Pollution</h3>
            <a href="#" className="tf-btn btn-bg-dark-2 btn-hover-animate-2">
              <span>Work With Us</span>
              <span className="bg-effect"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
