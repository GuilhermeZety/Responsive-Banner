import { createServer } from "miragejs";

//retorna função para a criação da FakeApi
export function server(){
    //Cria A Fake Api
    createServer({
  
        //Define as novas rotas
        routes() {
            //define a rota padrão para a FakeApi
            this.namespace = "api";
        
            //define uma rota get para /itens
            this.get("/itens", () => {
                //define o que vai ser retornado quando acessado o get desta rota
                return [
                    {
                        id: 1,
                        category: "Editorias Shop2gether",
                        itens: [
                            {
                                id: 11,
                                title: 'Dia Dos Namorados',
                                category: 'Presentes',
                                price: 69,
                                url: 'https://st4.depositphotos.com/12985790/20642/i/600/depositphotos_206425378-stock-photo-stylish-couple-of-models-in.jpg'          
                            },
                            {
                                id: 12,
                                title: 'Mixed',
                                category: 'Vestidos',
                                price: 559,
                                url: 'https://s3.sa-east-1.amazonaws.com/site2.shop2gether.com.br/testeiras/categorias/testeira_seo_feminino_roupas_shopby_vestidos.jpg'          
                            }, 
                            {
                                id: 13,
                                title: 'Luiza barcelos',
                                category: 'Sandálias',
                                price: 349,
                                url: 'https://s3-sa-east-1.amazonaws.com/site2.shop2gether.com.br/testeiras/categorias/testeira_seo_feminino_calcados_sandalias.jpg'          
                            },                    
                        ]
                    },
                    {
                        id: 3,
                        category: "Novidades",
                        itens: [
                            {
                                id: 21,
                                title: 'Tendência',
                                category: 'All Jeans',
                                price: 279,
                                url: 'https://www.upperbag.com.br/wp-content/uploads/2019/08/IMG-2-3-e1566409801226.jpg'          
                            }, 
                            {
                                id: 22,
                                title: 'Animale',
                                category: 'Animal Print',
                                price: 269,
                                url: 'http://s3-sa-east-1.amazonaws.com/ford-blog/wp-content/uploads/2017/02/animale_resort2017_marinadociati_phpedroloreto_01-1024x614.jpg'          
                            },
                            {
                                id: 23,
                                title: 'Miragem',
                                category: 'Verão',
                                price: 429,
                                url: 'https://s3-sa-east-1.amazonaws.com/site2.shop2gether.com.br/landpage/310820_miragem/03.jpg'          
                            },                   
                        ]
                    },
                ]
            });
            
            //Faz o metodo Post para adicionar novos itens... No futuro
            // this.post("/itens", (schema, request) => {
            //     const data = JSON.parse(request.requestBody)
        
            //     return schema.create('item', data);
            // })    
        },
    });
}
  