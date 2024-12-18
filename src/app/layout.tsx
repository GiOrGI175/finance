import './globals.css';
import NavBar from '@/components/__molecules/NavBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='flex min-h-screen '>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
