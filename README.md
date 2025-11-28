# MVD Leads - Motor Vehicle Driving Learners Practice App

A comprehensive web-based learning platform for motor vehicle driving practice, designed to help learners prepare for their driving exams with interactive quizzes, traffic sign recognition, and mock exams.

## Features

- **Traffic Signs Module** - Learn and recognize various traffic signs with detailed explanations
- **Driving Basics** - Comprehensive theory lessons on driving fundamentals and road safety
- **Question Bank** - Browse and practice questions covering various driving scenarios
- **Mock Exam** - Full-fledged mock exam with:
  - 30 randomized questions (15 traffic signs + 15 general questions)
  - 30-second timer per question (45 seconds for CAPTCHA questions)
  - CAPTCHA validation every 3rd question to prevent cheating
  - Real-time scoring and immediate feedback
  - Automatic advancement when time expires
- **Bilingual Support** - Content available in English and Malayalam
- **Responsive Design** - Optimized for desktop and mobile devices

## Tech Stack

- **Frontend**: React 19 + Vite
- **State Management**: Redux Toolkit + RTK Query
- **Styling**: CSS3 (Flexbox, Grid, Animations)
- **UI Components**: Chakra UI, React Icons
- **Forms & Validation**: React Hook Form + Yup
- **Routing**: React Router v7
- **Notifications**: React Hot Toast

## Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm preview
```

### Lint Code

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── pages/           # Home, Intro, Concession pages
│   ├── Trafficsigns/    # Traffic sign recognition module
│   ├── QuestionBank/    # Question bank browsing
│   ├── DrivingBasics/   # Driving theory module
│   └── MockExam/        # Mock exam flow with timer & CAPTCHA
├── service/
│   ├── features/        # Redux slices & RTK Query endpoints
│   └── store.js         # Redux store configuration
├── styles/              # CSS files for each component
├── helper/              # Utility functions (timer, CAPTCHA generator)
├── assets/              # Images and static files
└── App.jsx              # Main router configuration
```

## Key Routes

| Route | Purpose |
|-------|---------|
| `/` | Intro/Welcome page |
| `/home` | Home dashboard |
| `/module/signs` | Traffic signs learning module |
| `/module/driving_basics` | Driving basics theory |
| `/module/questions` | Question bank |
| `/module/mock` | Mock exam |
| `/module/concession` | Concession information |

## Usage

### Traffic Signs Module
1. Browse traffic signs with descriptions and meanings
2. Filter by category (mandatory, cautionary, informatory, etc.)
3. Switch between English and Malayalam for multilingual learning

### Mock Exam
1. Confirm exam start from the confirmation page
2. Read each question carefully
3. Select an answer and click "Confirm"
4. Pass CAPTCHA validation when prompted (every 3rd question)
5. Watch the timer—auto-advance when time expires
6. View your final score and performance summary at the end

### Language Toggle
Switch between English and Malayalam using the language selector in the navigation

## Features Implemented

- ✅ Randomized question selection (30 total: 15 signs + 15 questions)
- ✅ Real-time countdown timer with auto-advance
- ✅ CAPTCHA validation every 3rd question
- ✅ Score tracking and results display
- ✅ Bilingual content (English & Malayalam)
- ✅ Responsive UI (mobile & desktop)
- ✅ Redux state management for language and scoring
- ✅ RTK Query for efficient data fetching

## Future Enhancements

- [ ] Detailed exam reports and performance analytics
- [ ] User authentication and progress tracking
- [ ] Difficulty levels (Easy, Medium, Hard)
- [ ] Timed practice sessions with breaks
- [ ] Offline mode support
- [ ] Mobile app (React Native)
- [ ] Admin panel for content management

## Performance Tips

- The app uses Vite for fast HMR (hot module replacement) during development
- RTK Query caches API responses to minimize network requests
- Images are optimized and lazy-loaded where applicable

## Deployment

### Deploy to Vercel (Recommended)

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up
3. Import your GitHub repository
4. Vercel will auto-detect Vite and build settings
5. Click deploy

### Deploy to Netlify

1. Push your project to GitHub
2. Go to [netlify.com](https://netlify.com) and sign up
3. Click "New site from Git" and select your repository
4. Set build command to `npm run build` and publish directory to `dist`
5. Deploy

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests for improvements

## License

This project is open-source and available for educational purposes.

## Support

For issues or questions, please check the following:
1. Ensure Node.js and npm are properly installed
2. Clear `node_modules` and reinstall: `rm -r node_modules && npm install`
3. Check browser console for error messages
4. Verify all data files exist in `public/data/`

---

**Happy Learning!** 🚗📚

Built with ❤️ for learners preparing for their driving exams.
