import React from 'react';
import styled from "styled-components";
import {layout, space} from "styled-system";

const StyleFlex = styled.div`
  ${space};
  ${layout};
  width: 100%;
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
`

const Flex = (props) => {
    return <StyleFlex {...props} />
};

export default Flex;