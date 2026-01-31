# Algozen

A comprehensive Competitive Programming (CP) and Data Structures & Algorithms (DSA) practice tracker. This application helps you track your progress across various problem sheets tailored for specific topics like Dynamic Programming, Graphs, Trees, and more.

## 🚀 Features

- **Topic-wise Sheets**: Curated problem lists for:
  - Dynamic Programming (DP)
  - Graphs
  - Trees
  - Range Queries
  - Binary Search
- **Progress Tracking**: Visual progress bars to track your completion status for each topic.
- **Problem Management**:
  - Mark problems as completed.
  - Add problems to your favorites list for quick review.
- **Modern UI**: Built with a dark-themed, responsive design using Tailwind CSS.
- **Persistence**: Your progress and favorites are saved locally so you can pick up where you left off.

## 🛠️ Tech Stack

- **Frontend**: React (v19), Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM (v7)
- **State Management**: Local Storage (via custom hooks)
- **Components**: Functional components with Hooks

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Algozen-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
src/
├── assets/          # Static assets
├── components/      # Reusable UI components
│   ├── buttons/     # Button components (Checkbox, Favorite, etc.)
│   ├── Home/        # Home page specific components
│   ├── Layout/      # Layout components (Navbar, Footer)
│   ├── ProblemList/ # Problem list components
│   └── Progress/    # Progress bar components
├── constants/       # Static data (topics, sheets config)
├── data/            # Problem data sections
├── hooks/           # Custom hooks (useLocalStorageState)
├── pages/           # Application pages
└── utils/           # Utility functions
```

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

