import "./sass/App.scss";

function App() {
  const addNote = () => {};
  return (
    < >
      <div className="background">
        <div className="to-do">
          <h2>To do</h2>
        </div>
        <div className="in-progress">
          <h2>In progress</h2>
        </div>
        <div className="done">
          <h2>Done</h2>
        </div>
      </div>
      <div className="App">
      <h1>Sticky notes</h1>
      <form className="note-form" onSubmit={addNote}>
        <textarea placeholder="Create a new note..."></textarea>
        <button>Add</button>
      </form>
      </div>
    </>
  );
}

export default App;
