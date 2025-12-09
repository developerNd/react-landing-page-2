import React from 'react';
import HeroSection from './components/HeroSection';
import LearnSection from './components/LearnSection';
import WebinarJoinSection from './components/WebinarJoinSection';
import MeetCoachSection from './components/MeetCoachSection';
import BonusResourcesSection from './components/BonusResourcesSection';
import FAQSection from './components/FAQSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <LearnSection />
      <WebinarJoinSection />
      <MeetCoachSection />
      <BonusResourcesSection />
      <FAQSection />
    </div>
  );
}

export default App;