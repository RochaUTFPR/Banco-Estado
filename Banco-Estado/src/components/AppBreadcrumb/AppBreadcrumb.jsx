import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const AppBreadcrumbs = () => {

  const location = useLocation()
  ///contact/mail
  let crumbLink = ''
  const crumbPath = location.pathname.split('/')
    .filter((path) => path !== '')
    .map((crumb) => {
      crumbLink += `/${crumb}`
      return <Link to={crumbLink} key={crumb}>
        {crumb}
      </Link>
    })
  console.log(crumbPath)
  return (
    <Breadcrumb>
      {crumbPath}
    </Breadcrumb>
  )
}

export default AppBreadcrumbs