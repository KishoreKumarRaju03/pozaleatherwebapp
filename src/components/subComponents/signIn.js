import { useState } from 'react';
import { loginUser } from '../../utils/auth';
import '../../style/subComponentsStyle/signinStyle.css';
import { Link } from 'react-router-dom';
import FooterSection from '../footerSection';
import NavHead from '../navHead';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;
        const result = loginUser(email, password);
        
        if (result.success) {
            if (formData.remember) {
                localStorage.setItem('currentUser', JSON.stringify(result.user));
            } else {
                sessionStorage.setItem('currentUser', JSON.stringify(result.user));
            }
            
            window.location.href = '/';
        } else {
            setError(result.message);
        }
    };

    return (
        <>
            <NavHead />
            <div className="signin-container">
                <div className="signin-content">
                    <div className="signin-header">
                        <h1>Login</h1>
                        <p>Welcome back! Sign in to your account</p>
                    </div>
                    
                    {error && <div className="error-message">{error}</div>}
                    
                    <form className="signin-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="form-options">
                            <div className="remember-me">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    name="remember"
                                    checked={formData.remember}
                                    onChange={handleChange}
                                />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <a href="/forgot-password" className="forgot-password">
                                Forgot password?
                            </a>
                        </div>
                        
                        <button type="submit" className="signin-button">Sign In</button>
                        
                        <div className="signup-redirect">
                            Don't have an account? <Link to="/signup">Sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
            <FooterSection />
        </>
    );
};

export default SignIn;