import Modal from './components/modal'
import Todo from './components/todo'

const TODOS = [
  {
    todo: 'Learn ReactJS'
  },
  {
    todo: 'Explore ReactJS'
  },
  {
    todo: 'Master ReactJS'
  }
]

function App() {
  return (
    <main className="px-4 py-8">
      <h1 className="uppercase text-4xl text-center font-bold mb-12">
        MY TODOS
      </h1>
      <ul className="grid grid-cols-1 gap-4">
        {TODOS.map((item, index) => (
          <li key={index}>
            <Todo text={item.todo} />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
