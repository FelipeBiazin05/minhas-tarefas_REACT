Este projeto consiste em uma aplicação de lista de tarefas (Todo List) construída com as tecnologias React, Redux Toolkit e Styled Components, permitindo ao usuário gerenciar suas tarefas de forma eficiente e organizada. A aplicação oferece funcionalidades como a criação de novas tarefas, edição de descrições, filtragem por categorias (urgentes, normais e importantes), além de uma barra de pesquisa para facilitar a busca por tarefas específicas.

Funcionalidades
Criação de Tarefas:

O usuário pode adicionar novas tarefas à lista, informando a descrição e escolhendo uma categoria de prioridade (Urgente, Normal ou Importante).

Edição de Tarefas:

Cada tarefa pode ser editada, permitindo que o usuário altere a descrição ou modifique a prioridade da tarefa de acordo com a necessidade.

Filtros de Tarefas:

A aplicação oferece filtros para que o usuário possa visualizar as tarefas em diferentes categorias: Urgentes, Normais e Importantes.

Ao selecionar uma categoria de filtro, a lista é atualizada automaticamente para exibir apenas as tarefas correspondentes.

Barra de Pesquisa:

Uma barra de pesquisa é implementada para que o usuário possa procurar por palavras-chave nas tarefas, facilitando a localização de itens específicos na lista.

Tecnologias Utilizadas
React: Biblioteca principal para construção da interface do usuário, responsável por gerenciar o estado da aplicação e renderizar os componentes de forma eficiente.

Redux Toolkit: Utilizado para gerenciar o estado global da aplicação, garantindo que as tarefas, filtros e pesquisas sejam armazenadas de forma centralizada e facilmente acessível em qualquer parte do sistema.

Styled Components: Usado para estilizar os componentes de forma modular e reutilizável, proporcionando uma abordagem baseada em CSS-in-JS para definir os estilos dos elementos de forma dinâmica e integrada com os componentes.

Fluxo de Dados
O estado da lista de tarefas é mantido no Redux, permitindo um controle centralizado e eficiente.

A ação de adicionar tarefa, editar tarefa e atualizar filtros dispara atualizações no estado, o que reflete imediatamente na interface do usuário.

A barra de pesquisa filtra as tarefas de acordo com o texto digitado, interagindo diretamente com o estado do Redux para apresentar os resultados de maneira dinâmica.

Os componentes são renderizados de forma eficiente, aproveitando as otimizações do React e Redux Toolkit, garantindo uma boa experiência de usuário, mesmo com um grande número de tarefas.

Benefícios
Interface Intuitiva: O uso de Styled Components garante uma interface visualmente atraente e responsiva, permitindo uma experiência agradável para o usuário.

Gestão Eficiente: Com Redux Toolkit, a gestão do estado das tarefas, filtros e busca é altamente eficiente, permitindo uma resposta rápida e consistente a todas as interações do usuário.

Personalização e Escalabilidade: A estrutura modular do projeto permite que novas funcionalidades sejam facilmente adicionadas no futuro, como, por exemplo, a integração com uma API para persistir os dados ou a implementação de um sistema de autenticação para múltiplos usuários.

Esse projeto oferece uma solução simples, mas robusta para a gestão de tarefas do dia a dia, sendo uma excelente base para quem deseja aprender a combinar React, Redux Toolkit e Styled Components em um único projeto funcional.
