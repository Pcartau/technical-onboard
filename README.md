# Todo List Technical Project

A React TypeScript Todo List application designed to test and demonstrate various React concepts and best practices.

## 🎯 Project Overview

This project presents a Todo List application with intentional bugs and missing features that candidates need to implement. It serves as a technical assessment to evaluate React knowledge, problem-solving skills, and code quality.

## 🚀 Features to Implement

### Requirements

- [ ] Fix the immutability bug in `toggleTodo` function
- [ ] Implement task addition functionality
- [ ] Add filtering system (All | Active | Completed)
- [ ] Display remaining tasks count
- [ ] Optimize rendering performance with React.memo
- [ ] Extract todo logic into a custom hook (useTodos)

## 🐛 Known Issues

The current implementation has a critical bug in the `toggleTodo` function that violates React's immutability principles. This needs to be fixed as the first step.

## 🛠️ Technical Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Package Manager**: Bun
- **Styling**: CSS-in-JS (inline styles)

## 📁 Project Structure

```
src/
├── App.tsx          # Main application component
├── App.css          # Application styles
├── main.tsx         # Application entry point
├── index.css        # Global styles
└── assets/          # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- Bun package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd technical_project

# Install dependencies
bun install

# Start development server
bun run dev
```

The application will be available at `http://localhost:5173`

## 📋 Implementation Guide

### 1. Fix Immutability Bug

The `toggleTodo` function currently mutates the state directly. Implement proper immutable state updates using the spread operator or array methods.

### 2. Add Task Form

Create a form component that allows users to add new tasks to the list.

### 3. Implement Filtering

Add filter buttons to show:

- All tasks
- Active tasks only
- Completed tasks only

### 4. Task Counter

Display the number of remaining (incomplete) tasks.

### 5. Performance Optimization

Use `React.memo` to prevent unnecessary re-renders of list items when individual tasks change.

### 6. Custom Hook (Bonus)

Extract the todo management logic into a reusable `useTodos` custom hook.

## 🧪 Testing

Run the test suite to ensure all features work correctly:

```bash
bun test
```

## 📝 Code Quality

- Follow TypeScript best practices
- Maintain clean, readable code
- Use proper React patterns
- Ensure accessibility standards
- Write meaningful component names

## 🎨 UI/UX Considerations

- Keep the interface clean and intuitive
- Ensure responsive design
- Maintain consistent styling
- Provide clear visual feedback for user actions

## 📚 Learning Objectives

This project helps developers practice:

- React state management
- Immutability principles
- Performance optimization
- Custom hooks creation
- TypeScript integration
- Component composition

## 🤝 Contributing

This is a technical assessment project. Please follow the implementation guidelines and ensure all features are working correctly before submission.

## 📄 License

This project is created for educational and assessment purposes.
