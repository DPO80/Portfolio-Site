import styled from 'styled-components';
import defaultImage from '../folder1/core-showcase-1.jpg';




const StyledContent = styled.header`

min-height: 70vh;
background: url(${props => 
(props.image ? props.image : 
defaultImage)}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`;

export default StyledContent;
