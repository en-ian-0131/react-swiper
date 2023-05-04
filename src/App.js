import IanSwiper from './component/IanSwiper'
import movie from './movie.json'

function App() {
  console.log(movie)
  return (
    <>
      <IanSwiper movie={movie} />
    </>
  )
}

export default App
