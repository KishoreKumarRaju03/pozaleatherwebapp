import { useState } from 'react';
import { registerUser } from '../../utils/auth';
import '../../style/subComponentsStyle/signupStyle.css';
import { Link } from 'react-router-dom';
import NavHead from '../navHead';
import FooterSection from '../footerSection';

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        
        // Validation
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        
        if (!formData.terms) {
            setError('You must agree to the terms and conditions');
            return;
        }

        const { confirmPassword, terms, ...userData } = formData;
        const result = registerUser(userData);
        
        if (result.success) {
            setSuccess(true);
            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
                terms: false
            });
        } else {
            setError(result.message);
        }
    };

    return(
        <>
            <NavHead />
            <div className="signup-container">
                <div className="signup-content">
                    <div className="signup-header">
                        <h2>Create Account</h2>
                        <p>Register to access exclusive features</p>
                    </div>
                    
                    {error && <div className="error-message">{error}</div>}
                    {success && (
                        <div className="success-message">
                            Registration successful! You can now sign in.
                        </div>
                    )}
                    
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input 
                                type="text" 
                                id="firstName" 
                                name="firstName" 
                                placeholder="Enter your first name" 
                                value={formData.firstName}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input 
                                type="text" 
                                id="lastName" 
                                name="lastName" 
                                placeholder="Enter your last name" 
                                value={formData.lastName}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        
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
                                placeholder="Create a password" 
                                value={formData.password}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input 
                                type="password" 
                                id="confirmPassword" 
                                name="confirmPassword" 
                                placeholder="Confirm your password" 
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        
                        <div className="form-group checkbox-group">
                            <input 
                                type="checkbox" 
                                id="terms" 
                                name="terms" 
                                checked={formData.terms}
                                onChange={handleChange}
                                required 
                                className='checkbox-signup'
                            />
                            <label htmlFor="terms" className='terms-conditions'>
                                I agree to the <a href="/terms">Terms & Conditions</a> and <a href="/privacy">Privacy Policy</a>
                            </label>
                        </div>
                        
                        <button type="submit" className="signup-button">Create Account</button>
                        
                        <div className="login-redirect">
                            Already have an account? <Link to="/signin">Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>
            <FooterSection />
        </>
    );
};

export default SignUp;