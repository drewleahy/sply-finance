
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const InvestmentDisclosures = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-noto-serif-ethiopic">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center bg-white border-b">
        <h1 
          className="text-2xl md:text-3xl font-bold text-gray-800"
          style={{ fontFamily: 'ADAM, sans-serif' }}
        >
          SPLYFI
        </h1>
        <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-montserrat">
          Investment Disclosures
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Important Risk Warning */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <h2 className="text-xl font-semibold text-yellow-800 mb-3 font-montserrat">
              Important Risk Warning
            </h2>
            <p className="text-yellow-700 leading-relaxed">
              Investments in SPLYFI securities involve substantial risk and are suitable only for sophisticated investors who can afford to lose their entire investment. Past performance is not indicative of future results.
            </p>
          </div>

          {/* General Investment Risks */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
              General Investment Risks
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                <strong>Loss of Capital:</strong> You may lose some or all of your investment. There is no guarantee of return of principal or any specific rate of return.
              </p>
              <p className="leading-relaxed">
                <strong>Illiquidity:</strong> Investments in SPLYFI are illiquid. There is no secondary market for these securities, and you may not be able to sell or transfer your investment when desired.
              </p>
              <p className="leading-relaxed">
                <strong>No Guaranteed Returns:</strong> Target returns are projections only and are not guaranteed. Actual returns may be materially different from projected returns.
              </p>
              <p className="leading-relaxed">
                <strong>Concentration Risk:</strong> SPLYFI focuses on trade finance for U.S. manufacturing, which may result in concentration in specific industries, geographies, or economic sectors.
              </p>
            </div>
          </section>

          {/* Credit and Operational Risks */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
              Credit and Operational Risks
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                <strong>Credit Risk:</strong> Borrowers may default on their obligations, resulting in loss of principal and interest.
              </p>
              <p className="leading-relaxed">
                <strong>Counterparty Risk:</strong> The financial condition of counterparties may deteriorate, affecting their ability to fulfill contractual obligations.
              </p>
              <p className="leading-relaxed">
                <strong>Operational Risk:</strong> Losses may result from inadequate or failed internal processes, systems, or external events.
              </p>
            </div>
          </section>

          {/* Market and Economic Risks */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
              Market and Economic Risks
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                <strong>Economic Conditions:</strong> Changes in economic conditions, including recession, inflation, or deflation, may adversely affect investment performance.
              </p>
              <p className="leading-relaxed">
                <strong>Interest Rate Risk:</strong> Changes in interest rates may affect the value of investments and the cost of funding.
              </p>
              <p className="leading-relaxed">
                <strong>Regulatory Risk:</strong> Changes in laws or regulations may materially affect the investment strategy or returns.
              </p>
            </div>
          </section>

          {/* Suitability and Eligibility */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
              Investor Suitability
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                SPLYFI securities are offered only to "accredited investors" as defined under federal securities laws. Investment should only be considered by investors who:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Can afford to lose their entire investment</li>
                <li>Have adequate financial resources and liquidity to bear the risks</li>
                <li>Have sufficient knowledge and experience to evaluate the investment</li>
                <li>Understand the illiquid nature of the investment</li>
              </ul>
            </div>
          </section>

          {/* Forward-Looking Statements */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
              Forward-Looking Statements
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This website contains forward-looking statements that involve risks and uncertainties. Actual results may differ materially from those projected. Forward-looking statements speak only as of the date made and are subject to change without notice.
            </p>
          </section>

          {/* No Investment Advice */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
              No Investment Advice
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The information on this website does not constitute investment advice, and you should consult with your financial advisor, attorney, and accountant before making any investment decision. SPLYFI does not provide tax, legal, or investment advice.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 font-montserrat">
              Questions About These Disclosures?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              For questions regarding these investment disclosures or to obtain additional risk information, please contact us at{" "}
              <a href="mailto:info@splyfi.com" className="text-sply-navy hover:underline">
                info@splyfi.com
              </a>
            </p>
          </section>

          {/* Last Updated */}
          <div className="text-sm text-gray-500 pt-8 border-t border-gray-200">
            Last updated: December 2024
          </div>
        </div>
      </main>
    </div>
  );
};

export default InvestmentDisclosures;
