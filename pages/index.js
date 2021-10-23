import Layout from '../layout/Layout'
import Hero from '../components/index/Hero'
import Feature1 from '../components/index/Feature1'

const Home = () => {
  return (
    <Layout>
      {/* hero section */}
      <Hero />

      {/* feature_1 */}
      <Feature1 />
    </Layout>
  )
}

export default Home
