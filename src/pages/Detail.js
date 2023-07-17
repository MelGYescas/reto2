import { getDetPost } from "../utils/getData";

const Detail = async () => {
    const hash = window.location.hash; // Obtén el hash de la URL actual
    const postId = hash.slice(7); // Extrae el ID del post del hash
    const post = await getDetPost(postId); // Obtiene los detalles del post
    console.log('hash'+hash);
    console.log('post' + postId);
    console.log(post);
    if (post) {
        const view = `
        <div class="post-container">
            <h1>Titulo: ${post.title}</h1>
            <p>Post Id: ${post.id}</p>
            <p>User Id: ${post.userId}</p>
            <p>Detalle: ${post.body}</p>
        </div>
        <a href="/" class="t-home">Regresar</a>
        `;
        return view;
    } else {
        return "<p>No se ha podido encontrar</p>";
    }
};

export default Detail;