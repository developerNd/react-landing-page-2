import React, { useState } from 'react';

function WebinarJoinSection() {
  const checkpoints = [
    "You refuse to settle for less and aim for real abundance.",
    "You struggle to stay energetic and productive.",
    "You want to build a confidence and conviction.",
    "You want to develop an Abundance Mindset and set genuine goals.",
    "You're tired of feeling stuck and want a happy, healthy, and harmonious life."
  ];

  const [selectedCheckpoints, setSelectedCheckpoints] = useState([0]);

  const toggleCheckpoint = (index) => {
    setSelectedCheckpoints(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-1.5">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="black" stroke="black" strokeWidth="2"/>
      <path d="M7 12L10 15L17 8" stroke="#1FAE8F" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const EmptyCheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-1.5">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="white" stroke="#E5E5E5" strokeWidth="2"/>
    </svg>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&family=DM+Serif+Display:wght@400&family=Montserrat:wght@700&display=swap');
        
        .webinar-join-section * {
          box-sizing: border-box;
        }
        
        .cta-button-webinar {
          position: relative;
          overflow: hidden;
        }
        
        .cta-button-webinar::before {
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
        
        .cta-button-webinar:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 147, 33, 0.5);
        }
        
        .heading-text {
          font-size: 35px;
          line-height: 46px;
        }
        
        @media (max-width: 768px) {
          .heading-text {
            font-size: 33px;
            line-height: 40px;
          }
        }
        
        @media (max-width: 640px) {
          .heading-text {
            font-size: 32px;
            line-height: 34px;
          }
        }
        
        .checkpoint-text {
          font-size: 20px;
          line-height: 31px;
        }
        
        @media (max-width: 1200px) {
          .checkpoint-text {
            font-size: 19px;
            line-height: 28px;
          }
        }
        
        @media (max-width: 768px) {
          .checkpoint-text {
            font-size: 19px;
            line-height: 27px;
          }
        }
        
        @media (max-width: 640px) {
          .checkpoint-text {
            font-size: 17px;
            line-height: 24px;
          }
          
          .cta-text-main {
            font-size: 16px !important;
            line-height: 21px !important;
          }
          
          .cta-text-subtitle {
            font-size: 18px !important;
            line-height: 22px !important;
          }
          
          .cta-button-webinar {
            max-width: 100% !important;
          }
        }
        
        @media (min-width: 641px) and (max-width: 768px) {
          .cta-text-main {
            font-size: 17px !important;
            line-height: 22px !important;
          }
          
          .cta-text-subtitle {
            font-size: 19px !important;
            line-height: 23px !important;
          }
        }
      `}</style>
      
      <section className="webinar-join-section bg-[#FFFFFF] py-10 md:py-12 px-4 font-['DM_Sans']">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-center mb-4 md:mb-4 flex items-center justify-center flex-wrap gap-2">
            <img 
              src="/assets/icons/thinking.png" 
              alt="Thinking emoji" 
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
            <span 
              className="heading-text font-['DM_Serif_Display'] font-normal text-[rgb(17,17,17)]"
            >
              Join This{' '}
            </span>
            <span 
              className="heading-text font-['DM_Serif_Display'] font-normal text-[#304CCF]"
            >
              Webinar if...
            </span>
          </h2>

          {/* Decorative line */}
          <div className="w-40 md:w-42 h-1 bg-[#1C3CD5] rounded-full mx-auto mb-5 md:mb-6"></div>

          {/* Checkpoints List */}
          <div className="space-y-3 md:space-y-3.5 mb-6 md:mb-8 max-w-3xl mx-auto">
            {checkpoints.map((text, index) => (
              <div 
                key={index}
                onClick={() => toggleCheckpoint(index)}
                className="flex items-start gap-3 md:gap-3.5 cursor-pointer group transition-all duration-200 hover:opacity-80"
              >
                {selectedCheckpoints.includes(index) ? <CheckIcon /> : <EmptyCheckIcon />}
                <p 
                  className="checkpoint-text font-['DM_Sans'] font-medium text-[rgb(17,17,17)] pt-0.5"
                  style={{ fontWeight: '500' }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Fist Emoji */}
          <div className="text-center mb-4 md:mb-6">
            <img 
              src="/assets/icons/fist.png" 
              alt="Fist emoji" 
              className="w-14 h-14 md:w-16 md:h-16 mx-auto object-contain"
            />
          </div>

          {/* Call to Action Text */}
          <div className="text-center mb-6 md:mb-8 px-4">
            <p 
              className="cta-text-main font-['DM_Sans'] font-bold text-[rgb(17,17,17)] max-w-2xl mx-auto"
              style={{ fontSize: '18px', lineHeight: '23px', fontWeight: '700' }}
            >
              If any of these sound like you, Consider joining the
            </p>
            <p 
              className="cta-text-subtitle font-['DM_Sans'] font-bold text-[rgb(17,17,17)] mt-2"
              style={{ fontSize: '20px', lineHeight: '20px', fontWeight: '700' }}
            >
              "Power of Subconscious Mind" Masterclass
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-4">
            <button 
              className="cta-button-webinar w-full max-w-[340px] bg-gradient-to-r from-[#FF9321] to-[#F4C619] text-[#111111] font-black text-lg md:text-xl px-6 md:px-8 py-3.5 md:py-4 rounded-full shadow-[0_4px_16px_rgba(255,147,33,0.3)] transition-all duration-300 flex items-center justify-center gap-3 border-none cursor-pointer font-['DM_Sans']"
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
            
            <p className="text-sm text-[#666666] italic text-center">
              Note: Growth and success requires consistent practice and effort
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebinarJoinSection;