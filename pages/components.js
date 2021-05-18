import Layout from "../components/Layout";
import Crud from "../components/Crud";
import GalleryComponent from "../components/Gallery";
import Chart from "../components/Chart";
import Table from "../components/Table";
import Camera from "../components/Camera";
import Image from "../components/Image";
import {useState} from "react";


const MiniApps = () => {

    const [img, setImg] = useState();

    const setImage = (imageSrc) => {
        setImg(imageSrc)
    }
    return (
        <Layout title="React Components" navBar footer={false}>
            <div className="row pl-1 pr-1">
                <div className="col-lg-6">
                    <Crud/>
                </div>
                <div className="col-lg-6">
                    <Chart/>
                </div>
                <div className="col-lg-6">
                    <Camera setImage={setImage}/>
                </div>
                {img &&
                <div className="col-lg-6">
                    <Image imgSrc={img} />
                </div>}
                <div className="col-lg-12">
                    <Table/>
                </div>
                <div className="col-lg-12">
                    <GalleryComponent/>
                </div>
            </div>
        </Layout>)

}


export default MiniApps;