// Rule-based chatbot logic using if-else statements
export const generateResponse = (userInput: string): string => {
  const input = userInput.toLowerCase().trim();

  // Greeting patterns
  if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
    return "Hello! How can I assist you today?";
  } 
  else if (input.includes("good morning")) {
    return "Good morning! Hope you're having a great day!";
  }
  else if (input.includes("good afternoon")) {
    return "Good afternoon! What can I help you with?";
  }
  else if (input.includes("good evening")) {
    return "Good evening! How may I assist you?";
  }
  // Farewell patterns
  else if (input.includes("bye") || input.includes("goodbye") || input.includes("see you")) {
    return "Goodbye! Have a wonderful day!";
  }
  // How are you patterns
  else if (input.includes("how are you") || input.includes("how do you do")) {
    return "I'm doing great, thank you for asking! I'm here to help you.";
  }
  // Name inquiry
  else if (input.includes("your name") || input.includes("who are you")) {
    return "I'm a rule-based chatbot built to demonstrate if-else logic. You can ask me various questions!";
  }
  // Help patterns
  else if (input.includes("help") || input.includes("assist")) {
    return "I can help you with:\n- Greetings and conversations\n- Weather information\n- Time and date\n- Simple calculations\n- General questions\n\nJust type your question!";
  }
  // Weather patterns
  else if (input.includes("weather")) {
    return "I don't have real-time weather data, but you can check your local weather service for accurate information!";
  }
  // Time patterns
  else if (input.includes("time") || input.includes("what time")) {
    const currentTime = new Date().toLocaleTimeString();
    return `The current time is ${currentTime}`;
  }
  // Date patterns
  else if (input.includes("date") || input.includes("what day") || input.includes("today")) {
    const currentDate = new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    return `Today is ${currentDate}`;
  }
  // Thank you patterns
  else if (input.includes("thank") || input.includes("thanks")) {
    return "You're welcome! Happy to help!";
  }
  // Age patterns
  else if (input.includes("how old") || input.includes("your age")) {
    return "As a chatbot, I don't have an age, but I was created to help answer your questions!";
  }
  // Calculation patterns
  else if (input.includes("calculate") || input.includes("math")) {
    return "I can help with simple calculations! Try asking me something like 'what is 5 plus 3?'";
  }
  // Basic math operations
  else if (input.match(/what is \d+\s*[\+\-\*\/]\s*\d+/)) {
    try {
      const mathExpression = input.match(/\d+\s*[\+\-\*\/]\s*\d+/);
      if (mathExpression) {
        const result = eval(mathExpression[0]);
        return `The answer is ${result}`;
      }
    } catch (error) {
      return "I couldn't calculate that. Please try a simple expression like '5 + 3'";
    }
  }
  // Joke patterns
  else if (input.includes("joke") || input.includes("funny")) {
    return "Why don't programmers like nature? It has too many bugs! 🐛";
  }
  // Capability patterns
  else if (input.includes("what can you do") || input.includes("your capabilities")) {
    return "I can:\n- Respond to greetings\n- Tell you the time and date\n- Perform simple calculations\n- Answer basic questions\n- Have friendly conversations\n\nI use if-else logic to understand and respond!";
  }
  // Default response for unknown inputs
  else {
    return "I'm not sure I understand that. Could you rephrase your question? You can also type 'help' to see what I can do!";
  }
};
