import React from 'react';  
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from  'react-router-dom';
import { useAuth} from '../context/AuthContext';

import Dashboard from '../pages/dashboard/Dashboard';
import PropertiesPage from '../pages/properties/PropertiesPage';
import TenantsPage from '../pages/pages/tenants/TenantsPage';
import LeasesPage from '../pages/leases/LeasesPage';
import PaymentsPage from '../pages/payments/PaymentsPage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from '../components/Layout'; 

const ProtectedRoute = ({ redirectPath = '/login'}) => {
    const { isAuthenticated, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className= "flex justify-center items-center h-screen">
                <p>Loading authentication...</p>
            </div>
        );
    }
    if (!isAuthenticated) {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
};

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />

               
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Layout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="properties" element={<PropertiesPage />} />
                    <Route path="tenants" element={<TenantsPage />} />
                    <Route path="leases" element={<LeasesPage />} />
                    <Route path="payments" element={<PaymentsPage />} />
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}
export default AppRouter;
