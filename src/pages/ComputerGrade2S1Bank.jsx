import React from 'react';
import SimpleBankRunner from '@/components/bank/SimpleBankRunner';
import * as data from '@/lib/computerGrade2S1Bank';

export default function ComputerGrade2S1Bank(){
  return <SimpleBankRunner data={data} storageKey="computer_g2_s1_prog" nameKey="computer_g2_student" themeColor="#475569" subjectLabel="المهارات الرقمية" />;
}