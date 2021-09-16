# Ioasys Book📚

<div>
  <img src="https://user-images.githubusercontent.com/33927459/133543690-77ad9c69-6c71-45fa-927d-b8d1fcb1f1d4.png" width='300' />
  <img src="https://user-images.githubusercontent.com/33927459/133543796-b9a2cef2-5f8d-420a-a8d5-2e88f8043c88.png" width='300' />
</div>
<div>
  <img src="https://user-images.githubusercontent.com/33927459/133543840-5163c128-cf62-4f63-987c-f0d4c8c6af1b.png" width='300' />  
  <img src="https://user-images.githubusercontent.com/33927459/133543882-b9838bd5-ace9-4bea-baf1-46903cf29016.png" width='300' />
</div>
  <img src="https://user-images.githubusercontent.com/33927459/133543922-7d9973c0-dcca-4a92-8491-cbd416ff3a6a.png" width='300' />

📜  Projeto trata-se de um app que lista, filtra e busca livros.

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
