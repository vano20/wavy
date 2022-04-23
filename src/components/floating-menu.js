import '../assets/floating-menu.css'
import Cart from './icons/cart'
import Video from './icons/video'
import Users from './icons/users'
import FileText from './icons/file-text'
import LifeBouy from './icons/life-bouy'
import Chat from './icons/chat'

const FloatingMenu = () => {
  return (
    <div className="floating-menu-container">
      <div className="floating-items">
        <Chat size={18} />
      </div>
      <div className="floating-items">
        <LifeBouy size={18} />
      </div>
      <div className="floating-items">
        <FileText size={18} />
      </div>
      <div className="floating-items">
        <Video size={18} />
      </div>
      <div className="floating-items">
        <Users size={18} />
      </div>
      <div className="floating-items">
        <Cart size={18} color="#5ae663" />
      </div>
    </div>
  )
}

export default FloatingMenu
