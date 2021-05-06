import Layout from "../components/Layout";
import Videos from "../components/Videos";
import MiniApps from "./miniapps";

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
                <img src="/java.png" alt="" className="img-fluid" style={{maxWidth: '25%'}} />
                <img src="/php.png" alt="" className="img-fluid" style={{maxWidth: '25%'}} />
                <img src="/javascript.png" alt="" className="img-fluid" style={{maxWidth: '25%'}} />
                <img src="/node.png" alt="" className="img-fluid" style={{maxWidth: '25%'}} />
                <img src="/react.png" alt="" className="img-fluid" style={{maxWidth: '25%'}} />
                <img src="/sql.png" alt="" className="img-fluid" style={{maxWidth: '25%'}} />
                <img src="/pl.png" alt="" className="img-fluid" style={{maxWidth: '25%'}} />
                <img src="/html.png" alt="" className="img-fluid" style={{maxWidth: '25%'}} />
                <img src="/css.png" alt="" className="img-fluid" style={{maxWidth: '25%'}} />
                <img src="/jquery.png" alt="" className="img-fluid" style={{maxWidth: '25%'}} />
                <img src="/bootstrap.png" alt="" className="img-fluid" style={{maxWidth: '25%'}} />
                <img src="/oracle.png" alt="" className="img-fluid" style={{maxWidth: '25%'}} />
                <img src="/mongo.png" alt="" className="img-fluid" style={{maxWidth: '25%'}} />
                <img src="/mysql.png" alt="" className="img-fluid" style={{maxWidth: '25%'}} />
                <img src="/maria.png" alt="" className="img-fluid" style={{maxWidth: '25%'}} />
                <img src="/git.png" alt="" className="img-fluid" style={{maxWidth: '25%'}} />
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
                <h3 className="text-center text-light">WebSites</h3>
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
  </Layout>
);

export default Index;
