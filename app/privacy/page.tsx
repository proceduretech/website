"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <LazyMotion features={domAnimation}>
    <main className="relative min-h-screen bg-base overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pb-20 bg-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-bold text-text-primary leading-[1.1] tracking-tight mb-4"
            >
              Privacy Policy
            </m.h1>
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center gap-2 text-text-secondary"
            >
              <span className="font-medium">Last Updated:</span>
              <span>Aug 12, 2025</span>
            </m.div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="relative pb-24 sm:pb-36 bg-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {/* Section 1 */}
            <PolicySection title="1. Introduction & Scope">
              <p>
                Welcome to Procedure&apos;s Privacy Policy. This policy explains
                how we collect, use, and protect your information when you visit
                our website, use our services, or interact with us. It applies
                to all visitors, clients, partners, and anyone who engages with
                Procedure.
              </p>
              <p>
                By using our services, you&apos;re agreeing to the practices
                described in this policy. We&apos;re committed to being
                transparent about our data practices and giving you control over
                your information.
              </p>
            </PolicySection>

            {/* Section 2 */}
            <PolicySection title="2. Information We Collect">
              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Personal Information You Share With Us
              </h4>
              <p>We collect information you voluntarily provide when you:</p>
              <ul>
                <li>Fill out contact forms or request consultations</li>
                <li>Subscribe to our newsletter</li>
                <li>Apply for job positions</li>
                <li>Communicate with our team</li>
              </ul>
              <p>This may include:</p>
              <ul>
                <li>
                  <strong>Contact details:</strong> Name, email address, phone
                  number, company name
                </li>
                <li>
                  <strong>Professional information:</strong> Job title,
                  industry, project requirements
                </li>
                <li>
                  <strong>Communication records:</strong> Messages you send us,
                  meeting notes
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Information We Collect Automatically
              </h4>
              <p>When you visit our website, we automatically collect:</p>
              <ul>
                <li>
                  <strong>Technical data:</strong> IP address, browser type and
                  version, operating system
                </li>
                <li>
                  <strong>Usage data:</strong> Pages visited, time spent on
                  site, click patterns, referral sources
                </li>
                <li>
                  <strong>Device information:</strong> Screen resolution, device
                  type, location data (if you allow it)
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Cookies and Tracking Technologies
              </h4>
              <p>
                We use cookies and similar technologies to enhance your
                experience. See our dedicated Cookies section below for details.
              </p>
            </PolicySection>

            {/* Section 3 */}
            <PolicySection title="3. How We Use Your Information">
              <p>We use your information to:</p>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Provide Our Services
              </h4>
              <ul>
                <li>Respond to your inquiries and consultation requests</li>
                <li>Deliver the services you&apos;ve requested</li>
                <li>Send project updates and communications</li>
                <li>Process job applications</li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Improve and Analyze
              </h4>
              <ul>
                <li>Understand how you use our website</li>
                <li>Identify areas for improvement</li>
                <li>Conduct market research and analytics</li>
                <li>Personalize your experience</li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Stay Connected
              </h4>
              <ul>
                <li>
                  Send newsletters and updates (only if you&apos;ve subscribed)
                </li>
                <li>Share relevant industry insights</li>
                <li>Notify you about our services that might interest you</li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Legal and Security
              </h4>
              <ul>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and security threats</li>
                <li>Enforce our terms of service</li>
              </ul>

              <p>
                <strong>Legal Basis:</strong> We process your data based on
                consent, legitimate business interests, contractual necessity,
                and legal compliance as required under Indian data protection
                laws.
              </p>
            </PolicySection>

            {/* Section 4 */}
            <PolicySection title="4. Cookies & Tracking Technologies">
              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                What Are Cookies?
              </h4>
              <p>
                Cookies are small text files stored on your device that help us
                improve your browsing experience.
              </p>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Tracking Tools We Use
              </h4>
              <p>
                We leverage tracking technologies like cookies and analytics
                tools on our website to understand visitor behavior and
                preferences.
              </p>
              <p>
                <strong>Specific Tools We Use:</strong>
              </p>
              <ul>
                <li>
                  <strong>Google Analytics:</strong> To measure website traffic,
                  user engagement, and content performance
                </li>
                <li>
                  <strong>Google Tag Manager:</strong> To manage and deploy
                  tracking codes efficiently
                </li>
                <li>
                  <strong>Other analytics tools:</strong> As needed to
                  understand user experience and site performance
                </li>
              </ul>
              <p>
                The goal of using these tools is to build an accurate analytical
                roadmap for measuring the impact of our marketing efforts,
                understanding user needs, and continuously improving our website
                and services.
              </p>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Types of Cookies We Use
              </h4>
              <p>
                <strong>Essential Cookies (Always Active)</strong>
              </p>
              <ul>
                <li>Enable basic website functionality</li>
                <li>Remember your preferences during your visit</li>
                <li>Ensure security features work properly</li>
              </ul>

              <p>
                <strong>Analytics Cookies (Optional)</strong>
              </p>
              <ul>
                <li>Help us understand how visitors use our site</li>
                <li>Allow us to measure and improve website performance</li>
                <li>
                  Powered by Google Analytics, Google Tag Manager, and similar
                  tools
                </li>
              </ul>

              <p>
                <strong>Functional Cookies (Optional)</strong>
              </p>
              <ul>
                <li>Remember your preferences and settings</li>
                <li>Enable enhanced features like chat functionality</li>
                <li>Customize content based on your interests</li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Managing Your Cookie Preferences
              </h4>
              <p>You can control cookies through:</p>
              <ul>
                <li>Our cookie banner when you first visit</li>
                <li>
                  Your browser settings (instructions available in your
                  browser&apos;s help section)
                </li>
                <li>Opt-out tools provided by analytics services</li>
              </ul>
              <p>
                <strong>Note:</strong> Disabling certain cookies may affect
                website functionality.
              </p>
            </PolicySection>

            {/* Section 5 */}
            <PolicySection title="5. Data Sharing & Disclosure">
              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Who We Share Data With
              </h4>
              <p>
                <strong>Service Providers:</strong> We work with trusted
                third-party providers for:
              </p>
              <ul>
                <li>Website hosting and maintenance</li>
                <li>Email marketing and communications</li>
                <li>
                  Analytics and performance monitoring (including Google
                  Analytics and Google Tag Manager)
                </li>
                <li>Customer support tools</li>
              </ul>

              <p>
                <strong>Legal Requirements:</strong> We may disclose information
                when required by:
              </p>
              <ul>
                <li>Court orders or legal processes</li>
                <li>Government authorities for regulatory compliance</li>
                <li>Protection of our rights, property, or safety</li>
              </ul>

              <p>
                <strong>Business Transfers:</strong> In case of merger,
                acquisition, or sale of assets, your data may be transferred as
                part of that transaction.
              </p>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                What We Don&apos;t Do
              </h4>
              <ul>
                <li>
                  <strong>We never sell your personal data</strong> to
                  advertisers or marketers
                </li>
                <li>
                  We don&apos;t share your information for promotional purposes
                  without consent
                </li>
                <li>
                  We don&apos;t provide data to unauthorized third parties
                </li>
              </ul>
            </PolicySection>

            {/* Section 6 */}
            <PolicySection title="6. Data Security Measures">
              <p>We take data security seriously and implement:</p>

              <p>
                <strong>Technical Safeguards</strong>
              </p>
              <ul>
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure hosting with regular security updates</li>
                <li>Access controls and authentication systems</li>
                <li>Regular security audits and monitoring</li>
              </ul>

              <p>
                <strong>Organizational Measures</strong>
              </p>
              <ul>
                <li>Staff training on data protection</li>
                <li>Privacy by design in our processes</li>
                <li>Regular review of data handling practices</li>
                <li>Incident response procedures</li>
              </ul>

              <p>
                While we use industry-standard security measures, no system is
                100% secure. We continuously work to protect your data and will
                notify you of any significant security incidents as required by
                law.
              </p>
            </PolicySection>

            {/* Section 7 */}
            <PolicySection title="7. Your Rights Under Indian Law">
              <p>
                Under the Digital Personal Data Protection (DPDP) Act and other
                applicable Indian laws, you have the right to:
              </p>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Access & Information
              </h4>
              <ul>
                <li>Know what personal data we hold about you</li>
                <li>Understand how we use and share your information</li>
                <li>Request copies of your data</li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Correction & Updates
              </h4>
              <ul>
                <li>Correct inaccurate or incomplete information</li>
                <li>Update your contact preferences</li>
                <li>Modify your communication settings</li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Deletion & Erasure
              </h4>
              <ul>
                <li>Request deletion of your personal data</li>
                <li>Have your information removed from marketing lists</li>
                <li>Exercise your &quot;right to be forgotten&quot;</li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Consent Management
              </h4>
              <ul>
                <li>Withdraw consent for data processing</li>
                <li>Opt out of marketing communications</li>
                <li>Change cookie preferences anytime</li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Data Portability
              </h4>
              <ul>
                <li>Request your data in a commonly used format</li>
                <li>Transfer your information to another service provider</li>
              </ul>

              <p>
                <strong>How to Exercise Your Rights:</strong> Contact us at{" "}
                <a
                  href="mailto:hello@procedure.tech"
                  className="text-accent-light hover:underline"
                >
                  hello@procedure.tech
                </a>
                . We&apos;ll respond within 30 days and may need to verify your
                identity for security purposes.
              </p>
            </PolicySection>

            {/* Section 8 */}
            <PolicySection title="8. International Data Transfers">
              <p>
                Some of our service providers may be located outside India. When
                we transfer your data internationally:
              </p>
              <ul>
                <li>
                  We ensure adequate protection through appropriate safeguards
                </li>
                <li>
                  We use providers that comply with international privacy
                  standards
                </li>
                <li>
                  We implement standard contractual clauses where applicable
                </li>
                <li>
                  We maintain the same level of protection as required under
                  Indian law
                </li>
              </ul>
              <p>
                Countries where your data might be processed: United States,
                European Union, Singapore (all with adequate protection
                measures).
              </p>
            </PolicySection>

            {/* Section 9 */}
            <PolicySection title="9. Third-Party Links & Services">
              <p>
                Our website may contain links to external websites, social media
                platforms, or third-party services. We&apos;re not responsible
                for the privacy practices of these external sites.
              </p>

              <p>
                <strong>When you click external links:</strong>
              </p>
              <ul>
                <li>
                  You&apos;ll be subject to that site&apos;s privacy policy
                </li>
                <li>We recommend reading their privacy practices</li>
                <li>Your interactions are governed by their terms</li>
              </ul>

              <p>
                <strong>Third-party integrations on our site:</strong>
              </p>
              <ul>
                <li>Social media buttons and embedded content</li>
                <li>Analytics tools and tracking scripts</li>
                <li>Customer support chat widgets</li>
              </ul>

              <p>
                We choose partners carefully but encourage you to review their
                privacy policies independently.
              </p>
            </PolicySection>

            {/* Section 10 */}
            <PolicySection title="10. Policy Updates">
              <p>We may update this Privacy Policy to reflect:</p>
              <ul>
                <li>Changes in our practices or services</li>
                <li>New legal requirements</li>
                <li>Technology updates</li>
                <li>User feedback and improvements</li>
              </ul>

              <p>
                <strong>How we&apos;ll notify you:</strong>
              </p>
              <ul>
                <li>Email notification to registered users</li>
                <li>Notice on our website homepage</li>
                <li>Updates highlighted in the policy text</li>
              </ul>

              <p>
                <strong>Your continued use</strong> of our services after
                updates constitutes acceptance of the revised policy. We
                encourage you to review this policy periodically.
              </p>
            </PolicySection>

            {/* Section 11 */}
            <PolicySection title="11. Special Circumstances">
              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Children&apos;s Privacy
              </h4>
              <p>
                Our services are not directed at children under 18. We
                don&apos;t knowingly collect personal information from minors
                without parental consent. If we discover we&apos;ve collected
                such information, we&apos;ll delete it promptly.
              </p>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Sensitive Data
              </h4>
              <p>
                We generally don&apos;t collect sensitive personal data (health,
                religion, political views). If such information is shared in
                project communications, it&apos;s handled with extra care and
                limited access.
              </p>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Data Breaches
              </h4>
              <p>In the unlikely event of a data breach, we&apos;ll:</p>
              <ul>
                <li>Assess and contain the incident immediately</li>
                <li>Notify relevant authorities within 72 hours</li>
                <li>Inform affected individuals without undue delay</li>
                <li>Provide guidance on protective measures</li>
              </ul>
            </PolicySection>

            {/* Section 12 */}
            <PolicySection title="12. Contact Information">
              <p>
                <strong>Email:</strong> hello@procedure.tech
              </p>
              <p>
                <strong>Address:</strong> San Francisco, CA
              </p>

              <p>
                <strong>For general privacy questions:</strong>
              </p>
              <ul>
                <li>
                  Use our contact form at{" "}
                  <Link
                    href="/contact-us"
                    className="text-accent-light hover:underline"
                  >
                    https://procedure.tech/contact
                  </Link>
                </li>
                <li>
                  Email us at{" "}
                  <a
                    href="mailto:hello@procedure.tech"
                    className="text-accent-light hover:underline"
                  >
                    hello@procedure.tech
                  </a>
                </li>
                <li>Call our main line and ask for the privacy team</li>
              </ul>

              <p>
                <strong>For urgent security concerns:</strong> Email{" "}
                <a
                  href="mailto:hello@procedure.tech"
                  className="text-accent-light hover:underline"
                >
                  hello@procedure.tech
                </a>
              </p>
            </PolicySection>

            {/* Final Section */}
            <PolicySection title="Your Privacy Matters to Us">
              <p>
                At Procedure, we&apos;re committed to earning and maintaining
                your trust through transparent, ethical data practices. This
                policy reflects our dedication to protecting your privacy while
                delivering exceptional service.
              </p>
              <p>
                If you have questions, concerns, or suggestions about our
                privacy practices, we want to hear from you. Your feedback helps
                us improve and ensures we&apos;re meeting your expectations.
              </p>
              <p>Thank you for trusting us with your information.</p>
              <p className="italic text-text-muted">
                This Privacy Policy is governed by Indian law and any disputes
                will be subject to the jurisdiction of Indian courts.
              </p>
            </PolicySection>
          </m.div>
        </div>
      </section>
    </main>
    </LazyMotion>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-text-primary mb-4 pb-2 border-b border-border">
        {title}
      </h2>
      <div className="text-text-secondary leading-relaxed space-y-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&_li]:text-text-secondary [&_strong]:text-text-primary [&_p]:text-text-secondary">
        {children}
      </div>
    </div>
  );
}
