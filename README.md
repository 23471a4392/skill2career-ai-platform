# Skill2Career — AI-Powered Career Path & Personalized Learning Navigator

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3+-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0+-646cff.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4+-38bdf8.svg)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-2.1+-green.svg)](https://vitest.dev/)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)](#license)

**Skill2Career** is an enterprise-grade intelligent career guidance and personalized learning recommendation platform. It analyzes education degrees, existing competencies, interests, and strengths to produce mathematically calibrated career matches, visual skill gap breakdowns, adaptive learning roadmaps, curated regional language video courses (**Telugu, Hindi, Tamil, Kannada, English**), portfolio projects, company hiring guides, and mock interview preparation.

---

## 🚀 Quick Start Guide

### Option 1: Double-Click Launcher (Windows)

1. Open the project folder: `Skill2Career/`
2. Double-click **`START_WEBSITE.bat`**
3. The launcher will automatically verify Node.js and dependencies, start the local Vite server, and open `http://localhost:5173/` in your browser.

*(Optional: Once the server is running, double-click `OPEN_WEBSITE.bat` at any time to open the browser tab.)*

---

### Option 2: CLI / Developer Method

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Run unit test suite
npm test

# 4. Production build check
npm run build

# 5. Local production preview
npm run preview
```

The application will be accessible at:
👉 **`http://localhost:5173`**

---

### Option 3: Docker Deployment

```bash
# Build the Docker container
docker build -t skill2career:latest .

# Run container on port 8080
docker run -d -p 8080:80 --name skill2career-app skill2career:latest
```

Access at: `http://localhost:8080`

---

### Option 4: Make Commands

```bash
make install     # Install npm dependencies
make dev         # Run local dev server
make test        # Run Vitest test suite
make build       # Compile TypeScript & bundle production assets
make docker-build # Build Docker container
make docker-run  # Launch Docker container
```

---

## 🏛️ Architecture & Project Structure

```text
Skill2Career/
├── Dockerfile                  # Production multi-stage Nginx container
├── Makefile                    # Standard developer automation targets
├── package.json                # Project dependencies and script entrypoints
├── package-lock.json           # Deterministic lockfile
├── tsconfig.json               # TypeScript compiler configuration
├── vite.config.ts              # Vite bundle and test configuration
├── tailwind.config.js          # Tailwind styling system
├── src/
│   ├── data/
│   │   ├── curriculum/         # 15 complete multi-week curriculum tracks & registry
│   │   ├── questionBank/       # 8 comprehensive interview banks (DSA, System Design, etc.)
│   │   ├── careerSwitchMatrix/ # 10 career transition bridges for non-tech & branch switchers
│   │   ├── companyGuides/      # 5 categorized hiring guides for 40+ top tech companies
│   │   ├── skillAssessments/   # 8 diagnostic assessment test suites with explanations
│   │   ├── salaryBenchmarks/   # 4 compensation datasets (India, Global, Remote, Equity)
│   │   ├── portfolioProjects/  # 7 capstone project collections with schemas & user stories
│   │   ├── careerData.ts       # Core career metadata and role parameters
│   │   └── learningResources.ts # Curated regional video resources & playlists
│   ├── engines/                # Computational & scoring algorithms
│   │   ├── careerEngine.ts     # Multi-factor deterministic career matching engine
│   │   ├── skillGapEngine.ts   # Skill taxonomy and delta gap analyzer
│   │   ├── readinessEngine.ts  # Multi-pillar job readiness calculator
│   │   ├── roadmapEngine.ts    # Weekly adaptive milestone scheduler
│   │   ├── advancedRecommendationEngine.ts
│   │   ├── careerPathOptimizer.ts
│   │   ├── resumeAtsEngine.ts
│   │   └── skillGraphEngine.ts
│   ├── services/               # Application services & business logic
│   │   ├── notificationService.ts
│   │   ├── resourceService.ts
│   │   ├── mockInterviewService.ts
│   │   └── mentorshipService.ts
│   ├── components/             # Reusable UI components
│   │   ├── common/             # Navbar, Footer, ThemeToggle, BrandLogo
│   │   ├── assessment/         # 9-Step Onboarding Questionnaire
│   │   ├── career/             # CareerCard, WhyThisCareer, CareerFilters
│   │   ├── dashboard/          # ReadinessGauges, SkillMatrix, ActionQueue
│   │   └── roadmap/            # MilestoneChecklist, ResourceModal
│   ├── context/                # React Context Providers
│   │   ├── UserProfileContext.tsx
│   │   └── ThemeContext.tsx    # High-contrast Light / Dark mode state
│   ├── pages/                  # Top-level route pages
│   │   ├── LandingPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── CareerExplorerPage.tsx
│   │   ├── CareerDetailPage.tsx
│   │   ├── RoadmapPage.tsx
│   │   ├── ResourcesPage.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── CertificationsPage.tsx
│   │   ├── InterviewPrepPage.tsx
│   │   ├── CareerSwitchPage.tsx
│   │   ├── CareerComparisonPage.tsx
│   │   └── AdminAnalyticsPage.tsx
│   └── __tests__/              # Automated test suites
```

---

## 🎯 Supported Educational Backgrounds

- **Engineering & Tech**: B.Tech, M.Tech, BCA, MCA, Diploma / Polytechnic
- **Sciences**: B.Sc, M.Sc, Pharmacy, Biotechnology, Healthcare
- **Commerce & Management**: B.Com, M.Com, MBA, BBA
- **Humanities & Arts**: BA, MA, Journalism, Design
- **Career Switchers**: Non-Tech, Self-Taught, Any Degree

---

## 🧪 Testing & Code Quality

Skill2Career maintains strict test coverage and static analysis verification:

```bash
# Run test suite
npx vitest run

# Run TypeScript typechecker
npx tsc --noEmit
```

All test suites verify:
- Deterministic career recommendation formulas
- Skill gap categorization logic
- Job readiness multi-pillar mathematical bounds (0-100%)
- Roadmap milestone generation
- Regional language filtering and resource accuracy

---

## 📄 License

Proprietary Software — All Rights Reserved.  
Copyright © 2026 Skill2Career Platform. Unauthorized copying, distribution, or reproduction of this repository and its source code is strictly prohibited.

