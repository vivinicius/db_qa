import '../layouts/Parte2.css';

const Parte2 = {
  id: 'parte2',
  title: 'Introdução à Automação de API',
  content: `
    <div class="parte2-content">
      <h3>Ferramentas Necessárias:</h3>
      <ul>
        <li>Rest-Assured</li>
        <li>Postman (opcional para testes exploratórios)</li>
      </ul>

      <h3>Exercícios:</h3>
      <ol>
        <li>
          Realizar uma requisição <strong>GET</strong> para a API Cat Facts na rota <code>/breeds</code> e validar o status code.
        </li>
        <li>
          Adicionar query parameters na requisição para limitar o número de resultados.
        </li>
      </ol>
    </div>
  `,
};

export default Parte2;
