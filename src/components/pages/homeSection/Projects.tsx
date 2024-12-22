import styles from "./Projects.module.scss";
import Image from "next/image";
import project1 from "../../../../public/assets/Project1.png";
import project2 from "../../../../public/assets/Project2.png";
import project3 from "../../../../public/assets/Project3.png";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <section className={styles.Mains}>
      <div className="container_for_content">
        <div className={styles.projectCard}>
          <div className={styles.projectImage}>
            <Link href="https://fake-store-blush-nu.vercel.app/">
              <Image
                src={project1}
                alt="Project Image"
                width={500}
                height={300}
                layout="responsive"
              />
            </Link>
          </div>
          <div className={styles.projectDetails}>
            <h2 className={styles.projectName}>A SHOP</h2>
            <p className={styles.projectDescription}>
              A SHOP – An online store built with TypeScript, Next.js, RTK
              Query, Supabase, and Prisma. Here, you can find everything you
              need, from everyday essentials to the latest gadgets. Enjoy a
              seamless shopping experience, great deals, and fast, reliable
              service—all powered by modern, efficient technologies.
            </p>
            <div className={styles.projectTech}>
              <span>TypeScript</span>
              <span>NextJS</span>
              <span>RTK-query</span>
              <span>SCSS</span>
              <span>HTML5</span>
              <span>PostgreSQL</span>
              <span>Supabase</span>
              <span>Prisma</span>
            </div>
          </div>
        </div>

        <div className={styles.projectCard2}>
          <div className={styles.projectImage}>
            <Link href="https://iant-studio.vercel.app/">
              <Image
                src={project2}
                alt="Project Image"
                width={500}
                height={300}
                layout="responsive"
              />
            </Link>
          </div>
          <div className={styles.projectDetails}>
            <h2 className={styles.projectName}>IANT STUDIO</h2>
            <p className={styles.projectDescription}>
              IANT STUDIO – A portfolio website for an IT company showcasing its
              expertise in creating innovative and high-quality digital
              solutions. With a focus on modern technologies and design, IANT
              STUDIO highlights the company's successful projects, services, and
              commitment to delivering exceptional results for clients.
            </p>
            <div className={styles.projectTech}>
              <span>TypeScript</span>
              <span>NextJS</span>
              <span>HTML5</span>
              <span>SCSS</span>
              <span>AOS</span>
              <span>Tailwind CSS</span>
            </div>
          </div>
        </div>

        <div className={styles.projectCard}>
          <div className={styles.projectImage}>
            <Link href="https://fake-store-blush-nu.vercel.app/">
              <Image
                src={project3}
                alt="Project Image"
                width={500}
                height={300}
                layout="responsive"
              />
            </Link>
          </div>
          <div className={styles.projectDetails}>
            <h2 className={styles.projectName}>STRONG PASS</h2>
            <p className={styles.projectDescription}>
              STRONGPASS – A website for checking and improving password
              strength, helping users create secure passwords with real-time
              assessments.
            </p>
            <div className={styles.projectTech}>
              <span>TypeScript</span>
              <span>NextJS</span>
              <span>HTML5</span>
              <span>SCSS</span>
              <span>Tailwind CSS</span>
              <span>Ant design</span>
            </div>
          </div>
        </div>

        {/* <div className={styles.projectCard2}>
          <div className={styles.projectImage}>
          <Link href="https://fake-store-blush-nu.vercel.app/">
              <Image
                src={project1}
                alt="Project Image"
                width={500}
                height={300}
                layout="responsive"
              />
            </Link>
          </div>
          <div className={styles.projectDetails}>
            <h2 className={styles.projectName}>Elcho Crud</h2>
            <p className={styles.projectDescription}>
              The ElchoCrud project was created specifically for those people
              who are just starting to immerse themselves in the IT world,
              especially in Frontend and Mobile Development. This project is a
              full-fledged backend with flexible capabilities for creating
              tables and a complete database. Users can create their own
              endpoints and data tables.
            </p>
            <div className={styles.projectTech}>
              <span>NextJS</span>
              <span>Redux-Toolkit</span>
              <span>SCSS</span>
              <span>Express</span>
              <span>PostgreSQL</span>
              <span>Supabase</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
