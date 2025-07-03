import React, { useState } from 'react';
import { useAuth} from '../../context/AuthContext';
import input from '../../components/ui/Input';
import Card from '../../components/ui/Card';
import Loadingspinner from '../../components/ui/LoadingSpinner';
import { ensNormalize } from 'ethers';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useAuth();

}
const handleSubmit = async (e) => {
    e.preventDefaault();
    setError('');
    try {
        setLoading(true);
        await login(email, password);
    } catch (err) {
        setError('Failed to log in. Please check your credentials.');
    }
};
return ()