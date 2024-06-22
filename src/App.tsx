import "./App.css";
const welcome = {
  greeting: "Hey",
  title: "React",
};
function App() {
  return (
    <div>
      <h1>Hello {welcome.greeting}</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
