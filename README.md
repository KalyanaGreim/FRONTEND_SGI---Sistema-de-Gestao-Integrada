![sgi_map](https://user-images.githubusercontent.com/89491522/142787613-b11d568e-c8a6-46c6-bda1-9caa10009693.png)
Plano do projeto:

1. Introdução
Você está prestes a entrar para o time de Desenvolvedores da DEVin Corp. Para concretizar a
sua contratação, você deverá resolver um desafio utilizando React. O time de recrutamento
necessita que você crie uma aplicação protótipo para o gerenciamento de empresas e produtos,
chamada Sistema de gestão integrada - SGI.
2. Requisitos da Aplicação
A aplicação que deverá ser realizada individualmente, deve contemplar os seguintes requisitos:
● Uma página de login contendo um campo de email e senha. No evento de onSubmit,
validar se os campos foram preenchidos: E-Mail (obrigatório) e Senha (obrigatório). Ao
validar os campos de input, o usuário é redirecionado para a tela de Mapa;
● Uma página de cadastro de nova empresa, contendo os campos: razão social, nome
fantasia, cnpj, e-mail, cep, endereço, número, bairro, cidade, complemento, latitude e
longitude; Todos os campos são obrigatório, exceto o campo complemento (validar no
método onSubmit). Ao cadastrar uma nova empresa, mostrar uma mensagem de
feedback de empresa cadastrada com sucesso (tratar o método onSubmit com
Try/Catch).
● Uma página de cadastro de produto, contendo os campos url do produto, nome do
produto, preço unitário, descrição (<textarea/>) , fornecedor do produto (<select />) e
grupo (<select />) . Ao cadastrar um novo produto, mostrar uma mensagem de feedback
1
de produto cadastrado com sucesso (tratar o método onSubmit com Try/Catch). As
opções do select de grupo e fornecedor devem ser preenchidas de acordo com as rotas
/categorias e /fornecedores
● Uma tela de mapa, contendo um Mapa centralizado e com marcadores de todas as
empresas cadastradas no sistema (usar a latitude e longitude da empresa para definir a
localização no mapa).
● Uma implementação extra por parte do aluno: Ex: uma tela de cadastro de fornecedores,
uma tela de listagens de produtos, etc ....
