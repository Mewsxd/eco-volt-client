import React, { useState } from "react";
import faq from "../../assets/faq.jpg";
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "How to create an account?",
      answer:
        "To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.",
    },
    {
      id: 2,
      question: "Have any trust issue?",
      answer:
        "Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.",
    },
    {
      id: 3,
      question: "How can I reset my password?",
      answer:
        "To reset your password, click on 'Forgot Password' at the login page. Enter your registered email address and follow the instructions sent to your inbox.",
    },
    {
      id: 4,
      question: "What is the payment process?",
      answer:
        "Payments are securely processed through our trusted payment gateway. We accept major credit/debit cards and other popular payment methods.",
    },
    {
      id: 5,
      question: "What is Token Name used for?",
      answer:
        "Token Name can be used for EV charging payments, funding green projects, trading carbon credits, and earning rewards.",
    },
    {
      id: 6,
      question: "How do I buy Token Name?",
      answer:
        "Connect your wallet via our website or supported DEXs like Uniswap or Raydium.",
    },
    {
      id: 7,
      question: "Which wallets are supported?",
      answer: "MetaMask (Polygon), Phantom (Solana), Tonkeeper Wallet (TON).",
    },
    {
      id: 8,
      question: "Is it secure?",
      answer: "Yes! Our smart contracts are audited by top-tier firms.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className=" py-14 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
          <div className="mb-2 lg:mb-16 block lg:hidden">
            <h6 className="text-lg text-center font-medium text-cgreen mb-2 lg:text-left">
              FAQs
            </h6>
            <h2 className="text-3xl text-center font-bold text-gray-900 leading-[3.25rem] mb-2 lg:text-left font-robo-mono">
              Looking for answers?
            </h2>
          </div>
          {/* Image Section */}
          {/* <div className="w-full lg:w-1/2">
            <img
              src={faq}
              alt="FAQ Section"
              className="w-full rounded-full object-cover"
            />
          </div> */}

          {/* FAQ Section */}
          <div className="w-full">
            <div className="lg:max-w-3xl mx-auto">
              {/* Section Title */}
              <div className="mb-6 lg:mb-16 hidden lg:block">
                <h6 className="text-lg text-center font-medium text-cgreen mb-2">
                  FAQs
                </h6>
                <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 font-robo-mono">
                  Looking for answers?
                </h2>
              </div>

              {/* Accordion Group */}
              <div>
                {faqs.map((faq, index) => (
                  <div
                    key={faq.id}
                    className={`border-b border-gray-300 py-6 font-inter ${
                      activeIndex === index ? "active" : ""
                    }`}
                  >
                    <button
                      className="flex items-center tet-inter justify-between w-full text-left text-base font-normal leading-8 text-gray-600 transition duration-300 hover:text-cgreen focus:outline-none"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span
                        className={`${
                          activeIndex === index
                            ? "text-cgreen font-medium "
                            : "font-semibold"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <svg
                        className={`w-6 h-6 text-gray-900 transition-transform duration-300 ${
                          activeIndex === index ? "rotate-180 text-cgreen" : ""
                        }`}
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {/* Accordion Content */}
                    {activeIndex === index && (
                      <div className="mt-4 pr-4">
                        <p className="text-base text-gray-500 font-normal">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
