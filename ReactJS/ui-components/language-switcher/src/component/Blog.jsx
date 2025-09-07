import React, { useContext } from 'react'
import LanguageContext from '../context/LanguageContext'
import { useEffect } from 'react'
const Blog = () => {
  const {language,setLanguage} = useContext(LanguageContext)
  console.log(language)

  useEffect(()=>{
    console.log("language changed")
  },[language])
  return language === 'en' ? (<div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight text-indigo-600">
            MyBlog
          </div>

          {/* Menu */}
          <nav className="hidden md:flex space-x-6 text-base font-medium">
            <a href="#" className="hover:text-indigo-600 transition">
              Home
            </a>
            <a href="#" className="hover:text-indigo-600 transition">
              About
            </a>
            <a href="#" className="hover:text-indigo-600 transition">
              Blog
            </a>
            <a href="#" className="hover:text-indigo-600 transition">
              Contact
            </a>
          </nav>

         {/* Language Switcher Select */}
        <select onChange={(e)=>setLanguage(e.target.value)} className="ml-4 px-4 py-2 rounded-2xl border border-gray-300 text-sm font-medium hover:border-indigo-600 transition">
          <option value="en">EN</option>
          <option value="fr">FR</option>
        </select>
        </div>
      </header>

      {/* Blog Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <article className="bg-white shadow-md rounded-2xl p-8 mb-10">
          <h1 className="text-3xl font-bold mb-4">The Future of Technology</h1>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Technology is evolving at a rapid pace, shaping the way we live,
            work, and communicate. From artificial intelligence to blockchain,
            innovations are transforming industries and creating new
            opportunities. In this article, we explore some of the most exciting
            trends that are likely to define the future of tech.
          </p>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Artificial Intelligence (AI) continues to expand, powering
            applications in healthcare, finance, and beyond. Meanwhile,
            blockchain technology is being explored for use cases far beyond
            cryptocurrencies, from supply chain management to secure data
            sharing.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            As we move forward, the integration of these technologies with our
            daily lives will only deepen, bringing both opportunities and
            challenges. The future is undoubtedly digital, and staying informed
            is the key to thriving in this fast-changing landscape.
          </p>
        </article>

        <article className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Why Learning Tech Matters</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            In today’s digital world, having technological knowledge isn’t just
            an advantage—it’s a necessity. Whether you are a student, a
            professional, or an entrepreneur, understanding the basics of
            technology helps you adapt, innovate, and succeed in a competitive
            environment.
          </p>
        </article>
      </main>
    </div>) : (<div className="min-h-screen bg-gray-50 text-gray-900"> {/* Header */} <header className="w-full bg-white shadow-md sticky top-0 z-50"> <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4"> {/* Logo */} <div className="text-2xl font-bold tracking-tight text-indigo-600"> MonBlog </div> {/* Menu */} <nav className="hidden md:flex space-x-6 text-base font-medium"> <a href="#" className="hover:text-indigo-600 transition"> Accueil </a> <a href="#" className="hover:text-indigo-600 transition"> À propos </a> <a href="#" className="hover:text-indigo-600 transition"> Blog </a> <a href="#" className="hover:text-indigo-600 transition"> Contact </a> </nav> {/* Language Switcher Select */} <select
  value={language} // keep it controlled
  onChange={(e) => setLanguage(e.target.value)}
  className="ml-4 px-4 py-2 rounded-2xl border border-gray-300 text-sm font-medium hover:border-indigo-600 transition"
>
  <option value="en">EN</option>
  <option value="fr">FR</option>
</select> </div> </header> {/* Blog Content */} <main className="max-w-4xl mx-auto px-6 py-12"> <article className="bg-white shadow-md rounded-2xl p-8 mb-10"> <h1 className="text-3xl font-bold mb-4">L'avenir de la technologie</h1> <p className="text-gray-600 mb-6 text-lg leading-relaxed"> La technologie évolue à un rythme rapide, façonnant notre façon de vivre, de travailler et de communiquer. De l’intelligence artificielle à la blockchain, les innovations transforment les industries et créent de nouvelles opportunités. Dans cet article, nous explorons certaines des tendances les plus passionnantes qui définiront probablement l’avenir de la technologie. </p> <p className="text-gray-600 mb-6 text-lg leading-relaxed"> L’intelligence artificielle (IA) continue de se développer, alimentant des applications dans la santé, la finance et bien plus encore. Parallèlement, la technologie blockchain est explorée pour des cas d’utilisation bien au-delà des crypto-monnaies, allant de la gestion des chaînes d’approvisionnement au partage sécurisé de données. </p> <p className="text-gray-600 text-lg leading-relaxed"> À mesure que nous avançons, l’intégration de ces technologies dans notre vie quotidienne ne fera que s’approfondir, apportant à la fois des opportunités et des défis. L’avenir est sans aucun doute numérique, et rester informé est la clé pour prospérer dans ce paysage en constante évolution. </p> </article> <article className="bg-white shadow-md rounded-2xl p-8"> <h2 className="text-2xl font-semibold mb-4">Pourquoi apprendre la technologie est important</h2> <p className="text-gray-600 text-lg leading-relaxed"> Dans le monde numérique d’aujourd’hui, avoir des connaissances technologiques n’est pas seulement un avantage — c’est une nécessité. Que vous soyez étudiant, professionnel ou entrepreneur, comprendre les bases de la technologie vous aide à vous adapter, à innover et à réussir dans un environnement compétitif. </p> </article> </main> </div>)
     
}

export default Blog