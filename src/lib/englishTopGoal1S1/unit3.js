// Top Goal 1 — Unit 3: Stories — Grade 4 English S1
export const UNIT3 = {
  id: 'unit3',
  title_en: 'Unit 3: Stories',
  title_ar: 'الوحدة الثالثة: القصص',
  color: '#d97706',
  icon: '📖',
  lessons: [
    {
      id: 'u3_l1',
      title_en: 'Past Simple (Regular Verbs)',
      title_ar: 'الماضي البسيط — الأفعال المنتظمة',
      page: 36,
      questions: [
        {
          id: 'u3q1', type: 'multipleChoice', bloom: 'remember', difficulty: 'easy',
          question_en: 'What ( did – does – doing ) you do yesterday?',
          paragraph: 'Past Simple question: Did + subject + base verb? | yesterday = past time.',
          options_en: ['did', 'does', 'doing', 'do'],
          correct: 0,
          explanation_en: '"Yesterday" = past → use "did". Past Simple question: What did you do yesterday?',
          golden_rule_en: 'Past Simple questions: Did + subject + base verb? "Did" is used for ALL subjects (I/you/he/she/we/they).',
          feedbackQuestion: {
            question_en: '( Does – Did ) he send an email last week?',
            options_en: ['Does', 'Did', 'Do', 'Is'],
            correct: 1,
            explanation_en: '"Last week" = past → Did. Did he send an email last week?'
          }
        },
        {
          id: 'u3q2', type: 'matching', bloom: 'remember', difficulty: 'easy',
          question_en: 'Match the base form with its Simple Past form:',
          paragraph: 'Regular Past Simple: add -ed. dream→dreamed | stop→stopped | plan→planned | play→played | carry→carried | score→scored',
          pairs: [
            { left: 'dream', right: 'dreamed' },
            { left: 'stop', right: 'stopped' },
            { left: 'play', right: 'played' },
            { left: 'carry', right: 'carried' },
          ],
          explanation_en: 'Regular verbs: add -ed. stop(CVC)→doubled consonant: stopped. carry(y→ied): carried.',
          golden_rule_en: 'Regular past: +ed | If verb ends in CVC (consonant-vowel-consonant): double last letter + ed. If ends in consonant+y: y→ied.',
          feedbackQuestion: {
            question_en: 'The past form of "plan" is:',
            options_en: ['planed', 'planned', 'planied', 'planning'],
            correct: 1,
            explanation_en: 'plan → planned (short verb ending in CVC: double the n → planned).'
          }
        },
        {
          id: 'u3q3', type: 'trueFalse', bloom: 'apply', difficulty: 'medium',
          question_en: 'She didn\'t ( watch – watched – watching ) TV. The correct answer is "watch" (base form after didn\'t).',
          paragraph: 'Past Simple negative: didn\'t + base verb (NO -ed). didn\'t watched is WRONG.',
          options_en: ['True', 'False'],
          correct: 'true',
          explanation_en: 'Correct! After "didn\'t", always use the BASE FORM of the verb. She didn\'t watch (NOT watched).',
          golden_rule_en: 'Past negative: didn\'t + BASE verb (no -ed). She didn\'t watch, He didn\'t play.',
          feedbackQuestion: {
            question_en: 'She ( didn\'t call – didn\'t called ) her mom.',
            options_en: ['didn\'t called', 'didn\'t call', 'doesn\'t call', 'wasn\'t call'],
            correct: 1,
            explanation_en: 'After "didn\'t" → base verb: didn\'t call (not "didn\'t called").'
          }
        },
        {
          id: 'u3q4', type: 'multipleChoice', bloom: 'apply', difficulty: 'medium',
          question_en: 'My dad (fix – fixed – fixes) my computer last week.',
          paragraph: 'Past Simple: regular verb → add -ed. Last week = past time. fix → fixed.',
          options_en: ['fix', 'fixed', 'fixes', 'fixing'],
          correct: 1,
          explanation_en: '"Last week" = past → Simple Past. fix + ed = fixed.',
          golden_rule_en: 'Past time words: yesterday, last week/month/year, in 2020 → all trigger Simple Past.',
          feedbackQuestion: {
            question_en: 'My best friend ( e-mail – emails – e-mailed ) me yesterday.',
            options_en: ['e-mail', 'emails', 'e-mailed', 'e-mailing'],
            correct: 2,
            explanation_en: '"Yesterday" = past → e-mailed (add -ed to e-mail).'
          }
        },
        {
          id: 'u3q5', type: 'classify', bloom: 'analyze', difficulty: 'hard',
          question_en: 'Classify: is the underlined word an "action" or a "thing"?',
          paragraph: 'Read then write (action) or (thing): ride can be used as a verb(action) or noun(thing). leaves = action (leaves school) or thing (autumn leaves).',
          categories: ['Action (فعل)', 'Thing (شيء)'],
          items: [
            { text: 'My mother gives me a ride to school.', correct_category: 1 },
            { text: 'I don\'t like to ride my bike to school.', correct_category: 0 },
            { text: 'We leave school at 12 o\'clock.', correct_category: 0 },
            { text: 'I put the leaves in the trash can.', correct_category: 1 },
          ],
          explanation_en: '"A ride" = thing (noun) | "to ride" = action (verb). "leave" = action (depart) | "leaves" = thing (from tree).',
          golden_rule_en: 'Same word can be noun (thing) or verb (action): ride, leave, water, play.',
          feedbackQuestion: {
            question_en: '"She wakes up at 7." The underlined "up" shows this is a(n):',
            options_en: ['thing', 'action', 'adjective', 'place'],
            correct: 1,
            explanation_en: '"Wakes up" is a verb phrase (action = فعل).'
          }
        },
      ]
    },
    {
      id: 'u3_l2',
      title_en: 'Past Simple (Irregular Verbs)',
      title_ar: 'الماضي البسيط — الأفعال غير المنتظمة',
      page: 36,
      questions: [
        {
          id: 'u3l2q1', type: 'matching', bloom: 'remember', difficulty: 'easy',
          question_en: 'Match the irregular verb with its past form:',
          paragraph: 'Irregular past verbs from Unit 3 (p.36-41): go→went | see→saw | sleep→slept | take→took | come→came',
          pairs: [
            { left: 'go', right: 'went' },
            { left: 'see', right: 'saw' },
            { left: 'sleep', right: 'slept' },
            { left: 'take', right: 'took' },
          ],
          explanation_en: 'Irregular verbs don\'t follow the -ed rule. Must be memorized.',
          golden_rule_en: 'Irregular verbs: go→went | see→saw | sleep→slept | take→took | come→came | eat→ate | write→wrote.',
          feedbackQuestion: {
            question_en: 'The past form of "go" is:',
            options_en: ['goed', 'went', 'gone', 'goes'],
            correct: 1,
            explanation_en: 'go is irregular → went (past). NOT "goed".'
          }
        },
        {
          id: 'u3l2q2', type: 'multipleChoice', bloom: 'apply', difficulty: 'medium',
          question_en: 'He ( play – plays – played ) soccer yesterday.',
          paragraph: 'Past Simple: regular verb + ed | play → played | Yesterday = past time.',
          options_en: ['play', 'plays', 'played', 'playing'],
          correct: 2,
          explanation_en: '"Yesterday" = past → played (play + ed).',
          golden_rule_en: 'yesterday/last week/last night → Simple Past. Regular verbs → +ed.',
          feedbackQuestion: {
            question_en: 'He ( laughs – laughed ) at my joke last night.',
            options_en: ['laughs', 'laughed', 'laughing', 'laugh'],
            correct: 1,
            explanation_en: '"Last night" = past → laughed (laugh + ed).'
          }
        },
        {
          id: 'u3l2q3', type: 'trueFalse', bloom: 'analyze', difficulty: 'medium',
          question_en: '"He didn\'t ( play – played ) soccer." — The correct answer is "play" (base form).',
          paragraph: 'Negative Past Simple: didn\'t + BASE FORM. Never add -ed after didn\'t.',
          options_en: ['True', 'False'],
          correct: 'true',
          explanation_en: 'Correct! After "didn\'t" → always base form. "He didn\'t play" NOT "He didn\'t played".',
          golden_rule_en: 'Rule: didn\'t + BASE form. ❌ didn\'t played | ✓ didn\'t play.',
          feedbackQuestion: {
            question_en: 'Did you ( invite – invited ) your friends?',
            options_en: ['invited', 'invite', 'inviting', 'invites'],
            correct: 1,
            explanation_en: 'After "Did" → base form: invite. Did you invite your friends?'
          }
        },
        {
          id: 'u3l2q4', type: 'multipleChoice', bloom: 'understand', difficulty: 'medium',
          question_en: 'What is the story "The Kind Man" SETTING?',
          paragraph: 'Story elements: Characters = who is in the story | Setting = where/when | Title = name of the story | The Kind Man: characters = an old man and two young friends | setting = on the top of a mountain.',
          options_en: ['An old man and two friends', 'The Kind Man', 'On the top of a mountain', 'In a forest'],
          correct: 2,
          explanation_en: 'Setting = WHERE the story takes place. The Kind Man takes place on the top of a mountain.',
          golden_rule_en: 'Story elements: Title (عنوان) | Characters (شخصيات) | Setting (مكان/زمان).',
          feedbackQuestion: {
            question_en: 'In "The Kind Man", who are the CHARACTERS?',
            options_en: ['On the top of a mountain', 'An old man and two young friends', 'The Kind Man', 'In a village'],
            correct: 1,
            explanation_en: 'Characters = who is in the story. An old man and two young friends.'
          }
        },
        {
          id: 'u3l2q5', type: 'multipleChoice', bloom: 'apply', difficulty: 'medium',
          question_en: 'I didn\'t ( watered – watering – water ) the plants.',
          paragraph: 'After "didn\'t" → ALWAYS use the base form of the verb. Never add -ed or -ing.',
          options_en: ['watered', 'watering', 'water', 'waters'],
          correct: 2,
          explanation_en: 'After "didn\'t" → base form "water". I didn\'t water the plants.',
          golden_rule_en: 'didn\'t + BASE verb. No -ed, no -ing, no -s after didn\'t.',
          feedbackQuestion: {
            question_en: 'Did she finish the story?',
            options_en: ['Yes, she didn\'t.', 'No, she did.', 'No, she didn\'t.', 'Yes, she didn\'t finish.'],
            correct: 2,
            explanation_en: 'Negative short answer to "Did" question: No, she didn\'t.'
          }
        },
      ]
    },
  ]
};