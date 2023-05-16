import React from 'react'
import Tiles from '../Components/Tiles'
import projects from '../assets/projects.png'
import workers from '../assets/workers.png'
import settings from '../assets/settings.png'
import { Link } from 'react-router-dom'

function AdminDashboardSelect() {

    return (
        <div className='flex flex-col sm:flex-row gap-6 items-center justify-center md:h-screen overflow-x-auto whitespace-nowrap bg-black bg-opacity-0 backdrop-filter backdrop-blur-lg'>
           <Link to="/admin-project-dashboard"> <Tiles name="Projects" img={projects} className='w-1/2 sm:w-1/3 text-xl sm:text-2xl' /> </Link>
           <Link to="/admin-workers-dashboard"> <Tiles name="Workers" img={workers} className='w-1/2 sm:w-1/3 text-xl sm:text-2xl' /> </Link> 
            <Tiles name="Settings" img={settings} className='w-1/2 sm:w-1/3 text-xl sm:text-2xl' />
        </div>
    )
}

export default AdminDashboardSelect
