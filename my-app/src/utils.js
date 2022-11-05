async function getMovieDetailsById() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
  
    const todos = await resp.json();
  
    console.log(todos);
  }
  
  getMovieDetailsById();

  export default getMovieDetailsById