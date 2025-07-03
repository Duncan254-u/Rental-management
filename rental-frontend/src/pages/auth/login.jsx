import React, { useState } from 'react';
import { useAuth} from '../../context/AuthContext';
import input from '../../components/ui/Input';
import Card from '../../components/ui/Card';
import Loadingspinner from '../../components/ui/LoadingSpinner';
import { ensNormalize } from 'ethers';
import { Input } from 'postcss';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            setLoading(true);
            await login(email, password);
        } catch (err) {
            setError('Failed to log in. Please check your credentials.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Card className="p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Landlord Login</h2>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <Input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full"
                        />
                    </div>
                    {error && (
                        <p className="text-sm text-red-600 text-center">{error}</p>
                    )}
                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? <loadingSpinner siuze="4" className="text-white" /> : 'Login'}

                    
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default LoginPage;