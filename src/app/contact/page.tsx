"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct mailto link
    const mailtoLink = `mailto:24x7support@globalvideo.in?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\n\n${formData.message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Animated Background */}
      <div className="animated-bg" />

      {/* Navbar */}
      <nav className="navbar">
        <Link href="/">
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
        </Link>

        <ul className="nav-links">
          <li>
            <Link href="/#features">Features</Link>
          </li>
          <li>
            <Link href="/#how-it-works">How It Works</Link>
          </li>
          <li>
            <Link href="/#testimonials">Testimonials</Link>
          </li>
        </ul>

        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Link
            href="/"
            className="btn-primary"
            style={{ padding: "12px 24px" }}
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Contact Content */}
      <section className="legal-section contact-section">
        <div className="container">
          <div className="legal-header">
            <span className="legal-badge">✉️ Support</span>
            <h1 className="legal-title">Contact Us</h1>
            <p className="legal-updated">We&apos;re here to help you</p>
          </div>

          <div className="contact-grid">
            {/* Contact Info Card */}
            <div className="contact-info-card glass-card">
              <h2>Get in Touch</h2>
              <p className="contact-intro">
                Have questions, feedback, or need assistance? We&apos;d love to
                hear from you. Our support team is ready to help.
              </p>

              <div className="contact-method">
                <div className="contact-method-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className="contact-method-info">
                  <h4>Email</h4>
                  <a
                    href="mailto:24x7support@globalvideo.in"
                    className="contact-link"
                  >
                    24x7support@globalvideo.in
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21.68 3.32L2.3 9.4c-1.37.42-1.36 1.9.15 2.53l5.05 2.1 1.7 5.7c.2.68 1.13.88 1.58.33l2.4-2.87 5.2 3.84c.95.7 2.37.22 2.6-1.03l3.5-16.68c.27-1.33-1.08-2.33-2.8-1.64z" />
                  </svg>
                </div>
                <div className="contact-method-info">
                  <h4>Telegram</h4>
                  <a
                    href="https://t.me/globalvideo2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    @globalvideo2026
                  </a>
                </div>
              </div>

              <div className="contact-social-section">
                <h4>Follow Us</h4>
                <div className="contact-social-links">
                  <a
                    href="https://t.me/globalvideo2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
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

              <div className="response-time">
                <div className="response-icon">⚡</div>
                <div>
                  <h4>Quick Response</h4>
                  <p>We typically respond within 24-48 hours</p>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="contact-form-card glass-card">
              <h2>Send us a Message</h2>

              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                  <button
                    className="btn-secondary"
                    onClick={() => setSubmitted(false)}
                    style={{ marginTop: "20px" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="account">Account Issues</option>
                      <option value="rewards">Rewards & Redemption</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="legal-footer-links">
            <Link href="/terms" className="btn-secondary">
              Terms & Conditions →
            </Link>
            <Link href="/privacy" className="btn-secondary">
              Privacy Policy →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            <p>© 2025 Global Video. All rights reserved.</p>
            <div className="footer-legal-links">
              <Link href="/terms">Terms & Conditions</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
