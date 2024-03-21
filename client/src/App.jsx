import Navbar from "./components/common/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import SubmissionForm from "./components/submissions/SubmissionForm";
import AllSubmissions from "./components/submissions/AllSubmissions";

function App() {
  return (
    <body className="flex flex-col max-w-3xl mx-4 antialiased md:flex-row lg:mx-auto">
      <main className="flex flex-col flex-auto min-w-0 px-2 my-6 md:px-0">
        <Router>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Navbar />
            <Routes>
              <Route path="/" element={<SubmissionForm />} />
              <Route path="/submissions" element={<AllSubmissions />} />
            </Routes>
          </ThemeProvider>
        </Router>
      </main>
    </body>
  );
}

export default App;
