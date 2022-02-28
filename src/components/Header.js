
import { Badge, Container, Nav, ButtonGroup, FormControl, Button, Navbar, NavLink } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"
import { CartState } from "../context/Context"
import { MdDelete } from "react-icons/md"
const Header = () => {
    const { state, dispatch } = CartState();
    const { productState, productDispatch } = CartState();
    state.cart.map(item => { console.log(item.image); })
    return (<Navbar variant="dark" style={{ height: 80, backgroundColor: "#EAE7DC" }}>
        <Container>
            <Navbar.Brand style={{ color: "#E98074", fontWeight: "bolder" }}>
                <Link to="/"> <span style={{fontSize:25}}>X-</span>Cart</Link>
            </Navbar.Brand>


            <Nav>
                <Dropdown >
                    <Dropdown.Toggle style={{ backgroundColor: "#E98074" }} >
                        <FaShoppingCart fontSize="35px" />
                        <Badge text="white">
                            {state.cart.length}
                        </Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu >
                        {(state.cart.length > 0) ? (state.cart.map(item =>
                            <div className="CartConatiner">
                                <div className="logo">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="details">
                                    <span>{item.name}</span>
                                    <span>₹{item.price.split(".")[0]}</span>
                                </div>


                                <MdDelete fontSize="25px" style={{ cursor: "pointer" }} onClick={() => { dispatch({ type: "REMOVE_FROM_CART", payload: item, }) }} /> </div>)


                        ) : (<span>Cart is Empty</span>)}
                        <Link to="/Cart" ><Button variant="primary" className="button">Go To Cart</Button></Link>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>


            <Navbar.Text className="search">
                <FormControl style={{ width: 300 }} placeholder="search a product" className="m-auto" onChange={(event) => { productDispatch({ type: "search", payload: event.target.value, }) }} />
            </Navbar.Text>
        </Container>
    </Navbar >
    )
}

export default Header;
