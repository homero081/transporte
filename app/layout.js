import './globals.css'; 
export const metadata = {
  title: 'Transporte Universitário',
  description: 'O transporte que conecta você à universidade com segurança e conforto.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        
        {children}
      </body>
    </html>
  );
}
