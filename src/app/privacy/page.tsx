"use client";

import Link from "next/link";

export default function PrivacyPage() {
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

      {/* Privacy Content */}
      <section className="legal-section">
        <div className="container">
          <div className="legal-header">
            <span className="legal-badge">🔒 Privacy</span>
            <h1 className="legal-title">Privacy Policy</h1>
            <p className="legal-updated">Last Updated: 24-12-2024</p>
          </div>

          <div className="legal-content glass-card">
            <div className="legal-section-item">
              <h2>Introduction</h2>
              <p>
                Global Video respects the privacy of its users and is committed
                to protecting their personal information. This Privacy Policy
                explains how we collect, use, store, and safeguard user data
                while using the Global Video application. By using this app, you
                agree to the practices described in this policy.
              </p>
            </div>

            <div className="legal-section-item">
              <h2>Information We Collect</h2>
              <p>
                Global Video uses only a mobile number and email address for
                account verification and authentication purposes. Each user is
                allowed to create only one account using one unique mobile
                number and one unique email address.
              </p>
              <p>
                If a user attempts to create a second account using the same
                mobile number or email address, the previously created account
                may be blocked, and the newly attempted account may be
                permanently blocked to prevent misuse and maintain platform
                integrity.
              </p>
            </div>

            <div className="legal-section-item">
              <h2>Data Storage & Security</h2>
              <p>
                User data is stored securely for long-term operational purposes,
                and we have an experienced and dedicated team responsible for
                maintaining strong security measures to protect this data.
              </p>
              <p>
                We take reasonable and industry-standard precautions to
                safeguard user information against unauthorized access,
                alteration, disclosure, or destruction.
              </p>
              <div className="security-features">
                <div className="security-item">
                  <span className="security-icon">🔐</span>
                  <span>Secure Data Storage</span>
                </div>
                <div className="security-item">
                  <span className="security-icon">👥</span>
                  <span>Dedicated Security Team</span>
                </div>
                <div className="security-item">
                  <span className="security-icon">🛡️</span>
                  <span>Industry-Standard Protection</span>
                </div>
              </div>
            </div>

            <div className="legal-section-item">
              <h2>Data Sharing</h2>
              <p>
                User data is never sold, rented, or shared with third parties
                for malicious or unauthorized purposes. Access to user data is
                strictly limited and available only to authorized administrators
                for essential operational, security, and compliance purposes.
              </p>
            </div>

            <div className="legal-section-item">
              <h2>About the Application</h2>
              <p>
                Global Video is a task-based reward application that includes
                features such as ad viewing, reporting systems, and task
                completion, allowing users to earn rewards in the form of coins
                or rupees. These rewards can be redeemed for shopping vouchers
                or real cash rewards, subject to applicable terms and
                verification.
              </p>
              <p>
                The primary goal of the application is to strengthen and grow a
                reward-based community by offering engaging and beneficial
                tasks.
              </p>
            </div>

            <div className="legal-section-item">
              <h2>Advertisements</h2>
              <p>
                The application is free to use for users, and it displays only
                high-quality advertisements, which may include third-party brand
                advertisements or advertisements related to the application
                itself.
              </p>
              <ul>
                <li>
                  No inappropriate or misleading advertisements are shown.
                </li>
                <li>Users always have the right to skip advertisements.</li>
                <li>There are no restrictions or forced ad interactions.</li>
              </ul>
            </div>

            <div className="legal-section-item">
              <h2>Children&apos;s Privacy</h2>
              <p>
                Global Video does not knowingly collect personal information
                from children below the age required by applicable laws. Users
                are responsible for providing accurate information during
                registration.
              </p>
            </div>

            <div className="legal-section-item">
              <h2>Your Rights</h2>
              <p>
                Users may request access, correction, or deletion of their
                personal data where applicable, subject to legal and operational
                requirements.
              </p>
              <div className="rights-grid">
                <div className="right-item">
                  <span className="right-icon">📋</span>
                  <h4>Access</h4>
                  <p>Request access to your personal data</p>
                </div>
                <div className="right-item">
                  <span className="right-icon">✏️</span>
                  <h4>Correction</h4>
                  <p>Request correction of inaccurate data</p>
                </div>
                <div className="right-item">
                  <span className="right-icon">🗑️</span>
                  <h4>Deletion</h4>
                  <p>Request deletion of your data</p>
                </div>
              </div>
            </div>

            <div className="legal-section-item">
              <h2>Policy Updates</h2>
              <p>
                This Privacy Policy may be updated from time to time, and
                continued use of the application indicates acceptance of any
                changes.
              </p>
            </div>

            <div className="legal-section-item">
              <h2>Contact Us</h2>
              <p>
                If you have any questions or concerns regarding this Privacy
                Policy or data practices, you may contact the application
                administrator.
              </p>
              <div className="contact-info-box">
                <p>
                  <strong>Administrator:</strong> M.R. Sarkar
                </p>
                <p>
                  <strong>Application Name:</strong> Global Video
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:24x7support@globalvideo.in"
                    className="legal-link"
                  >
                    24x7support@globalvideo.in
                  </a>
                </p>
              </div>
            </div>

            <div className="thankyou-box">
              <p>
                Thank you for using Global Video! We invite you to enjoy the
                application, complete tasks, and earn rewards while spending
                your time productively.
              </p>
            </div>
          </div>

          <div className="legal-footer-links">
            <Link href="/terms" className="btn-secondary">
              Terms & Conditions →
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us →
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
