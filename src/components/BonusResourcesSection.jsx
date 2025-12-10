import React from 'react';

function BonusResourcesSection() {
  const resources = [
    {
      title: "Mindset Reset Morning Journal",
      description: "A beautifully designed 21-day guided journaling template with prompts specifically designed to reinforce the masterclass concepts."
    },
    {
      title: "The Belief Reframing Workbook",
      description: "A step-by-step interactive PDF to identify, challenge, and transform limiting beliefs using the techniques from the masterclass."
    },
    {
      title: "Positive Affirmation Audio Library",
      description: "A collection of 10-minute guided audio sessions focusing on confidence, abundance, focus, and resilience."
    },
    {
      title: "Success Visualization Guide",
      description: "A detailed visualization script with background music recommendations to practice the mental imagery techniques taught in the masterclass."
    },
    {
      title: '"Mind Mechanics" Quick Reference Cards',
      description: "Digital cards summarizing the core concepts and techniques from the masterclass for easy review and application."
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display:wght@400&family=Playfair+Display:wght@700;900&display=swap');
        
        .bonus-section * {
          box-sizing: border-box;
        }
        
        .cta-button-bonus {
          position: relative;
          overflow: hidden;
        }
        
        .cta-button-bonus::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transform: skewX(-20deg);
          animation: shimmer 3s infinite;
        }
        
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          50%, 100% {
            left: 200%;
          }
        }
        
        .cta-button-bonus:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 147, 33, 0.5);
        }
        
        /* Responsive styles */
        @media (max-width: 768px) {
          .bonus-heading-text {
            font-size: 30px !important;
            line-height: 36px !important;
          }
          
          .bonus-subtitle {
            font-size: 16px !important;
            line-height: 22px !important;
          }
          
          .cta-button-bonus {
            max-width: 100% !important;
          }
          
          .faded-image {
            width: 80px !important;
            height: 140px !important;
            top: auto !important;
            bottom: 0 !important;
            margin-top: 0 !important;
            right: 10px !important;
          }
        }
        
        @media (min-width: 769px) {
          .faded-image {
            top: 30% !important;
            margin-top: 60px !important;
          }
        }
      `}</style>
      
      <section className="bonus-section bg-white py-12 md:py-16 px-4 font-['DM_Sans']">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-8">
            <h2 className="flex flex-col md:flex-row items-center justify-center gap-3 mb-4 px-4">
              {/* First line for mobile: "What do you get" */}
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <img 
                  src="/assets/icons/gift.png" 
                  alt="Gift icon" 
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
                <span 
                  className="font-['DM_Serif_Display'] font-normal text-[#304CCF] bonus-heading-text"
                  style={{ fontSize: '35px', lineHeight: '46px', fontWeight: '400' }}
                >
                  What do you get{' '}
                </span>
                <span 
                  className="font-['DM_Serif_Display'] font-normal text-[rgb(17,17,17)] bonus-heading-text"
                  style={{ fontSize: '35px', lineHeight: '46px', fontWeight: '400' }}
                >
                  when you{' '}
                </span>
                <span 
                  className="font-['DM_Serif_Display'] font-normal text-[rgb(17,17,17)] bonus-heading-text hidden md:inline"
                  style={{ fontSize: '35px', lineHeight: '46px', fontWeight: '400' }}
                >
                  join?
                </span>
                <img 
                  src="/assets/icons/gift.png" 
                  alt="Gift icon" 
                  className="w-8 h-8 md:w-10 md:h-10 object-contain hidden md:inline"
                />
              </div>
              
              {/* Second line for mobile: only "join?" with icon */}
              <div className="flex items-center justify-center gap-3 md:hidden">
                <span 
                  className="font-['DM_Serif_Display'] font-normal text-[rgb(17,17,17)] bonus-heading-text"
                  style={{ fontSize: '35px', lineHeight: '46px', fontWeight: '400' }}
                >
                  join?
                </span>
                <img 
                  src="/assets/icons/gift.png" 
                  alt="Gift icon" 
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
              </div>
            </h2>
            
            <div className="w-32 md:w-40 h-1 bg-[#1C3CD5] rounded-full mx-auto mb-6"></div>
            
            <p 
              className="font-['DM_Sans'] font-medium text-[rgb(17,17,17)] max-w-4xl mx-auto bonus-subtitle"
              style={{ fontSize: '20px', lineHeight: '28px', fontWeight: '500' }}
            >
              Sign up now and get these easy-to-use resources that help you start seeing results right away
            </p>
          </div>

          {/* Resources Grid */}
          <div className="mb-10 md:mb-12 relative">
            {/* Faded background image on the right side */}
            <div 
              className="absolute right-0 pointer-events-none faded-image"
              style={{ width: '140px', height: '240px', zIndex: 0 }}
            >
              <img 
                src="/assets/icons/faded-bg.png" 
                alt="Background decoration" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* First Row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8 relative z-10">
              {resources.slice(0, 3).map((resource, index) => (
                <div 
                  key={index}
                  className="bg-transparent border-2 border-[#E5E5E5] rounded-2xl p-6 hover:border-[#304CCF] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <img 
                      src="/assets/icons/gift.png" 
                      alt="Gift icon" 
                      className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 object-contain"
                    />
                    <div>
                      <h3 
                        className="font-['DM_Sans'] font-bold text-[rgb(17,17,17)] mb-3"
                        style={{ fontSize: '18px', lineHeight: '24px', fontWeight: '700' }}
                      >
                        {resource.title}
                      </h3>
                      <p 
                        className="font-['DM_Sans'] text-[rgba(17,17,17,0.8)]"
                        style={{ fontSize: '16px', lineHeight: '22px', fontWeight: '400' }}
                      >
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - 2 cards centered */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 relative z-10">
              {resources.slice(3, 5).map((resource, index) => (
                <div 
                  key={index + 3}
                  className="bg-transparent border-2 border-[#E5E5E5] rounded-2xl p-6 hover:border-[#304CCF] transition-all duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
                >
                  <div className="flex items-start gap-4">
                    <img 
                      src="/assets/icons/gift.png" 
                      alt="Gift icon" 
                      className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 object-contain"
                    />
                    <div>
                      <h3 
                        className="font-['DM_Sans'] font-bold text-[rgb(17,17,17)] mb-3"
                        style={{ fontSize: '18px', lineHeight: '24px', fontWeight: '700' }}
                      >
                        {resource.title}
                      </h3>
                      <p 
                        className="font-['DM_Sans'] text-[rgba(17,17,17,0.8)]"
                        style={{ fontSize: '16px', lineHeight: '22px', fontWeight: '400' }}
                      >
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-4">
            <button 
              className="cta-button-bonus w-full max-w-[340px] bg-gradient-to-r from-[#FF9321] to-[#F4C619] text-[#111111] font-black text-lg md:text-xl px-6 md:px-8 py-3.5 md:py-4 rounded-full shadow-[0_4px_16px_rgba(255,147,33,0.3)] transition-all duration-300 flex items-center justify-center gap-3 border-none cursor-pointer font-['DM_Sans']"
            >
              <span className="relative z-10">Register Now At ₹199</span>
              <svg 
                className="w-6 h-6 relative z-10" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <p 
              className="text-sm text-[#666666] italic text-center font-['DM_Sans']"
              style={{ fontSize: '15px', lineHeight: '20px' }}
            >
              Note: Growth and success requires consistent practice and effort
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default BonusResourcesSection;