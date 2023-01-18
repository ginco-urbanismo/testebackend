import { Container, Typography } from "@mui/material";

function Instrucoes() {
   return (
      <Container sx={{ my: 3 }}>
         <h1 id="teste-t-cnico-dev-backend">Teste Técnico Dev Backend</h1>
         <p>
            Neste repositório você encontra o enunciado do teste técnico para a vaga de{" "}
            <em>Dev Backend</em> da{" "}
            <a href="https://gincourbanismo.com.br/aginco/2/ha-20-anos-te-ajudamos-a-concretizar-seus-sonhos">
               Ginco
            </a>
            ! Essa é mais uma etapa do nosso processo seletivo, parabéns por chegar até
            aqui.
         </p>
         <blockquote>
            <p>
               Você <em>pode</em> usar o problema descrito aqui para exercitar suas
               habilidades de desenvolvimento, mas a sua solução será avaliada por alguém
               da Ginco <strong>apenas se</strong> você estiver no processo seletivo da
               vaga de <em>Dev Backend</em>.
            </p>
         </blockquote>
         <h2 id="o-problema">O problema</h2>
         <p>
            Um Dev Backend na Ginco terá como uma das principais atividades o consumo e
            criação de APIs para integrar aplicações, por isso o teste envolve a criação
            de uma API básica utilizando Prisma integrada a um DB SQL hospedado no
            PlanetScale (As tabelas do DB estão implementadas e pronto pra uso),
            desenvolvida em NextJS. Caso não conheça essas tecnologias, fique tranquilo,
            no fim dessa documentação colocamos alguns links básicos para referência.
         </p>
         <p>
            Nossa API deve ter a função de inserir feriados nacionais presentes em um JSON
            no DB e também possibilitar a inserção de mais feriados por input via um form
            simples (o forma já está implementado e pronto pra uso).
         </p>
         <p>
            Esse repositório deve ser clonado por você para que você desenvolva com base
            na estrutura de projeto já criada nele. Suas APIs, seguindo a documentação do
            NextJS, devem ser criadas no diretório /src/pages/api.
         </p>
         <p>
            A conexão ao banco de dados deve ter sido enviada previamente para você e você
            deve adicioná-la no arquivo .env na raiz desse repositório. Caso não tenha
            recebido a URL de conexão, entre em contato com o responsável pela sua
            entrevista. Além disso, você receberá também o nome da tabela que você deve
            usar ao manipular o DB.
         </p>
         <h2 id="feriados">Feriados</h2>
         <p>Os feriados nacionais fixos são:</p>
         <ul>
            <li>01/01 Ano Novo</li>
            <li>21/04 Tiradentes</li>
            <li>01/05 Dia do Trabalhador</li>
            <li>07/09 Independência</li>
            <li>12/10 Nossa Senhora Aparecida</li>
            <li>02/11 Finados</li>
            <li>15/11 Proclamação da República</li>
            <li>25/12 Natal</li>
         </ul>
         <h2 id="solu-o">Solução</h2>
         <p>
            Para resolver esse problema você deve desenvolver uma API que permita
            consultar e cadastrar feriados nacionais.
         </p>
         <p>Você deve desenvolver as seguintes funcionalidades:</p>
         <ol>
            <li>
               <p>
                  Inserir todos os feriados presentes no JSON no DB. (Note que o JSON
                  contém os campos: data, nome, tipo, descricao, uf e municipio. Você NÂO
                  DEVE inserir os campos uf e municipio. Insira na tabela apenas os
                  campos: data, nome, tipo e descricao). Você encontrará o JSON{" "}
                  <code>feriados_nacionais_2023.json</code> na raiz do repositório.
               </p>
            </li>
            <li>
               <p>
                  Uma rota que ao ser requisitada, devolva como resposta todos os dados
                  inseridos na tabela e o http status 200.
               </p>
            </li>
            <li>
               <p>Uma rota para consultar feriados, com os seguintes requisitos:</p>
               <p>3.1) A rota deve ter a seguinte estrutura:</p>
               <pre>
                  <code>
                     {" "}
                     localhost:xxxx/api/<span class="hljs-built_in">read</span>?
                     <span class="hljs-built_in">date</span>=yyy-mm-dd
                  </code>
               </pre>
               <p>
                  3.2) Quando receber uma data válida, deve fazer a busca na tabela e
                  retornar status 200 e todos os campos de informação do feriado buscado.
               </p>
               <p>
                  3.3) Quando receber uma data válida, porém não encontrar uma data
                  correspondente na tabela, deve retornar status 202 e o texto: &quot;Essa
                  data não é um feriado&quot;.
               </p>
               <p>
                  3.4) Quando receber uma data inválida, ex: 32-14-2023, deve retornar
                  status: 201 e o texto: &quot;Data invalida, use o formato {"{"}link -
                  api{"}"} ?date=YYYY-MM-DD&quot;
               </p>
            </li>
            <li>
               <p>
                  Uma rota que vai receber um input do formulário acessível na página
                  principal do repositório.
               </p>
               <p>
                  4.1) Esse formulário está configurado para fazer a requisição para o
                  arquivo &quot;criaferiado.js&quot;, localizado no diretório
                  /src/pages/api. Crie sua função dentro desse arquivo.
               </p>
               <p>
                  4.1) A função criada deve inserir o feriado na tabela usando os mesmos
                  campos citados acima. E deve retornar status 201, caso tenha inserido
                  com sucesso na tabela e status 500 caso tenha ocorrido algum erro na
                  inserção. O frontend está configurado para tratar esses status.
               </p>
            </li>
         </ol>
         <p>
            Exemplo - O comportamento ao buscar o feriado do dia 1 de janeiro de 2023,
            para tópico 3, deve ser, como segue:
         </p>
         <code>
            localhost:<span class="hljs-number">3000</span>/api/
            <span class="hljs-built_in">read</span>?
            <span class="hljs-built_in">date</span>=<span class="hljs-number">2023</span>
            <span class="hljs-number">-01</span>
            <span class="hljs-number">-01</span>{"{"}
            <span class="hljs-string">"data"</span>:
            <span class="hljs-string">"2023-01-01T00:00:00.000Z"</span>,
            <span class="hljs-string">"nome"</span>:
            <span class="hljs-string">"Ano Novo"</span>,
            <span class="hljs-string">"descricao"</span>:
            <br />
            <span class="hljs-string">
               "O Ano-Novo ou Réveillon é um evento que acontece quando uma cultura
               celebra o fim de um ano e o começo do próximo. A celebração do evento é
               também chamada Réveillon, termo oriundo do verbo francês réveiller, que em
               português significa DESPERTAR"
            </span>
            `{"}"}`
         </code>
         <h2 id="avalia-o">Avaliação</h2>
         <p>
            Por fim, quando concluir suas implementações, suba um repositório público no
            seu Github e envie o link pelo meio de comunicação pelo qual você notificado
            sobre o teste, informando a conclusão.{" "}
         </p>
         <p>
            Vamos baixar seu repositório e fazer os testes necessários para a avaliação.
         </p>
         <p>
            Esse teste ficará aberto para submissão até dia <code>24/01/2023</code>,
            esperamos que seja tempo suficiente para desenvolver o projeto.
         </p>
         <h2 id="notas-">Notas:</h2>
         <p>
            1) O Prisma já está instalado, configurado, sincronizado e os acessos estão
            gerados, você precisará apenas importar o prisma e prisma client para cada
            API.{" "}
         </p>
         <p>
            2) Caso não tenha experiência em yarn, prisma ou NextJS, aconselhamos que você
            leia os links enviados abaixo antes de iniciar o projeto.{" "}
         </p>
         <p>
            3) Caso desconfigure algo que não consiga reverter, lembre-se que é possível
            baixar novamente o repositório e começar do zero.{" "}
         </p>
         <p>
            4) Conforme documentação do Prisma, lembre-se de se desconectar do banco após
            fazer a requisição.
         </p>
         <p>
            5) Caso não consiga cumprir nenhuma das funcionalidades, não se entristeça,
            não deixe de submeter seu projeto, vamos avaliar o que foi feito, independente
            de estar finalizado ou não.{" "}
         </p>
         <p>
            Deixaremos abaixo alguns materiais para consulta que vão te ajudar a
            desenvolver o projeto, em ordem de relevância:
         </p>
         <p>
            <a href="https://www.prisma.io/docs/getting-started/quickstart">
               Documentação do Prisma (ignore as configurações iniciais, conforme tópico 2
               acima)
            </a>
         </p>
         <p>
            <a href="https://nextjs.org/learn/basics/api-routes/creating-api-routes">
               NextJS: Rotas de APIs (explore outros tópicos da documentação do NextJS em
               caso de dúvidas)
            </a>
         </p>
         <p>
            <a href="https://blog.betrybe.com/desenvolvimento-web/yarn/">
               Yarn: comandos e introdução
            </a>
         </p>
         <p>
            <a href="https://prensa.li/prensa/como-criar-um-sistema-crud-com-o-prisma/">
               Prisma: Como instanciar a classe client e outras dicas
            </a>
         </p>
         <p>
            <strong>Boa sorte!</strong>
         </p>
      </Container>
   );
}

export default Instrucoes;
