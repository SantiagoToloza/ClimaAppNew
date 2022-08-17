import Header from "./components/Header"
import { ClimaProvider } from "./context/ClimaProvider"


const App = () => {
  return (
    <ClimaProvider>
      <Header/>
    </ClimaProvider>
  )
}
export default App