
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
    <img src="https://cdn.dribbble.com/userupload/15276438/file/still-cf8cdb8dbf34d665ea93a0bb1d8e7684.png?resize=320x240&vertical=center" />
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
    <img src="https://cdn.dribbble.com/userupload/15413647/file/original-e657dc46a19413a48ddbadd2947a3f53.png?resize=320x240&vertical=center" />
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
    <img src="https://cdn.dribbble.com/userupload/15425338/file/still-4d9a79174daebb6cfd784c49f5148417.png?resize=320x240&vertical=center"/>
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
    <img src="https://cdn.dribbble.com/userupload/15419459/file/original-d47c2637ffd35dd35db36e7820ad3c5d.png?resize=320x240&vertical=center" alt="Card Image"/>
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
    <img src="https://cdn.dribbble.com/userupload/15421431/file/original-4430075325466d9ad6e19956310c5c40.jpg?resize=320x240&vertical=center"/>
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
    <img src="https://cdn.dribbble.com/userupload/15421053/file/original-d9ec0bc85fcc2e3cafe961e6a7f1c8cd.png?resize=320x240&vertical=center"/>
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
    <img src="https://cdn.dribbble.com/userupload/15419943/file/still-f5567bcd6842e7df644021e44376eee7.png?resize=320x240&vertical=center"/>
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
    <img src="https://cdn.dribbble.com/userupload/15391360/file/original-c3f1fc5228c551054116bfdc71756832.png?resize=320x240&vertical=center"/>
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
    <img src="https://cdn.dribbble.com/userupload/15417431/file/original-892cd21cb9f2c10d1b7f01747a92744d.png?crop=0x0-1600x1200&resize=320x240&vertical=center"/>
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
    <img src="https://cdn.dribbble.com/userupload/15422524/file/original-94dc61911c8791815968c6f701d15755.jpg?resize=320x240&vertical=center"/>
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
    <img src="https://cdn.dribbble.com/userupload/15419391/file/original-c6b42157844710aa93283b969181780f.png?resize=320x240&vertical=center" />
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
    <img src="https://cdn.dribbble.com/userupload/15420101/file/original-49d945548d2e0f8f8eda83fad9f99113.png?resize=320x240&vertical=center"/>
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
    <img src="https://cdn.dribbble.com/userupload/15417820/file/original-ec3016842f085f024f3769c55d8f878d.jpg?resize=320x240&vertical=center"/>
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
    <img src="https://cdn.dribbble.com/userupload/15411410/file/original-805da8f55afce317055cd4b4701cbfdd.jpg?resize=320x240&vertical=center"/>
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
    <img src="https://cdn.dribbble.com/userupload/15419381/file/original-2940eedfc6203770cdb38969c94a2034.jpg?resize=320x240&vertical=center"/>
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
    <img src="https://cdn.dribbble.com/userupload/15420010/file/original-e5f40fc98d84c6af73fc7df2da88d1a0.png?resize=320x240&vertical=center"/>
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
    <img src="https://cdn.dribbble.com/userupload/15412492/file/original-3581fa0c1d455273fb12340b0f16995a.png?resize=320x240&vertical=center"/>
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
    <img src="https://cdn.dribbble.com/userupload/15422672/file/original-a5c3e07499564f9c3978f5ca2f7fe573.png?resize=320x240&vertical=center"/>
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
