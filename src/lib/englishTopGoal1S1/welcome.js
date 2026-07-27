// Top Goal 1 — Welcome Unit — Grade 4 English S1
export const WELCOME_UNIT = {
  id: 'welcome',
  title_en: 'Welcome',
  title_ar: 'أهلاً وسهلاً',
  color: '#6366f1',
  icon: '🏫',
  lessons: [
    {
      id: 'wel_l1',
      title_en: 'Adjectives & Descriptions',
      title_ar: 'الصفات والأوصاف',
      page: 4,
      questions: [
        {
          id: 'wel_q1', type: 'multipleChoice', bloom: 'remember', difficulty: 'easy',
          question_en: 'The word "brilliant" means someone who is very:',
          paragraph: 'brilliant - ذكي | naughty - شقي | different - مختلف | afraid - خائف',
          options_en: ['Afraid', 'Smart / Clever', 'Naughty', 'Terrible'],
          correct: 1,
          explanation_en: '"Brilliant" means very smart or clever. Example: Ahmed is brilliant at math.',
          golden_rule_en: 'brilliant = smart/clever | naughty = badly-behaved | afraid = scared | terrible = very bad',
          feedbackQuestion: {
            question_en: 'She is very scared of spiders. She is:',
            options_en: ['brilliant', 'naughty', 'afraid', 'exciting'],
            correct: 2,
            explanation_en: '"Afraid" means scared or frightened.'
          }
        },
        {
          id: 'wel_q2', type: 'trueFalse', bloom: 'understand', difficulty: 'easy',
          question_en: 'The word "naughty" describes a child who behaves very well and follows all the rules.',
          paragraph: 'Naughty - شقي — describes a child who does not behave well.',
          options_en: ['True', 'False'],
          correct: 'false',
          explanation_en: '"Naughty" means badly-behaved, NOT well-behaved. Example: My little brother is very naughty.',
          golden_rule_en: 'naughty ≠ well-behaved. Naughty = badly-behaved / شقي.',
          feedbackQuestion: {
            question_en: '"My little brother is very ______." — He does not listen and breaks rules.',
            options_en: ['helpful', 'naughty', 'brilliant', 'shy'],
            correct: 1,
            explanation_en: '"Naughty" describes a child who does not behave properly.'
          }
        },
        {
          id: 'wel_q3', type: 'matching', bloom: 'remember', difficulty: 'easy',
          question_en: 'Match each word with its correct Arabic meaning:',
          paragraph: 'Welcome unit vocabulary: afraid, brilliant, dangerous, different, exciting, naughty, terrible, surprised',
          pairs: [
            { left: 'afraid', right: 'خائف' },
            { left: 'brilliant', right: 'ذكي' },
            { left: 'dangerous', right: 'خطير' },
            { left: 'naughty', right: 'شقي' },
          ],
          explanation_en: 'These are key adjectives from the Welcome unit.',
          golden_rule_en: 'Adjectives describe nouns. Learn them with examples: a dangerous animal, a brilliant student.',
          feedbackQuestion: {
            question_en: '"Terrible" means:',
            options_en: ['سيء جداً', 'مثير', 'جميل', 'خطير'],
            correct: 0,
            explanation_en: '"Terrible" means very bad (سيء جداً).'
          }
        },
        {
          id: 'wel_q4', type: 'multipleChoice', bloom: 'apply', difficulty: 'medium',
          question_en: 'They ( was – is – were ) at the school celebration. The correct answer is:',
          paragraph: 'was = used with I / he / she / it | were = used with you / we / they',
          options_en: ['was', 'is', 'were', 'am'],
          correct: 2,
          explanation_en: '"They" is plural, so we use "were". Rule: was → I/he/she/it | were → you/we/they.',
          golden_rule_en: 'Was → singular (I, he, she, it) | Were → plural (you, we, they).',
          feedbackQuestion: {
            question_en: 'She ( was – were – is ) in Makkah last weekend.',
            options_en: ['were', 'was', 'is', 'am'],
            correct: 1,
            explanation_en: '"She" is singular, so we use "was".'
          }
        },
        {
          id: 'wel_q5', type: 'classify', bloom: 'apply', difficulty: 'medium',
          question_en: 'Classify these words: was / were',
          paragraph: 'was = used with I / he / she / it | were = used with you / we / they',
          categories: ['Use with "was"', 'Use with "were"'],
          items: [
            { text: 'I', correct_category: 0 },
            { text: 'He', correct_category: 0 },
            { text: 'She', correct_category: 0 },
            { text: 'They', correct_category: 1 },
            { text: 'We', correct_category: 1 },
            { text: 'You', correct_category: 1 },
          ],
          explanation_en: 'was = singular (I, he, she, it) | were = plural or you (you, we, they)',
          golden_rule_en: 'Was → I/he/she/it | Were → you/we/they (the V.I.P. rule!)',
          feedbackQuestion: {
            question_en: 'The chocolate cake ( was – were ) delicious.',
            options_en: ['were', 'was', 'are', 'is'],
            correct: 1,
            explanation_en: '"The chocolate cake" is singular (it), so we use "was".'
          }
        },
        {
          id: 'wel_q6', type: 'multipleChoice', bloom: 'apply', difficulty: 'medium',
          question_en: 'My sister is ( short – shorter – shortest ) than me. Which form is correct?',
          paragraph: 'Comparative adjectives: for short adjectives, add -er + than. tall → taller, short → shorter.',
          options_en: ['short', 'shorter', 'shortest', 'more short'],
          correct: 1,
          explanation_en: 'We use comparative (-er) when comparing TWO things with "than". short → shorter.',
          golden_rule_en: 'Comparative (2 things): adjective + er + than. Superlative (3+): the + adjective + est.',
          feedbackQuestion: {
            question_en: 'Huda is ( tall – taller – tallest ) than Rana.',
            options_en: ['tall', 'taller', 'tallest', 'more tall'],
            correct: 1,
            explanation_en: 'Comparing two people → comparative: taller than.'
          }
        },
        {
          id: 'wel_q7', type: 'ordering', bloom: 'apply', difficulty: 'medium',
          question_en: 'Reorder the words to form a correct sentence: never \\ I \\ basketball \\ play',
          paragraph: 'Adverbs of frequency come BEFORE the main verb: Subject + adverb + verb.',
          items: ['I', 'never', 'play', 'basketball'],
          correctOrder: [0, 1, 2, 3],
          explanation_en: 'Correct order: I never play basketball. Adverb of frequency (never) comes before the main verb (play).',
          golden_rule_en: 'Word order: Subject + Adverb of Frequency + Main Verb + Object.',
          feedbackQuestion: {
            question_en: 'Which sentence is CORRECT?',
            options_en: ['She always sleeps early.', 'She sleeps always early.', 'Always she sleeps early.', 'She sleeps early always.'],
            correct: 0,
            explanation_en: 'The adverb of frequency "always" comes BEFORE the main verb "sleeps".'
          }
        },
        {
          id: 'wel_q8', type: 'multipleChoice', bloom: 'remember', difficulty: 'easy',
          question_en: 'I\'m ( do – did – doing ) my homework. The correct answer is:',
          paragraph: 'Present Progressive: am/is/are + verb + ing — for things happening NOW.',
          options_en: ['do', 'did', 'doing', 'done'],
          correct: 2,
          explanation_en: '"I\'m" = I am → Present Progressive. Formula: am/is/are + verb + ing. So: I\'m doing.',
          golden_rule_en: 'I\'m (I am) → Present Progressive → verb + ing. NOT "do" or "did".',
          feedbackQuestion: {
            question_en: 'She ( brush – brushes – brushing ) her teeth every morning.',
            options_en: ['brush', 'brushes', 'brushing', 'brushed'],
            correct: 1,
            explanation_en: '"Every morning" = routine → Simple Present. She (3rd person) → brushes.'
          }
        },
        {
          id: 'wel_q9', type: 'multipleChoice', bloom: 'understand', difficulty: 'medium',
          question_en: 'Hanan is the ( tall – taller – tallest ) student in my class. Which is correct?',
          paragraph: 'Superlative: the + adjective + est — used when comparing three or more. tall → the tallest.',
          options_en: ['tall', 'taller', 'tallest', 'more tall'],
          correct: 2,
          explanation_en: '"In my class" compares more than two students → superlative: the tallest.',
          golden_rule_en: 'Superlative (3+ things): the + adjective + est. Example: the tallest, the shortest.',
          feedbackQuestion: {
            question_en: 'Art is the ( interesting – more interesting – most interesting ) school subject.',
            options_en: ['interesting', 'more interesting', 'most interesting', 'interestinger'],
            correct: 2,
            explanation_en: 'Long adjective superlative: the most + adjective. The most interesting.'
          }
        },
        {
          id: 'wel_q10', type: 'fillBlank', bloom: 'apply', difficulty: 'medium',
          question_en: 'Fill in: My little brother is very _____ (he behaves badly).',
          paragraph: 'Adjectives from Welcome unit: naughty, brilliant, afraid, dangerous, exciting, terrible.',
          blanks: ['naughty'],
          wordBank: ['naughty', 'afraid', 'brilliant', 'terrible'],
          explanation_en: '"Naughty" = شقي = badly-behaved. A child who doesn\'t listen or follow rules.',
          golden_rule_en: 'naughty = badly-behaved. My little brother is very naughty.',
          feedbackQuestion: {
            question_en: '"I think fish smells _____." — The speaker dislikes the smell.',
            options_en: ['brilliant', 'terrible', 'exciting', 'naughty'],
            correct: 1,
            explanation_en: '"Terrible" = سيء جداً. Something very bad or unpleasant.'
          }
        },
      ]
    },
    {
      id: 'wel_l2',
      title_en: 'Comparative & Superlative',
      title_ar: 'المقارنة والتفضيل',
      page: 8,
      questions: [
        {
          id: 'wel2_q1', type: 'multipleChoice', bloom: 'remember', difficulty: 'easy',
          question_en: 'Talal\'s mark is ( good – better – best ) than Ali\'s mark. Which is correct?',
          paragraph: 'Comparative of good: good → better (not gooder). Irregular adjective.',
          options_en: ['good', 'better', 'best', 'more good'],
          correct: 1,
          explanation_en: '"Good" is irregular: good → better (comparative) → best (superlative). Never say "gooder"!',
          golden_rule_en: 'Irregular: good → better → best | bad → worse → worst.',
          feedbackQuestion: {
            question_en: 'I think Abha has the ( bad – worse – worst ) weather in winter in Saudi Arabia.',
            options_en: ['bad', 'worse', 'worst', 'most bad'],
            correct: 2,
            explanation_en: 'Superlative of bad = worst. Comparing all cities → the worst.'
          }
        },
        {
          id: 'wel2_q2', type: 'classify', bloom: 'understand', difficulty: 'medium',
          question_en: 'Classify: comparative or superlative?',
          paragraph: 'Comparative: comparing 2 things | Superlative: comparing 3 or more things (the best, the tallest)',
          categories: ['Comparative (مقارنة)', 'Superlative (تفضيل)'],
          items: [
            { text: 'taller than', correct_category: 0 },
            { text: 'the tallest', correct_category: 1 },
            { text: 'more interesting than', correct_category: 0 },
            { text: 'the most interesting', correct_category: 1 },
            { text: 'better than', correct_category: 0 },
            { text: 'the best', correct_category: 1 },
          ],
          explanation_en: 'Comparative uses "than" and compares 2. Superlative uses "the" and compares 3+.',
          golden_rule_en: 'Comparative + than (2 things) | The + Superlative (3+ things).',
          feedbackQuestion: {
            question_en: 'Math is _____ difficult _____ history. (comparing 2 subjects)',
            options_en: ['the most / —', 'more / than', 'most / than', 'more / of'],
            correct: 1,
            explanation_en: 'Comparing 2 subjects → comparative: more difficult than.'
          }
        },
        {
          id: 'wel2_q3', type: 'ordering', bloom: 'apply', difficulty: 'medium',
          question_en: 'Put the ordinal numbers in order: second / third / first / fourth',
          paragraph: 'Ordinal numbers: 1st = first, 2nd = second, 3rd = third, 4th = fourth.',
          items: ['first', 'second', 'third', 'fourth'],
          correctOrder: [0, 1, 2, 3],
          explanation_en: 'Ordinal order: 1st-first, 2nd-second, 3rd-third, 4th-fourth.',
          golden_rule_en: '1st=first, 2nd=second, 3rd=third, 4th=fourth, 5th=fifth, 10th=tenth, 12th=twelfth.',
          feedbackQuestion: {
            question_en: 'Ahmed was the _____ child in the race (position 1).',
            options_en: ['first', 'second', 'third', 'fourth'],
            correct: 0,
            explanation_en: '1st place = first. Ahmed was the first child.'
          }
        },
        {
          id: 'wel2_q4', type: 'trueFalse', bloom: 'understand', difficulty: 'easy',
          question_en: 'The short form of "twelfth" is written as "12th".',
          paragraph: 'Ordinal number short forms: 1st, 2nd, 3rd, 4th, 5th, 10th, 12th, 13th.',
          options_en: ['True', 'False'],
          correct: 'true',
          explanation_en: 'Correct! twelfth = 12th. The short forms use the last two letters of the word.',
          golden_rule_en: '12th = twelfth | 13th = thirteenth | 20th = twentieth.',
          feedbackQuestion: {
            question_en: 'The short form of "fifth" is:',
            options_en: ['5nd', '5th', '5rd', '5st'],
            correct: 1,
            explanation_en: 'fifth = 5th. Most ordinals use -th except 1st, 2nd, 3rd.'
          }
        },
        {
          id: 'wel2_q5', type: 'matching', bloom: 'remember', difficulty: 'easy',
          question_en: 'Match the question with the correct answer:',
          paragraph: 'General questions from Welcome unit (p.5 revision sheet)',
          pairs: [
            { left: 'What are you afraid of?', right: 'I\'m afraid of spiders.' },
            { left: 'Who is naughty in your family?', right: 'My little brother.' },
            { left: 'What school subject is more difficult?', right: 'I think math is more difficult.' },
            { left: 'What makes you surprised?', right: 'When I got gifts from my friends.' },
          ],
          explanation_en: 'These are common questions and answers from the Welcome unit.',
          golden_rule_en: 'Match questions with correct context: afraid → scared thing | naughty → person | difficult → subject.',
          feedbackQuestion: {
            question_en: '"Which food do you think smells terrible?" — The best answer is:',
            options_en: ['I think math.', 'I think fish.', 'I\'m afraid of it.', 'I go to school by bus.'],
            correct: 1,
            explanation_en: 'The question asks about food that smells terrible → I think fish.'
          }
        },
      ]
    },
  ]
};