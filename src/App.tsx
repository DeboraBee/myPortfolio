import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Strip the trailing slash Vite's `base` config adds, e.g. "/myPortfolio/" -> "/myPortfolio",
// so wouter matches routes relative to where the app is actually deployed (GitHub Pages).
const routerBase = import.meta.env.BASE_URL.replace(/\/$/, "");

function AppRoutes() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <LanguageProvider>
          <WouterRouter base={routerBase}>
            <AppRoutes />
          </WouterRouter>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
