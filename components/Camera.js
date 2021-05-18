import React, {useEffect} from 'react';
import Webcam from "react-webcam";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCameraRetro, faCamera} from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";
import {photos} from "../photos";


export default function Camera(props) {
    const [activateCamera, setActivateCamera] = React.useState(false);
    const [txtCamera, setTxtCamera] = React.useState('Activate');
    const [colorCamera, setColorCamera] = React.useState('success');

    const videoConstraints = {
        width: 250,
        height: 250,
        facingMode: "user"
    };

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
    }, [webcamRef]);

    const setImage =(imageSrc)=>{
        props.setImage(imageSrc)
    }

    const viewCamera = () => {
        setActivateCamera(!activateCamera)
    }

    useEffect(() => {
        setTxtCamera(activateCamera ? 'Disable' : 'Activate')
        setColorCamera(activateCamera ? 'warning' : 'success')
        if(!activateCamera){
            setImage(null);
        }
    }, [activateCamera])


    return (
        <div className="card border-secondary mb-2 animate__animated animate__fadeInRight animate__slower"
             style={{minHeight: 550}}>

            <div className="card-header text-white">Take a Picture</div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-12">
                        <button type="button" onClick={() => viewCamera()}
                                className={`btn btn-${colorCamera} btn-sm mr-md-1 mb-2`} data-tip data-for="activate">
                            <FontAwesomeIcon icon={faCameraRetro}/>
                            <ReactTooltip id="activate" place="bottom" effect="solid">
                                {txtCamera} Camera
                            </ReactTooltip>


                        </button>
                    </div>
                    {activateCamera &&
                    <>
                        <div className="col-md-12 text-center">
                            <Webcam
                                audio={false}
                                height={250}
                                ref={webcamRef}
                                screenshotFormat="image/jpeg"
                                width={250}
                                videoConstraints={videoConstraints}
                            />
                        </div>
                        <div className="col-md-12 text-center">


                            <button type="button" onClick={() => capture()}
                                    className={`btn btn-success btn-sm`} data-tip data-for="take">
                                <FontAwesomeIcon icon={faCamera}/>
                                <ReactTooltip id="take" place="bottom" effect="solid">
                                    Take a Picture
                                </ReactTooltip>


                            </button>
                        </div>
                    </>
                    }
                </div>
            </div>
        </div>
    );
}