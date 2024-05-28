import React from 'react'
import downloadImg from "../../../assets/downloadApp.png"
import appStore from "../../../assets/appStore.png"
import playStore from "../../../assets/playStore.png"



const DownloadApp = () => {
    return (
        <>

            <div className="downloadAppDiv">

                <div className="downloadAppInfo">
                    <div className="downloadAppText">
                        <h2>
                            Let’s download from app and play store to use it free
                        </h2>
                        <p>Let’s download from app and play store to use it free</p>
                        <div className="downloadBtn">
                            <img src={appStore} alt="" />
                            <img src={playStore} alt="" />
                        </div>
                    </div>

                    <div className="DownloadAppImg">
                        <div className="mobileImgDiv">
                        <img src={downloadImg} alt="" />
                        </div>
                       
                    </div>
                </div>



            </div>

        </>
    )
}

export default DownloadApp
