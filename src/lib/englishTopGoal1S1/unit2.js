// Top Goal 1 — Unit 2: Chores — Grade 4 English S1
export const UNIT2 = {
  id: 'unit2',
  title_en: 'Unit 2: Chores',
  title_ar: 'الوحدة الثانية: المهام المنزلية',
  color: '#059669',
  icon: '🏠',
  lessons: [
    {
      id: 'u2_l1',
      title_en: 'Chores Vocabulary & Simple Present',
      title_ar: 'مفردات المهام والمضارع البسيط',
      page: 24,
      questions: [
        {
          id: 'u2q1', type: 'multipleChoice', bloom: 'remember', difficulty: 'easy',
          question_en: 'She ( read – reads – reading ) comic books every day.',
          paragraph: 'Simple Present: She (he/she/it) + verb + s/es | every day = routine → Simple Present',
          options_en: ['read', 'reads', 'reading', 'readed'],
          correct: 1,
          explanation_en: '"She" + 3rd person → add -s: reads. "Every day" = routine = Simple Present.',
          golden_rule_en: 'Simple Present: he/she/it + verb + s/es. Every day → always Simple Present.',
          feedbackQuestion: {
            question_en: 'My brother _____ the grass every Saturday.',
            options_en: ['cut', 'cuts', 'cutting', 'is cut'],
            correct: 1,
            explanation_en: '"My brother" = he → cuts (add -s). Simple Present for routine.'
          }
        },
        {
          id: 'u2q2', type: 'multipleChoice', bloom: 'apply', difficulty: 'medium',
          question_en: 'Khalid ( isn\'t – aren\'t - am not ) catching the bus now.',
          paragraph: 'Present Progressive negative: am not / isn\'t / aren\'t + verb + ing | Khalid = he/she/it → isn\'t',
          options_en: ['isn\'t', 'aren\'t', 'am not', 'don\'t'],
          correct: 0,
          explanation_en: '"Khalid" = he (singular) → isn\'t. Present Progressive negative: isn\'t + catching.',
          golden_rule_en: 'Negative Progressive: I + am not | he/she/it + isn\'t | you/we/they + aren\'t.',
          feedbackQuestion: {
            question_en: 'They ( isn\'t – aren\'t – am not ) visiting their grandparents today.',
            options_en: ['isn\'t', 'am not', 'aren\'t', 'doesn\'t'],
            correct: 2,
            explanation_en: '"They" is plural → aren\'t. They aren\'t visiting their grandparents today.'
          }
        },
        {
          id: 'u2q3', type: 'matching', bloom: 'remember', difficulty: 'easy',
          question_en: 'Match each chore with its Arabic meaning:',
          paragraph: 'Chores vocabulary from Unit 2: sweep the floor, take out the trash, make the bed, wash the dishes, feed the animals',
          pairs: [
            { left: 'sweep the floor', right: 'يكنس الأرض' },
            { left: 'take out the trash', right: 'يرمي النفايات' },
            { left: 'make the bed', right: 'يرتب سريره' },
            { left: 'wash the dishes', right: 'يغسل الصحون' },
          ],
          explanation_en: 'These are common household chores (مهام منزلية) from Unit 2.',
          golden_rule_en: 'Learn chores with verbs: sweep, take out, make, wash, feed, clear, cut.',
          feedbackQuestion: {
            question_en: '"Clear the table" means:',
            options_en: ['يكنس الأرض', 'ينظف الطاولة', 'يغسل الصحون', 'يرمي النفايات'],
            correct: 1,
            explanation_en: 'clear the table = ينظف الطاولة / يرفع أغراض الطاولة.'
          }
        },
        {
          id: 'u2q4', type: 'trueFalse', bloom: 'understand', difficulty: 'medium',
          question_en: 'Hind always reads stories. (Simple Present) → She is reading a story now. (Present Progressive) — Both sentences are correct.',
          paragraph: 'Simple Present = routine (always/every day) | Present Progressive = happening NOW (now/at the moment)',
          options_en: ['True', 'False'],
          correct: 'true',
          explanation_en: 'Correct! "Always reads" = routine (Simple Present) | "is reading now" = happening now (Present Progressive).',
          golden_rule_en: 'Simple Present = routine/habit | Present Progressive = happening now.',
          feedbackQuestion: {
            question_en: 'They ( play – are playing ) football today. (happening today, now)',
            options_en: ['play', 'are playing', 'plays', 'played'],
            correct: 1,
            explanation_en: '"Today/now" → Present Progressive: are playing.'
          }
        },
        {
          id: 'u2q5', type: 'multipleChoice', bloom: 'apply', difficulty: 'medium',
          question_en: '( Is – Am – Are ) they getting up now?',
          paragraph: 'Present Progressive questions: Am I? | Is he/she/it? | Are you/we/they?',
          options_en: ['Is', 'Am', 'Are', 'Do'],
          correct: 2,
          explanation_en: '"They" → Are. Present Progressive question: Are they getting up now?',
          golden_rule_en: 'Questions: Am I? | Is he/she/it? | Are you/we/they? + verb+ing?',
          feedbackQuestion: {
            question_en: '( Does – Is ) Ali catching the bus?',
            options_en: ['Does', 'Is', 'Are', 'Do'],
            correct: 1,
            explanation_en: 'Present Progressive question with he/she/it → Is. Is Ali catching the bus?'
          }
        },
      ]
    },
    {
      id: 'u2_l2',
      title_en: 'Can (offer & request)',
      title_ar: 'Can — العرض والطلب',
      page: 29,
      questions: [
        {
          id: 'u2l2q1', type: 'multipleChoice', bloom: 'remember', difficulty: 'easy',
          question_en: '"Can I help you wash the dishes?" — This is an:',
          paragraph: 'Can I...? = offer (عرض مساعدة) | Can you...? = request (طلب)',
          options_en: ['Request (طلب)', 'Offer (عرض)', 'Question (سؤال)', 'Command (أمر)'],
          correct: 1,
          explanation_en: '"Can I help you?" = I am offering to help. Can I = offer.',
          golden_rule_en: 'Can I...? = Offer (عرض مساعدة) | Can you...? = Request (طلب من شخص آخر).',
          feedbackQuestion: {
            question_en: '"Can you set the table, please?" — This is a:',
            options_en: ['offer', 'request', 'statement', 'question about ability'],
            correct: 1,
            explanation_en: '"Can you...?" = asking someone to do something = request (طلب).'
          }
        },
        {
          id: 'u2l2q2', type: 'trueFalse', bloom: 'understand', difficulty: 'easy',
          question_en: '"Can you help me set the table?" — This sentence is a REQUEST, not an offer.',
          paragraph: 'Can you...? = request (you are asking someone else) | Can I...? = offer (you are offering to help)',
          options_en: ['True', 'False'],
          correct: 'true',
          explanation_en: 'Correct! "Can you?" = asking someone else to do something = REQUEST (طلب).',
          golden_rule_en: 'Can YOU = request | Can I = offer.',
          feedbackQuestion: {
            question_en: '"Can I sweep the floor?" is an example of:',
            options_en: ['request', 'offer', 'command', 'question'],
            correct: 1,
            explanation_en: '"Can I?" = I am offering to help. This is an offer.'
          }
        },
        {
          id: 'u2l2q3', type: 'multipleChoice', bloom: 'apply', difficulty: 'medium',
          question_en: 'Grandma makes chocolate cake. (Reordered from: chocolate – Grandma – makes – cake)',
          paragraph: 'Sentence structure: Subject + Verb + Object. Grandma(subject) makes(verb) chocolate cake(object).',
          options_en: [
            'Chocolate Grandma makes cake.',
            'Makes Grandma chocolate cake.',
            'Grandma makes chocolate cake.',
            'Cake chocolate makes Grandma.'
          ],
          correct: 2,
          explanation_en: 'Correct order: Subject + Verb + Object. Grandma (subject) makes (verb) chocolate cake (object).',
          golden_rule_en: 'English sentence order: Subject + Verb + Object (SVO).',
          feedbackQuestion: {
            question_en: 'Reorder: you / my car? / Can / help / me / wash',
            options_en: [
              'Can you help me wash my car?',
              'Help you can my car wash me?',
              'You can help wash my car me?',
              'Wash can you help me my car?'
            ],
            correct: 0,
            explanation_en: 'Can you + verb + object: Can you help me wash my car?'
          }
        },
        {
          id: 'u2l2q4', type: 'matching', bloom: 'apply', difficulty: 'medium',
          question_en: 'Match the word with its opposite:',
          paragraph: 'Opposites from Unit 2 vocabulary: get dressed ↔ get undressed | get on ↔ get off | before ↔ after | clean ↔ dirty',
          pairs: [
            { left: 'get dressed', right: 'get undressed' },
            { left: 'get on', right: 'get off' },
            { left: 'before', right: 'after' },
            { left: 'clean', right: 'dirty' },
          ],
          explanation_en: 'These are opposite pairs from Unit 2.',
          golden_rule_en: 'get dressed ↔ get undressed | get on ↔ get off | clean ↔ dirty.',
          feedbackQuestion: {
            question_en: 'The opposite of "before" is:',
            options_en: ['during', 'after', 'now', 'always'],
            correct: 1,
            explanation_en: 'before ↔ after.'
          }
        },
        {
          id: 'u2l2q5', type: 'fillBlank', bloom: 'apply', difficulty: 'medium',
          question_en: 'My brother and I sweep the floor. Then, I _____ the animals.',
          paragraph: 'Chores vocabulary: takes out the trash | feeds the animals | clears the table | sweeps the floor | washes the dishes',
          blanks: ['feed'],
          wordBank: ['feed', 'takes out', 'clears', 'wash'],
          explanation_en: '"Feed the animals" = يطعم الحيوانات. I (first person) → feed (no -s).',
          golden_rule_en: 'feed the animals = يطعم الحيوانات | clear the table = ينظف الطاولة.',
          feedbackQuestion: {
            question_en: 'My brother always _____ the table after we eat.',
            options_en: ['clear', 'clears', 'clearing', 'cleared'],
            correct: 1,
            explanation_en: '"My brother" = he → clears (add -s). My brother always clears the table.'
          }
        },
      ]
    },
    {
      id: 'u2_l3',
      title_en: 'Simple Present vs Present Progressive',
      title_ar: 'المضارع البسيط مقابل المضارع المستمر',
      page: 24,
      questions: [
        {
          id: 'u2l3q1', type: 'classify', bloom: 'analyze', difficulty: 'hard',
          question_en: 'Classify sentences: Simple Present or Present Progressive?',
          paragraph: 'Simple Present = routine/habit (every day, always, usually) | Present Progressive = NOW (now, at the moment, today)',
          categories: ['Simple Present (روتين)', 'Present Progressive (الآن)'],
          items: [
            { text: 'She always drinks water.', correct_category: 0 },
            { text: 'She is drinking water now.', correct_category: 1 },
            { text: 'I go to school every day.', correct_category: 0 },
            { text: 'I am reading a book.', correct_category: 1 },
            { text: 'They play football every Friday.', correct_category: 0 },
            { text: 'They are playing football today.', correct_category: 1 },
          ],
          explanation_en: 'Key words: every day/always/usually → Simple Present | now/today/at the moment → Present Progressive.',
          golden_rule_en: 'Routine keywords: every day, always, usually → Simple Present. Now keywords: now, today, at the moment → Present Progressive.',
          feedbackQuestion: {
            question_en: '"She is studying _____." Which word fits?',
            options_en: ['every day', 'usually', 'now', 'always'],
            correct: 2,
            explanation_en: '"Is studying" = Present Progressive → fits with "now".'
          }
        },
        {
          id: 'u2l3q2', type: 'multipleChoice', bloom: 'apply', difficulty: 'medium',
          question_en: 'She sleeps early every day. → Change to negative:',
          paragraph: 'Simple Present negative: I/you/we/they + don\'t + verb | he/she/it + doesn\'t + verb (no -s on main verb)',
          options_en: [
            'She doesn\'t sleep early every day.',
            'She isn\'t sleeping early every day.',
            'She don\'t sleep early every day.',
            'She not sleeps early every day.'
          ],
          correct: 0,
          explanation_en: '"She" → doesn\'t + base verb (no -s). She doesn\'t sleep early every day.',
          golden_rule_en: 'Negative Simple Present: doesn\'t + base verb (he/she/it). don\'t + base verb (I/you/we/they).',
          feedbackQuestion: {
            question_en: 'They sleep early every day. → Negative:',
            options_en: [
              'They doesn\'t sleep early.',
              'They aren\'t sleeping early.',
              'They don\'t sleep early every day.',
              'They not sleep early.'
            ],
            correct: 2,
            explanation_en: '"They" → don\'t + base verb: They don\'t sleep early every day.'
          }
        },
        {
          id: 'u2l3q3', type: 'trueFalse', bloom: 'analyze', difficulty: 'medium',
          question_en: '"I am making the bed." (✓) — The boy in the picture is sweeping the floor. This sentence is TRUE.',
          paragraph: 'Present Progressive describes what is happening NOW. I am making the bed = I am currently making the bed.',
          options_en: ['True', 'False'],
          correct: 'false',
          explanation_en: 'FALSE! The picture shows sweeping the floor, NOT making the bed. "I am making the bed" is WRONG for that picture.',
          golden_rule_en: 'Present Progressive must match what is ACTUALLY happening in the picture.',
          feedbackQuestion: {
            question_en: 'Saleh usually clears the table. (✓ or ✗) — He is doing it regularly, not just now.',
            options_en: ['✓ True', '✗ False'],
            correct: 0,
            explanation_en: '"Usually clears" = Simple Present = routine. This is correct (✓).'
          }
        },
        {
          id: 'u2l3q4', type: 'multipleChoice', bloom: 'apply', difficulty: 'medium',
          question_en: 'Do you ( live – lives – lived ) in Jeddah?',
          paragraph: 'Simple Present question: Do I/you/we/they + verb? | Does he/she/it + verb?',
          options_en: ['live', 'lives', 'lived', 'living'],
          correct: 0,
          explanation_en: '"Do you" → use base verb (no -s). Do you live in Jeddah?',
          golden_rule_en: 'Questions: Do + you/I/we/they + base verb | Does + he/she/it + base verb.',
          feedbackQuestion: {
            question_en: 'We ( don\'t – doesn\'t – isn\'t ) visit our grandparents on Mondays.',
            options_en: ['doesn\'t', 'isn\'t', 'don\'t', 'aren\'t'],
            correct: 2,
            explanation_en: '"We" → don\'t + base verb: We don\'t visit our grandparents on Mondays.'
          }
        },
        {
          id: 'u2l3q5', type: 'ordering', bloom: 'apply', difficulty: 'medium',
          question_en: 'Reorder to make a question: you \\ the table \\ Can \\ set \\ ?',
          paragraph: 'Can questions (requests): Can + you + base verb + object?',
          items: ['Can', 'you', 'set', 'the table?'],
          correctOrder: [0, 1, 2, 3],
          explanation_en: 'Can you set the table? → Can + you + base verb + object.',
          golden_rule_en: 'Request: Can you + verb + object? | Offer: Can I + verb + object?',
          feedbackQuestion: {
            question_en: 'Can I take out the trash? — This is:',
            options_en: ['A request', 'An offer', 'A command', 'A statement'],
            correct: 1,
            explanation_en: '"Can I?" = I am offering to do something = Offer.'
          }
        },
      ]
    },
  ]
};