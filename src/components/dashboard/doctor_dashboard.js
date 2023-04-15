import { Container, Card, Button, Image } from "react-bootstrap";
import "../../css/Doctordashboard.css"

function DoctorDashboard() {
  return (
    <>
    <h1>Doctor's Dashboard</h1>
    <div className="contains">
    <Container fluid className="cardsGo">
     
          <Card>
            <Card.Body>
              <Card.Title>My Profile</Card.Title>
              <Card.Text>View and update your profile information.</Card.Text>
              <Button variant="primary" href="d/profile">
                Go to Profile
              </Button>
            </Card.Body>
          </Card>
        
          <Card>
            <Card.Body>
              <Card.Title>My Appointments</Card.Title>
              <Card.Text>View and manage your upcoming appointments.</Card.Text>
              <Button variant="primary" href="d/appointments">
                Go to Appointments
              </Button>
            </Card.Body>
          </Card>       
        
          <Card>
            <Card.Body>
              <Card.Title>Patient list</Card.Title>
              <Card.Text>View your patient list.</Card.Text>
              <Button variant="primary" href="/Patient list">
                Go to Patient List
              </Button>
            </Card.Body>
          </Card>    
        
          <Card>
            <Card.Body>
              <Card.Title>Prescription management</Card.Title>
              <Card.Text>View your Prescription management</Card.Text>
              <Button variant="primary" href="/">
                Go to Prescription management
              </Button>
            </Card.Body>
          </Card>   
        
          <Card>
            <Card.Body>
              <Card.Title>Communication tools</Card.Title>
              <Card.Text>View your Communication tools</Card.Text>
              <Button variant="primary" href="/bills">
                Go to Communication tools
              </Button>
            </Card.Body>
          </Card>  
        
          <Card>
            <Card.Body>
              <Card.Title>Medical charting</Card.Title>
              <Card.Text>View your Medical charting</Card.Text>
              <Button variant="primary" href="/bills">
                Go to Medical charting
              </Button>
            </Card.Body>
          </Card>  
        
          <Card>
            <Card.Body>
              <Card.Title>Analytics and reports</Card.Title>
              <Card.Text>View your Analytics and reports</Card.Text>
              <Button variant="primary" href="/bills">
                Go to Analytics and reports
              </Button>
            </Card.Body>
          </Card>          
    </Container>
    <Image  className="imageF" src="https://plus.unsplash.com/premium_photo-1661766569022-1b7f918ac3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" rounded />
    </div>
    </>
  );
}

export default DoctorDashboard;
