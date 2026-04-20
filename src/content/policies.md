![Painel Políticas Públicas](/assets/images/projects/policies/inicio.png) *Protótipo do Painel Políticas Públicas.*

# Contextualização

A **UrbVerde** é uma plataforma digital que reúne e democratiza dados socioambientais para apoiar a formulação de políticas públicas e ampliar o acesso da sociedade a informações ambientais de qualidade. O **Painel Políticas Públicas** é um painel adicional da plataforma UrbVerde, construído em parceria com os gestores municipais do ABC Paulista, desenvolvido especificamente para **apoiar gestores municipais na construção de planos climáticos locais**.

Como **UX Lead** e coordenador do time de tecnologia, conduzi o **discovery com o objetivo de ser rápido e eficiente**, garantindo consistência com a UrbVerde já refatorada.

# Problema identificado

Após a consolidação da [UrbVerde como produto escalável](/project/urbverde), surgiu a necessidade de expandir sua aplicabilidade diretamente para **gestores municipais** de forma que **subsidie a construção de planos de ação climática (PLACs)**, permitindo que os planos fossem não apenas criados, mas também acompanhados e monitorados em uma interface intuitiva.

> Os planos são **documentos densos e de difícil navegação**, tornando o acesso aos dados (como metas, indicadores e ações) um processo pouco eficiente. A proposta do projeto é **transformar essa complexidade em uma experiência acessível** na UrbVerde.

## Metodologia utilizada

Adotamos o **Double Diamond** de forma enxuta, para realizar um **discovery mais rápido**, priorizando as principais atividades e dinâmicas. Essa decisão foi fundamental para entregar dentro do prazo sem perder a profundidade necessária.

![Fluxo do discovery estruturado em mural.](/assets/images/projects/policies/double-diamond.png) *Metodologia Double Diamond, utilizada no desenvolvimento do projeto.*

# Discovery
O processo de discovery foi **realizado por uma equipe maravilhosa de quatro pessoas**. Atuei como coordenador das etapas e facilitador das dinâmicas.

![Cronograma inicial do discovery](/assets/images/projects/policies/cronograma.png) *Cronograma inicial do discovery.*

## Usuário final
- **Gestores públicos municipais do ABC Paulista:** responsáveis pela formulação, acompanhamento e revisão de políticas e planos climáticos locais. Possuem pouca familiaridade com ferramentas de Sistema de Informação Geográfica (como é o caso da UrbVerde), mas **precisam de informações de fácil leitura** para subsidiar decisões estratégicas.

## Objetivo principal

> Criar um painel de políticas públicas **intuitivo e alinhado à linguagem dos gestores**, para auxiliar na construção de planos climáticos locais e políticas públicas.

## Wireframe

Partimos de um **wireframe inicial** aproveitando os padrões já estabelecidos na UrbVerde, criando uma versão inicial do painel.

![Wireframe inicial do painel de políticas públicas](/assets/images/projects/policies/wireframe.png) *Wireframe inicial do painel de políticas públicas.*
> Passo importante para todos estarem alinhados com a arquitetura da informação do sistema.

## Pesquisa secundária

Analisamos **PLACs de São Paulo, Belo Horizonte, João Pessoa, Salvador, Fortaleza, Rio de Janeiro e Curitiba.**

![Exemplo do benchmarking dos PLACs](/assets/images/projects/policies/benchmarking.png) *Pesquisa secundária dos planos climáticos locais.*

> Todos apresentavam estrutura de informações semelhante de **eixos, ações, indicadores, metas e ODS relacionados**, linguagem que deveríamos abordar no painel.

## Dinâmica "How Might We?"

A dinâmica, por meio de perguntas, alinhou a equipe sobre **como deveriamos disponibilizar as informações no painel**, depois foram agrupadas e convergidas, considerando as que **entregam mais resultado com menos esforço de desenvolvimento**.

![Foto da dinâmica "How Might We?"](/assets/images/projects/policies/how-might-we.png) *Dinâmica "How Might We? realizada no FigJam".*

> Uma decisão importante foi adicionar **selos gamificados**, para engajar gestores e incentivar o cumprimento das metas.

## Reuniões com equipes internas

Realizamos reuniões constantes com as **equipes de dados**, alinhando expectativas de como as informações deveriam ser apresentadas.

> Foi essencial garantir que o painel refletisse a **linguagem do usuário** e alinhar com cada equipe que produz e interpreta os dados.

## Testes

Validamos em reuniões internas e com **gestores do ABC Paulista**, com cerca de 30 participantes em cada.

O feedback foi **extremamente positivo**, elogiando a **linguagem alinhada aos PLACs**, familiar aos gestores.

> Solicitaram a criação de um **panorama geral que resuma todas as informações** para uma consulta rápida.

# Principais decisões de design

## Adoção de uma linguagem comum para os gestores no painel.

A linguagem dos PLACs (Planos de Ação Climática) utiliza termos específicos como **eixos temáticos, ações, indicadores, metas e ODS relacionados** - vocabulário já familiar aos gestores municipais. Isso se tornou algo natural e mais fácil de entender todo o painel de forma rápida.
Um desafio concretizado com sucesso também foi adicionar isso **internamente na plataforma com a arquitetura das informações da UrbVerde**.

## Reutilização dos **tokens, fontes e componentes da UrbVerde** para manter a consistência.

## Criação de um **botão de alternância entre painéis** no menu lateral.

O botão no menu lateral facilitou a navegação entre os painéis.

![Botão de alternância entre painéis](/assets/images/projects/policies/button.png) *Interface do menu lateral com botão de alternância.*

## Inclusão do **Panorama Geral solicitado pelos gestores**.

O panorama trouxe uma visão geral das informações, facilitando a compreensão rápida do gestor.

![Panorama geral dos indicadores](/assets/images/projects/policies/panorama-geral.png) *Visão geral dos indicadores do painel.*

## Desenvolvimento **selos gamificados** vetoriais para os eixos temáticos.

Os selos engajam os gestores e incentivam o cumprimento das metas.

![Selos gamificados](/assets/images/projects/policies/selos.png) *Selos gamificados para os eixos temáticos.*

## Inserção da **Mari, mascote da UrbVerde** no painel.

A Mari trouxe uma identidade visual única e marcante para o painel.

![Mari, mascote da UrbVerde](/assets/images/projects/policies/mari.png) *Mascote Mari integrada ao painel.*

# Desenvolvendo a ideia

## Protótipo de alta fidelidade

Com base nas decisões de design e nos insumos obtidos no discovery, foi desenvolvido o protótipo de alta fidelidade, reutilizando componentes do design system e tokens para **garantir consistência visual e facilitar o desenvolvimento do código futuro**.

![Protótipo final do painel de indicadores](/assets/images/projects/policies/inicio.png) *Protótipo do panorama de indicadores, solicitado pelos gestores.*
![Protótipo final de eixos temáticos](/assets/images/projects/policies/inicio-2.png) *Protótipo dos eixos temáticos.*

## Desenvolvimento do código

O desenvolvimento do código foi acelerado pela **reutilização de componentes do design system e tokens**, concluído em cerca de um mês. Coordenei o time de desenvolvedores, além de contribuir diretamente no código do [GitHub](https://github.com/UrbVerde/urbverde-ui).

![Plataforma Políticas Públicas no ar](/assets/images/projects/policies/dev.gif) *Plataforma Políticas Públicas no ar. Acesse em [www.urbverde.com](https://www.urbverde.com).*

# Impactos

O Painel Políticas Públicas foi entregue como uma solução **intuitiva, prática e gamificada** para gestores do ABC Paulista, durante a elaboração de planos climáticos locais.

>> *"Ter uma plataforma de monitoramento é um avanço enorme. **Gostei muito do panorama do ABC** e da importância dos dados em formato cartográfico."* - Sandra, coordenadora do Consórcio ABC Paulista.
>> *"É incrível ver uma cidade média como a nossa **ter acesso a uma plataforma tão robusta**."* - Gisele, gestora de Rio Grande da Serra.

![Evento de apresentação com os gestores](/assets/images/projects/policies/evento-1.png) *Evento de apresentação do painel para os gestores do ABC Paulista.*
![Evento de apresentação com os gestores](/assets/images/projects/policies/evento-2.jfif) *Evento de apresentação do painel para os gestores de Diadema-SP.*
