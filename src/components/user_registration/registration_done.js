
// import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
function show(ctx) {
  return (
    <>
      <div className='container'>
        <Card className="bg-dark text-white" style={{ width: '50rem' }}>
          <Card.Img src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>{ctx} Registration completed</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
}


const registration_done = (ctx) => {

  return (
    <>
      {show(ctx)}
    </>
  )


}

export default registration_done;