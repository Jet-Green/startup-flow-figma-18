import React from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const menuItems = [
    { title: "Стартапам", path: "/startups" },
    { title: "Школа Русского Импрова", path: "/improv-school" },
    { title: "Консалтинг", path: "/consulting" },
    { title: "Обо мне", path: "/about" },
    { title: "Shop", path: "/shop" },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Дмитрий S
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.title}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              onClick={() => window.open("https://t.me/dmitry_syrtsov", "_blank")}
            >
              Связаться
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <nav className="px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path)
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  {item.title}
                </button>
              ))}
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white mt-4"
                onClick={() => window.open("https://t.me/dmitry_syrtsov", "_blank")}
              >
                Связаться
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
