🧠 Mock.AI – AI-Powered Mock Interview Generator

Practice real interview questions with AI-driven feedback, voice interaction, and personalized interview simulations.

Mock.AI helps students and jobseekers prepare for interviews using Gemini AI, React + TypeScript, Firebase, and Clerk Authentication.
It generates role-specific interview questions, allows users to record voice answers, and provides a smooth, interactive mock interview experience.

🚀 Features
🔹 AI Question Generation

Powered by Gemini API

Role-based and difficulty-based questions

Behavioral + technical interview sets

🔹 Interactive Question Section

Vertical tab-based UI for easy navigation

Text-to-Speech for question playback

Voice Recording for user answers

Play/Pause controls

Auto-progress to next question

🔹 Authentication with Clerk

Secure login/signup

Google & email authentication

Role-based user management

🔹 Firebase Integration

User interview history

Saved answers

Usage tracking per plan

Realtime database + Firestore

🔹 Pricing & Plans
Plan	Price	Benefits
Free	$0	4 interviews
Basic	$7	20 interviews
Premium	$30	Unlimited interviews

🏗️ Tech Stack
Frontend

React (Vite)

TypeScript

Tailwind CSS

ShadCN UI

Backend / Cloud

Google Gemini API

Firebase Firestore

Firebase Auth (for backup)

Clerk Authentication

Other Tools

Web Speech API (TTS)

MediaRecorder API (voice recording)

📂 Project Structure
mock-ai/
│── src/
│   ├── components/
│   │   ├── QuestionSection.tsx       # Vertical tab + speech + recorder
│   │   ├── RecordAnswer.tsx          # Voice recording
│   │   ├── Pricing.tsx               # Pricing UI
│   │   └── AvatarInterview.tsx       # (Upcoming Feature)
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Generate.tsx              # AI generate interview route
│   │   └── Dashboard.tsx
│   ├── utils/
│   │   ├── firebase.ts                # Firebase config
│   │   ├── generatePrompt.ts          # Gemini prompt builder
│   │   └── authHelpers.ts
│   └── App.tsx
│
│── public/
│── package.json
│── README.md
│── .env.example

🧪 How It Works
1️⃣ User selects role & difficulty

Frontend creates a Gemini prompt using a custom template.

2️⃣ API sends request to Gemini

/generate route handles generation and returns questions.

3️⃣ Questions appear in QuestionSection

User can:

Listen via TTS

Record answers

Navigate using tabs

4️⃣ Answers saved to Firebase

Used for analytics and upcoming feedback feature.

5️⃣ Limit Applied Based on Plan

Free plan → 4 interviews
Paid plans → Increased usage

⚙️ Installation & Setup
1. Clone Repo
git clone https://github.com/<Aradhy2005>/mock-ai.git
cd mock-ai

2. Install Dependencies
npm install

3. Add Environment Variables

Create .env:

VITE_GEMINI_API_KEY=your_key_here
VITE_CLERK_PUBLISHABLE_KEY=your_key_here
VITE_FIREBASE_API_KEY=your_key_here
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain

4. Run Project
npm run dev


📌 Roadmap
Completed

✔ AI question generation
✔ Vertical tabs UI
✔ TTS support
✔ Voice recording
✔ Firebase storage
✔ Pricing plans
✔ Clerk authentication

Next

🔜 AI Avatar live interview
🔜 Interview feedback score
🔜 AI analysis of recorded audio
🔜 Resume-based interview generation

🏅 Why Mock.AI Stands Out

Realistic AI-driven interviews

Smooth voice + TTS experience

Clean UI for students


Future-ready avatar-based experience

🛡️ License

MIT License.

⭐ Contribute

Contributions are welcome!
Open an issue or submit a PR.
