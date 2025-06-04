
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center text-gray-600 hover:text-sply-navy transition-colors font-noto-serif-ethiopic"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 
            className="text-2xl md:text-3xl font-bold text-gray-800"
            style={{ fontFamily: 'ADAM, sans-serif' }}
          >
            SPLYFI
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 font-montserrat">
            Privacy Policy
          </h1>
          
          <p className="text-gray-600 mb-8 font-noto-serif-ethiopic">
            <strong>Effective Date:</strong> January 1, 2024<br />
            <strong>Last Updated:</strong> January 1, 2024
          </p>

          <div className="space-y-8 font-noto-serif-ethiopic text-gray-700 leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
                1. Introduction
              </h2>
              <p>
                SPLYFI ("we," "our," or "us") is committed to protecting your privacy and maintaining the confidentiality of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with us as a limited partner or potential investor.
              </p>
              <p className="mt-4">
                As an investment management firm, we are subject to various federal and state regulations regarding the collection and use of personal information, including but not limited to the Investment Advisers Act of 1940 and applicable state privacy laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
                2. Information We Collect
              </h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3 font-montserrat">
                Personal Information
              </h3>
              <p>We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Contact information (name, email address, phone number, mailing address)</li>
                <li>Financial information (income, net worth, investment experience, risk tolerance)</li>
                <li>Professional information (employment history, business affiliations)</li>
                <li>Investment preferences and objectives</li>
                <li>Tax identification numbers and other regulatory identifiers</li>
                <li>Bank account and payment information for qualified investors</li>
                <li>Documentation required for investor qualification and compliance</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3 mt-6 font-montserrat">
                Technical Information
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Website usage patterns and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
                3. How We Use Your Information
              </h2>
              <p>We use your personal information for the following purposes:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>To evaluate your eligibility as a qualified investor</li>
                <li>To provide investment management services and portfolio updates</li>
                <li>To comply with federal and state securities regulations</li>
                <li>To process investments, withdrawals, and distributions</li>
                <li>To communicate important fund information and regulatory notices</li>
                <li>To maintain accurate investor records and reporting</li>
                <li>To prevent fraud and ensure the security of our systems</li>
                <li>To improve our website and services</li>
                <li>To respond to your inquiries and provide customer support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
                4. Information Sharing and Disclosure
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who assist us in providing services (e.g., custodians, administrators, auditors, legal counsel)</li>
                <li><strong>Regulatory Compliance:</strong> Government agencies and regulatory bodies as required by law</li>
                <li><strong>Legal Requirements:</strong> When disclosure is necessary to comply with legal obligations or protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales (with appropriate confidentiality protections)</li>
                <li><strong>Consent:</strong> When you have provided explicit consent for specific disclosures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Access controls and authentication procedures</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection and confidentiality</li>
                <li>Secure document storage and disposal procedures</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
                6. Data Retention
              </h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy and to comply with our legal and regulatory obligations. Investment-related records are typically retained for at least seven years after the termination of the investment relationship, or as otherwise required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
                7. Your Rights and Choices
              </h2>
              <p>Depending on your jurisdiction, you may have certain rights regarding your personal information:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate or incomplete information</li>
                <li>Deletion of personal information (subject to legal and regulatory requirements)</li>
                <li>Objection to certain processing activities</li>
                <li>Data portability (where technically feasible)</li>
              </ul>
              <p className="mt-4">
                To exercise these rights or for questions about your personal information, please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
                8. Cookies and Tracking Technologies
              </h2>
              <p>
                Our website uses cookies and similar technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences, though disabling certain cookies may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
                9. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. This Privacy Policy does not apply to such third-party sites, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party websites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
                10. Children's Privacy
              </h2>
              <p>
                Our services are not directed to individuals under the age of 18, and we do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete such information promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
                11. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by posting the updated policy on our website and updating the "Last Updated" date above. For current investors, we may also provide notice through our regular communications channels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
                12. Contact Information
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p><strong>SPLYFI</strong></p>
                <p>Email: <a href="mailto:privacy@splyfi.com" className="text-sply-navy hover:underline">privacy@splyfi.com</a></p>
                <p>General Inquiries: <a href="mailto:info@splyfi.com" className="text-sply-navy hover:underline">info@splyfi.com</a></p>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
                Investment Risk Disclosure
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>Important Notice:</strong> All investments involve risk, including the potential loss of principal. Past performance does not guarantee future results. SPLYFI securities are offered to qualified investors only and are subject to various risks including market risk, liquidity risk, and the risk of total loss. This Privacy Policy does not constitute investment advice or an offer to sell securities. Please consult with your financial advisor and carefully review all offering documents before making any investment decisions.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
