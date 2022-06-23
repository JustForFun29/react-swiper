import React from 'react';
import {Button} from "../../ButtonElement";
import {
    GatewayImg,
    GatewayPrice,
    GatewayTitle,
    ItemDetailContainer, ItemDetailContent,
    ItemDetailGateway,
    ItemDetailImg,
    ItemDetailLi,
    ItemDetailList,
    ItemDetailSubtitle,
    ItemDetailUl
} from "./ServicesElements";
import Flex from "../../Flex";
import {Transition} from "react-transition-group";


const SwiperItemDetail = ({img, list, speed, active}) => {
    return ( active &&
        <ItemDetailContainer active>
            <ItemDetailImg >
                <img src={img} alt=""/>
            </ItemDetailImg>
            <Flex
                ml={["0px", "0px", "0px", "56px"] }
                justify='space-between'
                direction='column'
            >
                <ItemDetailContent>
                    <ItemDetailList>
                        <ItemDetailSubtitle>
                            {speed} Мб подходят для
                        </ItemDetailSubtitle>
                        <ItemDetailUl>
                            {list.map(item =>
                                <ItemDetailLi>
                                    <p>{item}</p>
                                </ItemDetailLi>)}
                        </ItemDetailUl>
                    </ItemDetailList>
                    <div>
                        <ItemDetailSubtitle>
                            Проверьте доступность и наберите нас
                        </ItemDetailSubtitle>
                        <Button dark>
                            Набрать нас
                        </Button>
                    </div>
                </ItemDetailContent>
                <ItemDetailGateway>
                    <GatewayImg
                        src="https://assets.xfinity.com/assets/dotcom/projects/cix-3560_unbeatable-internet-xb8-launch/HSDLearn_XB8.png"
                        alt=""/>
                    <Flex
                        ml={3}
                        direction='column'
                        justify='center'
                    >
                        <Flex
                            justify='space-between'
                        >
                            <GatewayTitle>
                                Add an xFi Gateway at checkout
                            </GatewayTitle>
                            <GatewayPrice>
                                +$14/mo
                            </GatewayPrice>
                        </Flex>
                        <p>
                            Наслаждайтесь мощным и защищенным интернетом!
                        </p>
                    </Flex>
                </ItemDetailGateway>
            </Flex>
        </ItemDetailContainer>
    );
};

export default SwiperItemDetail;