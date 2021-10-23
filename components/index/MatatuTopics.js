import Image from 'next/image'

const MatatuTopics = () => {
  return (
    <div className='container-fluid'>
      <div className='container'>
        <h1 className='fw-light text-white'>Trending Matatus</h1>
      </div>
      <div className='container'>
        <div className='row'>
          {/* <!-- Team Member 1 --> */}
          <div className='col-xl-3 col-md-6 mb-4'>
            <div className='card border-0 shadow'>
              <Image
                src='/logo/cmi.jpg'
                width={500}
                height={350}
                className='card-img-top'
                alt='Matatus in Mombasa'
              />
              <div className='card-body text-center'>
                <h5 className='card-title mb-0'>Culture Ride</h5>
                <div className='card-text text-black-50'>Bamburi Mtambo</div>
              </div>
            </div>
          </div>
          {/* <!-- Team Member 2 --> */}
          <div className='col-xl-3 col-md-6 mb-4'>
            <div className='card border-0 shadow'>
              <Image
                src='/logo/cmi.jpg'
                width={500}
                height={350}
                className='card-img-top'
                alt='Matatus in Mombasa'
              />
              <div className='card-body text-center'>
                <h5 className='card-title mb-0'>Ferrarri</h5>
                <div className='card-text text-black-50'>Bamburi Kisauni</div>
              </div>
            </div>
          </div>
          {/* <!-- Team Member 3 --> */}
          <div className='col-xl-3 col-md-6 mb-4'>
            <div className='card border-0 shadow'>
              <Image
                src='/logo/cmi.jpg'
                width={500}
                height={350}
                className='card-img-top'
                alt='Matatus in Mombasa'
              />
              <div className='card-body text-center'>
                <h5 className='card-title mb-0'>Cash Flow</h5>
                <div className='card-text text-black-50'>Tudor</div>
              </div>
            </div>
          </div>
          {/* <!-- Team Member 4 --> */}
          <div className='col-xl-3 col-md-6 mb-4'>
            <div className='card border-0 shadow'>
              <Image
                src='/logo/cmi.jpg'
                width={500}
                height={350}
                className='card-img-top'
                alt='Matatus in Mombasa'
              />
              <div className='card-body text-center'>
                <h5 className='card-title mb-0'>Goon</h5>
                <div className='card-text text-black-50'>Mtwapa</div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </div>
  )
}

export default MatatuTopics
