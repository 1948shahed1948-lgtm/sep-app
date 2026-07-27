// We Can! 3 — Workbook Term 1 — Grade 3 English
// Questions built directly from textbook goals (Goals 01–49)

export const WC3_UNITS = [
  {
    id: 'u1',
    title_en: "Unit 1: It's Nice to Meet You!",
    title_ar: 'الوحدة 1: من الجميل مقابلتك!',
    color: 'teal',
    icon: '🤝',
    lessons: [
      {
        id: 'u1g01',
        title_en: 'Goal 01 – Meeting Someone (Finding Out Time)',
        title_ar: 'الهدف 1 – التعارف',
        questions: [
          { type: 'multiple_choice', question_en: "What does A say first when meeting B?", options_en: ["How old are you?", "Hi. I'm Jack. What's your name?", "Where do you live?", "Nice to meet you."], correct: 1, explanation_en: "We start greetings with our name: 'Hi. I'm Jack. What's your name?'" },
          { type: 'true_false', question_en: "In the dialogue, B says: 'My name's Samir.'", correct: 'true', explanation_en: "Yes, B introduces himself as Samir." },
          { type: 'multiple_choice', question_en: "What does B reply when A says 'Nice to meet you'?", options_en: ["I'm eleven years old.", "I live in Jeddah.", "Nice to meet you, too.", "What's your name?"], correct: 2, explanation_en: "The correct reply is 'Nice to meet you, too.'" },
          { type: 'multiple_choice', question_en: "Fill in the blank: 'I ___ in Jeddah.'", options_en: ["lives", "live", "living", "lived"], correct: 1, explanation_en: "First person singular uses 'live'." },
          { type: 'true_false', question_en: "True or False: Alligators can swim.", correct: 'true', explanation_en: "True! Alligators are strong swimmers." },
          { type: 'multiple_choice', question_en: "In the workbook dialogue, how old is B?", options_en: ["Nine years old", "Ten years old", "Eleven years old", "Twelve years old"], correct: 2, explanation_en: "B says 'I'm eleven years old.'" },
          { type: 'multiple_choice', question_en: "Which question asks about where someone lives?", options_en: ["How old are you?", "What's your name?", "Where do you live?", "Do you have brothers?"], correct: 2, explanation_en: "'Where do you live?' asks about location." },
          { type: 'multiple_choice', question_en: "Complete: 'A: Where do you live? B: I live ___ Jeddah.'", options_en: ["at", "on", "in", "to"], correct: 2, explanation_en: "We use 'in' with city names: 'I live in Jeddah.'" },
        ]
      },
      {
        id: 'u1g02',
        title_en: 'Goal 02 – Questions About Name, Age, Place',
        title_ar: 'الهدف 2 – أسئلة عن الاسم والعمر والمكان',
        questions: [
          { type: 'multiple_choice', question_en: "What is the boy's name in the dialogue?", options_en: ["Jack", "Omar", "Saeed", "Ali"], correct: 2, explanation_en: "B says 'My name's Saeed.'" },
          { type: 'multiple_choice', question_en: "Where does Saeed live?", options_en: ["Jeddah", "Riyadh", "Makkah", "Dammam"], correct: 1, explanation_en: "B says 'I live in Riyadh.'" },
          { type: 'true_false', question_en: "True or False: Bears can climb trees.", correct: 'true', explanation_en: "True! Many bear species are good tree climbers." },
          { type: 'multiple_choice', question_en: "How old is the boy in this dialogue?", options_en: ["Nine", "Ten", "Eleven", "Twelve"], correct: 2, explanation_en: "B says 'I'm eleven years old.'" },
          { type: 'multiple_choice', question_en: "To ask about someone else's age, we say:", options_en: ["How old are you?", "How old is he?", "Where does he live?", "What's his name?"], correct: 1, explanation_en: "'How old is he?' is for third person." },
          { type: 'multiple_choice', question_en: "To ask about where a boy lives, we say:", options_en: ["Where do you live?", "Where is he from?", "Where does he live?", "Where did he live?"], correct: 2, explanation_en: "'Where does he live?' is correct for third person singular." },
        ]
      },
      {
        id: 'u1g03',
        title_en: 'Goal 03 – Possessive Adjectives (my, your, his, her, their)',
        title_ar: 'الهدف 3 – الضمائر الملكية',
        questions: [
          { type: 'multiple_choice', question_en: "Omar and ___ family live in Jeddah.", options_en: ["her", "their", "your", "his"], correct: 3, explanation_en: "Omar is male, so we use 'his'." },
          { type: 'multiple_choice', question_en: "___ apartment is near the center of town.", options_en: ["Your", "My", "Their", "His"], correct: 2, explanation_en: "The apartment belongs to Omar's family, so 'Their'." },
          { type: 'multiple_choice', question_en: "___ mother is a teacher. (talking about Omar)", options_en: ["My", "His", "Her", "Your"], correct: 1, explanation_en: "Omar's mother = 'His mother'." },
          { type: 'multiple_choice', question_en: "He has two sisters. ___ names are Fatima and Sahar.", options_en: ["His", "Her", "Their", "Your"], correct: 2, explanation_en: "Two sisters = 'Their names'." },
          { type: 'true_false', question_en: "True or False: Cats can see in the dark.", correct: 'true', explanation_en: "True! Cats have excellent night vision." },
          { type: 'multiple_choice', question_en: "They like to play in ___ room.", options_en: ["her", "your", "his", "their"], correct: 3, explanation_en: "The sisters' room = 'their room'." },
          { type: 'multiple_choice', question_en: "Which is a possessive adjective?", options_en: ["he", "she", "his", "they"], correct: 2, explanation_en: "'His' is a possessive adjective." },
        ]
      },
      {
        id: 'u1g04',
        title_en: "Goal 04 – Whose…? mine, yours, his, hers, ours, theirs",
        title_ar: 'الهدف 4 – ضمائر الملكية المستقلة',
        questions: [
          { type: 'multiple_choice', question_en: "A: Whose scissors are these? B: ___", options_en: ["They're yours.", "Yes. They're mine.", "They're his.", "They're hers."], correct: 1, explanation_en: "B claims ownership: 'Yes. They're mine.'" },
          { type: 'multiple_choice', question_en: "A: What about those pens? B: They're not mine. I think they're ___.", options_en: ["Jack's", "mine", "yours", "ours"], correct: 0, explanation_en: "B says they belong to Jack: 'Jack's'." },
          { type: 'multiple_choice', question_en: "Which question word asks about ownership?", options_en: ["What", "Where", "Whose", "Who"], correct: 2, explanation_en: "'Whose' asks about ownership." },
          { type: 'true_false', question_en: "True or False: Dolphins eat fish.", correct: 'true', explanation_en: "True! Dolphins are carnivores that eat fish and squid." },
          { type: 'multiple_choice', question_en: "If the book belongs to me, I say: 'It's ___.'", options_en: ["yours", "mine", "his", "theirs"], correct: 1, explanation_en: "First person possessive pronoun: 'mine'." },
          { type: 'multiple_choice', question_en: "If something belongs to Sara, she says: 'It's ___.'", options_en: ["his", "mine", "hers", "theirs"], correct: 2, explanation_en: "Female possessive pronoun: 'hers'." },
        ]
      },
      {
        id: 'u1g05',
        title_en: 'Goal 05 – Rhythms: I have / You have chant',
        title_ar: 'الهدف 5 – أنشودة: لدي / لديك',
        questions: [
          { type: 'multiple_choice', question_en: "In the chant: I have a b, You have an i, He has a c, She has a y. What word does this spell?", options_en: ["computer", "bicycle", "basket", "biology"], correct: 1, explanation_en: "b-i-c-y + c-l-e = bicycle!" },
          { type: 'multiple_choice', question_en: "Complete: 'I have a ___, You have an o, He has an m, She has a p'", options_en: ["a", "c", "e", "b"], correct: 1, explanation_en: "The chant builds 'computer': c-o-m-p..." },
          { type: 'true_false', question_en: "True or False: Eggplants are eggs.", correct: 'false', explanation_en: "False! Eggplants are vegetables, not eggs." },
          { type: 'multiple_choice', question_en: "'I have' → she says:", options_en: ["I has", "She have", "She has", "She had"], correct: 2, explanation_en: "Third person singular: 'She has'." },
        ]
      },
      {
        id: 'u1g06',
        title_en: 'Goal 06 – Can you write these words?',
        title_ar: 'الهدف 6 – هل يمكنك كتابة هذه الكلمات؟',
        questions: [
          { type: 'true_false', question_en: "True or False: Foxes have long tails.", correct: 'true', explanation_en: "True! Foxes are known for their bushy, long tails." },
          { type: 'multiple_choice', question_en: "Can you ___ English words?", options_en: ["reads", "read", "reading", "to read"], correct: 1, explanation_en: "After 'can', we use the base verb: 'can read'." },
          { type: 'multiple_choice', question_en: "Which answer is correct? 'Can you cook?' ___", options_en: ["Yes, I can.", "Yes, I do.", "Yes, I am.", "Yes, I could."], correct: 0, explanation_en: "For 'can' questions, answer with 'Yes, I can.'" },
          { type: 'multiple_choice', question_en: "Can you ___ basketball?", options_en: ["do", "make", "play", "take"], correct: 2, explanation_en: "We 'play' basketball." },
        ]
      },
      {
        id: 'u1g07',
        title_en: 'Goal 07 – Phonics: ee, ea, i_e, ie, ai, ay',
        title_ar: 'الهدف 7 – الفونيكس: أصوات حروف المد',
        questions: [
          { type: 'multiple_choice', question_en: "Unscramble: 'Ken is cheese eating' →", options_en: ["Ken eating cheese is.", "Cheese is Ken eating.", "Ken is eating cheese.", "Eating Ken is cheese."], correct: 2, explanation_en: "Correct word order: Subject + is + verb-ing + object." },
          { type: 'multiple_choice', question_en: "Which word has the 'ai' sound?", options_en: ["rice", "tie", "train", "meet"], correct: 2, explanation_en: "'Train' has the 'ai' sound." },
          { type: 'multiple_choice', question_en: "Which word has the 'ee' sound?", options_en: ["rice", "meet", "train", "play"], correct: 1, explanation_en: "'Meet' has the 'ee' sound." },
          { type: 'true_false', question_en: "True or False: Goats give us milk.", correct: 'true', explanation_en: "True! Goat's milk is widely consumed." },
          { type: 'multiple_choice', question_en: "Complete the word: r _ _ _ (picture: bowl of rice)", options_en: ["rice", "race", "rise", "rope"], correct: 0, explanation_en: "The i_e pattern: r-i-c-e." },
          { type: 'multiple_choice', question_en: "Unscramble: 'It raining today is' →", options_en: ["Today is raining it.", "It is today raining.", "It is raining today.", "Raining it today is."], correct: 2, explanation_en: "Correct: 'It is raining today.'" },
        ]
      },
      {
        id: 'u1g08',
        title_en: 'Goal 08 – Phonics: Conversation Practice',
        title_ar: 'الهدف 8 – فونيكس: تدريب على المحادثة',
        questions: [
          { type: 'multiple_choice', question_en: "A: Do you have brothers or sisters? B: Yes, I have ___.", options_en: ["a brother and two sisters", "no brothers", "good morning", "football"], correct: 0, explanation_en: "B lists family members they have." },
          { type: 'true_false', question_en: "True or False: Hippos eat vegetables.", correct: 'false', explanation_en: "False! Hippos are herbivores but eat grass, not vegetables." },
          { type: 'multiple_choice', question_en: "A: Do you have a smartphone? B: ___", options_en: ["Yes, I do.", "Yes, I am.", "Yes, I have.", "Yes, I was."], correct: 0, explanation_en: "For 'Do you have?' answer 'Yes, I do.'" },
          { type: 'multiple_choice', question_en: "A: Do you like computer games? B: ___", options_en: ["Yes, I like.", "No, I am.", "No, I don't.", "No, I didn't."], correct: 2, explanation_en: "Correct negative short answer: 'No, I don't.'" },
        ]
      },
    ]
  },

  {
    id: 'u2',
    title_en: 'Unit 2: Sea Animals',
    title_ar: 'الوحدة 2: حيوانات البحر',
    color: 'blue',
    icon: '🐬',
    lessons: [
      {
        id: 'u2g09',
        title_en: 'Goal 09 – Sea Animals: Finding Out Time',
        title_ar: 'الهدف 9 – حيوانات البحر',
        questions: [
          { type: 'multiple_choice', question_en: "A: What's that? B: It's a ___.", options_en: ["seahorse", "shark", "whale", "dolphin"], correct: 0, explanation_en: "B describes a seahorse." },
          { type: 'multiple_choice', question_en: "A: What are those? B: They're ___.", options_en: ["a seal", "a dolphin", "seals", "seahorse"], correct: 2, explanation_en: "'Those' is plural, so 'They're seals.'" },
          { type: 'true_false', question_en: "True or False: Kangaroos can jump two meters.", correct: 'true', explanation_en: "True! Kangaroos are powerful jumpers." },
          { type: 'multiple_choice', question_en: "Which sea animal is shown with a walrus?", options_en: ["A whale", "A seahorse", "A crab", "A dolphin"], correct: 0, explanation_en: "In the workbook, 'What's that? It's a walrus.' matches picture of a whale separately." },
          { type: 'multiple_choice', question_en: "Which question asks about a single thing?", options_en: ["What are those?", "What's that?", "Who are they?", "Where are those?"], correct: 1, explanation_en: "'What's that?' is singular." },
          { type: 'multiple_choice', question_en: "Complete: 'I don't think they're ___.'", options_en: ["cute", "fast", "slow", "any of these can fit"], correct: 3, explanation_en: "Any adjective can fill this blank, e.g. 'cute', 'fast', 'slow'." },
        ]
      },
      {
        id: 'u2g10',
        title_en: 'Goal 10 – Describing Sea Animals',
        title_ar: 'الهدف 10 – وصف حيوانات البحر',
        questions: [
          { type: 'multiple_choice', question_en: "I ___ a whale is big.", options_en: ["don't think", "think", "not think", "thinks"], correct: 1, explanation_en: "'I think a whale is big.'" },
          { type: 'multiple_choice', question_en: "Which adjective means NOT big?", options_en: ["fast", "slow", "fat", "small"], correct: 3, explanation_en: "The opposite of big is small." },
          { type: 'true_false', question_en: "True or False: Rabbits drink water.", correct: 'true', explanation_en: "True! All mammals need water." },
          { type: 'multiple_choice', question_en: "I don't think dolphins are ___.", options_en: ["fast", "slow", "smart", "any adjective works"], correct: 3, explanation_en: "Any adjective can complete 'I don't think dolphins are ___'." },
          { type: 'multiple_choice', question_en: "Which sea animal is described as 'slow' in the chant?", options_en: ["Whale", "Dolphin", "Seahorse", "Shark"], correct: 2, explanation_en: "'As slow as a seahorse.'" },
          { type: 'multiple_choice', question_en: "A walrus is ___ in the word list.", options_en: ["cute", "slow", "fat", "scary"], correct: 2, explanation_en: "'As fat as a walrus.'" },
        ]
      },
      {
        id: 'u2g11',
        title_en: 'Goal 11 – Comparative & Superlative',
        title_ar: 'الهدف 11 – المقارنة والتفضيل',
        questions: [
          { type: 'multiple_choice', question_en: "I think a dolphin is cute. I think a seahorse is ___ than a dolphin.", options_en: ["more cute", "cutest", "cuter", "cute"], correct: 2, explanation_en: "Comparative of 'cute' is 'cuter'." },
          { type: 'multiple_choice', question_en: "I think a baby seal is the ___.", options_en: ["cute", "cuter", "cutest", "more cute"], correct: 2, explanation_en: "Superlative of 'cute' is 'the cutest'." },
          { type: 'multiple_choice', question_en: "I think dolphins are the ___. (fast)", options_en: ["fast", "faster", "fastest", "more fast"], correct: 2, explanation_en: "Superlative: 'the fastest'." },
          { type: 'true_false', question_en: "True or False: Big snakes can eat a cow.", correct: 'true', explanation_en: "True! Large constrictors like pythons can swallow large prey." },
          { type: 'multiple_choice', question_en: "I think sharks are ___ than whales.", options_en: ["fast", "faster", "fastest", "the fastest"], correct: 1, explanation_en: "Comparative: 'faster than'." },
          { type: 'multiple_choice', question_en: "What is the superlative of 'scary'?", options_en: ["scarier", "most scary", "the scariest", "more scary"], correct: 2, explanation_en: "Superlative: 'the scariest'." },
        ]
      },
      {
        id: 'u2g12',
        title_en: 'Goal 12 – Sea Creature Descriptions',
        title_ar: 'الهدف 12 – وصف مخلوقات البحر',
        questions: [
          { type: 'multiple_choice', question_en: "It's scary. It has big teeth. It can bite! It's a ___.", options_en: ["jellyfish", "shark", "starfish", "squid"], correct: 1, explanation_en: "A shark is scary with big teeth." },
          { type: 'multiple_choice', question_en: "It can walk and swim. It has suckers. It has eight legs. It's an ___.", options_en: ["eel", "octopus", "squid", "crab"], correct: 1, explanation_en: "An octopus has eight legs and suckers." },
          { type: 'multiple_choice', question_en: "It can sting. It's not a fish. It's like jelly. It's a ___.", options_en: ["starfish", "squid", "jellyfish", "seahorse"], correct: 2, explanation_en: "A jellyfish can sting and looks like jelly." },
          { type: 'true_false', question_en: "True or False: Turtles have hard shells.", correct: 'true', explanation_en: "True! A turtle's shell is hard for protection." },
          { type: 'multiple_choice', question_en: "It has five arms. It can't swim. It looks like a star. It's a ___.", options_en: ["crab", "starfish", "squid", "octopus"], correct: 1, explanation_en: "A starfish has five arms and looks like a star." },
          { type: 'multiple_choice', question_en: "It has a hard shell and two big claws. It can pinch. It's a ___.", options_en: ["squid", "jellyfish", "starfish", "crab"], correct: 3, explanation_en: "A crab has claws and a hard shell." },
          { type: 'multiple_choice', question_en: "It's like an octopus but has 10 legs. It can change color. It's a ___.", options_en: ["crab", "squid", "eel", "jellyfish"], correct: 1, explanation_en: "A squid has 10 legs and can change color." },
        ]
      },
      {
        id: 'u2g13',
        title_en: 'Goal 13 – As…as Comparisons Chant',
        title_ar: 'الهدف 13 – أنشودة: مثل... تماماً',
        questions: [
          { type: 'multiple_choice', question_en: "As ___ as an eel.", options_en: ["fat", "slow", "slippery", "noisy"], correct: 2, explanation_en: "'As slippery as an eel.'" },
          { type: 'multiple_choice', question_en: "As fat as a ___.", options_en: ["dolphin", "walrus", "shark", "seahorse"], correct: 1, explanation_en: "'As fat as a walrus.'" },
          { type: 'multiple_choice', question_en: "As big as a ___.", options_en: ["seal", "seahorse", "whale", "crab"], correct: 2, explanation_en: "'As big as a whale.'" },
          { type: 'true_false', question_en: "True or False: Lions eat grass.", correct: 'false', explanation_en: "False! Lions are carnivores that eat meat." },
          { type: 'multiple_choice', question_en: "As scary as a ___.", options_en: ["dolphin", "seal", "shark", "seahorse"], correct: 2, explanation_en: "'As scary as a shark.'" },
          { type: 'multiple_choice', question_en: "As noisy as a ___.", options_en: ["whale", "seagull", "turtle", "starfish"], correct: 1, explanation_en: "'As noisy as a seagull.'" },
          { type: 'multiple_choice', question_en: "As slow as a ___.", options_en: ["dolphin", "shark", "seahorse", "walrus"], correct: 2, explanation_en: "'As slow as a seahorse.'" },
          { type: 'multiple_choice', question_en: "As cute as a baby ___.", options_en: ["shark", "seal", "walrus", "eel"], correct: 1, explanation_en: "'As cute as a baby seal.'" },
        ]
      },
      {
        id: 'u2g14',
        title_en: 'Goal 14 – Rhythms & Reading: Animal Words',
        title_ar: 'الهدف 14 – القراءة والإيقاع',
        questions: [
          { type: 'multiple_choice', question_en: "Unscramble: l–w–h–a–e →", options_en: ["whale", "while", "whole", "wheel"], correct: 0, explanation_en: "The letters rearrange to spell 'whale'." },
          { type: 'multiple_choice', question_en: "Unscramble: o–l–p–h–i–d–n →", options_en: ["dolphin", "diphone", "diphon", "olympid"], correct: 0, explanation_en: "The letters rearrange to spell 'dolphin'." },
          { type: 'true_false', question_en: "True or False: An ostrich is a big bird.", correct: 'true', explanation_en: "True! The ostrich is the world's largest bird." },
          { type: 'multiple_choice', question_en: "Unscramble: u–l–l–e–a–s–g →", options_en: ["seagull", "seagal", "uglleas", "gaslule"], correct: 0, explanation_en: "The letters rearrange to spell 'seagull'." },
        ]
      },
      {
        id: 'u2g15',
        title_en: 'Goal 15 – Phonics: oa, ow, ou',
        title_ar: 'الهدف 15 – فونيكس: أصوات oa, ow, ou',
        questions: [
          { type: 'multiple_choice', question_en: "Unscramble the sentence: 'There is a mouse on the chair.'", options_en: ["There a mouse is on the chair.", "There is a mouse on the chair.", "On the chair there mouse is a.", "A mouse there is on the chair."], correct: 1, explanation_en: "Correct subject-verb-object word order." },
          { type: 'true_false', question_en: "True or False: A walrus is a big sea animal.", correct: 'true', explanation_en: "True! Walruses are large marine mammals." },
          { type: 'multiple_choice', question_en: "Which word has the 'ow' sound as in 'snow'?", options_en: ["cow", "window", "mouth", "house"], correct: 1, explanation_en: "'Window' has the 'ow' sound like 'snow'." },
          { type: 'multiple_choice', question_en: "Which word has the 'ow' sound as in 'cow'?", options_en: ["snow", "goat", "mouth", "coat"], correct: 2, explanation_en: "'Mouth' has the 'ou' sound like 'cow'." },
        ]
      },
      {
        id: 'u2g16',
        title_en: "Goal 16 – Phonics: This is Jack's House Rhyme",
        title_ar: "الهدف 16 – فونيكس: بيت جاك",
        questions: [
          { type: 'multiple_choice', question_en: "This is Jack's ___.", options_en: ["cat", "school", "house", "mouse"], correct: 2, explanation_en: "The rhyme starts: 'This is Jack's house.'" },
          { type: 'multiple_choice', question_en: "The ___ eats the cheese in Jack's house.", options_en: ["cat", "cow", "snake", "mouse"], correct: 3, explanation_en: "The mouse eats the cheese." },
          { type: 'true_false', question_en: "True or False: An ox is a male cow.", correct: 'true', explanation_en: "True! An ox is a castrated male cattle." },
          { type: 'multiple_choice', question_en: "The ___ chases the mouse.", options_en: ["cow", "cat", "snake", "mouse"], correct: 1, explanation_en: "The cat chases the mouse." },
          { type: 'multiple_choice', question_en: "The ___ scares the cat.", options_en: ["mouse", "cow", "snake", "house"], correct: 2, explanation_en: "The snake scares the cat." },
          { type: 'multiple_choice', question_en: "The ___ tosses the snake.", options_en: ["mouse", "cat", "cow", "house"], correct: 2, explanation_en: "The cow (with pointed horns) tosses the snake." },
        ]
      },
    ]
  },

  {
    id: 'u3',
    title_en: 'Unit 3: Sports and Activities',
    title_ar: 'الوحدة 3: الرياضة والأنشطة',
    color: 'orange',
    icon: '⚽',
    lessons: [
      {
        id: 'u3g17',
        title_en: 'Goal 17 – Sports: Finding Out Time',
        title_ar: 'الهدف 17 – الرياضة: التعرف',
        questions: [
          { type: 'multiple_choice', question_en: "What sport do you like? I like ___.", options_en: ["cooking", "tennis", "singing", "reading"], correct: 1, explanation_en: "In the workbook: 'I like tennis.'" },
          { type: 'multiple_choice', question_en: "What sport does Omar like?", options_en: ["Tennis", "Football", "Horse riding", "Basketball"], correct: 2, explanation_en: "Omar likes horse riding." },
          { type: 'multiple_choice', question_en: "Do you like sports? Circle: Yes / ___", options_en: ["Maybe", "Never", "No", "Always"], correct: 2, explanation_en: "Yes or No are the options in the workbook." },
          { type: 'multiple_choice', question_en: "Which is taller, a giraffe or a goat?", options_en: ["A goat", "They are the same", "A giraffe", "It depends"], correct: 2, explanation_en: "A giraffe is the tallest land animal." },
          { type: 'multiple_choice', question_en: "What sport does she like? ___ likes volleyball.", options_en: ["He", "They", "She", "I"], correct: 2, explanation_en: "'She likes volleyball.'" },
        ]
      },
      {
        id: 'u3g18',
        title_en: 'Goal 18 – Sports Vocabulary',
        title_ar: 'الهدف 18 – مفردات الرياضة',
        questions: [
          { type: 'multiple_choice', question_en: "What sport does Omar want to try?", options_en: ["Snowboarding", "Rock climbing", "Football", "Tennis"], correct: 1, explanation_en: "Omar wants to try rock climbing." },
          { type: 'multiple_choice', question_en: "What sport does Jimmy like?", options_en: ["Rock climbing", "Football", "Snowboarding", "Tennis"], correct: 2, explanation_en: "Jimmy likes snowboarding." },
          { type: 'true_false', question_en: "True or False: Zebras have black and white spots.", correct: 'false', explanation_en: "False! Zebras have black and white STRIPES, not spots." },
          { type: 'multiple_choice', question_en: "Which sport is dangerous?", options_en: ["Tennis", "Football", "Bungee jumping", "Basketball"], correct: 2, explanation_en: "Bungee jumping is listed as a dangerous sport." },
          { type: 'multiple_choice', question_en: "Which is a common sport?", options_en: ["Sky diving", "Hang gliding", "Bungee jumping", "Tennis"], correct: 3, explanation_en: "Tennis is listed as a common sport." },
          { type: 'multiple_choice', question_en: "To ___ diving, you need to go underwater.", options_en: ["sky", "hang", "scuba", "bungee"], correct: 2, explanation_en: "Scuba diving is underwater." },
        ]
      },
      {
        id: 'u3g19',
        title_en: 'Goal 19 – Do/Does Questions',
        title_ar: 'الهدف 19 – أسئلة do / does',
        questions: [
          { type: 'multiple_choice', question_en: "Do you play word games? Yes, ___.", options_en: ["I do.", "you do.", "he does.", "they do."], correct: 0, explanation_en: "'Yes, I do.' is the correct answer." },
          { type: 'multiple_choice', question_en: "Does he do karate? Yes, ___.", options_en: ["he do.", "he does.", "I do.", "she does."], correct: 1, explanation_en: "'Yes, he does.'" },
          { type: 'multiple_choice', question_en: "Do they ride horses? Yes, ___.", options_en: ["they does.", "they do.", "he does.", "she does."], correct: 1, explanation_en: "'Yes, they do.'" },
          { type: 'multiple_choice', question_en: "Does she play computer games? No, ___.", options_en: ["she doesn't.", "she don't.", "I don't.", "they don't."], correct: 0, explanation_en: "'No, she doesn't.'" },
          { type: 'multiple_choice', question_en: "Do you ski? No, ___.", options_en: ["you don't.", "they don't.", "I don't.", "he doesn't."], correct: 2, explanation_en: "'No, I don't.'" },
          { type: 'true_false', question_en: "True or False: Which is colder: ice cream or water? Ice cream is colder.", correct: 'true', explanation_en: "True! Ice cream is frozen and colder than water." },
          { type: 'multiple_choice', question_en: "Do they play tennis? No, ___.", options_en: ["they doesn't.", "they don't.", "he don't.", "I don't."], correct: 1, explanation_en: "'No, they don't.'" },
        ]
      },
      {
        id: 'u3g20',
        title_en: 'Goal 20 – Questions About Sports',
        title_ar: 'الهدف 20 – أسئلة عن الرياضة',
        questions: [
          { type: 'multiple_choice', question_en: "Which is a common sport according to the workbook?", options_en: ["Rock climbing", "Scuba diving", "Football", "Sky diving"], correct: 2, explanation_en: "Football is listed under 'Common sports'." },
          { type: 'multiple_choice', question_en: "Which is faster, a jet or a train?", options_en: ["A train", "They are the same", "A jet", "It depends on fuel"], correct: 2, explanation_en: "A jet is much faster than a train." },
          { type: 'multiple_choice', question_en: "Does your brother do rock climbing? Possible answer:", options_en: ["Yes, he does.", "Yes, I do.", "Yes, they do.", "Yes, she does."], correct: 0, explanation_en: "'Yes, he does.' for a male sibling." },
          { type: 'multiple_choice', question_en: "Do you play volleyball? Negative answer:", options_en: ["No, I do.", "No, he doesn't.", "No, I don't.", "No, you don't."], correct: 2, explanation_en: "'No, I don't.'" },
        ]
      },
      {
        id: 'u3g21',
        title_en: 'Goal 21 – More and Most Chant',
        title_ar: 'الهدف 21 – أنشودة: أكثر والأكثر',
        questions: [
          { type: 'multiple_choice', question_en: "To go sky diving, you need a(n):", options_en: ["ball and goal", "racket and ball", "airplane", "saddle and riding boots"], correct: 2, explanation_en: "Sky diving requires jumping from an airplane." },
          { type: 'multiple_choice', question_en: "For horse riding, you need a:", options_en: ["airplane", "ball", "saddle and riding boots", "racket"], correct: 2, explanation_en: "Horse riding requires saddle and riding boots." },
          { type: 'multiple_choice', question_en: "For basketball, you need a:", options_en: ["ball and goal", "saddle", "racket", "ball and basketball stand"], correct: 3, explanation_en: "Basketball needs a ball and a basketball stand." },
          { type: 'multiple_choice', question_en: "Which one is yellow, a lemon or an orange?", options_en: ["An orange", "Both", "A lemon", "Neither"], correct: 2, explanation_en: "A lemon is yellow; an orange is orange!" },
          { type: 'multiple_choice', question_en: "For tennis, you need a:", options_en: ["saddle", "ball and goal", "racket and ball", "basketball stand"], correct: 2, explanation_en: "Tennis requires a racket and a ball." },
        ]
      },
      {
        id: 'u3g22',
        title_en: 'Goal 22 – Falconry Reading',
        title_ar: 'الهدف 22 – قراءة: الصقارة',
        questions: [
          { type: 'multiple_choice', question_en: "Falconry is a traditional sport in the Kingdom of ___.", options_en: ["England", "Saudi Arabia", "Egypt", "Turkey"], correct: 1, explanation_en: "The text says 'in the Kingdom of Saudi Arabia.'" },
          { type: 'multiple_choice', question_en: "Falcons are trained to ___ other birds and animals.", options_en: ["feed", "hunt", "catch and release", "play with"], correct: 1, explanation_en: "Falcons 'hunt' other birds and animals." },
          { type: 'multiple_choice', question_en: "Which is faster, a kangaroo or a koala?", options_en: ["A koala", "They are the same", "A kangaroo", "Neither can run"], correct: 2, explanation_en: "A kangaroo is much faster than a koala." },
          { type: 'true_false', question_en: "True or False: Falcons can spot prey kilometers away.", correct: 'true', explanation_en: "True! Falcons have extremely sharp eyesight." },
          { type: 'multiple_choice', question_en: "Falcons use their ___ to attack and catch animals.", options_en: ["wings", "beaks", "sharp talons", "feet"], correct: 2, explanation_en: "Falcons have sharp talons (claws) to catch prey." },
        ]
      },
      {
        id: 'u3g23',
        title_en: 'Goal 23 – Phonics: oi, oy, ere, ear, air',
        title_ar: 'الهدف 23 – فونيكس: أصوات oi, oy, air',
        questions: [
          { type: 'multiple_choice', question_en: "Unscramble 'rwehe' →", options_en: ["where", "here", "were", "there"], correct: 0, explanation_en: "'rwehe' unscrambles to 'where'." },
          { type: 'multiple_choice', question_en: "Unscramble 'arep' →", options_en: ["pear", "pare", "reap", "peer"], correct: 0, explanation_en: "'arep' unscrambles to 'pear'." },
          { type: 'multiple_choice', question_en: "Unscramble 'rahic' →", options_en: ["chair", "choir", "chief", "chain"], correct: 0, explanation_en: "'rahic' unscrambles to 'chair'." },
          { type: 'multiple_choice', question_en: "Which is bigger, a melon or a cherry?", options_en: ["A cherry", "They are the same", "A melon", "It depends"], correct: 2, explanation_en: "A melon is much bigger than a cherry." },
          { type: 'multiple_choice', question_en: "Which word has the 'oi' sound?", options_en: ["pear", "chair", "coin", "where"], correct: 2, explanation_en: "'Coin' has the 'oi' sound." },
          { type: 'multiple_choice', question_en: "Unscramble 'nico' →", options_en: ["coin", "icon", "nice", "cone"], correct: 0, explanation_en: "'nico' unscrambles to 'coin'." },
        ]
      },
      {
        id: 'u3g24',
        title_en: "Goal 24 – Phonics: I'd like to … but chant",
        title_ar: 'الهدف 24 – فونيكس: أريد لكن...',
        questions: [
          { type: 'multiple_choice', question_en: "Which is bigger, nine or three?", options_en: ["Three", "They are the same", "Nine", "It depends"], correct: 2, explanation_en: "Nine (9) is bigger than three (3)." },
          { type: 'multiple_choice', question_en: "Complete: 'I'd like to try rock climbing, ___ it's dangerous.'", options_en: ["and", "but", "or", "so"], correct: 1, explanation_en: "'But' introduces a contrasting idea." },
          { type: 'multiple_choice', question_en: "The structure 'I'd like to' means:", options_en: ["I can", "I must", "I would like to", "I did"], correct: 2, explanation_en: "'I'd like to' = 'I would like to'." },
        ]
      },
    ]
  },

  {
    id: 'u4',
    title_en: 'Unit 4: Chores',
    title_ar: 'الوحدة 4: الأعمال المنزلية',
    color: 'green',
    icon: '🧹',
    lessons: [
      {
        id: 'u4g25',
        title_en: 'Goal 25 – Chores: Finding Out Time',
        title_ar: 'الهدف 25 – الأعمال المنزلية',
        questions: [
          { type: 'multiple_choice', question_en: "A: What chores do you do? B: I ___ the fish.", options_en: ["fold", "set", "feed", "wash"], correct: 2, explanation_en: "'I feed the fish.'" },
          { type: 'multiple_choice', question_en: "A: Does she vacuum the floor, too? B: Yes, she does ___.", options_en: ["never", "always", "sometimes", "often"], correct: 2, explanation_en: "'Yes, she does sometimes.'" },
          { type: 'multiple_choice', question_en: "Which chore means tidying clothes?", options_en: ["Feed the fish", "Fold the laundry", "Vacuum the floor", "Set the table"], correct: 1, explanation_en: "'Fold the laundry' means folding clean clothes." },
          { type: 'multiple_choice', question_en: "Which is bigger, an onion or a cabbage?", options_en: ["An onion", "They are the same", "A cabbage", "It depends"], correct: 2, explanation_en: "A cabbage is typically bigger than an onion." },
          { type: 'multiple_choice', question_en: "What chores does your sister do? She ___.", options_en: ["fold the laundry", "folds the laundry", "folding the laundry", "folded the laundry"], correct: 1, explanation_en: "Third person singular needs 's': 'folds'." },
          { type: 'multiple_choice', question_en: "Match: 'I vacuum the floor' with:", options_en: ["Dishes in sink", "Clothes on line", "A vacuum cleaner", "Shopping bags"], correct: 2, explanation_en: "Vacuuming uses a vacuum cleaner." },
          { type: 'multiple_choice', question_en: "Which chore removes rubbish?", options_en: ["Set the table", "Take out the trash", "Feed the fish", "Fold the laundry"], correct: 1, explanation_en: "'Take out the trash' removes rubbish." },
          { type: 'multiple_choice', question_en: "I ___ the dishes. (wash)", options_en: ["fold", "vacuum", "wash", "set"], correct: 2, explanation_en: "You wash the dishes." },
        ]
      },
      {
        id: 'u4g26',
        title_en: 'Goal 26 – How Good a Helper Are You?',
        title_ar: 'الهدف 26 – كم أنت مساعد جيد؟',
        questions: [
          { type: 'multiple_choice', question_en: "If you score 13 or more points, you are a ___ helper.", options_en: ["poor", "average", "good", "great"], correct: 3, explanation_en: "13+ points = 'I'm a great helper at home.'" },
          { type: 'multiple_choice', question_en: "If you score 0-4 points, you are a ___ helper.", options_en: ["great", "good", "average", "poor"], correct: 3, explanation_en: "0–4 points = 'I'm a poor helper at home.'" },
          { type: 'multiple_choice', question_en: "Which is stronger, a bear or a monkey?", options_en: ["A monkey", "They are equal", "A bear", "It depends"], correct: 2, explanation_en: "A bear is much stronger than a monkey." },
          { type: 'multiple_choice', question_en: "'Always' gives ___ point(s) per chore.", options_en: ["0", "1", "2", "3"], correct: 2, explanation_en: "'always' = 2 points." },
          { type: 'multiple_choice', question_en: "'Never' gives ___ point(s) per chore.", options_en: ["0", "1", "2", "3"], correct: 0, explanation_en: "'never' = 0 points." },
          { type: 'multiple_choice', question_en: "Score 5-8 means you are a(n) ___ helper.", options_en: ["great", "good", "average", "poor"], correct: 2, explanation_en: "5–8 = 'I'm an average helper at home.'" },
        ]
      },
      {
        id: 'u4g27',
        title_en: 'Goal 27 – Verb Conjugation (I/He/She)',
        title_ar: 'الهدف 27 – تصريف الأفعال',
        questions: [
          { type: 'multiple_choice', question_en: "I feed the fish. He ___ the fish.", options_en: ["feed", "feeds", "feeding", "fed"], correct: 1, explanation_en: "Third person adds 's': 'feeds'." },
          { type: 'multiple_choice', question_en: "I wash the dishes. She ___ the dishes.", options_en: ["wash", "washing", "washes", "washed"], correct: 2, explanation_en: "Verbs ending in -sh add 'es': 'washes'." },
          { type: 'multiple_choice', question_en: "I go shopping. He ___ shopping.", options_en: ["go", "going", "gos", "goes"], correct: 3, explanation_en: "'go' becomes 'goes' in third person." },
          { type: 'true_false', question_en: "True or False: An octopus has eight legs.", correct: 'true', explanation_en: "True! Octopus means 'eight feet' in Greek." },
          { type: 'multiple_choice', question_en: "Unscramble 'lofd' →", options_en: ["fold", "bold", "cold", "sold"], correct: 0, explanation_en: "'lofd' unscrambles to 'fold'." },
          { type: 'multiple_choice', question_en: "Unscramble 'wkal' →", options_en: ["walk", "talk", "wall", "hawk"], correct: 0, explanation_en: "'wkal' unscrambles to 'walk'." },
          { type: 'multiple_choice', question_en: "I cook and set the table. She ___ and sets the table.", options_en: ["cook", "cooking", "cooks", "cooked"], correct: 2, explanation_en: "Third person: 'cooks'." },
        ]
      },
      {
        id: 'u4g28',
        title_en: 'Goal 28 – Chores Chant (All Pronouns)',
        title_ar: 'الهدف 28 – أنشودة الأعمال المنزلية',
        questions: [
          { type: 'multiple_choice', question_en: "I wash the dishes. You ___ the dishes.", options_en: ["washes", "washing", "wash", "washed"], correct: 2, explanation_en: "'You wash' — no 's' for second person." },
          { type: 'multiple_choice', question_en: "He ___ the dishes.", options_en: ["wash", "washing", "washes", "washed"], correct: 2, explanation_en: "He washes — third person adds 'es' for wash." },
          { type: 'multiple_choice', question_en: "They ___ the dishes.", options_en: ["washes", "washing", "wash", "washed"], correct: 2, explanation_en: "'They wash' — no 's' for plural." },
          { type: 'multiple_choice', question_en: "Which can jump higher, a rabbit or a kangaroo?", options_en: ["A rabbit", "They jump the same height", "A kangaroo", "Neither can jump"], correct: 2, explanation_en: "A kangaroo can jump much higher than a rabbit." },
          { type: 'multiple_choice', question_en: "Write the missing form: set → ___", options_en: ["setted", "setes", "sets", "setting"], correct: 2, explanation_en: "'set' → 'sets' in third person singular." },
          { type: 'multiple_choice', question_en: "vacuum → ___", options_en: ["vacuums", "vacuumes", "vacuumed", "vacuuming"], correct: 0, explanation_en: "'vacuum' → 'vacuums' in third person." },
        ]
      },
      {
        id: 'u4g29',
        title_en: 'Goal 29 – Clever Robot Chant',
        title_ar: 'الهدف 29 – أنشودة الروبوت الذكي',
        questions: [
          { type: 'multiple_choice', question_en: "In the chant, the robot is the ___ ever seen.", options_en: ["smallest", "fastest", "smartest", "biggest"], correct: 2, explanation_en: "'The smartest ever seen.'" },
          { type: 'multiple_choice', question_en: "The robot ___ the dishes.", options_en: ["folds", "sets", "washes", "vacuums"], correct: 2, explanation_en: "'He washes my dishes.'" },
          { type: 'multiple_choice', question_en: "The robot ___ my bread.", options_en: ["makes", "bakes", "buys", "sets"], correct: 1, explanation_en: "'He bakes my bread.'" },
          { type: 'multiple_choice', question_en: "Which is heavier, an alligator or a hippo?", options_en: ["An alligator", "They are the same", "A hippo", "It depends on their age"], correct: 2, explanation_en: "Hippos are generally heavier than alligators." },
          { type: 'multiple_choice', question_en: "The robot makes me a ___.", options_en: ["cake", "sandwich", "drink", "meal"], correct: 2, explanation_en: "'And makes me a drink.'" },
          { type: 'multiple_choice', question_en: "The robot keeps the house ___.", options_en: ["warm", "quiet", "clean", "tidy"], correct: 2, explanation_en: "'And keeps the house clean.'" },
        ]
      },
    ]
  },
];

export const WC3_BANNER = {
  title_en: "We Can! 3 — Workbook Term 1",
  title_ar: "بنك أسئلة: We Can! 3 — كتاب النشاط الفصل الأول",
  subtitle_en: "Grade 3 English · Units 1–4 · Goals 01–29",
  subject: "English",
  grade: "Grade 3",
};

export const TOTAL_UNITS_WC3 = WC3_UNITS.length;
export const TOTAL_LESSONS_WC3 = WC3_UNITS.reduce((s, u) => s + u.lessons.length, 0);
export const TOTAL_QUESTIONS_WC3 = WC3_UNITS.reduce((s, u) => s + u.lessons.reduce((ls, l) => ls + l.questions.length, 0), 0);