import Layout from "../components/Layout";
import Crud from "../components/Crud";
import GalleryComponent  from "../components/Gallery";


const MiniApps = () => {
    return (
        <Layout title="Mini Apps" navBar footer={false}>
        <div className="row pl-1 pr-1">
            <div className="col-lg-6">
            <Crud/>
        </div>
            <div className="col-lg-12">
            <GalleryComponent/>
        </div>
        </div>
    </Layout>)

}


export default MiniApps;