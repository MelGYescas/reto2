const getHash = () =>
  location.hash.slice(1).toLocaleLowerCase() || '/';
// const getHash = () =>
//   location.hash.slice(1).toLocaleLowerCase().split('/').length ? location.hash.slice(1).toLocaleLowerCase().split('/') : ['/'];

export default getHash;
