import "./App.css";
const welcome = {
  greeting: "Hey",
  title: "React",
};
const list = [
  {
    title: "React",
    url: "Https://reactjs.org",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "Https://redux.js.org",
    author: "Dan Abramovm Andrew Clark",
    num_comments: 2,
    points: 4,
    objectID: 1,
  },
];

function App() {
  return (
    <div>
      <h1>Hello {welcome.greeting}</h1>
      <ul>
        {list.map(function (item) {
          return (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
