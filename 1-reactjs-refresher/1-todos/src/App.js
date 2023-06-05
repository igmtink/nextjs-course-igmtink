import Todo from "./components/todo";

function App() {
  return (
    <main className="px-4 py-8">
      <h1 className="uppercase text-4xl text-center font-bold mb-12">
        MY TODOS
      </h1>
      <ul className="grid grid-cols-1 gap-4">
        <li>
          <Todo text="Learn ReactJS" />
        </li>
        <li>
          <Todo text="Master ReactJS" />
        </li>
        <li>
          <Todo text="Explore ReactJS" />
        </li>
      </ul>
    </main>
  );
}

export default App;
