import { useRef } from 'react';
import { useState } from 'react';
import { v4 } from 'uuid';
import { AddButton, Container, Product, TrashButton } from './styles';


//reacts hooks

function Home() {
  const [products, setProducts] = useState([]);
  const title = "Lista de Compras"
  const inputRef = useRef();

  function ClicarBotao() {
    setProducts([{ id: v4(), nome: inputRef.current.value }, ...products]);
    inputRef.current.value = '';
  }

  function DeletarProduto(id) {
    setProducts(products.filter(product => product.id !== id));
  }

  return (
    <Container>
      <h1>{title}</h1>
      <input placeholder="Digite o nome do produto..." ref={inputRef} />
      <AddButton onClick={ClicarBotao}>Adicionar produto</AddButton>

      {products.map((product => (
        <Product key={product.id}>
          <p>{product.nome}</p>
          <TrashButton onClick={() => DeletarProduto(product.id)}>🗑️</TrashButton>
        </Product>
      )))}
    </Container>
  )
}

export default Home;
