import axios from 'axios';

export async function getLoggedUser() {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:3001/users/getall', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const users = response.data;
    const userData = JSON.parse(localStorage.getItem('user'));
    const loginCode = userData.codigo_udg;

    // Usa find para buscar el usuario y retornar directamente
    const user = users.find((user) => user.codigo_udg === loginCode);

    if (user) {
      const j_user = JSON.stringify(user); // Convierte el usuario a JSON
      console.log('User data:', j_user); // Log correcto
      return j_user; // Retorna el JSON string
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Lanza el error para manejarlo en el componente
  }
}

export function setPrivilegios() {
      const userData = JSON.parse(localStorage.getItem('user'));
      const rol = userData.rol;
      if(rol ==='tallerista'){
        return true;
      }
      else{
        return false;
      }
      return false;
    };