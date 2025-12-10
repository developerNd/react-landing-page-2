import React from 'react';

function LearnSection() {
  const learningPoints = [
    {
      title: "Discover The Power of Your Subconscious Mind",
      description: "Learn how your subconscious mind works and how it can help you become more confident"
    },
    {
      title: "Understand Your Beliefs and Identity",
      description: "Learn how to change your belief system and work on a new identity that may boost your confidence and energy."
    },
    {
      title: "Learn How To Adopt The Abundance Mindset",
      description: "Discover how to build a strong mindset and work towards overcoming blocks that hold you back."
    },
    {
      title: "Find Out How To Create Lasting Change",
      description: "Learn how to build healthy habits, improve your willpower, and prepare for future growth with easy-to-follow strategies."
    }
  ];

  const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
      <rect x="1" y="1" width="26" height="26" rx="5" fill="white" stroke="#1FAE8F" strokeWidth="3"/>
      <path d="M8 14L12 18L20 10" stroke="#1FAE8F" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&family=DM+Serif+Display:wght@400&family=Montserrat:wght@700&display=swap');
        
        .learn-section * {
          box-sizing: border-box;
        }
        
        .cta-button-learn {
          position: relative;
          overflow: hidden;
        }
        
        .cta-button-learn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
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
        
        .cta-button-learn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 147, 33, 0.4);
        }
        
        @media (max-width: 768px) {
          .learn-card-title {
            font-size: 16px !important;
            line-height: 20px !important;
          }
          
          .learn-card-description {
            font-size: 14px !important;
            line-height: 18px !important;
          }
          
          .learn-heading-text {
            font-size: 30px !important;
            line-height: 38px !important;
          }
          
          .learn-heading-blue {
            font-size: 30px !important;
            line-height: 38px !important;
          }
          
          .learn-subheading {
            font-size: 16px !important;
            line-height: 22px !important;
          }
          
          .learn-top-text {
            font-size: 19px !important;
            line-height: 27px !important;
          }
          
          .learn-note-text {
            font-size: 15px !important;
            line-height: 20px !important;
          }
          
          .learn-check-icon {
            transform: scale(0.95);
            display: flex;
            align-items: flex-start;
            padding-top: 2px;
          }
        }
        
        @media (max-width: 768px) {
          .cta-button-learn {
            max-width: 100% !important;
          }
        }
        
        @media (max-width: 480px) {
          .learn-top-text {
            font-size: 17px !important;
            line-height: 24px !important;
            max-width: 320px !important;
          }
          
          .learn-note-text {
            font-size: 14px !important;
            line-height: 18px !important;
          }
          
          .learn-card-title {
            font-size: 14px !important;
            line-height: 18px !important;
          }
          
          .learn-card-description {
            font-size: 13px !important;
            line-height: 17px !important;
          }
          
          .learn-heading-text {
            font-size: 26px !important;
            line-height: 34px !important;
          }
          
          .learn-heading-blue {
            font-size: 26px !important;
            line-height: 34px !important;
          }
          
          .learn-subheading {
            font-size: 14px !important;
            line-height: 20px !important;
          }
          
          .cta-button-learn {
            font-size: 16px !important;
            padding: 0.85rem 1.5rem !important;
            max-width: 100% !important;
          }
          
          .learn-cta-note {
            font-size: 12px !important;
          }
          
          .learn-book-icon {
            width: 1.75rem !important;
            height: 1.75rem !important;
          }
          
          .learn-check-icon {
            transform: scale(0.85);
            display: flex;
            align-items: flex-start;
            padding-top: 2px;
          }
        }
      `}</style>
      
      <section className="learn-section" style={styles.section}>
        {/* Top white section */}
        <div style={styles.topSection}>
          <div style={styles.container}>
            <p className="learn-top-text" style={styles.topText}>
              Most of the participants have reported improved mindset, confidence, resilience, and better emotional regulation.
            </p>
            <p className="learn-note-text" style={styles.noteText}>
              Note: This workshop is educational, not a substitute for professional advice
            </p>
          </div>
        </div>

        {/* Main gray section */}
        <div style={styles.mainSection}>
          <div style={styles.container}>
            {/* Main heading */}
            <h2 style={styles.heading}>
              <img 
                src="/assets/icons/book.png"
                alt="Book icon" 
                className="learn-book-icon"
                style={styles.bookIcon}
              />
              <span className="learn-heading-text" style={styles.headingText}>
                What You'll <span className="learn-heading-blue" style={styles.headingBlue}>Learn:</span>
              </span>
            </h2>

            {/* Decorative line */}
            <div style={styles.decorativeLine}></div>

            {/* Subheading */}
            <p className="learn-subheading" style={styles.subheading}>
              Your mindset is the #1 factor that determines your financial reality. If you think like the wealthy, you will attract wealth effortlessly!
            </p>

            {/* Learning points */}
            <div style={styles.grid}>
              {learningPoints.map((point, index) => (
                <div key={index} style={styles.card}>
                  <div className="learn-check-icon" style={styles.checkmark}>
                    <CheckIcon />
                  </div>
                  <div style={styles.cardContent}>
                    <h3 className="learn-card-title" style={styles.cardTitle}>{point.title}</h3>
                    <p className="learn-card-description" style={styles.cardDescription}>{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div style={styles.ctaContainer}>
              <button className="cta-button-learn" style={styles.ctaButton}>
                <span style={{position: 'relative', zIndex: 1}}>Register Now At ₹199</span>
                <svg style={styles.arrow} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <p className="learn-cta-note" style={styles.ctaNote}>
                Note: Growth and success requires consistent practice and effort
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  section: {
    fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  },
  topSection: {
    background: '#ffffff',
    padding: '3rem 1rem 2rem'
  },
  mainSection: {
    background: '#F2F2F2',
    padding: '3rem 1rem 4rem'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  topText: {
    fontSize: '25px',
    fontWeight: '700',
    fontFamily: "'Montserrat', sans-serif",
    color: 'rgba(17, 17, 17, 0.8)',
    textAlign: 'center',
    maxWidth: '900px',
    lineHeight: '33px',
    marginBottom: '0.75rem'
  },
  noteText: {
    fontSize: '18px',
    fontWeight: '400',
    fontFamily: "'DM Sans', sans-serif",
    color: 'rgb(17, 17, 17)',
    textAlign: 'center',
    lineHeight: '23px',
    marginBottom: '0'
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    marginBottom: '1rem',
    flexWrap: 'wrap'
  },
  bookIcon: {
    width: '2.5rem',
    height: '2.5rem',
    objectFit: 'contain'
  },
  headingText: {
    fontSize: '35px',
    fontFamily: "'DM Serif Display', serif",
    fontWeight: '400',
    color: 'rgb(17, 17, 17)',
    lineHeight: '46px'
  },
  headingBlue: {
    color: '#304CCF',
    fontFamily: "'DM Serif Display', serif",
    fontWeight: '400',
    fontSize: '35px',
    lineHeight: '46px'
  },
  decorativeLine: {
    width: '120px',
    height: '4px',
    background: '#1C3CD5',
    borderRadius: '2px',
    marginBottom: '1.5rem'
  },
  subheading: {
    fontSize: '1.25rem',
    color: '#333333',
    textAlign: 'center',
    maxWidth: '800px',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    fontWeight: '500'
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    width: '100%',
    maxWidth: '1000px',
    marginBottom: '3rem'
  },
  card: {
    background: '#ffffff',
    borderRadius: '14px',
    padding: '0.7rem',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    gap: '1rem',
    transition: 'all 0.3s ease',
    cursor: 'default',
    border: '1px solid rgba(0, 0, 0, 0.05)'
  },
  checkmark: {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'flex-start',
    paddingTop: '2px'
  },
  cardContent: {
    flex: 1
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '700',
    fontFamily: "'DM Sans', sans-serif",
    color: 'rgb(17, 17, 17)',
    marginBottom: '0.5rem',
    lineHeight: '24px'
  },
  cardDescription: {
    fontSize: '20px',
    fontWeight: '400',
    fontFamily: "'DM Sans', sans-serif",
    color: 'rgb(17, 17, 17)',
    lineHeight: '24px'
  },
  ctaContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    width: '100%',
    maxWidth: '100%'
  },
  ctaButton: {
    width: '100%',
    maxWidth: '340px',
    background: 'linear-gradient(90deg, #FF9321 0%, #F4C619 100%)',
    color: '#111111',
    fontWeight: '900',
    fontSize: '1.25rem',
    padding: '1rem 2rem',
    borderRadius: '30px',
    border: 'none',
    boxShadow: '0 4px 16px rgba(255, 147, 33, 0.3)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    transition: 'all 0.3s ease',
    fontFamily: "'DM Sans', sans-serif"
  },
  arrow: {
    width: '1.5rem',
    height: '1.5rem',
    strokeWidth: '2.5',
    position: 'relative',
    zIndex: 1
  },
  ctaNote: {
    fontSize: '0.875rem',
    color: '#666666',
    fontStyle: 'italic',
    textAlign: 'center'
  }
};

export default LearnSection;