import BgVideo from './assets/backgroundvideo.mp4'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLogin from './Views/Admins Pages/AdminLogin'
import AdminDashboardSelect from './Views/Admins Pages/AdminDashboardSelect'
import AdminProjectDashboard from './Views/Admins Pages/AdminProjectDashboard'
import AdminWorkersDashboard from './Views/Admins Pages/AdminWorkersDashboard'
import AdminSettingsDashboard from './Views/Admins Pages/AdminSettingsDashboard'
import WorkersDashboard from './Views/Workers Page/WorkersDashboard'


function App() {


  return (


    <div>

      <div className="video-background h-screen bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <video autoPlay loop muted playsInline>
          <source src={BgVideo} type="video/mp4" />
        </video>
      </div>
      <Router>
        <Routes>
          <Route path='/' element={<AdminLogin />} />
          <Route path='select-dashboard' element={<AdminDashboardSelect />} />
          <Route path='admin-project-dashboard' element={<AdminProjectDashboard />} />
          <Route path='admin-workers-dashboard' element={<AdminWorkersDashboard />} />
          <Route path='admin-settings-dashboard' element={<AdminSettingsDashboard />} />
          <Route path='workers-dashboard' element={<WorkersDashboard />} />
        </Routes>
      </Router>
    </div>

  )
}

export default App
