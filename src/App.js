import "./styles.css";
import arrowIcon from "./arrow.svg";
import data from "./data";
import styled from "styled-components";
import PriceItem from "./components/PriceItem";

export default function App() {

    const Container = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: row;
    `

    const Heading = styled.h1`
        color: #7D4196;
        margin-bottom: 100px;
    `

    return (
        <div className="App">
            <Heading>Our Pricing Plans</Heading>
            <Container>
                {data.map((item) => (
                    <PriceItem item={item} />
                ))}
            </Container>
        </div>
    );
}
