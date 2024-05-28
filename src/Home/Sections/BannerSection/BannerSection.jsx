    import watchIcon from "../../../assets/watch_icon.png"
import BannerCard from '../../../Components/BannerCard'
import vector from '../../../assets/vector.png'

const BannerSection = () => {
    return (
        <>
            <div className="main_banner" id='main_banner'>
                <div className="main_banner_div">
                    <div className="banner_left">
                        <div className="banner_left_text">
                            <h1>Turn your home  <span className='vector_img'><img src={vector} alt=""className="vector_icon" /> <span className="ani_text"></span>  </span> <br />design with  one click through <br /> Banigi <span>AI</span> technology</h1>
                            <p>Transform your home effortlessly with AI at Banigi AI. Elevate interiors, exteriors, and landscapes seamlessly. Personalized creativity meets efficient custom design. Redefine your space.</p>
                            <div className="banner_left_btn">
                                <button className='tryBtn'>Try Bagini AI Free</button>
                                <button className='watchBtn'><img src={watchIcon} alt="Watch" /> How it work?</button>
                            </div>
                        </div>

                    </div>
                    {/* <div className="banner_right">
                        <div className="banner_right_div">
                            <BannerCard heading="Interior" text="Redesign interior like living rooms, bedroom, kitchen and more" />
                            <BannerCard  heading="Exterior" text="Redesign exterior like house fronts, patio, pools and gardens." style={{backgroundColor:'#C79952'}}/>
                            <BannerCard heading="Landscape" text="Redesign landscape like lawns, pathway and natural features." />
                            <BannerCard heading="Custom" text="Redesign custom like lawns , pathway and natural features." />
                        </div>



                    </div> */}
                </div>

            </div>
        </>
    )
}

export default BannerSection
