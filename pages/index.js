import Layout from "../components/Layout";
import tawkTo from "tawkto-react";
import { GoogleOAuthProvider,GoogleLogin  } from '@react-oauth/google';


import {skills, experiences, projects, videos} from "../profile";
import Link from "next/link";
import {useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faReact} from "@fortawesome/free-brands-svg-icons";
import { faFile } from '@fortawesome/free-solid-svg-icons'

const Index = () => {
    const tawkToPropertyId = '5a7de2d0d7591465c707884b'

// Direct Chat Link
// https://tawk.to/chat/tawkToPropertyId/tawkToKey

    const tawkToKey = 'default'

    useEffect(() => {
        tawkTo(tawkToPropertyId, tawkToKey)
    }, [])

    return (
        <GoogleOAuthProvider clientId="423385529275-7bs33dti0mms2384u9f64bobekko43aa.apps.googleusercontent.com">
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        <Layout>
            {/* Header Card */}
            <header className="row">
                <div className="col-md-12 animate__animated animate__fadeInDown animate__slower  text-center py-2">
                    <img src="/logo.png" alt="" className="img-fluid" style={{maxWidth: '10%'}}/>
                </div>
                <div
                    className="col-md-12 animate__animated animate__slideInUp animate__slower text-center text-white">
                    <h2>Full Stack Developer</h2>
                </div>
            </header>

            {/* Second section */}

            <section className="row pl-2" style={{backgroundColor: 'white'}}>

                <div className="col-md-12 py-2 animate__animated animate__fadeInLeft animate__slower ">
                    <h3>Experience</h3>
                    <ul>
                        <li>
                            Design and development of APIs for web services and
                            websocket services.
                            Design, development and implementation of RESTful web
                            services. back-end design and development for real-time
                            applications (websockets).
                        </li>
                        <li>
                            Design and development of progressive web
                            applications,realtime web applications, SSG.
                            Usability and accessibility design, adaptive web design, responsive web
                            design. unobstrusive front-end
                            programming, XHTML serialization, style sheets, scripting. back- end
                            programming. Static site generators
                            (SSG). Design and development of relational database schemes. Open
                            standards and technologies oriented.
                        </li>
                        <li>
                            Design, administration and maintenance of web
                            platforms.
                            Web server installation, configuration and tuning. Domain Name registration
                            and configuration. DNS Administration. Monitoring tools installation and
                            configuration. Analysis and statistics tools installation and configuration.
                        </li>
                        <li>
                            Management and administration of distributed projects,
                            version control
                            Version control systems, branching models design, VCS services.
                        </li>
                    </ul>

                    <a href="https://drive.google.com/file/d/1oPG7KEIJ2LIoXqK_GOJWgOQd_vJuAmRV/view?usp=share_link" target="_blank" className="mr-md-2">
                        <button type="button" className="btn btn-outline-info">
                            <FontAwesomeIcon icon={faFile}/> Resume
                        </button>
                    </a>


                    {/*<ul>
                            {experiences.map(({title, from, to, description}, index) => (
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
                        </ul>*/}
                </div>
                <div className="col-md-12 py-2 text-center">
                    <h3 className="text-left">Skills</h3>
                        <img src="/java.png" alt="" className="img-fluid animate__animated animate__backInRight animate__slower" style={{maxWidth: '5%'}}/>
                        <img src="/php.png" alt="" className="img-fluid animate__animated animate__backInRight animate__slower" style={{maxWidth: '5%'}}/>
                        <img src="/javascript.png" alt="" className="img-fluid animate__animated animate__backInRight animate__slower" style={{maxWidth: '5%'}}/>
                        <img src="/node.png" alt="" className="img-fluid animate__animated animate__backInRight animate__slower" style={{maxWidth: '5%'}}/>
                        <img src="/react.png" alt="" className="img-fluid animate__animated animate__backInRight animate__slower" style={{maxWidth: '5%'}}/>
                        <img src="/sql.png" alt="" className="img-fluid animate__animated animate__backInRight animate__slower" style={{maxWidth: '5%'}}/>
                        <img src="/pl.png" alt="" className="img-fluid animate__animated animate__backInRight animate__slower" style={{maxWidth: '5%'}}/>
                        <img src="/html.png" alt="" className="img-fluid animate__animated animate__backInRight animate__slower" style={{maxWidth: '5%'}}/>
                        <img src="/css.png" alt="" className="img-fluid animate__animated animate__backInLeft animate__slower" style={{maxWidth: '5%'}}/>
                        <img src="/jquery.png" alt="" className="img-fluid animate__animated animate__backInLeft animate__slower" style={{maxWidth: '5%'}}/>
                        <img src="/bootstrap.png" alt="" className="img-fluid animate__animated animate__backInLeft animate__slower" style={{maxWidth: '5%'}}/>
                        <img src="/oracle.png" alt="" className="img-fluid animate__animated animate__backInLeft animate__slower" style={{maxWidth: '5%'}}/>
                        <img src="/mongo.png" alt="" className="img-fluid animate__animated animate__backInLeft animate__slower" style={{maxWidth: '5%'}}/>
                        <img src="/mysql.png" alt="" className="img-fluid animate__animated animate__backInLeft animate__slower" style={{maxWidth: '5%'}}/>
                        <img src="/maria.png" alt="" className="img-fluid animate__animated animate__backInLeft animate__slower" style={{maxWidth: '5%'}}/>
                        <img src="/git.png" alt="" className="img-fluid animate__animated animate__backInLeft animate__slower" style={{maxWidth: '5%'}}/>
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
                                    <Link href="/components">
                                        <button type="button" className="btn btn-outline-info">
                                            <FontAwesomeIcon icon={faReact}/> React Components <FontAwesomeIcon
                                            icon={faReact}/>
                                        </button>
                                    </Link>
                                </div>
                                {projects.map(({name, url, image}, index) => (
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
        </GoogleOAuthProvider>)
};

export default Index;
