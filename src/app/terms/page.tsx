"use client";

import Link from "next/link";

export default function TermsPage() {
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

      {/* Terms Content */}
      <section className="legal-section">
        <div className="container">
          <div className="legal-header">
            <span className="legal-badge">📜 Legal</span>
            <h1 className="legal-title">Terms & Conditions</h1>
            <p className="legal-updated">Last Updated: 24-12-2024</p>
          </div>

          <div className="legal-content glass-card">
            <p className="legal-intro">
              Welcome to Global Video. By downloading, installing, accessing, or
              using the Global Video mobile application (&quot;App&quot;), you
              agree to be bound by these Terms & Conditions (&quot;Terms&quot;).
              If you do not agree with these Terms, please do not use the App.
            </p>

            <div className="legal-section-item">
              <h2>1. Acceptance of Terms</h2>
              <p>By using Global Video, you confirm that you:</p>
              <ul>
                <li>Have read, understood, and agreed to these Terms</li>
                <li>
                  Are legally eligible to use the App under applicable laws
                </li>
                <li>
                  Agree to comply with all rules, policies, and guidelines of
                  the platform
                </li>
              </ul>
            </div>

            <div className="legal-section-item">
              <h2>2. User Eligibility</h2>
              <ul>
                <li>
                  Users must meet the minimum age requirement as per applicable
                  local laws.
                </li>
                <li>
                  Global Video does not knowingly allow usage by children below
                  the legally permitted age.
                </li>
                <li>
                  Users are responsible for ensuring the accuracy of the
                  information provided during registration.
                </li>
              </ul>
            </div>

            <div className="legal-section-item">
              <h2>3. Account Registration & Authentication</h2>
              <ul>
                <li>
                  Users must register using one unique mobile number and one
                  unique email address.
                </li>
                <li>Only one account per user is permitted.</li>
                <li>
                  Creating multiple accounts using the same mobile number or
                  email address is strictly prohibited.
                </li>
              </ul>
              <p>If duplicate or fraudulent accounts are detected:</p>
              <ul>
                <li>The original account may be suspended or blocked</li>
                <li>The newly created account may be permanently blocked</li>
              </ul>
              <p>
                Global Video reserves the right to verify, suspend, or terminate
                accounts without prior notice in cases of misuse or policy
                violation.
              </p>
            </div>

            <div className="legal-section-item">
              <h2>4. Use of the Application</h2>
              <p>
                Global Video is a task-based reward platform that allows users
                to:
              </p>
              <ul>
                <li>View advertisements</li>
                <li>Complete assigned tasks</li>
                <li>Participate in reporting or engagement systems</li>
                <li>Earn rewards in the form of coins or rupees</li>
              </ul>
              <p>The App is free to use.</p>
            </div>

            <div className="legal-section-item">
              <h2>5. Advertisements</h2>
              <p>The App displays high-quality advertisements, including:</p>
              <ul>
                <li>Third-party brand advertisements</li>
                <li>Advertisements related to Global Video services</li>
              </ul>
              <ul>
                <li>
                  No misleading, inappropriate, or illegal advertisements are
                  shown.
                </li>
                <li>Users are never forced to interact with ads.</li>
                <li>
                  Ads can always be skipped, and participation is voluntary.
                </li>
              </ul>
            </div>

            <div className="legal-section-item">
              <h2>6. Rewards & Redemption</h2>
              <p>Rewards earned may be redeemed as:</p>
              <ul>
                <li>Shopping vouchers</li>
                <li>
                  Real cash rewards (subject to verification and thresholds)
                </li>
              </ul>
              <p>
                Reward availability, redemption limits, and payout methods are
                governed by internal rules and may change from time to time.
              </p>
              <p>Global Video reserves the right to:</p>
              <ul>
                <li>Verify user activity before reward payout</li>
                <li>
                  Cancel or withhold rewards obtained through fraudulent,
                  abusive, or suspicious behavior
                </li>
              </ul>
              <p>
                Rewards have no guaranteed monetary value unless explicitly
                stated.
              </p>
            </div>

            <div className="legal-section-item">
              <h2>7. Prohibited Activities</h2>
              <p>Users agree not to:</p>
              <ul>
                <li>Use bots, automation tools, or scripts</li>
                <li>Manipulate ads, tasks, or reward systems</li>
                <li>Submit false reports or misleading activity</li>
                <li>Attempt unauthorized access to systems or data</li>
                <li>
                  Engage in any activity that violates laws or platform
                  integrity
                </li>
              </ul>
              <p className="warning-text">
                Violation may result in account suspension, reward forfeiture,
                or permanent ban.
              </p>
            </div>

            <div className="legal-section-item">
              <h2>8. Data Collection & Privacy</h2>
              <p>
                Global Video collects only essential information, such as mobile
                number and email address, for authentication and security.
              </p>
              <p>User data is:</p>
              <ul>
                <li>Stored securely</li>
                <li>Accessed only by authorized administrators</li>
                <li>Never sold, rented, or misused</li>
              </ul>
              <p>
                Data handling is governed by the{" "}
                <Link href="/privacy" className="legal-link">
                  Privacy Policy
                </Link>
                , which forms an integral part of these Terms.
              </p>
            </div>

            <div className="legal-section-item">
              <h2>9. Account Suspension & Termination</h2>
              <p>Global Video reserves the right to:</p>
              <p>Suspend or terminate any account that:</p>
              <ul>
                <li>Violates these Terms</li>
                <li>Engages in fraudulent or abusive behavior</li>
                <li>Poses security or compliance risks</li>
              </ul>
              <p>Termination may result in loss of accumulated rewards.</p>
            </div>

            <div className="legal-section-item">
              <h2>10. Limitation of Liability</h2>
              <p>Global Video is not responsible for:</p>
              <ul>
                <li>Temporary service interruptions</li>
                <li>Technical failures</li>
                <li>Loss of rewards due to violations</li>
              </ul>
              <p>
                The App is provided on an &quot;as-is&quot; and
                &quot;as-available&quot; basis.
              </p>
              <p>Use of the App is at the user&apos;s own risk.</p>
            </div>

            <div className="legal-section-item">
              <h2>11. Modifications to Terms</h2>
              <ul>
                <li>These Terms may be updated periodically.</li>
                <li>
                  Continued use of the App after updates indicates acceptance of
                  revised Terms.
                </li>
                <li>Users are encouraged to review Terms regularly.</li>
              </ul>
            </div>

            <div className="legal-section-item">
              <h2>12. Governing Law</h2>
              <p>
                These Terms shall be governed by and interpreted in accordance
                with applicable laws of India, unless otherwise required by
                jurisdiction.
              </p>
            </div>

            <div className="legal-section-item">
              <h2>13. Contact Information</h2>
              <p>
                For any questions, concerns, or support requests regarding these
                Terms:
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
          </div>

          <div className="legal-footer-links">
            <Link href="/privacy" className="btn-secondary">
              Privacy Policy →
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
