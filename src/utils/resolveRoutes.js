const resolveRoutes = (route) => {
  if (route.length <= 1) {
    return '/';
  } else if (route.includes('/post/')) {
    return '/post/:id';
  } else {
    return `/${route}`;
  }
};

// export default resolveRoutes;
// const resolveRoutes = (route) => {
//   if (route[0].length > 3) {
//     return ['/post', route[1]];
//   }
//   return route;
// };

export default resolveRoutes;
