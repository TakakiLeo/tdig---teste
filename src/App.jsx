import { useState, useEffect } from "react";
import axios from "axios";
import Produto from "./components/Produto";
import Carrinho from "./components/Carrinho";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    const indiceProdutoExistente = carrinho.findIndex(
      (item) => item.id === produto.id
    );

    if (indiceProdutoExistente !== -1) {
      const novoCarrinho = [...carrinho];
      novoCarrinho[indiceProdutoExistente].quantidade++;
      setCarrinho(novoCarrinho);
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  const removerDoCarrinho = (produtoParaRemover) => {
    const novoCarrinho = carrinho
      .map((produto) => {
        if (produto.id === produtoParaRemover.id) {
          if (produto.quantidade > 1) {
            produto.quantidade--;
          } else {
            return null;
          }
        }
        return produto;
      })
      .filter(Boolean);

    setCarrinho(novoCarrinho);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/produtos")
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados: ", error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 my-24">
      <h1 className="font-black mb-20 text-5xl">
        Loja <span className="text-amber-500">Online</span>
      </h1>
      <div>
        <h2 className="font-black mb-8 text-3xl">Produtos</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        ))}
      </div>
      <Carrinho removerDoCarrinho={removerDoCarrinho} carrinho={carrinho} />
    </div>
  );
}

export default App;
