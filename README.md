# Ioasys Book📚

<img src='https://bytebucket.org/ioasys/books-react-native/raw/de6de20784a3329b8a222000f046921545f3c6be/logo_ioasys.jpeg' />

📜  Projeto trata-se de um app que lista, filtra e busca livros. O projeto foi feito como um teste técnico para a empresa ioasys da vaga de desenvolvedor mobile React Native

## 🖌 Ilustração

A ilustração pega como referência foi do <a href="https://www.figma.com/file/JRUQaA8sZ9PMiu76FcfvNG/Desafio-React-Native%3A-ioasys-books?node-id=0%3A1" target="_blank"> Figma</a> disponibilizada pela Ioasys

## Libs

O meu objetivo no projeto era de deixar o mais clean possível, fazendo o máximo de coisas possíveis na mão sem necessidade de uma lib de terceiros.

As libs usadas são:

- `@react-native-async-storage/async-storage:` Para armazenarmos informações localmente no localStorage

- `@react-navigation/native:` Para fazermos navegação no projeto

- `@react-navigation/native-stack:` Para usarmos o tipo `stack` da navegação

- `axios:` Para fazermos requisições ao servidor

- `react-native-svg:` Para conseguirmos usar SVG no projeto

- `styled-components:` Para facilitar e organizar os estilos do projeto, criando components personalizados

## 💻 Rodando o app

Para rodar o projeto você só precisa baixar todas as dependências e executar no device que desejado

```sh
# Baixa todos os pacotes
yarn

# Roda o projeto no device Android
yarn android

# IMPORTANTE: Antes de rodar no IOS você precisa baixar as dependências do PODFILE
cd ios && pod install && cd ..

# Roda o projeto no device IOS
yarn ios
```