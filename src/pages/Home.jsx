export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Débora</h1>
          <ul className="flex gap-6">
            <li><a href="#sobre" className="hover:text-blue-600">Sobre</a></li>
            <li><a href="#projetos" className="hover:text-blue-600">Projetos</a></li>
            <li><a href="#contato" className="hover:text-blue-600">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Olá! Sou Débora
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Data Analytics | Análise e Desenvolvimento de Sistemas | Recrutamento de TI
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
          Veja Meus Projetos
        </button>
      </section>

      {/* Sobre */}
      <section id="sobre" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8">Sobre Mim</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Sou uma profissional em transição para a área de tecnologia com 4 anos de experiência em recrutamento de TI. Estou estudando Análise e Desenvolvimento de Sistemas no IFSP e participando do Bootcamp de Dados da Generation Brasil.
          </p>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8">Meus Projetos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4">Projeto de Tecnologia</h4>
              <p className="text-gray-600 mb-4">Descrição do seu projeto aqui</p>
              <a href="#" className="text-blue-600 hover:underline">Ver Projeto →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4">Projeto de Dados</h4>
              <p className="text-gray-600 mb-4">Descrição do seu projeto aqui</p>
              <a href="#" className="text-blue-600 hover:underline">Ver Projeto →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Vamos Conversar?</h3>
          <a href="mailto:deboraasilvaa79@gmail.com" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 inline-block">
            Enviar Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2024 Débora Laranjeira. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}