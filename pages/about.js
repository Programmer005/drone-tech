import styles from "../styles/Home.module.css"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Divider from "./components/Divider"
import Image from "next/image"
import Head from "next/head"

export default function about() {
  return (
    <>
      <Head>
        <title>Home | Drone InfoHub</title>
      </Head>
      <Navbar />

      <section className={styles.sect_two}>
        <div className={`${styles.left_part} ${styles.half_part}`}>
          <h1 className="heading">Why drones?</h1>
          <article>
            <p>
              Drones are one of the largest emerging technologies of the future.
              It has countless uses. <br />
            </p>
            <p>
              Drone take amazing photos and videos, creating a whole new field
              of interest known as
              <span className="emphasis"> Aerial photography</span>. Drones can
              also be used for security and proper law and order
            </p>
          </article>
        </div>
        <div className={`${styles.right_part} ${styles.half_part}`}>
          <Image
            src="/assets/drone-shot-sample.jpg"
            height={310}
            width={530}
            alt="Aerial shot"
          />
          <span className="emphasis">Aerial shot</span>
        </div>
      </section>
      <section className={`h-100 ${styles.third_sect}`}>
        <div className={styles.right_part}>
          <Image
            src="/assets/drones-disast-one.png"
            height={290}
            width={425}
            alt="Drones in disaster managment"
          />
          <span className="emphasis sub">Drone delivering first aid</span>
        </div>
        <div className={styles.left_part}>
          <h1 className={`heading ${styles.third_heading}`}>
            Helping Save Lives
          </h1>
          <article>
            <p>
              During natural disaster, delivering food, water and essentials is
              necessary. Drones can deliver efficiently.
            </p>
            <p>
              Requiring only a small amount of human input, drones can be used
              to help people during disasters. Not only by delivering their
              essentials, but also finding them.
            </p>
            <p>
              Infrared imaging can be used in the cameras, so that drones can
              detect heat being sent off by living beings, regardless of the
              lighting conditions. This can be really helpful during disasters
              like earthquakes.
            </p>
          </article>
        </div>
      </section>
      <Divider />
      <section className={styles.fourth_sect}>
        <div className={styles.fourth_head}>
          <h1 className={`heading ${styles.fourth_heading}`}>Agriculture</h1>
          <article>
            <p>
              As the population increases, so does the need for food. There are
              shortages of labour in agriculture
            </p>
            <p>
              Drones can help in agriculture. They can be used for several
              reasons They can be used for irrigation, and also sprinking
              fertlizers, and pesticides
            </p>
          </article>
        </div>
        <Image
          src="/assets/drones-agro.png"
          height={250}
          width={500}
          alt="Drones helping in agriculture"
        />
      </section>
      <Divider />
      <Footer />
    </>
  )
}
