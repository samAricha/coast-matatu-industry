import Image from 'next/image'

const Footer = () => {
  return (
    <div className='container'>
      <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
        <div className='col-md-4 d-flex align-items-center'>
          <a
            href=''
            className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'
          >
            <Image
              src='/logo/cmi-nobg.png'
              className='bi'
              width={30}
              height={24}
              alt='Coast Matatu Industry'
            />
          </a>
          <span className='text-muted'>&copy; 2021 Coast Matatu Industry</span>
        </div>

        <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
          <li className='ms-3'>
            <a className='text-muted' href='#'>
              <svg className='bi' width='24' height='24'>
                <use xlinkHref='#twitter' />
              </svg>
            </a>
          </li>
          <li className='ms-3'>
            <a className='text-muted' href='#'>
              <svg className='bi' width='24' height='24'>
                <use xlinkHref='#instagram' />
              </svg>
            </a>
          </li>
          <li className='ms-3'>
            <a className='text-muted' href='#'>
              <svg className='bi' width='24' height='24'>
                <use xlinkHref='#facebook' />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
