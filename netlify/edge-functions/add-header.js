export default async (request, context) => {
    // Pega a resposta da página que o servidor ia enviar
    const response = await context.next();

    // Adiciona nosso cabeçalho customizado à resposta
    response.headers.set("X-Maestro-Bypass-Route", "/core_override/7A3F.html");

    // Retorna a resposta modificada
    return response;
};