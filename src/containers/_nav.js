import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'YOUR ACCOUNT',
    to: '',
   
    
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['DASHBOARD']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Your Dashboard',
    to: '/dashboard',
    icon: 'cil-check',
  },
 
  {
    _tag: 'CSidebarNavTitle',
    _children: ['ACCOUNT']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Manage your Account',
    route: '/base',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Your Travel Bookings',
        to: '/base/breadcrumbs',
      },

      {
        _tag: 'CSidebarNavItem',
        name: 'View Account Activity',
        to: '/base/forms',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'View Account Information',
        to: '/base/jumbotrons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Change Password',
        to: '/base/navs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Leaving',
        to: '/base/navbars',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Manage Subscriptions',
        to: '/base/paginations',
      },
      
      {
        _tag: 'CSidebarNavItem',
        name: 'BookingsData',
        to: '/base/tables',
      },
     
    ],
  },
 
 
 
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Notifications',
    route: '/notifications',
    icon: 'cil-bell',
    to: '/notifications/alerts',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Alerts',
        to: '/notifications/alerts',
      },
    ]
  },
 
  {
    _tag: 'CSidebarNavDivider'
  },
 
 
 
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
 
 

 
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
