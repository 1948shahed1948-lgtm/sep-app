// Top Goal 1 — Grade 4 English — Semester 1
import { WELCOME_UNIT } from './welcome';
import { UNIT1 } from './unit1';
import { UNIT2 } from './unit2';
import { UNIT3 } from './unit3';
import { UNIT4 } from './unit4';
import { WELCOME_EXTRA } from './welcome_extra';
import { UNIT1_EXTRA } from './unit1_extra';
import { UNIT2_EXTRA } from './unit2_extra';
import { UNIT3_EXTRA } from './unit3_extra';
import { UNIT4_EXTRA } from './unit4_extra';
import { WELCOME_EXTRA2 } from './welcome_extra2';
import { UNIT1_EXTRA2 } from './unit1_extra2';
import { UNIT2_EXTRA2 } from './unit2_extra2';
import { UNIT3_EXTRA2 } from './unit3_extra2';
import { UNIT4_EXTRA2 } from './unit4_extra2';

// Merge all extra question batches into each unit's lessons
function mergeExtras(unit, ...extrasList) {
  return {
    ...unit,
    lessons: unit.lessons.map((lesson) => ({
      ...lesson,
      questions: [
        ...lesson.questions,
        ...extrasList.flatMap((extras) => extras?.[lesson.id] || []),
      ],
    })),
  };
}

export const TG1_UNITS = [
  mergeExtras(WELCOME_UNIT, WELCOME_EXTRA, WELCOME_EXTRA2),
  mergeExtras(UNIT1, UNIT1_EXTRA, UNIT1_EXTRA2),
  mergeExtras(UNIT2, UNIT2_EXTRA, UNIT2_EXTRA2),
  mergeExtras(UNIT3, UNIT3_EXTRA, UNIT3_EXTRA2),
  mergeExtras(UNIT4, UNIT4_EXTRA, UNIT4_EXTRA2),
];

export const TG1_BANNER = {
  title: 'Top Goal 1',
  subtitle: 'Grade 4 English — Semester 1',
  publisher: 'Ministry of Education — Saudi Arabia 2025',
  color: '#6366f1',
  accentColor: '#c9a227',
};

export const TG1_TOTAL_QUESTIONS = TG1_UNITS.reduce(
  (t, u) => t + u.lessons.reduce((lt, l) => lt + l.questions.length, 0), 0
);

export const TG1_TOTAL_LESSONS = TG1_UNITS.reduce((t, u) => t + u.lessons.length, 0);