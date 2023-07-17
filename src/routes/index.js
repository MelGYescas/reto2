import Error404 from '../pages/Error404'
import Home from '../pages/Home';
import Detail from '../pages/Detail'
import Header from '../templates/Header';

import resolveRoutes  from '../utils/resolveRoutes';
import getHash from '../utils/getHash';

const routes = {
  '/': Home,
  '/post/:id': Detail
};


const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('posts-container');

  header.innerHTML = await Header();
  let hash = getHash();
  let route = resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
};


export default router;