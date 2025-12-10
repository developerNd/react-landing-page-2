import React, { useState } from 'react';

function FAQSection() {
  const faqs = [
    {
      question: "When does the workshop start and what are the timings?",
      answer: "Please refer to the top section of the page.",
      defaultOpen: true
    },
    {
      question: "How will this masterclass help me ?",
      answer: "This workshop will give you a very clear cut understanding of the subconscious mind and how limiting beliefs form in mind. It will also show you a clear cut way to reprogram your subconscious mind with positive and empowering programs.",
      defaultOpen: false
    },
    {
      question: "Why should I learn from you?",
      answer: "The answer is you have a choice not to. If you still decide to join, then you will hear and learn from someone who comes from a very average background and has transformed himself. Last 15 years I have been obsessed with understanding what makes people fail and succeed. I have been studying the factors which affect the subconscious mind and how to reprogram it to make a deeper change in one's life. I believe and operate with a principle of making complex things simple and that's reflected in the work I do.",
      defaultOpen: false
    },
    {
      question: "Will you be sharing recordings?",
      answer: "No, we won't be sharing any recordings. Since, it's a live workshop, it's expected that each participant will attend the workshop live.",
      defaultOpen: false
    },
    {
      question: "When will I receive the bonus?",
      answer: "After the workshop is done, you will receive all the bonuses within 24 hours.",
      defaultOpen: false
    },
    {
      question: "I made the payment, but didn't receive any confirmation email.",
      answer: "Please email to : support@avinashanandsingh.com ( Give us 4 hours to respond back ) My awesome team will get back to you.",
      defaultOpen: false
    },
    {
      question: "Are there other programs you will be offering?",
      answer: "Yes. This workshop itself will give you a lot of value and insights and if you follow what you will learn, you will see changes happening for you. At the end of the session, we will share a deeper and more powerful program we conduct for people who are willing for a bigger changes.",
      defaultOpen: false
    }
  ];

  const [openItems, setOpenItems] = useState(
    faqs.reduce((acc, faq, index) => {
      if (faq.defaultOpen) acc.push(index);
      return acc;
    }, [])
  );

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=DM+Serif+Display:wght@400&family=Playfair+Display:wght@700&display=swap');
        
        .faq-section * {
          box-sizing: border-box;
        }
        
        .faq-icon {
          width: 28px;
          height: 28px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .faq-question {
          font-size: 19px;
          line-height: 24px;
        }
        
        .faq-answer {
          font-size: 19px;
          line-height: 24px;
        }
        
        .faq-header-title {
          font-size: 40px;
          line-height: 50px;
          font-weight: 700;
        }
        
        .faq-question-icon {
          width: 48px;
          height: 48px;
        }
        
        .faq-header-line {
          width: 160px;
          height: 4px;
        }
        
        /* Smooth transition for answer container */
        .faq-answer-wrapper {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }
        
        .faq-answer-wrapper.open {
          grid-template-rows: 1fr;
        }
        
        /* Inner content wrapper for smooth animation */
        .faq-answer-inner {
          overflow: hidden;
        }
        
        /* Content animation - slides from bottom to top when opening */
        .faq-answer-content {
          padding-right: 3rem;
          padding-bottom: 0;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .faq-answer-wrapper.open .faq-answer-content {
          padding-bottom: 1rem;
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Icon smooth rotation and background transition */
        .faq-icon svg {
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .faq-icon.rotating svg {
          transform: rotate(180deg);
        }
        
        @media (max-width: 768px) {
          .faq-icon {
            width: 24px;
            height: 24px;
          }
          
          .faq-icon svg {
            width: 10px;
            height: 10px;
          }
          
          .faq-question {
            font-size: 16px !important;
            line-height: 20px !important;
          }
          
          .faq-answer {
            font-size: 16px !important;
            line-height: 21px !important;
          }
          
          .faq-answer-content {
            padding-right: 1rem;
          }
          
          /* Smaller header for mobile */
          .faq-header-title {
            font-size: 28px !important;
            line-height: 36px !important;
          }
          
          .faq-question-icon {
            width: 32px !important;
            height: 32px !important;
          }
          
          .faq-header-line {
            width: 120px !important;
            height: 3px !important;
          }
        }
      `}</style>
      
      <section className="faq-section bg-[#F8F8F9] py-8 md:py-10 px-5 md:px-4 font-['DM_Sans']">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="flex items-center justify-center gap-2 mb-3 flex-wrap">
              <span 
                className="font-['Playfair_Display'] font-bold text-[#304CCF] faq-header-title"
              >
                Frequently
              </span>
              <span 
                className="font-['Playfair_Display'] font-bold text-[rgb(0,0,0)] faq-header-title"
              >
                Asked Questions
              </span>
              <img 
                src="/assets/icons/question.png" 
                alt="Question mark" 
                className="faq-question-icon object-contain"
              />
            </h2>
            
            <div className="faq-header-line bg-[#1C3CD5] rounded-full mx-auto"></div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border-b border-[#D5D5D5]"
              >
                {/* Question */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between gap-4 text-left py-4 hover:opacity-80 transition-opacity"
                >
                  <span 
                    className="font-['DM_Sans'] text-[rgb(0,0,0)] flex-1 faq-question"
                    style={{ fontWeight: '700' }}
                  >
                    {faq.question}
                  </span>
                  
                  {/* Toggle Icon */}
                  <div className={`flex-shrink-0 rounded-full flex items-center justify-center faq-icon ${
                    openItems.includes(index) 
                      ? 'bg-black border-2 border-black rotating' 
                      : 'border-2 border-[rgb(0,0,0)] bg-transparent'
                  }`}>
                    {openItems.includes(index) ? (
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8H13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3V13M3 8H13" stroke="rgb(0,0,0)" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )}
                  </div>
                </button>
                
                {/* Answer with smooth bottom-to-top transition */}
                <div className={`faq-answer-wrapper ${
                  openItems.includes(index) ? 'open' : ''
                }`}>
                  <div className="faq-answer-inner">
                    <div className="faq-answer-content">
                      <p 
                        className="font-['DM_Sans'] text-[rgb(0,0,0)] faq-answer"
                        style={{ fontWeight: '400' }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQSection;