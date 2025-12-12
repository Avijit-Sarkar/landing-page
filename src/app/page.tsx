"use client";

import { useState, useEffect } from "react";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Animated Background */}
      <div className="animated-bg" />

      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <img
            src="/logo.jpg"
            alt="Global Video Logo"
            width="36"
            height="36"
            className="rounded-full"
          />
          Global Video
        </div>

        <ul className="nav-links">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#how-it-works">How It Works</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
        </ul>

        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          {/* <a href="#" className="btn-secondary" style={{ padding: "12px 24px" }}>
            Sign In
          </a> */}
          <a href="#" className="btn-primary" style={{ padding: "12px 24px" }}>
            Get Started
          </a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="floating-element floating-element-1" />
        <div className="floating-element floating-element-2" />
        <div className="floating-element floating-element-3" />

        <div className="hero-content">
          <h1 className="hero-title">
            Stream <span className="gradient-text">Global Videos</span>
            <br />
            Like Never Before
          </h1>

          <p className="hero-description">
            Discover millions of videos from around the world. Experience
            crystal-clear streaming, personalized recommendations, and seamless
            playback on any device.
          </p>

          <div className="hero-buttons">
            <a href="#" className="btn-primary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Coming Soon
            </a>
            <a href="#how-it-works" className="btn-secondary">
              Learn More →
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Unlimited+</div>
              <div className="stat-label">Videos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9★</div>
              <div className="stat-label">App Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="container">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">
            Everything you need for the ultimate video streaming experience, all
            in one place.
          </p>

          <div className="features-grid">
            <div className="glass-card feature-card">
              <div className="feature-icon feature-icon-1">🎬</div>
              <h3 className="feature-title">4K Ultra HD Streaming</h3>
              <p className="feature-description">
                Experience stunning visual clarity with our 4K streaming
                technology. Every frame looks breathtaking on any screen size.
              </p>
            </div>

            <div className="glass-card feature-card">
              <div className="feature-icon feature-icon-2">🤖</div>
              <h3 className="feature-title">AI Recommendations</h3>
              <p className="feature-description">
                Our smart algorithm learns your preferences and suggests videos
                you&apos;ll actually love watching.
              </p>
            </div>

            <div className="glass-card feature-card">
              <div className="feature-icon feature-icon-3">📱</div>
              <h3 className="feature-title">Multi-Device Sync</h3>
              <p className="feature-description">
                Start watching on your phone, continue on your TV. Your progress
                syncs seamlessly across all devices.
              </p>
            </div>

            <div className="glass-card feature-card">
              <div className="feature-icon feature-icon-4">⚡</div>
              <h3 className="feature-title">Lightning Fast</h3>
              <p className="feature-description">
                Powered by global CDN infrastructure. Videos start instantly
                with zero buffering, anywhere in the world.
              </p>
            </div>

            <div className="glass-card feature-card">
              <div className="feature-icon feature-icon-5">🔒</div>
              <h3 className="feature-title">Privacy First</h3>
              <p className="feature-description">
                Your viewing history stays private. We use end-to-end encryption
                to protect your data and preferences.
              </p>
            </div>

            <div className="glass-card feature-card">
              <div className="feature-icon feature-icon-6">🌍</div>
              <h3 className="feature-title">Global Content</h3>
              <p className="feature-description">
                Access content from 190+ countries. Discover diverse cultures
                and perspectives from around the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="video-showcase">
            <div className="video-placeholder">
              <button className="play-button">▶</button>
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  right: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.875rem",
                }}
              >
                <span>See Global Video in Action</span>
                <span>2:34</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Get started in just three simple steps and unlock a world of
            entertainment.
          </p>

          <div className="steps-container">
            <div className="glass-card step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Create Your Account</h3>
              <p className="step-description">
                Sign up in seconds with your email or social accounts. No credit
                card required to start.
              </p>
            </div>

            <div className="glass-card step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Verify your Account</h3>
              <p className="step-description">
                Verify your account, get membership. Account activation in
                fraction of second.
              </p>
            </div>

            <div className="glass-card step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Start getting rewards</h3>
              <p className="step-description">
                Dive into millions of videos. Watch anywhere, anytime & get
                unlimited reward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section">
        <div className="container">
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle">
            Join millions of satisfied users who have transformed their viewing
            experience.
          </p>

          <div className="testimonials-grid">
            <div className="glass-card testimonial-card">
              <p className="testimonial-text">
                Global Video has completely changed how I discover content. The
                recommendations are spot-on, and the streaming quality is
                absolutely incredible. Best platform I&apos;ve ever used!
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">SK</div>
                <div className="author-info">
                  <h4>Sarah Kim</h4>
                  <p>Content Creator • LA</p>
                </div>
              </div>
            </div>

            <div className="glass-card testimonial-card">
              <p className="testimonial-text">
                As a filmmaker, I appreciate the 4K quality and global reach. My
                short films have found audiences I never could have reached on
                other platforms. Truly revolutionary!
              </p>
              <div className="testimonial-author">
                <div
                  className="author-avatar"
                  style={{
                    background:
                      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  }}
                >
                  MP
                </div>
                <div className="author-info">
                  <h4>Marcus Patel</h4>
                  <p>Filmmaker • Mumbai</p>
                </div>
              </div>
            </div>

            <div className="glass-card testimonial-card">
              <p className="testimonial-text">
                The cross-device sync is a game-changer. I start a documentary
                on my commute and finish it on my smart TV at home. Seamless
                experience every single time.
              </p>
              <div className="testimonial-author">
                <div
                  className="author-avatar"
                  style={{
                    background:
                      "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  }}
                >
                  EJ
                </div>
                <div className="author-info">
                  <h4>Emma Johnson</h4>
                  <p>Product Manager • London</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section id="pricing" className="section">
        <div className="container">
          <h2 className="section-title">Simple Pricing</h2>
          <p className="section-subtitle">
            Choose the plan that works for you. Upgrade or downgrade anytime.
          </p>

          <div className="pricing-grid">
            <div className="glass-card pricing-card">
              <h3 className="pricing-name">Free</h3>
              <div className="pricing-price">
                $0<span>/month</span>
              </div>
              <p className="pricing-description">
                Perfect for casual viewers
              </p>
              <ul className="pricing-features">
                <li>
                  <span className="check-icon">✓</span>
                  720p HD Streaming
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  Ad-supported content
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  Basic recommendations
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  1 Device at a time
                </li>
              </ul>
              <a href="#" className="btn-secondary" style={{ width: "100%" }}>
                Get Started
              </a>
            </div>

            <div className="glass-card pricing-card featured">
              <h3 className="pricing-name">Pro</h3>
              <div className="pricing-price">
                $9<span>/month</span>
              </div>
              <p className="pricing-description">
                Best for enthusiasts
              </p>
              <ul className="pricing-features">
                <li>
                  <span className="check-icon">✓</span>
                  4K Ultra HD Streaming
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  Ad-free experience
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  AI-powered recommendations
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  4 Devices simultaneously
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  Offline downloads
                </li>
              </ul>
              <a href="#" className="btn-primary" style={{ width: "100%" }}>
                Start Free Trial
              </a>
            </div>

            <div className="glass-card pricing-card">
              <h3 className="pricing-name">Enterprise</h3>
              <div className="pricing-price">
                $29<span>/month</span>
              </div>
              <p className="pricing-description">
                For teams & businesses
              </p>
              <ul className="pricing-features">
                <li>
                  <span className="check-icon">✓</span>
                  Everything in Pro
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  Unlimited team members
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  Advanced analytics
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  Priority support
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  Custom branding
                </li>
              </ul>
              <a href="#" className="btn-secondary" style={{ width: "100%" }}>
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Transform Your
              <br />
              <span
                className="gradient-text"
                style={{
                  background:
                    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Viewing Experience?
              </span>
            </h2>
            <p className="cta-description">
              Join millions of users streaming their favorite content with
              Global Video. Start your free journey today.
            </p>
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#"
                className="btn-primary"
                style={{ fontSize: "1.125rem", padding: "20px 40px" }}
              >
                Get Started for Free →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">
                <img
                  src="/logo.jpg"
                  alt="Global Video Logo"
                  width="36"
                  height="36"
                  className="rounded-full"
                />
                Global Video
              </div>
              <p>
                Discover, stream, and share videos from around the world. Your
                gateway to global entertainment.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  𝕏
                </a>
                <a href="#" className="social-link">
                  in
                </a>
                <a href="#" className="social-link">
                  ▶
                </a>
                <a href="#" className="social-link">
                  📷
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h4>Product</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Apps</a>
                </li>
                <li>
                  <a href="#">API</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Press Kit</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Support</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2024 Global Video. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
