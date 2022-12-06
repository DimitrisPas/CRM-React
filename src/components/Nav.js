import { useNavigate } from 'react-router-dom'

const Nav = () => {

  const navigate = useNavigate()

  return (
    <nav>
      <div className="logo-container" onClick={() => navigate('/')}>
        CRM
      </div>
      <div className="controls-container">
        <div className="icon new" onClick={() => navigate('/ticket')}>Add new</div>
        <div className="icon back" onClick={() => navigate('/')}>Back</div>
      </div>
    </nav>
  )
}

export default Nav