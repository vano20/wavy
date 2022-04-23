import { useState } from 'react'
import '../assets/header-action.css'
import Cart from './icons/cart'
import Search from './icons/search'
import Menu from './icons/menu'
import Video from './icons/video'
import Users from './icons/users'
import FileText from './icons/file-text'
import LifeBouy from './icons/life-bouy'
import Chat from './icons/chat'
import Input from './input'

const HeaderAction = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [showMenu, setShowMenu] = useState('')
  const clickSearch = () => {
    setShowSearch(!showSearch)
  }
  const clickMenu = () => {
    setShowMenu(showMenu === ' active' ? '' : ' active')
  }
  return (
    <div className="header-action">
      <div id="menu-dropdown">
        <a href="/#" onClick={() => clickMenu()}>
          <Menu />
        </a>
        <div className={'dropdown-content' + showMenu}>
          <div className="dropdown-items">
            <div className="dropdown-icon">
              <Chat size={20} />
            </div>
            <div className="dropdown-text">Chat</div>
          </div>
          <div className="dropdown-items">
            <LifeBouy size={20} />
            <div className="dropdown-text">Help</div>
          </div>
          <div className="dropdown-items">
            <FileText size={20} />
            <div className="dropdown-text">FAQ</div>
          </div>
          <div className="dropdown-items">
            <Video size={20} />
            <div className="dropdown-text">Gallery</div>
          </div>
          <div className="dropdown-items">
            <Users size={20} />
            <div className="dropdown-text">Community</div>
          </div>
          <div className="dropdown-items">
            <Cart size={20} />
            <div className="dropdown-text">Cart</div>
          </div>
        </div>
      </div>
      <a href="/#">
        <Cart size={20} />
      </a>
      <a href="/#" onClick={() => clickSearch()}>
        <Search size={20} />
      </a>
      {showSearch && <Input />}
    </div>
  )
}

export default HeaderAction
