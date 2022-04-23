import Demos from './views/demos'
import HeaderAction from './components/header-action'
import FloatingMenu from './components/floating-menu'
import './assets/App.css'

const App = () => {
  return (
    <div className="app">
      <header>
        <div className="container">
          <a href="/">Demo</a>
          <a href="/#">Pages</a>
          <a href="/#">Portofolio</a>
          <div className="right">
            <HeaderAction />
          </div>
        </div>
      </header>
      <FloatingMenu />
      <Demos />
    </div>
  )
}

export default App
