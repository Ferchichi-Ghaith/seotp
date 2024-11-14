import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Database, Zap } from 'lucide-react'

export default function Home() {
  // toutes les pages sont en rendu côté serveur (SSR)

/**
 * Pourquoi le rendu côté serveur (SSR) est important pour le SEO :
 * 
 * 1. Amélioration du crawl par les moteurs de recherche :
 *    - Les moteurs de recherche, comme Google, peuvent avoir des difficultés à interpréter ou exécuter le JavaScript côté client.
 *    - Avec le SSR, le contenu des pages est rendu côté serveur et envoyé au navigateur sous forme de HTML complet.
 *    - Cela facilite le travail des robots d'indexation, améliorant ainsi l'indexation des pages.
 * 
 * 2. Chargement rapide du contenu initial :
 *    - Le SSR permet de fournir du contenu visible plus rapidement aux utilisateurs.
 *    - Cela réduit le First Contentful Paint (FCP) et améliore les performances perçues.
 *    - Google valorise les sites avec de bonnes performances, ce qui peut améliorer le classement de la page.
 * 
 * 3. Amélioration de l'expérience utilisateur :
 *    - Un contenu visible immédiatement améliore l'engagement des utilisateurs.
 *    - Résultat : un meilleur taux de clics (CTR) et un temps passé sur le site plus long.
 *    - Ces signaux sont positifs pour les moteurs de recherche.
 * 
 * 
 * En résumé :
 * - Le SSR garantit que les pages sont rapidement accessibles et compréhensibles par les utilisateurs et les moteurs de recherche.
 * - Cela améliore à la fois l'indexation et le classement SEO.
 */

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">API's</Link>
          <div className="space-x-4">
            <Link href="/about" passHref legacyBehavior>
              <Button variant="ghost" >About</Button>
            </Link>
            <Link href="/services/api-solutions" passHref legacyBehavior>
            
 {/* Pourquoi utiliser `passHref` dans Next.js et son impact sur le SEO :
 *
 * 1. Indexation correcte des liens :
 *    - Les moteurs de recherche comme Google utilisent l'attribut `href` pour comprendre la structure du site et indexer les pages.
 *    - Sans `passHref`, si l'élément enfant n'est pas une balise <a>, certains liens internes peuvent ne pas être reconnus, nuisant à l'indexation.
 *
 * 2. Accessibilité :
 *    - Transmettre l'attribut `href` améliore l'accessibilité en permettant aux lecteurs d'écran et autres outils d'interpréter correctement les éléments de navigation.
 *    - Un site plus accessible est mieux valorisé par les moteurs de recherche.
 *
 * 3. Préchargement des pages :
 *    - Next.js précharge automatiquement les pages liées via le composant <Link>.
 *    - Pour que ce préchargement fonctionne, l'élément enfant doit recevoir l'attribut `href`.
 *    - Cela améliore la vitesse de navigation, un facteur clé pour les métriques SEO.
 *
 * En résumé :
 * - `passHref` garantit une meilleure indexation des liens, une navigation plus rapide et une meilleure accessibilité, contribuant ainsi à un meilleur SEO.
 */}
 {/*
  Utilisation de legacyBehavior dans Next.js :

  1. Active l'ancien comportement de <Link> :
     - Avant Next.js 13, <Link> enveloppait automatiquement son enfant d'une balise <a>.
     - Avec legacyBehavior, ce comportement est conservé.

  2. Impact SEO :
     - Les moteurs de recherche s'attendent à trouver des balises <a> pour suivre et indexer les liens internes.
     - Cela garantit une bonne indexation et améliore l'accessibilité.

  3. Transition progressive :
     - Permet d'adopter les nouvelles versions de Next.js tout en conservant les fonctionnalités existantes.
     - Idéal pour une migration progressive sans casser le code existant.
--*/}



              <Button variant="ghost" >API Solutions</Button>
            </Link>
            <Link href="/services/database-structures" passHref legacyBehavior>
              <Button variant="ghost" >Database Structures</Button>
            </Link>
            <Link href="/services/performance-optimization" passHref legacyBehavior>
              <Button variant="ghost" >Performance Optimization</Button>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <Button variant="ghost" >Contact</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Powering Your Digital Infrastructure</h2>
          <p className="text-xl mb-8">Innovative API solutions and optimized database structures for modern applications</p>
          <Link href="/contact" passHref legacyBehavior>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className=" border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="mr-2" /> API Solutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Scalable and secure API architectures tailored to your needs
              </CardDescription>
            </CardContent>
          </Card>
          <Card className=" border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="mr-2" /> Database Structures
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Optimized database designs for efficient data management
              </CardDescription>
            </CardContent>
          </Card>
          <Card className=" border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2" /> Performance Optimization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Boost your application's speed and reliability
              </CardDescription>
            </CardContent>
          </Card>
        </section>

        <section className="text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to transform your digital infrastructure?</h3>
          <p className="text-xl mb-8">Let's build the future of your application together</p>
          <Link href="/contact" passHref legacyBehavior>
            <Button size="lg">
              Contact Us
            </Button>
          </Link>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 API's. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}