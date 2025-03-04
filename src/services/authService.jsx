import axios from 'axios';


 const ValidateToken = async () => {
  try {
    const response = await axios.get(`${API_URL}/auth/validateToken`, {
      withCredentials: true,
    });
    return response.data.status; // true si el token es válido
  } catch (err) {
    console.error('Error validando el token:', err);
    return false;
  }
};

export default ValidateToken;