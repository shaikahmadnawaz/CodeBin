import { Link, useLocation } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import { CodeBracketIcon } from "@heroicons/react/20/solid";
import { Button } from "../ui/button";

const Navbar = () => {
  const location = useLocation();

  return (
    <aside className="z-50 mb-10 tracking-tight border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="lg:sticky lg:top-20">
        <nav
          className="relative flex flex-row items-center px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative h-14"
          id="nav"
        >
          <div className="flex items-center justify-between w-full px-2 space-x-0">
            <Link
              to="/"
              className="relative flex px-2 py-1 align-middle transition-all"
            >
              <CodeBracketIcon className="w-6 h-6 mr-2" />
              <span className="hidden font-bold sm:inline-block">CodeBin</span>
            </Link>
            <div className="flex items-center gap-x-2">
              {location.pathname === "/" ? (
                <Link
                  to="/submissions"
                  className="relative flex px-2 py-1 align-middle transition-all"
                >
                  <Button>Submissions</Button>
                </Link>
              ) : (
                <Link
                  to="/"
                  className="relative flex px-2 py-1 align-middle transition-all"
                >
                  <Button>New</Button>
                </Link>
              )}

              <ModeToggle />
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Navbar;
