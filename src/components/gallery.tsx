"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const images = [
    {
      src: "/images/fsdashlong.png?height=600&width=841",
      alt: "Dashboard for the York Formula Student team",
      title: "Dashcam",
      href: "https://github.com/york-fs/dashboard",
    },
    {
      src: "/images/cruisecontrol.png?height=600&width=841",
      alt: "Bar Crawl Application",
      title: "CruiseControl",
      href: "https://example.com/urban-symphony", // Replace with the actual URL
    },
    {
      src: "/images/blog.png?height=600&width=841",
      alt: "My blog",
      title: "My Blog",
      href: "https://example.com/digital-nostalgia", // Replace with the actual URL
    },
  ]

  return (
    <section className="relative py-20">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter text-primary sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          things i've made so far
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-6xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="aspect-[2/3] overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xl font-semibold text-primary">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

