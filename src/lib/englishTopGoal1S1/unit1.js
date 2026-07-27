// Top Goal 1 — Unit 1: Family Events — Grade 4 English S1
export const UNIT1 = {
  id: 'unit1',
  title_en: 'Unit 1: Family Events',
  title_ar: 'الوحدة الأولى: الأحداث العائلية',
  color: '#0891b2',
  icon: '👨‍👩‍👧‍👦',
  lessons: [
    {
      id: 'u1_l1',
      title_en: 'Family Members & Vocabulary',
      title_ar: 'أفراد الأسرة والمفردات',
      page: 14,
      questions: [
        {
          id: 'u1q1', type: 'multipleChoice', bloom: 'remember', difficulty: 'easy',
          question_en: 'Your mom and dad are your:',
          paragraph: 'Family vocabulary: parents = الوالدان | grandparents = الأجداد | grandchildren = الأحفاد',
          options_en: ['grandparents', 'parents', 'grandchildren', 'cousins'],
          correct: 1,
          explanation_en: 'Mom + Dad = parents (الوالدان). Grandparents = grandfather + grandmother.',
          golden_rule_en: 'parents = mom + dad | grandparents = grandfather + grandmother.',
          feedbackQuestion: {
            question_en: 'Nada is my mom\'s mom. She is my:',
            options_en: ['aunt', 'cousin', 'grandma', 'sister'],
            correct: 2,
            explanation_en: 'Mom\'s mom = grandmother / grandma (جدة).'
          }
        },
        {
          id: 'u1q2', type: 'multipleChoice', bloom: 'remember', difficulty: 'easy',
          question_en: 'Noura likes to talk a lot. She is very:',
          paragraph: 'chatty = محب للحديث/الدردشة | shy = خجول | helpful = مساعد | lazy = كسول',
          options_en: ['helpful', 'chatty', 'strong', 'shy'],
          correct: 1,
          explanation_en: '"Chatty" means someone who loves to talk a lot (يحب الدردشة).',
          golden_rule_en: 'chatty = loves talking | shy = not comfortable talking | helpful = likes to help.',
          feedbackQuestion: {
            question_en: 'My cousin doesn\'t talk a lot. He is:',
            options_en: ['chatty', 'lazy', 'shy', 'helpful'],
            correct: 2,
            explanation_en: 'Someone who doesn\'t talk much = shy (خجول).'
          }
        },
        {
          id: 'u1q3', type: 'classify', bloom: 'apply', difficulty: 'medium',
          question_en: 'Classify the words into Formal or Informal family names:',
          paragraph: 'Formal and Informal family words (p.19): aunt/mom/dad/grandma = Formal | aunty/mommy/daddy/granny = Informal',
          categories: ['Formal (رسمي)', 'Informal (غير رسمي)'],
          items: [
            { text: 'aunt', correct_category: 0 },
            { text: 'mom', correct_category: 0 },
            { text: 'dad', correct_category: 0 },
            { text: 'grandma', correct_category: 0 },
            { text: 'aunty', correct_category: 1 },
            { text: 'mommy', correct_category: 1 },
            { text: 'daddy', correct_category: 1 },
            { text: 'granny', correct_category: 1 },
          ],
          explanation_en: 'Formal names (aunt, mom, dad) are more official. Informal (aunty, mommy, daddy) are more affectionate.',
          golden_rule_en: 'Formal: aunt, mom, dad, grandma | Informal: aunty, mommy, daddy, granny.',
          feedbackQuestion: {
            question_en: '"Granny" is the _____ version of "grandmother".',
            options_en: ['formal', 'informal', 'plural', 'correct'],
            correct: 1,
            explanation_en: 'Granny is the informal/affectionate way to say grandmother.'
          }
        },
        {
          id: 'u1q4', type: 'trueFalse', bloom: 'understand', difficulty: 'easy',
          question_en: 'My dad\'s brother is my grandfather.',
          paragraph: 'Family relationships: dad\'s brother = uncle (عم) | mom\'s brother = uncle | dad\'s father = grandfather',
          options_en: ['True', 'False'],
          correct: 'false',
          explanation_en: 'My dad\'s brother is my UNCLE (عم), NOT grandfather. Grandfather is my dad\'s dad.',
          golden_rule_en: 'dad\'s brother = uncle | dad\'s father = grandfather | dad\'s sister = aunt.',
          feedbackQuestion: {
            question_en: 'Your mom and dad are your:',
            options_en: ['grandparents', 'children', 'parents', 'cousins'],
            correct: 2,
            explanation_en: 'Mom + Dad = parents (الوالدان).'
          }
        },
        {
          id: 'u1q5', type: 'matching', bloom: 'remember', difficulty: 'easy',
          question_en: 'Match the adjective with its opposite:',
          paragraph: 'Opposites from Unit 1: weak ↔ strong | always ↔ never | husband ↔ wife',
          pairs: [
            { left: 'weak', right: 'strong' },
            { left: 'always', right: 'never' },
            { left: 'husband', right: 'wife' },
            { left: 'lazy', right: 'helpful' },
          ],
          explanation_en: 'Learning opposites helps understand adjectives better.',
          golden_rule_en: 'weak ↔ strong | always ↔ never | husband ↔ wife | lazy ↔ helpful.',
          feedbackQuestion: {
            question_en: 'Sara is not strong. She is:',
            options_en: ['lazy', 'weak', 'shy', 'chatty'],
            correct: 1,
            explanation_en: 'Not strong = weak (ضعيف).'
          }
        },
      ]
    },
    {
      id: 'u1_l2',
      title_en: 'How Often & Adverbs of Frequency',
      title_ar: 'ظروف التكرار وكم مرة',
      page: 12,
      questions: [
        {
          id: 'u1l2q1', type: 'multipleChoice', bloom: 'remember', difficulty: 'easy',
          question_en: 'Which adverb of frequency means 100% of the time?',
          paragraph: 'Adverbs of frequency: always(100%) → usually(80%) → often(60%) → sometimes(50%) → rarely(25%) → never(0%)',
          options_en: ['usually', 'often', 'always', 'sometimes'],
          correct: 2,
          explanation_en: '"Always" = 100% of the time. It is the highest frequency adverb.',
          golden_rule_en: 'always(100%) > usually(80%) > often(60%) > sometimes(50%) > rarely(25%) > never(0%).',
          feedbackQuestion: {
            question_en: '"Never" means the action happens:',
            options_en: ['100% of the time', '80% of the time', '50% of the time', '0% of the time'],
            correct: 3,
            explanation_en: 'Never = 0% = the action never happens at all.'
          }
        },
        {
          id: 'u1l2q2', type: 'multipleChoice', bloom: 'apply', difficulty: 'medium',
          question_en: 'How often ( do – does ) she walk in the park?',
          paragraph: 'How often: Do → I/you/we/they | Does → he/she/it',
          options_en: ['do', 'does', 'did', 'is'],
          correct: 1,
          explanation_en: '"She" is 3rd person singular → use "does". How often does she walk?',
          golden_rule_en: 'How often + do (I/you/we/they) | How often + does (he/she/it).',
          feedbackQuestion: {
            question_en: 'How often ( do – does ) you see your cousins?',
            options_en: ['does', 'do', 'did', 'are'],
            correct: 1,
            explanation_en: '"You" → use "do". How often do you see your cousins?'
          }
        },
        {
          id: 'u1l2q3', type: 'ordering', bloom: 'apply', difficulty: 'medium',
          question_en: 'Reorder: photos / I / take / rarely',
          paragraph: 'Word order with adverbs of frequency: Subject + Adverb + Verb + Object.',
          items: ['I', 'rarely', 'take', 'photos'],
          correctOrder: [0, 1, 2, 3],
          explanation_en: 'Correct: I rarely take photos. Adverb of frequency before main verb.',
          golden_rule_en: 'Subject + Adverb of Frequency + Main Verb + Object.',
          feedbackQuestion: {
            question_en: 'Which is CORRECT?',
            options_en: ['She feeds rarely her fish.', 'She rarely feeds her fish.', 'Rarely she feeds her fish.', 'She feeds her rarely fish.'],
            correct: 1,
            explanation_en: 'Adverb of frequency comes BEFORE the main verb: She rarely feeds her fish.'
          }
        },
        {
          id: 'u1l2q4', type: 'trueFalse', bloom: 'understand', difficulty: 'easy',
          question_en: 'Lucy likes to talk a lot. She is chatty. (True or False?)',
          paragraph: 'chatty = someone who loves to talk a lot (p.14 revision sheet)',
          options_en: ['True', 'False'],
          correct: 'true',
          explanation_en: 'Correct! chatty = loves to talk a lot. Lucy is chatty = Lucy likes to talk a lot.',
          golden_rule_en: 'chatty = محب للدردشة = loves to talk a lot.',
          feedbackQuestion: {
            question_en: 'She always sleeps early. "Always" comes:',
            options_en: ['after the verb', 'before the verb', 'at the end', 'at the beginning'],
            correct: 1,
            explanation_en: 'Adverbs of frequency come BEFORE the main verb: She always sleeps early.'
          }
        },
        {
          id: 'u1l2q5', type: 'multipleChoice', bloom: 'apply', difficulty: 'medium',
          question_en: 'Omar usually ( go – goes – going ) fishing on the weekend.',
          paragraph: 'Simple Present with he/she/it: add -s or -es to the verb.',
          options_en: ['go', 'goes', 'going', 'gone'],
          correct: 1,
          explanation_en: '"Omar" = he (3rd person singular) → add -s: goes. "goes" not "go".',
          golden_rule_en: 'Simple Present: he/she/it + verb + s/es. Omar goes, She watches, He catches.',
          feedbackQuestion: {
            question_en: 'I sometimes ( plays – playing – play ) football after school.',
            options_en: ['plays', 'playing', 'play', 'played'],
            correct: 2,
            explanation_en: '"I" → no -s added. I sometimes play football.'
          }
        },
      ]
    },
    {
      id: 'u1_l3',
      title_en: 'Possessive Pronouns (mine, yours, his, hers...)',
      title_ar: 'ضمائر الملكية',
      page: 17,
      questions: [
        {
          id: 'u1l3q1', type: 'multipleChoice', bloom: 'remember', difficulty: 'easy',
          question_en: 'It is my pen. It is ( hers – mine ).',
          paragraph: 'Possessive Pronouns: my → mine | your → yours | his → his | her → hers | our → ours | their → theirs',
          options_en: ['hers', 'mine', 'his', 'yours'],
          correct: 1,
          explanation_en: '"My" → possessive pronoun = "mine". The pen belongs to me → it is mine.',
          golden_rule_en: 'my→mine | your→yours | his→his | her→hers | our→ours | their→theirs.',
          feedbackQuestion: {
            question_en: 'It is her dress. It is:',
            options_en: ['his', 'mine', 'hers', 'yours'],
            correct: 2,
            explanation_en: '"Her" → possessive pronoun = "hers".'
          }
        },
        {
          id: 'u1l3q2', type: 'classify', bloom: 'apply', difficulty: 'medium',
          question_en: 'Classify: Possessive Adjective or Possessive Pronoun?',
          paragraph: 'Possessive Adjectives come BEFORE a noun (my book). Possessive Pronouns REPLACE the noun (it\'s mine).',
          categories: ['Possessive Adjective (before noun)', 'Possessive Pronoun (replaces noun)'],
          items: [
            { text: 'my bag', correct_category: 0 },
            { text: 'it is mine', correct_category: 1 },
            { text: 'her car', correct_category: 0 },
            { text: 'it is hers', correct_category: 1 },
            { text: 'their books', correct_category: 0 },
            { text: 'they are theirs', correct_category: 1 },
          ],
          explanation_en: 'Possessive adjective: comes before a noun (my, your, his, her). Possessive pronoun: replaces the noun (mine, yours, his, hers).',
          golden_rule_en: 'Adjective = before noun (my car). Pronoun = replaces noun (it\'s mine).',
          feedbackQuestion: {
            question_en: '"This is my book" → Replace "my book" with a possessive pronoun:',
            options_en: ['This is mine.', 'This is my.', 'This is me.', 'This is myself.'],
            correct: 0,
            explanation_en: 'my → mine. "This is mine." replaces "my book".'
          }
        },
        {
          id: 'u1l3q3', type: 'trueFalse', bloom: 'understand', difficulty: 'medium',
          question_en: '"Whose" is used to ask about frequency (how often something happens).',
          paragraph: 'Whose = used to ask about possession/ownership. How often = used to ask about frequency.',
          options_en: ['True', 'False'],
          correct: 'false',
          explanation_en: 'FALSE. "Whose" asks about OWNERSHIP. "How often" asks about frequency. Whose bag is this? → It is mine.',
          golden_rule_en: 'Whose = ownership/possession (لمن) | How often = frequency (كم مرة).',
          feedbackQuestion: {
            question_en: '"_____ bag is this?" — asking who owns it.',
            options_en: ['How often', 'Whose', 'How much', 'When'],
            correct: 1,
            explanation_en: '"Whose" asks about ownership. Whose bag is this? → It is mine.'
          }
        },
        {
          id: 'u1l3q4', type: 'matching', bloom: 'remember', difficulty: 'easy',
          question_en: 'Match the possessive adjective with its possessive pronoun:',
          paragraph: 'my→mine | your→yours | his→his | her→hers | our→ours | their→theirs',
          pairs: [
            { left: 'my', right: 'mine' },
            { left: 'your', right: 'yours' },
            { left: 'her', right: 'hers' },
            { left: 'their', right: 'theirs' },
          ],
          explanation_en: 'Possessive pronouns replace the noun. my book → it is mine.',
          golden_rule_en: 'my→mine | your→yours | his→his | her→hers | our→ours | their→theirs.',
          feedbackQuestion: {
            question_en: 'They are their books. They are:',
            options_en: ['ours', 'yours', 'theirs', 'hers'],
            correct: 2,
            explanation_en: 'their → theirs. They are theirs.'
          }
        },
        {
          id: 'u1l3q5', type: 'fillBlank', bloom: 'apply', difficulty: 'medium',
          question_en: 'always, usually, sometimes, rarely, _____ (the one that means 0%)',
          paragraph: 'Adverbs of frequency in order from most to least: always(100%) → usually → often → sometimes → rarely → never(0%)',
          blanks: ['never'],
          wordBank: ['never', 'often', 'sometimes', 'usually'],
          explanation_en: '"Never" = 0%. It completes the list from most frequent (always) to least frequent (never).',
          golden_rule_en: 'always > usually > often > sometimes > rarely > never.',
          feedbackQuestion: {
            question_en: 'I _____ forget to feed my fish (0% - it never happens).',
            options_en: ['always', 'usually', 'never', 'sometimes'],
            correct: 2,
            explanation_en: 'never = 0% = the action does not happen at all.'
          }
        },
      ]
    },
  ]
};