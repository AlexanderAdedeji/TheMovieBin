import styled from 'styled-components'



export const Wrapper = styled.div`
    display:flex;
    background: var(--darkGrey);
    align-items: center;
    min-height: 100px;
    padding: 0  20px;



`;

export const Content = styled.div`
    display:flex;
        max-width:var(--maxWidth);
        width:100%;
        margin: 0 auto;
        


    .box{
        display:flex;
        align-items: center;
        justify-content: center;
        background: var(--medGrey);
        border-radius: 20px;
        margin: 0 20px;
        flex:1
    }


    @media screen and (max-width: 768px){
        display:block;

        .box{
        margin:20px 0;
        }
    }
 `;





