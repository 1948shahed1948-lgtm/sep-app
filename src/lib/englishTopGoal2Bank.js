// بنك أسئلة TopGoal 2 — اللغة الإنجليزية — الصف الخامس الابتدائي (الفصل الثاني)
// المصدر: TopGoal 2 Student Book | McGraw-Hill 2025-1447
// Units 2-4 are in englishTopGoal2Bank_Units2to4.js

import { TOPGOAL2_UNITS_2TO4 } from '@/lib/englishTopGoal2Bank_Units2to4';
import { TOPGOAL2_WB_UNITS_3TO7 } from '@/lib/englishTopGoal2Bank_WB3to7';

const TOPGOAL2_UNITS_CORE = [
  // ══════════════════════════════════════════════════════
  // Welcome Unit — Time, Numbers, Calendar
  // ══════════════════════════════════════════════════════
  {
    id: 'w',
    title_ar: 'Welcome — Time, Calendar & Numbers',
    color: 'from-teal-600 to-teal-400',
    icon: '📅',
    lessons: [
      {
        id: 'w_l1',
        title_ar: 'Calendar, Time & Numbers (p120–123)',
        questions: [
          {
            type: 'yesno',
            q: 'February is the shortest MONTH of the year.',
            correct: true,
            explanation: 'From p121: "February is the shortest month of the year."',
            golden_rule: 'Use "month" for a period of time (January…December) and "date" for a specific day.',
          },
          {
            type: 'mc',
            q: 'Choose the correct word: "I hate getting up ___ in the morning."',
            options: ['past', 'late', 'early', 'long'],
            correct: 2,
            explanation: 'From p121: "I hate getting up early in the morning." Early = before the usual time.',
            golden_rule: '"Early" means before the usual time; "late" means after the usual time.',
          },
          {
            type: 'mc',
            q: 'Which word completes: "Mom and Dad left the house an hour ___."',
            options: ['past', 'early', 'long', 'ago'],
            correct: 3,
            explanation: 'From p121: "Mom and Dad left the house an hour ago." Ago = a time period before now.',
            golden_rule: '"Ago" is used with Simple Past to show how long before now something happened.',
          },
          {
            type: 'ordering',
            q: 'Order the months of the year (1–6):',
            items: ['March', 'January', 'April', 'February', 'June', 'May'],
            correct_order: [1, 3, 0, 2, 5, 4],
            explanation: 'From p121: Months in order: January, February, March, April, May, June.',
            golden_rule: 'There are 12 months; always start with January and end with December.',
          },
          {
            type: 'matching',
            q: 'Match each number to its word form (p121):',
            pairs: [
              { left: '219', right: 'two hundred nineteen' },
              { left: '384', right: 'three hundred eighty-four' },
              { left: '652', right: 'six hundred fifty-two' },
              { left: '1,000', right: 'one thousand' },
            ],
            explanation: 'From p121: Numbers in words exercise.',
            golden_rule: 'Hundreds: say the digit + "hundred", then the rest of the number.',
          },
          {
            type: 'word_order',
            q: 'Order the words to make a correct sentence (p120):',
            words: ['three', 'from', 'November', 'is', 'now', 'months'],
            correct_sentence: 'November is three months from now',
            explanation: 'From the Welcome unit dialogue p120.',
            golden_rule: 'Use "months from now" to talk about future months.',
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════
  // Unit 1 — Personal Interests
  // ══════════════════════════════════════════════════════
  {
    id: 'u1',
    title_ar: 'Unit 1 — Personal Interests',
    color: 'from-violet-600 to-violet-400',
    icon: '⭐',
    lessons: [
      {
        id: 'u1_l1',
        title_ar: 'Vocabulary: Adjectives (p124–125)',
        questions: [
          {
            type: 'mc',
            q: 'Which adjective means "makes a lot of noise"?',
            options: ['lovely', 'noisy', 'tidy', 'lucky'],
            correct: 1,
            explanation: 'From p124: "n_____: makes a lot of noise" → noisy.',
            golden_rule: '"Noisy" describes something that produces a lot of sound.',
          },
          {
            type: 'mc',
            q: 'Which adjective means "clean and organized"?',
            options: ['messy', 'noisy', 'tidy', 'unlucky'],
            correct: 2,
            explanation: 'From p124: "t___y: clean and organized" → tidy.',
            golden_rule: 'Tidy = organized and clean. Its opposite is messy (untidy).',
          },
          {
            type: 'classify',
            q: 'Classify these adjectives as POSITIVE or NEGATIVE (p124–130):',
            categories: ['Positive', 'Negative'],
            items: [
              { text: 'wonderful', correct_cat: 0 },
              { text: 'horrible', correct_cat: 1 },
              { text: 'friendly', correct_cat: 0 },
              { text: 'unfriendly', correct_cat: 1 },
              { text: 'lucky', correct_cat: 0 },
              { text: 'messy', correct_cat: 1 },
            ],
            explanation: 'From Unit 1 vocabulary (p124–130).',
            golden_rule: 'The prefix "un-" often makes an adjective negative: lucky → unlucky, tidy → untidy.',
          },
          {
            type: 'yesno',
            q: '"Popular" means someone or something that a lot of people like.',
            correct: true,
            explanation: 'From p124: "p_____r: someone who a lot of people like" → popular.',
            golden_rule: '"Popular" describes something enjoyed or liked by many people.',
          },
          {
            type: 'matching',
            q: 'Match each adjective to its meaning (p124):',
            pairs: [
              { left: 'enormous', right: 'very big' },
              { left: 'excellent', right: 'done very well' },
              { left: 'frightening', right: 'scary' },
              { left: 'lovely', right: 'pretty or beautiful' },
            ],
            explanation: 'From Unit 1 vocabulary p124.',
            golden_rule: 'Adjectives describe people, places, and things. Learn them with examples!',
          },
          {
            type: 'word_order',
            q: 'Order the words to make a sentence (p125):',
            words: ["don't", 'I', 'they', 'movies', 'scary', 'because', 'like', 'are', 'frightening'],
            correct_sentence: "I don't like scary movies because they are frightening",
            explanation: 'From p125: sample sentence using "frightening".',
            golden_rule: 'Use "because" to explain the reason for a feeling or opinion.',
          },
        ],
      },
      {
        id: 'u1_l2',
        title_ar: 'Grammar: Simple Past (p126–127)',
        questions: [
          {
            type: 'mc',
            q: 'Choose the correct form: "My family and I always ___ swimming on Saturdays."',
            options: ['go', 'went', 'gone', 'goes'],
            correct: 1,
            explanation: 'From p126: "My family and I always went swimming on Saturdays." Past habit = Simple Past.',
            golden_rule: 'Use Simple Past for completed actions or habits in the past.',
          },
          {
            type: 'mc',
            q: 'Choose the correct form: "I ___ the new spaceship movie!"',
            options: ['watch', 'watches', 'watched', 'watching'],
            correct: 2,
            explanation: 'From p126: "I watched the new spaceship movie!"',
            golden_rule: 'Add -ed to regular verbs for Simple Past: watch → watched.',
          },
          {
            type: 'classify',
            q: 'Classify these verbs as REGULAR or IRREGULAR in Simple Past (p122):',
            categories: ['Regular (-ed)', 'Irregular'],
            items: [
              { text: 'watch → watched', correct_cat: 0 },
              { text: 'go → went', correct_cat: 1 },
              { text: 'play → played', correct_cat: 0 },
              { text: 'buy → bought', correct_cat: 1 },
              { text: 'love → loved', correct_cat: 0 },
              { text: 'take → took', correct_cat: 1 },
            ],
            explanation: 'From Workbook p122: Irregular Verbs chart.',
            golden_rule: 'Regular verbs add -ed. Irregular verbs change completely: go→went, buy→bought.',
          },
          {
            type: 'yesno',
            q: 'The Simple Past negative is formed with "did not (didn\'t) + base verb".',
            correct: true,
            explanation: 'From p126: "I didn\'t see you…" in past.',
            golden_rule: 'Negative Simple Past: Subject + didn\'t + base verb (no -ed).',
          },
          {
            type: 'ordering',
            q: 'Order these words to make a Simple Past question (p127):',
            items: ['What', 'sports', 'do', 'you', 'play', '?'],
            correct_order: [0, 1, 3, 2, 4, 5],
            explanation: 'From p127: "What sports did you play?" (past).',
            golden_rule: 'Past questions: Did + subject + base verb? / What + did + subject + base verb?',
          },
          {
            type: 'word_order',
            q: 'Order the words to make a past sentence (p126):',
            words: ['to', 'the', 'theater', 'I', 'movie', 'went'],
            correct_sentence: 'I went to the movie theater',
            explanation: 'From p126: "I went to the movie theater."',
            golden_rule: '"Go" is irregular: go → went (past).',
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════
  // Unit 5 — Storylines
  // ══════════════════════════════════════════════════════
  {
    id: 'u5',
    title_ar: 'Unit 5 — Storylines',
    color: 'from-purple-600 to-purple-400',
    icon: '📖',
    lessons: [
      {
        id: 'u5_l1',
        title_ar: 'Vocabulary: Story Types & Words (p58–59, p64)',
        questions: [
          {
            type: 'mc',
            q: 'Which genre features detectives and a twist in the plot? (p59)',
            options: ['comedy', 'mystery', 'musical', 'western'],
            correct: 1,
            explanation: 'From p59: "Is it a mystery with detectives and a twist in the plot?"',
            golden_rule: 'A mystery story has detectives trying to solve a puzzle or crime.',
          },
          {
            type: 'mc',
            q: 'Choose the correct word: "The wooden horse ___ to be a real horse." (p64)',
            options: ['whispered', 'wished', 'appeared', 'decided'],
            correct: 1,
            explanation: 'From p64: "wished to be a real horse." Wished = wanted something impossible.',
            golden_rule: '"Wish" expresses a desire for something impossible or unlikely.',
          },
          {
            type: 'classify',
            q: 'Classify these story types: REAL-LIFE or FANTASY? (p58–59)',
            categories: ['Real-life / Based on facts', 'Fantasy / Imaginary'],
            items: [
              { text: 'documentary', correct_cat: 0 },
              { text: 'fairy tale', correct_cat: 1 },
              { text: 'western (set in real history)', correct_cat: 0 },
              { text: 'sci-fi (aliens & space)', correct_cat: 1 },
              { text: 'animation', correct_cat: 1 },
            ],
            explanation: 'From p58–59: story genre vocabulary.',
            golden_rule: 'Documentaries present facts; fairy tales and sci-fi involve imaginary elements.',
          },
          {
            type: 'matching',
            q: 'Match each story type to its description (p58–59):',
            pairs: [
              { left: 'comedy', right: 'makes you laugh a lot' },
              { left: 'horror', right: 'will make you scream' },
              { left: 'musical', right: 'puts a smile on your face with songs' },
              { left: 'thriller', right: 'makes you see monsters in dreams' },
            ],
            explanation: 'From p59 chant: story type descriptions.',
            golden_rule: 'Learn story genres with their key features to understand what to expect.',
          },
          {
            type: 'yesno',
            q: 'In "The Book Presentation" story (p62), Connor preferred watching movies to reading books.',
            correct: true,
            explanation: 'From p62: "But Connor didn\'t like books. He preferred watching movies."',
            golden_rule: 'Reading for character details helps you understand motivations in a story.',
          },
          {
            type: 'word_order',
            q: 'Order the words to make a suggestion from the story (p65):',
            words: ["don't", 'why', 'storyboard', 'our', 'on', 'work', 'we'],
            correct_sentence: "why don't we work on our storyboard",
            explanation: 'From p65: "Why don\'t we work on our storyboard?"',
            golden_rule: '"Why don\'t we + base verb" is a common way to suggest doing something together.',
          },
        ],
      },
      {
        id: 'u5_l2',
        title_ar: 'Grammar: Past Progressive & Suggestions (p60–61, p65)',
        questions: [
          {
            type: 'mc',
            q: 'Choose the correct form: "What about ___ a movie?" (p65)',
            options: ['watch', 'watched', 'watches', 'watching'],
            correct: 3,
            explanation: 'From p65: "What about watching a movie?" After "What about" / "How about", use verb + -ing.',
            golden_rule: 'How about / What about + verb-ing to make suggestions.',
          },
          {
            type: 'mc',
            q: 'Choose the correct form: "I ___ a movie when you called." (p60–61)',
            options: ['watched', 'was watching', 'am watching', 'have watched'],
            correct: 1,
            explanation: 'From p60–61: Past Progressive (was/were + -ing) for ongoing past actions.',
            golden_rule: 'Past Progressive (was/were + -ing) describes an ongoing action at a past moment.',
          },
          {
            type: 'classify',
            q: 'Classify these suggestion forms as CORRECT or INCORRECT (p65):',
            categories: ['Correct ✅', 'Incorrect ❌'],
            items: [
              { text: 'How about watching a horror movie?', correct_cat: 0 },
              { text: "Why don't we going for a walk?", correct_cat: 1 },
              { text: "Why don't we pick a drama?", correct_cat: 0 },
              { text: 'How about go to the park?', correct_cat: 1 },
            ],
            explanation: 'From p65: Suggestion forms.',
            golden_rule: '"How about + -ing" but "Why don\'t we + base verb" (no -ing).',
          },
          {
            type: 'yesno',
            q: '"How about seeing a horror movie?" is a grammatically correct suggestion. (p65)',
            correct: true,
            explanation: 'From p65: How about + verb-ing ✓.',
            golden_rule: 'After "How about" and "What about", always use verb + -ing.',
          },
          {
            type: 'matching',
            q: 'Match each sentence to the correct grammar rule (p60):',
            pairs: [
              { left: 'I was watching a movie!', right: 'Past Progressive (ongoing action)' },
              { left: 'We were not singing in the musical.', right: 'Past Progressive (negative)' },
              { left: 'Were you enjoying the cartoon?', right: 'Past Progressive (question)' },
              { left: 'Yes, I was.', right: 'Short answer to Past Progressive question' },
            ],
            explanation: 'From p60: Past Progressive grammar chart.',
            golden_rule: 'Past Progressive: was/were + verb-ing for ongoing past actions.',
          },
          {
            type: 'word_order',
            q: 'Order the words to make a Past Progressive sentence (p61):',
            words: ['project', 'my', 'I', 'working', 'on', 'was'],
            correct_sentence: 'I was working on my project',
            explanation: 'From p61: "Oh, I was working on my project and needed some help."',
            golden_rule: 'Structure: Subject + was/were + verb-ing.',
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════
  // Unit 6 — Outdoor Activities
  // ══════════════════════════════════════════════════════
  {
    id: 'u6',
    title_ar: 'Unit 6 — Outdoor Activities',
    color: 'from-teal-600 to-green-500',
    icon: '🏕️',
    lessons: [
      {
        id: 'u6_l1',
        title_ar: 'Vocabulary: Outdoor Activities & Equipment (p70–71, p76)',
        questions: [
          {
            type: 'mc',
            q: 'Which activity involves sitting still and waiting near water? (p70)',
            options: ['camping', 'surfing', 'fishing', 'climbing'],
            correct: 2,
            explanation: 'From p70: fishing — waiting by the water with a fishing rod.',
            golden_rule: 'Fishing involves sitting quietly and waiting for fish to take the bait.',
          },
          {
            type: 'mc',
            q: 'What equipment do you need for camping? (p70)',
            options: ['surfboard and wetsuit', 'tent and sleeping bag', 'fishing rod and bait', 'helmet and rope'],
            correct: 1,
            explanation: 'From p70: camping equipment includes tent and sleeping bag.',
            golden_rule: 'Match each outdoor activity with the right equipment.',
          },
          {
            type: 'classify',
            q: 'Classify these outdoor activities by type (p70):',
            categories: ['Water Activities 🌊', 'Land Activities 🏔️'],
            items: [
              { text: 'canoeing', correct_cat: 0 },
              { text: 'hiking', correct_cat: 1 },
              { text: 'surfing', correct_cat: 0 },
              { text: 'climbing', correct_cat: 1 },
              { text: 'fishing', correct_cat: 0 },
              { text: 'camping', correct_cat: 1 },
            ],
            explanation: 'From p70: Outdoor activities vocabulary.',
            golden_rule: 'Water activities happen in or on water; land activities happen on ground or mountains.',
          },
          {
            type: 'matching',
            q: 'Match each activity to the equipment needed (p70–71, p76):',
            pairs: [
              { left: 'camping', right: 'tent and sleeping bag' },
              { left: 'surfing', right: 'surfboard' },
              { left: 'hiking', right: 'hiking boots' },
              { left: 'rafting', right: 'raft and life jacket' },
            ],
            explanation: 'From p70–76: activities and equipment.',
            golden_rule: 'Always check what equipment you need before any outdoor activity — safety first!',
          },
          {
            type: 'yesno',
            q: 'In the story "The School Camping Trip" (p74), Riley was afraid of the dark.',
            correct: true,
            explanation: 'From p74: "They\'ll know I\'m afraid of the dark!" — Riley\'s biggest fear.',
            golden_rule: 'Reading for character details helps you understand motivations in a story.',
          },
          {
            type: 'word_order',
            q: 'Order the words to make a sentence (p71):',
            words: ['go', 'mountains', 'like', 'climbing', 'to', 'in', 'I', 'the'],
            correct_sentence: 'I like to go climbing in the mountains',
            explanation: 'From p71 chant: "I like to go climbing in the mountains."',
            golden_rule: 'Use "I like to go + activity-ing" to talk about outdoor hobbies.',
          },
        ],
      },
      {
        id: 'u6_l2',
        title_ar: 'Grammar: Simple Past vs Past Progressive & When/While (p72–73, p77)',
        questions: [
          {
            type: 'mc',
            q: 'Choose the correct form: "I ___ in my tent when I heard a bear!" (p72)',
            options: ['lay', 'was lying', 'lied', 'am lying'],
            correct: 1,
            explanation: 'From p72: "I was lying in my tent, and I heard a bear!" Long action = Past Progressive.',
            golden_rule: 'Past Progressive (was/were + -ing) for the LONG action; Simple Past for the SHORT interrupting action.',
          },
          {
            type: 'mc',
            q: 'Choose "when" or "while": "___ I heard a noise, I turned on my flashlight." (p77)',
            options: ['While', 'When', 'During', 'As'],
            correct: 1,
            explanation: 'From p77: "When I heard a noise, I turned on my flashlight." When = at the moment something happened.',
            golden_rule: '"When" introduces a short action. "While" introduces a long/ongoing action.',
          },
          {
            type: 'classify',
            q: 'Classify: LONG ACTION (Past Progressive) or SHORT ACTION (Simple Past)? (p72)',
            categories: ['Long Action — Past Progressive', 'Short Action — Simple Past'],
            items: [
              { text: 'They were hiking in the forest.', correct_cat: 0 },
              { text: 'I saw a bear!', correct_cat: 1 },
              { text: 'She wasn\'t reading the map.', correct_cat: 0 },
              { text: 'He fell off the bike.', correct_cat: 1 },
            ],
            explanation: 'From p72: Simple Past vs Past Progressive.',
            golden_rule: 'Past Progressive = ongoing/background action. Simple Past = quick/completed action.',
          },
          {
            type: 'yesno',
            q: '"While I was hiking, they were climbing and taking photos." is correct. (p77)',
            correct: true,
            explanation: 'From p77: Both actions ongoing at same time → both Past Progressive with "while" ✓.',
            golden_rule: '"While" connects two ongoing (Past Progressive) actions happening at the same time.',
          },
          {
            type: 'matching',
            q: 'Match the sentence halves (p72–73, p77):',
            pairs: [
              { left: 'I was lying in the tent', right: 'when I heard a bear.' },
              { left: 'While I was hiking,', right: 'they were climbing.' },
              { left: 'She fell off the bike', right: 'when she was wearing a helmet.' },
              { left: 'I set up the campfire', right: 'when it got dark.' },
            ],
            explanation: 'From p72–77: grammar exercises.',
            golden_rule: 'Long action (was + -ing) interrupted by short action (Simple Past).',
          },
          {
            type: 'word_order',
            q: 'Order the words to make a correct sentence (p77):',
            words: ['we', 'sitting', 'around', 'ate', 'while', 'hot', 'dogs', 'were', 'campfire', 'the'],
            correct_sentence: 'we ate hot dogs while we were sitting around the campfire',
            explanation: 'From p77: "We ate hot dogs while we were sitting around the campfire."',
            golden_rule: '"While" + Past Progressive describes the background action.',
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════
  // Unit 7 — Trips
  // ══════════════════════════════════════════════════════
  {
    id: 'u7',
    title_ar: 'Unit 7 — Trips',
    color: 'from-cyan-600 to-blue-500',
    icon: '✈️',
    lessons: [
      {
        id: 'u7_l1',
        title_ar: 'Vocabulary: Transport & Travel Words (p82–83)',
        questions: [
          {
            type: 'mc',
            q: 'What is a "passport"? (p82)',
            options: ['a large bag for clothes', 'a document you need to travel abroad', 'a road on which trains run', 'a place to board a train'],
            correct: 1,
            explanation: 'From p82: passport — a document you need to travel to another country.',
            golden_rule: 'You need a passport to travel to another country — it proves who you are.',
          },
          {
            type: 'mc',
            q: 'What is a "platform" at a train station? (p82)',
            options: ['the train itself', 'a large bag', 'the raised area where you board the train', 'the road for trains'],
            correct: 2,
            explanation: 'From p82: platform — where you wait and board a train.',
            golden_rule: 'A platform is where you wait and board a train. A terminal is the building at an airport.',
          },
          {
            type: 'matching',
            q: 'Match each travel word to its meaning (p82):',
            pairs: [
              { left: 'suitcase', right: 'a large bag for carrying clothes' },
              { left: 'railroad', right: 'a road on which trains run' },
              { left: 'passenger', right: 'a person who is traveling in a vehicle' },
              { left: 'security', right: 'the area that checks your bags at the airport' },
            ],
            explanation: 'From p82: Trips vocabulary.',
            golden_rule: 'Learn travel vocabulary to navigate airports and train stations confidently.',
          },
          {
            type: 'classify',
            q: 'Classify these as Places or Things related to travel (p82):',
            categories: ['Places 📍', 'Things 🧳'],
            items: [
              { text: 'airport terminal', correct_cat: 0 },
              { text: 'suitcase', correct_cat: 1 },
              { text: 'subway station', correct_cat: 0 },
              { text: 'passport', correct_cat: 1 },
            ],
            explanation: 'From p82: travel vocabulary.',
            golden_rule: 'Organize new vocabulary by category to remember it more easily.',
          },
          {
            type: 'yesno',
            q: 'In the story "James Goes on a Trip" (p86), James had taken a plane many times before.',
            correct: false,
            explanation: 'From p86: "He hasn\'t taken a plane before!" — first time.',
            golden_rule: 'Present Perfect negative: hasn\'t + past participle = never done before.',
          },
          {
            type: 'word_order',
            q: 'Order the words to make a sentence (p83):',
            words: ['we', 'a', 'around', 'on', 'trip', 'going', 'the', 'are', 'world'],
            correct_sentence: 'we are going on a trip around the world',
            explanation: 'From p83 chant: "We are going on a trip around the world."',
            golden_rule: 'Use "be going on a trip" to talk about planned travel.',
          },
        ],
      },
      {
        id: 'u7_l2',
        title_ar: 'Grammar: Present Perfect Simple (p84–85)',
        questions: [
          {
            type: 'mc',
            q: 'Choose the correct form: "I ___ never ___ on a plane before." (p84)',
            options: ["didn't / go", "haven't / been", "wasn't / going", "don't / been"],
            correct: 1,
            explanation: 'From p84: "He hasn\'t taken a plane before." — Present Perfect negative: haven\'t + past participle.',
            golden_rule: 'Present Perfect negative: Subject + haven\'t/hasn\'t + past participle.',
          },
          {
            type: 'mc',
            q: 'Choose the correct form: "I ___ already ___ my suitcase." (p85)',
            options: ['has / packed', 'have / packed', 'did / pack', 'was / packing'],
            correct: 1,
            explanation: 'From p85: "I have packed everything in my suitcase." — Present Perfect with "already".',
            golden_rule: '"Already" goes between have/has and the past participle.',
          },
          {
            type: 'classify',
            q: 'Classify: Simple Past or Present Perfect? (p84–85)',
            categories: ['Simple Past', 'Present Perfect'],
            items: [
              { text: 'He has called the taxi.', correct_cat: 1 },
              { text: 'We bought the tickets yesterday.', correct_cat: 0 },
              { text: 'She has not packed her suitcase.', correct_cat: 1 },
              { text: 'They traveled last summer.', correct_cat: 0 },
            ],
            explanation: 'From p84–85: Simple Past vs Present Perfect.',
            golden_rule: 'Simple Past = specific time in past. Present Perfect = experience or result in the present.',
          },
          {
            type: 'yesno',
            q: '"I have visited the beach before." is a correct Present Perfect sentence. (p84)',
            correct: true,
            explanation: 'From p84: "I have visited the beach." — Subject + have + past participle ✓.',
            golden_rule: 'Present Perfect: Subject + have/has + past participle (no specific time mentioned).',
          },
          {
            type: 'matching',
            q: 'Match each sentence to the correct Present Perfect use (p84):',
            pairs: [
              { left: 'I have visited the beach.', right: 'Past experience' },
              { left: 'She has called the taxi.', right: 'Result affecting the present' },
              { left: 'He has not packed his suitcase.', right: 'Negative: action not done yet' },
              { left: 'Have you been on the railroad?', right: 'Question about experience' },
            ],
            explanation: 'From p84: Present Perfect uses.',
            golden_rule: 'Present Perfect connects past actions to the present — experience, results, or unfinished time.',
          },
          {
            type: 'word_order',
            q: 'Order the words to make a Present Perfect sentence (p85):',
            words: ['insects', 'has', 'he', 'eaten'],
            correct_sentence: 'he has eaten insects',
            explanation: 'From p85: "He has eaten insects." — experience in the past.',
            golden_rule: 'Structure: Subject + has/have + past participle.',
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════
  // Unit 8 — Outfits
  // ══════════════════════════════════════════════════════
  {
    id: 'u8',
    title_ar: 'Unit 8 — Outfits',
    color: 'from-rose-600 to-pink-400',
    icon: '👗',
    lessons: [
      {
        id: 'u8_l1',
        title_ar: 'Vocabulary: Materials & Accessories (p100–101)',
        questions: [
          {
            type: 'mc',
            q: 'Which material comes from silkworms and is very smooth and shiny?',
            options: ['cotton', 'wool', 'silk', 'leather'],
            correct: 2,
            explanation: 'From p100: "silk" — a smooth, shiny fabric produced by silkworms.',
            golden_rule: 'Silk is a natural luxury fabric made by silkworms. It looks shiny and feels smooth.',
          },
          {
            type: 'mc',
            q: 'What is leather made from?',
            options: ['plants', 'animal skin', 'plastic', 'wool fibres'],
            correct: 1,
            explanation: 'From p100: leather — made from animal skin.',
            golden_rule: 'Leather comes from animal skin and is used for bags, belts, and shoes.',
          },
          {
            type: 'classify',
            q: 'Classify these materials as NATURAL or SYNTHETIC (p100–102):',
            categories: ['Natural', 'Synthetic'],
            items: [
              { text: 'silk', correct_cat: 0 },
              { text: 'plastic', correct_cat: 1 },
              { text: 'wool', correct_cat: 0 },
              { text: 'metal', correct_cat: 1 },
              { text: 'cotton', correct_cat: 0 },
              { text: 'gold', correct_cat: 1 },
            ],
            explanation: 'From p100–102: Natural materials come from nature; synthetic include plastic and metal.',
            golden_rule: 'Natural = from animals or plants (silk, wool, cotton, leather). Synthetic = metal, plastic.',
          },
          {
            type: 'matching',
            q: 'Match each material to what it is commonly used for (p100–102):',
            pairs: [
              { left: 'wool', right: 'warm sweaters and scarves' },
              { left: 'leather', right: 'bags, belts, and shoes' },
              { left: 'gold', right: 'rings and necklaces' },
              { left: 'wood', right: 'combs and furniture' },
            ],
            explanation: 'From p100, 102: "In the Workshop" and fashion reading text.',
            golden_rule: 'Different materials have different uses depending on their properties.',
          },
          {
            type: 'yesno',
            q: 'In Ancient Greece, people wore necklaces made of metal and stones.',
            correct: true,
            explanation: 'From p102: "In Ancient Greece, people wore necklaces made of metal and stones."',
            golden_rule: 'Jewelry has been part of human culture for thousands of years.',
          },
          {
            type: 'word_order',
            q: 'Order the words to make a sentence (p101):',
            words: ['is', 'plastic', 'of', 'made', 'spotted', 'my', 'umbrella'],
            correct_sentence: 'my spotted umbrella is made of plastic',
            explanation: 'From p101: "My spotted umbrella is made of plastic."',
            golden_rule: 'Structure: Subject + is/are + made of + material.',
          },
        ],
      },
      {
        id: 'u8_l2',
        title_ar: 'Grammar: Present Perfect & "Be Made Of" (p96–101)',
        questions: [
          {
            type: 'mc',
            q: 'Choose the correct form: "How long ___ you ___ that belt?"',
            options: ['did / have', 'have / had', 'has / have', 'do / had'],
            correct: 1,
            explanation: 'From p97/98: "How long have you had that belt?" — Present Perfect with "How long".',
            golden_rule: '"How long have you + past participle?" asks about duration from the past to now.',
          },
          {
            type: 'mc',
            q: 'Choose the correct sentence: "The earrings ___ silver."',
            options: ['are made of', 'is made of', 'made from', 'make of'],
            correct: 0,
            explanation: 'From p101: "The earrings are made of silver." — plural subject uses "are".',
            golden_rule: 'Singular: "is made of". Plural: "are made of". Always followed by the material.',
          },
          {
            type: 'classify',
            q: 'Classify these sentences as correct or incorrect (p101):',
            categories: ['Correct ✅', 'Incorrect ❌'],
            items: [
              { text: 'The necklace is made of silver.', correct_cat: 0 },
              { text: 'The shirts are made of wool.', correct_cat: 0 },
              { text: 'The spotted tie is made of metal.', correct_cat: 1 },
              { text: 'The striped umbrella is made of wood.', correct_cat: 1 },
            ],
            explanation: 'From p101: material exercises.',
            golden_rule: 'Check the material realistically — ties are not metal, umbrellas are not wood.',
          },
          {
            type: 'yesno',
            q: '"I have had my belt for about two years." is a correct Present Perfect sentence.',
            correct: true,
            explanation: 'From p98: Present Perfect + "for" expresses duration.',
            golden_rule: 'Present Perfect + "for" expresses how long something has been the case up to now.',
          },
          {
            type: 'matching',
            q: 'Match each sentence start to the correct ending (p101):',
            pairs: [
              { left: 'My spotted umbrella is made of', right: 'plastic.' },
              { left: 'This comb is made of wood and', right: 'metal.' },
              { left: 'These new earrings are made of', right: 'gold.' },
              { left: 'The shirts aren\'t made of', right: 'wool.' },
            ],
            explanation: 'From p101: material sentences.',
            golden_rule: '"Be made of" tells us the material something is made from.',
          },
          {
            type: 'word_order',
            q: 'Order the words to make a Present Perfect question (p85):',
            words: ['long', 'have', 'you', 'how', 'had', 'suitcase', 'your'],
            correct_sentence: 'how long have you had your suitcase',
            explanation: 'Present Perfect question: "How long have you had your suitcase?"',
            golden_rule: '"How long have you + past participle?" asks about duration from past to now.',
          },
        ],
      },
    ],
  },
];

export const TOPGOAL2_UNITS = [
  ...TOPGOAL2_UNITS_CORE.slice(0, 2),    // Welcome + Unit 1
  ...TOPGOAL2_UNITS_2TO4,                 // Units 2, 3, 4 + WB 1&2
  ...TOPGOAL2_WB_UNITS_3TO7,             // WB Units 3–7
  ...TOPGOAL2_UNITS_CORE.slice(2),        // Units 5, 6, 7, 8
];

export const TOPGOAL2_TOTAL = TOPGOAL2_UNITS.reduce(
  (s, u) => s + u.lessons.reduce((ls, l) => ls + l.questions.length, 0),
  0,
);