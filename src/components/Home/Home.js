import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import "./Home.css"

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
      fetch('./services.JSON')
      .then(res => res.json())
      .then(data => setServices(data))
    },[])
    return (
        <div>
            <Row className="banner-image">
            <div class="banner-text">
                <h4>SEPTEMBER 26, 2021</h4>
                <h1>TWIN LIGHTS RIDE</h1>
                <p>The Twin Lights Ride is back on September 26! Wrap up the riding season with beautiful ocean views and the best in local food.</p>
                <button>Learn More</button>
            </div>
            </Row>
            <Row xs={1} md={3} lg={4} className="g-4">
            { 
                services.map((service, index) => index < 4 ? <Service service={service} key={service.id}/> : undefined )
            }
            </Row>
        </div>
    );
};

export default Home;


//  <div class="hero-image">
//   <div class="hero-text">
//     <h1 style="font-size:50px">I am Jane Doe</h1>
//     <h3>And I'm a Photographer</h3>
//     <button>Hire me</button>
//   </div>
// </div> 