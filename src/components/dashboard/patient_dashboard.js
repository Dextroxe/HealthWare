import { Container, Card, Button,Image } from "react-bootstrap";
import "../../css/Patientdashboard.css"

function PatientDashboard() {
  return (
    <>
    <div className="contains">
    <Container fluid>
      
        
          <Card>
            <Card.Body>
              <Card.Title>My Profile</Card.Title>
              <Card.Text>View and update your profile information.</Card.Text>
              <Button variant="primary" href="p/profile">
                Go to Profile
              </Button>
            </Card.Body>
          </Card>
        

        
          <Card>
            <Card.Body>
              <Card.Title>My Appointments</Card.Title>
              <Card.Text>View and manage your upcoming appointments.</Card.Text>
              <Button variant="primary" href="/appointments">
                Go to Appointments
              </Button>
            </Card.Body>
          </Card>
        

        
          <Card>
            <Card.Body>
              <Card.Title>My Medical Records</Card.Title>
              <Card.Text>View and manage your medical records.</Card.Text>
              <Button variant="primary" href="/records">
                Go to Medical Records
              </Button>
            </Card.Body>
          </Card>
        

        
          <Card>
            <Card.Body>
              <Card.Title>My Bills</Card.Title>
              <Card.Text>View and pay your bills online.</Card.Text>
              <Button variant="primary" href="/bills">
                Go to Bills
              </Button>
            </Card.Body>
          </Card>
        
     
    </Container>
    <Image src="https://images.unsplash.com/photo-1606166155766-87872211cd0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=607&q=50" rounded />
    </div>
    </>
  );
}

export default PatientDashboard;
