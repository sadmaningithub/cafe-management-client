import Card from "./components/Card"

function App() {

  return (
    <div>
      <div>
        <h1 className="font-roboto text-xl font-normal">Welcome to Cafe Management App.</h1>
        <p className="font-montserrat text-lg font-normal">Where every mug feels like home.</p>
      </div>
      <div>
        <Card/>
      </div>
    </div>
  )
}

export default App
