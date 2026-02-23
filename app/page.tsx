import Link from "next/link";
import filmes from "./data/filmes.json";

export default function HomePage() {
  return (
    <>
      {/* Hero Section simplificada */}
      <section className="hero">
        <h1 className="logo">CineBlog</h1>
      </section>

      {/* Layout principal */}
      <main className="layout">
        <div className="grid">
          {filmes.map((filme) => (
            <div key={filme.slug} className="card">
              <img src={filme.image} alt={filme.title} />
              <h2>{filme.title}</h2>
              <p>{filme.description}</p>
              <p>⭐ {filme.rating}/10</p>
              <Link href={`/filmes/${filme.slug}`} className="btn">
                Ler resenha
              </Link>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 CineBlog • Criado por Cintia lima</p>
        <p>Todos os direitos reservados</p>
      </footer>
    </>
  );
}