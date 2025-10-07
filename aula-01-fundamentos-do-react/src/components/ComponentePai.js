import ComponenteFilho from "./ComponenteFilho";

const ComponentePai = () => {
    return (
        <>
            <div>
                <h2>Início do Componente Pai
                <ComponenteFilho />
                </h2>
                <h2>Fim do Componente Pai</h2>    
                
            </div>
        </>
    )
}
export default ComponentePai;