// English Grade 1 — We Can! Term 1 — McGraw-Hill / Ministry of Education 1444H
// 4 units · 13 lessons · 135 questions (10/lesson average)
// Source: Teacher's Guide & Student Book pages 2–27

const OPT = (text, i) => ({ text, color: ['#e91e8c', '#0891b2', '#059669', '#d97706'][i] });

export const ENGLISH_G1S1_UNITS = [
  {
    id: 'u0', title_en: 'Introduction — Classroom English', icon: '📚',
    lessons: [{ id: 'u0l1', title_en: 'Classroom Commands' }],
  },
  {
    id: 'u1', title_en: 'Unit 1: My Friends', icon: '👋',
    lessons: [
      { id: 'u1l1', title_en: 'Talk Time — Greetings' },
      { id: 'u1l2', title_en: 'Hello & Goodbye Chants' },
      { id: 'u1l3', title_en: 'Words — Colors' },
      { id: 'u1l4', title_en: 'Phonics — Alphabet A–Z' },
    ],
  },
  {
    id: 'u2', title_en: 'Unit 2: My Body', icon: '🙌',
    lessons: [
      { id: 'u2l1', title_en: 'Talk Time — Body Actions' },
      { id: 'u2l2', title_en: 'Head, Shoulders, Knees & Toes' },
      { id: 'u2l3', title_en: 'Words — Classroom Instructions' },
      { id: 'u2l4', title_en: 'Phonics — Small Letters a–z' },
    ],
  },
  {
    id: 'u3', title_en: 'Unit 3: My Family', icon: '👨‍👩‍👧',
    lessons: [
      { id: 'u3l1', title_en: 'Talk Time — Introductions' },
      { id: 'u3l2', title_en: 'Five Little Monkeys Chant' },
      { id: 'u3l3', title_en: 'Words — Family Members' },
      { id: 'u3l4', title_en: 'Phonics — Sounds A–E' },
    ],
  },
];

const Q = [];
let _id = 1;

const mc = (unit, lesson, page, paragraph, bloom, difficulty, question, options, correctIndex, explanation, goldenRule, feedback) => ({
  id: _id++, unit, lesson, page, paragraph, bloom, difficulty, type: 'multipleChoice',
  question, options, correctAnswer: correctIndex,
  explanation, goldenRule, feedbackQuestion: feedback, source: 'We Can! 1 Term 1',
});
const tf = (unit, lesson, page, paragraph, bloom, difficulty, question, answer, explanation, goldenRule, feedback) => ({
  id: _id++, unit, lesson, page, paragraph, bloom, difficulty, type: 'trueFalse',
  question, correctAnswer: answer,
  explanation, goldenRule, feedbackQuestion: feedback, source: 'We Can! 1 Term 1',
});
const ord = (unit, lesson, page, paragraph, bloom, difficulty, question, items, correctOrder, explanation, goldenRule, feedback) => ({
  id: _id++, unit, lesson, page, paragraph, bloom, difficulty, type: 'ordering',
  question, items, correctOrder,
  explanation, goldenRule, feedbackQuestion: feedback, source: 'We Can! 1 Term 1',
});
const match = (unit, lesson, page, paragraph, bloom, difficulty, question, pairs, explanation, goldenRule, feedback) => ({
  id: _id++, unit, lesson, page, paragraph, bloom, difficulty, type: 'matching',
  question, pairs,
  explanation, goldenRule, feedbackQuestion: feedback, source: 'We Can! 1 Term 1',
});
const cls = (unit, lesson, page, paragraph, bloom, difficulty, question, categories, items, explanation, goldenRule, feedback) => ({
  id: _id++, unit, lesson, page, paragraph, bloom, difficulty, type: 'classify',
  question, categories, items,
  explanation, goldenRule, feedbackQuestion: feedback, source: 'We Can! 1 Term 1',
});
const fill = (unit, lesson, page, paragraph, bloom, difficulty, question, text, blanksCount, wordBank, explanation, goldenRule, feedback) => ({
  id: _id++, unit, lesson, page, paragraph, bloom, difficulty, type: 'fillBlank',
  question, text, blanksCount, wordBank, correctAnswers: wordBank,
  explanation, goldenRule, feedbackQuestion: feedback, source: 'We Can! 1 Term 1',
});
const hl = (unit, lesson, page, paragraph, bloom, difficulty, question, text, targetWord, explanation, goldenRule, feedback) => ({
  id: _id++, unit, lesson, page, paragraph, bloom, difficulty, type: 'highlight',
  question, text, words: text.split(' '), targetWord,
  explanation, goldenRule, feedbackQuestion: feedback, source: 'We Can! 1 Term 1',
});

const fb = (question, opts, ci, hint, exp) => ({ question, options: opts.map((t, i) => OPT(t, i)), correctIndex: ci, hint, explanation: exp });

// ═══════ INTRODUCTION: Classroom English pp.2-3 ═══════
Q.push(mc('u0','u0l1',2,'Welcome! Put your bags away. Take out your pencils.','remember','easy',
  'The teacher says "Welcome!" at the start of class. What does this word mean?',
  [OPT('You are invited / Come in',0),OPT('Go away',1),OPT('Sit down',2),OPT('Stand up',3)],0,
  '"Welcome!" greets students when they arrive — you are invited in.',
  'Welcome = You are invited / Come in!',
  fb('A friend visits. You say?',['Welcome!','Go away!','Sit down!','Be quiet!'],0,'It starts with W','We say Welcome to invite people in.')));

Q.push(mc('u0','u0l1',2,'Put your bags away.','remember','easy',
  'The teacher says "Put your bags away." What should students do?',
  [OPT('Place bags in the right spot',0),OPT('Take out books',1),OPT('Stand up',2),OPT('Open window',3)],0,
  '"Put your bags away" = place bags in the correct storage spot.',
  'Put away = place in the correct spot.',
  fb('What does "away" mean in "put away"?',['In the correct place','Far away','On the desk','In the bin'],0,'Think tidy!','"Away" means to a proper storage place.')));

Q.push(mc('u0','u0l1',2,'Take out your pencils. Take out your books.','remember','easy',
  'The teacher says "Take out your pencils." What do students do?',
  [OPT('Get pencils ready on the desk',0),OPT('Put pencils in the bag',1),OPT('Break the pencils',2),OPT('Give pencils to teacher',3)],0,
  '"Take out your pencils" = remove from bag and place on desk.',
  'Take out = remove from bag and place on desk.',
  fb('What does "take out" mean?',['Remove from the bag','Put inside','Throw away','Sharpen'],0,'Opposite of put in','Take out = remove from inside.')));

Q.push(mc('u0','u0l1',3,'Please open the window.','remember','easy',
  'The teacher says "Please open the window." What happens?',
  [OPT('Window is opened',0),OPT('Window is closed',1),OPT('Door is opened',2),OPT('Book is opened',3)],0,
  '"Open the window" = pull or push the window so air comes in.',
  'Open = make something not closed.',
  fb('What is the opposite of "open"?',['Close','Push','Break','Pull'],0,'Shut!','Opposite of open = close.')));

Q.push(mc('u0','u0l1',3,'Thank you. / You\'re welcome.','understand','easy',
  'A student opens the window. The teacher says "Thank you." What does the student say?',
  [OPT("You're welcome",0),OPT('Okay!',1),OPT('Hello!',2),OPT('Good-bye!',3)],0,
  'After "Thank you" we respond with "You\'re welcome."',
  'Thank you → You\'re welcome.',
  fb('When someone says "Thank you," you say...',["You're welcome",'Goodbye','Hello','Okay'],0,'A polite reply','You\'re welcome is the polite reply to Thank you.')));

Q.push(tf('u0','u0l1',3,'Okay shows agreement or understanding.','understand','easy',
  'When a student says "Okay!" after a command, it means they understand and will do it.',
  true,'"Okay!" confirms understanding and agreement.',
  'Okay = I understand / I agree.',
  fb('Does "Okay" mean yes or no?',['Yes / I understand','No'],0,'It shows agreement','Okay means yes or I understand.')));

Q.push(ord('u0','u0l1',2,'Classroom routine sequence.','apply','medium',
  'Put the classroom routine in the correct order.',
  ['Take out your books','Welcome!','Please take a seat','Put your bags away'],
  [1,3,0,2],
  'Sequence: Welcome → Put bags away → Take out books → Please take a seat.',
  'Class routine: Welcome → tidy → books → sit.',
  fb('What comes FIRST when you enter class?',['Welcome!','Sit down','Take out books','Open window'],0,'Greeting first!','"Welcome!" is the first thing said.')));

Q.push(cls('u0','u0l1',2,'Classroom commands vs polite responses.','analyze','medium',
  'Classify: Classroom Command / Polite Words.',
  ['Classroom Command','Polite Words'],
  [
    {item:'Put your bags away',category:0},{item:'Thank you',category:1},
    {item:'Take out your pencils',category:0},{item:"You're welcome",category:1},
    {item:'Please take a seat',category:0},{item:'Okay',category:1},
  ],
  'Commands tell students what to do. Polite words are responses.',
  'Commands = instructions. Polite words = responses.',
  fb('Which one is a classroom command?',['Stand up','Thank you',"You're welcome",'Okay'],0,'It tells you to do something','Stand up is a command.')));

Q.push(mc('u0','u0l1',2,'Classroom English vocabulary review.','apply','easy',
  'The teacher says "Please take a seat." What should you do?',
  [OPT('Sit down',0),OPT('Stand up',1),OPT('Jump',2),OPT('Walk around',3)],0,
  '"Take a seat" means sit down on a chair.',
  'Take a seat = sit down.',
  fb('What does "take a seat" mean?',['Sit down','Pick up a chair','Stand up','Walk out'],0,'A seat is a chair','"Take a seat" = sit down.')));

Q.push(tf('u0','u0l1',2,'The word "Okay" can be used to confirm understanding.','understand','easy',
  'A student can say "Okay!" to show the teacher they have understood an instruction.',
  true,'Yes, "Okay!" shows the student understood the instruction.',
  '"Okay!" = I understand.',
  fb('Which word shows agreement?',['Okay!','Hello!','Goodbye!','Please!'],0,'Agreement word','"Okay" shows agreement.')));

// ═══════ UNIT 1 LESSON 1: Talk Time — Greetings pp.4-5 ═══════
Q.push(mc('u1','u1l1',4,'Hello. Hi. What\'s your name? My name\'s Labeeb.','remember','easy',
  'In the dialogue, what greeting words do the students use?',
  [OPT('Hello and Hi',0),OPT('Good-bye',1),OPT('Thank you',2),OPT('Okay',3)],0,
  'The students use "Hello" and "Hi" as greeting words.',
  'Hello / Hi = greetings when you meet someone.',
  fb('Which word is a greeting?',['Hi','Bye','Please','Sorry'],0,'You say it when you meet someone','"Hi" is a greeting.')));

Q.push(mc('u1','u1l1',4,'My name\'s Labeeba.','remember','easy',
  '"My name\'s Labeeba." What does "My name\'s" mean?',
  [OPT('My name is',0),OPT('My name was',1),OPT('My name are',2),OPT('I name is',3)],0,
  '"My name\'s" is a contraction of "My name is."',
  "My name's = My name is (contraction).",
  fb('What is the full form of "name\'s"?',['name is','name was','names','name has'],0,'The apostrophe replaces a letter',"name's = name is")));

Q.push(fill('u1','u1l1',4,'Hello! What\'s your name? My name\'s Labeeb.','remember','easy',
  'Complete the greeting dialogue.',
  "Hello! ___'s your _____? My _____'s Labeeb.",
  3,['What','name','name'],
  "Full dialogue: Hello! What's your name? My name's Labeeb.",
  "What's your name? → My name's ...",
  fb("How do you ask someone's name?",["What's your name?",'How are you?','Where are you?','Who am I?'],0,'It starts with "What"','"What\'s your name?" asks for a name.')));

Q.push(mc('u1','u1l1',4,'What\'s your name?','apply','easy',
  'You meet a new student at school. What do you say first?',
  [OPT("Hello! What's your name?",0),OPT('Goodbye! See you!',1),OPT('Please open the window.',2),OPT('Thank you very much.',3)],0,
  'When meeting someone new, greet them first: "Hello! What\'s your name?"',
  "Meeting someone new: greet → ask name.",
  fb('A new student joins your class. You say...',["Hello! I'm ...",'Goodbye!','Sit down!','Thank you!'],0,'It starts with a greeting','Greet new people with Hello!')));

Q.push(tf('u1','u1l1',5,'"Hello" and "Hi" have the same meaning.','understand','easy',
  '"Hello" and "Hi" are both greetings with the same meaning. Is this true?',
  true,'Yes! "Hello" and "Hi" are both ways to greet someone.',
  'Hello = Hi. Both are greetings!',
  fb('Can you use "Hi" instead of "Hello"?',['Yes, they are both greetings','No, they are different'],0,'They mean the same thing','Yes! Hi and Hello are both greetings.')));

Q.push(match('u1','u1l1',4,'Greetings and responses.','understand','medium',
  'Match each phrase with the correct response.',
  [
    {left:'Hello!',right:'Hi!'},
    {left:"What's your name?",right:"My name's Labeeb."},
    {left:'Thank you.',right:"You're welcome."},
    {left:'Goodbye!',right:'See you again!'},
  ],
  'Each greeting or question has a standard response in English.',
  'Every greeting has a matching response.',
  fb("What is the response to \"What's your name?\"",["My name's ...",'"I\'m fine"','Goodbye','Thank you'],0,'Tell them your name!',"Answer with \"My name's ...\"")));

Q.push(mc('u1','u1l1',5,'Goal 02: say "Hello" when coming to class.','apply','easy',
  'Every day when you come to class, what should you say to the teacher?',
  [OPT('Hello! How are you?',0),OPT('Put your bags away!',1),OPT('Take out your books!',2),OPT('Goodbye!',3)],0,
  'When entering the classroom, greet the teacher with "Hello! How are you?"',
  'Enter class → greet teacher with Hello!',
  fb('You walk into class. What do you say?',['Hello!','Goodbye!','Sorry!','Yes!'],0,'A greeting','Say Hello when you enter class.')));

Q.push(mc('u1','u1l1',5,'Greeting Game: quickly greet five people.','apply','medium',
  'In the Greeting Game, each student greets FIVE people. After greeting each person, the student puts up...',
  [OPT('One finger',0),OPT('Both hands',1),OPT('Nothing',2),OPT('A card',3)],0,
  'One finger goes up for each person greeted — until all five fingers are raised.',
  'Greeting Game: greet 5 people = put up 5 fingers.',
  fb('How many people do you greet in the Greeting Game?',['Five (5)','Two (2)','Ten (10)','One (1)'],0,'Count your fingers!','5 people = 5 fingers raised.')));

Q.push(tf('u1','u1l1',4,'Grammar Toolbox: My name\'s = My name is.','understand','easy',
  '"My name\'s" is a short form (contraction) of "My name is." Is this correct?',
  true,'Yes! The apostrophe replaces the "i" from "is". name is → name\'s.',
  "Apostrophe replaces missing letters in contractions.",
  fb("name's is short for...",['name is','names','name was','named'],0,"What does 's often mean?","'s = is in this context.")));

Q.push(mc('u1','u1l1',4,'My name\'s = My name is (Grammar Toolbox p.5).','analyze','hard',
  'In "My name\'s Labeeb," the apostrophe (\'s) replaces the letter...',
  [OPT('i (from "is")',0),OPT('e',1),OPT('a',2),OPT('s',3)],0,
  'name is → name\'s — the apostrophe replaces the "i" from "is".',
  "The apostrophe replaces the 'i' in 'is'.",
  fb("\"name's\" is short for?",['name is','names','name was','named'],0,"'s often means is","name's = name is.")));

// ═══════ UNIT 1 LESSON 2: Hello & Goodbye Chants pp.6-7 ═══════
Q.push(mc('u1','u1l2',6,'Hello Chant: Hello, hello, hello. How are you?','remember','easy',
  'In the Hello Chant, what question is asked after "Hello, hello, hello"?',
  [OPT('How are you?',0),OPT("What's your name?",1),OPT('Where are you?',2),OPT('Who are you?',3)],0,
  'The Hello Chant continues: "Hello, hello, hello. How are you?"',
  "Hello → How are you? → I'm fine, thank you.",
  fb('After saying Hello, you ask...',['How are you?',"What's your name?",'Goodbye?','Okay?'],0,'It asks about feelings','"How are you?" asks how someone is feeling.')));

Q.push(mc('u1','u1l2',6,"I'm fine, thank you. And you?",'remember','easy',
  'When someone asks "How are you?", what is the answer in the chant?',
  [OPT("I'm fine, thank you.",0),OPT("My name's Labeeb.",1),OPT('Goodbye!',2),OPT('Okay!',3)],0,
  'The answer to "How are you?" is "I\'m fine, thank you."',
  "How are you? → I'm fine, thank you.",
  fb('Someone asks "How are you?" What do you say?',["I'm fine, thank you!","My name is...",'Goodbye!',"Please!"],0,'You tell them you are well','"I\'m fine, thank you" is the polite answer.')));

Q.push(mc('u1','u1l2',6,"Grammar Toolbox: I'm = I am",'understand','easy',
  "\"I'm fine\" — What is the full form of \"I'm\"?",
  [OPT('I am',0),OPT('I was',1),OPT('I are',2),OPT('I is',3)],0,
  "\"I'm\" is a contraction of \"I am\". I am fine → I'm fine.",
  "I'm = I am (contraction).",
  fb('"I\'m" is short for...',['I am','I was','I were','I are'],0,'Think of "am"',"I'm = I am.")));

Q.push(mc('u1','u1l2',6,"Good-bye Chant: Good-bye, good-bye. Good-bye to you. Oh, see you again.",'remember','easy',
  'In the Good-bye Chant, what does "see you again" mean?',
  [OPT('We will meet again',0),OPT('I can see you now',1),OPT('Hello!',2),OPT('How are you?',3)],0,
  '"See you again" means we will meet another time — a farewell.',
  'See you again = we will meet again.',
  fb('When leaving class, you say...',['Good-bye! See you again!',"Hello! How are you?","What's your name?","I'm fine."],0,"It's a farewell",'Good-bye when leaving.')));

Q.push(tf('u1','u1l2',6,'"And you?" asks the other person the same question back.','understand','easy',
  'After "I\'m fine, thank you. And you?" — "And you?" asks the same question back. Is this correct?',
  true,'Yes! "And you?" is a polite way to ask the same question back.',
  '"And you?" = asking the same question back.',
  fb('What does "And you?" mean?',['How about you? (same question)','Are you there?',"What is your name?",'Goodbye!'],0,'You ask them back','"And you?" turns the question back to the other person.')));

Q.push(mc('u1','u1l2',7,'Greeting Relay: pass the greeting down the line.','apply','medium',
  'In the Greeting Relay, students pass the greeting. What question do they ask?',
  [OPT('How are you?',0),OPT("What's your name?",1),OPT('Where do you live?',2),OPT('How old are you?',3)],0,
  'In the Greeting Relay: "How are you?" → "I\'m fine, thank you."',
  "Greeting Relay: How are you? → I'm fine, thank you.",
  fb('Your turn in the Greeting Relay. What do you say?',['How are you?','Goodbye!','Sit down!','Thank you!'],0,'You ask about feelings','"How are you?" is the relay question.')));

Q.push(mc('u1','u1l2',6,'Hello Chant: pronunciation — "fine" and "thank you".','apply','medium',
  'Which word in "I\'m fine, thank you" contains the "th" sound?',
  [OPT('thank',0),OPT("I'm",1),OPT('fine',2),OPT('you',3)],0,
  '"Thank" starts with the "th" sound — tongue between teeth.',
  '"th" sound in "thank" — tongue between teeth!',
  fb('Which word has the "th" sound?',['the','big','fine','hello'],0,'Tongue touches upper teeth','"the" has the "th" sound.')));

Q.push(ord('u1','u1l2',6,'Hello Chant sequence.','understand','medium',
  'Put the Hello Chant in the correct order.',
  ["I'm fine, thank you. And you?",'Hello, hello, hello.',"I'm fine."],
  [1,2,0],
  "Hello Chant: Hello hello hello → I'm fine. I'm fine. → I'm fine, thank you. And you?",
  'The Hello Chant has a specific rhythm and order.',
  fb('What comes first in the Hello Chant?',['Hello, hello, hello',"I'm fine",'And you?','Good-bye'],0,"It's a greeting",'The chant starts with "Hello, hello, hello."')));

Q.push(tf('u1','u1l2',7,'Goal 04: Ask "How are you?" every time you come to class.','apply','easy',
  'According to Goal 04, students should ask "How are you?" every time they come to class.',
  true,'Yes! Goal 04 is to ask "How are you?" when entering class every day.',
  'Goal 04: Say "How are you?" when entering class.',
  fb('Should you say "How are you?" only once a week?',['No, every day when you enter class','Yes, only once a week'],0,"It's a daily habit",'Say "How are you?" every time you enter class.')));

Q.push(mc('u1','u1l2',6,'Good-bye Chant lyrics review.','remember','easy',
  'Complete the Good-bye Chant: "Good-bye, good-bye, Good-bye ___ ___."',
  [OPT('to you',0),OPT('for you',1),OPT('with you',2),OPT('to me',3)],0,
  'Good-bye Chant: "Good-bye to you. Oh, see you again."',
  'Good-bye to you. See you again!',
  fb('What do we say in the Good-bye Chant after "Good-bye"?',['to you','for you','with me','bye-bye'],0,'It rhymes','"Good-bye to you" — to you!')));

// ═══════ UNIT 1 LESSON 3: Colors pp.8-9 ═══════
Q.push(mc('u1','u1l3',8,'Colors chant: 10 colors: red, orange, yellow, green, blue, purple, pink, white, black, brown.','remember','easy',
  'The teacher asks "What\'s this color?" and shows a red object. What is the answer?',
  [OPT('Red',0),OPT('Blue',1),OPT('Green',2),OPT('Orange',3)],0,
  'Red is a primary color — the color of tomatoes and fire trucks.',
  'Red = the color of tomatoes, strawberries, fire trucks!',
  fb('What color is a tomato?',['Red','Blue','Green','Purple'],0,'A tomato is ripe and...','A tomato is red.')));

Q.push(mc('u1','u1l3',8,'Rainbow Chant: Red and yellow and pink and blue, Purple and orange and green.','remember','easy',
  'In the Rainbow Chant, which colors are in the rainbow?',
  [OPT('Red, yellow, pink, blue, purple, orange, green',0),OPT('Black, white, brown, gray',1),OPT('Only red and blue',2),OPT('Purple and black only',3)],0,
  'Rainbow Chant: Red, yellow, pink, blue, purple, orange, and green.',
  'Rainbow colors: red, yellow, pink, blue, purple, orange, green.',
  fb('Which color is NOT in the Rainbow Chant?',['Brown','Red','Blue','Green'],0,"It's an earth color",'Brown is not in the Rainbow Chant.')));

Q.push(cls('u1','u1l3',8,'Colors: warm vs cool.','analyze','medium',
  'Classify the colors as Warm or Cool.',
  ['Warm Colors','Cool Colors'],
  [
    {item:'Red',category:0},{item:'Blue',category:1},
    {item:'Orange',category:0},{item:'Purple',category:1},
    {item:'Yellow',category:0},{item:'Green',category:1},
  ],
  'Warm colors remind us of fire and sun. Cool colors remind us of water and sky.',
  'Warm = red, orange, yellow. Cool = blue, purple, green.',
  fb('Which is a COOL color?',['Blue','Red','Orange','Yellow'],0,'Like the sky or water','Blue is a cool color.')));

Q.push(mc('u1','u1l3',9,'Color Race: Touch something ... yellow.','apply','easy',
  'The teacher says "Touch something...YELLOW!" What should you do?',
  [OPT('Find and touch something yellow in the room',0),OPT('Say the word yellow',1),OPT('Draw a yellow picture',2),OPT('Sit down',3)],0,
  'In Color Race, you find and touch an object of the named color.',
  'Color Race: hear color → find it → touch it!',
  fb('In Color Race, teacher says "Touch something blue." You...',['Touch a blue object','Say "blue" loudly','Draw blue','Stand up'],0,'Move and touch!','You find and touch a blue object.')));

Q.push(tf('u1','u1l3',8,'Black and white are included in the list of 10 colors.','remember','easy',
  'Black and white are included in the 10 colors in the book.',
  true,'Yes! The 10 colors: red, orange, yellow, green, blue, purple, pink, white, black, brown.',
  '10 colors: red, orange, yellow, green, blue, purple, pink, white, black, brown.',
  fb('Is "pink" one of the 10 colors in the book?',['Yes','No'],0,'Count: red, orange, yellow, green, blue, purple, pink...','Yes! Pink is color #7.')));

Q.push(mc('u1','u1l3',9,'Grammar Toolbox: what\'s = what is.','understand','easy',
  "\"What's this color?\" — What does \"What's\" stand for?",
  [OPT('What is',0),OPT('What was',1),OPT('What are',2),OPT('What has',3)],0,
  "\"What's\" is a contraction of \"What is\". What is this color? → What's this color?",
  "What's = What is.",
  fb("\"What's your name?\" The full form is...",['What is your name?','What was your name?','What are your name?','What has your name?'],0,"'s = is","What's = What is.")));

Q.push(match('u1','u1l3',8,'Colors and common objects.','understand','medium',
  'Match each color to a common object of that color.',
  [
    {left:'Red',right:'Apple / Tomato'},
    {left:'Yellow',right:'Sun / Banana'},
    {left:'Blue',right:'Sky / Water'},
    {left:'Green',right:'Grass / Leaves'},
  ],
  'Colors are associated with natural objects around us.',
  'Red=apple, Yellow=sun, Blue=sky, Green=grass.',
  fb('The sky is what color?',['Blue','Red','Green','Pink'],0,'Look up!','The sky is blue.')));

Q.push(mc('u1','u1l3',9,'Color race game: Goal 05 and 06.','apply','medium',
  'Goal 05 asks you to name five colors. Which group below shows FIVE colors?',
  [OPT('Red, blue, green, yellow, orange',0),OPT('Red, blue',1),OPT('Only purple',2),OPT('Black only',3)],0,
  'Five colors: any five from the list of 10.',
  'Know at least 5 colors: that\'s the goal!',
  fb('How many colors must you name for Goal 05?',['Five (5)','Two (2)','Ten (10)','One (1)'],0,'Count your fingers... half of them!','Goal 05: name 5 colors.')));

Q.push(mc('u1','u1l3',8,'Rainbow Chant — I can see a rainbow.','understand','easy',
  'In the Rainbow Chant: "I can see a rainbow, see a rainbow, see a rainbow now." What shape is a rainbow?',
  [OPT('An arc / curved shape',0),OPT('A circle',1),OPT('A square',2),OPT('A triangle',3)],0,
  'A rainbow is curved — an arc shape in the sky with many colors.',
  'Rainbow = curved arc in the sky with 7 colors.',
  fb('Where do you see a rainbow?',['In the sky after rain','Under the ground','In a box','In a book'],0,'Look up after rain!','Rainbows appear in the sky after rain.')));

Q.push(tf('u1','u1l3',8,'The color "pink" is in the Rainbow Chant.','remember','easy',
  'In the Rainbow Chant, "pink" is mentioned as one of the colors.',
  true,'Yes! The chant says: "Red and yellow and pink and blue, Purple and orange and green."',
  'Rainbow Chant includes: red, yellow, pink, blue, purple, orange, green.',
  fb('Is orange in the Rainbow Chant?',['Yes','No'],0,'Count the colors','Orange is in the Rainbow Chant.')));

// ═══════ UNIT 1 LESSON 4: Phonics A-Z pp.10-11 ═══════
Q.push(mc('u1','u1l4',10,'Alphabet Chant: A, B, C, D, E, F, G...','remember','easy',
  'The Alphabet Chant teaches the order of letters. How many letters are in the English alphabet?',
  [OPT('26',0),OPT('24',1),OPT('28',2),OPT('20',3)],0,
  'The English alphabet has 26 letters, from A to Z.',
  'English alphabet = 26 letters (A to Z).',
  fb('The English alphabet goes from A to...',['Z','X','Y','W'],0,'The very last letter','The alphabet ends with Z.')));

Q.push(mc('u1','u1l4',10,'ABCDEFG — which letter comes right after G?','remember','easy',
  'In the alphabet chant, which letter comes right after G?',
  [OPT('H',0),OPT('I',1),OPT('J',2),OPT('F',3)],0,
  'ABCDEFG HIJ — H comes right after G.',
  'G is followed by H in the alphabet.',
  fb('What letter comes before H?',['G','I','F','J'],0,'ABCDEFG...','G comes before H.')));

Q.push(mc('u1','u1l4',10,'Alphabet: which letter comes between P and R?','remember','easy',
  'Which letter comes between P and R in the alphabet?',
  [OPT('Q',0),OPT('O',1),OPT('S',2),OPT('T',3)],0,
  'OPQRS — Q comes between P and R.',
  'P → Q → R in the alphabet.',
  fb('What letter comes after Q?',['R','P','S','T'],0,'OPQR...','R comes after Q.')));

Q.push(tf('u1','u1l4',10,'Big letters (capitals) are uniform in size.','understand','easy',
  'The book says capital letters are uniform in size, making them easier to learn first.',
  true,'Yes! Capital letters are all the same height — easier for young learners.',
  'Capital letters = same size = easier to learn first.',
  fb('Are capital letters all the same height?',['Yes','No'],0,'They are uniform','Yes, capital letters are uniform in height.')));

Q.push(ord('u1','u1l4',10,'Alphabet order: F, B, D, A, C, E.','remember','medium',
  'Put these letters in alphabetical order: F, B, D, A, C, E.',
  ['F','B','D','A','C','E'],
  [3,1,4,2,5,0],
  'Alphabetical order: A, B, C, D, E, F.',
  'Always use A-B-C-D-E-F order.',
  fb('Which letter comes first in the alphabet?',['A','B','C','D'],0,'A is the very first!','A is the first letter.')));

Q.push(mc('u1','u1l4',11,'Name Card: My name\'s ___.','apply','medium',
  'For Goal 08, students make a name card and write their name in...',
  [OPT('Upper case (capital) letters',0),OPT('Numbers',1),OPT('Colors',2),OPT('Pictures only',3)],0,
  'Name cards are written in upper case (capital) letters.',
  'Name cards use CAPITAL letters.',
  fb('Name cards use CAPITAL or small letters?',['Capital letters','Small letters','Numbers','Pictures'],0,'Big letters!','Name cards use capital/upper case letters.')));

Q.push(mc('u1','u1l4',10,'Alphabet Chant — last letter.','remember','easy',
  'What is the 26th (last) letter of the English alphabet?',
  [OPT('Z',0),OPT('Y',1),OPT('X',2),OPT('W',3)],0,
  'Z is the 26th and last letter of the English alphabet.',
  'Z is the last letter of the alphabet.',
  fb('After Y comes...',['Z','X','W','V'],0,'The very last one!','Z comes after Y — the last letter.')));

Q.push(cls('u1','u1l4',10,'Letters: vowels vs consonants.','analyze','medium',
  'Classify: Vowels / Consonants.',
  ['Vowels','Consonants'],
  [
    {item:'A',category:0},{item:'B',category:1},
    {item:'E',category:0},{item:'C',category:1},
    {item:'I',category:0},{item:'D',category:1},
  ],
  'Vowels: A, E, I, O, U. All other letters are consonants.',
  'Vowels: A E I O U. Everything else = consonant.',
  fb('Which letter is a vowel?',['O','B','C','D'],0,'A E I O U','O is a vowel.')));

Q.push(tf('u1','u1l4',10,'Knowing the Alphabet Chant means you know every letter name.','evaluate','hard',
  'The book warns that chanting the Alphabet Chant does NOT automatically mean you know each letter name individually.',
  true,'Correct! You need to practice each letter name separately.',
  'Chanting ≠ knowing each letter. Practice each one!',
  fb('Is it enough to just chant the alphabet?',['No, you must also know each letter name','Yes, chanting is enough'],0,'The teacher gives a warning','Chanting is not enough — know each letter individually.')));

Q.push(mc('u1','u1l4',11,'Advice Time: Help your friends.','evaluate','easy',
  'The Advice Time says "Help your friends." If a friend doesn\'t know a letter, what should you do?',
  [OPT('Help them and show them the letter',0),OPT('Laugh at them',1),OPT('Ignore them',2),OPT('Tell the teacher they are wrong',3)],0,
  'The Advice Time says "Help your friends" — support struggling classmates.',
  'Help your friends = teamwork and kindness.',
  fb('The book says "Help your ___."',['friends','teacher','books','bags'],0,'The people around you in class','Help your friends!')));

// ═══════ UNIT 2 LESSON 1: Body Actions pp.12-13 ═══════
Q.push(mc('u2','u2l1',12,'Close your eyes! Open your eyes! Raise your hands! Clap your hands! Okay!','remember','easy',
  'The teacher says "Close your eyes!" What body part do you use?',
  [OPT('Eyes',0),OPT('Hands',1),OPT('Knees',2),OPT('Nose',3)],0,
  'Close your eyes = shut your eyes with your eyelids.',
  'Close your eyes = shut them tight!',
  fb('What do you close when the teacher says "Close your eyes!"?',['Your eyes','Your hands','Your mouth','Your ears'],0,'What do you see with?','You close your eyes.')));

Q.push(mc('u2','u2l1',12,'Open your eyes! / Close your eyes! — opposites.','remember','easy',
  'What is the opposite of "Close your eyes!"?',
  [OPT('Open your eyes!',0),OPT('Raise your hands!',1),OPT('Clap your hands!',2),OPT('Sit down!',3)],0,
  'Opposite of close = open. "Open your eyes!" is the opposite command.',
  'Close → Open. Opposites!',
  fb('What is the opposite of "open"?',['Close','Raise','Clap','Sit'],0,'Shut!','Opposite of open = close.')));

Q.push(mc('u2','u2l1',12,'Raise your hands!','remember','easy',
  '"Raise your hands!" — What does "raise" mean?',
  [OPT('Lift up',0),OPT('Put down',1),OPT('Shake',2),OPT('Close',3)],0,
  '"Raise" means to lift something up — raise your hands = lift your hands up.',
  'Raise = lift up.',
  fb('If you raise your hand, you...',['Lift it up','Put it down','Shake it','Cross it'],0,'Like asking a question in class!','Raise = lift up.')));

Q.push(mc('u2','u2l1',12,'Clap your hands!','remember','easy',
  '"Clap your hands!" — What do you do when you clap?',
  [OPT('Hit both palms together',0),OPT('Lift your hands up',1),OPT('Close your eyes',2),OPT('Touch your head',3)],0,
  'Clapping your hands means hitting both palms together to make a sound.',
  'Clap = hit both palms together = clap sound!',
  fb('When you clap, you hit your two...',['Hands together','Feet together','Knees together','Fingers only'],0,'Palms!','Clap = two hands hit together.')));

Q.push(mc('u2','u2l1',13,'Do It Quickly! — 4 actions.','apply','medium',
  'In "Do It Quickly!" there are 4 actions. How many actions are there?',
  [OPT('Four (4)',0),OPT('Two (2)',1),OPT('Six (6)',2),OPT('Eight (8)',3)],0,
  'There are 4 actions: Close eyes, Open eyes, Raise hands, Clap hands.',
  '4 actions: Close/Open eyes, Raise/Clap hands.',
  fb('Which action comes LAST in Do It Quickly?',['Clap your hands','Close your eyes','Open your eyes','Raise your hands'],0,'Count: 1.Close 2.Open 3.Raise 4.Clap','Clap your hands is the 4th action.')));

Q.push(ord('u2','u2l1',13,'4 body actions in order.','remember','medium',
  'Put the 4 body actions in the correct order from Do It Quickly!',
  ['Raise your hands!','Open your eyes!','Clap your hands!','Close your eyes!'],
  [3,1,0,2],
  'Order: 1. Close eyes! 2. Open eyes! 3. Raise hands! 4. Clap hands!',
  '1.Close 2.Open 3.Raise 4.Clap — the order!',
  fb('What is the FIRST action in Do It Quickly?',['Close your eyes','Open your eyes','Raise your hands','Clap your hands'],0,'Start with shut eyes','"Close your eyes" is first.')));

Q.push(tf('u2','u2l1',12,'After "Close your eyes" the student says "Okay!"','remember','easy',
  'In the dialogue, when the teacher says "Close your eyes!" the student responds "Okay!"',
  true,'Yes! "Okay!" is the student\'s response showing they understood and did the action.',
  '"Okay!" = I understand and I will do it.',
  fb('What does a student say after doing a body action?',['Okay!','Hello!','Goodbye!','Thank you!'],0,'It shows agreement','"Okay!" shows the student understood.')));

Q.push(cls('u2','u2l1',12,'Commands: eyes vs hands.','apply','easy',
  'Classify each action: Eyes Action / Hands Action.',
  ['Eyes Action','Hands Action'],
  [
    {item:'Close your eyes',category:0},{item:'Clap your hands',category:1},
    {item:'Open your eyes',category:0},{item:'Raise your hands',category:1},
  ],
  'Some actions use eyes, others use hands.',
  'Eyes = close/open. Hands = raise/clap.',
  fb('"Raise your hands" is a ___ action.',['Hands','Eyes','Feet','Head'],0,'What body part?','Raise your HANDS — hands action.')));

Q.push(mc('u2','u2l1',13,'Goal 10: say "Close your eyes" or "Open your eyes" to a partner.','apply','medium',
  'For Goal 10, one student says "Close your eyes" to a partner. The partner then...',
  [OPT('Does the action',0),OPT('Says "Hello"',1),OPT('Claps their hands',2),OPT('Sits down',3)],0,
  'In Goal 10, one student gives the instruction and the partner performs the action.',
  'Give instruction → partner does the action.',
  fb('Your partner says "Open your eyes!" You should...',['Open your eyes','Say Hello','Sit down','Clap'],0,'Do what they say!','Do the action: open your eyes.')));

Q.push(mc('u2','u2l1',12,'Why does Labeeb say "Okay!" after each command?','understand','easy',
  'Why does Labeeb say "Okay!" after each command?',
  [OPT('To show he heard and will do the action',0),OPT('Because he is happy',1),OPT('Because he is confused',2),OPT('To say goodbye',3)],0,
  '"Okay!" shows understanding and readiness to follow the instruction.',
  '"Okay!" = I heard you and I\'ll do it.',
  fb('"Okay!" means...',['I understand','No','Goodbye','Hello'],0,'Agreement!','"Okay!" shows understanding and agreement.')));

// ═══════ UNIT 2 LESSON 2: Head Shoulders Knees Toes pp.14-15 ═══════
Q.push(mc('u2','u2l2',14,'Head, Shoulders, Knees, and Toes — 8 body parts.','remember','easy',
  'The Head, Shoulders chant includes body parts. How many body parts are mentioned?',
  [OPT('Eight (8)',0),OPT('Four (4)',1),OPT('Six (6)',2),OPT('Two (2)',3)],0,
  'The chant includes: head, shoulders, knees, toes, eyes, ears, mouth, nose = 8 parts.',
  'Head Shoulders chant: 8 body parts!',
  fb('Which body parts are in the chant?',['head, shoulders, knees, toes, eyes, ears, mouth, nose','hands, feet, fingers, arms','hair, back, chest, neck','Only head and toes'],0,'Count them all!','8 body parts: head, shoulders, knees, toes, eyes, ears, mouth, nose.')));

Q.push(mc('u2','u2l2',14,'Knees — where on your body?','remember','easy',
  '"Knees and toes" — Where on your body are your knees?',
  [OPT('In the middle of your leg',0),OPT('At the end of your foot',1),OPT('On your shoulder',2),OPT('On your head',3)],0,
  'Knees are the joint in the middle of your leg that bends.',
  'Knee = the joint in the middle of your leg.',
  fb('Toes are on your...',['Feet','Hands','Head','Shoulder'],0,'You walk on them','Toes are at the end of your feet.')));

Q.push(mc('u2','u2l2',14,'Eyes and ears and mouth and nose.','remember','easy',
  'Which body part do you use to HEAR sounds?',
  [OPT('Ears',0),OPT('Eyes',1),OPT('Mouth',2),OPT('Nose',3)],0,
  'You hear with your ears. Ears are on the sides of your head.',
  'Ears = you hear with them.',
  fb('You see with your...',['Eyes','Ears','Nose','Mouth'],0,'You open them to see','You see with your eyes.')));

Q.push(tf('u2','u2l2',14,'We have TWO shoulders, so we say "shoulders" (plural).','understand','medium',
  'We have two shoulders, so we say "shoulders" with an -s (plural). Is this correct?',
  true,'Yes! Two shoulders → shoulders (plural). One head → head (singular).',
  'One head, but TWO shoulders, TWO eyes, TWO ears, TWO knees, TWO toes.',
  fb('How many shoulders do you have?',['Two (2)','One (1)','Three (3)','Four (4)'],0,'Left and right','We have two shoulders — one on each side.')));

Q.push(match('u2','u2l2',14,'Body parts: singular vs plural.','understand','medium',
  'Match the body part with the correct form.',
  [
    {left:'Head',right:'One (head)'},
    {left:'Shoulders',right:'Two (shoulders)'},
    {left:'Eyes',right:'Two (eyes)'},
    {left:'Nose',right:'One (nose)'},
  ],
  'Some body parts come in pairs (two), others are single.',
  'One head, one nose, one mouth. Two eyes, two ears, two shoulders.',
  fb('Do you have one or two ears?',['Two ears','One ear','Three ears','No ears'],0,'Left ear and right ear','Two ears — one on each side.')));

Q.push(mc('u2','u2l2',15,'"The Teacher Says" game rules.','understand','medium',
  'In "The Teacher Says" game, when do you do the action?',
  [OPT('Only when "The Teacher says" is said first',0),OPT('Every time an action is mentioned',1),OPT('Whenever you want',2),OPT('Only at the end',3)],0,
  'Rule: only do the action when you hear "The Teacher says..." first.',
  'The Teacher Says = do it! Without it = don\'t move!',
  fb('Teacher says "Touch your nose!" (without "The Teacher says" first). What do you do?',["Don't touch it!",'Touch it','Close your eyes','Sit down'],0,'Was the magic phrase said?','No magic phrase = don\'t move!')));

Q.push(mc('u2','u2l2',15,'Advice Time: Wash your hands.','evaluate','easy',
  'The Advice Time says "Wash your hands." Why is it important?',
  [OPT('To keep germs away and stay healthy',0),OPT('To make them wet',1),OPT('To make them cold',2),OPT('Because the teacher said so only',3)],0,
  'Washing hands removes germs and bacteria, keeping us healthy.',
  'Wash hands = remove germs = stay healthy!',
  fb('When should you wash your hands?',['After using the bathroom and before eating','Only when they look dirty','Never','Once a week'],0,'Hygiene habits','Wash hands after the bathroom and before eating.')));

Q.push(cls('u2','u2l2',14,'Body parts on the FACE vs REST of the body.','apply','medium',
  'Classify: Face body parts / Rest of body.',
  ['Face','Rest of Body'],
  [
    {item:'Eyes',category:0},{item:'Shoulders',category:1},
    {item:'Nose',category:0},{item:'Knees',category:1},
    {item:'Mouth',category:0},{item:'Toes',category:1},
  ],
  'Eyes, nose, mouth, and ears are on the face. Shoulders, knees, and toes are on the rest of the body.',
  'Face: eyes, nose, mouth, ears. Body: shoulders, knees, toes.',
  fb('Is your "nose" on your face or foot?',['Face','Foot','Hand','Knee'],0,'You smell with it','The nose is on your face.')));

Q.push(mc('u2','u2l2',15,'Goal 11: chant Head, Shoulders, Knees, and Toes while doing actions.','apply','easy',
  'To achieve Goal 11, students chant "Head, Shoulders, Knees, and Toes" while doing...',
  [OPT('The matching body actions',0),OPT('Drawing pictures',1),OPT('Writing the words',2),OPT('Sitting quietly',3)],0,
  'Goal 11: chant the chant AND do the body actions.',
  'Chant + do the actions = Goal 11!',
  fb('While chanting "head", you should touch your...',['Head','Shoulders','Knees','Toes'],0,'The body part you say!','Touch head when you say "head".')));

Q.push(mc('u2','u2l2',14,'Head Shoulders Knees Toes — chant goes from top to bottom.','analyze','medium',
  'The chant teaches body parts from HEAD to TOES. Why is this order logical?',
  [OPT('It follows the top-to-bottom order of the human body',0),OPT('Toes are more important',1),OPT('It is random order',2),OPT('Because head rhymes with bed',3)],0,
  'The chant order follows the natural top-to-bottom organization of the body.',
  'Learning body parts top-to-bottom mirrors how our body is organized!',
  fb('Which body part is at the very TOP of the chant?',['head','toes','knees','shoulders'],0,'The highest part','Head is at the top!')));

// ═══════ UNIT 2 LESSON 3: Classroom Instructions pp.16-17 ═══════
Q.push(mc('u2','u2l3',16,'Please stand up. Please come to the front. Please make a line. Please make a circle. Please go back to your seat. Please sit down.','remember','easy',
  'The teacher says "Please stand up." What does the student do?',
  [OPT('Rise from the chair',0),OPT('Sit on the floor',1),OPT('Jump',2),OPT('Walk out',3)],0,
  '"Stand up" means to rise from a seated position.',
  'Stand up = rise from your seat.',
  fb('What is the opposite of "sit down"?',['Stand up','Walk','Jump','Run'],0,'Rise!','Opposite of sit down = stand up.')));

Q.push(mc('u2','u2l3',16,'Please come to the front.','remember','easy',
  '"Please come to the front." Where should the student go?',
  [OPT('To the front of the classroom',0),OPT('To the back',1),OPT('To the door',2),OPT('Outside',3)],0,
  '"Come to the front" means move toward the front of the classroom (near the teacher/board).',
  'Front = near the board/teacher.',
  fb('Where is "the front" of the classroom?',['Near the board and teacher','Near the door','At the back','Outside'],0,'Where the teacher stands','The front is near the board and teacher.')));

Q.push(mc('u2','u2l3',16,'Please make a line. / Please make a circle.','understand','easy',
  '"Please make a line" — What shape do the students form?',
  [OPT('A straight row',0),OPT('A circle',1),OPT('A triangle',2),OPT('A square',3)],0,
  'A line = students stand one behind the other in a straight row.',
  'Make a line = stand one behind the other.',
  fb('In a line, students stand...',['One behind the other','In a circle','In pairs','On chairs'],0,'Like a queue','A line = one behind the other.')));

Q.push(mc('u2','u2l3',17,'Be the Teacher game.','apply','medium',
  'In "Be the Teacher" game, one student becomes the teacher and says "Please stand up!" The partner should...',
  [OPT('Say "Okay!" and stand up',0),OPT('Say "Okay!" and sit down',1),OPT('Ignore the instruction',2),OPT('Run away',3)],0,
  'The partner follows the instruction: "Please stand up!" → say "Okay!" and stand up.',
  'Be the Teacher: give instruction → partner does it.',
  fb('In "Be the Teacher", what does the partner say AND do?',['"Okay!" and do the action','"No" and sit','Nothing','Say "Hello!"'],0,'Show you understand!','Say "Okay!" and do the action.')));

Q.push(tf('u2','u2l3',16,'"Please" makes instructions polite.','understand','easy',
  'The teacher says "PLEASE stand up" — does "please" make the instruction more polite?',
  true,'Yes! Adding "please" makes any instruction more polite and respectful.',
  '"Please" = a magic word that makes requests polite.',
  fb('Which is more polite: "Sit down!" or "Please sit down!"?',['"Please sit down!" is more polite','"Sit down!" is more polite'],0,'Magic word!','"Please" always makes requests more polite.')));

Q.push(ord('u2','u2l3',16,'Classroom activity sequence.','apply','medium',
  'Put the classroom activity in the correct order.',
  ['Please sit down.','Please make a circle.','Please come to the front.','Please stand up.'],
  [3,2,0,1],
  'Order: Stand up → Come to front → Make a circle → Sit down.',
  'Stand → Move → Form shape → Sit.',
  fb('After "Please come to the front," you might be asked to...',['Please make a line','Please open books','Please go home','Please clap'],0,'Form a shape!','"Make a line" or "make a circle" comes next.')));

Q.push(match('u2','u2l3',16,'Opposite classroom commands.','understand','easy',
  'Match opposite classroom commands.',
  [
    {left:'Please stand up',right:'Please sit down'},
    {left:'Please come to the front',right:'Please go back to your seat'},
    {left:'Please make a line',right:'Please make a circle'},
  ],
  'Classroom commands often come in opposite pairs.',
  'Most classroom commands have an opposite pair!',
  fb('"Come to the front" is the opposite of?',['Go back to your seat','Stand up','Make a circle','Clap your hands'],0,'The reverse direction','Go back to your seat is opposite.')));

Q.push(mc('u2','u2l3',16,'Please make a circle.','understand','easy',
  '"Please make a circle" — What shape do students form?',
  [OPT('A round shape with everyone facing the center',0),OPT('A straight line',1),OPT('A square',2),OPT('A triangle',3)],0,
  'A circle = students stand in a round shape, all facing the center.',
  'Circle = round shape, everyone facing in.',
  fb('What shape is a circle?',['Round','Square','Triangle','Line'],0,'Like the letter O','A circle is round.')));

Q.push(tf('u2','u2l3',17,'Children can always comprehend more language than they can produce.','evaluate','hard',
  'According to the teaching tip, children understand more words than they can actively say.',
  true,'Yes! Listening comprehension always develops before speaking ability.',
  'Comprehend > Produce: understand more than you can say.',
  fb('Which skill develops first in language learning?',['Listening / understanding','Speaking','Writing','All at the same time'],0,'First you listen, then you speak!','Listening comprehension develops before speaking.')));

Q.push(mc('u2','u2l3',16,'Goal 13: do three classroom actions. Goal 14: give two classroom instructions.','evaluate','medium',
  'What is the difference between Goal 13 and Goal 14?',
  [OPT('Goal 13 = follow commands; Goal 14 = give commands',0),OPT('They are the same goal',1),OPT('Goal 13 is harder',2),OPT('Goal 13 uses colors',3)],0,
  'Goal 13: receive and do actions; Goal 14: produce and give commands.',
  'Understanding (listening) comes before Speaking (producing)!',
  fb('Goal 14 requires you to...',['Give classroom instructions to a friend','Only listen','Draw classroom commands','Sing a chant'],0,'You give the commands!','Goal 14: give instructions to a friend.')));

// ═══════ UNIT 2 LESSON 4: Small Letters pp.18-19 ═══════
Q.push(mc('u2','u2l4',18,'Small letters: Aa Bb Cc Dd Ee Ff Gg Hh...','remember','easy',
  'In Lesson 4, students learn small letters. What is the small letter for "A"?',
  [OPT('a',0),OPT('A',1),OPT('α',2),OPT('@',3)],0,
  'The small (lowercase) letter for "A" is "a".',
  'A (big) → a (small). Capital → lowercase.',
  fb('What is the small (lowercase) letter for "B"?',['b','B','d','p'],0,'Smaller version of B','Small letter b is the lowercase of B.')));

Q.push(mc('u2','u2l4',19,'Short letters: a c e i m n o r s u v w x z','remember','medium',
  'Short letters are those that fit between the midline and baseline. Which letter is a SHORT letter?',
  [OPT('a',0),OPT('b',1),OPT('f',2),OPT('g',3)],0,
  'Short letters include: a, c, e, i, m, n, o, r, s, u, v, w, x, z.',
  'Short letters stay within the midlines.',
  fb('Which of these is a TALL letter?',['b','a','c','s'],0,'It reaches above the midline','b is a tall letter — it reaches up.')));

Q.push(mc('u2','u2l4',19,'Tail letters: g j p q y','remember','medium',
  'Which of these is a TAIL letter (goes below the baseline)?',
  [OPT('g',0),OPT('a',1),OPT('b',2),OPT('k',3)],0,
  'Tail letters: g, j, p, q, y — they have a tail that goes below the baseline.',
  'Tail letters: g j p q y — they go below the line!',
  fb('Which letter has a TAIL?',['y','a','b','m'],0,'It hangs below the line','y is a tail letter.')));

Q.push(cls('u2','u2l4',19,'Short, Tall, and Tall letters.','analyze','hard',
  'Classify these letters: Short / Tall.',
  ['Short Letter','Tall Letter'],
  [
    {item:'a',category:0},{item:'l',category:1},
    {item:'n',category:0},{item:'d',category:1},
    {item:'s',category:0},{item:'h',category:1},
  ],
  'Short letters: a, c, e, i, m, n, o, r, s, u, v, w, x, z. Tall letters: b, d, f, h, k, l, t.',
  'Short: stay between lines. Tall: go above.',
  fb('Is the letter "t" short or tall?',['Tall','Short','Tail','None'],0,'It has a crossbar at the top','"t" is a tall letter.')));

Q.push(tf('u2','u2l4',18,'Chant with big letters, then chant again with small letters.','understand','easy',
  'In Lesson 4, students chant the Alphabet Chant first pointing to big letters, then again to small letters.',
  true,'Yes! Two passes through the chant: big letters first, then small letters.',
  'Chant with big letters, then with small letters.',
  fb('Is the small letter "c" the same as "o"?',['No, they are different letters','Yes, they are the same'],0,'C has an opening; O is closed','c and o look similar but are different letters.')));

Q.push(mc('u2','u2l4',19,'Short, Tall, and Tail game: sit/stand/sit on floor.','apply','medium',
  'In the Short, Tall, Tail Letters game: Short = sit in chair, Tall = stand up. What do Tail letters make you do?',
  [OPT('Sit on the floor',0),OPT('Jump',1),OPT('Run',2),OPT('Clap',3)],0,
  'Short = sit in chair, Tall = stand up, Tail = sit on the floor.',
  'Short=sit, Tall=stand, Tail=sit on floor.',
  fb('The letter "j" is a tail letter. In the game, you...',['Sit on the floor','Stand up','Sit in the chair','Jump up'],0,'j goes below the line = tail','Tail letter = sit on the floor.')));

Q.push(mc('u2','u2l4',19,'Goal 16: say alphabet backwards z to a.','apply','hard',
  'Goal 16 asks students to say the alphabet backwards from z to a. What comes after "z" going backwards?',
  [OPT('y',0),OPT('x',1),OPT('a',2),OPT('b',3)],0,
  'Backwards alphabet: z, y, x, w, v, u, t, s... — y comes right after z going backwards.',
  'Backwards: z → y → x → w → v...',
  fb('Going backwards: z, ___, x...',['y','w','a','v'],0,'Before x, after z backwards','y comes between z and x going backwards.')));

Q.push(match('u2','u2l4',18,'Capital and small letters matching.','remember','easy',
  'Match each capital letter to its small letter.',
  [
    {left:'A',right:'a'},
    {left:'B',right:'b'},
    {left:'G',right:'g'},
    {left:'M',right:'m'},
  ],
  'Every capital letter has a matching small letter.',
  'Every capital letter has a small letter partner!',
  fb('The small letter for "G" is?',['g','q','d','p'],0,'Smaller version','The small letter for G is g.')));

Q.push(tf('u2','u2l4',18,'Making mistakes is an important quality in successful language learners.','evaluate','hard',
  'According to the teaching tip, making mistakes and correcting yourself is a sign of good learning.',
  true,'Making mistakes and correcting them is proven to be important in language learning.',
  'Mistakes + correction = learning progress!',
  fb('What should you do when you make a mistake in English?',['Correct yourself and keep going','Stop speaking forever','Pretend it didn\'t happen','Ask someone else to speak'],0,'Mistakes help you learn!','Laugh at mistakes and correct them — that\'s how you learn!')));

Q.push(mc('u2','u2l4',18,'How many SHORT letters are there? (14)','remember','hard',
  'How many SHORT letters are there in the English alphabet (a, c, e, i, m, n, o, r, s, u, v, w, x, z)?',
  [OPT('14',0),OPT('7',1),OPT('5',2),OPT('10',3)],0,
  'Short letters: a, c, e, i, m, n, o, r, s, u, v, w, x, z — that is 14 letters.',
  'Short letters = 14 total.',
  fb('How many TALL letters are there? (b d f h k l t)',['7','5','14','10'],0,'Count: b d f h k l t','Tall letters: b, d, f, h, k, l, t = 7.')));

// ═══════ UNIT 3 LESSON 1: Introductions pp.20-21 ═══════
Q.push(mc('u3','u3l1',20,'This is my brother, Jack. Nice to meet you. Nice to meet you, too.','remember','easy',
  'Steven says "This is my brother, Jack." What is Jack\'s relationship to Steven?',
  [OPT('Brother',0),OPT('Friend',1),OPT('Father',2),OPT('Teacher',3)],0,
  'Steven introduces Jack as his brother — they are brothers.',
  '"This is my brother" = sibling (male).',
  fb('If I say "This is my sister, Layla," Layla is my...',['Sister','Brother','Mother','Friend'],0,'Female sibling','"My sister" = female sibling.')));

Q.push(mc('u3','u3l1',20,'Nice to meet you. Nice to meet you, too.','remember','easy',
  'When you are introduced to someone new, you say "Nice to meet you." What does the other person say back?',
  [OPT('Nice to meet you, too.',0),OPT('Goodbye!',1),OPT('How are you?',2),OPT("What's your name?",3)],0,
  'The polite response to "Nice to meet you" is "Nice to meet you, too."',
  '"Nice to meet you" → "Nice to meet you, too!"',
  fb('Someone says "Nice to meet you!" You say...',['Nice to meet you, too!','Goodbye!','Hello!','Thank you!'],0,'Return the kindness!','"Nice to meet you, too!" is the polite response.')));

Q.push(mc('u3','u3l1',21,'This is my friend, Ted.','apply','easy',
  'You want to introduce your friend Omar to Sara. What do you say?',
  [OPT('This is my friend, Omar.',0),OPT('Nice to meet you.',1),OPT('Hello, how are you?',2),OPT('My name is Sara.',3)],0,
  '"This is my friend, [name]" introduces Omar to Sara.',
  'Introduce friend: "This is my friend, [name]."',
  fb('How do you introduce a friend?',['"This is my friend, ___."','"My name is..."','"How are you?"','"Goodbye, ___."'],0,'"This is my friend..."','Use "This is my friend, [name]."')));

Q.push(tf('u3','u3l1',20,'"This is my sister" introduces a female family member.','understand','easy',
  'If a girl says "This is my sister," she is introducing a female sibling.',
  true,'"Sister" is the word for a female sibling.',
  'Sister = female sibling. Brother = male sibling.',
  fb('Is a "brother" male or female?',['Male','Female'],0,'The opposite of sister','Brother = male sibling.')));

Q.push(match('u3','u3l1',20,'Introduction dialogue matching.','understand','medium',
  'Match each part of the introduction dialogue.',
  [
    {left:'This is my brother, Jack.',right:'Nice to meet you.'},
    {left:'Nice to meet you.',right:'Nice to meet you, too.'},
    {left:'This is my friend, Ted.',right:'Nice to meet you.'},
    {left:'Hello!',right:'Hi!'},
  ],
  'Every introduction has a standard dialogue flow.',
  'Introduction → Nice to meet you → Nice to meet you, too.',
  fb('After "This is my brother", the new person says...',['Nice to meet you','Goodbye','Thank you','Okay'],0,'A polite greeting when meeting someone','"Nice to meet you" when meeting someone new.')));

Q.push(ord('u3','u3l1',20,'Introduction dialogue sequence.','apply','medium',
  'Put the introduction dialogue in the correct order.',
  ['Steven: This is my brother, Jack.','Labeeb: Nice to meet you.','Jack: Nice to meet you, too.'],
  [0,1,2],
  'Introduction sequence: introduce → respond → reply.',
  'Introduction: Introduce → Nice to meet you → Nice to meet you, too!',
  fb('What comes FIRST in an introduction dialogue?',['"This is my ___..."','"Nice to meet you!"','"Goodbye!"','"How are you?"'],0,'Introduce first!','The introduction phrase comes first.')));

Q.push(mc('u3','u3l1',21,'Goal 17: act out the talk in groups of 3.','apply','easy',
  'For Goal 17, students practice in groups of how many people?',
  [OPT('Three (3)',0),OPT('Two (2)',1),OPT('Four (4)',2),OPT('Five (5)',3)],0,
  'Introduction dialogues need 3 people.',
  'Introductions need 3 people: A introduces B to C!',
  fb('Why do introductions need 3 people?',['Person A introduces Person B to Person C',"It's a game rule","Two people can't meet",'The book says so'],0,'Think about it!','Introduction = 3 people.')));

Q.push(tf('u3','u3l1',21,'Shaking hands is a polite greeting when being introduced.','evaluate','easy',
  'In "Let\'s Shake Hands," shaking hands is a polite way to greet someone when being introduced.',
  true,'Shaking hands is a cultural gesture of greeting and respect.',
  'Handshake = non-verbal greeting (body language).',
  fb('Waving goodbye is an example of...',['Non-verbal communication','Speaking','Writing','Reading'],0,"You don't speak — you wave!",'Waving is non-verbal communication.')));

Q.push(mc('u3','u3l1',20,"Drawing activities — children enjoy learning through creativity.",'evaluate','hard',
  'The Teacher\'s Guide says "children enjoy learning through creativity." What creative activity does Lesson 3 use?',
  [OPT('Drawing a picture of a family',0),OPT('Writing long sentences',1),OPT('Taking a test',2),OPT('Sitting quietly',3)],0,
  'Students draw a picture of a family — a creative activity that engages their imagination.',
  'Draw a family picture = creative learning!',
  fb('Drawing a picture of your family helps you learn...',['Family vocabulary','Math','Science','Geography'],0,'You draw family members!','Drawing family members teaches family vocabulary.')));

Q.push(mc('u3','u3l1',20,'"Nice to meet you, too" — "too" means also.','understand','medium',
  'What does "too" add to "Nice to meet you, too"?',
  [OPT('It means "also / same here"',0),OPT('It changes the meaning',1),OPT('It says goodbye',2),OPT('Nothing',3)],0,
  '"Too" means "also" — I feel the same way.',
  '"Too" = also / same feeling.',
  fb('"Too" in "Nice to meet you, too" means?',['Also / as well','Very','Goodbye','Please'],0,'"Too" = also','"Too" means "also" — I feel the same way!')));

// ═══════ UNIT 3 LESSON 2: Five Little Monkeys pp.22-23 ═══════
Q.push(mc('u3','u3l2',22,'Five little monkeys jumping on the bed.','remember','easy',
  'In "Five Little Monkeys," what are the monkeys doing?',
  [OPT('Jumping on the bed',0),OPT('Running in the park',1),OPT('Swimming in the river',2),OPT('Eating bananas',3)],0,
  'The five little monkeys are jumping on the bed.',
  'Five monkeys jumping on the bed!',
  fb('Where are the five little monkeys?',['On the bed','In the tree','In the water','On the floor'],0,'They jump on something soft','The monkeys jump on the bed.')));

Q.push(mc('u3','u3l2',22,'One fell off and bumped his head. Ouch!','remember','easy',
  'One monkey "fell off" the bed. What happened to him?',
  [OPT('He bumped his head',0),OPT('He flew away',1),OPT('He went to sleep',2),OPT('He called the doctor',3)],0,
  '"One fell off and bumped his head. Ouch!" — he hit his head when he fell.',
  'Fall off bed → bump head → Ouch!',
  fb('What does "bumped his head" mean?',['Hit his head against something','Fell asleep','Jumped higher','Called Mom'],0,'"Ouch!" — it hurt!','"Bump" means to hit. He hit his head!')));

Q.push(mc('u3','u3l2',22,'Mom called the doctor and the doctor said, "No more monkeys jumping on the bed!"','remember','easy',
  'After the monkey fell, who called the doctor?',
  [OPT('Mom',0),OPT('Dad',1),OPT('The monkey',2),OPT('The teacher',3)],0,
  '"Mom called the doctor" — it is Mom who makes the call.',
  'Mom called the doctor.',
  fb('What did the doctor say?',['"No more monkeys jumping on the bed!"','Jump more!','"Hello!"','"Nice to meet you!"'],0,'A warning!','Doctor said: "No more monkeys jumping on the bed!"')));

Q.push(mc('u3','u3l2',22,'Chant variation: substitute Mom with Dad, Grandma, Grandpa.','understand','easy',
  'In the chant variation, which family member can replace "Mom" calling the doctor?',
  [OPT('Dad, Grandma, or Grandpa',0),OPT('The teacher',1),OPT('The doctor only',2),OPT('A friend',3)],0,
  'The chant replaces "Mom" with Dad, Grandma, and Grandpa in different versions.',
  'Mom → Dad → Grandma → Grandpa (chant variations).',
  fb('In the chant variation, after "Mom" comes?',['Dad','Teacher','Friend','Brother'],0,'Next family member','Dad follows Mom in the chant variation.')));

Q.push(tf('u3','u3l2',22,'The Five Little Monkeys chant counts DOWN from 5 to 1.','understand','medium',
  'In the Five Little Monkeys Game, the monkeys count DOWN: Five → Four → Three → Two → One.',
  true,'Yes! Each time a monkey falls, there is one less. 5 → 4 → 3 → 2 → 1 → No more!',
  '5 monkeys - 1 = 4 monkeys, then 3, then 2, then 1, then 0.',
  fb('After "five little monkeys," one falls. How many are left?',['Four (4)','Three (3)','Six (6)','Two (2)'],0,'5 - 1 = ?','5 - 1 = 4 monkeys left.')));

Q.push(mc('u3','u3l2',23,'Advice Time: Obey your parents.','evaluate','easy',
  'The Advice Time says "Obey your parents." The monkeys did not obey and kept jumping. What happened?',
  [OPT('One fell and got hurt',0),OPT('They were happy',1),OPT('They flew away',2),OPT('Nothing happened',3)],0,
  'The monkeys kept jumping (disobeying) and one fell and bumped his head.',
  'Disobey → accident. Obey your parents for safety!',
  fb('Why is it important to obey your parents?',['For safety and wellbeing','Because they are angry',"It is not important",'Only sometimes'],0,'The monkeys got hurt!','Obeying keeps you safe!')));

Q.push(mc('u3','u3l2',22,'Five Little Monkeys hand motions — Goal 20.','apply','medium',
  'Goal 20: students do hand motions for the Five Little Monkeys chant. For "five little monkeys," how many fingers do you show?',
  [OPT('Five (5)',0),OPT('One (1)',1),OPT('Two (2)',2),OPT('Three (3)',3)],0,
  'For "five little monkeys," you show all five fingers on one hand.',
  '5 monkeys = 5 fingers raised.',
  fb('For "one little monkey jumping on the bed," you show how many fingers?',['One (1)','Five (5)','Two (2)','Zero (0)'],0,'One monkey = ?','One monkey = one finger.')));

Q.push(mc('u3','u3l2',23,'Goal 19: shout "No more monkeys jumping on the bed!"','remember','easy',
  'Goal 19 asks students to shout the doctor\'s words. What exact phrase do they shout?',
  [OPT('"No more monkeys jumping on the bed!"',0),OPT('"Five little monkeys!"',1),OPT('"Mom called the doctor!"',2),OPT('"One fell off!"',3)],0,
  'The doctor says: "No more monkeys jumping on the bed!" — this is what students shout.',
  "Doctor's words: \"No more monkeys jumping on the bed!\"",
  fb('Who says "No more monkeys jumping on the bed"?',['The doctor','Mom','Dad','Grandpa'],0,'A medical professional','The doctor gives the advice.')));

Q.push(tf('u3','u3l2',22,'The chant teaches counting backwards (5, 4, 3, 2, 1).','analyze','medium',
  'The Five Little Monkeys chant teaches students to count down from 5 to 1 (or 0).',
  true,'Yes! Each verse, one monkey falls: five, four, three, two, one.',
  'Counting down: 5, 4, 3, 2, 1 — Five Little Monkeys teaches subtraction!',
  fb('After all monkeys fall, how many are left?',['Zero (0)','Five (5)','One (1)','Two (2)'],0,'They all fell off!','Zero monkeys left — they all fell!')));

Q.push(mc('u3','u3l2',22,"The doctor's advice teaches a safety lesson.",'evaluate','hard',
  'The chant teaches us that jumping on beds is...',
  [OPT('Dangerous — you could fall and get hurt',0),OPT('Safe and fun always',1),OPT('Good exercise',2),OPT('Something doctors like',3)],0,
  'The chant teaches a safety lesson: jumping on beds is dangerous and can cause injuries.',
  "Safety lesson: don't jump on beds — you could fall and get hurt!",
  fb("Why shouldn't children jump on beds?",['They might fall and get hurt','Beds will always break','The doctor says so only','No reason'],0,'The monkeys showed us!','Jumping on beds is dangerous — you might fall!')));

// ═══════ UNIT 3 LESSON 3: Family Members pp.24-25 ═══════
Q.push(mc('u3','u3l3',24,'Family members: Grandpa, Grandma, Dad, Mom, brother, sister.','remember','easy',
  'The book shows family members. Which two people are the GRANDPARENTS?',
  [OPT('Grandpa and Grandma',0),OPT('Dad and Mom',1),OPT('Brother and sister',2),OPT('Teacher and friend',3)],0,
  'Grandpa and Grandma are the grandparents — the oldest generation shown.',
  'Grandpa + Grandma = grandparents.',
  fb("Who is the father's or mother's mother?",['Grandma','Mom','Sister','Grandpa'],0,'She is older than Mom','Grandma = the grandmother.')));

Q.push(mc('u3','u3l3',24,'Mom, Dad, brother, sister — family members.','remember','easy',
  'You have a younger girl in your family. She is your...',
  [OPT('Sister',0),OPT('Brother',1),OPT('Grandma',2),OPT('Mom',3)],0,
  'A girl sibling = sister.',
  'Sister = female sibling.',
  fb('Two boys in a family are called...',['Brothers','Sisters','Friends','Grandchildren'],0,'Two male siblings','Two boys in a family = brothers.')));

Q.push(cls('u3','u3l3',24,'Family members: male vs female.','analyze','medium',
  'Classify: Male family member / Female family member.',
  ['Male','Female'],
  [
    {item:'Grandpa',category:0},{item:'Grandma',category:1},
    {item:'Dad',category:0},{item:'Mom',category:1},
    {item:'brother',category:0},{item:'sister',category:1},
  ],
  'Male: Grandpa, Dad, brother | Female: Grandma, Mom, sister.',
  'Male: Grandpa, Dad, brother | Female: Grandma, Mom, sister!',
  fb('How many FEMALE family members are in the list?',['3 (Grandma, Mom, sister)','2','4','1'],0,'Count the females','3 female family members: Grandma, Mom, sister.')));

Q.push(mc('u3','u3l3',25,'Five Finger Game: put finger on each family word.','understand','easy',
  'In the Five Finger Game, the CD says family words and students put down one finger for each family member they hear. How many words must you follow?',
  [OPT('Five (5)',0),OPT('Three (3)',1),OPT('Seven (7)',2),OPT('Two (2)',3)],0,
  'Five family words — five fingers, one per word.',
  'Five Finger Game = 5 words = 5 fingers.',
  fb('In the Five Finger Game, you use how many fingers?',['Five (5)','Ten (10)','Three (3)','Two (2)'],0,'One hand','5 fingers = 5 family words.')));

Q.push(tf('u3','u3l3',24,'"Mom" and "Mother" refer to the same person.','understand','easy',
  '"Mom" is an informal word for "Mother" — they mean the same person.',
  true,'"Mom" = "Mother". "Dad" = "Father". These are informal versions.',
  'Mom = Mother. Dad = Father.',
  fb('"Dad" is the informal word for...',['Father','Brother','Grandpa','Uncle'],0,'He is your male parent','Dad = Father (informal).')));

Q.push(match('u3','u3l3',24,'Family relationships.','understand','medium',
  'Match each family member with the correct description.',
  [
    {left:'Grandpa',right:"Father's or mother's father"},
    {left:'Mom',right:'Your female parent'},
    {left:'Brother',right:'Male sibling'},
    {left:'Sister',right:'Female sibling'},
  ],
  'Each family member has a specific relationship to you.',
  'Know your family tree!',
  fb('Your "Mom" is your...',['Female parent','Grandparent','Sister','Teacher'],0,'She is female and a parent','Mom = female parent.')));

Q.push(mc('u3','u3l3',24,'Goal 22: show a family drawing and say who they are.','apply','medium',
  'Goal 22 asks students to show their family drawing and say "This is my ___." How should you complete the sentence?',
  [OPT('With the family member\'s role (Mom, Dad, etc.)',0),OPT('With a color',1),OPT('With a number',2),OPT('With a body part',3)],0,
  '"This is my Mom." "This is my Dad." — you say the family role.',
  '"This is my [family member]" = show and tell your family.',
  fb('Looking at your drawing, you say "This is my ___." What goes in the blank?',['Mom / Dad / brother / sister (family role)','Red / Blue (color)','Big / Small (size)','One / Two (number)'],0,'Who is the person?','Say the family role: Mom, Dad, etc.')));

Q.push(mc('u3','u3l3',24,'How many family members in the book? (7)','remember','easy',
  'The word list shows: Grandpa, Grandma, Dad, Mom, brother, brother, sister. How many family members in total?',
  [OPT('7',0),OPT('5',1),OPT('6',2),OPT('4',3)],0,
  'The list shows 7 people: Grandpa, Grandma, Dad, Mom, brother, brother, sister.',
  '7 family members in the picture.',
  fb('In the family vocabulary, how many brothers are shown?',['Two (2)','One (1)','Three (3)','Zero (0)'],0,'Numbers 5 and 6 in the list','Two brothers are shown (numbers 5 and 6).')));

Q.push(cls('u3','u3l3',24,'Family generations.','analyze','medium',
  'Classify family members: Older Generation / My Generation.',
  ['Older Generation','My Generation'],
  [
    {item:'Grandpa',category:0},{item:'Brother',category:1},
    {item:'Grandma',category:0},{item:'Sister',category:1},
    {item:'Dad',category:0},{item:'Me',category:1},
  ],
  'Grandpa, Grandma, Dad, Mom are older. Brothers and sisters are our generation.',
  'Older: grandparents, parents. Same age: siblings.',
  fb('Who is in the SAME generation as you?',['Your brother or sister','Your grandpa','Your mom','Your dad'],0,'About the same age','Siblings are in the same generation as you.')));

Q.push(tf('u3','u3l3',24,'Learning family vocabulary helps students describe their own family.','evaluate','easy',
  'Learning family vocabulary in English is practical — students can use it immediately to talk about their own family.',
  true,'Yes! Family vocabulary is one of the most practical vocabulary sets.',
  'Real vocabulary = words you can use about YOUR life!',
  fb('Why is family vocabulary useful?',['To introduce and describe your own family in English','Only for reading books','Only for exams',"It's not very useful"],0,'Think about using it!','Family vocabulary helps you talk about your family in English.')));

// ═══════ UNIT 3 LESSON 4: Phonics Sounds A-E pp.26-27 ═══════
Q.push(mc('u3','u3l4',26,'A says /a/, /a/, apple. B says /b/, /b/, bear. C says /k/, /k/, cow. D says /d/, /d/, duck. E says /e/, /e/, egg.','remember','easy',
  'The letter "A" makes the sound /a/ as in what key word?',
  [OPT('Apple',0),OPT('Ant',1),OPT('Arm',2),OPT('Arrow',3)],0,
  '"A says /a/, /a/, apple" — apple is the key word for letter A.',
  'A = /a/ = apple!',
  fb('What sound does the letter "A" make in "apple"?',['/a/ (short a)','/e/','/i/','/o/'],0,'/a/ like "ah"','A says /a/ as in apple.')));

Q.push(mc('u3','u3l4',26,'B says /b/, /b/, bear.','remember','easy',
  'What is the key word for the letter "B"?',
  [OPT('Bear',0),OPT('Bird',1),OPT('Ball',2),OPT('Bag',3)],0,
  '"B says /b/, /b/, bear" — bear is the key word.',
  'B = /b/ = bear!',
  fb('The letter B starts the word...',['Bear','Apple','Cow','Duck'],0,'A big furry animal','B = bear.')));

Q.push(mc('u3','u3l4',26,'C says /k/, /k/, cow.','remember','easy',
  'The letter "C" in "cow" makes the sound...',
  [OPT('/k/',0),OPT('/s/',1),OPT('/ch/',2),OPT('/sh/',3)],0,
  '"C says /k/, /k/, cow" — C makes the /k/ sound in cow.',
  'C = /k/ (hard c) = cow!',
  fb('What animal is the key word for C?',['Cow','Cat','Camel','Cobra'],0,'It says "moo!"','Cow is the key word for C.')));

Q.push(mc('u3','u3l4',26,'D says /d/, /d/, duck.','remember','easy',
  'What is the key word for the letter "D"?',
  [OPT('Duck',0),OPT('Dog',1),OPT('Deer',2),OPT('Dove',3)],0,
  '"D says /d/, /d/, duck" — duck is the key word.',
  'D = /d/ = duck!',
  fb('The letter D starts the word...',['Duck','Elephant','Bear','Apple'],0,'It quacks!','D = duck.')));

Q.push(mc('u3','u3l4',26,'E says /e/, /e/, egg.','remember','easy',
  'The letter "E" makes the sound /e/ as in...',
  [OPT('Egg',0),OPT('Eat',1),OPT('Equal',2),OPT('Erase',3)],0,
  '"E says /e/, /e/, egg" — egg is the key word with the short /e/ sound.',
  'E = /e/ = egg!',
  fb('What is the key word for the letter E?',['Egg','Apple','Bear','Cow'],0,'Chickens lay them!','Egg is the key word for E.')));

Q.push(match('u3','u3l4',26,'Letters and their key words.','remember','easy',
  'Match each letter with its key word.',
  [
    {left:'A',right:'Apple'},
    {left:'B',right:'Bear'},
    {left:'C',right:'Cow'},
    {left:'D',right:'Duck'},
  ],
  'A=apple, B=bear, C=cow, D=duck, E=egg.',
  'Learn the letter + sound + key word!',
  fb('What is the key word for the letter C?',['Cow','Cat','Cup','Car'],0,'It moos!','C = cow.')));

Q.push(mc('u3','u3l4',27,'Listen and write: 1. _PPLE 2. _EAR 3. _OW 4. _UCK 5. _GG','apply','medium',
  'The word is "_OW" — which letter goes at the beginning?',
  [OPT('C (C says /k/ = COW)',0),OPT('B',1),OPT('D',2),OPT('E',3)],0,
  '"___OW" = COW. C + OW = COW. C makes the /k/ sound.',
  '_OW → COW → starts with C!',
  fb('Which letter begins the word "___UCK" (duck)?',['D','C','B','E'],0,'D says /d/ = duck','DUCK starts with D.')));

Q.push(mc('u3','u3l4',27,'Guess the Letter game.','apply','medium',
  'In "Guess the Letter," one student writes a letter on the partner\'s BACK. What does the partner do?',
  [OPT('Guesses the letter name',0),OPT('Says "Okay!"',1),OPT('Draws a picture',2),OPT('Says "Nice to meet you"',3)],0,
  'The partner feels the letter on their back and guesses which letter it is.',
  'Feel the letter on your back → guess its name!',
  fb('In "Guess the Letter," your partner writes "A" on your back. You say...',["\"It's an A!\"",'Hello!','Goodbye!','Okay!'],0,'Name the letter!','Say the letter name: "It\'s an A!"')));

Q.push(cls('u3','u3l4',26,'Letters A-E: vowels vs consonants.','analyze','medium',
  'From A, B, C, D, E — classify: Vowels / Consonants.',
  ['Vowels','Consonants'],
  [
    {item:'A',category:0},{item:'B',category:1},
    {item:'E',category:0},{item:'C',category:1},
    {item:'A = apple',category:0},{item:'D',category:1},
  ],
  'A and E are vowels. B, C, D are consonants.',
  'Vowels: A, E. Consonants: B, C, D.',
  fb('From A B C D E, which letters are VOWELS?',['A and E','B and C','All of them','None'],0,'Remember: A E I O U','A and E are vowels (from A E I O U).')));

Q.push(mc('u3','u3l4',28,'Phonics key words review — all 5 letters.','apply','medium',
  'Which of these correctly pairs a letter with its sound and key word?',
  [OPT('D says /d/ as in duck',0),OPT('B says /a/ as in apple',1),OPT('C says /e/ as in egg',2),OPT('A says /b/ as in bear',3)],0,
  'D = /d/ = duck. Each letter has one key word in this lesson.',
  'D=/d/=duck. Know each letter-sound-word pair!',
  fb('A says which sound?',['/a/ as in apple','/b/ as in bear','/k/ as in cow','/d/ as in duck'],0,'First letter, first sound','A says /a/ as in apple.')));

export const ENGLISH_G1S1_QUESTIONS = Q;

export const getQuestionsForLesson = (lessonId) => ENGLISH_G1S1_QUESTIONS.filter(q => q.lesson === lessonId);
export const getQuestionsForUnit = (unitId) => ENGLISH_G1S1_QUESTIONS.filter(q => q.unit === unitId);

export const TOTAL_LESSONS_EN1S1 = ENGLISH_G1S1_UNITS.reduce((s, u) => s + u.lessons.length, 0);
export const TOTAL_QUESTIONS_EN1S1 = ENGLISH_G1S1_QUESTIONS.length;

export const BLOOM_LABELS = {
  remember: 'Remember', understand: 'Understand', apply: 'Apply',
  analyze: 'Analyze', create: 'Create', evaluate: 'Evaluate',
};
export const DIFFICULTY_LABELS = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
export const TYPE_LABELS = {
  multipleChoice: 'Multiple Choice', trueFalse: 'True / False',
  ordering: 'Ordering', matching: 'Matching', classify: 'Classify',
  fillBlank: 'Fill in the Blank', highlight: 'Highlight',
};