import Layout from "../components/Layout";
import Link from "next/link";

import { skills, experiences, projects } from "../profile";

const Index = () => (
  <Layout>
    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-md-4">
              <img src="/logo.png" alt="" className="img-fluid" style={{maxWidth: '60%'}} />
            </div>
            <div className="col-md-8 col align-self-center">
              <h1>Full Stack Developer</h1>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Second section */}

    <section className="row">
      <div className="col-md-4 py-2" >
        <div className="card bg-light animate__animated animate__fadeInLeft" style={{minHeight: 550}} >
          <div className="card-body">
            <h3>Skills</h3>

            {/* Skill Progress  */}
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-1" key={i}>
                <h7>{skill}</h7>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-info"
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
      </div>

      <div className="col-md-8 py-2">
        {/* Experience */}
        <div className="card bg-light animate__animated animate__fadeInRight" style={{minHeight: 550}}>
          <div className="card-body">
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
        </div>
      </div>
    </section>
    {/* Porfolio */}
    <section>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12 my-2">
                <h3 className="text-center text-light">Portfolio</h3>
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
  </Layout>
);

export default Index;
