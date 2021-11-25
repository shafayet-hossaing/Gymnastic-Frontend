import React from 'react';
import { Col, Row } from 'react-bootstrap';
const img = 'https://www.westminster.ac.uk/sites/default/public-files/styles/panel_image_1_2_768px_/public/general-images/regent-street-gym-equipment.jpg?itok=ji20fmkf'
const img1 = 'https://see.news/wp-content/uploads/2020/06/6dcacf7eb8a7421ec6395afc797f6a13.jpg'

const Blog = () => {
    return (
        <div className="container">
            <h1 className="my-5 text-center">Something About Us And Gym History</h1>
            <Row className="mt-5 mb-4 shadow align-items-center p-4 rounded-3">
                <Col md={5}>
                    <img src={img} className="img-fluid shadow rounded-3" alt="" />                    
                </Col>
                <Col md={6}>
                    <h2>When We Started It</h2>   
                    <p>We started it when there was on gym in Bangladesh. And in that time it was very difficult to be fit and fine
                        We thought to make something that would be helping people to be fit and fine. So we discoverd to make this happen and
                        .Let's know something about gym history. The first gymnasiums in history were dated over 3000 years ago, in ancient Persia, where they were known as Zurkhaneh, as areas that encouraged physical fitness. But gyms formally came into existence in ancient Greece. The word 'gymnasium' is derived from the Greek word 'gymnos', which means naked.   
                    </p>                
                </Col>
            </Row>
            <Row className="mt-5 shadow align-items-center p-4 rounded-3">
                <Col md={7}>
                    <h2>When We Started It</h2>   
                    <p>We started it when there was on gym in Bangladesh. And in that time it was very difficult to be fit and fine
                        We thought to make something that would be helping people to be fit and fine. So we discoverd to make this happen and
                        .Let's know something about gym history. The first gymnasiums in history were dated over 3000 years ago, in ancient Persia, where they were known as Zurkhaneh, as areas that encouraged physical fitness. But gyms formally came into existence in ancient Greece. The word 'gymnasium' is derived from the Greek word 'gymnos', which means naked.   
                    </p>                
                </Col>
                <Col md={5}>
                    <img src={img1} className="img-fluid shadow rounded-3" alt="" />                    
                </Col>
            </Row>
        </div>
    );
};

export default Blog;