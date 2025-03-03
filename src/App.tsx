import './App.css'
import Navigation from './routes/Navigation'
import ModalStack from './components/ModalStack'
import { MyProvider } from './Context/Provider'

function App() {
  return (
    <MyProvider >
      <div className="relative">
        <ModalStack />
        <Navigation />
      </div>
    </MyProvider>
  )
}

export default App
