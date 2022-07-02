import { ReactLocation, Router, Outlet } from "@tanstack/react-location";
import { Header } from "./Components/Header";
import { Navigation } from "./Components/Navigation";
import { Footer } from "./Components/Footer";
import { Home } from "./Pages/Home";
import { Themes } from "./Pages/Themes";

const location = new ReactLocation();

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/themes",
    element: <Themes />,
  }
];


export default function App()
{
  return (
    <div className="App">
      <Router routes={routes} location={location}>
        <Header />
        <main className="Main">
          <Navigation />
          <Outlet />
        </main>
        <Footer />
      </Router>
    </div>
  )
}