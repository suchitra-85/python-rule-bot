# Rule-Based Chatbot

A modern, interactive chatbot built with React and TypeScript that demonstrates if-else logic and pattern matching for natural language processing.

## Features

- Interactive chat interface with real-time messaging
- Rule-based response system using if-else conditionals
- Pattern matching for various user inputs
- Typing indicator animation
- Time and date information
- Simple calculation capabilities
- Responsive design with smooth animations

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn-ui components

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Project Structure

```
src/
├── components/
│   ├── ChatMessage.tsx      # Message display component
│   ├── TypingIndicator.tsx  # Typing animation component
│   └── ui/                  # UI components library
├── utils/
│   └── chatbotLogic.ts      # If-else logic for responses
├── pages/
│   └── Index.tsx            # Main chat interface
└── index.css                # Design system and styles
```

## How It Works

The chatbot uses a rule-based approach with if-else statements to process user input:

1. User input is converted to lowercase and trimmed
2. Pattern matching checks for keywords and phrases
3. If-else conditionals determine the appropriate response
4. Response is displayed with typing animation

### Supported Commands

- Greetings (hello, hi, good morning, etc.)
- Time and date inquiries
- Simple calculations
- Weather questions
- Help commands
- General conversation

## Customization

### Adding New Responses

Edit `src/utils/chatbotLogic.ts` to add new if-else conditions:

```typescript
else if (input.includes("your keyword")) {
  return "Your custom response";
}
```

### Styling

The design system is defined in:
- `src/index.css` - Color tokens and animations
- `tailwind.config.ts` - Theme configuration

## Development

```sh
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## License

This project is open source and available for educational purposes.
