
import { Button, Form, Navbar, FormControl } from "react-bootstrap";
import { CartState } from "../context/Context";
const Filter = () => {
    const { productState: { searchQuery, searchProducts, sort, fastDelivery }, productDispatch } = CartState();
    console.log(sort);
    return (
        <div className="filters">
            <span className="title">Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label="Assending"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                    onChange={(e) => {
                        productDispatch({
                            type: "sort_By_Price",
                            payload: "lowToHigh"
                        })
                    }}
                    checked={sort === "lowToHigh" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Dessending"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                    onChange={(e) => {
                        productDispatch({
                            type: "sort_By_Price",
                            payload: "highToLow"
                        })
                    }}
                    checked={sort === "highToLow" ? true : false}
                />
            </span>
            <span>


                <Form.Check
                    inline
                    label="Fast Delivery Only"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                    onChange={(e) => {
                        productDispatch({
                            type: "fast_delivery",
                        })
                    }}
                    checked={fastDelivery} />
            </span>
            <Button variant="light" onClick={() => { productDispatch({ type: "clear" }) }}>Clear Filter</Button>
            <Navbar>
                <Navbar.Text className="searchh">


                    <FormControl style={{ Color: "black", width: 135, fontWeight: "bold" }} placeholder="Search" className="m-auto"
                        onChange={(event) => {
                            productDispatch({
                                type: "search",
                                payload: event.target.value,
                            })
                        }} />
                </Navbar.Text>
            </Navbar>
        </div>
    )
}
export default Filter

