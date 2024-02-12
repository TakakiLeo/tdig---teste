import PropTypes from "prop-types"; // Importe PropTypes
import { PlusIcon } from "@heroicons/react/outline";

export default function Produto({ produto, adicionarAoCarrinho }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img
        src={produto.imagem}
        alt={produto.nome}
        className="mb-4 rounded-md w-3/4 mx-auto"
      />
      <h2 className="text-lg font-semibold mb-2">{produto.nome}</h2>
      <p className="text-gray-600 mb-4">Preço: R${produto.preco}</p>
      <button
        onClick={() => adicionarAoCarrinho(produto)}
        className="flex items-center px-8 z-30 py-4 bg-amber-500 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-amber-600 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-1xl">
        Adicionar ao Carrinho
        <PlusIcon className="w-4 h-4 text-white ml-1" />
      </button>
    </div>
  );
}

Produto.propTypes = {
  produto: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    nome: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
    imagem: PropTypes.string.isRequired,
  }).isRequired,
  adicionarAoCarrinho: PropTypes.func.isRequired,
};
