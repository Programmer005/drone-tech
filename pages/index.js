import styles from "../styles/Home.module.css"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Divider from "./components/Divider"
import Summary from "./components/Summary"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Drone InfoHub</title>
      </Head>
      <Navbar />
      <section className={`h-100 ${styles.sect_one}`}>
        <div className={styles.wrapper}>
          <div className={styles.sect_header}>
            <h1 className={`heading`}>
              Drones deliver the <span>impossible</span>.
            </h1>
            <h2>
              From glorious shots of entire cities and landscapes. To efficient
              deliveries
            </h2>
            <button>Learn more</button>
          </div>
        </div>
      </section>
      <Divider />
      <section className={`h-100 ${styles.home_sect_two}`}>
        <article>
          <h1 className="heading">What are drones?</h1>
          <p>
            Drones, sometimes referred to as “Unmanned Aerial Vehicles” (UAVs)
            are meant to carry out tasks from simple deliveries to the
            ultra-dangerous and complex.
          </p>

          <p>
            These drones can travel long distances and on various hieghts. This
            gives them flexibility for various jobs
          </p>
          <p>
            For example, They can be used for scientific surveys in a particular
            areas, collecting various topographic data
          </p>
          <p>There are also several types of drones. These are a few:</p>
        </article>
      </section>
      <section className={styles.home_sect_three}>
        <div className={styles.types_drones}>
          <Summary
            title="Single Rotor Drones"
            desc="These drones only have one blade, and can be powered through ways like electricity and gas. Often used for surveys related to climate and topography."
          />
          <Summary
            title="Multi-Rotor Drones"
            desc="These have multiple blades and usually the lightest and smallest, these cover short distances, but useful for hobbyists and aerial photographers."
          />
          <Summary
            title="Fixed Wing Drones"
            desc="These are drones that look like normal aeroplane, they use fuel instead of electricity most of the time, allowing them a huge 16 hours of flight time"
          />
        </div>
      </section>
      <Footer />
    </>
  )
}
