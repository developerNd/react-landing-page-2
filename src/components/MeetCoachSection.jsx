import React from 'react';

function MeetCoachSection() {
  const credentials = [
    {
      icon: "👉",
      text: "Professional Certified Coach by ",
      link: "International Coaching Federation.",
      linkText: "International Coaching Federation."
    },
    {
      icon: "👉",
      text: "Certified ",
      link: "Neuroplasticity Coach",
      linkText: "Neuroplasticity Coach",
      afterLink: " by Dr. Rick Hanson"
    },
    {
      icon: "👉",
      text: "Certified ",
      link: "Transformational Coach",
      linkText: "Transformational Coach",
      afterLink: " by TPC Leadership."
    },
    {
      icon: "👉",
      text: "His ",
      link: "Power of Subconscious Mind workshop",
      linkText: "Power of Subconscious Mind workshop",
      afterLink: " has ",
      link2: "Helped a lot of people",
      linkText2: "Helped a lot of people",
      afterLink2: " across all age groups to come out of their comfort zones and overcome limiting beliefs."
    },
    {
      icon: "👉",
      text: "His Visualisation and Meditation Techniques have ",
      link: "Helped Many People Improve Their Quality of Life.",
      linkText: "Helped Many People Improve Their Quality of Life."
    },
    {
      icon: "👉",
      text: "He is on a ",
      link: "Mission",
      linkText: "Mission",
      afterLink: " to help ",
      link2: "Mission",
      linkText2: "Mission",
      afterLink2: " 1 Billion People"
    },
    {
      icon: "👉",
      text: "Former member of ",
      link: "Forbes Coaches Counsil.",
      linkText: "Forbes Coaches Counsil."
    }
  ];

  const certificates = [
    { 
      src: "/assets/images/certificate1.png", 
      alt: "Professional Certified Coach Certificate",
      height: '200px', 
      width: '90%'     
    },
    { 
      src: "/assets/images/certificate2.png", 
      alt: "Neuroplasticity Training Certificate",
      height: '200px',  
      width: '90%'     
    },
    { 
      src: "/assets/images/certificate3.png", 
      alt: "Transformational Leadership Certificate",
      height: '200px', 
      width: '90%'   
    },
    { 
      src: "/assets/images/certificate4.png", 
      alt: "Forbes Coaches Council Certificate",
      height: '220px',
      width: '75%'
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display:wght@400&family=Playfair+Display:wght@700;900&display=swap');
        
        .meet-coach-section * {
          box-sizing: border-box;
        }
        
        /* Desktop - Default styles */
        .coach-image {
          width: 75%;
          max-height: 480px;
          margin-bottom: 60px;
        }
        
        .coach-container {
          max-width: 560px;
          margin-right: 35px;
        }
        
        .coach-bg {
          padding: 48px;
          min-height: 500px;
        }
        
        /* Tablet (768px - 1023px) */
        @media (max-width: 1023px) {
          .coach-image {
            width: 65%;
            max-height: 600px;
            margin-bottom: 50px;
          }
          
          .coach-container {
            max-width: 100%;
            margin-right: 0;
          }
          
          .coach-bg {
            padding: 40px;
            min-height: 450px;
          }
        }
        
        /* Mobile (below 768px) */
        @media (max-width: 767px) {
          .coach-image {
            width: 70%;
            max-height: 450px;
            margin-bottom: 40px;
          }
          
          .coach-container {
            max-width: 100%;
            margin-right: 0;
          }
          
          .coach-bg {
            padding: 30px;
            min-height: 400px;
          }
        }
        
        /* Small Mobile (below 480px) */
        @media (max-width: 480px) {
          .coach-image {
            width: 85%;
            max-height: 380px;
            margin-bottom: 35px;
          }
          
          .coach-bg {
            padding: 20px;
            min-height: 350px;
          }
        }
      `}</style>
      
      <section className="meet-coach-section bg-[#F8F8F9] py-12 md:py-12 px-4 font-['DM_Sans']">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <h2 className="flex items-center justify-center gap-2 mb-3 flex-wrap">
              <img 
                src="/assets/icons/teacher.png" 
                alt="Teacher icon" 
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <span 
                className="font-['DM_Serif_Display'] font-normal text-[rgb(17,17,17)]"
                style={{ fontSize: '35px', lineHeight: '46px', fontWeight: '400' }}
              >
                Meet Your{' '}
              </span>
              <span 
                className="font-['DM_Serif_Display'] font-normal text-[#304CCF]"
                style={{ fontSize: '35px', lineHeight: '46px', fontWeight: '400' }}
              >
                Coach
              </span>
            </h2>
            <div className="w-32 md:w-40 h-1 bg-[#1C3CD5] rounded-full mx-auto mb-4"></div>
            <h3 
              className="font-['DM_Serif_Display'] text-[rgb(17,17,17)]"
              style={{ fontSize: '32px', lineHeight: '42px', fontWeight: '500' }}
            >
              AVINASH ANAND SINGH
            </h3>
          </div>

          {/* Main Content - Two Column Layout */}
          <div className="bg-transparent border-2 border-[#233F7F] rounded-2xl p-4 md:p-6 lg:p-6 mb-8 md:mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6">
              {/* Left Column - Image */}
              <div className="flex flex-col items-center lg:items-start">
                {/* Outer Container - Adjust max-w values for width */}
                <div 
                  className="relative w-full mx-auto coach-container"
                >
                  {/* Blue Background Container - Adjust padding for background size */}
                  <div 
                    className="bg-[#0F2175] rounded-2xl overflow-hidden flex items-center justify-center coach-bg"
                  >
                    {/* Inner Image - Adjust width and maxHeight */}
                    <img 
                      src="/assets/images/coach-photo.png" 
                      alt="Avinash Anand" 
                      className="h-auto object-cover coach-image"
                    />
                  </div>
                  {/* Stats Card */}
                  <div className="absolute bottom-2.5 left-1/2 transform -translate-x-1/2 bg-[#575675]/90 backdrop-blur-sm text-white rounded-xl px-4 py-2.5 text-center w-[70%]">
                    <h4 className="font-['DM_Sans'] font-bold text-base md:text-xl mb-0.5">
                      Avinash Anand
                    </h4>
                    <p className="font-['DM_Sans'] font-medium text-xs md:text-base">
                      18,000+ Attendies
                    </p>
                    <p className="font-['DM_Sans'] font-medium text-xs md:text-base">
                      9.4/10 Ratings
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Credentials */}
              <div className="flex flex-col justify-center">
                <p 
                  className="font-['DM_Sans'] text-[rgba(17,17,17,0.8)] mb-6"
                  style={{ fontSize: '18px', lineHeight: '23px', fontWeight: '500' }}
                >
                  Transformational Coach with over a decade of experience in the area of Subconscious mind, Law of Attraction & Growth Mindset
                </p>

                <div className="space-y-4">
                  {credentials.map((credential, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-xl md:text-2xl flex-shrink-0 -mt-1">{credential.icon}</span>
                      <p 
                        className="font-['DM_Sans'] text-[rgb(17,17,17)]"
                        style={{ fontSize: '18px', lineHeight: '24px', fontWeight: '700' }}
                      >
                        {credential.text}
                        {credential.link && (
                          <span 
                            className="text-[#304CCF]"
                            style={{ fontSize: '18px', lineHeight: '24px', fontWeight: '700' }}
                          >
                            {credential.linkText}
                          </span>
                        )}
                        {credential.afterLink && credential.afterLink}
                        {credential.link2 && (
                          <>
                            <span 
                              className="text-[#304CCF]"
                              style={{ fontSize: '18px', lineHeight: '24px', fontWeight: '700' }}
                            >
                              {credential.linkText2}
                            </span>
                            {credential.afterLink2}
                          </>
                        )}
                      </p>
                    </div>
                  ))}
                </div>

                <p 
                  className="font-['DM_Sans'] text-[rgba(17,17,17,0.8)] mt-6"
                  style={{ fontSize: '18px', lineHeight: '23px', fontWeight: '500' }}
                >
                  Avinash is on a mission to impact 1 billion lives, helping individuals reprogram their mindset, embrace abundance, and achieve limitless success.
                </p>
              </div>
            </div>
          </div>

          {/* Certificates Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="overflow-hidden mx-auto"
                style={{
                  height: cert.height,  // Individual height for each certificate
                  width: cert.width     // Individual width for each certificate
                }}
              >
                <img 
                  src={cert.src} 
                  alt={cert.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MeetCoachSection;