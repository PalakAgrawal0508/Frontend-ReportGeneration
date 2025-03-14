import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './pages/auth/Login';
import { useAuth } from './hooks/useAuth';
import Dashboard from './pages/Director/dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import Landing from './pages/Landing';
import QuickHelp from './pages/shared/QuickHelp';
import "react-toastify/dist/ReactToastify.css";
import { Dashboard as FacultyDashboard } from './pages/Faculty/dashboard/Dashboard';

// The Protected Route component is used to restrict access to certain routes based on the user's role
// It takes the allowedRoles prop which is an array of roles that are allowed to access the route
// If the user is not authenticated, they are redirected to the login page

function ProtectedRoute({ children, allowedRoles }: { children: React.ReactNode; allowedRoles: string[] }) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
}

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landing />} />

          <Route path="/" element={<Layout />}>
            {/* Faculty Routes */}
            <Route
              path="faculty/dashboard"
              element={
                <ProtectedRoute allowedRoles={['FACULTY']}>
                <FacultyDashboard/>
                </ProtectedRoute>
              }
            />

            {/* HOD Routes */}
            <Route
              path="hod/dashboard"
              element={
                <ProtectedRoute allowedRoles={['HOD']}>
                  <div>HOD Dashboard</div>
                </ProtectedRoute>
              }
            />

            {/* Director Routes */}
            <Route
              path="director/dashboard"
              element={
                <ProtectedRoute allowedRoles={['DIRECTOR']}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />



          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;