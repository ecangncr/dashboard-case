import "@/styles/globals.scss";
import { Montserrat } from "next/font/google";
import Providers from "./providers";

const fontMontserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontMontserrat.className}>
        <Providers>
          <div className="container">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
