
import './App.css'

function App() {
  

  return (
    <>
      <header>
  <nav>
    <a href="#" className="logo">Dribbble</a>
    <ul className="nav-links">
      <li><a href="#1">Shots</a></li>
      <li><a href="#2">Designers</a></li>
      <li><a href="#3">Teams</a></li>
      <li><a href="#4">Community</a></li>
      <li><a href="#5">Jobs</a></li>
    </ul>
    <div className="search-bar">
      <input type="text" placeholder="Search" />
      <button>Search</button>
    </div>
    <div>
      <button>Sign up</button>
      <button>Sign in</button>
    </div>
  </nav>
</header>

<div className="hero">
  <h1>What are you working on?</h1>
  <p>Dribbble is show and tell for designers.</p>
  <button>Learn more</button>
  <button>Sign up</button>
</div>

<div className="content">
  <div className="card">
    <img src="img1.png"/>
    <div className="card-content">
      <h2 className="card-title">Famous</h2>
      <div className="card-stats">
        <i className="fas fa-eye"></i> 4,044
        <i className="fas fa-comments"></i> 14
        <i className="fas fa-heart"></i> 290
      </div>
    </div>
    <div className="overlay">
      <p className="overlay-text">View Project</p>
    </div>
  </div>
  <div className="card">
    <img src="img2.png"/>
    <div className="card-content">
      <h2 className="card-title">Balkan Brothers</h2>
      <div className="card-stats">
        <i className="fas fa-eye"></i> 2,404
        <i className="fas fa-comments"></i> 13
        <i className="fas fa-heart"></i> 236
      </div>
    </div>
    <div className="overlay">
      <p className="overlay-text">View Project</p>
    </div>
  </div>
  <div className="card">
    <img src="img2.png"/>
    <div className="card-content">
      <h2 className="card-title">Jan Losert</h2>
      <div className="card-stats">
        <i className="fas fa-eye"></i> 3,985
        <i className="fas fa-comments"></i> 17
        <i className="fas fa-heart"></i> 264
      </div>
    </div>
    <div className="overlay">
      <p className="overlay-text">View Project</p>
    </div>
  </div>
  <div className="card">
    <img src="img3.png" alt="Card Image"/>
    <div className="card-content">
      <h2 className="card-title">Mattias Johansson</h2>
      <div className="card-stats">
        <i className="fas fa-eye"></i> 2,602
        <i className="fas fa-comments"></i> 23
        <i className="fas fa-heart"></i> 186
      </div>
    </div>
    <div className="overlay">
      <p className="overlay-text">View Project</p>
    </div>
  </div>
  <div className="card">
    <img src="img4.png"/>
    <div className="card-content">
      <h2 className="card-title">Ruslan Siiz</h2>
      <div className="card-stats">
        <i className="fas fa-eye"></i> 2,369
        <i className="fas fa-comments"></i> 8
        <i className="fas fa-heart"></i> 178
      </div>
    </div>
    <div className="overlay">
      <p className="overlay-text">View Project</p>
    </div>
  </div>
  <div className="card">
    <img src="img5.png"/>
    <div className="card-content">
      <h2 className="card-title">Paperpillar</h2>
      <div className="card-stats">
        <i className="fas fa-eye"></i> 2,025
        <i className="fas fa-comments"></i> 6
        <i className="fas fa-heart"></i> 160
      </div>
    </div>
    <div className="overlay">
      <p className="overlay-text">View Project</p>
    </div>
  </div>
  <div className="card">
    <img src="img5.png"/>
    <div className="card-content">
      <h2 className="card-title">Alfrey Davilla | vaneltia</h2>
      <div className="card-stats">
        <i className="fas fa-eye"></i> 1,841
        <i className="fas fa-comments"></i> 6
        <i className="fas fa-heart"></i> 158
      </div>
    </div>
    <div className="overlay">
      <p className="overlay-text">View Project</p>
    </div>
  </div>
  <div className="card">
    <img src="img6.png"/>
    <div className="card-content">
      <h2 className="card-title">A Studio-JQ A</h2>
      <div className="card-stats">
        <i className="fas fa-eye"></i> 2,179
        <i className="fas fa-comments"></i> 4
        <i className="fas fa-heart"></i> 158
      </div>
    </div>
    <div className="overlay">
      <p className="overlay-text">View Project</p>
    </div>
  </div>
  <div className="card">
    <img src="img7.png"/>
    <div className="card-content">
      <h2 className="card-title">Romain Trystram</h2>
      <div className="card-stats">
        <i className="fas fa-eye"></i> 1,872
        <i className="fas fa-comments"></i> 8
        <i className="fas fa-heart"></i> 148
      </div>
    </div>
    <div className="overlay">
      <p className="overlay-text">View Project</p>
    </div>
  </div>
  <div className="card">
    <img src="img8.png"/>
    <div className="card-content">
      <h2 className="card-title">inFullMobile</h2>
      <div className="card-stats">
        <i className="fas fa-eye"></i> 2,167
        <i className="fas fa-comments"></i> 9
        <i className="fas fa-heart"></i> 134
      </div>
    </div>
    <div className="overlay">
      <p className="overlay-text">View Project</p>
    </div>
  </div>
  <div className="card">
    <img src="img9.png" />
    <div className="card-content">
      <h2 className="card-title">FourPlus Studio</h2>
      <div className="card-stats">
        <i className="fas fa-eye"></i> 1,371
        <i className="fas fa-comments"></i> 9
        <i className="fas fa-heart"></i> 127
      </div>
    </div>
    <div className="overlay">
      <p className="overlay-text">View Project</p>
    </div>
  </div>
  <div className="card">
    <img src="img10.png"/>
    <div className="card-content">
      <h2 className="card-title">MUTI</h2>
      <div className="card-stats">
        <i className="fas fa-eye"></i> 728
        <i className="fas fa-comments"></i> 3
        <i className="fas fa-heart"></i> 118
      </div>
    </div>
    <div className="overlay">
      <p className="overlay-text">View Project</p>
    </div>
  </div>
  <div className="card">
    <img src="img11.png"/>
    <div className="card-content">
      <h2 className="card-title"></h2>
      <div className="card-stats">
        <i className="fas fa-eye"></i> 1,027
        <i className="fas fa-comments"></i> 6
        <i className="fas fa-heart"></i> 129
      </div>
    </div>
    <div className="overlay">
      <p className="overlay-text">View Project</p>
    </div>
  </div>
  <div className="card">
    <img src="img12.png"/>
    <div className="card-content">
      <h2 className="card-title"></h2>
      <div className="card-stats">
        <i className="fas fa-eye"></i> 1,553
        <i className="fas fa-comments"></i> 9
        <i className="fas fa-heart"></i> 112
      </div>
    </div>
    <div className="overlay">
      <p className="overlay-text">View Project</p>
    </div>
  </div>
  <div className="card">
    <img src="img13.png"/>
    <div className="card-content">
      <h2 className="card-title"></h2>
      <div className="card-stats">
        <i className="fas fa-eye"></i> 940
        <i className="fas fa-comments"></i> 9
        <i className="fas fa-heart"></i> 107
      </div>
    </div>
    <div className="overlay">
      <p className="overlay-text">View Project</p>
    </div>
  </div>
  <div className="card">
    <img src="img14.png"/>
    <div className="card-content">
      <h2 className="card-title"></h2>
      <div className="card-stats">
        <i className="fas fa-eye"></i> 1,177
        <i className="fas fa-comments"></i> 4
        <i className="fas fa-heart"></i> 102
      </div>
    </div>
    <div className="overlay">
      <p className="overlay-text">View Project</p>
    </div>
  </div>
  <div className="card">
    <img src="img15.png"/>
    <div className="card-content">
      <h2 className="card-title"></h2>
      <div className="card-stats">
        <i className="fas fa-eye"></i> 1,100
        <i className="fas fa-comments"></i> 6
        <i className="fas fa-heart"></i> 93
      </div>
    </div>
    <div className="overlay">
      <p className="overlay-text">View Project</p>
    </div>
  </div>
  <div className="card">
    <img src="img16.png"/>
    <div className="card-content">
      <h2 className="card-title"></h2>
      <div className="card-stats">
        <i className="fas fa-eye"></i> 1,445
        <i className="fas fa-comments"></i> 5
        <i className="fas fa-heart"></i> 101
      </div>
    </div>
    <div className="overlay">
      <p className="overlay-text">View Project</p>
    </div>
  </div>
</div>

<div className="pagination">
  <button className="active">1</button>
  <button>2</button>
  <button>3</button>
  <button>4</button>
  <button>5</button>
</div>

<footer className="footer">
  <p>&copy; 2023 Dribbble</p>
</footer>
    </>
  )
}

export default App
