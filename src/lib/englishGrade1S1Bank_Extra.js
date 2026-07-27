// English Grade 1 — We Can! Term 1 — Extra questions (165) to reach 300 total
// All grounded in the Student Book pages 2-27 (McGraw-Hill / MoE 1444H)
import { ENGLISH_G1S1_QUESTIONS } from './englishGrade1S1Bank';

const OPT = (text, i) => ({ text, color: ['#e91e8c', '#0891b2', '#059669', '#d97706'][i] });
const fb = (question, opts, ci, hint, exp) => ({ question, options: opts.map((t, i) => OPT(t, i)), correctIndex: ci, hint, explanation: exp });

let _id = 1000;

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

const EXTRA = [];

// ═══ Introduction — Classroom English (extra 12) ═══
EXTRA.push(mc('u0','u0l1',2,'Welcome! Take a seat. Open your books.','remember','easy',
  'Which classroom command tells you to start reading your textbook?',
  [OPT('Open your books',0),OPT('Put your bags away',1),OPT('Welcome!',2),OPT('Thank you',3)],0,
  '"Open your books" is the command to start reading.',
  'Open your books = start reading.',
  fb('What do you open to read?',['Books','Window','Door','Bag'],0,'You read from them','You open books to read.')));

EXTRA.push(tf('u0','u0l1',2,'"Put your bags away" means put them on the desk.','understand','easy',
  'Does "Put your bags away" mean to place bags on the desk in the middle of the room?',
  false,'No! It means to place them in the proper storage spot, not on the desk.',
  'Put away = store properly, not leave out.',
  fb('"Put your bags away" means...',['Store bags properly','Leave on desk','Throw away','Carry them'],0,'Think tidy!','Store bags properly.')));

EXTRA.push(mc('u0','u0l1',3,'Thank you. / You\'re welcome.','understand','easy',
  'Which pair of words are polite responses to each other?',
  [OPT('Thank you / You\'re welcome',0),OPT('Hello / Goodbye',1),OPT('Stand up / Sit down',2),OPT('Red / Blue',3)],0,
  '"Thank you" and "You\'re welcome" form a polite exchange.',
  'Thank you ↔ You\'re welcome.',
  fb('After "Thank you," say...',[ "You're welcome",'Okay','Hello','Goodbye'],0,'Polite reply','"You\'re welcome" is the reply.')));

EXTRA.push(ord('u0','u0l1',2,'Morning routine sequence.','apply','medium',
  'Put the morning routine in the right order.',
  ['Please take a seat','Welcome!','Open your books','Take out your pencils'],
  [1,3,0,2],
  'Order: Welcome → Take out pencils → Take a seat → Open books.',
  'Welcome → pencils → seat → books.',
  fb('What comes right after "Welcome!"?',['Put your bags away','Goodbye','Clap','Open window'],0,'Next routine step','Put bags away next.')));

EXTRA.push(mc('u0','u0l1',3,'Okay — the understanding word.','apply','easy',
  'If the teacher says "Open the window" and you understand, what do you say?',
  [OPT('Okay!',0),OPT('Hello!',1),OPT('Goodbye!',2),OPT("What's your name?",3)],0,
  '"Okay!" confirms you understood the instruction.',
  'Okay = I understand!',
  fb('Which word shows you understood a command?',['Okay!','Hi!','Bye!','Thanks!'],0,'Agreement','"Okay!" shows understanding.')));

EXTRA.push(cls('u0','u0l1',2,'Commands and greetings.','analyze','medium',
  'Classify: Commands / Greetings.',
  ['Commands','Greetings'],
  [
    {item:'Take out your pencils',category:0},{item:'Hello!',category:1},
    {item:'Please sit down',category:0},{item:'Hi!',category:1},
    {item:'Put your bags away',category:0},{item:'Goodbye!',category:1},
  ],
  'Commands tell you to do something. Greetings welcome or farewell.',
  'Commands = do. Greetings = hello/bye.',
  fb('Is "Hello" a command or greeting?',['Greeting','Command'],0,'You say it when you meet','It\'s a greeting.')));

EXTRA.push(fill('u0','u0l1',3,'Please open the window.','remember','easy',
  'Complete: "Please ___ the window."',
  'Please ___ the window.',
  1,['open'],
  '"Please open the window." — open means not closed.',
  'Open = not closed.',
  fb('Opposite of "open" is...',['close','raise','clap','sit'],0,'Shut!','Close.')));

EXTRA.push(mc('u0','u0l1',2,'Welcome and please take a seat.','evaluate','easy',
  'The teacher says "Welcome! Please take a seat." This shows the teacher is being...',
  [OPT('Polite and welcoming',0),OPT('Angry',1),OPT('Sad',2),OPT('Busy',3)],0,
  'The teacher uses polite words to make students feel welcome.',
  'Polite teachers make students feel safe.',
  fb('Why does the teacher say "Welcome!"?',['To make students feel welcome','To scare them','To test them','To leave'],0,'Kindness','To welcome students.')));

EXTRA.push(tf('u0','u0l1',3,'"You\'re welcome" is the reply to "Thank you."','remember','easy',
  'When someone says "Thank you," you reply "You\'re welcome."',
  true,'Yes! That is the standard polite exchange.',
  'Thank you → You\'re welcome.',
  fb('What do you reply to "Thank you"?',[ "You're welcome",'Okay','Hello','Goodbye'],0,'Polite','"You\'re welcome".')));

EXTRA.push(hl('u0','u0l1',2,'Highlight the greeting word.','understand','easy',
  'Click the GREETING word in this sentence.',
  'The teacher said Welcome to all the students',
  'Welcome',
  '"Welcome" is the greeting word the teacher uses.',
  'Welcome = greeting for arrivals.',
  fb('Which word greets people?',['Welcome','Teacher','Students','Said'],0,'First word','Welcome greets people.')));

EXTRA.push(mc('u0','u0l1',2,'Classroom English: bags, pencils, books, seat.','apply','medium',
  'Which item do you "take out" to write with?',
  [OPT('Pencils',0),OPT('Bags',1),OPT('Chairs',2),OPT('Windows',3)],0,
  'You take out pencils to write with them.',
  'Pencils are for writing.',
  fb('What do you write with?',['Pencils','Bags','Chairs','Books'],0,'Writing tool','Pencils.')));

EXTRA.push(tf('u0','u0l1',3,'Polite words make the classroom friendlier.','evaluate','easy',
  'Using "please" and "thank you" makes the classroom a friendlier place.',
  true,'Yes! Polite words create a positive classroom atmosphere.',
  'Please + Thank you = friendly classroom.',
  fb('Do polite words help the classroom?',['Yes, they make it friendlier','No, they don\'t matter'],0,'Kindness matters','Yes, they make it friendlier.')));

// ═══ Unit 1 Lesson 1 — Greetings (extra 13) ═══
EXTRA.push(mc('u1','u1l1',4,'Hello. Hi. What\'s your name?','remember','easy',
  'Which two words are BOTH greetings?',
  [OPT('Hello and Hi',0),OPT('Goodbye and Bye',1),OPT('Thank you and Please',2),OPT('Okay and Yes',3)],0,
  'Hello and Hi are both greetings used when meeting someone.',
  'Hello = Hi = greetings.',
  fb('Which is a greeting?',['Hi','Bye','Thanks','Okay'],0,'Meeting word','Hi is a greeting.')));

EXTRA.push(fill('u1','u1l1',4,'My name\'s Labeeb.','remember','easy',
  'Complete: "My ___\'s Labeeb."',
  'My ___\'s Labeeb.',
  1,['name'],
  '"My name\'s Labeeb" — name\'s = name is.',
  "name's = name is.",
  fb('"My ___\'s Omar" — fill the blank.',['name','hello','hi','bye'],0,'What identifies you?','name.')));

EXTRA.push(mc('u1','u1l1',5,'Greeting Game — five people.','apply','medium',
  'In the Greeting Game, how do you keep track of how many people you greeted?',
  [OPT('Put up one finger per person',0),OPT('Write on paper',1),OPT('Count out loud',2),OPT('Ask the teacher',3)],0,
  'You put up one finger for each person greeted, until five fingers are up.',
  '1 person = 1 finger, up to 5.',
  fb('After greeting 3 people, how many fingers up?',['Three (3)','One (1)','Five (5)','Two (2)'],0,'One per person','3 fingers.')));

EXTRA.push(tf('u1','u1l1',4,'"What\'s your name?" asks for a name.','understand','easy',
  'The question "What\'s your name?" is used to learn someone\'s name.',
  true,'Yes! It asks the other person to tell you their name.',
  "What's your name? = tell me your name.",
  fb('What does "What\'s your name?" ask for?',['A name','An age','A color','A number'],0,'Identity','A name.')));

EXTRA.push(match('u1','u1l1',4,'Greetings matching practice.','remember','easy',
  'Match the greeting with the matching reply.',
  [
    {left:'Hello!',right:'Hi!'},
    {left:'Goodbye!',right:'See you!'},
    {left:'Thank you',right:"You're welcome"},
    {left:"What's your name?",right:"My name's ___"},
  ],
  'Each greeting has a matching reply.',
  'Greetings have matching replies.',
  fb('Reply to "Goodbye!" is...',['See you!','Hello!','Thanks!','Okay!'],0,'Farewell reply','See you!')));

EXTRA.push(mc('u1','u1l1',4,'Name exchange dialogue.','apply','easy',
  'Someone says "Hello! What\'s your name?" You reply...',
  [OPT("My name's ___",0),OPT("How are you?",1),OPT("Goodbye!",2),OPT("Thank you!",3)],0,
  'You reply with your name: "My name\'s ___."',
  "Hello! What's your name? → My name's ___.",
  fb('Reply to "What\'s your name?"',[ "My name's ___",'I\'m fine','Goodbye','Okay'],0,'Tell your name','My name\'s ___.')));

EXTRA.push(ord('u1','u1l1',4,'Greeting dialogue order.','apply','medium',
  'Put the greeting dialogue in order.',
  ["My name's Labeeb.","What's your name?",'Hello!'],
  [2,1,0],
  'Order: Hello → What\'s your name? → My name\'s Labeeb.',
  'Hello → ask name → give name.',
  fb('What comes first?',['Hello!',"What's your name?","My name's...",'Goodbye'],0,'Greeting first','Hello!')));

EXTRA.push(cls('u1','u1l1',4,'Greeting words vs farewell words.','analyze','easy',
  'Classify: Greetings / Farewells.',
  ['Greetings','Farewells'],
  [
    {item:'Hello',category:0},{item:'Goodbye',category:1},
    {item:'Hi',category:0},{item:'See you',category:1},
    {item:'Welcome',category:0},{item:'Bye',category:1},
  ],
  'Greetings = meeting. Farewells = leaving.',
  'Greetings = hello/hi. Farewells = goodbye/bye.',
  fb('Is "See you" a greeting or farewell?',['Farewell','Greeting'],0,'Leaving word','Farewell.')));

EXTRA.push(tf('u1','u1l1',5,'Goal 02: say Hello when coming to class.','evaluate','easy',
  'Goal 02 is to say "Hello" when coming to class every day.',
  true,'Yes! It\'s a daily greeting habit.',
  'Goal 02: Hello when entering class.',
  fb('When should you say "Hello" in class?',['Every day when you enter','Only once a year','Never','Only to friends'],0,'Daily habit','Every day when entering.')));

EXTRA.push(hl('u1','u1l1',4,'Highlight the question word.','understand','easy',
  'Click the QUESTION word in: "What is your name?"',
  'What is your name',
  'What',
  '"What" is the question word asking for information.',
  'What = question word.',
  fb('Which word asks a question?',['What','Is','Your','Name'],0,'Question word','What.')));

EXTRA.push(mc('u1','u1l1',4,'My name\'s — contraction.','understand','medium',
  'In "My name\'s Labeeb," the apostrophe replaces the letter...',
  [OPT('i',0),OPT('a',1),OPT('e',2),OPT('o',3)],0,
  'name is → name\'s — the apostrophe replaces "i".',
  "Apostrophe replaces 'i' in 'is'.",
  fb('name\'s = name ___',['is','was','are','has'],0,'Contraction','name is.')));

EXTRA.push(fill('u1','u1l1',4,'Hello! Hi!','remember','easy',
  'Complete: "___! What\'s your name?"',
  '___! What\'s your name?',
  1,['Hello'],
  '"Hello! What\'s your name?" — Hello is the greeting.',
  'Hello starts the greeting.',
  fb('Which word starts the greeting?',['Hello','My','Name','What'],0,'Greeting','Hello.')));

EXTRA.push(mc('u1','u1l1',5,'Ball Name Game.','create','hard',
  'In the Ball Name Game, two students throw a ball to practice...',
  [OPT('Greetings and names',0),OPT('Colors and numbers',1),OPT('Body parts',2),OPT('Family words',3)],0,
  'The Ball Name Game combines throwing a ball with greeting and name exchange.',
  'Ball + greeting + name = fun practice!',
  fb('What does the Ball Name Game practice?',['Greetings and names','Colors','Body parts','Alphabet'],0,'Throw and talk','Greetings and names.')));

// ═══ Unit 1 Lesson 2 — Hello/Goodbye Chants (extra 13) ═══
EXTRA.push(mc('u1','u1l2',6,'Hello Chant: I\'m fine, thank you.','remember','easy',
  'In the Hello Chant, "I\'m fine" is the answer to which question?',
  [OPT('How are you?',0),OPT("What's your name?",1),OPT('How old are you?',2),OPT('Where are you?',3)],0,
  '"I\'m fine" answers "How are you?"',
  "How are you? → I'm fine.",
  fb('What question does "I\'m fine" answer?',['How are you?',"What's your name?",'How old?','Where?'],0,'Feeling question','How are you?')));

EXTRA.push(tf('u1','u1l2',6,'"I\'m" = "I am."','understand','easy',
  '"I\'m" is a short form of "I am."',
  true,'Yes! I am → I\'m (contraction).',
  "I'm = I am.",
  fb('"I\'m" is short for...',['I am','I was','I are','I is'],0,'Contraction','I am.')));

EXTRA.push(mc('u1','u1l2',6,'Good-bye Chant — see you again.','remember','easy',
  'In the Good-bye Chant, "see you again" means...',
  [OPT('We will meet another time',0),OPT('I can see you now',1),OPT('Goodbye forever',2),OPT('Hello!',3)],0,
  '"See you again" = we will meet again in the future.',
  'See you again = meet again later.',
  fb('What does "see you again" mean?',['We\'ll meet again','I see you now','Goodbye forever','Hello'],0,'Future meeting','We\'ll meet again.')));

EXTRA.push(fill('u1','u1l2',6,'Hello, hello, hello. How are you?','remember','easy',
  'Complete: "Hello, hello, ___. How are you?"',
  'Hello, hello, ___. How are you?',
  1,['hello'],
  'The chant repeats "hello" three times: "Hello, hello, hello."',
  'Hello hello hello — repeated 3 times!',
  fb('How many times is "hello" said?',['Three (3)','One (1)','Two (2)','Four (4)'],0,'Count the hellos','Three times.')));

EXTRA.push(tf('u1','u1l2',6,'"And you?" asks the same question back.','understand','medium',
  'After "I\'m fine, thank you. And you?" — "And you?" means "how about you?"',
  true,'Yes! "And you?" returns the question.',
  '"And you?" = same to you.',
  fb('What does "And you?" mean?',['How about you?','Goodbye','Thank you','Hello'],0,'Return question','How about you?')));

EXTRA.push(ord('u1','u1l2',6,'Hello Chant full sequence.','remember','medium',
  'Put the Hello Chant lines in order.',
  ["I'm fine, thank you. And you?",'Hello, hello, hello.','How are you?'],
  [1,2,0],
  'Order: Hello hello hello → How are you? → I\'m fine, thank you. And you?',
  'Hello → How are you? → I\'m fine.',
  fb('What comes after "Hello, hello, hello"?',['How are you?',"I'm fine",'Goodbye','Okay'],0,'Next line','How are you?')));

EXTRA.push(mc('u1','u1l2',7,'Greeting Relay game.','apply','medium',
  'In the Greeting Relay, students stand in a line and pass the greeting. What do they say?',
  [OPT('How are you? I\'m fine, thank you.',0),OPT('What\'s your name? My name\'s...',1),OPT('Goodbye! See you!',2),OPT('Touch your nose!',3)],0,
  'The relay uses "How are you? I\'m fine, thank you."',
  "Relay: How are you? → I'm fine, thank you.",
  fb('What does the Greeting Relay practice?',['How are you? dialogue','Colors','Alphabet','Body parts'],0,'Greeting dialogue','How are you? dialogue.')));

EXTRA.push(mc('u1','u1l2',6,'Pronunciation: "th" in thank.','apply','medium',
  'When saying "thank you," where should your tongue be for the "th" sound?',
  [OPT('Between your teeth',0),OPT('Behind your teeth',1),OPT('On your lip',2),OPT('Far back',3)],0,
  'For "th," place your tongue lightly between your upper and lower teeth.',
  '"th" = tongue between teeth!',
  fb('Which word has the "th" sound?',['thank','fine','hello','you'],0,'Tongue between teeth','thank.')));

EXTRA.push(tf('u1','u1l2',7,'Goal 04: ask How are you every day.','evaluate','easy',
  'Goal 04 is to ask "How are you?" every time you come to class.',
  true,'Yes! It\'s a daily greeting question.',
  'Goal 04: How are you? daily.',
  fb('Should you ask "How are you?" daily?',['Yes, every day','No, never','Only Mondays','Only Fridays'],0,'Daily habit','Yes, every day.')));

EXTRA.push(match('u1','u1l2',6,'Chant questions and answers.','understand','easy',
  'Match the chant question with its answer.',
  [
    {left:'How are you?',right:"I'm fine, thank you."},
    {left:'Hello, hello, hello',right:'How are you?'},
    {left:'Goodbye, goodbye',right:'See you again'},
    {left:'And you?',right:"I'm fine."},
  ],
  'Each chant line connects to a matching line.',
  'Chant lines match in pairs.',
  fb('What answers "How are you?"',[ "I'm fine, thank you.",'Hello','Goodbye','Okay'],0,'Fine reply','I\'m fine, thank you.')));

EXTRA.push(mc('u1','u1l2',6,'Hello and Goodbye chants are opposites.','analyze','medium',
  'The Hello Chant is for arriving and the Goodbye Chant is for...',
  [OPT('Leaving',0),OPT('Eating',1),OPT('Sleeping',2),OPT('Playing',3)],0,
  'Hello = arriving. Goodbye = leaving. They are opposites.',
  'Hello = arrive. Goodbye = leave.',
  fb('When do you say the Goodbye Chant?',['When leaving','When arriving','When eating','When sleeping'],0,'Farewell','When leaving.')));

EXTRA.push(cls('u1','u1l2',6,'Hello chant words vs Goodbye chant words.','analyze','easy',
  'Classify: Hello Chant words / Goodbye Chant words.',
  ['Hello Chant','Goodbye Chant'],
  [
    {item:'How are you?',category:0},{item:'See you again',category:1},
    {item:"I'm fine",category:0},{item:'Goodbye',category:1},
  ],
  'Hello Chant = arriving words. Goodbye Chant = leaving words.',
  'Hello = fine/how. Goodbye = see you/goodbye.',
  fb('Is "See you again" in the Hello or Goodbye chant?',['Goodbye Chant','Hello Chant'],0,'Leaving','Goodbye Chant.')));

EXTRA.push(hl('u1','u1l2',6,'Highlight the feeling word.','understand','easy',
  'Click the FEELING word: "I am fine today."',
  'I am fine today',
  'fine',
  '"Fine" is the feeling word meaning "okay/good."',
  'Fine = okay/good.',
  fb('Which word tells how you feel?',['fine','I','am','today'],0,'Feeling','fine.')));

// ═══ Unit 1 Lesson 3 — Colors (extra 13) ═══
EXTRA.push(mc('u1','u1l3',8,'10 colors: red, orange, yellow, green, blue, purple, pink, white, black, brown.','remember','easy',
  'Which color is the color of grass and leaves?',
  [OPT('Green',0),OPT('Red',1),OPT('Blue',2),OPT('Pink',3)],0,
  'Green is the color of grass, leaves, and plants.',
  'Green = grass, leaves, plants!',
  fb('What color are leaves?',['Green','Red','Blue','Black'],0,'Nature color','Green.')));

EXTRA.push(mc('u1','u1l3',8,'Rainbow Chant — 7 colors.','remember','easy',
  'How many colors are in the Rainbow Chant?',
  [OPT('Seven (7)',0),OPT('Ten (10)',1),OPT('Three (3)',2),OPT('Five (5)',3)],0,
  'The Rainbow Chant has 7 colors: red, yellow, pink, blue, purple, orange, green.',
  'Rainbow = 7 colors.',
  fb('How many colors in the Rainbow Chant?',['7','10','5','3'],0,'Count them','7 colors.')));

EXTRA.push(tf('u1','u1l3',8,'Brown is one of the 10 colors.','remember','easy',
  'Brown is included in the list of 10 colors on page 8.',
  true,'Yes! Brown is color #10 in the list.',
  'Brown = color #10.',
  fb('Is brown in the 10 colors?',['Yes','No'],0,'Check the list','Yes, brown is #10.')));

EXTRA.push(cls('u1','u1l3',8,'Warm and cool colors.','analyze','medium',
  'Classify these colors as Warm or Cool.',
  ['Warm','Cool'],
  [
    {item:'Red',category:0},{item:'Blue',category:1},
    {item:'Orange',category:0},{item:'Green',category:1},
    {item:'Yellow',category:0},{item:'Purple',category:1},
  ],
  'Warm: red, orange, yellow (fire/sun). Cool: blue, green, purple (water/sky).',
  'Warm = fire colors. Cool = water colors.',
  fb('Is yellow warm or cool?',['Warm','Cool'],0,'Sun color','Warm.')));

EXTRA.push(mc('u1','u1l3',9,'Color Race game.','apply','easy',
  'In Color Race, the teacher says a color. What do students do?',
  [OPT('Find and touch something of that color',0),OPT('Say the color name',1),OPT('Draw the color',2),OPT('Sit down',3)],0,
  'Students quickly find and touch an object matching the named color.',
  'Color Race: hear → find → touch!',
  fb('Teacher says "Touch something red." You...',['Touch a red object','Say "red"','Draw red','Sit'],0,'Move and touch','Touch a red object.')));

EXTRA.push(match('u1','u1l3',8,'Colors and objects.','understand','easy',
  'Match each color to a matching object.',
  [
    {left:'Red',right:'Apple'},
    {left:'Blue',right:'Sky'},
    {left:'Yellow',right:'Sun'},
    {left:'Green',right:'Grass'},
  ],
  'Colors match natural objects.',
  'Red=apple, Blue=sky, Yellow=sun, Green=grass.',
  fb('The sun is which color?',['Yellow','Blue','Red','Green'],0,'Look up','Yellow.')));

EXTRA.push(mc('u1','u1l3',8,'What\'s this color?','remember','easy',
  'The teacher shows a banana and asks "What\'s this color?" You say...',
  [OPT('Yellow',0),OPT('Red',1),OPT('Blue',2),OPT('Purple',3)],0,
  'A banana is yellow.',
  'Banana = yellow.',
  fb('What color is a banana?',['Yellow','Red','Blue','Green'],0,'Fruit color','Yellow.')));

EXTRA.push(tf('u1','u1l3',9,'Goal 05: name 5 colors.','evaluate','easy',
  'Goal 05 requires you to name at least 5 colors.',
  true,'Yes! Name 5 colors to achieve Goal 05.',
  'Goal 05 = 5 colors.',
  fb('How many colors for Goal 05?',['5','3','10','1'],0,'Count','5 colors.')));

EXTRA.push(mc('u1','u1l3',8,'Red + Yellow = ?','understand','medium',
  'If you mix red and yellow paint, what color do you get?',
  [OPT('Orange',0),OPT('Green',1),OPT('Purple',2),OPT('Brown',3)],0,
  'Red + Yellow = Orange!',
  'Red + Yellow = Orange!',
  fb('Red + Blue = ?',['Purple','Orange','Green','Brown'],0,'Mix colors','Purple.')));

EXTRA.push(ord('u1','u1l3',8,'Rainbow Chant order.','remember','hard',
  'Put the Rainbow Chant colors in order as they appear.',
  ['Blue','Red','Green','Yellow'],
  [1,3,0,2],
  'Rainbow Chant: Red, yellow, pink, blue, purple, orange, green.',
  'Rainbow order: red, yellow, pink, blue...',
  fb('Which color comes FIRST in the Rainbow Chant?',['Red','Blue','Green','Pink'],0,'First color','Red.')));

EXTRA.push(cls('u1','u1l3',8,'Light vs dark colors.','analyze','easy',
  'Classify: Light colors / Dark colors.',
  ['Light','Dark'],
  [
    {item:'White',category:0},{item:'Black',category:1},
    {item:'Yellow',category:0},{item:'Brown',category:1},
    {item:'Pink',category:0},{item:'Purple',category:1},
  ],
  'Light: white, yellow, pink. Dark: black, brown, purple.',
  'Light = white/yellow/pink. Dark = black/brown.',
  fb('Is white light or dark?',['Light','Dark'],0,'Brightest color','Light.')));

EXTRA.push(fill('u1','u1l3',8,'What\'s this color? It\'s red.','remember','easy',
  'Complete: "What\'s this ___? It\'s red."',
  'What\'s this ___? It\'s red.',
  1,['color'],
  '"What\'s this color?" asks about the color of something.',
  'What\'s this color? = color question.',
  fb('What word goes in "What\'s this ___?"',['color','name','hello','bye'],0,'Asking about color','color.')));

EXTRA.push(hl('u1','u1l3',8,'Highlight the color word.','understand','easy',
  'Click the COLOR word: "The sky is blue today."',
  'The sky is blue today',
  'blue',
  '"Blue" is the color word describing the sky.',
  'Blue = color of the sky.',
  fb('Which word is a color?',['blue','sky','is','today'],0,'Color word','blue.')));

// ═══ Unit 1 Lesson 4 — Alphabet A-Z (extra 13) ═══
EXTRA.push(mc('u1','u1l4',10,'Alphabet Chant: 26 letters.','remember','easy',
  'How many letters are in the English alphabet?',
  [OPT('26',0),OPT('24',1),OPT('28',2),OPT('30',3)],0,
  'The English alphabet has 26 letters from A to Z.',
  '26 letters: A to Z.',
  fb('English alphabet has ___ letters.',['26','20','30','15'],0,'Count A-Z','26.')));

EXTRA.push(mc('u1','u1l4',10,'Letter after G.','remember','easy',
  'Which letter comes right after G?',
  [OPT('H',0),OPT('F',1),OPT('I',2),OPT('J',3)],0,
  'A B C D E F G H — H comes after G.',
  'G → H.',
  fb('What comes after F?',['G','E','H','D'],0,'Alphabet order','G.')));

EXTRA.push(tf('u1','u1l4',10,'Capital letters are uniform in size.','understand','easy',
  'Capital (big) letters are all the same height.',
  true,'Yes! Capitals are uniform — easier to learn first.',
  'Capitals = same height = easier.',
  fb('Are capital letters the same size?',['Yes','No'],0,'Uniform','Yes.')));

EXTRA.push(ord('u1','u1l4',10,'First 5 letters.','remember','easy',
  'Put the first 5 letters in alphabetical order.',
  ['C','A','E','B','D'],
  [1,3,0,4,2],
  'Order: A, B, C, D, E.',
  'A B C D E.',
  fb('Which letter is first?',['A','B','C','D'],0,'Very first','A.')));

EXTRA.push(mc('u1','u1l4',11,'Name card uses capital letters.','apply','medium',
  'On your name card, you write your name in...',
  [OPT('Capital (big) letters',0),OPT('Small letters',1),OPT('Numbers',2),OPT('Pictures',3)],0,
  'Name cards use capital letters because they\'re uniform and clear.',
  'Name cards = CAPITAL letters.',
  fb('Name cards use which letters?',['Capital letters','Small letters','Numbers','Symbols'],0,'Big letters','Capital letters.')));

EXTRA.push(cls('u1','u1l4',10,'Vowels and consonants.','analyze','medium',
  'Classify: Vowels / Consonants.',
  ['Vowels','Consonants'],
  [
    {item:'A',category:0},{item:'B',category:1},
    {item:'E',category:0},{item:'C',category:1},
    {item:'O',category:0},{item:'D',category:1},
  ],
  'Vowels: A E I O U (5). Consonants: the other 21.',
  'Vowels = AEIOU. Consonants = rest.',
  fb('How many vowels in English?',['5','3','7','10'],0,'AEIOU','5 vowels.')));

EXTRA.push(mc('u1','u1l4',10,'Last letter of alphabet.','remember','easy',
  'What is the last letter of the English alphabet?',
  [OPT('Z',0),OPT('Y',1),OPT('X',2),OPT('W',3)],0,
  'Z is the 26th and last letter.',
  'Z = last letter.',
  fb('After Y comes...',['Z','X','W','V'],0,'Last letter','Z.')));

EXTRA.push(tf('u1','u1l4',10,'Q comes after P.','remember','easy',
  'In the alphabet, Q comes right after P.',
  true,'Yes! O P Q — Q is after P.',
  'P → Q.',
  fb('What comes after P?',['Q','O','R','S'],0,'Alphabet','Q.')));

EXTRA.push(match('u1','u1l4',10,'Capital and small letters.','remember','easy',
  'Match each capital letter with its small letter.',
  [
    {left:'A',right:'a'},
    {left:'D',right:'d'},
    {left:'M',right:'m'},
    {left:'Z',right:'z'},
  ],
  'Each capital has a matching small letter.',
  'A↔a, D↔d, M↔m, Z↔z.',
  fb('Small letter for "D" is...',['d','b','p','q'],0,'Lowercase','d.')));

EXTRA.push(mc('u1','u1l4',11,'Advice Time: Help your friends.','evaluate','easy',
  'The Advice Time says "Help your friends." What does this mean?',
  [OPT('Support classmates who are struggling',0),OPT('Only play with friends',1),OPT('Ignore others',2),OPT('Do everything alone',3)],0,
  'Help your friends = support classmates when they need help.',
  'Help friends = kindness.',
  fb('If a friend doesn\'t know a letter, you...',['Help them','Laugh','Ignore','Tell teacher they\'re wrong'],0,'Be kind','Help them.')));

EXTRA.push(fill('u1','u1l4',10,'A B C D E.','remember','easy',
  'Complete: "A, B, ___, D, E."',
  'A, B, ___, D, E.',
  1,['C'],
  'A, B, C, D, E — C is the third letter.',
  'C = 3rd letter.',
  fb('What comes between B and D?',['C','A','E','F'],0,'Third letter','C.')));

EXTRA.push(hl('u1','u1l4',10,'Highlight a vowel.','understand','medium',
  'Click the VOWEL: "A B C D E"',
  'A B C D E',
  'A',
  '"A" is a vowel (A E I O U).',
  'A = vowel.',
  fb('Which is a vowel: A, B, or C?',['A','B','C'],0,'AEIOU','A.')));

EXTRA.push(mc('u1','u1l4',10,'Alphabet has 5 vowels.','analyze','medium',
  'How many vowels are in the English alphabet?',
  [OPT('5',0),OPT('7',1),OPT('3',2),OPT('10',3)],0,
  'There are 5 vowels: A, E, I, O, U.',
  '5 vowels: A E I O U.',
  fb('Is "B" a vowel?',['No, it\'s a consonant','Yes'],0,'AEIOU only','No, B is a consonant.')));

// ═══ Unit 2 Lesson 1 — Body Actions (extra 13) ═══
EXTRA.push(mc('u2','u2l1',12,'Close your eyes! Open your eyes! Raise your hands! Clap your hands!','remember','easy',
  'Which command tells you to shut your eyes?',
  [OPT('Close your eyes!',0),OPT('Open your eyes!',1),OPT('Raise your hands!',2),OPT('Clap your hands!',3)],0,
  '"Close your eyes!" = shut your eyes.',
  'Close = shut.',
  fb('What does "Close your eyes" mean?',['Shut your eyes','Open your eyes','Raise hands','Clap'],0,'Shut','Shut your eyes.')));

EXTRA.push(tf('u2','u2l1',12,'"Open" and "Close" are opposites.','understand','easy',
  '"Open your eyes" and "Close your eyes" are opposite commands.',
  true,'Yes! Open ↔ Close are antonyms.',
  'Open ↔ Close.',
  fb('Opposite of "open" is...',['close','raise','clap','sit'],0,'Antonym','Close.')));

EXTRA.push(mc('u2','u2l1',12,'Raise your hands!','remember','easy',
  'When the teacher asks a question and you know the answer, what do you do?',
  [OPT('Raise your hand',0),OPT('Close your eyes',1),OPT('Clap your hands',2),OPT('Sit down',3)],0,
  'You raise your hand to show you want to answer.',
  'Raise hand = I want to answer!',
  fb('To answer a question, you...',['Raise your hand','Close your eyes','Clap','Sit'],0,'Show you know','Raise your hand.')));

EXTRA.push(ord('u2','u2l1',13,'Do It Quickly order.','remember','medium',
  'Put the 4 body actions in order.',
  ['Open your eyes!','Close your eyes!','Clap your hands!','Raise your hands!'],
  [1,0,3,2],
  'Order: Close eyes → Open eyes → Raise hands → Clap hands.',
  'Close → Open → Raise → Clap.',
  fb('First action in Do It Quickly?',['Close your eyes','Open eyes','Raise hands','Clap'],0,'Start','Close your eyes.')));

EXTRA.push(cls('u2','u2l1',12,'Eyes vs hands actions.','analyze','easy',
  'Classify: Eyes action / Hands action.',
  ['Eyes','Hands'],
  [
    {item:'Close your eyes',category:0},{item:'Clap your hands',category:1},
    {item:'Open your eyes',category:0},{item:'Raise your hands',category:1},
  ],
  'Close/Open = eyes. Clap/Raise = hands.',
  'Eyes: close/open. Hands: clap/raise.',
  fb('"Clap your hands" is a ___ action.',['Hands','Eyes','Feet','Head'],0,'Body part','Hands.')));

EXTRA.push(mc('u2','u2l1',12,'Clap your hands!','remember','easy',
  'What do you do when you "clap your hands"?',
  [OPT('Bring both palms together',0),OPT('Lift hands up',1),OPT('Close eyes',2),OPT('Touch head',3)],0,
  'Clap = bring both palms together to make a sound.',
  'Clap = palms together = sound!',
  fb('How do you clap?',['Bring palms together','Lift hands up','Close eyes','Touch toes'],0,'Make a sound','Bring palms together.')));

EXTRA.push(tf('u2','u2l1',13,'"Okay!" shows understanding.','understand','easy',
  'When the teacher gives a command, saying "Okay!" shows you understood.',
  true,'Yes! "Okay!" = I understand and will do it.',
  'Okay = I understand.',
  fb('What shows you understood a command?',['"Okay!"','"Hello!"','"Goodbye!"','"Thanks!"'],0,'Agreement','"Okay!"')));

EXTRA.push(mc('u2','u2l1',13,'Goal 10: give commands to a partner.','apply','medium',
  'For Goal 10, you say "Close your eyes" to your partner. Your partner should...',
  [OPT('Close their eyes and say "Okay!"',0),OPT('Say "Hello"',1),OPT('Clap',2),OPT('Sit down',3)],0,
  'The partner follows the command and says "Okay!"',
  'Give command → partner does it + says Okay!',
  fb('You say "Open your eyes!" to your partner. They...',['Open eyes and say Okay!','Say Hello','Clap','Run'],0,'Follow command','Open eyes + Okay!')));

EXTRA.push(match('u2','u2l1',12,'Commands and actions.','understand','easy',
  'Match each command with what you do.',
  [
    {left:'Close your eyes',right:'Shut eyes'},
    {left:'Open your eyes',right:'See again'},
    {left:'Raise your hands',right:'Lift hands up'},
    {left:'Clap your hands',right:'Palms together'},
  ],
  'Each command has a matching physical action.',
  'Close=shut, Open=see, Raise=lift, Clap=together.',
  fb('What does "Raise your hands" mean?',['Lift hands up','Shut eyes','Palms together','See'],0,'Lift','Lift hands up.')));

EXTRA.push(fill('u2','u2l1',12,'Clap your hands!','remember','easy',
  'Complete: "___ your hands!"',
  '___ your hands!',
  1,['Clap'],
  '"Clap your hands!" = bring palms together.',
  'Clap = palms together.',
  fb('What do you do with your hands to make a sound?',['Clap','Raise','Close','Open'],0,'Sound','Clap.')));

EXTRA.push(hl('u2','u2l1',12,'Highlight the body part.','understand','easy',
  'Click the BODY PART: "Close your eyes now."',
  'Close your eyes now',
  'eyes',
  '"Eyes" is the body part you close.',
  'Eyes = body part for seeing.',
  fb('Which word is a body part?',['eyes','Close','your','now'],0,'Body','eyes.')));

EXTRA.push(mc('u2','u2l1',12,'TPR — Total Physical Response.','evaluate','hard',
  'Why does the book use physical actions (clapping, raising) to teach English?',
  [OPT('Movement helps the brain connect words to meaning',0),OPT('To give exercise',1),OPT('Because it\'s fun only',2),OPT('To waste time',3)],0,
  'TPR (Total Physical Response) links body movement to language learning.',
  'TPR = body + brain = faster learning!',
  fb('TPR stands for Total ___ Response.',['Physical','Personal','Practice','Perfect'],0,'Body movement','Physical.')));

EXTRA.push(tf('u2','u2l1',13,'Do It Quickly tests listening speed.','evaluate','medium',
  'The "Do It Quickly" game tests how fast students can listen and respond.',
  true,'Yes! It tests listening comprehension and quick response.',
  'Do It Quickly = listen + respond fast!',
  fb('What makes Do It Quickly challenging?',['Commands come fast','You must write','You must sing','You must draw'],0,'Speed','Commands come fast.')));

// ═══ Unit 2 Lesson 2 — Head Shoulders Knees Toes (extra 13) ═══
EXTRA.push(mc('u2','u2l2',14,'Head, shoulders, knees, toes, eyes, ears, mouth, nose.','remember','easy',
  'How many body parts are in the Head Shoulders chant?',
  [OPT('Eight (8)',0),OPT('Four (4)',1),OPT('Six (6)',2),OPT('Ten (10)',3)],0,
  '8 body parts: head, shoulders, knees, toes, eyes, ears, mouth, nose.',
  '8 body parts in the chant!',
  fb('How many body parts in the chant?',['8','4','6','10'],0,'Count','8.')));

EXTRA.push(tf('u2','u2l2',14,'You hear with your ears.','understand','easy',
  'You use your ears to hear sounds.',
  true,'Yes! Ears are for hearing.',
  'Ears = hearing.',
  fb('What do you hear with?',['Ears','Eyes','Nose','Mouth'],0,'Hearing','Ears.')));

EXTRA.push(mc('u2','u2l2',14,'Where are your knees?','remember','easy',
  'Where on your body are your knees?',
  [OPT('Middle of your leg',0),OPT('End of your foot',1),OPT('On your shoulder',2),OPT('On your head',3)],0,
  'Knees are the joint in the middle of your leg that bends.',
  'Knees = middle of leg.',
  fb('Toes are at the end of your...',['feet','hands','head','arms'],0,'Bottom','Feet.')));

EXTRA.push(cls('u2','u2l2',14,'Face vs body parts.','analyze','medium',
  'Classify: Face parts / Body parts.',
  ['Face','Body'],
  [
    {item:'Eyes',category:0},{item:'Shoulders',category:1},
    {item:'Nose',category:0},{item:'Knees',category:1},
    {item:'Mouth',category:0},{item:'Toes',category:1},
  ],
  'Face: eyes, nose, mouth, ears. Body: shoulders, knees, toes.',
  'Face = eyes/nose/mouth. Body = shoulders/knees/toes.',
  fb('Is "nose" on your face or body?',['Face','Body'],0,'Smell','Face.')));

EXTRA.push(ord('u2','u2l2',14,'Chant order top to bottom.','remember','easy',
  'Put the body parts in chant order (top to bottom).',
  ['Knees','Head','Toes','Shoulders'],
  [1,3,0,2],
  'Order: Head → Shoulders → Knees → Toes.',
  'Head → Shoulders → Knees → Toes.',
  fb('Which comes first in the chant?',['Head','Shoulders','Knees','Toes'],0,'Top','Head.')));

EXTRA.push(match('u2','u2l2',14,'Body parts and functions.','understand','medium',
  'Match each body part with what it does.',
  [
    {left:'Eyes',right:'See'},
    {left:'Ears',right:'Hear'},
    {left:'Nose',right:'Smell'},
    {left:'Mouth',right:'Eat/Speak'},
  ],
  'Each body part has a function.',
  'Eyes=see, Ears=hear, Nose=smell, Mouth=eat.',
  fb('What do you smell with?',['Nose','Eyes','Ears','Mouth'],0,'Smell','Nose.')));

EXTRA.push(tf('u2','u2l2',15,'You have two shoulders.','understand','easy',
  'We say "shoulders" (plural) because we have two shoulders.',
  true,'Yes! Two shoulders → shoulders (with -s).',
  'Two shoulders = plural.',
  fb('How many shoulders?',['Two','One','Three','Four'],0,'Left and right','Two.')));

EXTRA.push(mc('u2','u2l2',15,'Wash your hands advice.','evaluate','easy',
  'The Advice Time says "Wash your hands." When should you wash them?',
  [OPT('Before eating and after using the bathroom',0),OPT('Only when dirty',1),OPT('Never',2),OPT('Once a week',3)],0,
  'Wash hands before eating and after the bathroom to remove germs.',
  'Wash hands = stay healthy!',
  fb('Why wash your hands?',['To remove germs','To get wet','To get cold','No reason'],0,'Health','To remove germs.')));

EXTRA.push(fill('u2','u2l2',14,'Eyes and ears and mouth and nose.','remember','easy',
  'Complete: "Eyes and ___ and mouth and nose."',
  'Eyes and ___ and mouth and nose.',
  1,['ears'],
  'The chant line: "Eyes and ears and mouth and nose."',
  'Eyes → Ears → Mouth → Nose.',
  fb('Which comes after "Eyes"?',['ears','mouth','nose','head'],0,'Next part','Ears.')));

EXTRA.push(hl('u2','u2l2',14,'Highlight a face part.','understand','easy',
  'Click the FACE part: "Touch your nose please."',
  'Touch your nose please',
  'nose',
  '"Nose" is the face part you touch.',
  'Nose = face part.',
  fb('Which is a face part?',['nose','Touch','your','please'],0,'Face','nose.')));

EXTRA.push(mc('u2','u2l2',15,'The Teacher Says game.','understand','medium',
  'In "The Teacher Says" game, when do you do the action?',
  [OPT('Only when you hear "The Teacher says" first',0),OPT('Every time',1),OPT('Never',2),OPT('Only at the end',3)],0,
  'You only act when the command starts with "The Teacher says..."',
  'The Teacher Says = do it! No phrase = don\'t move!',
  fb('Teacher says "Touch your nose" (without "The Teacher says"). You...',[ "Don't move!",'Touch nose','Clap','Sit'],0,'Listen for the phrase','Don\'t move!')));

EXTRA.push(cls('u2','u2l2',14,'One vs two (singular vs plural).','analyze','medium',
  'Classify: One (singular) / Two (plural).',
  ['One','Two'],
  [
    {item:'Head',category:0},{item:'Eyes',category:1},
    {item:'Nose',category:0},{item:'Ears',category:1},
    {item:'Mouth',category:0},{item:'Shoulders',category:1},
  ],
  'One: head, nose, mouth. Two: eyes, ears, shoulders.',
  'One = head/nose/mouth. Two = eyes/ears/shoulders.',
  fb('Is "head" singular or plural?',['Singular (one)','Plural (two)'],0,'One head','Singular.')));

EXTRA.push(mc('u2','u2l2',14,'Pronunciation: "shoulder" has -er.','apply','medium',
  'The book notes students should pay attention to which sound in "shoulder"?',
  [OPT('The "-er" at the end',0),OPT('The "sh" at the start',1),OPT('The "oul" in the middle',2),OPT('No special sound',3)],0,
  '"Shoulder" ends with the "-er" sound — don\'t forget it!',
  'Shoulder = shoul-DER!',
  fb('Which word ends with "-er"?',['shoulder','head','knee','toe'],0,'-er sound','shoulder.')));

// ═══ Unit 2 Lesson 3 — Classroom Instructions (extra 13) ═══
EXTRA.push(mc('u2','u2l3',16,'Please stand up. Please sit down. Please come to the front. Please make a line. Please make a circle. Please go back to your seat.','remember','easy',
  'How many classroom commands are on page 16?',
  [OPT('Six (6)',0),OPT('Four (4)',1),OPT('Eight (8)',2),OPT('Three (3)',3)],0,
  '6 commands: stand up, come to front, make a line, make a circle, go back, sit down.',
  '6 commands on page 16.',
  fb('How many classroom commands?',['6','4','8','3'],0,'Count','6.')));

EXTRA.push(tf('u2','u2l3',16,'"Please stand up" and "Please sit down" are opposites.','understand','easy',
  'Standing up and sitting down are opposite actions.',
  true,'Yes! Stand ↔ Sit are opposites.',
  'Stand ↔ Sit.',
  fb('Opposite of "stand up"?',['sit down','make a circle','clap','come front'],0,'Opposite','Sit down.')));

EXTRA.push(mc('u2','u2l3',16,'Please make a line.','understand','easy',
  'When the teacher says "Please make a line," students...',
  [OPT('Stand one behind the other in a row',0),OPT('Stand in a circle',1),OPT('Sit down',2),OPT('Go home',3)],0,
  'A line = students stand one behind the other.',
  'Line = one behind the other.',
  fb('"Make a line" means...',['Stand in a row','Stand in a circle','Sit down','Go home'],0,'Row','Stand in a row.')));

EXTRA.push(mc('u2','u2l3',16,'Please make a circle.','understand','easy',
  '"Please make a circle" means students form a...',
  [OPT('Round shape facing the center',0),OPT('Straight line',1),OPT('Square',2),OPT('Triangle',3)],0,
  'A circle = round shape, everyone facing the center.',
  'Circle = round, facing in.',
  fb('"Make a circle" means...',['Stand in a round shape','Stand in a row','Sit','Leave'],0,'Round','Stand in a round shape.')));

EXTRA.push(ord('u2','u2l3',16,'Classroom activity sequence.','apply','medium',
  'Put the activity in order.',
  ['Please sit down.','Please make a circle.','Please come to the front.','Please stand up.'],
  [3,2,0,1],
  'Order: Stand up → Come to front → Make a circle → Sit down.',
  'Stand → Come → Circle → Sit.',
  fb('What comes after "stand up"?',['Come to the front','Sit down','Make a circle','Go home'],0,'Next step','Come to the front.')));

EXTRA.push(cls('u2','u2l3',16,'Moving vs staying commands.','analyze','medium',
  'Classify: Moving commands / Staying commands.',
  ['Moving','Staying'],
  [
    {item:'Come to the front',category:0},{item:'Sit down',category:1},
    {item:'Make a line',category:0},{item:'Close your eyes',category:1},
    {item:'Go back to your seat',category:0},{item:'Raise your hand',category:1},
  ],
  'Moving = change location. Staying = do it where you are.',
  'Moving = go somewhere. Staying = stay put.',
  fb('Is "stand up" moving or staying?',['Staying (at your seat)','Moving to a new place'],0,'Same spot','Staying.')));

EXTRA.push(match('u2','u2l3',16,'Opposite commands.','understand','easy',
  'Match each command with its opposite.',
  [
    {left:'Please stand up',right:'Please sit down'},
    {left:'Please come to the front',right:'Please go back to your seat'},
    {left:'Please make a line',right:'Please make a circle'},
  ],
  'Most classroom commands have an opposite.',
  'Commands come in opposite pairs.',
  fb('Opposite of "come to the front"?',['Go back to your seat','Stand up','Make a circle','Clap'],0,'Reverse','Go back to your seat.')));

EXTRA.push(tf('u2','u2l3',16,'"Please" makes commands polite.','understand','easy',
  'Adding "Please" before a command makes it more polite.',
  true,'Yes! "Please" is the magic polite word.',
  'Please = polite.',
  fb('Which is more polite?',['"Please sit down"','"Sit down"'],0,'Magic word','"Please sit down".')));

EXTRA.push(mc('u2','u2l3',17,'Be the Teacher game.','apply','medium',
  'In "Be the Teacher," one student gives commands. What does the partner do?',
  [OPT('Follows the commands and says "Okay!"',0),OPT('Ignores them',1),OPT('Gives commands back',2),OPT('Leaves',3)],0,
  'The partner follows the commands and says "Okay!"',
  'Be the Teacher: give → partner does + says Okay!',
  fb('In "Be the Teacher", the partner...',['Follows commands and says Okay!','Ignores','Leaves','Sleeps'],0,'Follow','Follows + Okay!')));

EXTRA.push(fill('u2','u2l3',16,'Please go back to your seat.','remember','easy',
  'Complete: "Please ___ back to your seat."',
  'Please ___ back to your seat.',
  1,['go'],
  '"Please go back to your seat" = return to your chair.',
  'Go back = return.',
  fb('What word means "return"?',['go','come','sit','stand'],0,'Return','go.')));

EXTRA.push(hl('u2','u2l3',16,'Highlight the polite word.','understand','easy',
  'Click the POLITE word: "Please stand up now."',
  'Please stand up now',
  'Please',
  '"Please" is the polite word.',
  'Please = polite.',
  fb('Which word is polite?',['Please','stand','up','now'],0,'Magic word','Please.')));

EXTRA.push(tf('u2','u2l3',17,'Children understand more than they can say.','evaluate','hard',
  'According to the teaching tip, children can understand more words than they can actively speak.',
  true,'Yes! Comprehension comes before production.',
  'Understand > Speak.',
  fb('Which develops first?',['Understanding','Speaking'],0,'Listen first','Understanding.')));

EXTRA.push(mc('u2','u2l3',17,'Goal 14: give commands.','evaluate','medium',
  'Goal 14 requires students to GIVE commands to a friend. What does this test?',
  [OPT('Speaking ability (production)',0),OPT('Listening only',1),OPT('Drawing',2),OPT('Singing',3)],0,
  'Goal 14 tests speaking (production), while Goal 13 tests listening (comprehension).',
  'Goal 14 = speak. Goal 13 = listen.',
  fb('Goal 14 tests which skill?',['Speaking','Listening','Drawing','Singing'],0,'Production','Speaking.')));

// ═══ Unit 2 Lesson 4 — Small Letters (extra 13) ═══
EXTRA.push(mc('u2','u2l4',18,'Small letters: a b c d e...','remember','easy',
  'What is the small (lowercase) letter for "B"?',
  [OPT('b',0),OPT('B',1),OPT('d',2),OPT('p',3)],0,
  'Small b is the lowercase of B.',
  'B → b.',
  fb('Small letter for "A"?',['a','A','d','q'],0,'Lowercase','a.')));

EXTRA.push(mc('u2','u2l4',19,'Short letters: a c e i m n o r s u v w x z.','remember','medium',
  'Which letter is a SHORT letter?',
  [OPT('a',0),OPT('b',1),OPT('g',2),OPT('h',3)],0,
  'Short letters stay between the midline and baseline.',
  'Short = between lines.',
  fb('Is "o" short, tall, or tail?',['Short','Tall','Tail'],0,'Between lines','Short.')));

EXTRA.push(mc('u2','u2l4',19,'Tail letters: g j p q y.','remember','medium',
  'Which letter is a TAIL letter?',
  [OPT('g',0),OPT('a',1),OPT('b',2),OPT('t',3)],0,
  'Tail letters: g, j, p, q, y — they go below the baseline.',
  'Tail = below the line.',
  fb('Is "y" short, tall, or tail?',['Tail','Short','Tall'],0,'Below','Tail.')));

EXTRA.push(mc('u2','u2l4',19,'Tall letters: b d f h k l t.','remember','medium',
  'Which letter is a TALL letter?',
  [OPT('b',0),OPT('a',1),OPT('g',2),OPT('s',3)],0,
  'Tall letters go above the midline.',
  'Tall = above the line.',
  fb('Is "t" tall or short?',['Tall','Short'],0,'Above','Tall.')));

EXTRA.push(cls('u2','u2l4',19,'Short, tall, tail.','analyze','hard',
  'Classify: Short / Tall.',
  ['Short','Tall'],
  [
    {item:'a',category:0},{item:'b',category:1},
    {item:'c',category:0},{item:'d',category:1},
    {item:'s',category:0},{item:'h',category:1},
  ],
  'Short: a, c, s. Tall: b, d, h.',
  'Short = between lines. Tall = above.',
  fb('Is "d" short or tall?',['Tall','Short'],0,'Above','Tall.')));

EXTRA.push(tf('u2','u2l4',18,'Every capital has a matching small letter.','understand','easy',
  'Each capital letter has a small letter partner (A↔a, B↔b...).',
  true,'Yes! 26 capitals, 26 small letters.',
  'A↔a, B↔b, C↔c...',
  fb('Does "G" have a small letter?',['Yes, "g"','No'],0,'Lowercase','Yes, "g".')));

EXTRA.push(match('u2','u2l4',18,'Capitals and smalls.','remember','easy',
  'Match capital to small.',
  [
    {left:'A',right:'a'},
    {left:'B',right:'b'},
    {left:'M',right:'m'},
    {left:'Z',right:'z'},
  ],
  'Every capital pairs with its small letter.',
  'A↔a, B↔b, M↔m, Z↔z.',
  fb('Small letter for "M"?',['m','n','w','u'],0,'Lowercase','m.')));

EXTRA.push(mc('u2','u2l4',19,'Short/Tall/Tail game.','apply','medium',
  'In the game: Short = sit in chair, Tall = stand on tiptoes. What do Tail letters make you do?',
  [OPT('Sit on the floor',0),OPT('Stand up',1),OPT('Jump',2),OPT('Clap',3)],0,
  'Tail letters → sit on the floor.',
  'Short=sit, Tall=stand, Tail=floor!',
  fb('The letter "p" is tail. In the game you...',['Sit on the floor','Stand up','Sit in chair','Jump'],0,'Tail','Sit on the floor.')));

EXTRA.push(tf('u2','u2l4',19,'There are 5 vowels in English.','remember','medium',
  'English has 5 vowels: a, e, i, o, u.',
  true,'Yes! 5 vowels: a e i o u.',
  '5 vowels: a e i o u.',
  fb('How many vowels?',['5','7','3','10'],0,'AEIOU','5.')));

EXTRA.push(ord('u2','u2l4',18,'Alphabet order.','remember','easy',
  'Put in alphabetical order.',
  ['D','A','C','B'],
  [1,3,2,0],
  'A B C D.',
  'A-B-C-D.',
  fb('Which is first?',['A','B','C','D'],0,'First','A.')));

EXTRA.push(fill('u2','u2l4',18,'Aa Bb Cc.','remember','easy',
  'Complete: "Aa, Bb, ___, Dd."',
  'Aa, Bb, ___, Dd.',
  1,['Cc'],
  'Aa, Bb, Cc, Dd — Cc is third.',
  'Cc = 3rd pair.',
  fb('After Bb comes...',['Cc','Aa','Dd','Ee'],0,'Third','Cc.')));

EXTRA.push(hl('u2','u2l4',19,'Highlight a tail letter.','understand','medium',
  'Click the TAIL letter: "a b g h"',
  'a b g h',
  'g',
  '"g" is a tail letter (goes below the line).',
  'g = tail letter.',
  fb('Which is a tail letter?',['g','a','b','h'],0,'Below line','g.')));

EXTRA.push(mc('u2','u2l4',19,'Goal 16: alphabet backwards.','apply','hard',
  'Goal 16 asks students to say the alphabet backwards. After "z" comes...',
  [OPT('y',0),OPT('x',1),OPT('a',2),OPT('b',3)],0,
  'Backwards: z, y, x, w, v...',
  'Backwards: z → y → x...',
  fb('Going backwards: z, ___, x...',['y','w','a','v'],0,'After z','y.')));

// ═══ Unit 3 Lesson 1 — Introductions (extra 13) ═══
EXTRA.push(mc('u3','u3l1',20,'This is my brother, Jack. Nice to meet you.','remember','easy',
  'Steven says "This is my brother, Jack." Who is Jack to Steven?',
  [OPT('Brother',0),OPT('Friend',1),OPT('Father',2),OPT('Teacher',3)],0,
  'Jack is Steven\'s brother.',
  'Brother = male sibling.',
  fb('"This is my sister" introduces a...',['female sibling','male sibling','friend','teacher'],0,'Female','Female sibling.')));

EXTRA.push(mc('u3','u3l1',20,'Nice to meet you. Nice to meet you, too.','remember','easy',
  'What is the reply to "Nice to meet you"?',
  [OPT('Nice to meet you, too.',0),OPT('Goodbye!',1),OPT("What's your name?",2),OPT('Okay!',3)],0,
  'The reply is "Nice to meet you, too."',
  'Nice to meet you → too!',
  fb('Reply to "Nice to meet you"?',['Nice to meet you, too!','Goodbye!','Hello!','Thanks!'],0,'Return greeting','Nice to meet you, too!')));

EXTRA.push(tf('u3','u3l1',20,'"Sister" is a female sibling.','understand','easy',
  'A "sister" is a female family member (sibling).',
  true,'Yes! Sister = female sibling.',
  'Sister = female sibling.',
  fb('Is "brother" male or female?',['Male','Female'],0,'Male sibling','Male.')));

EXTRA.push(ord('u3','u3l1',20,'Introduction dialogue order.','apply','medium',
  'Put the introduction in order.',
  ['Jack: Nice to meet you, too.','Steven: This is my brother, Jack.','Labeeb: Nice to meet you.'],
  [1,2,0],
  'Order: Introduce → Nice to meet you → Nice to meet you, too.',
  'Introduce → meet → meet too.',
  fb('What comes first?',['"This is my brother"','"Nice to meet you"','"Nice to meet you, too"','"Goodbye"'],0,'Introduce','"This is my brother".')));

EXTRA.push(match('u3','u3l1',21,'Introduction phrases.','understand','easy',
  'Match the introduction with the situation.',
  [
    {left:'This is my brother',right:'Male sibling'},
    {left:'This is my sister',right:'Female sibling'},
    {left:'This is my friend',right:'Classmate/friend'},
    {left:'Nice to meet you',right:'Meeting someone new'},
  ],
  'Each phrase matches a situation.',
  'Brother/sister/friend + Nice to meet you.',
  fb('To introduce a classmate, say...',['This is my friend','This is my brother','This is my sister','Goodbye'],0,'Classmate','This is my friend.')));

EXTRA.push(mc('u3','u3l1',21,'Goal 17: groups of 3.','apply','easy',
  'For Goal 17, introduction dialogues need how many students?',
  [OPT('Three (3)',0),OPT('Two (2)',1),OPT('Four (4)',2),OPT('Five (5)',3)],0,
  '3 students: A introduces B to C.',
  '3 people: A → B → C.',
  fb('Why 3 people for introductions?',['A introduces B to C','Only 2 needed','4 is better','No reason'],0,'Think','A introduces B to C.')));

EXTRA.push(cls('u3','u3l1',20,'Male vs female family words.','analyze','easy',
  'Classify: Male / Female.',
  ['Male','Female'],
  [
    {item:'Brother',category:0},{item:'Sister',category:1},
    {item:'Dad',category:0},{item:'Mom',category:1},
    {item:'Grandpa',category:0},{item:'Grandma',category:1},
  ],
  'Male: brother, dad, grandpa. Female: sister, mom, grandma.',
  'Male: brother/dad/grandpa. Female: sister/mom/grandma.',
  fb('Is "Grandma" male or female?',['Female','Male'],0,'Grandmother','Female.')));

EXTRA.push(tf('u3','u3l1',21,'Shaking hands shows respect.','evaluate','easy',
  'Shaking hands when introduced is a sign of politeness and respect.',
  true,'Yes! A handshake = non-verbal respect.',
  'Handshake = respect.',
  fb('Shaking hands shows...',['politeness and respect','anger','tiredness','sadness'],0,'Respect','Politeness and respect.')));

EXTRA.push(fill('u3','u3l1',21,'This is my friend, Ted.','apply','easy',
  'Complete: "Nice to ___ you!"',
  'Nice to ___ you!',
  1,['meet'],
  '"Nice to meet you!" = standard phrase when meeting someone.',
  'Nice to MEET you!',
  fb('What goes in "Nice to ___ you"?',['meet','see','find','know'],0,'Meeting','meet.')));

EXTRA.push(hl('u3','u3l1',20,'Highlight the relationship word.','understand','easy',
  'Click the RELATIONSHIP word: "This is my brother Jack."',
  'This is my brother Jack',
  'brother',
  '"Brother" is the relationship word.',
  'Brother = relationship.',
  fb('Which word shows relationship?',['brother','This','is','Jack'],0,'Family','brother.')));

EXTRA.push(mc('u3','u3l1',20,'"Too" means "also."','understand','medium',
  'In "Nice to meet you, too," what does "too" mean?',
  [OPT('Also / as well',0),OPT('Very',1),OPT('Goodbye',2),OPT('Please',3)],0,
  '"Too" = also — I feel the same way.',
  'Too = also.',
  fb('"Too" means...',['also','very','goodbye','please'],0,'Same','also.')));

EXTRA.push(mc('u3','u3l1',21,'Goal 18: introduce a friend.','apply','easy',
  'For Goal 18, you introduce a friend by saying...',
  [OPT('"This is my friend, ___."',0),OPT('"My name is ___."',1),OPT('"How are you?"',2),OPT('"Goodbye!"',3)],0,
  '"This is my friend, [name]" introduces a friend.',
  'This is my friend = introduction.',
  fb('How do you introduce a friend?',['"This is my friend, ___"','"My name is ___"','"How are you?"','"Goodbye"'],0,'Friend intro','"This is my friend, ___".')));

// ═══ Unit 3 Lesson 2 — Five Little Monkeys (extra 13) ═══
EXTRA.push(mc('u3','u3l2',22,'Five little monkeys jumping on the bed.','remember','easy',
  'How many monkeys are jumping on the bed at the start?',
  [OPT('Five (5)',0),OPT('Three (3)',1),OPT('Ten (10)',2),OPT('One (1)',3)],0,
  'Five little monkeys jump on the bed.',
  '5 monkeys at the start.',
  fb('After one falls, how many left?',['Four (4)','Three (3)','Five (5)','Two (2)'],0,'5-1=4','Four.')));

EXTRA.push(tf('u3','u3l2',22,'One monkey bumped his head.','understand','easy',
  'The monkey that fell off bumped his head and said "Ouch!"',
  true,'Yes! He fell, bumped his head, and said "Ouch!"',
  'Fall → bump head → Ouch!',
  fb('What does "Ouch!" express?',['Pain','Happiness','Hunger','Sleep'],0,'Pain','Pain.')));

EXTRA.push(mc('u3','u3l2',22,'Mom called the doctor.','remember','easy',
  'After the monkey fell, who called the doctor?',
  [OPT('Mom',0),OPT('Dad',1),OPT('The monkey',2),OPT('The teacher',3)],0,
  'Mom called the doctor.',
  'Mom called the doctor.',
  fb('What did the doctor say?',['"No more monkeys jumping on the bed!"','Hello!','Jump more!','Okay!'],0,'Warning','No more jumping!')));

EXTRA.push(ord('u3','u3l2',23,'Chant event sequence.','remember','medium',
  'Put the chant events in order.',
  ['Mom calls doctor','5 monkeys jumping','4 monkeys jumping','One falls and bumps head'],
  [1,3,0,2],
  'Order: 5 jump → one falls → Mom calls → 4 jump.',
  '5 jump → fall → call → 4 jump.',
  fb('What happens first?',['5 monkeys jumping','One falls','Mom calls','Doctor says'],0,'Start','5 monkeys jumping.')));

EXTRA.push(cls('u3','u3l2',22,'Family members in chant.','analyze','easy',
  'Classify: Which family members ARE / ARE NOT in the chant variations?',
  ['In the chant','Not in the chant'],
  [
    {item:'Mom',category:0},{item:'Teacher',category:1},
    {item:'Dad',category:0},{item:'Friend',category:1},
    {item:'Grandma',category:0},{item:'Brother',category:1},
  ],
  'Chant uses: Mom, Dad, Grandma, Grandpa. Not: Teacher, Friend, Brother.',
  'Chant family: Mom/Dad/Grandma/Grandpa.',
  fb('Is "Grandpa" in the chant?',['Yes','No'],0,'Chant variation','Yes.')));

EXTRA.push(tf('u3','u3l2',23,'Advice: Obey your parents.','evaluate','easy',
  'The Advice Time says "Obey your parents." The monkeys didn\'t obey and got hurt.',
  true,'Yes! The chant teaches obeying parents for safety.',
  'Obey parents = stay safe.',
  fb('What is the Advice Time message?',['Obey your parents','Wash hands','Help friends','Clap hands'],0,'Obedience','Obey your parents.')));

EXTRA.push(match('u3','u3l2',22,'Chant events.','understand','easy',
  'Match the event with what happens.',
  [
    {left:'5 monkeys jumping',right:'On the bed'},
    {left:'One falls off',right:'Bumps his head'},
    {left:'Mom calls',right:'The doctor'},
    {left:'Doctor says',right:'No more jumping!'},
  ],
  'Each event leads to the next.',
  '5 jump → fall → call → no more!',
  fb('Who does Mom call?',['The doctor','The teacher','Dad','Grandma'],0,'Medical','The doctor.')));

EXTRA.push(mc('u3','u3l2',22,'Chant counts down.','understand','medium',
  'The chant counts DOWN from 5. After "four little monkeys," comes...',
  [OPT('Three little monkeys',0),OPT('Five little monkeys',1),OPT('Two little monkeys',2),OPT('Ten little monkeys',3)],0,
  '5 → 4 → 3 → 2 → 1: counting down.',
  'Count down: 5, 4, 3, 2, 1.',
  fb('After 3 monkeys, how many?',['Two (2)','Four (4)','One (1)','Five (5)'],0,'3-1=2','Two.')));

EXTRA.push(fill('u3','u3l2',22,'No more monkeys jumping on the bed!','remember','easy',
  'Complete: "No more ___ jumping on the bed!"',
  'No more ___ jumping on the bed!',
  1,['monkeys'],
  '"No more monkeys jumping on the bed!" = doctor\'s words.',
  'No more monkeys!',
  fb('What did the doctor say about monkeys?',['No more jumping','Jump more','Hello','Okay'],0,'Warning','No more jumping.')));

EXTRA.push(hl('u3','u3l2',22,'Highlight the number word.','understand','easy',
  'Click the NUMBER: "Five little monkeys jumping."',
  'Five little monkeys jumping',
  'Five',
  '"Five" is the number word.',
  'Five = 5.',
  fb('Which word is a number?',['Five','little','monkeys','jumping'],0,'Number','Five.')));

EXTRA.push(mc('u3','u3l2',23,'Five Little Monkeys game.','create','hard',
  'In the Five Little Monkeys Game, 7 volunteers are needed. Why 7?',
  [OPT('5 monkeys + Mom + Doctor',0),OPT('7 is lucky',1),OPT('7 body parts',2),OPT('Random choice',3)],0,
  '7 roles: 5 monkeys, 1 Mom, 1 Doctor.',
  '7 = 5 monkeys + Mom + Doctor.',
  fb('Who are the 7 volunteers?',['5 monkeys + Mom + Doctor','7 random students','7 doctors','7 teachers'],0,'Roles','5 monkeys + Mom + Doctor.')));

EXTRA.push(tf('u3','u3l2',22,'The chant teaches subtraction.','analyze','medium',
  'The Five Little Monkeys chant teaches counting down (subtraction).',
  true,'Yes! 5 → 4 → 3 → 2 → 1 = subtraction.',
  'Chant = subtraction practice.',
  fb('What math skill does the chant teach?',['Counting down (subtraction)','Addition','Multiplication','Division'],0,'Less and less','Counting down.')));

// ═══ Unit 3 Lesson 3 — Family Members (extra 13) ═══
EXTRA.push(mc('u3','u3l3',24,'Grandpa, Grandma, Dad, Mom, brother, sister.','remember','easy',
  'Which two are the GRANDPARENTS?',
  [OPT('Grandpa and Grandma',0),OPT('Dad and Mom',1),OPT('Brother and Sister',2),OPT('Teacher and Friend',3)],0,
  'Grandpa and Grandma = grandparents (oldest generation).',
  'Grandpa + Grandma = grandparents.',
  fb('"Grandma" is your...',['grandmother','mother','sister','aunt'],0,'Grandparent','Grandmother.')));

EXTRA.push(tf('u3','u3l3',24,'Mom = Mother (informal).','understand','easy',
  '"Mom" is the informal word for "Mother."',
  true,'Yes! Mom = Mother (informal).',
  'Mom = Mother.',
  fb('"Dad" is informal for...',['Father','Brother','Grandpa','Uncle'],0,'Male parent','Father.')));

EXTRA.push(cls('u3','u3l3',24,'Male vs female family.','analyze','easy',
  'Classify: Male / Female.',
  ['Male','Female'],
  [
    {item:'Grandpa',category:0},{item:'Grandma',category:1},
    {item:'Dad',category:0},{item:'Mom',category:1},
    {item:'Brother',category:0},{item:'Sister',category:1},
  ],
  'Male: Grandpa, Dad, Brother. Female: Grandma, Mom, Sister.',
  'Male: Grandpa/Dad/Brother. Female: Grandma/Mom/Sister.',
  fb('Is "Sister" male or female?',['Female','Male'],0,'Female','Female.')));

EXTRA.push(mc('u3','u3l3',24,'How many family members? (7)','remember','easy',
  'The book shows 7 family members. Which group shows 7?',
  [OPT('Grandpa, Grandma, Dad, Mom, brother, brother, sister',0),OPT('Dad, Mom, brother',1),OPT('Grandpa, Grandma',2),OPT('Mom, Dad',3)],0,
  '7 members: Grandpa, Grandma, Dad, Mom, brother, brother, sister.',
  '7 family members.',
  fb('How many brothers in the picture?',['Two (2)','One (1)','Three (3)','Zero'],0,'Numbers 5 and 6','Two.')));

EXTRA.push(match('u3','u3l3',24,'Family and generations.','understand','medium',
  'Match family members with their generation.',
  [
    {left:'Grandpa & Grandma',right:'Grandparents (oldest)'},
    {left:'Dad & Mom',right:'Parents (middle)'},
    {left:'Brother & Sister',right:'Children (youngest)'},
    {left:'Me',right:'Children (youngest)'},
  ],
  'Three generations: grandparents → parents → children.',
  'Grandparents → Parents → Children.',
  fb('Which generation are you?',['Children','Parents','Grandparents'],0,'Youngest','Children.')));

EXTRA.push(tf('u3','u3l3',25,'Five Finger Game uses 5 fingers.','understand','easy',
  'In the Five Finger Game, students put down one finger for each family word they hear.',
  true,'Yes! 5 fingers = 5 family words.',
  '5 fingers = 5 words.',
  fb('How many fingers in the Five Finger Game?',['Five (5)','Ten (10)','Three (3)','Two (2)'],0,'One hand','Five.')));

EXTRA.push(mc('u3','u3l3',25,'Goal 22: draw and say family.','apply','medium',
  'Goal 22 asks you to draw your family and say...',
  [OPT('"This is my ___."',0),OPT('"What\'s your name?"',1),OPT('"How are you?"',2),OPT('"Goodbye!"',3)],0,
  'You say "This is my [Mom/Dad/etc.]" for each person.',
  'Draw → say "This is my ___".',
  fb('Looking at your drawing, you say...',['"This is my Mom/Dad"','"What\'s your name?"','"How are you?"','"Goodbye"'],0,'Family role','"This is my Mom/Dad".')));

EXTRA.push(ord('u3','u3l3',25,'Five Finger Game word order.','remember','hard',
  'Put the Five Finger Game words in order.',
  ['sister','brother','dad','grandpa','grandma'],
  [3,2,4,0,1],
  'Order: grandpa, dad, grandma, sister, brother (from CD).',
  'Listen carefully to the order.',
  fb('Which comes first in the game?',['grandpa','sister','dad','brother'],0,'First word','grandpa.')));

EXTRA.push(fill('u3','u3l3',24,'This is my dad.','remember','easy',
  'Complete: "This is my ___." (male parent)',
  'This is my ___.',
  1,['Dad'],
  '"This is my Dad" — Dad = male parent.',
  'Dad = father.',
  fb('"This is my ___" (female parent)',['Mom','Dad','Brother','Sister'],0,'Mother','Mom.')));

EXTRA.push(hl('u3','u3l3',24,'Highlight a family word.','understand','easy',
  'Click the FAMILY word: "My sister is young."',
  'My sister is young',
  'sister',
  '"Sister" is the family word.',
  'Sister = family.',
  fb('Which is a family word?',['sister','My','is','young'],0,'Family','sister.')));

EXTRA.push(mc('u3','u3l3',24,'Parents = Mom and Dad.','understand','easy',
  'Your parents are your...',
  [OPT('Mom and Dad',0),OPT('Brother and Sister',1),OPT('Grandpa and Grandma',2),OPT('Friends',3)],0,
  'Parents = Mom (mother) and Dad (father).',
  'Parents = Mom + Dad.',
  fb('Your grandparents are...',['Grandpa and Grandma','Mom and Dad','Brother and Sister','Friends'],0,'Oldest','Grandpa and Grandma.')));

EXTRA.push(tf('u3','u3l3',24,'Family vocabulary is practical.','evaluate','easy',
  'Learning family words helps you talk about your own family in English.',
  true,'Yes! Family vocabulary is immediately useful.',
  'Family words = practical!',
  fb('Why learn family vocabulary?',['To talk about your family','Only for tests','Not useful','Only for reading'],0,'Practical','To talk about your family.')));

// ═══ Unit 3 Lesson 4 — Phonics A-E (extra 13) ═══
EXTRA.push(mc('u3','u3l4',26,'A=/a/ apple, B=/b/ bear, C=/k/ cow, D=/d/ duck, E=/e/ egg.','remember','easy',
  'What is the key word for the letter A?',
  [OPT('Apple',0),OPT('Bear',1),OPT('Cow',2),OPT('Duck',3)],0,
  'A says /a/ as in apple.',
  'A = /a/ = apple!',
  fb('Key word for B?',['Bear','Apple','Cow','Duck'],0,'Furry animal','Bear.')));

EXTRA.push(mc('u3','u3l4',26,'C says /k/ as in cow.','remember','easy',
  'What sound does C make in "cow"?',
  [OPT('/k/',0),OPT('/s/',1),OPT('/ch/',2),OPT('/sh/',3)],0,
  'C in "cow" says /k/ (hard c).',
  'C = /k/ = cow!',
  fb('Key word for C?',['Cow','Cat','Cup','Car'],0,'Moo!','Cow.')));

EXTRA.push(tf('u3','u3l4',26,'E says /e/ as in egg.','remember','easy',
  'The key word for E is "egg."',
  true,'Yes! E says /e/ as in egg.',
  'E = /e/ = egg!',
  fb('Key word for E?',['Egg','Eat','Eye','Ear'],0,'Chicken lays it','Egg.')));

EXTRA.push(match('u3','u3l4',26,'Letters and key words.','remember','easy',
  'Match each letter with its key word.',
  [
    {left:'A',right:'Apple'},
    {left:'B',right:'Bear'},
    {left:'C',right:'Cow'},
    {left:'D',right:'Duck'},
  ],
  'A=apple, B=bear, C=cow, D=duck.',
  'A→apple, B→bear, C→cow, D→duck, E→egg.',
  fb('Key word for D?',['Duck','Dog','Deer','Dove'],0,'Quacks!','Duck.')));

EXTRA.push(cls('u3','u3l4',26,'Vowels vs consonants (A-E).','analyze','medium',
  'From A, B, C, D, E — classify: Vowels / Consonants.',
  ['Vowels','Consonants'],
  [
    {item:'A',category:0},{item:'B',category:1},
    {item:'E',category:0},{item:'C',category:1},
    {item:'I',category:0},{item:'D',category:1},
  ],
  'Vowels: A, E (and I, O, U). Consonants: B, C, D.',
  'Vowels: A, E. Consonants: B, C, D.',
  fb('Is "A" a vowel or consonant?',['Vowel','Consonant'],0,'AEIOU','Vowel.')));

EXTRA.push(mc('u3','u3l4',27,'Listen and write: _OW.','apply','medium',
  'The word is "_OW." Which letter completes it to make "COW"?',
  [OPT('C',0),OPT('B',1),OPT('D',2),OPT('E',3)],0,
  'C + OW = COW. C says /k/.',
  '_OW → COW → C!',
  fb('Which letter completes "_UCK" (duck)?',['D','C','B','E'],0,'/d/ = duck','D.')));

EXTRA.push(tf('u3','u3l4',26,'Letter name ≠ letter sound.','understand','medium',
  'The letter "C" is named "see" but says /k/ in "cow." The name and sound are different.',
  true,'Yes! Letter NAME ≠ letter SOUND for C.',
  'C name = "see", C sound = /k/.',
  fb('What sound does C make in "cow"?',['/k/','/s/','/see/','/ch/'],0,'Hard c','/k/.')));

EXTRA.push(ord('u3','u3l4',26,'Phonics letters A-E order.','remember','easy',
  'Put the letters A-E in order.',
  ['D','A','C','B','E'],
  [1,3,2,0,4],
  'A B C D E.',
  'A-B-C-D-E.',
  fb('Which comes first?',['A','B','C','D'],0,'First','A.')));

EXTRA.push(fill('u3','u3l4',26,'A says /a/ apple.','remember','easy',
  'Complete: "A says /a/, /a/, ___."',
  'A says /a/, /a/, ___.',
  1,['apple'],
  '"A says /a/, /a/, apple" — apple is the key word.',
  'A = apple.',
  fb('Key word for A?',['Apple','Bear','Cow','Duck'],0,'Red fruit','Apple.')));

EXTRA.push(hl('u3','u3l4',26,'Highlight the key word.','understand','easy',
  'Click the KEY WORD for A: "A is for apple."',
  'A is for apple',
  'apple',
  '"Apple" is the key word for A.',
  'apple = key word for A.',
  fb('Which is the key word for B?',['bear','apple','cow','duck'],0,'Furry','bear.')));

EXTRA.push(mc('u3','u3l4',27,'Guess the Letter game.','apply','medium',
  'In "Guess the Letter," one student writes a letter on the partner\'s back. The partner...',
  [OPT('Guesses the letter name',0),OPT('Says "Okay"',1),OPT('Draws a picture',2),OPT('Says "Hello"',3)],0,
  'The partner feels the letter and guesses its name.',
  'Feel → guess the letter!',
  fb('In "Guess the Letter," what does the partner do?',['Guesses the letter name','Says Okay','Draws','Leaves'],0,'Guess','Guesses the letter name.')));

EXTRA.push(mc('u3','u3l4',28,'Phonics helps reading and writing.','evaluate','hard',
  'According to the book, mastering phonics helps students become...',
  [OPT('Independent readers and writers',0),OPT('Better artists',1),OPT('Faster runners',2),OPT('Better at math',3)],0,
  'Phonics is the bridge to independent reading and writing.',
  'Phonics → independent reading & writing!',
  fb('Phonics helps you...',['read and write independently','draw and paint','run fast','do math'],0,'Reading','Read and write independently.')));

// Merge and export
export const ALL_ENGLISH_G1S1_QUESTIONS = [...ENGLISH_G1S1_QUESTIONS, ...EXTRA];

export function getQuestionsForLessonAll(lessonId) {
  return ALL_ENGLISH_G1S1_QUESTIONS.filter(q => q.lesson === lessonId);
}
export function getQuestionsForUnitAll(unitId) {
  return ALL_ENGLISH_G1S1_QUESTIONS.filter(q => q.unit === unitId);
}
export const TOTAL_ALL = ALL_ENGLISH_G1S1_QUESTIONS.length;