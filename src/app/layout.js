import Rodape from "./components/Rodape";
import Topo from "./components/Topo";
import "./globals.css";

export const metadata = {
  title: "Sorveteria Artesanal",
  description: "Sorveteria Artesanal é um projeto feito em React.JS com Next.JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo />
          {children}
        <Rodape />
      </body>
    </html>
  );
}
