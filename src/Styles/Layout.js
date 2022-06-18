import styled from 'styled-components'
import breakpoints from '../constants/breakpoints'

export const StyledPageContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    @media screen and (max-width: ${breakpoints.mobile}){
        flex-direction: column;
    }
`

export const StyledMenu = styled.section`
    width: 450px;
    min-width: 450px;
    padding: 40px 20px;
    box-sizing: border-box;
    height: 100%;
    h1 {
        margin-top: 0;
        padding-left: 40px;
    }
    ul {
        list-style-type: none;
        padding: 20px 40px;
        li {
            margin-bottom: 10px;
            a {
                width: 100%;
                display: block;
                border-radius: 5px;
                text-decoration: none;
                padding: 10px;
                color: black;
                font-size: 14px;
                &:hover {
                    background-color: lightgrey;
                    cursor: pointer;
                }
                @media screen and (max-width: ${breakpoints.mobile}){
                    text-align: center;
                    width: 150px;
                }
            }
        }
    }
    .menu-icon {
        width: 30px;
        height: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        @media screen and (min-width: ${breakpoints.mobile}){
            display: none;
        }
        div:first-child, div:last-child {
            height: 2px;
            width: 100%;
            border-radius: 2px;
            background-color: black;
            transition: 0.3s ease-in-out;
        }
        div:nth-child(2) {
            height: 2px;
            width: 50%;
            border-radius: 2px;
            background-color: black;
            transition: 0.3s ease-in-out;
        }
        &.cross {
            position: relative;
            div:nth-child(2) {
                display: none;
            }
            div:first-child {
                transform: rotate(45deg);
            }
            div:last-child {
                transform: rotate(-45deg);
                position: absolute;
                top: 0;
            }
        }
    }
    @media screen and (max-width: ${breakpoints.desktop}){
        width: 250px;
        min-width: 250px;
    }
    @media screen and (max-width: ${breakpoints.mobile}){
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: unset;
        h1 {
            padding-left: 0;
        }
        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-height: 0;
            opacity: 0;
            transition: 0.3s ease-in-out;
            padding: 0;
            margin: 0;
            li {
                display: none;
            }
            &.open {
                max-height: 1000px;
                opacity: 1;
                li {
                display: unset;
                }
            }
        }
    }
`

export const StyledPageContent = styled.section`
    flex-grow: 1;
    padding: 40px 20px;
    box-sizing: border-box;
    @media screen and (max-width: ${breakpoints.mobile}){
        width: 100vw;
    }
`