
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
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
        <div className="prose prose-sm max-w-none">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-montserrat">
            Terms of Service
          </h1>
          
          <p className="text-gray-600 mb-6 font-noto-serif-ethiopic text-sm">
            <strong>Effective Date:</strong> January 1, 2024<br />
            <strong>Last Updated:</strong> January 1, 2024
          </p>

          <div className="space-y-6 font-noto-serif-ethiopic text-gray-700 leading-relaxed text-sm">
            
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the SPLYFI website, services, or investment products ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our Services. These Terms constitute a legally binding agreement between you and SPLYFI.
              </p>
              <p className="mt-3">
                SPLYFI operates as an investment management firm and is subject to federal and state securities regulations. Your use of our Services may be subject to additional terms and conditions as set forth in specific investment agreements, offering memoranda, and other disclosure documents.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">
                2. Investment Services and Eligibility
              </h2>
              
              <h3 className="text-base font-medium text-gray-900 mb-2 font-montserrat">
                Qualified Investors Only
              </h3>
              <p>
                SPLYFI's investment products are offered exclusively to "qualified investors" as defined under applicable securities laws, including but not limited to accredited investors under Regulation D of the Securities Act of 1933. By expressing interest in our investment opportunities, you represent and warrant that you meet the applicable investor qualification requirements.
              </p>

              <h3 className="text-base font-medium text-gray-900 mb-2 mt-4 font-montserrat">
                Investment Minimums and Terms
              </h3>
              <p>
                Investment minimums, terms, fees, and other conditions are specified in the relevant offering documents for each investment product. All investments are subject to acceptance by SPLYFI in its sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">
                3. Investment Risks and Disclaimers
              </h2>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-3 mb-4">
                <p className="text-red-800 font-medium text-sm">
                  <strong>IMPORTANT RISK DISCLOSURE:</strong> All investments involve substantial risk, including the potential loss of your entire investment. Past performance does not guarantee future results.
                </p>
              </div>

              <h3 className="text-base font-medium text-gray-900 mb-2 font-montserrat">
                General Investment Risks
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Market risk and volatility in trade finance and manufacturing sectors</li>
                <li>Credit risk related to borrowers and counterparties</li>
                <li>Liquidity risk - investments may not be readily marketable</li>
                <li>Interest rate and foreign exchange risk</li>
                <li>Regulatory and political risk</li>
                <li>Operational risk and potential conflicts of interest</li>
                <li>Limited diversification in specialized investment strategies</li>
              </ul>

              <h3 className="text-base font-medium text-gray-900 mb-2 mt-4 font-montserrat">
                No Investment Advice
              </h3>
              <p>
                Information provided through our Services is for informational purposes only and does not constitute investment advice, recommendations, or offers to sell securities. You should consult with qualified financial, tax, and legal advisors before making any investment decisions.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">
                4. User Responsibilities and Representations
              </h2>
              <p>By using our Services, you represent and warrant that:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                <li>You have the legal capacity to enter into these Terms</li>
                <li>All information you provide is accurate and complete</li>
                <li>You meet applicable investor qualification requirements</li>
                <li>You will comply with all applicable laws and regulations</li>
                <li>You understand the risks associated with investments</li>
                <li>You will not use our Services for any unlawful purposes</li>
                <li>You will maintain the confidentiality of any non-public information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">
                5. Intellectual Property Rights
              </h2>
              <p>
                All content, trademarks, service marks, trade names, logos, and intellectual property displayed on our website and Services are the property of SPLYFI or its licensors. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">
                6. Privacy and Data Protection
              </h2>
              <p>
                Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. We are committed to protecting your personal information in accordance with applicable privacy laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">
                7. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, SPLYFI and its affiliates, directors, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from your use of our Services.
              </p>
              <p className="mt-3">
                Our total liability to you for any claims arising from these Terms or your use of our Services shall not exceed the amount of fees you have paid to SPLYFI in the twelve months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">
                8. Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless SPLYFI and its affiliates from and against any claims, liabilities, damages, losses, costs, or expenses arising from your use of our Services, violation of these Terms, or infringement of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">
                9. Regulatory Compliance
              </h2>
              <p>
                SPLYFI is subject to various federal and state regulations, including but not limited to the Investment Advisers Act of 1940, the Securities Act of 1933, and the Securities Exchange Act of 1934. Our investment activities are conducted in accordance with applicable securities laws and regulations.
              </p>
              <p className="mt-3">
                Certain information regarding our regulatory status, disciplinary history, and business practices is available through the Investment Adviser Public Disclosure (IAPD) database maintained by the SEC.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">
                10. Dispute Resolution
              </h2>
              
              <h3 className="text-base font-medium text-gray-900 mb-2 font-montserrat">
                Arbitration Agreement
              </h3>
              <p>
                Any disputes arising from these Terms or your use of our Services shall be resolved through binding arbitration in accordance with the Commercial Arbitration Rules of the American Arbitration Association. The arbitration shall be conducted in a location mutually agreed upon by the parties.
              </p>

              <h3 className="text-base font-medium text-gray-900 mb-2 mt-4 font-montserrat">
                Governing Law
              </h3>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the state where SPLYFI's principal place of business is located, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">
                11. Termination
              </h2>
              <p>
                We may terminate or suspend your access to our Services at any time, with or without cause, with or without notice. Upon termination, your right to use our Services will cease immediately. Provisions that by their nature should survive termination shall remain in effect.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">
                12. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. Material changes will be communicated to users through our website or other appropriate means. Your continued use of our Services after such changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">
                13. Severability
              </h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions shall continue in full force and effect. The unenforceable provision shall be modified to the minimum extent necessary to make it enforceable.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">
                14. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                <p><strong>SPLYFI</strong></p>
                <p>Email: <a href="mailto:info@splyfi.com" className="text-sply-navy hover:underline">info@splyfi.com</a></p>
                <p>Legal Inquiries: <a href="mailto:info@splyfi.com" className="text-sply-navy hover:underline">info@splyfi.com</a></p>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">
                Additional Investment Disclosures
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                <p className="text-xs text-gray-700 leading-relaxed">
                  <strong>Securities Disclaimer:</strong> Securities offered through SPLYFI are not deposits or obligations of any bank, are not guaranteed by any bank, are not insured by the FDIC or any other agency, and involve investment risks, including possible loss of principal. Investment products are subject to investment risk, including loss of principal amount invested. Past performance is not indicative of future results.
                </p>
                <p className="text-xs text-gray-700 leading-relaxed mt-2">
                  <strong>Forward-Looking Statements:</strong> This website may contain forward-looking statements based on current expectations. Actual results may differ materially from those projected. Such statements involve risks and uncertainties that could cause actual results to differ from projected results.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
