import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

// Componente fictício só para validar
function Home() {
  return <h1>Bem-vinda ao Cine Blog</h1>;
}

test("renderiza título da página inicial", () => {
  render(<Home />);
  expect(screen.getByText("Bem-vinda ao Cine Blog")).toBeInTheDocument();
});
