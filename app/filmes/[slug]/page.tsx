import Link from "next/link";
import filmes from "../../data/filmes.json";
import { Filme } from "../../types/filmes";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>; 
}

// 🔧 SEO dinâmico
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const filme = (filmes as Filme[]).find((f) => f.slug === slug);

  return {
    title: filme ? filme.title : "Resenha não encontrada",
    description: filme ? filme.description : "Resenhas modernas de filmes e séries",
  };
}

// 🔧 SSG: gera rotas estáticas
export async function generateStaticParams() {
  return (filmes as Filme[]).map((f) => ({ slug: f.slug }));
}

export default async function FilmePage({ params }: PageProps) {
  const { slug } = await params;
  const filme = (filmes as Filme[]).find((f) => f.slug === slug);

  if (!filme) return <p>Resenha não encontrada</p>;

  return (
    <>
      <article>
        <Link href="/" className="btn-icon">←</Link>
        <h1>{filme.title}</h1>
        <img src={filme.image} alt={filme.title} />
        <p><strong>Autor:</strong> {filme.author}</p>
        <p><strong>Publicado em:</strong> {filme.date}</p>
        <p><strong>Nota:</strong> ⭐ {filme.rating}/10</p>
        <div dangerouslySetInnerHTML={{ __html: filme.content }} />
        {filme.trailerUrl && (
          <iframe
            width="560"
            height="315"
            src={filme.trailerUrl}
            title="Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </article>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 CineBlog • Criado por Cintia Lima</p>
        <p>Todos os direitos reservados</p>
      </footer>
    </>
  );
}

