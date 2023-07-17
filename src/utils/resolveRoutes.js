const resolveRoutes = (route) => {
  if (route.length <= 1) {
    return '/';
  } else if (route.includes('/post/')) {
    return '/post/:id';
  } else {
    return `/${route}`;
  }
};


export default resolveRoutes;
