

import styled from 'styled-components'

export const StyledContent = styled.div`
    padding-bottom: 100px;
    p {
        /* margin-bottom: 20px; */
    }
    table {
        width: 100%;
        margin: 30px 0;
        td {
            padding: 10px 0;
            vertical-align: baseline;
        }
        td:nth-child(1) {
            width: 30%;
        }
        td:nth-child(2) {
            width: 70%;
        }
    }
`