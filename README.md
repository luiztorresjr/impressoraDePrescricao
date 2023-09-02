#Impressora de Prescricao

###### essa aplicacao tem como objetivo criar uma aplicação que gera um QR Code
###### e um pdf de um modelo de prescrição.

###### Esse modelo contem :
* QR Code
* A frase Prescrição nº com o numero da prescrição
* Paciente
* setor
* numero do atendimento
* horario
* uma lista de medicacao

## Bloco de instruções de teste
1. Na raiz da pasta abra o terminal ou utilizando o visual studio code clique em ver terminal 
2. digite o comando `npm install` para instalar todas as dependencias necessarias
3. digite o comando `npm run dev`
4. No [Postman](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjX8qH0houBAxWspJUCHZc8D3UQFnoECB8QAQ&url=https%3A%2F%2Fwww.postman.com%2F&usg=AOvVaw05sjAjE_hbftSn2Ii8YG6N&opi=89978449), ou [Insomnina](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiambCPiIuBAxUpJLkGHQz5DJAQjBB6BAgfEAE&url=https%3A%2F%2Finsomnia.rest%2Fdownload&usg=AOvVaw1RnqoNjpl_ii8nX1a3haYy&opi=89978449)
    4. Caso precise de ajuda para utilizar [Alura] (https://www.alura.com.br/artigos/postman-como-instalar-dar-seus-primeiros-passos)
5. Abrir o Postman crie uma nova coleção e em seguida  uma nova requisição 

###### As duas opção de serviços criados são 
* Ver todas as requisições utilizando um GET no http://localhost:3000/prescricoes
* Imprimir a prescrição atraves de um GET passando o id http://localhost:3000/prescricoes/imprimir/PRESC1-621

###### Por fim sera criado a pasta output e sera criado um arquivo pdf