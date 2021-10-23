import Image from 'next/image'

const Hero = () => {
    return (
        <div className='container col-xxl-8 px-4 py-5'>
        <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
          <div className='col-10 col-sm-8 col-lg-6'>
            <Image
              src='/logo/cmi-nobg.png'
              className='d-block mx-lg-auto img-fluid'
              alt='Coast matatu industry logo'
              width='700'
              height='500'
              loading='lazy'
            />
          </div>
          <div className='col-lg-6'>
            <h1 className='display-5 fw-bold lh-1 mb-3 text-capitalize'>
              coast matatu industry
            </h1>
            <p className='lead'>
              Coast Matatu Industry is a community of businesses and
              entrepreneurs in the matatu industry within the Kenyan Coastal
              region. We offer all services from advice into the industry to
              pimping your ride!
            </p>
            <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
              <button
                type='button'
                className='btn btn-primary btn-lg px-4 me-md-2'
              >
                Matatu Industry
              </button>
              <button
                type='button'
                className='btn btn-outline-secondary btn-lg px-4'
              >
                Talk to us
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Hero
