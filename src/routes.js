/* eslint-disable */

import React from 'react'

// Dashboard
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Classes
const Creche = React.lazy(() => import('./views/classes/Creche'))
const ClassOne = React.lazy(() => import('./views/classes/Class1'))

// Students
const Students = React.lazy(() => import('./views/students/Students'))

// Student
const Student = React.lazy(() => import('./views/students/Student'))

// Staff
const Staff = React.lazy(() => import('./views/staff/Staff'))

// Fees
const Fees = React.lazy(() => import('./views/fees/Fees'))

// Salaries
const Salaries = React.lazy(() => import('./views/salaries/Salaries'))

// Users
const Users = React.lazy(() => import('./views/users/Users'))

// Settings
const Settings = React.lazy(() => import('./views/settings/Settings'))

// Profile
const Profile = React.lazy(() => import('./views/profile/Profile'))

// Messages
const Messages = React.lazy(() => import('./views/messages/Messages'))

// Updates
const Updates = React.lazy(() => import('./views/updates/Updates'))

// Tasks
const Tasks = React.lazy(() => import('./views/tasks/Tasks'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  { path: '/classes', name: 'Classes', exact: true },
  { path: '/classes/creche', name: 'Creche', element: Creche },
  { path: '/classes/nursery-one', name: 'Nursery 1', element: Creche },
  { path: '/classes/nursery-two', name: 'Nursery 2', element: Creche },
  { path: '/classes/kg', name: 'Kindergerten', element: Creche },
  { path: '/classes/class-one', name: 'Class 1', element: ClassOne },
  { path: '/classes/class-two', name: 'Class 2', element: ClassOne },
  { path: '/classes/class-three', name: 'Class 3', element: ClassOne },
  { path: '/classes/class-four', name: 'Class 4', element: ClassOne },
  { path: '/classes/class-five', name: 'Class 5', element: ClassOne },
  { path: '/classes/class-six', name: 'Class 6', element: ClassOne },
  { path: '/classes/form-one', name: 'Form 1', element: ClassOne },
  { path: '/classes/form-two', name: 'Form 2', element: ClassOne },
  { path: '/classes/form-three', name: 'Form 3', element: ClassOne },
  { path: '/students', name: 'Students', element: Students },
  { path: '/student', name: 'Student', element: Student },
  { path: '/staff', name: 'Staff', element: Staff },
  { path: '/fees', name: 'Fees', element: Fees },
  { path: '/salaries', name: 'Salaries', element: Salaries },
  { path: '/users', name: 'Users', element: Users },
  { path: '/settings', name: 'Settings', element: Settings },
  { path: '/profile', name: 'Profile', element: Profile },
  { path: '/messages', name: 'Messages', element: Messages },
  { path: '/updates', name: 'Updates', element: Updates },
  { path: '/tasks', name: 'Tasks', element: Tasks },
]

export default routes
