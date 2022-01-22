import React, { useState } from 'react'
import { Link } from 'remix'

const TopNav = () => {
  const [open, setOpen] = useState(false)
  const [showOrHideText, setShowOrHideText] = useState('show')

  const handleOnClick = () => {
    setOpen(!open)
    setShowOrHideText(open ? 'show' : 'hide')
  }

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setOpen(!open)
      setShowOrHideText(open ? 'show' : 'hide')
    }
  }

  return (
    <>
      <div
        role='button'
        aria-pressed={open}
        aria-haspopup='dialog'
        tabIndex={0}
        className={`hamburgerMenu-nav-${showOrHideText}`}
        onClick={handleOnClick}
        onKeyDown={handleOnKeyDown}
      >
        <svg
          role='img'
          aria-labelledby='title  desc'
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <title id='title'>Hamburger Menu</title>
          <desc id='desc'>
            Three lines stacked on top of each other with space between each
          </desc>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      {open ? (
        <div id='myModal' className='modal'>
          <div className='modal-content'>
            <button
              onClick={handleOnClick}
              className='close modal-button-close'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
            <ul className='hamburgerMenu-list-container'>
              <li className='hamburgerMenu-list-item'>
                <Link
                  onClick={handleOnClick}
                  className='hamburgerMenu-list-item-text'
                  to={'/'}
                >
                  {'Home'}
                </Link>
              </li>
              <li className='hamburgerMenu-list-item'>
                <Link
                  onClick={handleOnClick}
                  className='hamburgerMenu-list-item-text'
                  to={'about'}
                >
                  {'About'}
                </Link>
              </li>
              <li className='hamburgerMenu-list-item'>
                <Link
                  onClick={handleOnClick}
                  className='hamburgerMenu-list-item-text'
                  to={'skills'}
                >
                  {'Skills'}
                </Link>
              </li>
              <li className='hamburgerMenu-list-item'>
                <Link
                  onClick={handleOnClick}
                  className='hamburgerMenu-list-item-text'
                  to={'blogs'}
                >
                  {'Blogs'}
                </Link>
              </li>
              <li className='hamburgerMenu-list-item'>
                <Link
                  onClick={handleOnClick}
                  className='hamburgerMenu-list-item-text'
                  to={'contact'}
                >
                  {'Contact'}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ''
      )}
      <nav className='header-nav-hide' data-primary-nav>
        <ul data-primary-list>
          <li data-primary-list-item>
            <Link data-primary-nav-text to={'/'}>
              {'Home'}
            </Link>
          </li>
          <li data-primary-list-item>
            <Link data-primary-nav-text to={'about'}>
              {'About'}
            </Link>
          </li>
          <li data-primary-list-item>
            <Link data-primary-nav-text to={'skills'}>
              {'Skills'}
            </Link>
          </li>
          <li data-primary-list-item>
            <Link data-primary-nav-text to={'blogs'}>
              {'Blogs'}
            </Link>
          </li>
          <li data-primary-list-item>
            <Link data-primary-nav-text to={'contact'}>
              {'Contact'}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default TopNav
