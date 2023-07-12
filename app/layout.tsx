import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:image"
          content="https://images.ctfassets.net/sb7j5o4oxtgv/1FvblblN5LUCqK4MmyfLn7/0616055f471ec5f3658baf6728140c45/WorldRemit_Identity_2020_RGB_72ppi_PURPLE.png?w=500"
        />
        <meta
          name="twitter:image"
          content={
            "https://images.ctfassets.net/sb7j5o4oxtgv/4EbUqK2OH8oLi6vzLSTc5M/6405f0c85f1484a2b89ad18361d92d41/LP_518542_-_CLP___HP_Visuals_Refresh_Zim_mobile.png?w=500"
          }
        />
        <meta
          name="twitter:image:src"
          content={
            "https://images.ctfassets.net/sb7j5o4oxtgv/4EbUqK2OH8oLi6vzLSTc5M/6405f0c85f1484a2b89ad18361d92d41/LP_518542_-_CLP___HP_Visuals_Refresh_Zim_mobile.png?w=500"
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@lT0mm" />
        <meta name="twitter:site" content="@lT0mm" />
        <meta name="twitter:description" content={"portfolio"} />
        <meta name="twitter:title" content={"portfolio"} />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
