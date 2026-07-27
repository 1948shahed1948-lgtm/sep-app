// Comprehensive Qiyas-style (GAT) aptitude question bank
// Structure: aptitudeQuestions[section][topicIndex] = array of questions
// Individual topic question sets live in src/lib/aptitude/ for maintainability

import verbalReading from '@/lib/aptitude/verbalReading';
import verbalSentence from '@/lib/aptitude/verbalSentence';
import verbalAnalogy from '@/lib/aptitude/verbalAnalogy';
import verbalError from '@/lib/aptitude/verbalError';
import verbalVocab from '@/lib/aptitude/verbalVocab';
import quantArithmetic from '@/lib/aptitude/quantArithmetic';
import quantAlgebra from '@/lib/aptitude/quantAlgebra';
import quantGeometry from '@/lib/aptitude/quantGeometry';
import quantStats from '@/lib/aptitude/quantStats';
import quantComparisons from '@/lib/aptitude/quantComparisons';

export { aptitudeTopics } from '@/lib/aptitude/topics';

export const aptitudeQuestions = {
  verbal: {
    0: verbalReading,
    1: verbalSentence,
    2: verbalAnalogy,
    3: verbalError,
    4: verbalVocab,
  },
  quantitative: {
    0: quantArithmetic,
    1: quantAlgebra,
    2: quantGeometry,
    3: quantStats,
    4: quantComparisons,
  }
};