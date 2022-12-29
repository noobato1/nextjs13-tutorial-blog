import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header className="sticky top-2 z-50 max-w-6xl mx-auto">
      <div className="text-center bg-slate-200/70 backdrop-blur-md p-8 m-4 rounded-xl shadow-md">
        <Link href={'/'}>
          <Image src="/logo.svg" width={150} height={150} className="mx-auto mb-1" alt={"Logo"} />
          <p className="text-slate-800">Welcome to my tech blog 🐢</p>
        </Link>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-500 text-center p-5 mt-10">
        <h4>Made with ❤️ by Pixgel</h4>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        <main>
          {header}
          <div id="mainContent" className="mt-12 px-4 mx-auto max-w-6xl">
            {children}
          </div>
          {footer}
        </main>
      </body>
    </html>
  )
}
