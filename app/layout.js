import "./globals.css";
import localFont from "next/font/local";
import LinkTo from "./components/LinkTo";
const bdFont = localFont({ src: "../assets/bdFont.ttf" });
export const metadata = {
  title: "Urodziny Weroniki!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bdFont.className} flex flex-col items-center min-h-screen`}
      >
        <main className=" relative flex flex-col items-center max-w-md min-h-screen px-4">
          <LinkTo to={"/"}>
            <p className="text-center tracking-widest font-bd text-4xl text-pink-500 leading-relaxed mt-4 z-20">
              Urodziny Weroniki
            </p>
          </LinkTo>

          {children}
        </main>
      </body>
    </html>
  );
}
