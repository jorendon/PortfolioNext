import Layout from "../components/Layout";
import Videos from "../components/Videos";

import { skills, experiences, projects,videos } from "../profile";
import Link from "next/link";

const Index = () => (
  <Layout>
    {/* Header Card */}
    <header className="row">
            <div className="col-md-12 animate__animated animate__fadeInDown animate__slower  text-center py-2">
              <img src="/logo.png" alt="" className="img-fluid" style={{maxWidth: '25%'}} />
            </div>
            <div className="col-md-12 animate__animated animate__slideInUp animate__slower text-center text-white">
              <h1>Full Stack Developer</h1>
            </div>
    </header>

    {/* Second section */}

    <section className="row pl-2" style={{backgroundColor:'white'}}>

      <div className="col-md-6 py-2 animate__animated animate__fadeInLeft animate__slower ">
            <h3>Experience</h3>

            <ul>
              {/* List Item Experience */}
              {experiences.map(({ title, from, to,description }, index) => (
                <li key={index}>
                  <h4>{title}</h4>
                  <h5>
                    {from} {to ? `- ${to}` : "- current"}
                  </h5>
                  <p>
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        <div className="col-md-6 py-2 animate__animated animate__fadeInRight animate__slower " >
            <h3>Skills</h3>
            <div className="col-md-8">
            {skills.map(({ skill, percentage }, i) => (
                <div className="py-1" key={i}>
                    <h7>{skill}</h7>
                    <div className="progress">
                        <div
                            className="progress-bar  bg-info"
                            role="progressbar"
                            style={{ width: `${percentage}%` }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </section>
    {/* Porfolio */}
    <section>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12 my-2 text-center">
                <h3 className="text-center text-light">Portfolio</h3>
                  <Link href="/miniapps">
                  <button type="button" className="btn btn-outline-info">Mini Apps</button>
                  </Link>
              </div>
              {projects.map(({ name, url, image }, index) => (
                <div className="col-md-4 p-2" key={index}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img
                        src={`/${image}`}
                        alt=""
                        className="card-img-top"
                      />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <a href={`${url}`} target="_blank">Know More</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12 my-2">
                <h3 className="text-center text-light">Media</h3>
              </div>
              {videos.map(({ id, url }, index) => (
                  <div className="col-md-4 p-2" key={index}>
                    <div className="card h-100">
                      <div className="card-body">
                        <Videos id={id}/>
                        <a href="" target="_blank">Know More</a>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout>
);

export default Index;
