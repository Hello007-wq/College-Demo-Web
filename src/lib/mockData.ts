export type Term = 1 | 2 | 3;

export type Program = 'Sciences' | 'Commercials' | 'Arts & Humanities';

export interface Subject {
  id: string;
  name: string;
  code: string;
  program: Program;
}

export interface User {
  id: string;
  email: string;
  role: 'student' | 'admin';
  name: string;
}

export interface Student extends User {
  studentId: string;
  program: Program;
  currentTerm: Term;
  subjects: string[]; // Subject IDs
  enrollmentDate: string;
}

export interface FeeRecord {
  id: string;
  studentId: string;
  term: Term;
  year: number;
  amount: number;
  paid: number;
  status: 'Paid' | 'Partial' | 'Outstanding';
  dueDate: string;
  payments: {
    id: string;
    amount: number;
    date: string;
    method: string;
  }[];
}

export interface ResultRecord {
  id: string;
  studentId: string;
  subjectId: string;
  term: Term;
  year: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'E' | 'U';
  mark: number;
  comment: string;
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'General' | 'Exam' | 'Fees' | 'Holiday';
  priority: 'Low' | 'Medium' | 'High';
}

export interface TimetableSlot {
  id: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
  startTime: string;
  endTime: string;
  subjectId: string;
  room: string;
}

// Mock Subjects
export const SUBJECTS: Subject[] = [
  // Sciences
  { id: 's1', name: 'Mathematics', code: 'SCI101', program: 'Sciences' },
  { id: 's2', name: 'Physics', code: 'SCI102', program: 'Sciences' },
  { id: 's3', name: 'Chemistry', code: 'SCI103', program: 'Sciences' },
  { id: 's4', name: 'Biology', code: 'SCI104', program: 'Sciences' },
  { id: 's5', name: 'Computer Science', code: 'SCI105', program: 'Sciences' },
  // Commercials
  { id: 'c1', name: 'Accounts', code: 'COM101', program: 'Commercials' },
  { id: 'c2', name: 'Economics', code: 'COM102', program: 'Commercials' },
  { id: 'c3', name: 'Business Studies', code: 'COM103', program: 'Commercials' },
  { id: 'c4', name: 'Commerce', code: 'COM104', program: 'Commercials' },
  { id: 'c5', name: 'Office Management', code: 'COM105', program: 'Commercials' },
  // Arts
  { id: 'a1', name: 'English Literature', code: 'ART101', program: 'Arts & Humanities' },
  { id: 'a2', name: 'Shona', code: 'ART102', program: 'Arts & Humanities' },
  { id: 'a3', name: 'History', code: 'ART103', program: 'Arts & Humanities' },
  { id: 'a4', name: 'Divinity', code: 'ART104', program: 'Arts & Humanities' },
  { id: 'a5', name: 'Art & Design', code: 'ART105', program: 'Arts & Humanities' },
];

// Mock Student
export const MOCK_STUDENT: Student = {
  id: 'usr1',
  email: 'tatenda.m@edustride.ac.zw',
  name: 'Tatenda Mutasa',
  role: 'student',
  studentId: 'ST2024001',
  program: 'Sciences',
  currentTerm: 1,
  subjects: ['s1', 's2', 's5'],
  enrollmentDate: '2024-01-15',
};

// Mock Fees
export const MOCK_FEES: FeeRecord[] = [
  {
    id: 'f1',
    studentId: 'ST2024001',
    term: 1,
    year: 2024,
    amount: 1200,
    paid: 800,
    status: 'Partial',
    dueDate: '2024-02-28',
    payments: [
      { id: 'p1', amount: 500, date: '2024-01-20', method: 'Ecocash' },
      { id: 'p2', amount: 300, date: '2024-02-10', method: 'Bank Transfer' },
    ],
  },
];

// Mock Results
export const MOCK_RESULTS: ResultRecord[] = [
  { id: 'r1', studentId: 'ST2024001', subjectId: 's1', term: 1, year: 2024, grade: 'A', mark: 85, comment: 'Excellent performance' },
  { id: 'r2', studentId: 'ST2024001', subjectId: 's2', term: 1, year: 2024, grade: 'B', mark: 72, comment: 'Good progress' },
  { id: 'r3', studentId: 'ST2024001', subjectId: 's5', term: 1, year: 2024, grade: 'A', mark: 91, comment: 'Outstanding' },
];

// Mock Notices
export const MOCK_NOTICES: Notice[] = [
  { id: 'n1', title: 'Term 1 Exam Timetable', content: 'The final exam timetable for Term 1 has been released. Please check your department board.', date: '2024-03-10', type: 'Exam', priority: 'High' },
  { id: 'n2', title: 'Fee Payment Deadline', content: 'Students are reminded to clear their outstanding balances before the end of the month to avoid penalties.', date: '2024-02-15', type: 'Fees', priority: 'High' },
  { id: 'n3', title: 'Sports Day 2024', content: 'Join us this Friday for the annual inter-college sports day at the main stadium.', date: '2024-03-01', type: 'General', priority: 'Medium' },
];

// Mock Timetable
export const MOCK_TIMETABLE: TimetableSlot[] = [
  { id: 't1', day: 'Monday', startTime: '08:00', endTime: '10:00', subjectId: 's1', room: 'Lab 1' },
  { id: 't2', day: 'Monday', startTime: '10:30', endTime: '12:30', subjectId: 's2', room: 'Room 4' },
  { id: 't3', day: 'Tuesday', startTime: '09:00', endTime: '11:00', subjectId: 's5', room: 'CS Lab' },
  { id: 't4', day: 'Wednesday', startTime: '08:00', endTime: '10:00', subjectId: 's1', room: 'Lab 1' },
  { id: 't5', day: 'Thursday', startTime: '11:00', endTime: '13:00', subjectId: 's2', room: 'Room 4' },
  { id: 't6', day: 'Friday', startTime: '14:00', endTime: '16:00', subjectId: 's5', room: 'CS Lab' },
];
