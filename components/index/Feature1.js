const Feature1 = () => {
  return (
    <div className='container px-4 py-5' id='hanging-icons'>
      <h2 className='pb-2 border-bottom'>CMI at Your Service</h2>
      <div className='row g-4 py-5 row-cols-1 row-cols-lg-3'>
        <div className='col d-flex align-items-start'>
          <div className='icon-square bg-light text-dark flex-shrink-0 me-3'>
            <svg className='bi' width='1em' height='1em'>
              <use xlinkHref='#toggles2' />
            </svg>
          </div>
          <div>
            <h2 className='text-capitalize'>pimp your ride</h2>
            <p>
              From rags to the cleanest Matatu ride in town. We revamp and refurbish matatus to our
              market and safety standards to asure you of full traction and game.
            </p>
            <a href='#' className='btn btn-outline-success'>
              Get Service
            </a>
          </div>
        </div>
        <div className='col d-flex align-items-start'>
          <div className='icon-square bg-light text-dark flex-shrink-0 me-3'>
            <svg className='bi' width='1em' height='1em'>
              <use xlinkHref='#cpu-fill' />
            </svg>
          </div>
          <div>
            <h2 className='text-capitalize'>garage services</h2>
            <p>
              get you dents gone, repairs done, paint job for your matatu or car from our state-of-art garage
              services and skills. All spare parts and accessories available at our garage.
            </p>
            <a href='#' className='btn btn-outline-success'>
              Get Service
            </a>
          </div>
        </div>
        <div className='col d-flex align-items-start'>
          <div className='icon-square bg-light text-dark flex-shrink-0 me-3'>
            <svg className='bi' width='1em' height='1em'>
              <use xlinkHref='#tools' />
            </svg>
          </div>
          <div>
            <h2 className='text-capitalize'>trips and tours</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              Will add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href='#' className='btn btn-outline-success'>
              Get Service
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature1
