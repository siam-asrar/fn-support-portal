import React from 'react';
const About = () => {

    return (
        <div className='flex justify-center'>
            <div className="About-img hero w-full" style={{ backgroundImage: `url("https://fieldnation.com/wp-content/uploads/2022/12/orange-hex.png")` }}>
                <div className="hero-overlay bg-opacity-75"></div>
                <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-6 p-6 mt-5'>
                    <div className="card lg:w-72 lg:h-fit md:w-full text-white py-2 items-center text-center pb-5 mx-5">
                        <small className="card-title pb-5">LEARN MORE
                        </small>
                        <ul>
                            <li className='p-2'><a href="https://fieldnation.com/service-types" target="_blank rel=noreferrer">Service Types</a></li>
                            <li className='p-2'><a href="https://fieldnation.com/resource-library?resource-search=&resource-type=14" target="_blank rel=noreferrer">Case Studies</a></li>
                        </ul>
                    </div>
                    <div className="card lg:w-72 lg:h-fit md:w-full text-white py-2 items-center text-center pb-5 mx-5">
                        <small className="card-title pb-5">RESOURCES FOR BUSINESSES</small>
                        <ul>
                            <li className='p-2'><a href="https://support.fieldnation.com" target="_blank rel=noreferrer">Support</a></li>
                            <li className='p-2'><a href="https://fieldnation.com/integrations" target="_blank rel=noreferrer">Integrations</a></li>
                            <li className='p-2'><a href="https://fieldnation.com/coverage-map-tool" target="_blank rel=noreferrer">Coverage Map</a></li>
                            <li className='p-2'><a href="https://fieldnation.com/contingent-labor-savings-calculator" target="_blank rel=noreferrer">ROI Calculator</a></li>
                            <li className='p-2'><a href="https://fieldnation.com/retail" target="_blank rel=noreferrer">Retail Coverage</a></li>
                        </ul>
                    </div>
                    <div className="card lg:w-72 lg:h-fit md:w-full text-white py-2 items-center text-center pb-5 mx-5">
                        <small className="card-title pb-5">ABOUT US
                        </small>
                        <ul>
                            <li className='p-2'><a href="https://fieldnation.com/our-story" target="_blank rel=noreferrer">Our Story</a></li>
                            <li className='p-2'><a href="https://fieldnation.com/careers" target="_blank rel=noreferrer">Careers at Field Nation </a></li>
                            <li className='p-2'><a href="https://fieldnation.com/contact" target="_blank rel=noreferrer">Contact Sales</a></li>
                            <li className='p-2'><a href="https://fieldnation.com/privacy" target="_blank rel=noreferrer">Privacy Policy</a></li>
                            <li className='p-2'><a href="https://fieldnation.com/non-discrimination-policy" target="_blank rel=noreferrer">Non-Discrimination Policy</a></li>
                            <li className='p-2'><a href="https://fieldnation.com/partners" target="_blank rel=noreferrer">Partners</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;