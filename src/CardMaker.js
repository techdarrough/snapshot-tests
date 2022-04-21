import Card from "react-bootstrap/Card";

const CardMaker = () => (
  <div>
    <Card border="success" style={{ width: "18rem", margin: "auto" }}>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>example text to reinforce Title</Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default CardMaker;
