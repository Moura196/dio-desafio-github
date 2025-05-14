# Spring Framework
- Grupo de filtros de servlet para adicionar autenticação e autorização.
### Autorização:
- Determina se o usuárioo tem permissão adequada para executar uma ação.
### Autenticação:
- Verificação de identidade de um usuário, com base nas credenciais fornecidas.
- Criando código para práticar disponível no repositório [aprender](https://github.com/Moura196/aprender).

## Autenticação simples
- Não gera mais a senha padrão ao rodar a aplicação.
- Apenas para demonstração, não deve ser utilizado para ambiente de produção.

## Autenticação em memória
- Permite criar mais de usuário e perfis de acesso.
- Preciso criar uma classe WebSecurityConfig.
- Depois preciso criar rotas para cada tipo de usuário criado.

## Configure Adapter
- Especificar as rotas com suas permissões, e métodos específicos.
- FOI ESPECIFICADAS AS ROTAS E AS ROLES DE CADA USUÁRIOS, MAS POR ALGUM MOTIVO NÃO ESTÁ LIMITANDO O USUARIO: user DE ACESSAR A ROTA: /admins.