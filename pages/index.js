import Layout from '../layout/Layout'
import Hero from '../components/index/Hero'
import Feature1 from '../components/index/Feature1'
import MatatuTopics from '../components/index/MatatuTopics'

const Home = () => {
  return (
    <Layout>
      {/* hero section */}
      <Hero />

      {/* matatu_pics_4 */}
      <MatatuTopics />

      {/* feature_1 */}
      <Feature1 />
    </Layout>
  )
}

export default Home
