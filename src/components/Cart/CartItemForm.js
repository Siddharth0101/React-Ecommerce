import { Button, Col, Container, Row } from "react-bootstrap";
import Input from "../UI/Input";
import { propTypes } from "react-bootstrap/esm/Image";

const CartItemForm = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col style={{ fontWeight: "bold" }}>${props.price}</Col>
          <Col>
            <Input input={{ type: "number", placeholder: "Enter amount" }} />
          </Col>
        </Row>
        <Row>
          <div style={{ padding: "10px" }}></div>
          <Button variant="primary" size="lg">
            ADD TO CART
          </Button>
        </Row>
      </Container>
    </div>
  );
};
export default CartItemForm;
