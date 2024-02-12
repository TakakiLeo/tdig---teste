import PropTypes from "prop-types";
import { TrashIcon } from "@heroicons/react/outline";

function CarrinhoItem({ produto, removerDoCarrinho, atualizarQuantidade }) {
  return (
    <li className="py-2">
      <div className="flex justify-between items-center">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="mb-4 rounded-md w-1/4 mx-auto"
        />
        <span className="text-lg">{produto.nome}</span>
        <div className="flex items-center">
          <span className="text-gray-600">Preço: R${produto.preco}</span>
          <input
            type="number"
            value={produto.quantidade}
            onChange={(e) =>
              atualizarQuantidade(produto, parseInt(e.target.value))
            }
            className="mx-2 w-16 px-2 py-1 border rounded-md"
          />
          <button
            onClick={() => removerDoCarrinho(produto)}
            className="flex items-center text-red-500 hover:text-red-700 transition duration-300">
            Remover do Carrinho
            <TrashIcon className="w-4 h-4 text-red-500 ml-2" />
          </button>
        </div>
      </div>
    </li>
  );
}

CarrinhoItem.propTypes = {
  produto: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    nome: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
    imagem: PropTypes.string.isRequired,
    quantidade: PropTypes.number.isRequired, // Adicione validação para a propriedade quantidade
  }).isRequired,
  removerDoCarrinho: PropTypes.func.isRequired,
  atualizarQuantidade: PropTypes.func.isRequired,
};

export default CarrinhoItem;
