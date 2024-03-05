import React from 'react'
import banner from '../../images/banner5.jpg'
import banner2 from '../../images/bg6.jpg'
import FadeUp from '../../components/FadeUp'

import img2 from  '../../images/banner6.jpg'
import './About.css'
import Reveal from '../../components/Reveal'
import one from '../../images/one.mp4'
import two from '../../images/two.mp4'
import three from '../../images/three.mp4'
import four from '../../images/four.mp4'
import { TbPointFilled } from "react-icons/tb";
import { Link } from 'react-router-dom'

export default function About() {
    const cards = [
        {
            title: 'Business Intelligence',
            bullets: ["Legacy Data and Report Migration", "Enterprise Data Warehouse", "Integration with Existing Systems", "Mobile BI", "Reports, Dashboards, Metrics", "OLAP Cubes"],
            video: one
        },
        {
            title: 'Data Visualization',
            bullets: ["Report and Dashboard Development", "Advanced Data Discovery", "Ad-hoc Reporting with Mobile BI", "Migration to New Reporting Tools", "Cloud/On-Premise Deployment", "Geospatial Visualization"],
            video: two
        },
        {
            title: 'Data Science',
            bullets: ["Advanced Analytics", "Machine Learning and AI", "Pilot Project Design", "Enhanced Customer Engagement", "Supply Chain Analytics", "Innovative Product Development"],
            video: three
        },
        {
            title: 'Custom Software Development',
            bullets: ["Process Automation", "Fraud Detection", "Personalized Data Analytics Tools", "Custom CRM Systems", "Seamless Integration"],
            video: four
        },
    ]
    return (
        <div className='font-nunito'>
            <div div className="banner bg-cover bg-center h-96"
                style={{ backgroundImage: `url(${banner})` }}
            >

            </div >

            {/* About */}
            <div className="about shadow-2xl relative z-50 w-full md:w-11/12 mx-auto  items-center md:-mt-32   bg-white px-12 sm:px-24 py-7 space-y-10 md:space-y-0  flex flex-col md:flex-col ">

                <div className="about flex justify-center align-middle ">

                    
                    <div className='w-full   md:w-3/4 text-center md:text-left text-[#0083e8] md:text-3xl text-4xl md:px-4 leading-relaxed md:leading-loose heading  font-bold'>MetaDatAnSol - Your Trusted Partner for Achieving Data-Driven Success Across Industries and Verticals
                    </div>

                </div>

                <div className="whoweare flex flex-col md:flex-row items-center ">
                <div className='w-full md:w-1/4  text-lg text-[#0083e8] sm:md:py-24 text-center md:text-left  md:text-4xl heading  font-bold'>Who we are ?</div>
                    <div className='md:w-3/4 text-center text-lg text-[#0083e8] sm:text-sm md:text-xl         description '>
                        At MetaDatAnSol , we're seasoned experts with over a decade of experience, dedicated to fostering a data-centric evolution. Our commitment spans various industries, providing customized solutions for analytics, data science, and cutting-edge technologies. We empower businesses with precise insights, guiding them to excel in today's data-driven landscape.
                    </div>
                </div>

            </div>


            {/* Fixed BG */}
            {/* <div style={{ color: 'rgba(0,131,232, 0.4)' }} className='bg-[rgba(0,131,232, 0.4)]'></div> */}
            <div style={{
                backgroundImage: `linear-gradient(to bottom, rgb(11 126 215 / 70%), rgb(1 73 128 / 96%)), url(${banner2})`,
                backgroundPosition: "center",
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat'
            }} className="banner2 px-5 sm:px-16 md:px-20 -mt-32 bg-scroll pt-44 sm:pt-56 pb-10 sm:pb-36 text-sm text-center sm:text-2xl xl:text-2xl text-gray-100 fomt-bold  ">
                <FadeUp
                    component={
                        <>
                           <div className='description'>
                           Our clients benefit from our expertise in the domain of data and analytics. Analyzing loads of data is critical and we help our clients for better understanding the past events and predict the prospects entirely based on accurate data analysis. Our experienced professionals cater to the ever-growing data analytics needs of our clients, right from the planning stages to the transformation and execution stages. Also, we propose an optimal course of action so that the transformation process does not seem to be too overwhelming for our clients.
                           </div>
                        </>
                    }
                />
            </div>
            {/* What we do */}
           
                        <div className='px-8 bg-transparent' style={{
                            backgroundImage: `linear-gradient(to bottom, rgb(11 126 215 / 70%), rgb(1 73 128 / 96%)), url(${banner2})`,
                            backgroundPosition: "center",
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed',
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <div className=' heading p sm:text-5xl bg-transparent  text-center font-bold 3 text-3xl  text-white'>What we do ?</div>
                            <p className='xl:text-2xl px-8 text-white description   '>In today's rapidly evolving digital landscape, having a forward-looking partner is crucial. Beyond these core services, we extend our offerings to encompass data science, ML, AI, basic flows, and applications for process automation. Additionally, we're well-versed in crafting Custom Software Solutions tailored to address your complex business challenges.</p>
                        </div>
                
              

            {/*  Cards */}
            <div style={{
                backgroundImage: `linear-gradient(to bottom, rgb(11 126 215 / 70%), rgb(1 73 128 / 96%)), url(${img2})`,
                backgroundPosition: "center",
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat'
            }} className="px-28 grid grid-cols-1 lg:grid-cols-2 gap-1 bg-[#0d71bd] text-gray-200 py-12">
                <FadeUp component={
                    <div
                        className="service mx-2 py-8  flex flex-col lg:flex-col justify-between space-y-8 ">

                        <video  playsInline    autoPlay loop muted className='object-cover w-full h-[20rem]'>
                            <source className='w-full' src={one} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <div className="content w-full flex flex-col items-start justify-evenly space-y-3">

                            {/* <div className='w-full text-[#0083e8] text-start text-2xl font-extrabold'>01.</div> */}
                            <center className=" heading w-full text- text-2xl md:text-4xl font-bold">Business Intelligence</center>
                            <center className=" w-full  text-sm md:text-lg description text-gray-200">
                             <ul>
                                <li>Legacy Data and Report Migration</li>
                                <li>Enterprise Data Warehouse</li>
                                <li>Integration with Existing Systems</li>
                                <li>Mobile BI</li>
                                <li>"Reports, Dashboards, Metrics</li>
                                <li>OLAP Cubes</li>
                             </ul>
                            </center>
                        </div>
                    </div>
                }
                >

                </FadeUp>

                <FadeUp component={
                    <div
                        className="service mx-2 py-8  flex flex-col lg:flex-col justify-between space-y-8">

                        <video  playsInline   autoPlay loop muted className='h-[20rem] object-cover w-full'>
                            <source className='w-full' src={two} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <div className="content w-full flex flex-col items-start justify-evenly space-y-3">

                            {/* <div className='w-full text-[#0083e8] text-start text-2xl font-extrabold'>02.</div> */}
                            <center className=" w-full  text-2xl md:text-3xl font-bold heading ">Data Visualization</center>
                            <center className=" w-full  text-sm md:text-lg description text-gray-200">
                             <ul>
                                <li>Report and Dashboard Development</li>
                                <li>Advanced Data Discovery</li>
                                <li>Ad-hoc Reporting with Mobile BI</li>
                                <li>Migration to New Reporting Tools</li>
                                <li>Cloud/On-Premise Deployment</li>
                                <li>Geospatial Visualization</li>
                             </ul>
                            </center>
                        </div>
                    </div>

                }
                />

                

                <FadeUp component={
                    <div
                        className="service mx-2 py-8  flex flex-col lg:flex-col justify-between space-y-8 ">

                        <video  playsInline   autoPlay loop muted className='h-[20rem] object-cover w-full'>
                            <source className='w-full' src={three} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <div className="content w-full flex flex-col items-start justify-evenly space-y-3">

                            {/* <div className='w-full text-[#0083e8] text-start text-2xl font-extrabold'>03.</div> */}
                            <center className=" w-full  text-2xl md:text-3xl font-bold heading ">Data Science</center>
                            <center className=" w-full  text-sm md:text-lg description text-gray-200">
                             <ul>
                                <li>Advanced Analytics</li>
                                <li>Machine Learning and AI</li>
                                <li>Pilot Project Design</li>
                                <li>Enhanced Customer Engagement</li>
                                <li>Supply Chain Analytics</li>
                                <li>Innovative Product Development</li>
                             </ul>
                            </center>
                        </div>
                    </div>
                }>


                </FadeUp>

                <FadeUp component={
                    <div
                        className="service mx-2 py-8 flex flex-col lg:flex-col justify-between space-y-8">

                        <video  playsInline   autoPlay loop muted className='h-[20rem] object-cover w-full'>
                            <source className='w-full' src={four} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <div className="content w-full flex flex-col items-start justify-evenly space-y-3">

                            {/* <div className='w-full text-[#0083e8] text-start text-2xl font-extrabold'>04.</div> */}
                            <center className=" w-full  text-2xl md:text-3xl font-bold heading ">Custom Software Development'</center>
                            <center className=" w-full  text-sm md:text-lg description text-gray-200">
                             <ul>
                                <li>Process Automation</li>
                                <li>Fraud Detection</li>
                                <li>Personalized Data Analytics Tools</li>
                                <li>Custom CRM Systems</li>
                                <li>"Reports, Dashboards, Metrics</li>
                                <li>Seamless Integration</li>
                             </ul>
                            </center>
                   
                        </div>
                    </div>
                }>

                </FadeUp>

            </div>

            {/* Experience meets commitment */}
            {/* <FadeUp
                component={
                    <div className="about -mb-40 mt-20 relative z-50 w-11/12 mx-auto space-x-3 items-start md:items-center  bg-white px-4 sm:px-8 md:px-14 py-4 sm:py-7 flex flex-col md:flex-row ">

                        <div className='md:w-2/6 py-4 sm:py-8 md:py-16 uppercase font-bold text-center text-2xl sm:text-3xl  leading-normal'>Experience Meets Commitment</div>
                        <div className='md:w-4/6 md:border-l-2 text-[#0083e8] text-lg md:text-2xl md:px-4 px-0 leading-relaxed'>  At MetaDatAnSol Solutions, we stand backed by experienced teams with a broad industry background across a myriad of industries spanning diverse sectors, from Manufacturing and Retail to Pharmacy, Logistics, Banking/Finance, Technology, Cannabis and more.

                            .</div>
                    </div>
                }
            /> */}

            {/* Fixed BG */}
            <div style={{
                backgroundImage: `linear-gradient(to bottom, rgb(11 126 215 / 70%), rgb(1 73 128 / 96%)), url(${banner2})`,
                backgroundPosition: "center",
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat'
            }} className=" text-transparent   ">
                <FadeUp
                    component={
                        <>
                           <div className='font-'>
                           At MetaDatAnSol, our service spectrum is designed to fuel your business's data-powered journey. From expert business intelligence and analytics services spanning diverse industries to predictive analysis aiding in strategic foresight, we're committed to delivering actionable insights. Our comprehensive approach navigates the complex landscape of data, offering services in data science, machine learning, AI, and tailored software solutions. Trust us as your forward-thinking partner, crafting solutions that streamline processes, ensuring a competitive edge in today's digital era.
                           </div>
                        </>
                    }
                />
            </div>

            {/* tailwored client */}


             <FadeUp
                component={
                    <div className="about -mt-20 -mb-20 relative z-50 w-11/12 mx-auto space-x-3 items-start md:items-center  bg-white px-4 sm:px-8 md:px-14 py-4 sm:py-7 flex flex-col md:flex-row ">

                        <div className='md:w-2/6 py-4 text-3xl text-[#0083e8] sm:py-8 md:py-16 uppercase font-bold text-center  sm:text-3xl leading-normal heading'>A Tailored Client-Centric Strategy</div>
                        <div className='md:w-4/6 md:border-l-2 text-[#0083e8] text-lg md:text-2xl md:px-4 px-0 leading-relaxed description '>At MetaDatAnSol , we lead clients towards data-centric excellence, navigating transformation journeys hand in hand. Our commitment lies in delivering insightful solutions and fostering technological advancement to elevate businesses. Upholding rigorous technical standards, we ensure timely project completion across data engineering, analytics, science, custom solutions, and multi-year digital transformations
                            .</div>
                    </div>
                }
            />
      

            {/* More paragraphs */}
            <FadeUp
                component={
                    <div style={{
                        backgroundImage: `linear-gradient(to bottom, rgb(11 126 215 / 70%), rgb(1 73 128 / 96%)), url(${banner2})`,
                        backgroundPosition: "center",
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                        backgroundRepeat: 'no-repeat'
                    }} className="bg-[hsl(206,85%,89%)]  text-gray-100 para px-8 sm:px-20 pt-24 pb-12 sm:py-24 my-6 sm:my-10 flex flex-col items-center space-y-5">

                        <div className='text-2xl sm:text-4xl md:text-5xl font-medium text-white text-center  py-1 sm:py-3 heading'>Our Dedication to Your Triumph</div>
                        <p className='text-sm sm:text-base md:text-2xl description  text-center '>
                            <br />
                            Your success is our top priority, and we're wholly dedicated to providing analytical solutions that cater to your data excellence needs, from the planning stage right through to execution.
                            <br />
                            <br />
                            Our commitment extends beyond mere project completion. We are dedicated to building lasting, strategic partnerships, characterized by an unwavering focus on continuous improvement. Through our technology-driven approach, we empower you to conquer even the most complex business challenges, propelling your organization towards unprecedented growth. Your success remains our unwavering pledge.
                        </p>

                    </div>
                }
            />

            {/* <div className="mb-96"></div> */}
        </div >
    )
}
