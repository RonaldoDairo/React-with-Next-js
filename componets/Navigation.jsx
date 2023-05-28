
import Link from 'next/link'
const Navigation = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container"> 
    <a className="navbar-brand" href="/">Next Firts App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        
        <li className="nav-item">
          <Link className="nav-link" href="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/services">Services</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Navigation;
