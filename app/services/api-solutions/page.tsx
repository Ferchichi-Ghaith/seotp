import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export default function ApiSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="container mx-auto px-4 py-8">
        <nav>
          <Link href="/" passHref legacyBehavior>
            <Button variant="ghost" >
              <ArrowLeft className="mr-2" /> Back to Home
            </Button>
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">API Solutions</h1>
        <p className="text-xl mb-8">
          Our API solutions are designed to provide scalable, secure, and efficient interfaces for your applications. We specialize in:
        </p>
        <ul className="list-disc list-inside mb-8 space-y-4">
          <li>RESTful API design and implementation</li>
          <li>GraphQL API development</li>
          <li>API security and authentication</li>
          <li>API performance optimization</li>
          <li>API documentation and developer experience</li>
        </ul>
        <Link href="/contact" passHref legacyBehavior>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get Started with API Solutions
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