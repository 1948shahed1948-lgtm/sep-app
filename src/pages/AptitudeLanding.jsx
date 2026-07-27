import React from 'react';
import AptitudeLandingHero from '@/components/aptitude/AptitudeLandingHero';
import AptitudeStandardizedSection from '@/components/aptitude/AptitudeStandardizedSection';
import SuccessStories from '@/components/aptitude/SuccessStories';
import JoinCta from '@/components/aptitude/JoinCta';

export default function AptitudeLanding() {
  return (
    <div className="space-y-16">
      <AptitudeLandingHero />
      <AptitudeStandardizedSection />
      <SuccessStories />
      <JoinCta />
    </div>
  );
}