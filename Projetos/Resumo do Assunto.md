Guia de Revisão Final: Certificação GitHub Foundations (GH-900)

Bem-vindos a esta expedição pelo vasto e pulsante ecossistema do desenvolvimento moderno. Observem com atenção: o GitHub não é apenas uma ferramenta, mas um habitat vivo onde ideias migram de mentes criativas para a realidade digital. Como exploradores em busca da certificação GH-900, nossa jornada será guiada pela relevância de cada espécie de funcionalidade, priorizando aquelas que sustentam a vida e a ordem neste bioma tecnológico.


--------------------------------------------------------------------------------


1. Domínio 1: Understand Git and GitHub Basics (25-30%)

Neste território primordial, encontramos as raízes de toda a colaboração. Sem a estrutura do controle de versão, o caos reinaria e o progresso seria devorado pela confusão das mutações desordenadas.

1.1. Fundamentos de Version Control e Git

* Hook: Imagine uma espécie tentando evoluir sem memória. Cada erro seria fatal e cada sucesso, irrepetível. O Version Control é a memória evolutiva do código, permitindo rastrear cada mudança e reverter para estados seguros se um predador (bug) surgir.
* Conceito: O Git é o mecanismo interno, uma ferramenta distribuída que vive na máquina local do explorador. O GitHub é o habitat social, a plataforma em nuvem onde essas memórias são compartilhadas, protegidas e integradas em escala global.
* Aplicação Prática:
  * Repositories: O ninho onde o projeto reside.
  * Commits: Instantâneos fotográficos que registram uma mudança específica no tempo.
  * Branches: Trilhas divergentes que permitem experimentação sem corromper o tronco principal (Main branch).
* Exam Golden Tip: O exame testará sua clareza entre a ferramenta local e o habitat social. Lembre-se: o Git funciona de forma isolada; o GitHub é o ecossistema que permite a simbiose coletiva e o gerenciamento centralizado.

1.2. Working with GitHub & GitHub Flow

* Hook: Para que uma colônia prospere, é necessário hierarquia e um ciclo vital rítmico.
* Conceito: A organização divide-se em Personal Accounts (indivíduos), Organizations (grupos colaborativos) e Enterprise (grandes ecossistemas que exigem governança e escala).
* Aplicação Prática:
  * GitHub Flow: O ciclo natural de vida. Começa com a criação de uma Branch, seguida de Commits, a abertura de um Pull Request, a fase de discussão e Review e, finalmente, o Merge.
  * Markdown: A linguagem de sinais da floresta. Usada em Issues e PRs para clareza: # para cabeçalhos, - [ ] para checklists e o poder dos Slash Commands (/) para inserir rapidamente templates ou realizar ações sem sair do campo de texto.
  * Interfaces: O GitHub Desktop oferece uma visão visual para novos exploradores, enquanto o GitHub Mobile permite monitorar a saúde do habitat em movimento.
* Exam Golden Tip: Decore a sequência exata do GitHub Flow. O Pull Request é o coração da colaboração e deve ocorrer obrigatoriamente antes do Merge, permitindo que outros membros da espécie revisem o novo DNA.


--------------------------------------------------------------------------------


2. Domínio 2: Working with GitHub Repositories (10-15%)

A anatomia de um repositório saudável revela sua capacidade de sobrevivência. Um habitat bem estruturado atrai os melhores colaboradores.

2.1. Estrutura e Arquivos Essenciais

* Hook: Um território sem marcações claras afasta aliados e confunde forasteiros, impedindo a polinização cruzada de ideias.
* Conceito: Arquivos específicos funcionam como leis fundamentais e sinalizações de governança.

Arquivo	Função no Habitat
README	O cartão de visitas; descreve o propósito e como interagir com o projeto.
LICENSE	Essencial para o ecossistema Open Source; define as regras legais de uso e predação.
CONTRIBUTING	O guia de etiqueta; explica como novos membros podem ajudar o projeto a crescer.
CODEOWNERS	Identifica os guardiões responsáveis; automatiza quem deve revisar mudanças em áreas específicas.
SECURITY	O canal de emergência; instrui como reportar vulnerabilidades de forma privada, sem causar pânico na colônia.

* Aplicação Prática: O uso de Templates permite clonar estruturas de sucesso instantaneamente. Estratégias de Branching bem definidas garantem que o fluxo de trabalho seja previsível e seguro.
* Exam Golden Tip: Saiba o papel do CODEOWNERS. Ele não apenas informa, mas aciona automaticamente pedidos de Review para os guardiões designados quando arquivos sob sua proteção são alterados.

2.2. Insights e Métricas do Repositório

* Hook: Como saber se uma espécie está em extinção ou em plena expansão?
* Conceito: Ferramentas como Repository Insights, Stars e Dependency Insights monitoram a saúde, popularidade e os recursos externos dos quais o projeto depende.
* Exam Golden Tip: O Dependency Insights é vital para a sobrevivência; ele revela vulnerabilidades ocultas em códigos de terceiros que sua "espécie" consome, permitindo defesas proativas.


--------------------------------------------------------------------------------


3. Domínio 3: Collaborate Using GitHub (10-15%)

A cooperação é a força mais poderosa da natureza. Ferramentas de diálogo garantem que a colônia solucione problemas e evolua em harmonia.

3.1. Ferramentas de Colaboração

* Hook: Um ruído excessivo na selva impede a comunicação. É preciso filtrar o sinal do barulho.
* Conceito: Issues rastreiam tarefas e bugs; Pull Requests propõem mudanças tangíveis; Discussions servem como o fórum social para ideias abstratas que ainda não são código.
* Aplicação Prática: Vincular Pull Requests a Issues (ex: "Closes #42") permite que a linhagem do problema seja encerrada automaticamente no Merge. O sistema de Notifications deve ser configurado para evitar a fadiga sensorial do explorador.
* Exam Golden Tip: Use Discussions para conversas comunitárias e fóruns de Q&A. Elas vivem separadas do fluxo de trabalho do código para manter o foco no desenvolvimento.

3.2. Documentação e Compartilhamento

* Hook: Conhecimento que não é compartilhado se perde no tempo.
* Conceito: Gists para fragmentos rápidos de código; Wikis para documentação enciclopédica; GitHub Pages para hospedar sites diretamente de um repositório.
* Exam Golden Tip: Diferencie Gists de Repositories. Gists são ideais para compartilhar um único arquivo ou script, podendo ser públicos ou secret, mas carecem da estrutura de governança de um repositório completo.


--------------------------------------------------------------------------------


4. Domínio 4: Apply Modern Development Practices (10-15%)

A automação e a inteligência artificial são o ápice da evolução, permitindo que a colônia execute tarefas complexas com gasto energético mínimo.

4.1. Automação com GitHub Actions

* Hook: Processos manuais são lentos e propensos a erros. A natureza automatiza o batimento cardíaco para que possamos focar na caça.
* Conceito: GitHub Actions permite o CI/CD (Integração e Entrega Contínua), disparando fluxos de trabalho automáticos baseados em eventos.
* Aplicação Prática: Para ativar a automação, o explorador deve criar arquivos de configuração em sintaxe YAML dentro do diretório específico .github/workflows. Lá, definem-se os Triggers (como um push) e os Jobs que a máquina deve realizar.
* Exam Golden Tip: Foque no YAML e no diretório .github/workflows. O exame buscará saber se você entende que as automações são baseadas em eventos que ocorrem dentro do habitat.

4.2. GitHub Copilot e IA

* Hook: Um simbionte que sussurra as rotas mais rápidas durante o desenvolvimento.
* Conceito: O GitHub Copilot utiliza IA para sugerir código. Inclui o Agent Mode para tarefas complexas e suporte a múltiplos modelos de linguagem.
* Planos e Espécies:
  * GitHub Copilot for Individuals: Para o explorador independente.
  * GitHub Copilot Business: Para colônias organizadas que precisam de gestão centralizada.
  * GitHub Copilot Enterprise: Para ecossistemas vastos com personalização e segurança avançada.

4.3. Ambientes de Desenvolvimento

* Hook: Às vezes, o explorador precisa de um abrigo instantâneo em qualquer lugar do mundo.
* Conceito: GitHub Codespaces oferece um ambiente completo na nuvem via dev containers. Diferencia-se do github.dev, que é apenas um editor visual leve no browser.
* Exam Golden Tip: Pressionar a tecla . (ponto) em qualquer repositório abre o github.dev. Se precisar de um terminal, compilação de código ou poder de processamento, você deve migrar para o Codespaces.


--------------------------------------------------------------------------------


5. Domínio 6: Understand Privacy, Security, and Administration (10-15%)

A sobrevivência exige defesas impenetráveis. Proteger o núcleo do ecossistema contra predadores é a maior prioridade estratégica.

5.1. Segurança de Conta e Acesso

* Hook: Um ninho sem proteção atrai invasores. A identidade é a primeira linha de defesa.
* Conceito: O uso de 2FA e Passkeys protege a entrada. Para grandes organizações, os Enterprise Managed Users (EMUs) permitem que as identidades sejam sincronizadas diretamente de um provedor externo (IdP), garantindo que a empresa, e não o indivíduo, tenha a posse definitiva da conta.
* Exam Golden Tip: EMUs são a solução de arquitetura para a "Grande Migração" corporativa. Eles permitem o provisionamento automático de usuários e garantem que o acesso seja revogado instantaneamente se um membro deixar a colônia.

5.2. Proteção e Governança

* Hook: Certas partes do DNA são preciosas demais para sofrerem mutações sem supervisão rigorosa.
* Conceito: Branch Protection Rules são as leis que impedem o Merge sem revisões aprovadas ou testes de status bem-sucedidos. Além disso, existe o Organization-wide Copilot policy management, onde administradores controlam globalmente como a IA interage com o código da colônia.
* Exam Golden Tip: Para garantir que o código seja revisado por pelo menos uma pessoa antes de entrar na Main branch, a resposta é sempre configurar uma Branch Protection Rule.


--------------------------------------------------------------------------------


6. Domínio 5: Manage Projects with GitHub (5-10%)

Organização visual permite que a colônia visualize o futuro e rastreie o progresso da construção em tempo real.

6.1. GitHub Projects

* Hook: Observar o movimento coordenado das formigas revela um plano mestre.
* Conceito: O GitHub Projects oferece layouts como Board (Kanban) e Table. Utiliza Labels para classificar e Milestones para marcar grandes conquistas temporais.
* Aplicação Prática: O uso de Saved Replies acelera a comunicação repetitiva, enquanto o Project Insights gera gráficos de burndown para monitorar a velocidade da equipe.
* Exam Golden Tip: Milestones são vinculados a Issues ou Pull Requests e servem para agrupar tarefas sob um prazo ou objetivo comum.


--------------------------------------------------------------------------------


7. Domínio 7: Explore the GitHub Community (5-10%)

Por fim, olhamos para a grande rede que conecta todos os habitats: a comunidade global e o modelo de compartilhamento.

7.1. Engajamento e Comunidade

* Hook: No mundo aberto, a sobrevivência de um beneficia a todos através do conhecimento compartilhado.
* Conceito:
  * GitHub Sponsors: Uma forma de nutrir financeiramente os mantenedores.
  * GitHub Marketplace: Uma feira de extensões para turbinar o habitat.
  * InnerSource: A prática de compartilhar os segredos e métodos da colônia dentro das muralhas seguras de uma empresa privada.
* Aplicação Prática: Quando um explorador deseja modificar um território onde não possui permissão de escrita, ele deve realizar um Fork (criar sua própria instância do território). Se ele possui permissão, trabalha em uma Branch dentro da mesma árvore.
* Exam Golden Tip: Diferença crucial: Use Fork quando você é um forasteiro (sem acesso de escrita). Use Branch quando você faz parte da colônia (tem acesso de escrita). As Templates são sementes pré-preparadas para iniciar novos projetos com as melhores práticas.
