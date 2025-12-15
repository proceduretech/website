"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsConditionsPage() {
  return (
    <main className="relative min-h-screen bg-base overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pb-20 bg-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-bold text-text-primary leading-[1.1] tracking-tight mb-4"
            >
              Terms & Conditions
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center gap-2 text-text-secondary"
            >
              <span className="font-medium">Last Updated:</span>
              <span>Aug 12, 2025</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="relative pb-24 sm:pb-36 bg-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {/* Summary Section */}
            <TermsSection title="What You're Agreeing To">
              <p>
                Welcome to Procedure! We&apos;ve tried to make these terms as
                straightforward as possible. Here&apos;s the gist:
              </p>
              <ul>
                <li>By using our website, you agree to follow these rules</li>
                <li>
                  You can explore our content and use our features responsibly
                </li>
                <li>
                  We protect your data and respect your rights under Indian law
                </li>
                <li>
                  We own our content, but you keep ownership of what you create
                </li>
                <li>We&apos;ll let you know if we make changes to these terms</li>
                <li>
                  We&apos;re here to help, but we can&apos;t be liable for
                  everything
                </li>
              </ul>
              <p>Now, let&apos;s dive into the details...</p>
            </TermsSection>

            {/* Section 1 */}
            <TermsSection title="1. Agreement Upon Site Usage">
              <p>
                By accessing, browsing, or using the Procedure website and any of
                our services, you&apos;re agreeing to be bound by these Terms &
                Conditions and our Privacy Policy. Think of it as a digital
                handshake—you&apos;re saying &quot;yes&quot; to playing by our
                rules.
              </p>
              <p>
                <strong>
                  If you don&apos;t agree with these terms, that&apos;s totally
                  fine—just don&apos;t use our site.
                </strong>{" "}
                We&apos;d appreciate a quick email to{" "}
                <a
                  href="mailto:hello@procedure.tech"
                  className="text-accent-teal-light hover:underline"
                >
                  hello@procedure.tech
                </a>{" "}
                letting us know what concerns you have, so we can try to address
                them.
              </p>
              <p>
                These terms apply to everyone who visits or uses our website,
                whether you&apos;re just browsing, signing up for an account, or
                using our paid services.
              </p>
            </TermsSection>

            {/* Section 2 */}
            <TermsSection title="2. Scope of Allowed Usage & Prohibited Activities">
              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                What You Can Do
              </h4>
              <ul>
                <li>
                  <strong>Explore freely:</strong> Browse our content and read our
                  articles
                </li>
                <li>
                  <strong>Create and share:</strong> Upload content, participate in
                  discussions, and engage with our community
                </li>
                <li>
                  <strong>Learn and grow:</strong> Use our resources for
                  educational and professional development
                </li>
                <li>
                  <strong>Provide feedback:</strong> Share suggestions, report
                  bugs, or tell us how we can improve
                </li>
                <li>
                  <strong>Use our services:</strong> Access both free and paid
                  features according to your account type
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                What You CANNOT Do
              </h4>
              <p>
                We want to keep Procedure safe and useful for everyone, so please
                don&apos;t:
              </p>

              <p>
                <strong>Legal and Ethical Violations:</strong>
              </p>
              <ul>
                <li>
                  Break any applicable laws or regulations in your jurisdiction
                </li>
                <li>
                  Use our services for any illegal, fraudulent, or harmful
                  activities
                </li>
                <li>
                  Violate the rights of others or engage in discriminatory
                  practices
                </li>
                <li>Misrepresent your identity or create false accounts</li>
              </ul>

              <p>
                <strong>Content and Communication Violations:</strong>
              </p>
              <ul>
                <li>
                  Post content that&apos;s abusive, threatening, defamatory, or
                  violates someone&apos;s privacy
                </li>
                <li>
                  Upload content that violates copyrights, trademarks, or other
                  intellectual property rights
                </li>
                <li>
                  Send unsolicited communications, spam, or promotional materials
                </li>
                <li>
                  Share inappropriate, offensive, or irrelevant content on our
                  platforms
                </li>
              </ul>

              <p>
                <strong>Technical and Security Violations:</strong>
              </p>
              <ul>
                <li>
                  Attempt to hack, disrupt, or interfere with our website&apos;s
                  functionality
                </li>
                <li>
                  Use any automated tools, robots, spiders, or scrapers to access
                  our services without permission
                </li>
                <li>Introduce viruses, malware, or other harmful code</li>
                <li>
                  Attempt to gain unauthorized access to our systems, servers, or
                  databases
                </li>
                <li>
                  Launch denial-of-service attacks or similar disruptive activities
                </li>
                <li>
                  Use any device, software, or routine that interferes with the
                  proper functioning of our services
                </li>
              </ul>

              <p>
                <strong>Business and Professional Violations:</strong>
              </p>
              <ul>
                <li>
                  Damage or falsely represent Procedure&apos;s reputation or
                  ratings
                </li>
                <li>
                  Use our contact information or services for unauthorized
                  solicitation
                </li>
                <li>
                  Reverse engineer, modify, or create derivative works from our
                  proprietary systems
                </li>
                <li>
                  Compete directly with us using information obtained through our
                  services
                </li>
              </ul>

              <p>
                <strong>Age Restriction:</strong>
              </p>
              <ul>
                <li>
                  If you&apos;re under 18, you&apos;ll need a parent or
                  guardian&apos;s permission to use our services
                </li>
              </ul>

              <p>
                <strong>
                  Violation of these terms may result in immediate suspension or
                  termination of your access to our services.
                </strong>
              </p>
            </TermsSection>

            {/* Section 3 */}
            <TermsSection title="3. Promotions & Special Offers">
              <p>
                From time to time, we may run special promotions, discounts, or
                contests. Here&apos;s how they work:
              </p>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Eligibility & Rules
              </h4>
              <ul>
                <li>
                  Promotions are available to users who meet specific criteria
                  (we&apos;ll always tell you what these are)
                </li>
                <li>
                  Each promotion has its own set of rules, duration, and terms
                </li>
                <li>
                  You can&apos;t combine offers unless we specifically say you can
                </li>
                <li>
                  Promotions are subject to availability and may be limited in
                  quantity
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Changes & Cancellations
              </h4>
              <p>
                We reserve the right to modify, suspend, or cancel any promotion at
                any time. If we do, we&apos;ll:
              </p>
              <ul>
                <li>Post an update on our website</li>
                <li>
                  Send an email notification if you&apos;re already participating
                </li>
                <li>Honor any commitments already made to participants</li>
              </ul>
            </TermsSection>

            {/* Section 4 */}
            <TermsSection title="4. Intellectual Property & User-Generated Content">
              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Our Content
              </h4>
              <p>
                All the content we create—including text, images, videos, logos,
                and software—belongs to Procedure and is protected by Indian and
                international intellectual property laws. You can use our content
                for personal, non-commercial purposes, but please don&apos;t copy,
                redistribute, or create derivative works without our permission.
              </p>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Your Content
              </h4>
              <p>When you upload, post, or share content on Procedure:</p>
              <ul>
                <li>
                  <strong>You keep ownership:</strong> Your content remains yours
                </li>
                <li>
                  <strong>You grant us license:</strong> We can display, store, and
                  share your content as part of our service
                </li>
                <li>
                  <strong>You&apos;re responsible:</strong> Make sure you have the
                  right to share what you post
                </li>
                <li>
                  <strong>We can moderate:</strong> We may review, edit, or remove
                  content that violates our guidelines
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Content Standards
              </h4>
              <p>All user-generated content must:</p>
              <ul>
                <li>Be original or properly attributed</li>
                <li>Respect others&apos; intellectual property rights</li>
                <li>Comply with applicable laws and regulations</li>
                <li>Align with our community guidelines</li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Content Removal
              </h4>
              <p>We can remove content that:</p>
              <ul>
                <li>Violates these terms or our community guidelines</li>
                <li>Infringes on intellectual property rights</li>
                <li>
                  Is reported by other users and found to be inappropriate
                </li>
                <li>Poses legal or security risks</li>
              </ul>
            </TermsSection>

            {/* Section 5 */}
            <TermsSection title="5. Modifications to Terms">
              <p>
                We may need to update these terms occasionally to reflect changes
                in our services, legal requirements, or business practices.
              </p>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                How We&apos;ll Notify You
              </h4>
              <p>When we make changes, we&apos;ll:</p>
              <ul>
                <li>
                  Update the &quot;Last Modified&quot; date at the top of this page
                </li>
                <li>
                  Send an email notification to registered users for significant
                  changes
                </li>
                <li>
                  Post a banner or notification on our website highlighting
                  important updates
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Your Continued Use
              </h4>
              <p>
                By continuing to use Procedure after we&apos;ve posted updated
                terms, you&apos;re agreeing to the new version. If you don&apos;t
                agree with the changes, you can stop using our service or contact
                us to discuss your concerns.
              </p>
            </TermsSection>

            {/* Section 6 */}
            <TermsSection title="6. Limitations of Liability & Disclaimers">
              <p>
                We work hard to provide a great service, but like any technology
                platform, we need to set some boundaries on our liability.
              </p>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Service Availability
              </h4>
              <p>
                Procedure is provided &quot;as is&quot; and &quot;as
                available.&quot; While we strive for 99.9% uptime, we can&apos;t
                guarantee our service will always be available or error-free. We
                may need to perform maintenance, updates, or deal with unexpected
                technical issues.
              </p>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                No Warranties
              </h4>
              <p>We don&apos;t make warranties about:</p>
              <ul>
                <li>The accuracy or completeness of content on our site</li>
                <li>Uninterrupted or error-free service</li>
                <li>Results you may achieve using our platform</li>
                <li>Third-party content or services linked from our site</li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Limitation of Liability
              </h4>
              <p>
                Under Indian law, our liability to you is limited to the amount
                you&apos;ve paid us in the 12 months before the claim arose.
                We&apos;re not liable for:
              </p>
              <ul>
                <li>Indirect, consequential, or punitive damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>
                  Damages caused by third parties or circumstances beyond our
                  control
                </li>
                <li>Your use of third-party services or content</li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Third-Party Links and Services
              </h4>
              <p>
                Our website may contain links to other websites or integrate with
                third-party services. We don&apos;t control these external sites
                and aren&apos;t responsible for their content, privacy practices,
                or terms of service. Use them at your own discretion.
              </p>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Indemnification
              </h4>
              <p>
                You agree to protect us from any legal claims or damages that arise
                from:
              </p>
              <ul>
                <li>Your use of our service</li>
                <li>Content you post or share</li>
                <li>Your violation of these terms</li>
                <li>Your violation of any third party&apos;s rights</li>
              </ul>
            </TermsSection>

            {/* Section 7 */}
            <TermsSection title="7. Analytics & Third-Party Services">
              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Analytics and Monitoring
              </h4>
              <p>
                We may use third-party service providers to monitor and analyze the
                usage of our services, including:
              </p>
              <ul>
                <li>Website analytics (Google Analytics, similar tools)</li>
                <li>
                  Performance monitoring for our applications and services
                </li>
                <li>User behavior analysis to improve our service delivery</li>
                <li>Security monitoring and threat detection</li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Third-Party Integration
              </h4>
              <p>
                In the course of providing our services, we may integrate with or
                utilize:
              </p>
              <ul>
                <li>Cloud service providers (AWS, Google Cloud, Azure)</li>
                <li>Development and collaboration tools</li>
                <li>Monitoring and logging platforms</li>
                <li>Communication and project management systems</li>
              </ul>
              <p>
                All third-party integrations are subject to their respective terms
                of service and privacy policies, which we encourage you to review.
              </p>
            </TermsSection>

            {/* Section 8 */}
            <TermsSection title="8. Error Reporting & Feedback">
              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Providing Feedback
              </h4>
              <p>You may provide us with information and feedback through:</p>
              <ul>
                <li>
                  Direct communication at{" "}
                  <a
                    href="mailto:hello@procedure.tech"
                    className="text-accent-teal-light hover:underline"
                  >
                    hello@procedure.tech
                  </a>
                </li>
                <li>Support channels and ticketing systems</li>
                <li>Project collaboration platforms</li>
                <li>Third-party review and feedback tools</li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Feedback Terms
              </h4>
              <p>
                By providing feedback, suggestions, ideas, or error reports
                (&quot;Feedback&quot;), you acknowledge and agree that:
              </p>
              <ul>
                <li>
                  You will not retain any intellectual property rights to the
                  Feedback
                </li>
                <li>
                  We may have independently developed similar ideas or solutions
                </li>
                <li>
                  Your Feedback does not contain confidential or proprietary
                  information from you or third parties
                </li>
                <li>We are not obligated to keep your Feedback confidential</li>
                <li>
                  We may use, modify, and implement your Feedback without
                  compensation or attribution
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Error Reporting
              </h4>
              <p>
                If you encounter technical issues, security vulnerabilities, or
                service problems:
              </p>
              <ul>
                <li>
                  Report them promptly to{" "}
                  <a
                    href="mailto:hello@procedure.tech"
                    className="text-accent-teal-light hover:underline"
                  >
                    hello@procedure.tech
                  </a>
                </li>
                <li>
                  Provide detailed information to help us reproduce and resolve
                  issues
                </li>
                <li>
                  Do not exploit any discovered vulnerabilities for malicious
                  purposes
                </li>
                <li>
                  Allow us reasonable time to address reported issues before public
                  disclosure
                </li>
              </ul>
            </TermsSection>

            {/* Section 9 */}
            <TermsSection title="9. Data Protection & Privacy (Indian Law Compliance)">
              <p>We take your privacy seriously and comply with:</p>
              <ul>
                <li>
                  The Information Technology Act, 2000 and its amendments
                </li>
                <li>The Personal Data Protection Bill (when enacted)</li>
                <li>Consumer Protection Act, 2019</li>
                <li>Other applicable Indian data protection regulations</li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Your Rights
              </h4>
              <p>As an Indian user, you have the right to:</p>
              <ul>
                <li>Know what personal data we collect and how we use it</li>
                <li>Access and update your personal information</li>
                <li>
                  Request deletion of your data (subject to legal requirements)
                </li>
                <li>Withdraw consent for non-essential data processing</li>
                <li>File complaints with appropriate authorities if needed</li>
              </ul>
              <p>
                For complete details, please read our{" "}
                <Link
                  href="/privacy"
                  className="text-accent-teal-light hover:underline"
                >
                  Privacy Policy
                </Link>
                , which is part of these terms.
              </p>
            </TermsSection>

            {/* Section 10 */}
            <TermsSection title="10. Termination">
              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                By Procedure
              </h4>
              <p>
                We may suspend or end your account or access—without prior
                notice—if we believe you&apos;ve:
              </p>
              <ul>
                <li>Breached these Terms or applicable laws</li>
                <li>Engaged in fraudulent, abusive, or harmful activity</li>
                <li>Failed to pay for premium services</li>
                <li>Created security risks or misused our services/IP</li>
                <li>
                  Acted in a way that could harm Procedure or our users
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                By You
              </h4>
              <p>You can end your relationship with us anytime by:</p>
              <ul>
                <li>Stopping use of our services</li>
                <li>
                  Contacting{" "}
                  <a
                    href="mailto:hello@procedure.tech"
                    className="text-accent-teal-light hover:underline"
                  >
                    hello@procedure.tech
                  </a>{" "}
                  to close your account
                </li>
                <li>Cancelling services as per your specific agreement</li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Effect of Termination
              </h4>
              <ul>
                <li>
                  Your access and rights to use our services end immediately
                </li>
                <li>Premium features and portals are revoked</li>
                <li>Unpaid invoices remain due</li>
                <li>Certain information may be retained as required by law</li>
                <li>Active contracts follow their own termination terms</li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Survival
              </h4>
              <p>
                Sections on intellectual property, payments, disclaimers, liability
                limits, indemnity, governing law, and confidentiality continue to
                apply even after termination. Separate service agreements remain
                subject to their own clauses.
              </p>
            </TermsSection>

            {/* Section 11 */}
            <TermsSection title="11. Governing Law & Dispute Resolution">
              <p>
                These terms are governed by Indian law, and any disputes will be
                resolved in Indian courts.
              </p>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Jurisdiction
              </h4>
              <p>
                Any legal disputes arising from your use of Procedure will be
                subject to the exclusive jurisdiction of the courts in Mumbai,
                India.
              </p>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Dispute Resolution Process
              </h4>
              <p>Before going to court, let&apos;s try to work things out:</p>
              <ul>
                <li>
                  <strong>Contact us first:</strong> Email us at{" "}
                  <a
                    href="mailto:hello@procedure.tech"
                    className="text-accent-teal-light hover:underline"
                  >
                    hello@procedure.tech
                  </a>{" "}
                  with details of your concern
                </li>
                <li>
                  <strong>Good faith discussion:</strong> We&apos;ll try to resolve
                  the issue within 30 days
                </li>
                <li>
                  <strong>Mediation:</strong> If needed, we can try mediation
                  through a neutral third party
                </li>
              </ul>
              <p>
                <strong>Legal action:</strong> As a last resort, disputes will be
                resolved in Indian courts
              </p>
            </TermsSection>

            {/* Section 12 */}
            <TermsSection title="12. Miscellaneous">
              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Entire Agreement
              </h4>
              <p>
                These terms, along with our{" "}
                <Link
                  href="/privacy"
                  className="text-accent-teal-light hover:underline"
                >
                  Privacy Policy
                </Link>
                , constitute the complete agreement between you and Procedure.
              </p>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Severability
              </h4>
              <p>
                If any part of these terms is found to be invalid or unenforceable,
                the rest will remain in full effect.
              </p>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                No Waiver
              </h4>
              <p>
                Our failure to enforce any provision doesn&apos;t mean we&apos;ve
                waived our right to enforce it later.
              </p>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Contact Information
              </h4>
              <p>Questions about these terms? We&apos;re here to help:</p>
              <ul>
                <li>
                  <strong>Email:</strong> hello@procedure.tech
                </li>
                <li>
                  <strong>Address:</strong> San Francisco, CA
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Language
              </h4>
              <p>
                These terms are written in English. If translated into other
                languages, the English version will prevail in case of any
                conflicts.
              </p>

              <p className="mt-8">
                <strong>
                  By using Procedure, you acknowledge that you&apos;ve read,
                  understood, and agree to be bound by these Terms & Conditions.
                </strong>
              </p>

              <p>Thank you for being part of the Procedure community!</p>
            </TermsSection>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function TermsSection({
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
