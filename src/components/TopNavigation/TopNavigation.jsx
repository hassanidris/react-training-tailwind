import React from 'react'
import HashtagIcon from './HashtagIcon'
import Title from './Title'
import ThemeIcon from './ThemeIcon'
import Search from './Search'
import BellIcon from './BellIcon'
import UserCircle from './UserCircle'

const TopNavigation = () => {
  return (
    <div className='top-navigation'>
        <HashtagIcon />
        <Title />
        <ThemeIcon />
        <Search />
        <BellIcon />
        <UserCircle />
    </div>
  )
}

export default TopNavigation