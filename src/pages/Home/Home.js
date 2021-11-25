import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../../components/Banner/Banner';
import SendEmail from '../../components/Email/SendEmail';
import OurServices from '../../components/OurServices/OurServices';
import useData from '../../Hooks/useData';
import Services from '../Services/Services';

const Home = () => {
    const {gymData} = useData()
    
    return (
        <>
            <Banner></Banner>
            <Container>
                <h2 className="my-5 text-center">Facilities We Ensure</h2>
                <hr />
            <Row>
                    {
                        gymData?.slice(0, 6).map(gym => <Services key={gymData.id} gym={gym}></Services>)
                    }
            </Row>
            </Container>
            <OurServices></OurServices>
            <SendEmail></SendEmail>
        </>
    );
};

export default Home;