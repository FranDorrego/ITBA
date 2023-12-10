export async function validaIngreso(user, clave) {
  const apiUrl = 'http://127.0.0.1:8000/cliente/';
  const basicAuth = btoa(`${user}:${clave}`);

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${basicAuth}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      let data = await response.json();
      data = data[0]
      data.basicAuth = basicAuth
      return data;
    } else {
      return false;
    }

  } catch (error) {
    console.error('Error durante la solicitud:', error);
    return false;
  }
}
