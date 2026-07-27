import React from 'react';
import SimpleBankRunner from '@/components/bank/SimpleBankRunner';
import * as data from '@/lib/socialGrade2S1Bank';

export default function SocialGrade2S1Bank(){
  return <SimpleBankRunner data={data} storageKey="social_g2_s1_prog" nameKey="social_g2_student" themeColor="#0891b2" subjectLabel="الاجتماعيات" />;
}