# 🤖 Mock.AI

<p align="center">
  <strong>AI-Powered Mock Interview Generator</strong>
</p>

<p align="center">
  Practice role-specific interviews with AI-generated questions, voice interaction, and personalized interview simulations.
</p>

<p align="center">
  <a href="https://mock-ai-alpha.vercel.app/">
    <img src="https://img.shields.io/badge/Live_Demo-Mock.AI-000000?style=for-the-badge&logo=vercel" alt="Live Demo"/>
  </a>
  <a href="https://github.com/Aradhy2005/Mock.ai">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub"/>
  </a>
  <img src="https://img.shields.io/badge/React-Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge&logo=google" alt="Gemini AI"/>
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase"/>
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge" alt="Clerk"/>
</p>

---

## 📌 Overview

**Mock.AI** is an AI-powered mock interview platform designed to help students and job seekers practice technical and behavioral interviews in an interactive environment.

Instead of relying on static interview question lists, Mock.AI generates interview questions dynamically based on the selected **role** and **difficulty**, allowing users to simulate a more realistic interview preparation workflow.

The application combines:

- 🤖 AI-generated interview questions
- 🎯 Role-specific interview preparation
- 🧠 Difficulty-based question generation
- 🔊 Text-to-Speech interaction
- 🎙️ Voice answer recording
- 🔐 Authentication
- 📊 Interview history and usage tracking
- 💳 Plan-based usage limits

> 🚧 **Mock.AI is an actively evolving project.**

---

## 🎯 Problem

Traditional interview preparation often depends on:

- Static question lists
- Repetitive practice
- Lack of role-specific questions
- Limited interaction
- No realistic interview flow
- Manual tracking of practice sessions

Mock.AI aims to make interview preparation more interactive by combining **generative AI with voice-based interaction**.

The objective is to provide users with a structured environment where they can repeatedly practice interviews according to their target role and difficulty level.

---

## ✨ Core Features

### 🤖 AI Question Generation

Mock.AI uses the **Google Gemini API** to generate interview questions dynamically.

Questions can be generated according to:

- Target role
- Difficulty level
- Interview category
- Technical requirements
- Behavioral interview requirements

The application uses a custom prompt-generation workflow to structure requests sent to the AI model.

---

### 🎯 Role & Difficulty-Based Interviews

Users can configure their interview before starting.

```text
Select Role
     ↓
Select Difficulty
     ↓
Generate Interview
     ↓
AI Creates Questions
     ↓
Interactive Interview
```

This allows the interview experience to be tailored to different preparation scenarios.

---

### 🧩 Interactive Question Interface

The interview interface provides a structured question-navigation experience.

Users can:

- Navigate between questions
- Listen to questions
- Record answers
- Play and pause question audio
- Progress through the interview

The interface uses a **vertical tab-based question navigation system**.

---

### 🔊 Text-to-Speech

Mock.AI integrates browser-based speech capabilities to allow interview questions to be played aloud.

This provides a more natural interview preparation experience compared with reading every question manually.

Technology:

**Web Speech API**

---

### 🎙️ Voice Answer Recording

Users can record their spoken responses directly from the browser.

The recording functionality uses:

**MediaRecorder API**

The system is designed around the following flow:

```text
Interview Question
        ↓
Question Playback
        ↓
User Records Answer
        ↓
Answer Stored
        ↓
Continue Interview
```

---

### 🔐 Authentication

Mock.AI uses **Clerk** for authentication.

Supported authentication functionality includes:

- User signup
- User login
- Google authentication
- Email authentication
- User management

Authentication allows interview sessions and user-specific data to be associated with individual accounts.

---

### 🔥 Firebase Integration

Firebase is used for application data management.

The project uses Firebase services for areas such as:

- Interview history
- Saved answers
- Usage tracking
- Realtime data
- Firestore-based persistence

The architecture allows interview-related data to be associated with authenticated users.

---

### 💳 Plans & Usage Limits

Mock.AI includes a plan-based usage concept.

| Plan | Price | Interview Limit |
|---|---:|---:|
| Free | $0 | 4 interviews |
| Basic | $7 | 20 interviews |
| Premium | $30 | Unlimited interviews |

The plan system is designed to control interview usage based on the user's selected plan.

---

## 🏗️ How Mock.AI Works

The core workflow can be represented as:

```text
┌─────────────────────┐
│   User selects      │
│ Role + Difficulty   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Prompt Construction │
│   Custom Template   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│    Gemini API       │
│ Question Generation │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Question Interface  │
│                     │
│ • TTS               │
│ • Navigation        │
│ • Voice Recording   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Firebase Data Layer │
│                     │
│ • History           │
│ • Answers           │
│ • Usage              │
└─────────────────────┘
```

---

## 🧠 AI Generation Pipeline

The question generation process follows a structured pipeline:

```text
User Input
    │
    ├── Role
    ├── Difficulty
    └── Interview Type
          │
          ▼
   Prompt Builder
          │
          ▼
     Gemini API
          │
          ▼
 Generated Questions
          │
          ▼
 Interactive Interview
```

The prompt builder is responsible for converting the user's interview configuration into a structured prompt for the Gemini model.

---

## 🏛️ Application Architecture

```text
                    Mock.AI
                       │
        ┌──────────────┴──────────────┐
        │                             │
     Frontend                     Services
        │                             │
        ▼                             ▼
 React + TypeScript             Gemini API
        │                       Firebase
        │                       Clerk
        │
        ├── Home
        ├── Generate
        ├── Dashboard
        ├── Question Section
        ├── Recording
        └── Pricing
```

### Application Layers

| Layer | Technology | Responsibility |
|---|---|---|
| UI | React | Application interface |
| Language | TypeScript | Type-safe application development |
| Build Tool | Vite | Development and production builds |
| Styling | Tailwind CSS | UI styling |
| Components | shadcn/ui | Reusable interface components |
| AI | Google Gemini API | Interview question generation |
| Authentication | Clerk | User authentication |
| Database | Firebase | Interview and usage data |
| Voice | Web Speech API | Question playback |
| Recording | MediaRecorder API | Voice answer recording |
| Deployment | Vercel | Application hosting |

---

## 🛠️ Technology Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

### AI

- Google Gemini API
- Custom prompt generation

### Backend / Cloud

- Firebase Firestore
- Firebase Realtime Database
- Clerk Authentication

### Browser APIs

- Web Speech API
- MediaRecorder API

### Deployment

- Vercel

### Development

- Git
- GitHub
- VS Code

---

## 📁 Project Structure

```text
mock-ai/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── QuestionSection.tsx
│   │   ├── RecordAnswer.tsx
│   │   ├── Pricing.tsx
│   │   └── AvatarInterview.tsx
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Generate.tsx
│   │   └── Dashboard.tsx
│   │
│   ├── utils/
│   │   ├── firebase.ts
│   │   ├── generatePrompt.ts
│   │   └── authHelpers.ts
│   │
│   └── App.tsx
│
├── .firebase/
├── components.json
├── .firebaserc
├── .gitignore
├── README.md
└── package.json
```

---

## 🧩 Key Components

### `QuestionSection.tsx`

Responsible for the primary interview question experience.

Responsibilities include:

- Question navigation
- Vertical tabs
- Text-to-Speech
- Playback controls
- Interview progression

### `RecordAnswer.tsx`

Handles browser-based voice recording.

Uses:

**MediaRecorder API**

### `Pricing.tsx`

Provides the plan-selection interface and communicates the available usage tiers.

### `generatePrompt.ts`

Responsible for constructing structured prompts used for AI-generated interview questions.

### `firebase.ts`

Contains Firebase integration used by the application.

### `authHelpers.ts`

Contains authentication-related helper functionality.

---

## 🔐 Authentication Flow

```text
              User
               │
        ┌──────┴──────┐
        │             │
      Login          Signup
        │             │
        └──────┬──────┘
               │
               ▼
             Clerk
               │
               ▼
        Authenticated User
               │
               ▼
      Mock.AI Application
               │
               ▼
       User-specific Data
```

Clerk provides the authentication layer while Firebase manages application data associated with the user's interview activity.

---

## 🎙️ Voice Interaction

Mock.AI combines two browser capabilities to create an interactive voice workflow.

### Text-to-Speech

```text
AI Question
     ↓
Web Speech API
     ↓
Spoken Question
```

### Voice Recording

```text
User Answer
     ↓
Microphone
     ↓
MediaRecorder API
     ↓
Recorded Audio
```

This creates a more interactive interview experience than a traditional text-only question platform.

---

## 📊 Interview Experience

A typical session follows this workflow:

```text
1. Choose Interview Role
          ↓
2. Choose Difficulty
          ↓
3. Generate Questions
          ↓
4. Start Interview
          ↓
5. Listen to Question
          ↓
6. Record Answer
          ↓
7. Navigate to Next Question
          ↓
8. Save Interview Data
          ↓
9. Review Interview History
```

---

## ⚙️ Installation

### Prerequisites

Make sure you have:

- Node.js
- npm
- Git
- A Gemini API key
- Firebase project configuration
- Clerk application configuration

### Clone the Repository

```bash
git clone https://github.com/Aradhy2005/Mock.ai.git
cd Mock.ai
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the project root.

```env
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
```

> Never commit real API keys or private credentials to GitHub.

### Start Development Server

```bash
npm run dev
```

---

## 🚀 Deployment

Mock.AI is deployed using **Vercel**.

Live application:

**https://mock-ai-alpha.vercel.app/**

The deployment architecture is:

```text
GitHub Repository
       │
       ▼
     Vercel
       │
       ▼
Mock.AI Web Application
       │
       ├──────────► Gemini API
       │
       ├──────────► Clerk
       │
       └──────────► Firebase
```

---

## 🧪 Current Capabilities

The project currently includes:

- [x] AI-powered interview question generation
- [x] Role-based interview configuration
- [x] Difficulty-based interview configuration
- [x] Interactive question navigation
- [x] Vertical tab-based interface
- [x] Text-to-Speech
- [x] Voice recording
- [x] Clerk authentication
- [x] Google authentication
- [x] Email authentication
- [x] Firebase integration
- [x] Interview history
- [x] Usage tracking
- [x] Pricing interface
- [x] Vercel deployment

---

## 🗺️ Roadmap

### 🎤 Interview Intelligence

- [ ] AI-powered interview feedback
- [ ] Interview performance score
- [ ] Answer quality analysis
- [ ] Personalized improvement suggestions

### 🤖 Advanced AI Interviewer

- [ ] AI avatar interviewer
- [ ] Live conversational interview
- [ ] Dynamic follow-up questions
- [ ] Context-aware questioning

### 📄 Resume Intelligence

- [ ] Resume-based interview generation
- [ ] Resume skill extraction
- [ ] Job-description-based interviews
- [ ] Personalized question generation

### 🎙️ Voice Intelligence

- [ ] AI analysis of recorded answers
- [ ] Speech quality analysis
- [ ] Communication insights
- [ ] Confidence-oriented feedback

---

## 🔮 Future Architecture

The long-term goal is to evolve Mock.AI from a question-generation application into a more complete AI interview simulation platform.

```text
                    Mock.AI
                       │
          ┌────────────┼────────────┐
          │            │            │
          ▼            ▼            ▼
     Question      Voice AI      Resume AI
     Generation    Interview     Analysis
          │            │            │
          └────────────┼────────────┘
                       │
                       ▼
                Interview Engine
                       │
                       ▼
               Performance Analysis
                       │
                       ▼
              Personalized Feedback
```

Potential future capabilities include:

- Adaptive interviews
- Real-time follow-up questions
- Resume-aware interviews
- Job-description-aware interviews
- Voice analysis
- AI-generated feedback
- Interview scoring
- Personalized preparation plans

These capabilities represent future development directions and are not all currently implemented.

---

## 🧠 Engineering Highlights

Mock.AI demonstrates practical implementation of:

- Generative AI integration
- Prompt engineering
- React application architecture
- TypeScript
- API integration
- Authentication
- Cloud database integration
- Browser speech APIs
- Voice recording
- Usage-based product logic
- Responsive UI development
- Vite-based frontend architecture
- Vercel deployment

The project combines multiple application layers rather than relying solely on an AI API.

---

## 🔒 Security Considerations

Mock.AI requires several external service credentials.

Sensitive configuration should be stored in environment variables rather than committed to source control.

Important practices include:

- Never commit API keys
- Never expose private Firebase credentials
- Keep `.env` files outside version control
- Restrict production API access where possible
- Configure authentication providers securely
- Apply appropriate Firebase security rules

> ⚠️ Public repositories should be treated as completely visible. Any secret committed to Git history should be considered compromised and rotated.

---

## 📸 Screenshots

Screenshots can be added here as the UI evolves.

### Landing Page

_Add screenshot here._

### Interview Generator

_Add screenshot here._

### Interview Interface

_Add screenshot here._

### Dashboard

_Add screenshot here._

### Pricing

_Add screenshot here._

---

## 📌 Project Status

**Active Development**

Mock.AI has established its core AI interview-generation and interactive interview experience.

The next development direction focuses on deeper interview intelligence, including AI feedback, performance analysis, adaptive questioning, resume-based interviews, and conversational AI interview experiences.

---

## 👨‍💻 Author

### Aradhy Bajpai

**B.Tech Computer Science & Engineering — PSIT Kanpur**

Full-Stack Developer • AI/ML • Generative AI

<p align="center">
  <a href="https://github.com/Aradhy2005">GitHub</a> •
  <a href="https://www.linkedin.com/in/aradhy-bajpai-897241283/">LinkedIn</a> •
  <a href="https://leetcode.com/u/aradhy2005/">LeetCode</a>
</p>

---

<p align="center">
  <strong>Building AI-powered tools for better interview preparation.</strong>
</p>
