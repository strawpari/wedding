export default function App() {
  // Local images from public/images
  const bgImage = "/images/web-bg.png";
  const ringImage = "/images/web-ring.png";
  const namesImage = "/images/web-words.svg";
  const desktopPhotos = "/images/web-photos.png";
  const mobilePhotos = "/images/web-photos-mobile.png";

  return (
    <div className="desktop" data-name="Desktop">
      {/* Background image grid */}
      <div className="bg-grid bg-grid-left">
        <div className="bg-tile bg-tile-1">
          <img src={bgImage} alt="" />
        </div>
        <div className="bg-tile bg-tile-2">
          <img src={bgImage} alt="" />
        </div>
        <div className="bg-tile bg-tile-3">
          <img src={bgImage} alt="" />
        </div>
        <div className="bg-tile bg-tile-4">
          <img src={bgImage} alt="" />
        </div>
        <div className="bg-tile bg-tile-5">
          <img src={bgImage} alt="" />
        </div>
        <div className="bg-tile bg-tile-6">
          <img src={bgImage} alt="" />
        </div>
        <div className="bg-tile bg-tile-7">
          <img src={bgImage} alt="" />
        </div>
        <div className="bg-tile bg-tile-8">
          <img src={bgImage} alt="" />
        </div>
      </div>
      <div className="bg-grid bg-grid-right">
        <div className="bg-tile bg-tile-1">
          <img src={bgImage} alt="" />
        </div>
        <div className="bg-tile bg-tile-2">
          <img src={bgImage} alt="" />
        </div>
        <div className="bg-tile bg-tile-3">
          <img src={bgImage} alt="" />
        </div>
        <div className="bg-tile bg-tile-4">
          <img src={bgImage} alt="" />
        </div>
        <div className="bg-tile bg-tile-5">
          <img src={bgImage} alt="" />
        </div>
        <div className="bg-tile bg-tile-6">
          <img src={bgImage} alt="" />
        </div>
        <div className="bg-tile bg-tile-7">
          <img src={bgImage} alt="" />
        </div>
        <div className="bg-tile bg-tile-8">
          <img src={bgImage} alt="" />
        </div>
      </div>

      {/* Ring image overlay */}
      <div className="ring-overlay">
        <img src={ringImage} alt="Ring" />
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* Left side - Text content */}
        <div className="text-content">
          <div className="wedding-intro">
            <p className="wedding-of">The wedding of</p>
            <div className="names-image">
              <img src={namesImage} alt="Brittany Pham & Pari Gabriel" />
            </div>
          </div>
          <div className="event-details">
            <div className="event-info">
              <p>September 19, 2026</p>
              <p>Evergreen Lodge</p>
              <p>Yosemite Valley, CA</p>
            </div>
            <div className="event-notes">
              <p>Don't book your rooms yet!</p>
              <p>More information is on the way.</p>
            </div>
          </div>
        </div>

        {/* Right side - Photos */}
        <div className="photos-container">
          {/* Desktop photos */}
          <img src={desktopPhotos} alt="Wedding photos" className="photos-desktop" />
          {/* Mobile photos */}
          <img src={mobilePhotos} alt="Wedding photos" className="photos-mobile" />
        </div>
      </div>
    </div>
  )
}
