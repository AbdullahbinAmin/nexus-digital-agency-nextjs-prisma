'use client';
import { motion } from 'framer-motion';
import { Code, Layout, Rocket } from 'lucide-react';

const features = [
  {
    icon: <Layout className="w-6 h-6 text-emerald-400" />,
    title: 'Flawless Design',
    description: 'We craft stunning, intuitive interfaces that captivate users and elevate your brand identity.'
  },
  {
    icon: <Code className="w-6 h-6 text-emerald-400" />,
    title: 'Clean Architecture',
    description: 'Built on solid foundations using cutting-edge tech stacks for maximum scalability.'
  },
  {
    icon: <Rocket className="w-6 h-6 text-emerald-400" />,
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance, ensuring an instantaneous experience for every user.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
            >
              Beyond Ordinary <br/>
              <span className="text-gray-500">Digital Solutions.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 mb-8"
            >
              At Nexus, we merge striking aesthetics with robust engineering. Our team of senior developers and visionary designers collaborate to deliver digital products that don&apos;t just work—they inspire.
            </motion.p>
            <div className="flex gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center flex-1">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center flex-1">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 grid gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex gap-4"
              >
                <div className="p-3 bg-black/50 rounded-xl h-fit border border-white/5">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
