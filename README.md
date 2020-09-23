  <h1 align="center"Pauta Aberta</h1>

<br />
<p align="center">
   <img src="/imgs_readme/1.png" alt="1" width="200" height="150">
      <br />
    <br />
  </p>
</p>


Este é um sistema web de gerenciamento e otimização do trabalho do advogado.

## Rodando o projeto com o comando `yarn`

Após clonar o projeto, basta rodar no comando abaixo no seu terminal. Este comando 
irá carregar todas as dependencias do projeto

### Rodando o json-server + frontend `yarn staging`

Este projeto foi feito usando dados mockados com json-server, 
você pode com apenas um comando rodar os dois, tanto json-server quanto o frontend da aplicação

### Rodando os scripts separadamente => json-server `yarn dev:server`

Você também pode inicializar o json-server separado da aplicação frontend 
com o comando acima

### Rodando os scripts separadamente -> frontend `yarn dev:front`

o comando acima roda somente aaplicação frontend sem os dados mockados, porem essa opção 
não reflete o melhor cenário pois ainda falta fazer tratamentos de exceção no front end em casos de 
nao conexão com a api.

## Desafios do projeto 

pra mim o maior desafio foi o fato de escreverem typescript, estou estudando essa tecnologia a aproximadamente um mês
mas foi bom para praticar em um desafio real os conhecimentos adquiridos e consolidar. Além disso nunca trabalhei com 
ant-design e iniciei o projeto usando styled-components, porém consegui encapsular o design e alterar as partes que me era 
conveniente.
