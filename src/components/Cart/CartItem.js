import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  ListGroup,
  Offcanvas,
  Row,
} from "react-bootstrap";

const dummyArray = [
  {
    id: 1,
    title: "black and white",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
];

const CartItem = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="secondary" onClick={handleShow}>
        <div>cart</div>
        <div>5</div>
      </Button>
      <Container>
        <Row>
          {dummyArray.map((item) => {
            return (
              <Col>
                <Offcanvas
                  show={show}
                  onHide={handleClose}
                  placement="end"
                  style={{ backgroundColor: "lightgray", minHeight: "100vh" }}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                      --------------CARTITEMS------------
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Container>
                    <Row>
                      <Col style={{ fontWeight: "bold" }}>Name</Col>
                      <Col style={{ fontWeight: "bold" }}>Price</Col>
                      <Col style={{ fontWeight: "bold" }}> Amount</Col>

                      <Col style={{ fontWeight: "bold" }}>Actions</Col>
                    </Row>
                  </Container>
                  <Offcanvas.Body>
                    <Row>
                      <Col style={{ fontWeight: "bold" }}>
                        <ListGroup>
                          <ListGroup.Item variant="dark">
                            {item.title}
                          </ListGroup.Item>
                        </ListGroup>
                      </Col>
                      <Col style={{ fontWeight: "bold" }}>
                        <ListGroup>
                          <ListGroup.Item variant="dark">
                            ${item.price}
                          </ListGroup.Item>
                        </ListGroup>
                      </Col>
                      <Col style={{ fontWeight: "bold" }}>
                        <ListGroup>
                          <ListGroup.Item variant="dark">10</ListGroup.Item>
                        </ListGroup>
                      </Col>
                      <Col style={{ fontWeight: "bold" }}>
                        <ButtonGroup aria-label="Basic example">
                          <Button variant="secondary">+</Button>
                          <Button variant="secondary">-</Button>
                        </ButtonGroup>
                      </Col>
                    </Row>
                  </Offcanvas.Body>
                </Offcanvas>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
export default CartItem;
