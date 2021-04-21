import Layout from "../components/Layout";
import Link from "next/link";
import {experiences, projects, skills} from "../profile";


const Experience=()=>(
    <Layout>


        {/* Second section */}

        <section className="row">
            <div className="col-md-12 py-2">
                {/* Experience */}
                <div className="card bg-light animate__animated animate__fadeInRight">
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

    </Layout>


)


export default Experience