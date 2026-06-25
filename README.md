# 📝 Smart React Note App

A fully functional, single-page Note Application built with React. This project demonstrates advanced state management using React Context API and `useReducer`[cite: 6], dynamic sorting[cite: 9], and a highly modular component-based architecture.

## 🔗 Live Demo
**[Live Demo](https://react-note-app-beta-kohl.vercel.app/)**

## ✨ Key Features
- **Add Notes:** Create new notes with title and description, including empty-field validation[cite: 7].
- **Toggle Status:** Mark notes as completed or open using integrated checkboxes[cite: 9].
- **Delete Notes:** Easily remove unwanted notes from the list[cite: 9].
- **Advanced Sorting:** Dynamically sort the note list by[cite: 8, 9]:
  - Latest notes
  - Earliest notes
  - Completed notes
  - Uncompleted notes
- **Dashboard Statistics:** Real-time calculation of total notes, completed notes, and open notes[cite: 10].
- **Global State Management:** Data flow is centrally managed using `useReducer` and provided globally via `NotesContext`[cite: 6].
- **Responsive UI:** Clean and modern interface styled with pure CSS Variables and custom layouts[cite: 3].

## 🛠️ Tech Stack
- React (Vite)[cite: 2, 4, 5]
- Context API & Hooks (`useReducer`, `useContext`, `useState`)[cite: 4, 6]
- Pure CSS (CSS Variables, Flexbox, Grid)[cite: 3]

## 🚀 Run Locally
1. Clone the repository:
```bash
   git clone [https://github.com/mahdimoradi-tech/react-note-app.git](https://github.com/mahdimoradi-tech/react-note-app.git)