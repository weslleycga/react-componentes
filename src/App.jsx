import Header from './components/Header'
import Card from './components/Card'

function App() {
  return (
    <>
      <Header />
      <main className="cards">
        <Card numero={1} />
        <Card numero={2} />
        <Card numero={3} />
      </main>
    </>
  )
}

export default App
