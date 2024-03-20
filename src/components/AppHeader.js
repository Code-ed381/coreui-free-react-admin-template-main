/* eslint-disable */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CBadge,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilTask, cilMenu } from '@coreui/icons'
import Typography from '@mui/material/Typography';

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'


const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#/users">Users</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#/settings">Settings</CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CDropdown variant="nav-item" >
              <CDropdownToggle placement="bottom-end" className="" caret={false}>
                <CIcon icon={cilBell} size="xl" />
                <CBadge color="danger" position="top-end" shape="rounded-pill" className="mt-2">
                    1
                </CBadge>
              </CDropdownToggle>
              <CDropdownMenu className="pt-0" placement="bottom-end"  style={{maxWidth: 400}}>
                <CDropdownHeader className="bg-light fw-semibold py-2">Notifications</CDropdownHeader>
                <CDropdownItem>
                  <Typography noWrap='true'>
                    Hello this is a test of how Messages
                    will be displayed..Hello this is a test of how Messages
                    will be displayed..
                  </Typography>
                </CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#/updates" className="text-center">
                  View all
                </CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CNavItem>
          <CNavItem>
            <CDropdown variant="nav-item" className="mx-3">
              <CDropdownToggle placement="bottom-end" className="" caret={false}>
                <CIcon icon={cilTask} size="xl" />
                  <CBadge color="danger" position="top-end" shape="rounded-pill" className="mt-2">
                    1
                  </CBadge>
              </CDropdownToggle>
              <CDropdownMenu className="pt-0" placement="bottom-end"  style={{maxWidth: 400}}>
                <CDropdownHeader className="bg-light fw-semibold py-2">Tasks</CDropdownHeader>
                <CDropdownItem>
                  <Typography noWrap='true'>
                    Hello this is a test of how Messages
                    will be displayed..Hello this is a test of how Messages
                    will be displayed..
                  </Typography>
                </CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#/tasks" className="text-center">
                  View all
                </CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CNavItem>
          <CNavItem>
            <CDropdown variant="nav-item">
              <CDropdownToggle placement="bottom-end" className="" caret={false}>
                <CIcon icon={cilEnvelopeOpen} size="xl" />
                <CBadge color="danger" position="top-end" shape="rounded-pill" className="mt-2">
                  1
                </CBadge>
              </CDropdownToggle>
              <CDropdownMenu className="pt-0" placement="bottom-end" style={{maxWidth: 400}}>
                <CDropdownHeader className="bg-light fw-semibold py-2">Messages</CDropdownHeader>
                <CDropdownItem>
                  <Typography noWrap='true'>
                    Hello this is a test of how Messages
                    will be displayed..Hello this is a test of how Messages
                    will be displayed..
                  </Typography>
                </CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#/messages" className="text-center">
                  View all
                </CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
