import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SimulatorsSection } from './components/SimulatorsSection';
import { TornDivider } from './components/TornDivider';
import { StatsSection } from './components/StatsSection';
import { ContactCtaSection } from './components/ContactCtaSection';
import { ContactRibbon } from './components/ContactRibbon';
import { Footer } from './components/Footer';
import { SimulatorsFleetView } from './components/SimulatorsFleetView';
import { TrainingScheduleView } from './components/TrainingScheduleView';
import { VisionView } from './components/VisionView';
import { AboutView } from './components/AboutView';
import { ServicesView } from './components/ServicesView';
import { ProjectsView } from './components/ProjectsView';
import { LogoLoader } from './components/LogoLoader';
import {
  SearchModal,
  RegistrationModal,
  ContactModal,
  SimulatorDetailsModal,
} from './components/Modals';
import { SimulatorItem } from './types';
import { SIMULATORS_DATA } from './data';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<'poster' | 'services' | 'projects' | 'simulators' | 'schedule' | 'vision' | 'about'>('poster');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedSimulator, setSelectedSimulator] = useState<SimulatorItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleConnectWhatsApp = (customMsg?: string) => {
    const text = customMsg || 'Hello Ceynova Technologies! I would like to start a project and discuss our requirements.';
    window.open(`https://wa.me/94710497858?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'about-section' || sectionId === 'about') {
      setCurrentView('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (sectionId === 'vision-section' || sectionId === 'vision') {
      setCurrentView('vision');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (sectionId === 'services' || sectionId === 'services-section' || sectionId === 'services-page') {
      setCurrentView('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (sectionId === 'projects' || sectionId === 'projects-section' || sectionId === 'projects-page') {
      setCurrentView('projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (sectionId === 'home' || sectionId === 'poster') {
      setCurrentView('poster');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentView !== 'poster') {
      setCurrentView('poster');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'schedule-section') {
      setCurrentView('schedule');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-[#E30613] selection:text-white relative">
      {/* Website Logo Loading Animation matching video */}
      {isLoading && (
        <LogoLoader onComplete={() => setIsLoading(false)} />
      )}

      {/* Conditionally Rendered Views */}
      {currentView === 'about' ? (
        <>
          <Navbar
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenContact={() => setIsContactOpen(true)}
            onOpenRegistration={() => handleConnectWhatsApp('Hello Ceynova Technologies! I would like to get started with your team.')}
            onNavigate={handleNavigate}
            activeView="about"
          />
          <AboutView
            onBackToHome={() => {
              setCurrentView('poster');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onStartProject={() => handleConnectWhatsApp('Hello Ceynova Technologies! I would like to build a project with Ceynova.')}
            onExploreVision={() => {
              setCurrentView('vision');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
          <Footer
            onNavigate={handleNavigate}
            onOpenPrivacy={() => showToast('Ceynova Technologies Data Privacy Policy.')}
            onOpenTerms={() => showToast('Ceynova Technologies Terms & Conditions.')}
          />
        </>
      ) : currentView === 'vision' ? (
        <>
          <Navbar
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenContact={() => setIsContactOpen(true)}
            onOpenRegistration={() => handleConnectWhatsApp('Hello Ceynova Technologies! I would like to get started with your team.')}
            onNavigate={handleNavigate}
            activeView="vision"
          />
          <VisionView
            onBackToHome={() => {
              setCurrentView('poster');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onStartProject={() => handleConnectWhatsApp('Hello Ceynova Technologies! I would like to build a project with Ceynova.')}
            onContact={() => setIsContactOpen(true)}
          />
          <Footer
            onNavigate={handleNavigate}
            onOpenPrivacy={() => showToast('Ceynova Technologies Data Privacy Policy.')}
            onOpenTerms={() => showToast('Ceynova Technologies Terms & Conditions.')}
          />
        </>
      ) : currentView === 'services' ? (
        <>
          <Navbar
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenContact={() => setIsContactOpen(true)}
            onOpenRegistration={() => handleConnectWhatsApp('Hello Ceynova Technologies! I would like to get started with your team.')}
            onNavigate={handleNavigate}
            activeView="services"
          />
          <ServicesView
            onBackToHome={() => {
              setCurrentView('poster');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onStartProject={() => handleConnectWhatsApp('Hello Ceynova Technologies! I would like to build a project with Ceynova.')}
            onContact={() => setIsContactOpen(true)}
          />
          <Footer
            onNavigate={handleNavigate}
            onOpenPrivacy={() => showToast('Ceynova Technologies Data Privacy Policy.')}
            onOpenTerms={() => showToast('Ceynova Technologies Terms & Conditions.')}
          />
        </>
      ) : currentView === 'projects' ? (
        <>
          <Navbar
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenContact={() => setIsContactOpen(true)}
            onOpenRegistration={() => handleConnectWhatsApp('Hello Ceynova Technologies! I would like to get started with your team.')}
            onNavigate={handleNavigate}
            activeView="projects"
          />
          <ProjectsView
            onBackToHome={() => {
              setCurrentView('poster');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onStartProject={() => handleConnectWhatsApp('Hello Ceynova Technologies! I would like to start a project with Ceynova.')}
          />
          <Footer
            onNavigate={handleNavigate}
            onOpenPrivacy={() => showToast('Ceynova Technologies Data Privacy Policy.')}
            onOpenTerms={() => showToast('Ceynova Technologies Terms & Conditions.')}
          />
        </>
      ) : currentView === 'simulators' ? (
        <SimulatorsFleetView
          onBackToPoster={() => setCurrentView('poster')}
          onBookSimulator={(simName) => {
            showToast(`Connecting to WhatsApp for ${simName}...`);
            handleConnectWhatsApp(`Hello Ceynova Technologies, I would like to discuss engineering solutions for ${simName}.`);
          }}
        />
      ) : currentView === 'schedule' ? (
        <TrainingScheduleView
          onBackToPoster={() => setCurrentView('poster')}
          onRegisterCourse={(courseName) => {
            showToast(`Connecting to WhatsApp for ${courseName}...`);
            handleConnectWhatsApp(`Hello Ceynova Technologies, I would like to inquire about ${courseName}.`);
          }}
        />
      ) : (
        /* The 100% Faithful Poster Layout */
        <>
          {/* 1. Header / Navbar */}
          <Navbar
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenContact={() => setIsContactOpen(true)}
            onOpenRegistration={() => handleConnectWhatsApp('Hello Ceynova Technologies! I would like to get started with your team.')}
            onNavigate={handleNavigate}
            activeView="poster"
          />

          {/* Main Content Flow matching reference photo */}
          <main className="flex-1 w-full flex flex-col">
            
            {/* 2. Hero Section: Seamless Commercial Jetliner, "01 PILOTS", "ARE YOU READY FOR TAKE-OFF?" */}
            <Hero
              onLearnMore={() => handleNavigate('simulators-section')}
              onOpenRegistration={() => handleConnectWhatsApp('Hello Ceynova Technologies! I would like to start a project.')}
            />

            {/* 3. Simulators 3 Cards Section (Dark Navy #0B1528) */}
            <SimulatorsSection
              onSelectSimulator={(sim) => setSelectedSimulator(sim)}
              onViewAllSimulators={() => setCurrentView('simulators')}
            />

            {/* 4. Statistics Section (Unified Dark Navy #0B1528 with thin red dividers & ghost numbers) */}
            <StatsSection />

            {/* 5. Jagged White Torn Paper Edge below stats */}
            <TornDivider type="to-light" darkColor="#0B1528" lightColor="#ffffff" />

            {/* 6. Call-to-action Section: "WANT TO BECOME AN PILOT?" with faint "CONTACT US" watermark */}
            <ContactCtaSection
              onOpenContact={() => setIsContactOpen(true)}
              onOpenRegistration={() => handleConnectWhatsApp('Hello Ceynova Technologies! I am ready to start a project with Ceynova.')}
            />

            {/* 7. Red Contact Ribbon: [212] 463 6300 | ftc@thy.com */}
            <ContactRibbon />
          </main>

          {/* 8. Dark Navy Footer with EASA Approved Course badge */}
          <Footer
            onNavigate={handleNavigate}
            onOpenPrivacy={() => showToast('Ceynova Technologies Data Privacy Policy (GDPR / ISO Compliant).')}
            onOpenTerms={() => showToast('Ceynova Technologies Software Development & Service Level Terms.')}
          />
        </>
      )}

      {/* Interactive Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectSimulator={(sim) => {
          setSelectedSimulator(sim);
          setIsSearchOpen(false);
        }}
      />

      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <SimulatorDetailsModal
        isOpen={selectedSimulator !== null}
        simulator={selectedSimulator}
        onClose={() => setSelectedSimulator(null)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0B1528] text-white px-5 py-3 rounded-xl shadow-2xl border-l-4 border-[#E30613] text-xs font-semibold animate-in slide-in-from-bottom-5 duration-200">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
