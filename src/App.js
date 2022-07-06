import "./App.css";

function App() {
  const addNote = () => {};
  return (
    <div className="App">
      <h1>Sticky notes</h1>
      <form className="note-form" onSubmit={addNote}></form>
    </div>
  );
}

export default App;
