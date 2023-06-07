import { Routes, Route } from 'react-router-dom'
import AdminLogin from './Views/Admins Pages/AdminLogin'
import AdminRegistration from './Views/Admins Pages/AdminRegistration'
import AdminDashboardSelect from './Views/Admins Pages/AdminDashboardSelect'
import AdminProjectDashboard from './Views/Admins Pages/AdminProjectDashboard'
import AdminWorkersDashboard from './Views/Admins Pages/AdminWorkersDashboard'
import AdminSettingsDashboard from './Views/Admins Pages/AdminSettingsDashboard'
import BgVideo from './assets/backgroundvideo.mp4'
import List from './Components/List'
import WorkersDashboard from './Views/Workers Page/WorkersDashboard'
import RegisterModel from './Components/RegisterModel'

function App() {
  

  return (


    <div>

      <div className="video-background h-screen bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <video autoPlay loop muted playsInline>
          <source src={BgVideo} type="video/mp4" />
        </video>
      </div>

      {/* <Routes>
        <Route path='/' element={<AdminLogin />} />
        <Route path='/register' element={<AdminRegistration />} />
        <Route path='select-dashboard' element={<AdminDashboardSelect />} />
        <Route path='admin-project-dashboard' element={<AdminProjectDashboard />} />
        <Route path='admin-workers-dashboard' element={<AdminWorkersDashboard />} />
        <Route path='admin-settings-dashboard' element={<AdminSettingsDashboard />} />
      </Routes> */}

      {/* <WorkersDashboard/> */}

      <RegisterModel/>
    </div>

    
    // <List/>

  )
}

export default App
