# Desafio Web WDIO - Vinicius Martins

## Objetivo
Automatizar testes das funcionalidades **Login** e **Carrinho** do site (https://www.saucedemo.com/), utilizando WebdriverIO e padrão Page Object.

## Tecnologias
- JavaScript (Node.js):	Linguagem base do projeto
- WebdriverIO:	Framework de automação web
- Mocha:	Framework de testes
- Allure Reporter:	Geração de relatórios e evidências
- Git + GitHub:	Versionamento e hospedagem do código
- VS Code:	IDE utilizada no desenvolvimento

## Configuração

 - npm install
 - npm install webdriverio --save
 - npm i @wdio/cli --save
 - npm i @wdio/allure-reporter --save-dev
 - npm i allure-commandline --save-dev
 - npm install @wdio/junit-reporter --save-dev

## Estrutura


desafio-web-wdio-vinicius-martins/
│
├── test/
│   ├── specs/
│   │   ├── login.spec.js       # Cenários de Login
│   │   └── cart.spec.js        # Cenários de Carrinho
│   │
│   └── pageobjects/
│       ├── login.page.js       # Page Object do Login
│       └── inventory.page.js   # Page Object da tela de produtos
│
├── wdio.conf.js                # Configuração principal do WebdriverIO
├── package.json
└── README.md

## Execução

npx wdio run wdio.conf.js // npm run wdio

## Report

npx allure generate allure-results --clean -o allure-report // npm run report
npx allure open allure-report // npm run open:report

## Casos de Teste: Login e Adicionar item no carrinho

# Login:

CT01 - Login com credenciais válidas
Pré-condição: A aplicação está acessível em https://www.saucedemo.com/

1. Acessar o site
2. Inserir usuário standard_user
3. Inserir senha secret_sauce
4. Clicar em “Login”	

Resultado Esperado: O usuário é redirecionado para a página de produtos (/inventory.html) e o título “Products” é exibido
---------------------------------------------------------------------------------------------------------------------------------------
CT02 - Login com senha inválida	
Pré-condição: A aplicação está acessível	

1. Inserir usuário standard_user
2. Inserir senha incorreta (ex: senha_errada)
3. Clicar em “Login”	

Resultado Esperado: É exibida uma mensagem de erro: “Epic sadface: Username and password do not match any user in this service”
---------------------------------------------------------------------------------------------------------------------------------------
CT03 - Login com campos vazios	
Pré-condição: A aplicação está acessível	
1. Deixar os campos “Username” e “Password” em branco
2. Clicar em “Login”	
Resultado Esperado: É exibida uma mensagem de erro: “Epic sadface: Username is required”
---------------------------------------------------------------------------------------------------------------------------------------
CT04 - Login com usuário bloqueado	
Pré-condição: A aplicação está acessível	

1. Inserir usuário locked_out_user
2. Inserir senha secret_sauce
3. Clicar em “Login”	

Resultado Esperado: É exibida uma mensagem de erro: “Epic sadface: Sorry, this user has been locked out.”
---------------------------------------------------------------------------------------------------------------------------------------

# Adicionar item no carrinho:

CT05 - Adicionar primeiro item ao carrinho	
Pré-condição: Usuário logado com sucesso	

1. Clicar no botão “Add to cart” do primeiro produto da lista	

Resultado Esperado: O contador do carrinho é exibido com o número 1
---------------------------------------------------------------------------------------------------------------------------------------
CT06 - Validar acesso ao carrinho após adicionar item	
Pré-condição: Usuário logado e item adicionado	

1. Clicar no ícone do carrinho no topo da tela	

Resultado Esperado: O sistema redireciona para /cart.html e exibe o item adicionado
---------------------------------------------------------------------------------------------------------------------------------------
CT07 - Remover item do carrinho	
Pré-condição: Usuário logado e com item no carrinho	

1. Acessar o carrinho
2. Clicar em “Remove”	

Resultado Esperado: O item é removido e o contador do carrinho desaparece
---------------------------------------------------------------------------------------------------------------------------------------
CT08 - Adicionar múltiplos itens ao carrinho	
Pré-condição: Usuário logado	

1. Adicionar dois ou mais produtos
2. Verificar o contador do carrinho	

Resultado Esperado: O contador exibe o número correspondente à quantidade de itens adicionados

## Jenkins

login: vcardoso
senha: inmetrics

NodeJS Plugin → para gerenciar versões do Node

Git Plugin → para clonar repositórios

Pipeline Plugin → para criar pipelines declarativos