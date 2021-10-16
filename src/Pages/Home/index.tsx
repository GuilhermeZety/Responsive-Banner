//react
import { useEffect, useState } from "react";

//fake api
import { api } from "../../services/api";
import { server } from "../../services/server";

//components
import { Carousel } from "../../Components/Carousel";
import { Container } from "./styles";

/*Propriedades Item*/
interface Item{
    id: number;
    title: string;
    url: string;
    price: number;
    category: string;
}

//Propriedades Item e Categoria vinda da FakeApi
interface ItemCategory{
    id: number;
    category: string,
    itens: Item[]
}

//Rota Home
export function Home() {    
    // cria estado De ItemCategory, para receber vetor da FakeApi
    const [itensCategory, setItensCategory] = useState<ItemCategory[]>([])
    
    useEffect(() => {
        //faz a criação da FakeApi
        server();
        
        //Pega os itens da FakeApi
        api.get('/itens').then(response => {setItensCategory(response.data as ItemCategory[])})
    }, []);

    return (
        <Container>
            {itensCategory.map(itemCategory => (                
                <Carousel key={itemCategory.id} title={itemCategory.category} itens={itemCategory.itens}/>     
            ))}    
        </Container>
    )
}