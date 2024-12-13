import './App.css'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
function App() {

  return (
   <div className='container'>
      <div className='card'> 
        <img src={img1} alt="" />
        <div className='text'>STRENGTH</div>
      </div>
      <div className='card img2'>
        <img src={img2} alt="" />
        <div className='text'>MOBILITY</div>
      </div>
      <div className='card'>
        <img src={img3} alt="" />
        <div className='text'>DRILLS</div>
      </div>
   </div>
  )
}

export default App
