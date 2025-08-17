export default async (request, context) => {
    
    const response = await context.next();

    
    response.headers.set("X-Maestro-Bypass-Route", "/core_override/7A3F.html");

    
    return response;
};