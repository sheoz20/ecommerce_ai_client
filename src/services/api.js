// API Service for backend communication
const API_URL = 'http://localhost:5000/api';

// Helper function for API calls
const fetchAPI = async (endpoint, options = {}) => {
  const url = `${API_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };
  
  const response = await fetch(url, config);
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
  
  return data;
};

// Products API
export const getProducts = async (category = '') => {
  const endpoint = category && category !== 'All' 
    ? `/products?category=${category}` 
    : '/products';
  return fetchAPI(endpoint);
};

export const getProduct = async (id) => {
  return fetchAPI(`/products/${id}`);
};

// Auth API
export const register = async (userData) => {
  return fetchAPI('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
};

export const login = async (credentials) => {
  return fetchAPI('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
};

// Cart API (requires auth token)
export const getCart = async (token) => {
  return fetchAPI('/cart', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
};

export const addToCart = async (productId, quantity, token) => {
  return fetchAPI('/cart/items', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ productId, quantity }),
  });
};

export const removeFromCart = async (productId, token) => {
  return fetchAPI(`/cart/items/${productId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
};
