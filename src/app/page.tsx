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
        <a href="#">
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
        </a>

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
            <iframe
              width="100%"
              style={{ aspectRatio: "16/9", border: "none" }}
              src="https://www.youtube.com/embed/edL8JvxRTAo?autoplay=1&mute=1&loop=1&playlist=edL8JvxRTAo"
              title="Global Video Showcase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
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
              <div className="social-links" style={{}}>
                <a
                  href="https://t.me/globalvideo2026"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21.68 3.32L2.3 9.4c-1.37.42-1.36 1.9.15 2.53l5.05 2.1 1.7 5.7c.2.68 1.13.88 1.58.33l2.4-2.87 5.2 3.84c.95.7 2.37.22 2.6-1.03l3.5-16.68c.27-1.33-1.08-2.33-2.8-1.64z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/global_video2026"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/1Pi8HPDso3/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/globalvideo2026?s=09"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
                <a
                  href="https://whatsapp.com/channel/0029VbB3oqKBlHpaProcaz2C"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@globalvideo2026"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
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
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/privacy">Privacy</a>
                </li>
                <li>
                  <a href="/terms">Terms</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 Global Video. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
