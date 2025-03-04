"use client"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
    {
      title: "In progress - Bsc Computer Science",
      company: "The University of Hull",
      period: "2024 - Present",
      description: "Gaining expertise in computing, information science, and problem-solving, with options for specialist modules and industry placement in further studies.",
      skills: ["Problem-solving", "Adaptability", "Logical thinking", "Technical expertise"],
    },
    {
      title: "Retail Assistant / Step Up Team Leader",
      company: "Tesco",
      period: "2024 - Present",
      description: "Started at Tesco as a Retail Assistant and quickly progressed to Step Up Team Leader, responsible for taking care of the Express store.",
      skills: ["Customer service", "Communication", "Teamwork", "Procedural compliance"],
    },
    {
        "title": "Restaurant Supervisor",
        "company": "315 Bar & Restaurant",
        "period": "March 2022 - Present",
        "description": "Front of house staff member, promoted to Supervisor in September 2023. Provided customer care, barista skills, waiting tables, order management, and payment processing. Liaised with staff and managers to ensure customer satisfaction and resolve issues.",
        "skills": [
          "Customer Service",
          "Communication",
          "Teamwork",
          "Problem-Solving",
          "Barista Skills",
          "Order Management",
          "Payment Processing"
        ]
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
          experience & qualifications
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-secondary p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{exp.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
              <p className="mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-primary/10 text-primary text-sm px-2 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}