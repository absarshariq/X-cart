
import { CartState } from "../context/Context";
import { ListGroup, Row, Col, Image, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
const Cart = () => {
    const { state, dispatch } = CartState();
    const [total, settotal] = useState(0); 
    useEffect(() => {
        settotal(state.cart.reduce((acc, cur) => acc + Number((cur.price)*(cur.qty)), 0)); }, [state.cart])
        return ( <div className="home">
            <div className="productContainer summary">
                <ListGroup>{
                 state.cart.map(item =>
                <ListGroup.Item key={item.id} className="list">
                    <Row className="row">
                        <Col sm={2}> 
                        <Image src={item.image} alt={item.name} fluid rounded />
                        </Col>
                         <Col sm={2}>
                              <span>{item.name}</span>
                              </Col> 
                              <Col sm={2}>
                                   <span>₹{item.price}</span>
                                   </Col> 
                                <Col sm={2}>


<FormControl as="select" onChange={(e)=>dispatch({type:"CHANGE_CRTN_QTY", payload:{ id:item.id,
     qty:e.target.value
      }, })}> {[...Array(item.instock).keys()].map((i) => ( <option key={i + 1}>{i + 1}</option>))}</FormControl>


</Col>
<Col sm={2}>
    <MdDelete fontSize="25px" style={{ cursor: "pointer" }} onClick={() => {
         dispatch({ 
              type: "REMOVE_FROM_CART",
              payload: item,
               })
               }} />
               </Col>
                </Row>
                 </ListGroup.Item>)
                 }
                  </ListGroup>
                  </div>


<div className="filters">
    <span className="title">Total Price= ₹{total} </span>
    <span className="titlee"> Cart has ({state.cart.length}) items</span>
     </div>
     </div>
     )}
export default Cart;

