import styled from 'styled-components'
import breakpoints from '../constants/breakpoints'


export const StyledForm = styled.div`
    Width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    label {
        margin-bottom: 10px;
    }
    input, textarea {
        margin-bottom: 30px;
        border-radius: 5px;
        padding: 5px;
        border: 0.5px solid black;
        width: 200px;
    }
    button {
        padding: 5px 30px;
        background-color: #EEEEEE;
        border: 0.5px solid black;
        border-radius: 30px;
        background-color: lightgrey;
        &:hover {
            background-color: #EEEEEE;
            cursor: pointer;
        }
    }

`

export const StyledFormContainer = styled.div`
    width: 60%;
    padding: 30px;
    background-color: lightgrey;
    border-radius: 5px;
    @media screen and (max-width: ${breakpoints.desktop}){
        margin: 0 auto;
    }
`