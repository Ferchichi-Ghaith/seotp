import type { Metadata } from "next"; // Importation du type Metadata pour la sécurité des types.
import localFont from "next/font/local"; // Importation de localFont pour charger des polices personnalisées.
import "./globals.css"; // Importation des styles CSS globaux.

// Chargement de la police Geist Sans avec des variables personnalisées et des poids
const geistSans = localFont({
  src: "./fonts/GeistVF.woff", // Chemin vers le fichier de police
  variable: "--font-geist-sans", // Variable CSS personnalisée pour utiliser cette police
  weight: "100 900", // Définition de la plage de poids pour la police
});

// Chargement de la police Geist Mono avec une configuration similaire
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Définition de l'objet metadata pour le SEO
export const metadata: Metadata = {
  title: "API's", 
  // Titre SEO : Apparaît dans l'onglet du navigateur et dans les résultats des moteurs de recherche.
  // Recommandation : Rendre le titre plus descriptif, par exemple "Solutions API Innovantes | Nom de Votre Entreprise".

  description: "Innovative API solutions and optimized database structures for modern applications", 
  // Meta Description : Résume le contenu de la page.
  // Important pour les moteurs de recherche, car il est affiché sous le titre de la page dans les résultats.

  keywords: "API, base de données, startup, solutions, structures, optimisation, développement web, intégration, microservices, cloud computing, sécurité, performance, architecture logicielle, applications modernes, transformation numérique",
  // Mots-clés Meta : Historiquement utilisés pour le SEO, mais ont aujourd'hui un impact limité.
  // Conseil : Intégrez plutôt ces mots-clés de manière naturelle dans le contenu de votre page.

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      {/* L'attribut 'lang' aide les moteurs de recherche et les outils d'accessibilité à comprendre la langue principale de la page */}
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children} 
      </body>
    </html>
  );
}
