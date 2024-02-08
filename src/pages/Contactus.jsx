import React from 'react'
import img from '../images/banner7.jpg'
import img2 from '../images/banner2.jpg'
import FadeUp from '../components/FadeUp'

function Contactus() {

    return (
        <div className=''>

            <div div className="banner bg-cover bg-center h-96"
                style={{ backgroundImage: `url(${img})` }}
            >
            </div >

            {/* contact */}
            <div className="about shadow-2xl relative z-50 w-full md:w-11/12 mx-auto space-x-3 items-center md:-mt-32   bg-white px-6 sm:px-20 py-7 flex flex-col md:flex-col ">
                <div className="about flex flex-col sm:flex-row items-center">

                    <div className=' md:w-2/4 py-4 md:py-16 text-center md:text-left capitalize font-bold text-3xl md:text-4xl  text-[#0083e8]'>Contact us </div>
                    <div className=' md:w-3/4 text-center md:text-left text-[#0083e8] md:text-3xl xl:text-xl md:px-4 leading-relaxed md:leading-loose md:border-l-2 '>Reach Out to Discover How MetaDatAnSol Can Elevate Your Business
                    </div>

                </div>
            </div>

            {/* Fixed BG */}
            <div style={{
                backgroundImage: `linear-gradient(to bottom, rgb(11 126 215 / 70%), rgb(1 73 128 / 96%)), url(${img2})`,
                backgroundPosition: "center",
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat'
            }} className="banner2 px-5 sm:px-16 md:px-20 -mt-32 bg-scroll pt-44 sm:pt-56 pb-10 sm:pb-36 text-sm text-center sm:text-xl xl:text-2xl leading-loose text-gray-100">

                <>
                    At MetaDatAnSol Solutions, our mission is to empower businesses of all sizes to harness the full potential of their data. We specialize in a wide range of Business Intelligence and custom software solutions, enabling you to make informed decisions and implement data-driven strategies swiftly.
                    Our approach is built on a foundation of deep understanding—understanding your unique business needs and audience. By prioritizing this understanding, we ensure a seamless alignment between your objectives and our solutions. Whether you're a startup, a small or medium-sized business, or a large enterprise, we're here to help you transform data into actionable insights and drive your business forward.
                    Let's collaborate to unlock the power of your data. Get in touch with us today and embark on a data-driven journey towards success
                </>
            </div>


            {/* }
            /> */}
            {/* <FadeUp
                component={
                    <div className="text w-11/12 sm:w-11/12 mx-auto text-sm sm:text-xl xl:text-2xl  mt-10 mb-20 text-center leading-loose">
                        At MetaDatAnSol Solutions, our mission is to empower businesses of all sizes to harness the full potential of their data. We specialize in a wide range of Business Intelligence and custom software solutions, enabling you to make informed decisions and implement data-driven strategies swiftly.
                        Our approach is built on a foundation of deep understanding—understanding your unique business needs and audience. By prioritizing this understanding, we ensure a seamless alignment between your objectives and our solutions. Whether you're a startup, a small or medium-sized business, or a large enterprise, we're here to help you transform data into actionable insights and drive your business forward.
                        Let's collaborate to unlock the power of your data. Get in touch with us today and embark on a data-driven journey towards success

                    </div>
                }
            /> */}

        </div>
    )
}

export default Contactus
