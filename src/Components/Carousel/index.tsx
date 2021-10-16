//Utilidade para formatar number para Real 
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
    return(
        <Container>            
            <span>{props.title}</span>
            <Block>
                {props.itens.map( item => ( 
                    <ItemBlock url={item.url} key={item.id}>
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
        </Container>
    )
}