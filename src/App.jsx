import './App.css'
import Home from './components/pages/Home'
import Intro from './components/pages/Intro'
import {createHashRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import TrafficSign from './components/Trafficsigns/TrafficSign'
import DrivingBasics from './components/DrivingBasics/DrivingBasics'
import MockExam from './components/MockExam/MockExam'
import Questionbank from './components/QuestionBank/Questionbank'
import TheoryExplanations from './components/DrivingBasics/TheoryExplanations'
import ConcessionCard from './components/pages/ConcessionCard'
import ExamConfirmation from './components/MockExam/ExamConfirmation'
import ResultPage from './components/MockExam/ResultPage'
import { Toaster } from 'react-hot-toast'

function App() {

  const router = createHashRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Intro />} />
      <Route path='home' element={<Home />} />
      <Route path='/module/signs' element={<TrafficSign />}/>
      <Route path='/module/driving_basics' element={<DrivingBasics />}/>
      <Route path='/details/:id' element={<TheoryExplanations />}/>
      <Route path='examconfirmation' element={<ExamConfirmation />} />
      <Route path='/module/mock' element={<MockExam />}/>
      <Route path='resultpage' element={<ResultPage />}/>
      <Route path='/module/questions' element={<Questionbank />}/>
      <Route path='/module/concession' element={<ConcessionCard />}/>
      </>
    )
  )

  return <>
  <Toaster />
  <RouterProvider router={router} />
  </>
}

export default App
