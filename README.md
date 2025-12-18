# EduStride Zimbabwe College Portal

EduStride is a professional academic management portal designed specifically for colleges in Zimbabwe. It features a comprehensive suite of dashboards for students and administrators, adhering strictly to the local 3-term academic structure.

## Project Overview

This portal serves as a unified platform for:
- **Student Fees Management**: Track balances, payments, and deadlines.
- **Academic Results**: View termly grades and download provisional result slips.
- **Academic Scheduling**: Access weekly timetables and subject details.
- **College Communication**: Stay informed with centralized notices and announcements.

## Features

- **3-Term Academic Year**: Native support for Term 1, Term 2, and Term 3.
- **Program-Based Curriculum**: Categorization into Sciences, Commercials, and Arts & Humanities.
- **Subject Tracking**: Management of individual subjects rather than generic modules.
- **Simulated Authentication**: Mock login and registration flows for students and admins.
- **Responsive Design**: Fully optimized for mobile and desktop viewing.

## Tech Stack

- **Framework**: React 18 with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Notifications**: Sonner

## Frontend Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

## Folder Structure Explanation

- `src/components`: Reusable UI components.
  - `landing`: Components specific to the public landing page.
  - `dashboard`: Shared dashboard layout and navigation.
  - `ui`: Base Shadcn UI components.
- `src/pages`: Page-level components.
  - `auth`: Login and Registration pages.
  - `dashboard`: Student and Admin dashboard sub-pages.
- `src/lib`: Utility functions and mock data.
  - `mock-data.ts`: Centralized types and simulated data models.
- `src/App.tsx`: Main routing configuration.

## Backend Integration Guide (Supabase)

The current implementation is **frontend-only** with simulated data. To integrate a real backend using Supabase, follow the steps below.

### Step 1: Create a Supabase Project
Sign up at [supabase.com](https://supabase.com) and create a new project.

### Step 2: Database Schema (SQL Editor)
Run the following SQL commands inside the **Supabase SQL Editor** to create the necessary tables for the EduStride system.

```sql
-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Users Table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  role TEXT CHECK (role IN ('student', 'admin')) NOT NULL,
  full_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Students Table
CREATE TABLE students (
  id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  student_id TEXT UNIQUE NOT NULL,
  program TEXT CHECK (program IN ('Sciences', 'Commercials', 'Arts & Humanities')) NOT NULL,
  current_term INTEGER CHECK (current_term IN (1, 2, 3)) DEFAULT 1,
  enrollment_date DATE DEFAULT CURRENT_DATE
);

-- 4. Subjects Table
CREATE TABLE subjects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  code TEXT UNIQUE NOT NULL,
  program TEXT CHECK (program IN ('Sciences', 'Commercials', 'Arts & Humanities')) NOT NULL
);

-- 5. Student Subjects (Many-to-Many)
CREATE TABLE student_subjects (
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  subject_id UUID REFERENCES subjects(id) ON DELETE CASCADE,
  PRIMARY KEY (student_id, subject_id)
);

-- 6. Fees Table
CREATE TABLE fees (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  term INTEGER CHECK (term IN (1, 2, 3)) NOT NULL,
  year INTEGER NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL,
  paid_amount DECIMAL(10, 2) DEFAULT 0.00,
  due_date DATE NOT NULL,
  status TEXT CHECK (status IN ('Paid', 'Partial', 'Outstanding')) DEFAULT 'Outstanding'
);

-- 7. Results Table
CREATE TABLE results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  subject_id UUID REFERENCES subjects(id) ON DELETE CASCADE,
  term INTEGER CHECK (term IN (1, 2, 3)) NOT NULL,
  year INTEGER NOT NULL,
  mark INTEGER CHECK (mark >= 0 AND mark <= 100),
  grade TEXT CHECK (grade IN ('A', 'B', 'C', 'D', 'E', 'U')),
  comment TEXT
);

-- 8. Notices Table
CREATE TABLE notices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  type TEXT CHECK (type IN ('General', 'Exam', 'Fees', 'Holiday')) DEFAULT 'General',
  priority TEXT CHECK (priority IN ('Low', 'Medium', 'High')) DEFAULT 'Medium',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
```

### Step 3: Connect Frontend
1. Replace `MOCK_STUDENT`, `MOCK_FEES`, etc., in `src/lib/mock-data.ts` with API calls using the `@supabase/supabase-js` client.
2. Update the Auth logic in `LoginPage.tsx` and `RegisterPage.tsx` to use `supabase.auth.signInWithPassword()` and `supabase.auth.signUp()`.
