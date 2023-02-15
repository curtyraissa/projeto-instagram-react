![Imagem 1](./layout-projeto.png "Imagem 1")

<h1 align="center">Bate Papo UOL </h1>

<p align="justify">Esse desafio, foi desenvolver a aplicação do Bate Papo UOL a partir de um layout, colocando em prática tudo o que aprendi.</p>
<hr/>
✅ Requisitos

- Geral
    - [x]  Você deve criar seu projeto usando o comando que demos do `create-react-app`:
        
        ```bash
        create-react-app nome-do-projeto --template @bootcamp-ra/cra-template-semana1
        ```
        
    - [x]  Por padrão, o `create-react-app` já inicializa o Git dentro da pasta do projeto (é como se você tivesse rodado `git init` lá). Em seguida, crie o projeto também no GitHub e conecte seu projeto local ao GitHub (a entrega será por lá).
    - [x]  O template gerará os arquivos base, incluindo o arquivo `package.json` e `package-lock.json`. Esses arquivos devem estar **sempre** na raiz do repositório no GitHub. Se tiver dentro de uma pasta do repositório, a avaliação vai falhar. Além do bot não aceitar, não é uma boa prática
        - ✅ **Certo** ⇒ `projeto7-instagramreact` > `package.json`
        - ❌ **Errado** ⇒ `projeto7-instagramreact` > outra pasta > `package.json`
    - [x]  Muito cuidado para não committar a `node_modules`. Se ela estiver committada, a avaliação também falhará. Não é boa prática comittar essa pasta no git.
- *Layout*
    - [x]  Você pode utilizar o seu próprio código do Instagram para iniciar o projeto ou utilizar o que nós fornecemos no fim desse enunciado 😃
    - [x]  O *layout* é quase o mesmo do Instagram que vocês fizeram no início do curso! A única diferença é que só há um nome para o usuário com um ícone de lápis depois dele (pode usar o do ion-icons). Consulte o Figma para fazer os ajustes necessários.
        
        ![user.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0343e440-b550-41bc-867f-6a2ac8f7b863/user.png)
        
- CSS e Imagens
    - [x]  Arquivos CSS devem ser colocados na pasta `public` e linkados diretamente no `index.html` da pasta `public`.
    - [x]  Você também deve criar, dentro da `public`, uma pasta `assets` para colocar as imagens.
- Componentes
    - [x]  A página deve ser componentizada em arquivos diferentes, utilizando `import`/`export`:
        - Lista dos componentes que deverão ser feitos
            - `App`
            - `Corpo`
            - `SideBar`
            - `NavBar`
            - `Usuario`
            - `Stories` (onde cada item será um componente diferente, o `Story`)
            - `Posts` (onde cada item será um componente diferente, o `Post`)
            - `Sugestoes` (onde cada item será um componente diferente, o `Sugestao`)
            - Se não entender o que é cada componente, clique aqui 🙂
                
                ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/145d7991-20e6-47a2-ac0f-1775ef9ec439/Untitled.png)
                
    - [x]  Todos os itens repetitivos do projeto devem ser representados como Arrays/Objetos nos componentes e renderizados no JSX usando `map`. No projeto, esses itens são:
        - Os stories (deve ter pelo menos 3 stories)
        - Os posts (deve ter pelo menos 3 posts)
        - As sugestões de seguidores (deve ter pelo menos 3 sugestões)
        - O usuário acima das sugestões (este não é um array, mas os dados devem vir de props)
        - Exemplo
            - Em vez de:
                
                ```jsx
                export default function Lista() {
                	return (
                		<ul>
                			<li>Item 1</li>
                			<li>Item 2</li>
                			<li>Item 3</li>
                		</ul>
                	);
                }
                ```
                
            - Você deve seguir a abordagem de:
                
                ```jsx
                export default function Lista() {
                	const itens = ["Item 1", "Item 2", "Item 3"]
                
                	return (
                		<ul>
                			{itens.map((item) => <li>{item}</li>)}
                		</ul>
                	)
                }
                ```
                
- Dados dinâmicos
    - [x]  O projeto também deverá ter alguns dados dinâmicos que irão mudar na tela. São eles:
        - [x]  Nome de usuário (ao apertar o lápis, aparece um `prompt` para alterá-lo). Se for passada uma string vazia, não atualiza.
        - [x]  Imagem de perfil (ao clicar uma vez na imagem, aparece um `prompt` pedindo novo link). Se for passada uma string vazia, não atualiza.
        - [x]  Salvar o post (ao clicar no ícone de salvar o post, ele deverá ficar preenchido).
            - Caso a postagem já esteja salva, ao clicar no ícone, a postagem deve passar para não salva.
        - [x]  *Like* no post:
            - Ao clicar no ícone do *like* o usuário poderá curtir a postagem. Ou seja, o ícone de coração deverá ficar preenchido e vermelho.
                - Caso a postagem já esteja curtida, ao clicar no ícone, a postagem deve passar para não curtida.
            - Ao clicar na imagem de um post do *feed*, o usuário poderá curtir a postagem, ou seja, o botão do *like* deverá ficar preenchido em vermelho.
                - OBS: assim como no Instagram de verdade, clicar na imagem **NÃO** retira *likes*, apenas adiciona caso já não tenha.
            - Sobre a frase de “Curtido por *fulano* e outras **xxx** pessoas”:
                - O número de *likes* deverá aumentar quando a pessoa der um *like* e diminuir quando retirá-lo.
                - O início da frase “Curtido por *fulano*” pode ter qualquer valor no lugar de *fulano*, não precisa ser o nome do usuário logado nem mudar quando o post for curtido.
    - É avaliado o estado da aplicação. Alguns estados são por post, como salvar post e dar like em post. Por isso, **é necessário adicionar pelo menos 2 posts.**
<hr/>

## 🛠 &nbsp;Skills
<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="52" alt="react logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="js logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" width="52" alt="html5 logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" width="52" alt="css3 logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height="40" width="52" alt="figma logo"   />        
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="52" alt="git logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="40" width="52" alt="github logo" />                                   
</div>
<hr/>

## 🚀 &nbsp;Links

- [Figma](https://www.figma.com/file/TRh4w3iZq7LyjaLig6sCgb/Projeto-Instagram-React?node-id=0%3A1&t=NIcIwF8Vly0kEi0b-0).<br/>
- [Deploy](https://projeto7-instagramreact-self.vercel.app/).<br/>
_

## 💬 &nbsp;Contact
<img align="left" src="https://avatars.githubusercontent.com/curtyraissa?size=100">

Feito por [Raissa Curty](https://github.com/curtyraissa)!

<a href="https://www.linkedin.com/in/raissa-curty/" target="_blank">
    <img style="border-radius:50%;" src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="52" height="40" alt="linkedin logo"  />
  </a>&nbsp;
