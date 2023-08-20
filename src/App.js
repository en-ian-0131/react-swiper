//備份
import IanSwiper from './component/IanSwiper'
import movie from './movie.json'

function App() {
  console.log(movie)
  return (
    <>
      <div className="container">
        <h1>電影目錄</h1>
        <IanSwiper movie={movie} />
      </div>
    </>
  )
}

export default App
