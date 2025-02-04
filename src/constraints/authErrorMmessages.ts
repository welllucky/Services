type AuthErrorType = Record<string, { message: string }>;

export const authErrorMessages: AuthErrorType = {
  // Problemas técnicos gerais
  Configuration: {
    message:
      "Ops! Tivemos um problema técnico. Por favor, tente novamente mais tarde.",
  },
  // Acesso não permitido
  AccessDenied: {
    message: "Desculpe, você não tem permissão para acessar esse recurso.",
  },
  // Token de verificação expirado ou inválido
  Verification: {
    message:
      "O código de verificação não é mais válido. Por favor, solicite um novo.",
  },
  // Mensagem padrão para erros não mapeados
  Default: {
    message:
      "Ops! Algo deu errado. Tente novamente ou entre em contato com o suporte.",
  },
  // Erro ao validar credenciais (ex.: email ou senha incorretos)
  CredentialsSignin: {
    message:
      "Email ou senha incorretos. Verifique seus dados e tente novamente.",
  },
  // Conta não vinculada – por exemplo, ao tentar usar um método diferente do utilizado no cadastro
  AccountNotLinked: {
    message:
      "Não conseguimos vincular sua conta. Use o método de login que você cadastrou.",
  },
  // Problemas de conexão ou de comunicação com o banco de dados
  AdapterError: {
    message:
      "Houve um problema de conexão. Por favor, tente novamente mais tarde.",
  },
  // Problema no redirecionamento após o login
  CallbackRouteError: {
    message:
      "Tivemos um problema ao redirecionar você. Por favor, tente novamente.",
  },
  // Configuração duplicada para UI condicional (geralmente em setups avançados)
  DuplicateConditionalUI: {
    message:
      "Detectamos uma configuração duplicada. Revise suas opções de login.",
  },
  // Erro ao enviar email para login
  EmailSignInError: {
    message:
      "Não foi possível enviar o link de login por email. Verifique seu endereço e tente novamente.",
  },
  // Situação de loop na página de erro (erro na própria página de erro)
  ErrorPageLoop: {
    message:
      "Ops! Algo inesperado aconteceu. Tente acessar a página novamente.",
  },
  // Problemas internos na execução de eventos ou ações
  EventError: {
    message:
      "Desculpe, encontramos um problema interno. Tente novamente mais tarde.",
  },
  // Recurso experimental que não foi ativado
  ExperimentalFeatureNotEnabled: {
    message:
      "Este recurso ainda não está disponível. Se precisar, entre em contato com o suporte.",
  },
  // URL de redirecionamento inválida ou mal configurada
  InvalidCallbackUrl: {
    message:
      "O endereço de redirecionamento parece estar incorreto. Por favor, verifique e tente novamente.",
  },
  // Falha na verificação de segurança (PKCE, state ou nonce)
  InvalidCheck: {
    message:
      "Houve um problema de segurança na sua solicitação. Por favor, tente novamente.",
  },
  // Endpoints necessários ausentes ou incorretos na configuração
  InvalidEndpoints: {
    message:
      "Ops! Tivemos um problema com as configurações de autenticação. Tente novamente mais tarde.",
  },
  // Provedor de autenticação inválido ou não suportado
  InvalidProvider: {
    message:
      "O método de login escolhido não é suportado. Por favor, escolha outra opção.",
  },
  // Problemas com a sessão baseada em JWT
  JWTSessionError: {
    message:
      "Sua sessão expirou ou não pôde ser validada. Por favor, faça login novamente.",
  },
  // Falta o adaptador (por exemplo, quando se usa um provider de email sem banco de dados)
  MissingAdapter: {
    message:
      "Ops! Falta uma configuração necessária. Por favor, contate o suporte.",
  },
  // Métodos essenciais do adaptador não foram implementados
  MissingAdapterMethods: {
    message:
      "Ops! Algo não foi configurado corretamente. Por favor, contate o suporte.",
  },
  // Ausência do método 'authorize' no provider de credenciais
  MissingAuthorize: {
    message:
      "A autenticação não foi configurada corretamente. Por favor, tente novamente.",
  },
  // Falta o token CSRF na requisição
  MissingCSRF: {
    message:
      "Não conseguimos validar sua solicitação. Recarregue a página e tente novamente.",
  },
  // Falta a chave secreta para criptografia
  MissingSecret: {
    message:
      "Ops! Está faltando uma configuração de segurança. Por favor, contate o suporte.",
  },
  // Configuração incorreta no campo de autocomplete para WebAuthn
  MissingWebAuthnAutocomplete: {
    message:
      "Algum dado necessário para a autenticação não foi preenchido corretamente. Verifique e tente novamente.",
  },
  // Conta OAuth não vinculada à conta existente
  OAuthAccountNotLinked: {
    message:
      "Sua conta não está vinculada. Use o método de login que você utilizou no cadastro.",
  },
  // Problema no callback do OAuth
  OAuthCallbackError: {
    message:
      "Houve um problema durante o login com o serviço externo. Por favor, tente novamente.",
  },
  // Falha ao interpretar os dados do perfil retornado pelo OAuth
  OAuthProfileParseError: {
    message:
      "Não conseguimos obter suas informações do serviço de login. Por favor, tente novamente.",
  },
  // Erro ao iniciar o login via OAuth
  OAuthSignInError: {
    message:
      "Ops! Tivemos um problema ao fazer login via serviço externo. Verifique suas credenciais e tente novamente.",
  },
  // Problema ao recuperar a sessão do usuário
  SessionTokenError: {
    message:
      "Não conseguimos recuperar sua sessão. Por favor, faça login novamente.",
  },
  // Erro ao tentar finalizar a sessão (logout)
  SignOutError: {
    message:
      "Houve um problema ao encerrar sua sessão. Por favor, tente novamente.",
  },
  // Ação solicitada não é reconhecida
  UnknownAction: {
    message: "Ação não reconhecida. Por favor, tente novamente.",
  },
  // Estratégia de autenticação não suportada na configuração atual
  UnsupportedStrategy: {
    message:
      "O método de autenticação escolhido não é suportado. Por favor, escolha outra opção.",
  },
  // Problemas relacionados ao host (verificação de segurança)
  UntrustedHost: {
    message:
      "Ops! Detectamos um problema de segurança. Por favor, tente novamente.",
  },
  // Erro ao verificar a resposta do WebAuthn
  WebAuthnVerificationError: {
    message:
      "Não conseguimos confirmar sua autenticação. Por favor, tente novamente.",
  },
};
