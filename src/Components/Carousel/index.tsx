//Utilidade para formatar number para Real 
import React from 'react';
import { FaDotCircle } from 'react-icons/fa';
import { formatPrice } from "../../util/format";

//Components
import { Block, Container, ItemBlock, Opacity } from "./styles";

/*Propriedades Item*/
interface Item{
    id: number;
    title: string;
    url: string;
    price: number;
    category: string;
}

/* Propriedades Recebidas Api */
interface CarouselProps{
    title: string;
    itens: Item[];
}

/* Função Que Retorna o Carousel com as imagens */
export function Carousel(props: CarouselProps){

    function first(event: React.MouseEvent<HTMLAnchorElement>){
        for(var i= 0 ; i < (event.currentTarget.parentNode?.children[1].children.length || 1); i++){
           let div = event.currentTarget.parentNode?.children[1].children[i] as HTMLDivElement

           div.style.transform = 'translateX(0%)'
        }
    }

    function last(event: React.MouseEvent<HTMLAnchorElement>){
        for(var i= 0 ; i < (event.currentTarget.parentNode?.children[1].children.length || 1); i++){
           let div = event.currentTarget.parentNode?.children[1].children[i] as HTMLDivElement

           div.style.transform = 'translateX(-10%)'
        }
    }  

    return(
        <Container>            
            <span>{props.title}</span>
            <Block >
                {props.itens.map( item => ( 
                    <ItemBlock url={item.url} key={item.id} id={item.id.toString()}>
                        <Opacity >
                            <div className="Title">
                                <h3>{item.title.toLocaleUpperCase()}</h3>
                                <strong>{item.category}</strong>
                            </div>
                            <div className="Price">
                                <span>a partir de:</span>
                                <strong>{formatPrice(item.price)}</strong>
                            </div>
                        </Opacity>
                    </ItemBlock>
                 ))}
            </Block>
            {props.itens.map( (item) => {                
                if(item.id === props.itens[0].id){
                    return (
                        <a key={item.id} href={ '#' + item.id } onClick={first}><FaDotCircle /></a>
                    )
                }else{
                    return (
                        <a key={item.id} href={ '#' + item.id } onClick={last}><FaDotCircle /></a>
                    )
                }
                })}
        </Container>
    )
}