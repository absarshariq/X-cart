// import faker from "faker";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/Context";
import { CartReducer } from "../context/Reducer";
const SingleProduct = ({ item }) => {
    const {state,dispatch,} = CartState();
    console.log(state.cart.length);
    return (
        <div className="singleProduct">
            <Card className="card">
                <Card.Img variant="top" src={item.image} alt={item.name} />
                <Card.Body>
                    <Card.Title>
                        <span>{item.name}</span>
                    </Card.Title>
                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span>₹{item.price}</span>
                        {item.fastDelivery ? (
                            <div>Fast Deliver</div>
                        ) : (
                            <div>4 Days Delivery</div>
                        )}
                    </Card.Subtitle>
                    {
                        state.cart.some((i) => i.id == item.id) ? (
                            <Button onClick={() => {
                                dispatch({
                                    type: 'REMOVE_FROM_CART', payload: item,
                                });
                            }} variant="danger">Remove from Cart</Button>
                        ) : (
                            <Button onClick={() => {
                                dispatch({
                                    type: 'ADD_TO_CART', payload: item,
                                });
                            }} disabled={!item.instock}>
                                {!item.instock ? "Out of Stock" : "Add to Cart"}
                            </Button>
                        )
                    }
                </Card.Body>
            </Card>
        </div >
    )
}
export default SingleProduct;