import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import LandingPage from './page/LandingPage'
import OnBoarding from './page/OnBoarding'
import JobPage from './page/JobPage'
import JobLists from './page/JobLists'
import JobPost from './page/JobPost'
import SavedJobs from './page/SavedJobs'
import MyJobs from './page/MyJobs'
import { ThemeProvider } from "./context/ThemeProvider";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/onboarding", element: <OnBoarding /> },
      { path: "/jobs", element: <JobLists /> },
      { path: "/job/:id", element: <JobPage /> },
      { path: "/post-job", element: <JobPost /> },
      { path: "/saved-job", element: <SavedJobs /> },
      { path: "/my-jobs", element: <MyJobs /> },
    ]
  }
])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App
