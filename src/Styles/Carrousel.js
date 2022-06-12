import styled from 'styled-components'
import breakpoints from '../constants/breakpoints'


export const StyledCarrousel = styled.div`
    height: 100vh;
    width: calc(100vw - 100px);
    position: fixed;
    background-color: #EEEEEE;
    z-index: 100;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    @media screen and (max-width: ${breakpoints.mobile}){
        width: 100vw;
        padding: 0 20px;
    }
    img.mainPicture {
        max-width: 100%;
        max-height: calc(100% - 40px);
        max-width: calc(100vw - 200px);
        @media screen and (max-width: ${breakpoints.desktop}){
            margin-bottom: -50px;
            max-width: calc(100vw - 140px);
        }
        @media screen and (max-width: ${breakpoints.mobile}){
            margin-bottom: 0px;
            max-height: 60%
        }
    }
    img.chevron {
        height: 50px;
        opacity: 0.5;
        cursor: pointer;
        &.right {
            transform: rotate(180deg);
        }
    }
    .corner-section {
        position: fixed;
        top: 20px;
        right: 50px;
        z-index: 101;
        display: flex;
        flex-direction: column;
        align-items: flex-end ;
        @media screen and (max-width: ${breakpoints.desktop}){
            right: 20px;
        }
        img {
            transform: rotate(270deg);
        }
        p {
            white-space: pre-line;
        }
    }

`