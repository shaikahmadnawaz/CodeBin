import Navbar from "./components/nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import SnippetForm from "./components/snippets/SnippetForm";
import AllSnippets from "./components/snippets/AllSnippets";

function App() {
  return (
    <body className="flex flex-col max-w-3xl mx-4 mt-8 mb-40 antialiased md:flex-row lg:mx-auto">
      <main className="flex flex-col flex-auto min-w-0 px-2 mt-6 md:px-0">
        <Router>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Navbar />
            <Routes>
              <Route path="/" element={<SnippetForm />} />
              <Route path="/snippets" element={<AllSnippets />} />
            </Routes>
          </ThemeProvider>
        </Router>
      </main>
    </body>
  );
}

export default App;
