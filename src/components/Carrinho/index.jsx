import { useState } from "react";
import PropTypes from "prop-types";
import CarrinhoItem from "./CarrinhoItem";
import { CheckIcon } from "@heroicons/react/outline";

function Carrinho({ carrinho, removerDoCarrinho, atualizarQuantidade }) {
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const handleMostrarAlerta = () => {
    setMostrarAlerta(true);
  };

  const handleFecharAlerta = () => {
    setMostrarAlerta(false);
  };
  return (
    <div className="mt-16 text-center">
      <div>
        <h2 className="font-black mb-8 text-3xl">Carrinho de Compras</h2>
      </div>
      <ul className="divide-y divide-gray-300">
        {carrinho.map((produto) => (
          <CarrinhoItem
            key={produto.id}
            produto={produto}
            removerDoCarrinho={removerDoCarrinho}
            atualizarQuantidade={atualizarQuantidade}
          />
        ))}
      </ul>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Resumo do Carrinho:</h2>
        <p className="font-black">
          {carrinho.reduce(
            (total, produto) => total + produto.preco * produto.quantidade,
            0
          )}
        </p>
        <div className="flex justify-center mt-8">
          {mostrarAlerta && (
            <div className="flex w-96 shadow-lg rounded-lg">
              <div className="bg-green-600 py-4 px-6 rounded-l-lg flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white fill-current"
                  viewBox="0 0 16 16"
                  width="20"
                  height="20">
                  <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                </svg>
              </div>
              <div className="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
                <div>Compra Realizada com Sucesso!</div>
                <button onClick={handleFecharAlerta}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current text-gray-700"
                    viewBox="0 0 16 16"
                    width="20"
                    height="20">
                    <path d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleMostrarAlerta}
            className="shadow-lg flex items-center mt-4 px-8 z-30 py-4 bg-amber-500 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-amber-600 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-1xl">
            Finalizar Compras
            <CheckIcon className="w-4 h-4 text-white ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

Carrinho.propTypes = {
  carrinho: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      nome: PropTypes.string.isRequired,
      preco: PropTypes.number.isRequired,
      imagem: PropTypes.string.isRequired,
      quantidade: PropTypes.number.isRequired, // Adicione validação para a propriedade quantidade
    })
  ).isRequired,
  removerDoCarrinho: PropTypes.func.isRequired,
  atualizarQuantidade: PropTypes.func.isRequired,
};

export default Carrinho;
