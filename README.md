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

npx wdio run wdio.conf.js

## Report

npx allure generate allure-results --clean -o allure-report
npx allure open
