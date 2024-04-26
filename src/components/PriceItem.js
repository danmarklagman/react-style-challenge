import "../styles.css";
import { ReactComponent as ArrowIcon } from "../arrow.svg";
import styled from "styled-components";

export default function PriceItem(props) {

    const item = props.item

    const Wrapper = styled.div`
        height: auto;
        background: #fff;
        width: 250px;
        margin: 0 20px;
        border-radius: 8px;
        border: 3px solid #f2c1dd;
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.06);
        cursor: pointer;
        position: relative;
        padding: 20px;
        text-align: center;
        transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out;

        &:hover {
            border-color: transparent;
            transform: scale(1.05);
        }
    `

    const PriceTitle = styled.div`
        color: #7D4196;
        font-weight: bold;
        font-size: 32px;
    `

    const LegendButton = styled.button.attrs({
        className: 'gradient & pricing-button'
    })`
        top: 0;
        margin-top: -20px;
        font-size: 12px;
    `

    const ActionButton = styled.button.attrs({
        className: 'gradient & pricing-button'
    })`
        bottom: 0;
        margin-bottom: -20px;
    `

    const PriceContainer = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: row;
        color: #ff3494;

        div {
            &:nth-child(1) {
                font-weight: bold;
                font-size: 24px;
                margin-top: 20px;
                margin-right: 5px;
            }
            &:nth-child(2) {
                font-weight: bold;
                font-size: 64px;
                margin-bottom: -17px;
                margin-right: 20px;
                align-self: flex-end;
            }
            &:nth-child(3) {
                font-weight: normal;
                font-size: 18px;
                align-self: flex-end;
            }
        }
    `

    const Features = styled.div`
        margin: 40px 0 50px 0;

        ul {
            text-align: left;

            li {
                list-style: none;
                margin-bottom: 12px;
                font-weight: regular;

                .arrow-icon {
                    padding-right: 12px;
                    margin-bottom: -2px;
                }
            }
        }
    `

    return (
        item && (
            <Wrapper>
                {item.title.toLowerCase() === 'starter' && (
                    <LegendButton>
                        popular
                    </LegendButton> 
                )}
                <PriceTitle>{item.title}</PriceTitle>
                <PriceContainer>
                    <div>$</div>
                    <div>{item.cost}</div>
                    <div> / monthly</div>
                </PriceContainer>
                <Features>
                    <ul>
                        {item.features.map((feature) => 
                            <li>
                                <ArrowIcon height={16} width={16} stroke="#ee3f88" strokeWidth={30} className="arrow-icon" />
                                {feature}
                            </li>
                        )}
                    </ul>
                </Features>
                <ActionButton>
                    start now
                </ActionButton>
            </Wrapper>
        )
    );
}
