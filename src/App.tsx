import './App.scss';


function App() {
  return (
      <div className='app-wrapper'>
        <header className='header'>
          <img
              src='https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg'
              alt='logo'/>
        </header>
        <nav className='nav'>
          <div><a href='#'>Profile</a></div>
          <div><a href='#'>Messages</a></div>
          <div><a href='#'>News</a></div>
          <div><a href='#'>Music</a></div>
          <div><a href='#'>Settings</a></div>
        </nav>
        <div className='content'>
          <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU"
               alt="back image"/>
          </div>
          <div>
            avatar + description
          </div>
          <div>
            My Posts
            <div>
              New Post
            </div>
            <div>
              <div>post 1</div>
              <div>post 2</div>
              <div>post 3</div>
            </div>
          </div>
        </div>
      </div>
  )
}


export default App;
