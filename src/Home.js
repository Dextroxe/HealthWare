import './css/Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import doc from "./img/doc2.jpg"

function Home() {
    return (
        <>



            <div className='landingPg'>


                <Carousel variant="light" style={{borderRadius:"20px"}}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>Doctor's</h5>
                            <p>Welcome to our healthcare website! We're here to provide you with the best possible care and support. As a patient, you're at the heart of everything we do, and we're committed to ensuring your health and wellbeing are our top priority. Whether you're here for a routine check-up or seeking treatment for a specific condition, we have a team of experienced professionals ready to help. Our goal is to provide you with compassionate, personalized care that meets your individual needs. Thank you for choosing us as your healthcare provider, and we look forward to serving you!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1586324304780-c9a5031a3599?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>Patient's</h5>
                            <p>Welcome to our healthcare website! We're honored to have you as part of our team of dedicated healthcare professionals. Your expertise and commitment to patient care are invaluable to us, and we're committed to providing you with the support you need to deliver the best possible care to your patients. Our goal is to create a collaborative environment where you can thrive, share knowledge and ideas, and work together to improve patient outcomes. Thank you for choosing to be a part of our team, and we look forward to working with you!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.istockphoto.com/id/850411402/photo/deep-hospital-corridor-detail-of-a-white-corridor-in-a-hospital-architecture-and-health.jpg?s=170667a&w=0&k=20&c=CfngH5A3kF_9kKlhuNH4wwbh9K5C53ep2Bvw2M9hUP0="
                
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5>Hospital's</h5>
                            <p>
                            Welcome to our healthcare website! We're honored to have you as part of our team of dedicated healthcare professionals. Your expertise and commitment to patient care are invaluable to us, and we're committed to providing you with the support you need to deliver the best possible care to your patients. Our goal is to create a collaborative environment where you can thrive, share knowledge and ideas, and work together to improve patient outcomes. Thank you for choosing to be a part of our team, and we look forward to working with you!
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


            </div>



        </>
    );
}

export default Home;
