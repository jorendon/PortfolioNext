import Layout from "../components/Layout";
import Crud from "../components/Crud";

const MiniApps = () => {
    return (<Layout title="Mini Apps" navBar footer={false}>
        <div className="col-md-6">
            <Crud/>
        </div>
    </Layout>)

}


export default MiniApps;