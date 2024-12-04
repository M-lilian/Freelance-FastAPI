import api from '../utils/api';

export const authService = {
  async login(email, password) {
    try {
      const response = await api.post('/accounts/login/', {  // Note the updated endpoint
        email,
        password,
      });
      console.log('Auth response:', response); // Debug log
      if (response.data.key) {
        localStorage.setItem('token', response.data.key);
        // Set the token in axios defaults
        api.defaults.headers.common['Authorization'] = `Token ${response.data.key}`;
      }
      return response.data;
    } catch (error) {
      console.error('Auth error:', error.response?.data); // Debug log
      throw error;
    }
  },

  async signup(userData) {
    try {
      const response = await api.post('/accounts/signup/', {  // Note the updated endpoint
        email: userData.email,
        password1: userData.password,
        password2: userData.confirmPassword,
      });
      if (response.data.key) {
        localStorage.setItem('token', response.data.key);
        // Set the token in axios defaults
        api.defaults.headers.common['Authorization'] = `Token ${response.data.key}`;
      }
      return response.data;
    } catch (error) {
      console.error('Signup error:', error.response?.data); // Debug log
      throw error;
    }
  },

  logout() {
    localStorage.removeItem('token');
    // Remove the token from axios defaults
    delete api.defaults.headers.common['Authorization'];
  }
};