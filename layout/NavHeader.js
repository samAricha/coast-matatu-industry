import Link from 'next/link'
import Image from 'next/image'

const NavHeader = () => {
  return (
    <div className='container'>
      <header
        className='
            d-flex
            flex-wrap
            align-items-center
            justify-content-center justify-content-md-between
            py-3
            mb-4
            border-bottom
          '
      >
        <a
          href='#'
          className='
              d-flex
              align-items-center
              col-md-3
              mb-2 mb-md-0
              text-dark text-decoration-none
            '
        >
          <Image
            src='/logo/cmi-nobg.png'
            className='bi me-2'
            width={40}
            height={32}
            alt='Coast Matatu Industry'
          />
        </a>

        <ul className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
          <li>
            <Link href='/'>
              <a className='nav-link px-2 link-secondary'>Home</a>
            </Link>
          </li>
          <li>
          <Link href='/matatu'>
              <a className='nav-link px-2 link-secondary'>Matatu</a>
            </Link>
          </li>
          <li>
          <Link href='/garage'>
              <a className='nav-link px-2 link-secondary'>Garage</a>
            </Link>
          </li>
          <li>
          <Link href='/shop'>
              <a className='nav-link px-2 link-secondary'>Shop</a>
            </Link>
          </li>
          <li>
          <Link href='/about'>
              <a className='nav-link px-2 link-secondary'>About</a>
            </Link>
          </li>
        </ul>

        <div className='col-md-3 text-end'>
          <button type='button' className='btn btn-outline-primary me-2'>
            Contact Us
          </button>
        </div>
      </header>
    </div>
  )
}

export default NavHeader
