import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ItemForm from "./ItemForm";
const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const CardItem = (props) => {
  return (
    <section>
      <Container fluid>
        <div>
          <h2 style={{ textAlign: "center" }}>Beautiful Colors</h2>
        </div>
        <Row>
          {productsArr.map((item) => {
            return (
              <Col key={item.id}>
                <div>
                  <Card style={{ width: "23rem" }}>
                    <Card.Body>
                      <Card.Title style={{ textAlign: "center" }}>
                        {item.title}
                      </Card.Title>
                      <Card.Text>
                        <Card.Img variant="top" src={item.imageUrl} />
                      </Card.Text>
                      <ItemForm price={item.price} />
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
export default CardItem;
