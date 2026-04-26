/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  ChevronRight, 
  ChevronLeft, 
  MapPin, 
  Menu, 
  X,
  Quote,
  Phone,
  Mail
} from 'lucide-react';

// --- Assets & Constants ---
const HERO_CONTENT = {
  bg: "https://i.imgur.com/JDQPRG2.png",
  label: <>Nossa <span className="italic font-medium">especialidade</span></>,
  title: <>UM SORRISO QUE <br />VOCÊ SE ORGULHA <br />DE MOSTRAR</>,
  cta: "Agendar sua consulta"
};

const TREATMENTS = [
  {
    title: "Lentes de Contato e Facetas",
    text: "Transforme seu sorriso com a sofisticação das lentes de cerâmica ultrafinas. Corrigimos cor, formato e alinhamento de forma minimamente invasiva, entregando um resultado natural, iluminado e digno de uma joia. O ápice da estética dental moderna.",
    img: "https://i.imgur.com/Zn1VzS7.png",
    reverse: false
  },
  {
    title: "Invisalign: Ortodontia Invisível",
    text: "Alinhe seu sorriso com o máximo de conforto e discrição. Utilizando escaneamento 3D de alta precision, o sistema Invisalign permite tratar seu sorriso de forma previsível e imperceptível, sem o uso de metais ou braquetes tradicionais. Tecnologia que se adapta ao seu estilo de vida.",
    img: "https://i.imgur.com/KbM9Kyp.png",
    reverse: true
  },
  {
    title: "Implantes e Reabilitação Oral",
    text: "Recupere a plenitude do seu sorriso com protocolos de reabilitação avançada. Unimos precisão cirúrgica a materiais de alta biocompatibilidade para devolver não apenas a função mastigatória, mas a autoconfiança de sorrir sem restrições. A segurança que você merece.",
    img: "https://i.imgur.com/Q7yx80H.png",
    reverse: false
  },
  {
    title: "Clareamento Dental Premium",
    text: "Realce o brilho natural dos seus dentes com nossos protocolos de clareamento monitorado. Utilizamos géis de alta performance e tecnologia de ponta para garantir um branco profundo, uniforme e seguro, respeitando a sensibilidade e a saúde do esmalte dental.",
    img: "https://i.imgur.com/aFroDl2.png",
    reverse: true
  },
  {
    title: "Harmonização Orofacial",
    text: "A moldura perfeita para um sorriso inesquecível. Através de procedimentos minimamente invasivos como Botox e Preenchimento, equilibramos as proporções faciais para realçar sua beleza natural com elegância e sutileza. O toque final de sofisticação para o seu rosto.",
    img: "https://i.imgur.com/SfMj8gp.png",
    reverse: false
  }
];

const TESTIMONIALS = [
  {
    author: "Clara Vasconcelos",
    role: "Empresária",
    avatar: "https://i.imgur.com/7EGuPAG.png",
    text: "A Spire transformou não apenas meu sorriso, mas minha autoconfiança. O atendimento é impecável e o resultado final superou todas as minhas expectativas de naturalidade e brilho."
  },
  {
    author: "Ricardo Mendes",
    role: "Arquiteto",
    avatar: "https://i.imgur.com/spd5uJ7.png",
    text: "O nível de tecnologia digital que encontrei aqui é algo que nunca vi em outra clínica. Todo o planejamento virtual me deu a segurança que eu precisava para realizar meu tratamento.",
    objectPosition: "object-[center_35%]"
  },
  {
    author: "Helena Silveira",
    role: "Diretora Criativa",
    avatar: "https://i.imgur.com/ZxoBfm9.png",
    text: "Encontrar uma clínica que une luxo, conforto e uma competência técnica tão elevada foi uma grata surpresa. Hoje me sinto segura para sorrir sem restrições em qualquer ocasião."
  }
];

const BLOG_POSTS = [
  {
    title: "Invisalign: como o alinhamento dentário pode melhorar sua autoconfiança",
    excerpt: "O Invisalign é uma das opções mais modernas da ortodontia para quem deseja alinhar os dentes sem abrir mão da estética...",
    img: "https://viuodontologia.com.br/wp-content/uploads/2026/02/img-blog-1.png"
  },
  {
    title: "Odontopediatria: como cuidar da saúde bucal das crianças desde os primeiros anos",
    excerpt: "A odontopediatria é o primeiro passo para garantir que as crianças cresçam com um sorriso saudável e livre de problemas...",
    img: "https://viuodontologia.com.br/wp-content/uploads/2026/02/img-blog-2.png"
  }
];

// --- Sub-components ---

function SectionTitle({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <h2 className={`font-mories text-4xl md:text-5xl uppercase ${light ? 'text-spire-gold' : 'text-spire-gold'}`}>
      {children}
    </h2>
  );
}

// --- Main App Component ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-spire-gold selection:text-white font-montserrat">
      {/* WhatsApp Float */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-[100] bg-spire-gold p-5 rounded-full shadow-2xl hover:scale-110 transition-all group"
      >
        <img src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png" alt="WhatsApp" className="w-8 h-8 filter brightness-0 invert" />
      </a>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-[60] transition-colors duration-300 px-6 py-4 md:px-12 ${isScrolled ? 'bg-spire-bordeaux shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-[1440px] mx-auto flex items-center">
          {/* Logo - Full Left */}
          <div className="flex-1 flex items-center justify-start">
            <img src="https://i.imgur.com/vkxXoad.png" alt="Spire Odontologia" className="h-12 md:h-16 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-spire-gold ml-auto">
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          {/* Nav - Center */}
          <nav className={`absolute md:relative top-full left-0 right-0 py-8 md:py-0 bg-spire-bordeaux md:bg-transparent flex flex-col md:flex-row items-center gap-8 lg:gap-10 transition-all duration-300 md:opacity-100 ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-4 md:translate-y-0 opacity-0 invisible md:visible md:flex'}`}>
            {[
              { label: 'Home', href: '#home' },
              { label: 'Tratamentos', href: '#tratamentos' },
              { label: 'Quem Somos', href: '#about' },
              { label: 'Nossas unidades', href: '#nossas-unidades' },
              { label: 'Blog', href: '#blog' }
            ].map((item) => (
              <a key={item.label} href={item.href} className="font-bold text-[13px] uppercase tracking-widest text-[#ffffff66] hover:text-spire-gold transition-colors block">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Button - Full Right */}
          <div className="hidden md:flex flex-1 items-center justify-end">
            <a href="#" className="bg-linear-to-b from-[#d4af37] to-[#206600] px-6 lg:px-8 py-2 rounded font-poppins font-medium text-[14px] lg:text-[15px] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap">
              AGENDE SUA CONSULTA
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[700px] overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${HERO_CONTENT.bg})` }}>
        {/* Overlay for mobile readability */}
        <div className="absolute inset-0 bg-black/40 md:bg-transparent" />

        <div className="relative h-full max-w-[1440px] mx-auto px-8 md:px-24 flex items-center">
          <div className="max-w-xl text-white">
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="font-light text-xl md:text-2xl mb-4"
            >
              {HERO_CONTENT.label}
            </motion.p>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="font-mories text-5xl md:text-6xl uppercase leading-tight mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
            >
              {HERO_CONTENT.title}
            </motion.h1>
            <motion.button 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-linear-to-b from-[#d4af37] to-[#206600] flex items-center gap-4 px-8 py-4 rounded-xl text-white font-bold uppercase tracking-wide shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              <img src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png" alt="WA" className="w-6 filter brightness-0 invert" />
              {HERO_CONTENT.cta}
            </motion.button>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="tratamentos" className="py-32 px-8 md:px-24 bg-white">
        <div className="max-w-[1440px] mx-auto text-center">
          <div className="flex flex-col items-center gap-8 mb-20 text-center">
            <SectionTitle>Tratamentos</SectionTitle>
            <p className="max-w-3xl font-light text-xl md:text-2xl leading-relaxed text-gray-600">
              O sorriso é um dos bens mais valiosos que uma pessoa pode ter; é um cartão de visitas que mostra felicidade, simpatia e boa saúde. Estamos equipados com tecnologia de ponta para oferecer o melhor atendimento odontológico para você.
            </p>
          </div>

          <div className="space-y-32 mb-24 text-left">
            {TREATMENTS.map((t, i) => (
              <div key={i} className={`flex flex-col ${t.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-32`}>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-2xl h-[300px] md:h-[460px]">
                  <img src={t.img} alt={t.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 space-y-8">
                  <h3 className="text-3xl md:text-4xl font-medium text-spire-black">{t.title}</h3>
                  <p className="text-lg md:text-xl font-light leading-relaxed text-gray-600">{t.text}</p>
                  <button className="flex items-center gap-3 border border-spire-gold px-8 py-2 rounded-xl text-lg hover:bg-spire-gold hover:text-white transition-all">
                    Saiba mais <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-linear-to-b from-[#d4af37] to-[#206600] px-12 py-4 rounded-xl text-xl text-white flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Conheça todos os tratamentos <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-spire-bordeaux py-40 px-8 md:px-24 text-white relative overflow-hidden" id="about">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-24 items-center">
            <div className="space-y-10 order-2 lg:order-1">
              <div className="space-y-4">
                <SectionTitle light>Sobre a Clínica</SectionTitle>
                <p className="font-mories italic text-3xl md:text-4xl text-spire-gold">
                  "Onde a Arte encontra a Precisão"
                </p>
              </div>
              
              <div className="space-y-8 text-lg font-light leading-relaxed opacity-90">
                <p>
                  Na Spire, acreditamos que um sorriso de excelência é a união perfeita entre ciência rigorosa e sensibilidade artística. Nascemos com o propósito de redefinir a experiência odontológica, transformando consultas em momentos de cuidado absoluto e bem-estar.
                </p>
                <p>
                  Mais do que um corpo clínico, reunimos especialistas de elite dedicados à odontologia de alta performance. Aqui, a tecnologia de ponta não é apenas uma ferramenta, mas o meio pelo qual esculpimos resultados milimetricamente planejados para serem funcionais, perenes e esteticamente insuperáveis.
                </p>
                <p>
                  Nosso compromisso é com a exclusividade. Na Spire, cada detalhe — do aroma do ambiente à precisão dos materiais cerâmicos — é pensado para quem não aceita nada menos que a perfeição.
                </p>
              </div>

              <div className="pt-4">
                <button className="bg-linear-to-b from-[#d4af37] to-[#206600] px-12 py-4 rounded-xl text-xl text-white flex items-center justify-center gap-3 font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  Conheça nossa Equipe <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-4 border border-spire-gold/30 rounded-2xl -z-10 group-hover:inset-0 transition-all duration-700"></div>
              <div className="rounded-2xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] h-[500px] md:h-[700px]">
                <img 
                  src="https://i.imgur.com/K3vy38r.png" 
                  alt="Estrutura de Luxo" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="bg-white py-40 px-8 md:px-24" id="method">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center space-y-4 mb-24">
            <h2 className="font-mories text-5xl md:text-6xl text-spire-bordeaux">O Método Spire: Excelência em Cada Detalhe</h2>
            <p className="font-poppins text-gray-600 text-xl max-w-3xl mx-auto font-light">
              Conheça nossa jornada de transformação, onde a tecnologia digital e a precisão artesanal se encontram para criar o seu melhor sorriso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {[
              {
                step: "01",
                title: "Diagnóstico Digital Avançado",
                text: "Iniciamos com o escaneamento intraoral 3D e fotografias de alta definição. Eliminamos as moldagens desconfortáveis e mapeamos sua anatomia com precisão milimétrica.",
                icon: <img src="https://cdn-icons-png.flaticon.com/128/883/883393.png" alt="Diagnóstico" className="w-12 h-12 object-contain filter brightness-0 invert" />
              },
              {
                step: "02",
                title: "Planejamento Virtual Guiado",
                text: "Através do Digital Smile Design, projetamos seu novo sorriso em harmonia com as proporções do seu rosto. Você participa da criação e visualiza o resultado final antes de iniciar o procedimento.",
                icon: <img src="https://cdn-icons-png.flaticon.com/128/567/567014.png" alt="Planejamento" className="w-12 h-12 object-contain filter brightness-0 invert" />
              },
              {
                step: "03",
                title: "Test-Drive do Sorriso (Mock-up)",
                text: "Antes da finalização, aplicamos um protótipo real para que você sinta o conforto e a estética do novo sorriso na prática. Ajustamos cada detalhe para que a perfeição seja absoluta.",
                icon: <img src="https://cdn-icons-png.flaticon.com/128/5997/5997496.png" alt="Test-Drive" className="w-12 h-12 object-contain filter brightness-0 invert" />
              },
              {
                step: "04",
                title: "Execução de Alta Performance",
                text: "Utilizamos materiais de padrão internacional e técnicas minimamente invasivas. Nossa equipe de elite executa o plano com foco total em durabilidade, função e naturalidade.",
                icon: <img src="https://cdn-icons-png.flaticon.com/128/1829/1829892.png" alt="Execução" className="w-12 h-12 object-contain filter brightness-0 invert" />
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-spire-bordeaux p-12 md:p-16 rounded-3xl border border-spire-gold/20 flex flex-col items-start gap-10 hover:shadow-2xl hover:scale-[1.02] transition-all group"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="p-5 bg-white/10 rounded-2xl group-hover:bg-spire-gold transition-colors duration-500">
                    {item.icon}
                  </div>
                  <span className="font-mories text-5xl text-spire-gold/20 italic">{item.step}</span>
                </div>
                <div className="space-y-6">
                  <h3 className="font-mories text-3xl md:text-4xl text-white leading-tight">{item.title}</h3>
                  <p className="font-poppins text-spire-pearl/70 text-lg leading-relaxed font-light">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Editorial Reset */}
      <section className="bg-[#FFFFFF] py-32 px-8 md:px-24 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto text-center mb-24">
          <h2 className="font-mories text-5xl md:text-7xl text-spire-bordeaux tracking-tight">
            A Voz de Nossos Pacientes
          </h2>
          <div className="w-24 h-[1px] bg-spire-gold mx-auto mt-8" />
        </div>

        <div className="max-w-[1440px] mx-auto grid md:grid-cols-3 gap-16 lg:gap-24">
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-10 group"
            >
              {/* Luxury Frame Avatar */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-spire-gold shadow-md relative z-10 transition-transform duration-500 group-hover:scale-105">
                  <img 
                    src={t.avatar} 
                    alt={t.author} 
                    className={`w-full h-full object-cover ${t.objectPosition || 'object-top'}`} 
                  />
                </div>
                {/* Subtle soft glow/shadow behind the frame */}
                <div className="absolute inset-0 rounded-full bg-spire-gold/10 blur-xl -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Star Rating - Discrete Matte Gold */}
              <div className="flex gap-1.5 justify-center">
                {[...Array(5)].map((_, idx) => (
                  <span key={idx} className="text-[12px] text-spire-gold/60">★</span>
                ))}
              </div>

              {/* Depoimento Text */}
              <div className="relative px-4">
                <span className="text-spire-gold font-serif text-4xl opacity-20 absolute -top-6 -left-2 select-none">“</span>
                <p className="font-montserrat text-sm md:text-[15px] leading-relaxed text-[#121212] font-light relative z-10 italic">
                  {t.text}
                </p>
                <span className="text-spire-gold font-serif text-4xl opacity-20 absolute -bottom-6 -right-2 select-none">”</span>
              </div>

              {/* Author Name & Info */}
              <div className="pt-4 flex flex-col items-center">
                <h4 className="font-mories italic text-2xl text-spire-gold tracking-wide mb-2">
                  {t.author}
                </h4>
                {t.role && (
                  <p className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold border-t border-gray-100 pt-3">
                    {t.role}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Units Map */}
      <section className="py-24 px-8 md:px-24 bg-white" id="nossas-unidades">
        <div className="max-w-[1440px] mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="font-mories text-4xl md:text-5xl uppercase text-spire-bordeaux">Nossas Unidades</h2>
            <p className="max-w-5xl mx-auto text-xl font-light text-gray-600">Estamos presentes nos endereços mais exclusivos da cidade.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[1, 2].map((i) => (
              <div key={i} className="space-y-6">
                <div className="aspect-video rounded-3xl border border-spire-bordeaux overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <iframe 
                    className="w-full h-full"
                    src={`https://www.google.com/maps?q=${i === 1 ? 'Avenida+Paulista,+1000' : 'Faria+Lima,+3500'}&output=embed`}
                    allowFullScreen
                  />
                </div>
                <div className="flex items-center justify-center gap-4 text-center px-4">
                  <MapPin className="text-spire-bordeaux" />
                  <span className="font-light text-lg">
                    {i === 1 ? 'Avenida Paulista, 1000 - São Paulo, SP.' : 'Av. Brg. Faria Lima, 3500 - Itaim Bibi, São Paulo - SP.'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="bg-gray-50 py-32 px-8 md:px-24">
        <div className="max-w-[1440px] mx-auto text-center">
          <SectionTitle>Nosso Blog</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {BLOG_POSTS.map((post, i) => (
              <article key={i} className="bg-spire-bordeaux rounded-3xl overflow-hidden h-[500px] flex flex-col text-left">
                <div className="p-4 flex-1 overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="p-8 flex items-end justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-spire-gold text-2xl font-medium mb-4">{post.title}</h3>
                    <p className="text-white/70 text-sm font-light line-clamp-2">{post.excerpt}</p>
                  </div>
                  <button className="bg-spire-gold/20 p-4 rounded-xl text-spire-gold hover:bg-spire-gold transition-colors">
                    <ChevronRight />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-spire-bordeaux pt-32 pb-12 px-8 md:px-24 text-[#E7DDC1] border-t border-spire-gold/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            {/* Col 01: Brand & Social */}
            <div className="space-y-8">
              <img src="https://i.imgur.com/vkxXoad.png" alt="Spire Logo" className="h-10 w-auto" />
              <p className="font-montserrat italic text-sm text-[#E7DDC1]/70 leading-relaxed max-w-[240px]">
                "Elevando a odontologia ao nível de arte e precisão digital."
              </p>
              <div className="flex gap-5 pt-4">
                <a href="#" className="text-spire-gold hover:scale-110 transition-transform">
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
                <a href="#" className="text-spire-gold hover:scale-110 transition-transform">
                  <Facebook size={20} strokeWidth={1.5} />
                </a>
                <a href="#" className="text-spire-gold hover:scale-110 transition-transform">
                  <Linkedin size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Col 02: Explore */}
            <div className="space-y-8">
              <h4 className="font-montserrat text-xs font-bold tracking-[0.2em] text-spire-gold uppercase">Explore</h4>
              <ul className="space-y-4 font-montserrat text-sm">
                {['Início', 'Especialidades', 'Tecnologia', 'Sobre Nós', 'Blog'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-[#E7DDC1] hover:text-spire-gold transition-colors block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 03: Localização */}
            <div className="space-y-8">
              <h4 className="font-montserrat text-xs font-bold tracking-[0.2em] text-spire-gold uppercase">Localização</h4>
              <div className="space-y-8 text-sm font-light leading-relaxed">
                <div className="flex gap-4">
                  <MapPin size={16} className="text-spire-gold shrink-0 mt-1" />
                  <div>
                    <span className="block font-bold text-spire-gold mb-1">Unidade Paulista</span>
                    <p className="text-[#E7DDC1]/80">Avenida Paulista, 1000 - São Paulo, SP.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin size={16} className="text-spire-gold shrink-0 mt-1" />
                  <div>
                    <span className="block font-bold text-spire-gold mb-1">Unidade Faria Lima</span>
                    <p className="text-[#E7DDC1]/80">Av. Brg. Faria Lima, 3500 - Itaim Bibi, São Paulo - SP.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 04: Contato */}
            <div className="space-y-8">
              <h4 className="font-montserrat text-xs font-bold tracking-[0.2em] text-spire-gold uppercase">Contato</h4>
              <div className="space-y-6 text-sm">
                <div className="flex items-center gap-4 text-[#E7DDC1]/80">
                  <Phone size={16} className="text-spire-gold" />
                  <span>(11) 98877-6655</span>
                </div>
                <div className="flex items-center gap-4 text-[#E7DDC1]/80">
                  <Mail size={16} className="text-spire-gold" />
                  <span>contato@spireodontologia.com.br</span>
                </div>
                <button className="mt-4 border border-spire-gold text-spire-gold px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-spire-gold hover:text-spire-bordeaux transition-all rounded">
                  Agendar Consulta
                </button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-spire-gold/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.2em] uppercase text-[#E7DDC1]/40">
            <p>© 2026 SPIRE ODONTOLOGIA. TODOS OS DIREITOS RESERVADOS.</p>
            <p className="font-montserrat">
              DESENVOLVIDO POR <a href="https://www.marketspire.com.br/" target="_blank" rel="noopener noreferrer" className="text-spire-gold hover:text-[#E7DDC1] transition-colors">AGÊNCIA MARKETSPIRE</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
