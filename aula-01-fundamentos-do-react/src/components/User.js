// Expressões Javascript dentro do HTML
const User = () => {
    // Criando variáveis para o componente
    const name = "Vinícius de Souza";
    return (
        <>
        {/* Esse é o comentário em JSX */}
            <div>Usuário logado: <strong>{name}</strong></div>
        </>
    );
};
export default User;