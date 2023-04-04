var deepQuestions = [
  "What are your personal goals, and how can I support you in achieving them?",
  "What is one of your fondest childhood memories, and how has it influenced who you are today?",
  "How can I help you manage stress and anxiety in our relationship?",
  "In what ways can we continue to grow and strengthen our relationship?",
  "Can you tell me more about what brings you joy and fulfillment in life?",
  "What is something you've always wanted to do but haven't yet, and how can I help you achieve it?",
  "What accomplishment are you most proud of, and why?",
  "How can I be more mindful of your needs and preferences, even in small ways?",
  "What personal qualities do you value most in yourself and others?",
  "What are some new skills or experiences you'd like to gain, and how can I support you in that process?",
  "What are your hopes and dreams for our future as a couple?",
  "Can you describe a time when you felt heard and understood during a conflict in our relationship?",
  "How do you define happiness, and what can we do to cultivate more of it in our lives together?",
  "What was one of the happiest moments of your childhood, and how can we recreate that feeling in our relationship?",
  "What are some of the core values and beliefs that guide your life, and how can I honor and respect them?",
  "Can you tell me about a time when you felt particularly strong or resilient, and what helped you get through it?",
  "What is your favorite type of music, and can we listen to it together and share why we enjoy it?",
  "What do you love about each season, and how can we make the most of those unique experiences together?",
  "What is your favorite thing about yourself, and how can I help you feel more confident and proud of it?",
  "Can you share a quote or saying that is particularly meaningful to you, and what it represents?",
  "What are some of your biggest aspirations for our life together, and how can we work towards them as a team?",
  "What are some short-term goals you have for our relationship, and how can I support you in achieving them?",
  "How can we continue to prioritize learning and personal growth in our lives, both as individuals and as a couple?",
  "What is your favorite way to spend a lazy day, and can we plan a day like that together soon?",
  "Can you share a favorite TV show or movie that has deep meaning to you, and why it resonates?",
  "What is your favorite way to unwind and relax, and how can I help create a space for that in our relationship?",
  "Can you share a personal challenge or struggle you've faced, and how can we work together to support you through it?",
  "What are some of your favorite memories from our relationship so far, and how can we continue to make more?",
  "How do you envision our future together, and what steps can we take to make that vision a reality?",
  "What is your love language, and how can I show you love and affection in the way that resonates most with you?",
  "What are some ways we can show gratitude and appreciation for each other on a daily basis?",
  "What is your favorite type of art or creative expression, and can we explore it together as a way to bond and connect?",
  "Can you share a dream or aspiration that you've been hesitant to pursue, and how can I encourage and support you in going after it?",
  "What are some ways we can prioritize self-care and mental health in our relationship?",
  "Share a personal problem and ask your partner’s advice on how he or she might handle it. Also, ask your partner to reflect back to you how you seem to be feeling about the problem you have chosen.",
  "Tell your partner what you like about them; be very honest this time, saying things that you might not say to someone you’ve just met.",
  "Complete this sentence: “I wish I had someone with whom I could share ..."
];

var funQuestions = [
  "What is your favorite type of exercise, and can we try a new workout routine together?",
  "What is one travel destination that you've always dreamed of visiting, and why?",
  "What is your favorite book or movie?",
  "What is your favorite type of cuisine, and can we try cooking a new recipe together sometime?",
  "What is the biggest challenge that you are or will be facing now or in the next few months?",
  "As a child, what did you want to be when you grow up?",
  "What's something you wish i would do more of?",
  "How do you define success?",
  "What is something that you love about your hometown?",
  "Have you ever collected something?",
  "Who's the most famous person that you've met?",
  "What countries would you like to spend a month in?",
  "What traits do you find the most important in a partner?",
  "What are the things that you don't want in a relationship?",
  "Do you belive in soulmates?",
  "How do you like to be shown affection?",
  "What was your first impression of your partner? What made them stand out?",
  "What are some of the highlights of our relationship so far?",
  "Why do you  think some relationships work while others don't?",
  "How does it feel to have a famous ass?",
  "What stresses are you facing right now?",
  "What do you fear the most, and why?",
  "How would you like your life to be different three years from now?",
  "Do you see your work changing in the future? How?",
  "If you could redo a five-year period of your life, which would you choose?",
  "When it comes to the future, what do you worry about the most?",
  "Do you feel like certain things are missing from your life? What are they?",
  "What have been the highlights and low points of the past year for you?",
  "What are your biggest goals and dreams for the future?",
  "What is your favorite childhood memory and why does it stand out?",
  "What is something you've always wanted to learn or try?",
  "What is something you're proud of that you've accomplished in your life?",
  "What is your love language, and how can I show you love in that way?",
  "What is something you're currently reading or learning about?",
  "What are some qualities that you admire in other people?",
  "What is something you wish you could change about yourself, and why?",
  "What are your top three bucket list items?",
  "What are your favorite type of games or sports to play or watch?",
  "What is something you've always wanted to tell me but haven't yet?",
  "What is your favorite song or musician, and why?",
  "What is your favourite guilty pleasure, and why?",
  "What is your favorite type of art or creative expression?",
  "What is your favorite way to connect with your own emotions?",
  "If you could become an expert in any field, what would it be and why?",
  "Would you like to be famous? In what way?",
  "Before making a telephone call, do you ever rehearse what you are going to say? Why?",
  "What would constitute a “perfect” day for you?",
  "When did you last sing to yourself? To someone else?",
  "Name three things you and your partner appear to have in common",
  "For what in your life do you feel most grateful?",
  "If you could change anything about the way you were raised, what would it be?",
  "Take a few minutes and tell your partner your life story in as much detail as possible.",
  "If you could wake up tomorrow having gained any one quality or ability, what would it be?",
  "If a crystal ball could tell you the truth about yourself, your life, the future or anything else, what would you want to know?",
  "Is there something that you’ve dreamed of doing for a long time? Why haven’t you done it?",
  "What is the greatest accomplishment of your life?",
  "How close and warm is your family? Do you feel your childhood was happier than most other people’s?",
  "What is something you've always wanted to do but haven't had the chance to?",
  "If you could learn any skill, what would it be?",
  "What is your favorite thing about our relationship?",
  "What is something that always cheers you up when you're feeling down?",
  "If you could change one thing about yourself, what would it be?",
  "What is one thing that you've always been curious about, but haven't had the chance to explore?",
  "What is one thing that you love about yourself?",
  "If you could go back in time and give your younger self one piece of advice, what would it be?",
  "If you could have dinner with anyone, living or dead, who would it be?",
  "What is one thing that you're proud of that you don't get to talk about often?",
  "What is your favorite thing to do outdoors?",
  "What is one thing that you want to accomplish in your lifetime?",
  "What is something that you've learned recently that you found interesting?",
  "If you could relive any moment in your life, what would it be?",
  "What is something that you've always wanted to try, but haven't had the courage to?",
  "What is the biggest risk you've ever taken?",
  "What is the best piece of advice you've ever received?",
  "Who is your biggest role model and why?",
  "What is the best vacation you've ever taken?",
  "What is a fear you've overcome?",
  "What is a place that's special to you and why?",
  "What is your idea of a perfect date?",
  "What is something you've been procrastinating on that you want to accomplish?",
  "What is the most adventurous thing you've ever done?",
  "What is something you're proud of in your career?",
  "What is something you'd like to improve about yourself?",
  "What is a place you've visited that you'll never forget?",
  "What is a challenge that you've overcome?",
  "What is a place you'd like to live in the future?",
  "What is a project you're currently working on?",
  "What is a relationship in your life that's important to you?",
  "What is your idea of a perfect weekend?",
  "What is something you're curious about and want to learn more about?"
];

const randomFunItem = (arr) => arr.splice((Math.random() * arr.length) | 0, 1);
const randomDeepItem = (arr) => arr.splice((Math.random() * arr.length) | 0, 1);

function getFunQuestion() {
  const randomFunQuestion = randomFunItem(funQuestions);
  document.getElementById("question").textContent = randomFunQuestion;
}

function getDeepQuestion() {
  const randomDeepQuestion = randomDeepItem(deepQuestions);
  document.getElementById("question").textContent = randomDeepQuestion;
}

const question = document.getElementById("question");

const clickerDeep = document.getElementById("deep");
  clickerDeep.addEventListener("click", () => {
    question.classList.remove("fade-in");
    question.offsetWidth; // required to trigger a reflow and restart the animation
    question.classList.add("fade-in");
  });

const clickerFun = document.getElementById("fun");
  clickerFun.addEventListener("click", () => {
    question.classList.remove("fade-in");
    question.offsetWidth; // required to trigger a reflow and restart the animation
    question.classList.add("fade-in");
  });
