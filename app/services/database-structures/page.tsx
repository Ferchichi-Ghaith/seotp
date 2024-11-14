import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export default function DatabaseStructures() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="container mx-auto px-4 py-8">
        <nav>
          <Link href="/" passHref legacyBehavior>
            <Button variant="ghost">
              <ArrowLeft className="mr-2" /> Back to Home
            </Button>
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Database Structures</h1>
        <p className="text-xl mb-8">
          Our database structure solutions are tailored to optimize your data management and retrieval processes. We offer:
        </p>
        <ul className="list-disc list-inside mb-8 space-y-4">
          <li>Database schema design and optimization</li>
          <li>Relational and NoSQL database solutions</li>
          <li>Data migration and integration</li>
          <li>Database performance tuning</li>
          <li>Data security and compliance implementation</li>
        </ul>
        <Link href="/contact" passHref legacyBehavior>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700" >
            Optimize Your Database Structures
          </Button>
        </Link>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 YourStartup. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}