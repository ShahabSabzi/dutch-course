/* Lesson content. All dialogues, words, grammar examples and exercises are written for this app.
   Structure: each lesson has dialogue (with English), vocab, grammar, exercises (ex) and an exam (exam).
   Exercise types:
     mc: multiple choice. o = options, a = correct option (exact text)
     tx: typed answer. a = list of accepted answers (lowercase is fine, punctuation ignored)
*/
window.LESSONS = [
{
  id: 1,
  title: "Welkom",
  topics: "Introduce yourself, personal pronouns, present tense, numbers 0 to 20, spelling, greetings",
  dialogue: [
    { s: "Marije (teacher)", nl: "Goedemorgen, welkom in de cursus Nederlands. Ik ben Marije.", en: "Good morning, welcome to the Dutch course. I am Marije." },
    { s: "Marije", nl: "Wie ben jij?", en: "Who are you?" },
    { s: "Yuki", nl: "Hoi, ik ben Yuki.", en: "Hi, I am Yuki." },
    { s: "Marije", nl: "Dag Yuki. Waar kom je vandaan?", en: "Hi Yuki. Where do you come from?" },
    { s: "Yuki", nl: "Ik kom uit Japan.", en: "I come from Japan." },
    { s: "Marije", nl: "Waar woon je?", en: "Where do you live?" },
    { s: "Yuki", nl: "Ik woon in Leiden.", en: "I live in Leiden." },
    { s: "Marije", nl: "Wat is je adres?", en: "What is your address?" },
    { s: "Yuki", nl: "Mijn adres is Rijnstraat 14.", en: "My address is Rijnstraat 14." },
    { s: "Marije", nl: "En welke talen spreek je?", en: "And which languages do you speak?" },
    { s: "Yuki", nl: "Ik spreek Japans en Engels. Nederlands leer ik nu.", en: "I speak Japanese and English. I am learning Dutch now." },
    { s: "Marije", nl: "Mooi. Tot straks!", en: "Nice. See you soon!" }
  ],
  vocab: [
    { w: "hallo / hoi", a: "", en: "hello / hi", ex: "Hoi, hoe gaat het?" },
    { w: "goedemorgen", a: "", en: "good morning", ex: "Goedemorgen, meneer." },
    { w: "goedemiddag", a: "", en: "good afternoon", ex: "Goedemiddag, mevrouw." },
    { w: "goedenavond", a: "", en: "good evening", ex: "Goedenavond allemaal." },
    { w: "dag", a: "", en: "hi / bye (informal)", ex: "Dag Yuki!" },
    { w: "tot ziens", a: "", en: "goodbye", ex: "Tot ziens, mevrouw." },
    { w: "tot straks", a: "", en: "see you later", ex: "Tot straks in de les." },
    { w: "naam", a: "de", en: "name", ex: "Mijn naam is Yuki." },
    { w: "adres", a: "het", en: "address", ex: "Wat is je adres?" },
    { w: "straat", a: "de", en: "street", ex: "Ik woon in de Hoofdstraat." },
    { w: "stad", a: "de", en: "city / town", ex: "Utrecht is een mooie stad." },
    { w: "postcode", a: "de", en: "postcode", ex: "Mijn postcode is 2311 AB." },
    { w: "nummer", a: "het", en: "number", ex: "Mijn huisnummer is 14." },
    { w: "land", a: "het", en: "country", ex: "Welk land is dat?" },
    { w: "nationaliteit", a: "de", en: "nationality", ex: "Wat is je nationaliteit?" },
    { w: "taal", a: "de", en: "language", ex: "Engels is een mooie taal." },
    { w: "vandaan", a: "", en: "from (where)", ex: "Waar kom je vandaan?" },
    { w: "heten", a: "", en: "to be called", ex: "Ik heet Yuki." },
    { w: "wonen", a: "", en: "to live", ex: "Wij wonen in Delft." },
    { w: "komen", a: "", en: "to come", ex: "Hij komt uit Iran." },
    { w: "spreken", a: "", en: "to speak", ex: "Zij spreekt Duits." },
    { w: "zijn", a: "", en: "to be", ex: "Ik ben student." },
    { w: "spellen", a: "", en: "to spell", ex: "Hoe spel je je naam?" },
    { w: "ja / nee", a: "", en: "yes / no", ex: "Ja, dat klopt." },
    { w: "misschien", a: "", en: "maybe", ex: "Misschien morgen." },
    { w: "ook", a: "", en: "also / too", ex: "Ik woon ook in Leiden." }
  ],
  grammar: [
    {
      t: "1. Personal pronouns",
      p: [
        "A pronoun replaces a name. In spoken Dutch, je is the short form of jij. Use u for formal situations, such as a stranger, an older person or a doctor. Use je and jij with friends and people your age.",
        "Het is used for things and animals. Zij means she, and also they for a group of people or things."
      ],
      tb: [
        ["Pronoun", "English", "Short form"],
        ["ik", "I", ""],
        ["jij", "you (informal)", "je"],
        ["u", "you (formal)", ""],
        ["hij", "he", ""],
        ["zij", "she / they", "ze"],
        ["het", "it", ""],
        ["wij", "we", "we"],
        ["jullie", "you (plural)", ""]
      ],
      ex: [["Hoe heet u?", "What is your name? (formal)"], ["Waar woon je?", "Where do you live?"]]
    },
    {
      t: "2. Present tense: stem + ending",
      p: [
        "Take the verb stem (the infinitive without -en) and add an ending that depends on the subject. For ik, use the stem alone. For jij, u, hij, zij and het, add -t. For wij, jullie and zij (plural), add -en.",
        "Some verbs change slightly. Heten has the same form in the singular: ik heet, jij heet, hij heet. Zijn is irregular: ben, bent, is."
      ],
      tb: [
        ["", "wonen", "komen", "spreken", "zijn", "heten"],
        ["ik", "woon", "kom", "spreek", "ben", "heet"],
        ["jij / u", "woont / woont", "komt / komt", "spreekt / spreekt", "bent / bent", "heet / heet"],
        ["hij / zij / het", "woont", "komt", "spreekt", "is", "heet"],
        ["wij / jullie / zij", "wonen", "komen", "spreken", "zijn", "heten"]
      ],
      ex: [["Ik woon in Utrecht.", "I live in Utrecht."], ["Zij komt uit Spanje.", "She comes from Spain."], ["Wij zijn studenten.", "We are students."]]
    },
    {
      t: "3. Questions: the verb comes before the subject",
      p: [
        "For a yes/no question, put the verb first: Woon jij in Utrecht? For a question word, put the question word first, then the verb, then the subject: Waar woon jij? In spoken Dutch, je can come after the verb: Waar woon je?",
        "Common question words in this lesson: wie (who), wat (what), waar (where), hoe (how), welk (which)."
      ],
      ex: [["Komt hij uit Frankrijk?", "Does he come from France?"], ["Hoe heet je?", "What is your name?"], ["Uit welk land kom je?", "Which country do you come from?"]]
    },
    {
      t: "4. Numbers 0 to 20",
      p: ["Learn these by heart. You will use them for age, phone numbers, addresses and prices."],
      tb: [
        ["Number", "Dutch", "Number", "Dutch"],
        ["0", "nul", "11", "elf"],
        ["1", "een", "12", "twaalf"],
        ["2", "twee", "13", "dertien"],
        ["3", "drie", "14", "veertien"],
        ["4", "vier", "15", "vijftien"],
        ["5", "vijf", "16", "zestien"],
        ["6", "zes", "17", "zeventien"],
        ["7", "zeven", "18", "achttien"],
        ["8", "acht", "19", "negentien"],
        ["9", "negen", "20", "twintig"],
        ["10", "tien", "", ""]
      ],
      ex: [["Ik ben negentien jaar.", "I am nineteen years old."]]
    },
    {
      t: "5. Spelling and nationalities",
      p: [
        "To spell a name, say each letter: Y-U-K-I. Dutch uses the alphabet with the same 26 letters as English.",
        "Nationality words: a man from Germany is een Duitser, a woman is een Duitse. The language is Duits. For many countries, the adjective is the language: Engeland, Engels; Frankrijk, Frans."
      ],
      tb: [
        ["Country", "Person", "Language"],
        ["Nederland", "Nederlander", "Nederlands"],
        ["Engeland", "Engelsman", "Engels"],
        ["Duitsland", "Duitser", "Duits"],
        ["Frankrijk", "Fransman", "Frans"],
        ["China", "Chinees", "Chinees"],
        ["Iran", "Iraniër", "Perzisch / Farsi"]
      ]
    }
  ],
  ex: [
    { t: "mc", q: "Ik ___ Yuki.", o: ["ben", "bent", "is", "zijn"], a: "ben", e: "With ik, use ben." },
    { t: "mc", q: "Jij ___ student.", o: ["ben", "bent", "is", "zijn"], a: "bent", e: "With jij, use bent." },
    { t: "mc", q: "Hij ___ uit Frankrijk.", o: ["kom", "komt", "komen", "komst"], a: "komt", e: "With hij, add -t to the stem: komt." },
    { t: "tx", q: "Wij ___ in Gouda. (wonen)", a: ["wonen"], e: "With wij, add -en: wonen." },
    { t: "tx", q: "Zij ___ in Parijs. (wonen)", a: ["woont"], e: "With zij (she), add -t: woont." },
    { t: "mc", q: "Hoe ___ u?", o: ["heet", "heten", "ben", "woon"], a: "heet", e: "Heet is the same for all singular forms." },
    { t: "mc", q: "Waar ___ jij vandaan?", o: ["kom", "komt", "komen", "kun"], a: "kom", e: "In a question, the verb comes before the subject: kom jij." },
    { t: "tx", q: "Translate into Dutch: 'My name is Sara.'", a: ["mijn naam is sara", "ik heet sara"], e: "Two correct options: Mijn naam is Sara, or Ik heet Sara." },
    { t: "tx", q: "Write the number 14 in Dutch words.", a: ["veertien"], e: "14 = veertien." },
    { t: "mc", q: "Which number comes after nineteen?", o: ["twintig", "negen", "twaalf", "negentig"], a: "twintig", e: "After negentien comes twintig." },
    { t: "mc", q: "Hij komt uit Duitsland. Hij is ___.", o: ["Duitser", "Duits", "Duitsland", "Duitse"], a: "Duitser", e: "Duitser is the person. Duits is the language." },
    { t: "mc", q: "Ik kom ___ China.", o: ["uit", "van", "in", "naar"], a: "uit", e: "Use uit to say where someone comes from." }
  ],
  exam: [
    { t: "mc", q: "Zij ___ in Rotterdam.", o: ["woon", "woont", "wonen", "woonen"], a: "woont", e: "Zij takes stem + t: woont." },
    { t: "mc", q: "Wij ___ uit Hongarije.", o: ["komen", "komt", "kom", "kommen"], a: "komen", e: "Wij takes stem + en: komen." },
    { t: "tx", q: "Translate: 'I am from Iran.'", a: ["ik kom uit iran", "ik ben uit iran"], e: "Ik kom uit Iran is the most natural way to say it." },
    { t: "mc", q: "When do you say 'goedemorgen'?", o: ["in de ochtend", "in de avond", "om middernacht", "na het werk"], a: "in de ochtend", e: "Goedemorgen is for the morning." },
    { t: "tx", q: "Write the answer in Dutch words: What is nine plus eight?", a: ["zeventien"], e: "9 + 8 = 17 = zeventien." },
    { t: "mc", q: "How do you say 'a man from France'?", o: ["Fransman", "Frans", "Franse", "Frankrijker"], a: "Fransman", e: "Fransman is the person. Frans is the language or adjective." },
    { t: "tx", q: "Translate: 'My address is Dorpsweg 5.'", a: ["mijn adres is dorpsweg 5"], e: "Mijn adres is ... is the standard way." },
    { t: "mc", q: "What do you say when you leave?", o: ["Tot straks.", "Goedemorgen.", "Welkom.", "Ik ben."], a: "Tot straks.", e: "Tot straks means see you later." },
    { t: "tx", q: "Fill in: 'Uit welk land ___ jij?' (komen)", a: ["kom"], e: "Ik and jij use the stem: kom." },
    { t: "mc", q: "Which is the formal question for an older man?", o: ["Hoe heet u?", "Hoe heet je?", "Hoe heten jullie?", "Hoe heten jij?"], a: "Hoe heet u?", e: "U is formal. Use it with people you do not know well or older people." }
  ]
},
{
  id: 2,
  title: "In de kantine",
  topics: "Family, describing people, yes/no questions, question words, possessive pronouns, time, days, months, seasons",
  dialogue: [
    { s: "Saskia", nl: "Hoi Lars, mag ik hier zitten?", en: "Hi Lars, may I sit here?" },
    { s: "Lars", nl: "Ja hoor, ga je gang.", en: "Yes, of course. Go ahead." },
    { s: "Saskia", nl: "Dank je. Heb jij al gegeten?", en: "Thanks. Have you eaten yet?" },
    { s: "Lars", nl: "Nog niet. Ik wacht op mijn zus. Zij werkt hier op de tweede verdieping.", en: "Not yet. I am waiting for my sister. She works here on the second floor." },
    { s: "Saskia", nl: "Ah, hoe heet je zus?", en: "Ah, what is your sister's name?" },
    { s: "Lars", nl: "Mijn zus heet Eva. Zij is advocaat.", en: "My sister is called Eva. She is a lawyer." },
    { s: "Saskia", nl: "Hoeveel broers en zussen heb jij?", en: "How many brothers and sisters do you have?" },
    { s: "Lars", nl: "Ik heb één broer en één zus. Mijn broer woont in Groningen.", en: "I have one brother and one sister. My brother lives in Groningen." },
    { s: "Saskia", nl: "Hoe laat is het eigenlijk?", en: "What time is it, by the way?" },
    { s: "Lars", nl: "Het is kwart over twaalf. Wanneer is je pauze?", en: "It is quarter past twelve. When is your break?" },
    { s: "Saskia", nl: "Mijn pauze is om half een. Ik eet altijd een broodje kaas.", en: "My break is at half past twelve. I always eat a cheese sandwich." },
    { s: "Lars", nl: "Lekker. Morgen is het vrijdag, dan eet ik soep.", en: "Nice. Tomorrow is Friday, then I eat soup." }
  ],
  vocab: [
    { w: "kantine", a: "de", en: "canteen", ex: "De kantine is op de eerste verdieping." },
    { w: "pauze", a: "de", en: "break", ex: "Ik heb om twaalf uur pauze." },
    { w: "eten", a: "", en: "to eat", ex: "Wij eten om half een." },
    { w: "drinken", a: "", en: "to drink", ex: "Hij drinkt thee." },
    { w: "werken", a: "", en: "to work", ex: "Ik werk op kantoor." },
    { w: "wachten", a: "", en: "to wait", ex: "Wacht even, alstublieft." },
    { w: "hebben", a: "", en: "to have", ex: "Ik heb een zus." },
    { w: "familie", a: "de", en: "family", ex: "Mijn familie woont in Iran." },
    { w: "vader", a: "de", en: "father", ex: "Mijn vader is leraar." },
    { w: "moeder", a: "de", en: "mother", ex: "Mijn moeder kookt goed." },
    { w: "broer", a: "de", en: "brother", ex: "Mijn broer is lang." },
    { w: "zus", a: "de", en: "sister", ex: "Zij is mijn zus." },
    { w: "kind", a: "het", en: "child", ex: "Het kind speelt buiten." },
    { w: "zoon / dochter", a: "de", en: "son / daughter", ex: "Hij heeft een zoon en een dochter." },
    { w: "oom / tante", a: "de", en: "uncle / aunt", ex: "Mijn tante woont in Parijs." },
    { w: "lang / kort", a: "", en: "tall / short (length)", ex: "Hij is lang en zij is kort." },
    { w: "jong / oud", a: "", en: "young / old", ex: "Mijn oma is oud." },
    { w: "lief", a: "", en: "nice / sweet", ex: "Zij is heel lief." },
    { w: "dag", a: "de", en: "day", ex: "Welke dag is het vandaag?" },
    { w: "week", a: "de", en: "week", ex: "Een week heeft zeven dagen." },
    { w: "uur", a: "het", en: "hour / o'clock", ex: "Het is drie uur." },
    { w: "lente / zomer", a: "de", en: "spring / summer", ex: "In de zomer is het warm." },
    { w: "herfst / winter", a: "de", en: "autumn / winter", ex: "In de winter is het koud." }
  ],
  grammar: [
    {
      t: "1. Main clause word order",
      p: [
        "In a statement, the verb is always the second element. The subject often comes first, but any other element can come first too. If you start with time or place, the verb still stays second, and the subject moves after it.",
        "Subject first: Ik werk morgen. Time first: Morgen werk ik. Both are correct. Never put the verb third in a main clause."
      ],
      ex: [["Ik eet om half een.", "I eat at half past twelve."], ["Om half een eet ik.", "At half past twelve, I eat."]]
    },
    {
      t: "2. Yes/no questions",
      p: [
        "For a yes/no question, put the verb first, then the subject. Keep the rest of the sentence in the same order. Use intonation: your voice goes up at the end."
      ],
      ex: [["Heb jij een broer?", "Do you have a brother?"], ["Woont hij in Groningen?", "Does he live in Groningen?"]]
    },
    {
      t: "3. Question words",
      p: [
        "Question word first, then the verb, then the subject. Common words: wat (what), wie (who), waar (where), wanneer (when), hoe (how), waarom (why), welk (which), hoeveel (how many).",
        "Hoeveel is used with things you can count. Hoe is used for how someone is, or how something is."
      ],
      ex: [["Hoeveel broers heb jij?", "How many brothers do you have?"], ["Waarom eet je hier?", "Why are you eating here?"], ["Wanneer is je pauze?", "When is your break?"]]
    },
    {
      t: "4. Possessive pronouns",
      p: [
        "Mijn means my, jouw (short: je) means your, uw means your (formal), zijn means his, haar means her, ons or onze means our, jullie means your (plural), hun means their.",
        "Ons is used before het-words. Onze is used before de-words and plural words. For example: ons huis (het huis), onze kinderen (plural)."
      ],
      tb: [
        ["Person", "Possessive", "Example"],
        ["ik", "mijn", "mijn zus"],
        ["jij", "jouw / je", "je moeder"],
        ["u", "uw", "uw tas"],
        ["hij", "zijn", "zijn broer"],
        ["zij", "haar", "haar vader"],
        ["wij", "ons / onze", "onze familie"],
        ["jullie", "jullie", "jullie huis"],
        ["zij (they)", "hun", "hun kinderen"]
      ]
    },
    {
      t: "5. Hebben (to have)",
      p: [
        "Ik heb, jij hebt (je hebt), u heeft, hij/zij/het heeft, wij/jullie/zij hebben. The informal jij form is often shortened to je hebt."
      ],
      tb: [
        ["Pronoun", "hebben"],
        ["ik", "heb"],
        ["jij", "hebt (je hebt)"],
        ["u", "heeft"],
        ["hij / zij / het", "heeft"],
        ["wij / jullie / zij", "hebben"]
      ]
    },
    {
      t: "6. Time, days, months and seasons",
      p: [
        "Ask the time with Hoe laat is het? Answer: Het is tien uur. Half is different in Dutch: half drie means 2:30, not 3:30. Kwart over means quarter past, kwart voor means quarter to.",
        "Days are lowercase: maandag, dinsdag, woensdag, donderdag, vrijdag, zaterdag, zondag. Use op with days: op zaterdag. Use in with months and seasons: in mei, in de lente. Months: januari, februari, maart, april, mei, juni, juli, augustus, september, oktober, november, december."
      ],
      tb: [
        ["Time", "Dutch"],
        ["2:30", "half drie"],
        ["3:15", "kwart over drie"],
        ["2:45", "kwart voor drie"],
        ["3:05", "vijf over drie"]
      ]
    }
  ],
  ex: [
    { t: "mc", q: "Ik ___ twee zussen.", o: ["heb", "hebt", "heeft", "hebben"], a: "heb", e: "Ik takes heb." },
    { t: "mc", q: "Hij ___ een kat.", o: ["heeft", "heb", "hebt", "hebben"], a: "heeft", e: "Hij takes heeft." },
    { t: "tx", q: "Put in order: 'eet / ik / morgen / een broodje'", a: ["morgen eet ik een broodje"], e: "Time first (morgen), then verb (eet), then subject (ik)." },
    { t: "mc", q: "Make a yes/no question from 'Jij woont in Utrecht.'", o: ["Woont jij in Utrecht?", "Jij woont in Utrecht?", "Woon jij in Utrecht?", "In Utrecht woont jij?"], a: "Woont jij in Utrecht?", e: "The verb comes first: woont jij." },
    { t: "tx", q: "Fill in: 'Hoeveel broers ___ jij?' (hebben)", a: ["heb"], e: "Hoeveel broers heb jij? The verb comes before jij." },
    { t: "mc", q: "Which question word asks about time?", o: ["Wanneer", "Waar", "Wie", "Wat"], a: "Wanneer", e: "Wanneer = when." },
    { t: "mc", q: "Dit is ___ tas. (jij)", o: ["jouw", "mijn", "uw", "hun"], a: "jouw", e: "Jij becomes jouw (short: je)." },
    { t: "mc", q: "Dit is ___ moeder. (zij, she)", o: ["haar", "zijn", "hun", "ons"], a: "haar", e: "Zij (she) becomes haar." },
    { t: "mc", q: "What is 'half drie'?", o: ["2:30", "3:30", "2:15", "3:00"], a: "2:30", e: "Half drie = half way to three = 2:30." },
    { t: "tx", q: "Write in Dutch: 'It is quarter past twelve.'", a: ["het is kwart over twaalf"], e: "Kwart over = quarter past." },
    { t: "mc", q: "What is 'maandag' in English?", o: ["Monday", "Friday", "Sunday", "Wednesday"], a: "Monday", e: "Maandag = Monday." },
    { t: "mc", q: "Het is koud in de ___.", o: ["winter", "zomer", "maandag", "maart"], a: "winter", e: "Winter = winter. It is cold in winter." }
  ],
  exam: [
    { t: "mc", q: "Zij ___ advocaat.", o: ["is", "ben", "bent", "zijn"], a: "is", e: "Zij (she) takes is." },
    { t: "mc", q: "What is 'de kantine' in English?", o: ["canteen", "kitchen", "office", "break"], a: "canteen", e: "Kantine = canteen. Break = pauze." },
    { t: "tx", q: "Translate: 'My sister lives in Groningen.'", a: ["mijn zus woont in groningen"], e: "Mijn zus woont in Groningen." },
    { t: "mc", q: "___ kinderen wonen in Den Haag. (wij)", o: ["Onze", "Ons", "Mijn", "Hun"], a: "Onze", e: "Onze is used before plural words." },
    { t: "tx", q: "Make a question: 'Jij hebt een fiets.'", a: ["heb jij een fiets", "hebt jij een fiets"], e: "Heb jij een fiets? Both heb and hebt are used." },
    { t: "mc", q: "How do you say 'tweeëntwintig'?", o: ["22", "12", "32", "20"], a: "22", e: "Twee + en + twintig = 22." },
    { t: "mc", q: "Which season comes after the summer?", o: ["herfst", "lente", "winter", "zomer"], a: "herfst", e: "Herfst = autumn, after summer." },
    { t: "mc", q: "'Hoe laat is het? Het is vijf over tien.' What time is it?", o: ["10:05", "10:50", "5:10", "9:55"], a: "10:05", e: "Vijf over tien = five past ten." },
    { t: "mc", q: "Which sentence is a correct statement?", o: ["Ik heb morgen een afspraak.", "Ik morgen heb een afspraak.", "Morgen ik heb een afspraak.", "Heb ik morgen een afspraak."], a: "Ik heb morgen een afspraak.", e: "The verb heb is second." },
    { t: "tx", q: "Fill in: 'Hij ___ twee katten.' (hebben)", a: ["heeft"], e: "Hij takes heeft." }
  ]
},
{
  id: 3,
  title: "In het café",
  topics: "Ordering and paying, articles de/het/een, inversion after time words, ordinal numbers, polite phrases",
  dialogue: [
    { s: "Sander (bartender)", nl: "Goedemiddag. Wat kan ik voor u doen?", en: "Good afternoon. What can I do for you?" },
    { s: "Nadia", nl: "Ik wil graag een kopje koffie, alstublieft.", en: "I would like a cup of coffee, please." },
    { s: "Sander", nl: "Wilt u er melk of suiker bij?", en: "Would you like milk or sugar with it?" },
    { s: "Nadia", nl: "Alleen melk, graag. En heeft u ook iets lekkers?", en: "Only milk, please. And do you have anything tasty?" },
    { s: "Sander", nl: "Ja, we hebben appeltaart en chocoladekoek.", en: "Yes, we have apple pie and chocolate cake." },
    { s: "Nadia", nl: "Ik neem de appeltaart. Mag ik ook een glas water?", en: "I will have the apple pie. May I also have a glass of water?" },
    { s: "Sander", nl: "Natuurlijk. Dat is dan vijf euro veertig.", en: "Of course. That is five euros forty then." },
    { s: "Nadia", nl: "Mag ik met pin betalen?", en: "May I pay by debit card?" },
    { s: "Sander", nl: "Ja, dat kan. Alstublieft, hier is uw bonnetje.", en: "Yes, that is possible. Here you are, here is your receipt." },
    { s: "Nadia", nl: "Dank u wel. Fijne dag nog!", en: "Thank you. Have a nice day!" },
    { s: "Sander", nl: "Graag gedaan, tot ziens!", en: "You are welcome, goodbye!" }
  ],
  vocab: [
    { w: "koffie", a: "de", en: "coffee", ex: "De koffie is heet." },
    { w: "thee", a: "de", en: "tea", ex: "Wil je thee?" },
    { w: "water", a: "het", en: "water", ex: "Een glas water, alsjeblieft." },
    { w: "melk", a: "de", en: "milk", ex: "Koffie met melk." },
    { w: "suiker", a: "de", en: "sugar", ex: "Ik neem geen suiker." },
    { w: "kopje", a: "het", en: "cup", ex: "Een kopje thee." },
    { w: "glas", a: "het", en: "glass", ex: "Een glas wijn." },
    { w: "taart", a: "de", en: "cake / pie", ex: "De appeltaart is lekker." },
    { w: "koek", a: "de", en: "cookie / cake", ex: "Een koek bij de koffie." },
    { w: "broodje", a: "het", en: "sandwich / roll", ex: "Een broodje kaas." },
    { w: "soep", a: "de", en: "soup", ex: "De soep is warm." },
    { w: "kaart", a: "de", en: "menu / card", ex: "Mag ik de kaart?" },
    { w: "rekening", a: "de", en: "bill (formal)", ex: "De rekening, alstublieft." },
    { w: "bonnetje", a: "het", en: "receipt", ex: "Het bonnetje is er." },
    { w: "wisselgeld", a: "het", en: "change (money back)", ex: "Hier is uw wisselgeld." },
    { w: "contant", a: "", en: "cash", ex: "Ik betaal contant." },
    { w: "pinnen / met pin betalen", a: "", en: "to pay by debit card", ex: "Mag ik met pin betalen?" },
    { w: "bestellen", a: "", en: "to order", ex: "Ik wil iets bestellen." },
    { w: "nemen", a: "", en: "to take / to have (food)", ex: "Ik neem een tosti." },
    { w: "graag", a: "", en: "please / gladly", ex: "Ja, graag." },
    { w: "alstublieft / alsjeblieft", a: "", en: "please / here you are", ex: "Hier is uw koffie, alstublieft." },
    { w: "dank u wel / dank je wel", a: "", en: "thank you", ex: "Dank je wel voor het eten." },
    { w: "graag gedaan", a: "", en: "you're welcome", ex: "Graag gedaan!" },
    { w: "fijne dag nog", a: "", en: "have a nice day", ex: "Fijne dag nog, tot ziens!" }
  ],
  grammar: [
    {
      t: "1. De, het and een",
      p: [
        "Every Dutch noun has an article. De is used for most nouns (about two thirds of them). Het is used for neuter nouns. Een means a or an. Plural words always use de.",
        "Tip: learn each noun with its article. Words ending in -je are almost always het: het kopje, het broodje. Words ending in -heid, -ing or -ie are almost always de. Other words have no rule, so memorize them."
      ],
      tb: [
        ["Article", "Use", "Example"],
        ["de", "most nouns, and all plurals", "de koffie, de koppen"],
        ["het", "neuter nouns", "het water, het kopje"],
        ["een", "a / an (one)", "een glas, een taart"]
      ],
      ex: [["De koffie is warm.", "The coffee is warm."], ["Het water is koud.", "The water is cold."], ["Ik wil een kopje thee.", "I would like a cup of tea."]]
    },
    {
      t: "2. Verb second, with time words first",
      p: [
        "When a sentence starts with a time word or place, the verb comes second and the subject comes after the verb. This is called inversion. Subject first is also correct: Ik drink morgen koffie.",
        "The rule is always the same: the verb is the second element. The subject can be first, but if something else starts the sentence, the subject moves after the verb."
      ],
      ex: [["Morgen drink ik koffie.", "Tomorrow I will drink coffee."], ["Vandaag eten wij pizza.", "Today we eat pizza."], ["In het café drinken wij thee.", "In the café we drink tea."]]
    },
    {
      t: "3. Ordinal numbers (first, second, third)",
      p: [
        "Most ordinal numbers end in -de. The exceptions are eerste (first) and achtste (eighth). Use them for floors, dates and rankings."
      ],
      tb: [
        ["Number", "Dutch", "Number", "Dutch"],
        ["1st", "eerste", "6th", "zesde"],
        ["2nd", "tweede", "7th", "zevende"],
        ["3rd", "derde", "8th", "achtste"],
        ["4th", "vierde", "9th", "negende"],
        ["5th", "vijfde", "10th", "tiende"]
      ],
      ex: [["Ik woon op de derde verdieping.", "I live on the third floor."], ["Het is de eerste keer.", "It is the first time."]]
    },
    {
      t: "4. Ordering politely",
      p: [
        "Ik wil graag ... means I would like ... Mag ik ...? means May I ...? Ik neem ... means I will have ... Heeft u ...? means Do you have ...? (formal). Always add graag or alstublieft to be polite."
      ],
      ex: [["Ik wil graag een kopje koffie.", "I would like a cup of coffee."], ["Mag ik de rekening?", "May I have the bill?"], ["Heeft u iets lekkers?", "Do you have anything tasty? (formal)"]]
    },
    {
      t: "5. Thanks and replies",
      p: [
        "Dank je wel (informal) and dank u wel (formal) mean thank you. The usual reply is Graag gedaan (you're welcome). Alstublieft and alsjeblieft mean please, and also here you are when you give something.",
        "Afrekenen means to pay the bill. Fijne dag nog means have a nice day."
      ],
      ex: [["Dank u wel, mevrouw.", "Thank you, madam."], ["Graag gedaan.", "You are welcome."]]
    }
  ],
  ex: [
    { t: "mc", q: "___ koffie is warm.", o: ["De", "Het", "Een", "Er"], a: "De", e: "Koffie is a de-word." },
    { t: "mc", q: "___ water, alstublieft.", o: ["Het", "De", "Een", "Er"], a: "Het", e: "Water is a het-word." },
    { t: "mc", q: "Ik wil ___ kopje thee.", o: ["een", "het", "de", "er"], a: "een", e: "Een kopje = a cup." },
    { t: "tx", q: "Fill in the article: '___ glas' (glass)", a: ["het"], e: "Het glas. Words with a glass of something are often het." },
    { t: "tx", q: "Morgen ___ ik koffie. (drinken)", a: ["drink"], e: "Morgen drink ik koffie. The verb comes second." },
    { t: "mc", q: "Vandaag ___ wij pizza.", o: ["eten", "eet", "etend", "eeten"], a: "eten", e: "Vandaag eten wij pizza. Wij takes -en." },
    { t: "mc", q: "Which word means 'third'?", o: ["derde", "tweede", "vierde", "vijfde"], a: "derde", e: "Derde = third." },
    { t: "tx", q: "Write 'second' in Dutch. (de ___ verdieping = second floor)", a: ["tweede"], e: "De tweede verdieping." },
    { t: "mc", q: "How do you thank someone?", o: ["Dank je wel.", "Tot straks.", "Hoe gaat het?", "Welkom."], a: "Dank je wel.", e: "Dank je wel means thank you (informal)." },
    { t: "mc", q: "Someone says 'Dank u wel'. What do you answer?", o: ["Graag gedaan.", "Dat is zes euro.", "Ik ben Anna.", "Morgen."], a: "Graag gedaan.", e: "Graag gedaan = you are welcome." },
    { t: "mc", q: "Which phrase asks for the bill?", o: ["Mag ik afrekenen?", "Mag ik een kaart?", "Ik heet Ruud.", "Wat is uw naam?"], a: "Mag ik afrekenen?", e: "Afrekenen = to pay the bill." },
    { t: "tx", q: "Translate: 'I would like a glass of water, please.'", a: ["ik wil graag een glas water", "ik wil graag een glas water alstublieft", "ik wil een glas water alsjeblieft", "ik wil graag een glas water alsjeblieft"], e: "Ik wil graag een glas water, alsjeblieft." }
  ],
  exam: [
    { t: "mc", q: "___ taart is lekker.", o: ["De", "Het", "Een", "Er"], a: "De", e: "Taart is a de-word." },
    { t: "mc", q: "What is 'het wisselgeld'?", o: ["change", "receipt", "bill", "tip"], a: "change", e: "Wisselgeld = the money you get back." },
    { t: "tx", q: "Translate: 'May I pay by card?'", a: ["mag ik met pin betalen", "mag ik pinnen"], e: "Mag ik met pin betalen? Pinnen is the verb for paying by card." },
    { t: "mc", q: "Which sentence is polite and correct?", o: ["Ik wil graag een thee.", "Ik wil thee ben.", "Ik thee wil.", "Wil ik een thee."], a: "Ik wil graag een thee.", e: "Ik wil graag ... is polite. The verb wil is second." },
    { t: "mc", q: "What is 'het bonnetje'?", o: ["receipt", "menu", "table", "chair"], a: "receipt", e: "Bonnetje = receipt." },
    { t: "tx", q: "Fill in: 'Morgen ___ wij naar het café.' (gaan)", a: ["gaan"], e: "Morgen gaan wij naar het café." },
    { t: "mc", q: "'Ik woon op de ___ verdieping.' (4th)", o: ["vierde", "vier", "vierdig", "vierden"], a: "vierde", e: "Vierde = fourth." },
    { t: "mc", q: "'De ___ dag van de week' (first day)", o: ["eerste", "eerst", "een", "één"], a: "eerste", e: "Eerste = first." },
    { t: "mc", q: "What does 'contant' mean?", o: ["cash", "card", "free", "tip"], a: "cash", e: "Contant = cash." },
    { t: "tx", q: "Translate: 'Have a nice day!' (formal)", a: ["fijne dag nog", "fijne dag"], e: "Fijne dag nog!" }
  ]
},
{
  id: 4,
  title: "Op straat",
  topics: "Asking how someone is, making suggestions with zullen we, prepositions naar, bij, op, times with om, making appointments",
  dialogue: [
    { s: "Ahmed", nl: "Hoi Lisa! Hoe gaat het met je?", en: "Hi Lisa! How are you?" },
    { s: "Lisa", nl: "Hoi Ahmed! Goed, dank je. En met jou?", en: "Hi Ahmed! Good, thanks. And you?" },
    { s: "Ahmed", nl: "Ook goed. Ik kom net van mijn werk. Waar ga jij naartoe?", en: "Also good. I just came from work. Where are you going?" },
    { s: "Lisa", nl: "Ik ga naar de supermarkt. Zullen we daarna samen koffie drinken?", en: "I am going to the supermarket. Shall we have coffee together afterwards?" },
    { s: "Ahmed", nl: "Goed idee! Hoe laat?", en: "Good idea! What time?" },
    { s: "Lisa", nl: "Om vier uur bij het café op de hoek?", en: "At four o'clock at the café on the corner?" },
    { s: "Ahmed", nl: "Dat past goed. En zaterdag is er een feest, weet je dat?", en: "That works well. And on Saturday there is a party, did you know?" },
    { s: "Lisa", nl: "Ja, ik ga ook. Zullen we dan samen gaan?", en: "Yes, I am going too. Shall we go together, then?" },
    { s: "Ahmed", nl: "Prima, dat doen we. Tot straks!", en: "Great, let's do that. See you soon!" },
    { s: "Lisa", nl: "Tot straks!", en: "See you soon!" }
  ],
  vocab: [
    { w: "supermarkt", a: "de", en: "supermarket", ex: "De supermarkt is open tot negen uur." },
    { w: "hoek", a: "de", en: "corner", ex: "Op de hoek van de straat." },
    { w: "café", a: "het", en: "café / bar", ex: "We drinken koffie in het café." },
    { w: "feest", a: "het", en: "party", ex: "Het feest is op zaterdag." },
    { w: "afspraak", a: "de", en: "appointment / date", ex: "Ik heb een afspraak om drie uur." },
    { w: "idee", a: "het", en: "idea", ex: "Dat is een goed idee." },
    { w: "werk", a: "het", en: "work / job", ex: "Ik kom van mijn werk." },
    { w: "park", a: "het", en: "park", ex: "Zullen we naar het park gaan?" },
    { w: "samen", a: "", en: "together", ex: "Wij gaan samen naar huis." },
    { w: "daarna", a: "", en: "afterwards", ex: "Eerst eten, daarna koffie." },
    { w: "eerst", a: "", en: "first", ex: "Eerst de koffie, dan de taart." },
    { w: "misschien", a: "", en: "maybe", ex: "Misschien volgende week." },
    { w: "prima", a: "", en: "great / fine", ex: "Prima, dat doen we." },
    { w: "goed", a: "", en: "good / fine", ex: "Het is goed zo." },
    { w: "best", a: "", en: "quite / pretty (well)", ex: "Het gaat best goed." },
    { w: "niet slecht", a: "", en: "not bad", ex: "Hoe gaat het? Niet slecht." },
    { w: "net", a: "", en: "just (now)", ex: "Ik ben net thuis." },
    { w: "dichtbij / ver", a: "", en: "nearby / far", ex: "Het café is dichtbij." },
    { w: "passen", a: "", en: "to fit / to suit", ex: "Dat past goed." },
    { w: "afspreken", a: "", en: "to make an appointment", ex: "Wij spreken af om vier uur." },
    { w: "kijken", a: "", en: "to look / to watch", ex: "Zullen we een film kijken?" },
    { w: "gaan", a: "", en: "to go", ex: "Ik ga naar huis." },
    { w: "komen", a: "", en: "to come", ex: "Kom je mee?" },
    { w: "weten", a: "", en: "to know", ex: "Weet je dat?" }
  ],
  grammar: [
    {
      t: "1. Asking how someone is",
      p: [
        "Hoe gaat het? (How are you?) and Hoe gaat het met je? (informal) or met u (formal). Answers: Goed, dank je (Good, thanks). Best (quite well). Niet slecht (not bad). Slecht (bad). Reply with En met jou? to ask back."
      ],
      ex: [["Hoe gaat het met u?", "How are you? (formal)"], ["Goed, dank je. En met jou?", "Good, thanks. And you?"]]
    },
    {
      t: "2. Zullen we ...? (Shall we ...?)",
      p: [
        "Use Zullen we + verb in the infinitive at the end of the sentence to suggest something together. This is the most common way to make plans.",
        "Answer with Ja, goed idee (yes, good idea), Ja, graag (yes, please), Prima (great) or Nee, dat kan niet (no, that is not possible)."
      ],
      ex: [["Zullen we naar het park gaan?", "Shall we go to the park?"], ["Zullen we samen eten?", "Shall we eat together?"], ["Zullen we een film kijken?", "Shall we watch a film?"]]
    },
    {
      t: "3. Gaan and komen",
      p: [
        "Gaan (to go) and komen (to come) are regular. Ik ga, jij gaat, hij gaat, wij gaan. Ik kom, jij komt, hij komt, wij komen. In a question, use the same form as the statement, but with the verb first."
      ],
      tb: [
        ["Pronoun", "gaan", "komen"],
        ["ik", "ga", "kom"],
        ["jij", "gaat", "komt"],
        ["hij / zij", "gaat", "komt"],
        ["wij / jullie / zij", "gaan", "komen"]
      ]
    },
    {
      t: "4. Prepositions: naar, bij, op",
      p: [
        "Naar means to a place: naar de supermarkt (to the supermarket), naar huis (home). Bij means at or near a person or a place: bij het café (at the café), bij Ahmed (at Ahmed's place). Op means on or at a place or event: op de hoek (on the corner), op zaterdag (on Saturday). In means inside: in de supermarkt."
      ],
      tb: [
        ["Preposition", "Use", "Example"],
        ["naar", "to a place", "naar het park"],
        ["bij", "at / near a place or person", "bij het café"],
        ["op", "on / at a corner, event or day", "op de hoek"],
        ["in", "inside a place", "in de supermarkt"]
      ]
    },
    {
      t: "5. Time with om",
      p: [
        "Use om for a clock time: om vier uur (at four o'clock), om half vijf (at half past four). Use op for days: op zaterdag (on Saturday)."
      ],
      ex: [["We spreken af om acht uur.", "We agree to meet at eight."], ["Het feest is op zaterdag.", "The party is on Saturday."]]
    }
  ],
  ex: [
    { t: "mc", q: "Hoe ___ het met je?", o: ["gaat", "ga", "gaan", "gaten"], a: "gaat", e: "Hoe gaat het met je? Het takes gaat." },
    { t: "mc", q: "Goed, dank ___.", o: ["je", "jij", "u", "hem"], a: "je", e: "Dank je = thanks (informal)." },
    { t: "mc", q: "Zullen ___ samen koffie drinken?", o: ["we", "wij", "je", "ze"], a: "we", e: "In zullen we, the short form we is used." },
    { t: "mc", q: "Zullen we een film ___?", o: ["kijken", "kijk", "kijkt", "gekeken"], a: "kijken", e: "The infinitive comes at the end." },
    { t: "mc", q: "Reply to 'Zullen we naar het park gaan?'", o: ["Ja, goed idee!", "Ik ben een man.", "Hoeveel is het?", "Het is groen."], a: "Ja, goed idee!", e: "Ja, goed idee = yes, good idea." },
    { t: "tx", q: "Fill in: 'Ik ___ naar de supermarkt.' (gaan)", a: ["ga"], e: "Ik takes the stem: ga." },
    { t: "mc", q: "Ik zie je ___ het café.", o: ["bij", "op", "in", "naar"], a: "bij", e: "Bij = at (a place)." },
    { t: "mc", q: "We spreken af ___ half vijf.", o: ["om", "op", "in", "naar"], a: "om", e: "Om is used for clock times." },
    { t: "tx", q: "Translate: 'Shall we meet at four?'", a: ["zullen we om vier uur afspreken", "zullen we om vier afspreken", "zullen we om 4 uur afspreken", "zullen we afspreken om vier uur"], e: "Zullen we om vier uur afspreken?" },
    { t: "mc", q: "What does 'dat past goed' mean?", o: ["That works well", "That is cheap", "That is far", "That is open"], a: "That works well", e: "Passen = to fit or suit. Dat past goed = that works." },
    { t: "mc", q: "Fill in: 'Ik kom ___ van mijn werk.'", o: ["net", "nog", "ook", "wel"], a: "net", e: "Net = just (now)." },
    { t: "mc", q: "Which means 'not bad'?", o: ["niet slecht", "heel slecht", "best goed", "niet goed"], a: "niet slecht", e: "Niet slecht = not bad." }
  ],
  exam: [
    { t: "mc", q: "What is the right answer to 'Hoe gaat het?'", o: ["Goed, dank u.", "Ik ben tien.", "Het is blauw.", "Ja, graag."], a: "Goed, dank u.", e: "Goed, dank u = good, thanks (formal)." },
    { t: "tx", q: "Translate: 'Shall we go to the park?'", a: ["zullen we naar het park gaan"], e: "Zullen we naar het park gaan?" },
    { t: "mc", q: "How do you say 'Let's have dinner together'?", o: ["Zullen we samen eten?", "Zullen we eten samen?", "Eten we samen zullen?", "Samen zullen eten we?"], a: "Zullen we samen eten?", e: "Zullen we + samen + infinitive at the end." },
    { t: "mc", q: "Ik ___ niet mee, ik werk.", o: ["kom", "komt", "komen", "kun"], a: "kom", e: "Ik takes the stem: kom." },
    { t: "tx", q: "Fill in: 'Zullen we morgen ___?' (afspreken)", a: ["afspreken"], e: "Zullen we morgen afspreken? Afspreken = to make an appointment." },
    { t: "mc", q: "We spreken af ___ zes uur.", o: ["om", "op", "in", "bij"], a: "om", e: "Om zes uur = at six o'clock." },
    { t: "mc", q: "Het café ___ de hoek.", o: ["op", "in", "naar", "uit"], a: "op", e: "Op de hoek = on the corner." },
    { t: "mc", q: "What does 'dat kan niet' mean?", o: ["That is not possible", "That is free", "That is open", "That is far"], a: "That is not possible", e: "Dat kan niet = that is not possible." },
    { t: "tx", q: "Translate: 'I am going to the café.'", a: ["ik ga naar het café"], e: "Ik ga naar het café." },
    { t: "mc", q: "'Een afspraak maken' means:", o: ["make an appointment", "make a mistake", "make coffee", "make a call"], a: "make an appointment", e: "Een afspraak maken = make an appointment." }
  ]
},
{
  id: 5,
  title: "Op de markt",
  topics: "Fruit and vegetables, plurals, adjectives, imperative, prices and paying, numbers 20 to 100",
  dialogue: [
    { s: "Hakim (seller)", nl: "Goedemorgen mevrouw! Wat mag het zijn?", en: "Good morning madam! What can I get you?" },
    { s: "Ingrid", nl: "Ik wil graag twee kilo aardappelen en een bos peterselie.", en: "I would like two kilos of potatoes and a bunch of parsley." },
    { s: "Hakim", nl: "Prima. Nog iets anders?", en: "Great. Anything else?" },
    { s: "Ingrid", nl: "Oh ja, geef me maar een paar tomaten. Hoeveel kosten die?", en: "Oh yes, just give me a few tomatoes. How much are they?" },
    { s: "Hakim", nl: "Drie euro vijftig per kilo. Wilt u ook fruit? De appels zijn heel mooi!", en: "Three euros fifty per kilo. Do you also want fruit? The apples are very nice!" },
    { s: "Ingrid", nl: "Doe maar vier appels. Hoeveel is dat in totaal?", en: "Make it four apples. What is the total?" },
    { s: "Hakim", nl: "Dat is twaalf euro tachtig.", en: "That is twelve euros eighty." },
    { s: "Ingrid", nl: "Alstublieft. Hier is een briefje van twintig.", en: "Here you go. Here is a twenty-euro note." },
    { s: "Hakim", nl: "Dank u. Hier is uw wisselgeld: zeven euro twintig.", en: "Thank you. Here is your change: seven euros twenty." },
    { s: "Ingrid", nl: "Dank u wel. Tot de volgende keer!", en: "Thank you. See you next time!" },
    { s: "Hakim", nl: "Tot ziens, mevrouw!", en: "Goodbye, madam!" }
  ],
  vocab: [
    { w: "markt", a: "de", en: "market", ex: "De markt is op dinsdag." },
    { w: "groente", a: "de", en: "vegetables", ex: "Groente is gezond." },
    { w: "fruit", a: "het", en: "fruit", ex: "Ik eet elke dag fruit." },
    { w: "aardappel", a: "de", en: "potato", ex: "Aardappelen met vlees." },
    { w: "tomaat", a: "de", en: "tomato", ex: "De tomaat is rood." },
    { w: "appel", a: "de", en: "apple", ex: "Een appel per dag." },
    { w: "peer", a: "de", en: "pear", ex: "Een zoete peer." },
    { w: "banaan", a: "de", en: "banana", ex: "Een banaan is geel." },
    { w: "sinaasappel", a: "de", en: "orange", ex: "Sinaasappelsap is lekker." },
    { w: "wortel", a: "de", en: "carrot", ex: "De wortel is oranje." },
    { w: "ui", a: "de", en: "onion", ex: "Een ui in de soep." },
    { w: "paprika", a: "de", en: "bell pepper", ex: "Rode paprika." },
    { w: "kaas", a: "de", en: "cheese", ex: "Oude kaas is lekker." },
    { w: "bos", a: "de", en: "bunch", ex: "Een bos bloemen." },
    { w: "kilo", a: "de", en: "kilogram", ex: "Twee kilo appels." },
    { w: "prijs", a: "de", en: "price", ex: "De prijs is laag." },
    { w: "kosten", a: "", en: "to cost", ex: "Wat kost dit?" },
    { w: "betalen", a: "", en: "to pay", ex: "Ik betaal voor de koffie." },
    { w: "klant", a: "de", en: "customer", ex: "De klant wil een kilo." },
    { w: "verkoper", a: "de", en: "seller", ex: "De verkoper is aardig." },
    { w: "duur / goedkoop", a: "", en: "expensive / cheap", ex: "Dat is duur." },
    { w: "vers", a: "", en: "fresh", ex: "Verse groente." },
    { w: "geven", a: "", en: "to give", ex: "Geef me maar een appel." },
    { w: "doen", a: "", en: "to do / to make (an order)", ex: "Doe maar twee." }
  ],
  grammar: [
    {
      t: "1. Plurals",
      p: [
        "Most Dutch nouns form the plural with -en: de tomaat becomes de tomaten. Nouns ending in -el, -em, -en or -er take -s: appel becomes appels, moeder becomes moeders. Some nouns change their spelling: huis becomes huizen (s changes to z), kaas becomes kazen. Some are irregular: kind becomes kinderen, stad becomes steden.",
        "All plurals use de. Het-words also become de-words in the plural."
      ],
      tb: [
        ["Singular", "Plural", "Rule"],
        ["tomaat", "tomaten", "-en"],
        ["appel", "appels", "-el → -s"],
        ["moeder", "moeders", "-er → -s"],
        ["huis", "huizen", "s → z, plus -en"],
        ["kind", "kinderen", "irregular: -eren"],
        ["stad", "steden", "irregular"]
      ],
      ex: [["De tomaten zijn rood.", "The tomatoes are red."], ["Ik koop appels.", "I buy apples."]]
    },
    {
      t: "2. Adjectives before a noun",
      p: [
        "When an adjective is before a noun, it takes -e in most cases. The exceptions are een + a het-word (no -e), and the singular het-word with een. Adjectives after zijn never take -e: De tas is mooi.",
        "Rule in short: add -e, except after een with a het-word. The plural always adds -e."
      ],
      tb: [
        ["Phrase", "Form", "Why"],
        ["een mooie tas", "mooie", "de-word with een: -e"],
        ["de mooie tas", "mooie", "de-word: -e"],
        ["een mooi huis", "mooi", "het-word with een: no -e"],
        ["het mooie huis", "mooie", "het-word with het: -e"],
        ["mooie tassen", "mooie", "plural: -e"],
        ["De tas is mooi.", "mooi", "after zijn: no -e"]
      ]
    },
    {
      t: "3. The imperative (commands)",
      p: [
        "Informal (jij): use the verb stem. Kom! (Come!), Wacht even! (Wait a moment!), Neem een appel! (Take an apple!).",
        "Formal (u): use the verb with u after it: Neemt u een appel? (Would you like an apple?). Add -t to the verb and put u after it. Kom maar binnen (Come on in) is informal and friendly."
      ],
      tb: [
        ["Verb", "Informal (jij)", "Formal (u)"],
        ["nemen", "Neem!", "Neemt u ...?"],
        ["komen", "Kom!", "Komt u ...?"],
        ["wachten", "Wacht!", "Wacht u ...?"]
      ],
      ex: [["Geef me maar twee.", "Give me two, please."], ["Wacht even.", "Wait a moment."]]
    },
    {
      t: "4. Prices and paying",
      p: [
        "Ask for the price with Hoeveel kost het? or Wat kost dat? (How much is it?). Answer with Het kost ... or Dat is ... euro ... . Cents come after the euros: twee euro vijftig (2.50).",
        "Numbers 20 to 100: twintig, dertig, veertig, vijftig, zestig, zeventig, tachtig, negentig, honderd. Between them, put en: eenentwintig (21), drieënveertig (43)."
      ],
      tb: [
        ["Price", "Dutch"],
        ["€ 2,50", "twee euro vijftig"],
        ["€ 12,80", "twaalf euro tachtig"],
        ["€ 0,75", "vijfenzeventig cent"]
      ]
    },
    {
      t: "5. Per and voor",
      p: [
        "Per means per or each: drie euro per kilo (three euros per kilo). Voor means for (a price or a person): voor vijf euro (for five euros)."
      ],
      ex: [["Twee euro per stuk.", "Two euros each."], ["Dit is voor jou.", "This is for you."]]
    }
  ],
  ex: [
    { t: "mc", q: "Plural of 'appel'?", o: ["appels", "appelen", "appeln", "appelle"], a: "appels", e: "Words ending in -el take -s." },
    { t: "mc", q: "Plural of 'huis'?", o: ["huizen", "huisen", "huissen", "huizens"], a: "huizen", e: "Huis becomes huizen (s changes to z)." },
    { t: "mc", q: "Plural of 'kind'?", o: ["kinderen", "kinden", "kinds", "kindens"], a: "kinderen", e: "Kind is irregular: kinderen." },
    { t: "mc", q: "Een ___ tomaat (mooi)", o: ["mooie", "mooi", "mooit", "moois"], a: "mooie", e: "De-word with een: -e." },
    { t: "mc", q: "Het ___ huis (groot)", o: ["grote", "groot", "groots", "grooten"], a: "grote", e: "Het-word with het: -e." },
    { t: "mc", q: "Een ___ huis (groot)", o: ["groot", "grote", "groots", "grooten"], a: "groot", e: "Het-word with een: no -e." },
    { t: "tx", q: "Imperative (jij) of 'wachten': write the verb.", a: ["wacht"], e: "Wacht! = stem form." },
    { t: "mc", q: "Formal (u): how do you say 'Take (an) apple'?", o: ["Neemt u een appel.", "Neem u een appel.", "Nemen u een appel.", "Neem je een appel."], a: "Neemt u een appel.", e: "Formal: verb + -t + u." },
    { t: "mc", q: "Het kost ___ euro.", o: ["tien", "tien euro", "tienen", "tiene"], a: "tien", e: "Tien is the number; euro comes after it." },
    { t: "mc", q: "How do you say '€ 2,50'?", o: ["twee euro vijftig", "twee euro vijf", "twee vijftig euro", "twintig euro vijftig"], a: "twee euro vijftig", e: "Euros first, then cents." },
    { t: "tx", q: "Translate: 'How much is it?'", a: ["hoeveel kost het", "hoeveel kost dat", "hoeveel is dat"], e: "Hoeveel kost het? or Hoeveel is dat?" },
    { t: "mc", q: "What does 'doe maar' mean when ordering?", o: ["I will take that (one)", "Do it again", "Do nothing", "Do the work"], a: "I will take that (one)", e: "Doe maar = I will take that, or make it that." }
  ],
  exam: [
    { t: "mc", q: "Plural of 'tafel'?", o: ["tafels", "tafelen", "tafeln", "tafelse"], a: "tafels", e: "Tafel takes -s: tafels." },
    { t: "mc", q: "De ___ tas (mooi)", o: ["mooie", "mooi", "mooien", "mooiste"], a: "mooie", e: "De-word: -e." },
    { t: "mc", q: "Het ___ boek (dik)", o: ["dikke", "dik", "dikken", "dikste"], a: "dikke", e: "Het-word with het: -e." },
    { t: "tx", q: "Translate: 'Wait a moment!' (informal)", a: ["wacht even"], e: "Wacht even!" },
    { t: "mc", q: "What does 'per kilo' mean?", o: ["per kilo (price per kilo)", "without a kilo", "two kilos", "in the bag"], a: "per kilo (price per kilo)", e: "Per = per or each." },
    { t: "mc", q: "How do you say 'Please come in' (formal)?", o: ["Komt u binnen.", "Kom u binnen.", "Komen u binnen.", "Komt je binnen."], a: "Komt u binnen.", e: "Formal imperative: verb + -t + u." },
    { t: "mc", q: "Plural of 'stad'?", o: ["steden", "staden", "stads", "stadden"], a: "steden", e: "Stad becomes steden." },
    { t: "mc", q: "Which number is 'zeventig'?", o: ["70", "60", "17", "90"], a: "70", e: "Zeventig = 70." },
    { t: "tx", q: "Fill in: 'Dat is ___ euro negentig.' (3)", a: ["drie"], e: "Drie euro negentig = 3.90." },
    { t: "mc", q: "'___ hier even!' (wachten, informal)", o: ["Wacht", "Wachten", "Wacht je", "Wachtt"], a: "Wacht", e: "Wacht hier even! = informal imperative." }
  ]
}
];
