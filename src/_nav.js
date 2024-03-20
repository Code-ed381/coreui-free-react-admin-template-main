/* eslint-disable */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cibOpsgenie,
  cibSlideshare,
  cilPeople,
  cilMoney,
  cibCashapp
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Finance',
  },  
  {
    component: CNavItem,
    name: 'Fees',
    to: '/fees',
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Salaries',
    to: '/salaries',
    icon: <CIcon icon={cibCashapp} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Theme',
  },
  {
    component: CNavItem,
    name: 'Students',
    to: '/students',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Staff',
    to: '/staff',
    icon: <CIcon icon={cibOpsgenie} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Classes',
    to: '/classes',
    icon: <CIcon icon={cibSlideshare} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Creche',
        to: '/classes/creche',
      },
      {
        component: CNavItem,
        name: 'Nursery 1',
        to: '/classes/nursery-one',
      },
      {
        component: CNavItem,
        name: 'Nursery 2',
        to: '/classes/nursery-two',
      },
      {
        component: CNavItem,
        name: 'Kindergarten',
        to: '/classes/kg',
      },
      {
        component: CNavItem,
        name: 'Class 1',
        to: '/classes/class-one',
      },
      {
        component: CNavItem,
        name: 'Class 2',
        to: '/classes/class-two',
      },
      {
        component: CNavItem,
        name: 'Class 3',
        to: '/classes/class-three',
      },
      {
        component: CNavItem,
        name: 'Class 4',
        to: '/classes/class-four',
      },
      {
        component: CNavItem,
        name: 'Class 5',
        to: '/classes/class-five',
      },
      {
        component: CNavItem,
        name: 'Class 6',
        to: '/classes/class-six',
      },
      {
        component: CNavItem,
        name: 'JHS 1',
        to: '/classes/form-one',
      },
      {
        component: CNavItem,
        name: 'JHS 2',
        to: '/classes/form-two',
      },
      {
        component: CNavItem,
        name: 'JHS 3',
        to: '/classes/form-three',
      },
    ],
  },
]

export default _nav
