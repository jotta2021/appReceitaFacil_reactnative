# README - Receita Fácil App

![Receita Fácil Logo](app-logo.png)

Bem-vindo ao Receita Fácil App! Este é um aplicativo desenvolvido em React Native que permite aos usuários acessar e compartilhar receitas, assistir a vídeos relacionados e muito mais. Este documento irá guiá-lo através dos principais recursos do aplicativo, instruções de configuração e como contribuir para o desenvolvimento.
<div style={{display:flex;}}>


   <image src='https://github.com/jotta2021/appReceitaFacil_reactnative/blob/master/Imagem%20do%20WhatsApp%20de%202023-10-22%20%C3%A0(s)%2021.36.14_201bfabf.jpg?raw=true'/>
    <image src='https://github.com/jotta2021/appReceitaFacil_reactnative/blob/master/Imagem%20do%20WhatsApp%20de%202023-10-22%20%C3%A0(s)%2021.36.12_a4622697.jpg?raw=true'/>
       <image src='https://github.com/jotta2021/appReceitaFacil_reactnative/blob/master/Imagem%20do%20WhatsApp%20de%202023-10-22%20%C3%A0(s)%2021.36.13_a195a92c.jpg?raw=true'/>
       <image src='https://github.com/jotta2021/appReceitaFacil_reactnative/blob/master/Imagem%20do%20WhatsApp%20de%202023-10-22%20%C3%A0(s)%2021.36.13_3025cb7c.jpg?raw=true'/>
       
       
</div>

## Visão Geral

O Receita Fácil App é uma aplicação móvel que faz uso do JSON Server e Axios para consumir dados de uma API. Os principais recursos do aplicativo incluem:

1. **Visualização de Receitas**: Os usuários podem navegar e visualizar uma ampla variedade de receitas disponíveis no aplicativo.

2. **Assistir a Vídeos de Receitas**: Os usuários podem acessar vídeos no YouTube relacionados a receitas específicas.

3. **Compartilhamento de Receitas**: Os usuários podem compartilhar suas receitas favoritas com amigos e familiares fora do aplicativo.

4. **Lista de Favoritos**: Os usuários podem adicionar ou remover receitas de sua lista de favoritos.

5. **Pesquisa de Receitas**: Os usuários podem pesquisar receitas por nome.

## Pré-requisitos

Antes de começar, certifique-se de que você tenha instalado o seguinte:

- Node.js
- Yarn (ou NPM)
- React Native
- JSON Server

## Configuração do Projeto

Siga estas etapas para configurar o projeto em sua máquina:

1. Clone o repositório Receita Fácil App:

   ```shell
   git clone https://github.com/seu-usuario/receita-facil-app.git
   cd receita-facil-app
   ```

2. Instale as dependências:

   ```shell
   yarn install
   ```

3. Inicie o JSON Server para simular o banco de dados online:

   ```shell
   json-server --watch db.json --port 3000
   ```

4. Inicie o aplicativo em um emulador ou dispositivo:

   ```shell
   npx react-native run-android
   # ou
   npx react-native run-ios
   ```

## Contribuindo

Se você deseja contribuir para o desenvolvimento do Receita Fácil App, siga estas etapas:

1. Fork o repositório original no GitHub.

2. Clone seu fork para sua máquina.

3. Crie uma nova branch para suas alterações:

   ```shell
   git checkout -b minha-feature
   ```

4. Faça suas alterações e commit:

   ```shell
   git commit -m "Adicionando nova funcionalidade"
   ```

5. Envie suas alterações para seu fork:

   ```shell
   git push origin minha-feature
   ```

6. Crie um pull request no repositório original para revisão.

