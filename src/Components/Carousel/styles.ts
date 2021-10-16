import styled from "styled-components";

//Recebe a url para colocar na div
interface ItemBlockProps{
    url: string;
}

//Exporta o container que fica por trás
export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    grid-gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 0.8rem;
    
    &:last-child{
        padding-bottom: 0.8rem;
    }

    span{
        font-size: 1.3rem;
    }

`
//bloco onde ficará as imagens
export const Block = styled.div`
    width: 100%;
    display: flex;
    grid-gap: 1rem;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    overflow: overlay;
    border-radius: 0.5rem;
    
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    ::-webkit-scrollbar-track {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #bbb;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #999; 
        cursor: pointer;
    }
`
//Aonde é inserido as imagens
export const ItemBlock = styled.div<ItemBlockProps>`
    border-radius: 0.5rem;
    width: 100%;
    height: 45vh;
    min-width: 85%;
    min-height: 150px;
    max-height: 38vh;
    background-image: url(${ (props:ItemBlockProps) => props.url});
    background-repeat: no-repeat;
    background-position: unset;
    background-size: cover;
    color: white;
    transition: all 0.5s ease-in-out;

    div.Title{
        display: flex;
        flex-direction: column;
        width: 100%;

        h3{
            font-size: 0.9rem;
            font-weight: 400;
        }

        strong{
            font-weight: 500;
        }
    }

    div.Price{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        
        span{
            font-weight: 400;
            font-size: 0.8rem;
        }
        strong{
            font-weight: 700;
            font-size: 1.1rem;
        }
    }

    @media(min-width: 540px){        
        min-width: 70%;
    }

    @media(min-width: 768px){        
        min-width: 45%;
    }

    @media(min-width: 1280px){        
        min-width: 32%;

        div.Title{
            h3{
                font-size: 1.2rem;
                font-weight: 400;
            }

            strong{
                font-size: 1rem;
                font-weight: 500;
            }
        }

    div.Price{       
        span{
            font-weight: 400;
            font-size: 1.1rem;
        }
        strong{
            font-weight: 700;
            font-size: 1.4rem;
        }
    }
        
    }
`
//aplica opacidade na div do block
export const Opacity = styled.div`
    background: linear-gradient(rgba(0,0,0,0), rgba(0, 0 , 0, 45%));
    display: flex;
    align-items: flex-end;
    padding: 1rem;
    width: 100%;
    height: 100%;
`