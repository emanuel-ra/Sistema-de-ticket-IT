//import './node_modules/materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import './App.css'
import Navbar from './components/Header/Navbar'
import RequestSupport from './components/Forms/RequestSupport'

function App() {

  return (
    <>
      <Navbar />
      <main className="row blue-grey lighten-5 valign-wrapper">
        <div className="container center-align">
          <RequestSupport />
        </div>
      </main>
    </>
  )
}

export default App
