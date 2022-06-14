import styled from 'styled-components'
import breakpoints from '../constants/breakpoints'

export const StyledGalleryPage = styled.div` 
    div.description {
        margin: 20px 1%;
    }
`

export const StyledGallery = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100%;
    white-space: pre-line;
    justify-content: space-between;
    @media screen and (max-width: ${breakpoints.mobile}){
        width: 100vw;
    }
    .card {
        width: 29%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        padding: 30px 10px;
        margin: 1%;
        border-radius: 5px;
        &:hover{
            background-color: lightgrey;
            cursor: pointer;
        }
        @media screen and (max-width: ${breakpoints.desktop}){
            width: 40%;
        }
        @media screen and (max-width: ${breakpoints.mobile}){
            width: 90%;
        }
        img {
            max-height: 200px;
            width: auto;
            margin-bottom: 20px;
            max-width: 100%;
        }
    }
`