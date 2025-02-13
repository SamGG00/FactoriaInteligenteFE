import axios from 'axios';


export const DeleteArticle= async (id_article) => {
    try {
        const response = await axios.get('http://localhost:3000/auth/validateToken', {
          withCredentials: true,
        });
        return response.data.status; // true si el token es válido
      } catch (err) {
        console.error('Error validando el token:', err);
        return false;
      }
}

export const UpdateArticle= async (id_article)=>{
    try {
        const response = await axios.get('http://localhost:3000/auth/validateToken', {
          withCredentials: true,
        });
        return response.data.status; // true si el token es válido
      } catch (err) {
        console.error('Error validando el token:', err);
        return false;
      }
}