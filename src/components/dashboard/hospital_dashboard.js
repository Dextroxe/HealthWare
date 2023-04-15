import { Container, Card, Button,Image } from 'react-bootstrap';
// import './components/dashboard/patientdashboard.css';

function HospitalDashboard() {
    return (
        <>
        <div className='contains'>
        <Container fluid>
            
                
                    <Card>
                        <Card.Body>
                            <Card.Title>Status</Card.Title>
                            <Card.Text>
                                View and update your information.
                            </Card.Text>
                            <Button variant="primary" href="h/profile">
                                Go to Profile
                            </Button>
                        </Card.Body>
                    </Card>
                
                
                    <Card>
                        <Card.Body>
                            <Card.Title>All Appointments</Card.Title>
                            <Card.Text>
                                View and manage Patient's appointments.
                            </Card.Text>
                            <Button variant="primary" href="h/appointments">
                                Go to Appointments
                            </Button>
                        </Card.Body>
                    </Card>
                
                
                    <Card>
                        <Card.Body>
                            <Card.Title>Patient list</Card.Title>
                            <Card.Text>
                                View your patient list.
                            </Card.Text>
                            <Button variant="primary" href="/Patient list">
                                Go to Patient List
                            </Button>
                        </Card.Body>
                    </Card>
                
                
                    <Card>
                        <Card.Body>
                            <Card.Title>Prescription management</Card.Title>
                            <Card.Text>
                                View patient Prescription management
                            </Card.Text>
                            <Button variant="primary" href="/">
                                Go to Prescription management
                            </Button>
                        </Card.Body>
                    </Card>
                
                
                <Card>
                        <Card.Body>
                            <Card.Title>Emergency Communication</Card.Title>
                            <Card.Text>
                                View your Communication tools
                            </Card.Text>
                            <Button variant="primary" href="/bills">
                                Go to Communication tools
                            </Button>
                        </Card.Body>
                    </Card>
                
                
                <Card>
                        <Card.Body>
                            <Card.Title>Medical Equipments</Card.Title>
                            <Card.Text>
                                View your Medical Equipments
                            </Card.Text>
                            <Button variant="primary" href="/bills">
                                Go to Medical Equipments
                            </Button>
                        </Card.Body>
                    </Card>
                
                
                <Card>
                        <Card.Body>
                            <Card.Title>Analytics and reports</Card.Title>
                            <Card.Text>
                                View your Analytics and reports
                            </Card.Text>
                            <Button variant="primary" href="/bills">
                                Go to Analytics and reports
                            </Button>
                        </Card.Body>
                    </Card>
                
            
        </Container>
    <Image src="https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGhvc3BpdGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" rounded />

        </div>
        </>
    );
}

export default HospitalDashboard;
