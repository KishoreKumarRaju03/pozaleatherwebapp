// Utility functions for authentication
export const registerUser = (userData) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    // Check if user already exists
    if (users.some(user => user.email === userData.email)) {
        return { success: false, message: 'Email already registered' };
    }
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    return { success: true };
};

export const loginUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    return user ? { success: true, user } : { success: false, message: 'username/password is incorrect' };
};