import styled from 'styled-components';
import img from '../images/header.jpg';

export default styled.header`
    align-items: center;
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    display: flex;
    flex: 0 1 150px;
    justify-content: center;
`;