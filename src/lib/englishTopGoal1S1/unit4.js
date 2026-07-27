// Top Goal 1 — Unit 4: After-School Fun — Grade 4 English S1
export const UNIT4 = {
  id: 'unit4',
  title_en: 'Unit 4: After-School Fun',
  title_ar: 'الوحدة الرابعة: نشاطات ما بعد المدرسة',
  color: '#e91e8c',
  icon: '⚽',
  lessons: [
    {
      id: 'u4_l1',
      title_en: 'After-School Activities & Adverbs',
      title_ar: 'أنشطة ما بعد المدرسة والأحوال',
      page: 52,
      questions: [
        {
          id: 'u4q1', type: 'multipleChoice', bloom: 'remember', difficulty: 'easy',
          question_en: 'We ( plant – planted – plants ) flowers last weekend.',
          paragraph: 'Past Simple: last weekend = past time. plant → planted (regular: +ed).',
          options_en: ['plant', 'planted', 'plants', 'planting'],
          correct: 1,
          explanation_en: '"Last weekend" = past → planted (plant + ed).',
          golden_rule_en: 'last weekend/yesterday/last night → Simple Past. plant → planted.',
          feedbackQuestion: {
            question_en: 'He ( go – goes – went ) shopping yesterday.',
            options_en: ['go', 'goes', 'went', 'going'],
            correct: 2,
            explanation_en: '"Yesterday" = past → went (irregular: go → went).'
          }
        },
        {
          id: 'u4q2', type: 'matching', bloom: 'remember', difficulty: 'easy',
          question_en: 'Match each adjective with its adverb form:',
          paragraph: 'Adverbs: add -ly to adjectives. happy→happily (y→ily) | slow→slowly | careful→carefully | lucky→luckily',
          pairs: [
            { left: 'happy', right: 'happily' },
            { left: 'slow', right: 'slowly' },
            { left: 'careful', right: 'carefully' },
            { left: 'lucky', right: 'luckily' },
          ],
          explanation_en: 'Adverbs describe HOW an action is done. Adjective + ly = adverb. y → ily for words ending in y.',
          golden_rule_en: 'Adjective → Adverb: +ly. Adjectives ending in -y: y→ily. quickly, happily, carefully, loudly.',
          feedbackQuestion: {
            question_en: 'The adverb form of "quick" is:',
            options_en: ['quickier', 'quickly', 'quickest', 'quickily'],
            correct: 1,
            explanation_en: 'quick + ly = quickly. (No -y at end, just add -ly).'
          }
        },
        {
          id: 'u4q3', type: 'multipleChoice', bloom: 'apply', difficulty: 'medium',
          question_en: 'He wants to win the race, so he\'s running ( quick – quickly – quicks ).',
          paragraph: 'Adverbs modify verbs and adjectives. "Running" is a verb → describe HOW he runs = quickly.',
          options_en: ['quick', 'quickly', 'quicks', 'quicker'],
          correct: 1,
          explanation_en: 'Running (verb) → how? quickly (adverb). Adverbs modify verbs. quick is adjective, quickly is adverb.',
          golden_rule_en: 'Adverb modifies a verb: He runs quickly. She talks loudly. They work carefully.',
          feedbackQuestion: {
            question_en: 'He walks _____. (opposite of quickly)',
            options_en: ['quick', 'quickly', 'slowly', 'careful'],
            correct: 2,
            explanation_en: 'Opposite of quickly = slowly. He walks slowly.'
          }
        },
        {
          id: 'u4q4', type: 'classify', bloom: 'apply', difficulty: 'medium',
          question_en: 'Classify: adjective or adverb?',
          paragraph: 'Adjectives describe NOUNS (a quick runner). Adverbs describe VERBS (he runs quickly).',
          categories: ['Adjective (صفة)', 'Adverb (حال)'],
          items: [
            { text: 'quickly', correct_category: 1 },
            { text: 'loud', correct_category: 0 },
            { text: 'loudly', correct_category: 1 },
            { text: 'careful', correct_category: 0 },
            { text: 'carefully', correct_category: 1 },
            { text: 'slow', correct_category: 0 },
          ],
          explanation_en: 'Adjective: describes a noun (loud music). Adverb (usually -ly): describes how an action is done (she talks loudly).',
          golden_rule_en: 'Adjective = describes noun | Adverb (-ly) = describes verb.',
          feedbackQuestion: {
            question_en: 'She talks _____. (we need a word describing HOW she talks)',
            options_en: ['loud', 'quietly', 'quiet', 'slow'],
            correct: 1,
            explanation_en: 'We need an ADVERB to describe the verb "talks". quietly = adverb (quietly).'
          }
        },
        {
          id: 'u4q5', type: 'multipleChoice', bloom: 'remember', difficulty: 'easy',
          question_en: '"Dominoes" is a type of:',
          paragraph: 'After-school activities vocabulary: board games = dominoes/chess/checkers | outdoor activities = dodgeball, hide and seek | indoor activities = vlogging, texting, making models',
          options_en: ['outdoor sport', 'board game', 'musical instrument', 'school subject'],
          correct: 1,
          explanation_en: 'Dominoes is a board game (لعبة لوحية).',
          golden_rule_en: 'Board games: dominoes, chess, checkers | Outdoor: dodgeball, hide and seek, run in the park.',
          feedbackQuestion: {
            question_en: '"Vlogging" means:',
            options_en: ['playing football', 'making video blogs/recording videos', 'reading books', 'playing piano'],
            correct: 1,
            explanation_en: 'Vlogging = making and posting video blogs online (يصور فلوق).'
          }
        },
      ]
    },
    {
      id: 'u4_l2',
      title_en: 'Conjunctions (and, but, so, because, when)',
      title_ar: 'أدوات الربط',
      page: 53,
      questions: [
        {
          id: 'u4l2q1', type: 'multipleChoice', bloom: 'understand', difficulty: 'medium',
          question_en: 'She can run, ( but – and – so ) she can\'t swim.',
          paragraph: 'but = used to show contrast/opposite idea. and = addition. so = result. because = reason. when = time.',
          options_en: ['and', 'but', 'so', 'because'],
          correct: 1,
          explanation_en: '"But" shows contrast. She can run (positive) BUT she can\'t swim (negative/contrast).',
          golden_rule_en: 'but = لكن (contrast) | and = و (addition) | so = لذلك (result) | because = لأن (reason) | when = عندما (time).',
          feedbackQuestion: {
            question_en: 'I am hungry, ( and – but – so ) I order a burger.',
            options_en: ['and', 'but', 'so', 'because'],
            correct: 2,
            explanation_en: '"So" shows result. I am hungry (cause) → so I order a burger (result).'
          }
        },
        {
          id: 'u4l2q2', type: 'classify', bloom: 'apply', difficulty: 'hard',
          question_en: 'Match the conjunction with its use:',
          paragraph: 'Conjunctions (p.53): but=contrast | and=addition | so=result | because=reason | when=time',
          categories: ['Shows CONTRAST (تناقض)', 'Shows REASON (سبب)', 'Shows RESULT (نتيجة)'],
          items: [
            { text: 'She is smart, but she is lazy.', correct_category: 0 },
            { text: 'I go to hospital because I am sick.', correct_category: 1 },
            { text: 'She studied hard, so she passed.', correct_category: 2 },
            { text: 'It was late, so we went home.', correct_category: 2 },
            { text: 'I stayed home because it was raining.', correct_category: 1 },
            { text: 'I like soccer, but I don\'t like tennis.', correct_category: 0 },
          ],
          explanation_en: 'but = contrast | because = reason (why?) | so = result (what happened next?).',
          golden_rule_en: 'but(لكن)=contrast | because(لأن)=reason | so(لذلك)=result.',
          feedbackQuestion: {
            question_en: 'I can speak Arabic ( and – but – so ) English.',
            options_en: ['but', 'so', 'and', 'because'],
            correct: 2,
            explanation_en: '"And" adds information: Arabic AND English (both languages, no contrast).'
          }
        },
        {
          id: 'u4l2q3', type: 'trueFalse', bloom: 'understand', difficulty: 'easy',
          question_en: '"I go to the hospital because I am sick." — "because" introduces the REASON.',
          paragraph: '"because" = لأن = introduces the reason/cause for something.',
          options_en: ['True', 'False'],
          correct: 'true',
          explanation_en: 'Correct! "because" introduces the reason. Why do I go to the hospital? → because I am sick.',
          golden_rule_en: 'because = لأن (introduces the reason/cause).',
          feedbackQuestion: {
            question_en: 'I go swimming ( when – because – and ) playing tennis on Saturdays.',
            options_en: ['because', 'when', 'and', 'but'],
            correct: 2,
            explanation_en: '"And" connects two activities: swimming AND playing tennis.'
          }
        },
        {
          id: 'u4l2q4', type: 'multipleChoice', bloom: 'apply', difficulty: 'medium',
          question_en: 'He ( sleeps – slept ) late last night.',
          paragraph: 'Past Simple: last night = past time. sleep is irregular: sleep → slept.',
          options_en: ['sleeps', 'slept', 'sleeping', 'sleep'],
          correct: 1,
          explanation_en: '"Last night" = past → slept. sleep is IRREGULAR: sleep → slept (not "sleeped").',
          golden_rule_en: 'Irregular: sleep → slept | see → saw | go → went | take → took.',
          feedbackQuestion: {
            question_en: 'She ( didn\'t see – didn\'t saw ) a movie.',
            options_en: ['didn\'t saw', 'didn\'t see', 'doesn\'t see', 'didn\'t seeing'],
            correct: 1,
            explanation_en: 'After "didn\'t" → base form: see. didn\'t see (NOT didn\'t saw).'
          }
        },
        {
          id: 'u4l2q5', type: 'multipleChoice', bloom: 'understand', difficulty: 'medium',
          question_en: '"When I was a child, I loved playing outside." — "when" introduces:',
          paragraph: '"when" = عندما / متى = used to express the TIME something happened.',
          options_en: ['a reason', 'a result', 'a contrast', 'a time'],
          correct: 3,
          explanation_en: '"When" introduces the TIME. When I was a child = at the time I was a child.',
          golden_rule_en: 'when = عندما (time). Used to describe WHEN something happened.',
          feedbackQuestion: {
            question_en: '"When do you do the activity?" — The best answer is:',
            options_en: ['Yes, I do.', 'I usually do it on the weekend.', 'Because I like it.', 'I go swimming.'],
            correct: 1,
            explanation_en: '"When" asks about time → I usually do it on the weekend (answers WHEN).'
          }
        },
      ]
    },
    {
      id: 'u4_l3',
      title_en: 'Verb + to + Infinitive & Gerund (-ing)',
      title_ar: 'فعل + to + مصدر | الجيرند (-ing)',
      page: 60,
      questions: [
        {
          id: 'u4l3q1', type: 'multipleChoice', bloom: 'remember', difficulty: 'medium',
          question_en: 'Fatima didn\'t ( wrote – write – writing ) stories on Saturday.',
          paragraph: 'After "didn\'t" → base form. write is irregular (wrote in past). After didn\'t → write (base).',
          options_en: ['wrote', 'write', 'writing', 'writes'],
          correct: 1,
          explanation_en: 'After "didn\'t" → base form: write. Fatima didn\'t write stories on Saturday.',
          golden_rule_en: 'didn\'t + BASE verb. No past form (-ed) and no -ing after didn\'t.',
          feedbackQuestion: {
            question_en: 'Fatima ( wrote – write – writing ) stories last Saturday.',
            options_en: ['write', 'wrote', 'writing', 'writes'],
            correct: 1,
            explanation_en: 'Last Saturday = past. write is irregular → wrote.'
          }
        },
        {
          id: 'u4l3q2', type: 'classify', bloom: 'apply', difficulty: 'hard',
          question_en: 'Does the verb take "to + infinitive" or "gerund (-ing)"?',
          paragraph: 'Verb + to + infinitive: want, need, plan, decide, forget, try | Verb + gerund (-ing): enjoy, avoid, finish, keep, prefer, like',
          categories: ['Verb + to + infinitive', 'Verb + gerund (-ing)'],
          items: [
            { text: 'I want to eat pizza.', correct_category: 0 },
            { text: 'I enjoy reading books.', correct_category: 1 },
            { text: 'She decided to learn English.', correct_category: 0 },
            { text: 'He keeps asking questions.', correct_category: 1 },
            { text: 'They plan to travel.', correct_category: 0 },
            { text: 'She avoids talking loudly.', correct_category: 1 },
          ],
          explanation_en: 'want/need/plan/decide/forget + to + infinitive. enjoy/avoid/finish/keep + gerund (-ing).',
          golden_rule_en: 'want/plan/decide + to + verb | enjoy/avoid/finish + verb + ing.',
          feedbackQuestion: {
            question_en: 'Sara likes _____ models.',
            options_en: ['to make / making (both ok)', 'made', 'makes', 'to making'],
            correct: 0,
            explanation_en: '"like" can take both: to make OR making. Sara likes making/to make models.'
          }
        },
        {
          id: 'u4l3q3', type: 'trueFalse', bloom: 'understand', difficulty: 'medium',
          question_en: '"Could" is the past form of "can" and is used to talk about ability in the past.',
          paragraph: 'Could = past of can. He could swim when he was nine. = He was able to swim in the past.',
          options_en: ['True', 'False'],
          correct: 'true',
          explanation_en: 'Correct! Could = past of can. Used for past ability: He could swim when he was nine.',
          golden_rule_en: 'can (present ability) → could (past ability). He can swim now. He could swim last year.',
          feedbackQuestion: {
            question_en: '"He couldn\'t find his keys yesterday." — couldn\'t means:',
            options_en: ['was able to', 'was not able to', 'is not able to', 'will not be able to'],
            correct: 1,
            explanation_en: 'couldn\'t = could not = was not able to. He couldn\'t find his keys = He was not able to find them.'
          }
        },
        {
          id: 'u4l3q4', type: 'multipleChoice', bloom: 'apply', difficulty: 'medium',
          question_en: 'Did he ( see – saw – seeing ) a movie last night?',
          paragraph: 'Past Simple question: Did + subject + BASE form? | see is irregular: saw (past). After Did → base form: see.',
          options_en: ['saw', 'see', 'seeing', 'seen'],
          correct: 1,
          explanation_en: 'After "Did" → base form: see. Did he see a movie? (NOT "Did he saw").',
          golden_rule_en: 'Past question: Did + subject + BASE verb. Never use past form after "did".',
          feedbackQuestion: {
            question_en: 'Did you ( take – took ) photos in the park?',
            options_en: ['took', 'take', 'taking', 'taken'],
            correct: 1,
            explanation_en: 'After "Did" → base form: take. Did you take photos? (NOT "Did you took").'
          }
        },
        {
          id: 'u4l3q5', type: 'matching', bloom: 'apply', difficulty: 'medium',
          question_en: 'Match the question with its best answer:',
          paragraph: 'After-school activities questions and answers (p.46 revision sheet)',
          pairs: [
            { left: 'Do you want to play hide and seek?', right: 'No, I prefer to play board games.' },
            { left: 'What activities do you do in your free time?', right: 'I usually do it on the weekend.' },
            { left: 'Did you go shopping on Saturday?', right: 'No, I didn\'t.' },
            { left: 'Why did you go to the shopping mall?', right: 'Because I had to buy clothes.' },
          ],
          explanation_en: 'Match using context: prefer → alternative | when → time | did... → yes/no | why → because.',
          golden_rule_en: 'Why → because (reason) | Did → Yes/No | Do you want → Yes/No or preference.',
          feedbackQuestion: {
            question_en: '"Why did you go to the shopping mall?" — The best answer:',
            options_en: ['I go swimming.', 'Yes, I did.', 'Because I had to buy clothes.', 'I usually do it on weekends.'],
            correct: 2,
            explanation_en: '"Why" asks for a reason → "because I had to buy clothes" is the reason.'
          }
        },
      ]
    },
  ]
};