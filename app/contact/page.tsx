
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {



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
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xl mb-8">
              We'd love to hear from you. Please fill out the form below or use our contact information.
            </p>
            <form  className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                 
                  required
                  className="w-full bg-gray-700 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  
                  required
                  className="w-full bg-gray-700 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                 
                  required
                  className="w-full bg-gray-700 text-white"
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </div>
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-400" />
              <span>contact@yourstartup.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-400" />
              <span>123 Tech Street, San Francisco, CA 94105</span>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM (PST)</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 YourStartup. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}