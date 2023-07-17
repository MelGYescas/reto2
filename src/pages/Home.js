import { getData } from '../utils/getData';

const Home = async () => {
    try {
        const data = await getData();

        const tableRows = data.map(post => {
        return `
            <tr>
            <td><a href="#/post/${post.id}" data-id="${post.id}">${post.userId}</a></td>
            <td><a href="#/post/${post.id}" data-id="${post.id}">${post.id}</a></td>
            <td><a href="#/post/${post.id}" data-id="${post.id}">${post.title}</a></td>
            </tr>
        `;
        }).join('');

        const view = `
        <table>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
            ${tableRows}
            </tbody>
        </table>
        `;


        return view;
    } catch (error) {
        console.error(error);
        return `<p>Error al cargar los datos</p>`;
    }
};

export default Home;
