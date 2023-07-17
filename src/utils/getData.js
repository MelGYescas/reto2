const url = "https://jsonplaceholder.typicode.com";
export async function getData() {
    try {
        const response = await fetch(url + '/posts');

        if (!response.ok) {
        throw new Error('Error al obtener los datos de la API');
        }

        const data = await response.json();

        // Ordena los datos por userId de mayor a menor
        const sortedData = data.sort((a, b) => b.userId - a.userId);

        console.log('Fetch correcto');
        return sortedData;
    } catch (error) {
        console.error('Error al realizar la solicitud a la API:', error);
        throw error;
    }
}


export async function getDetPost(id) {
    try {
        const response = await fetch(url + '/posts/' + id);
    
        if (!response.ok) {
            throw new Error('Error al obtener los datos de la API');
        }
    
        const data = await response.json();
    
        console.log('Fetch correcto');
        return data;
    } catch (error) {
        console.error('Error al realizar la solicitud a la API:', error);
        throw error;
    }
}