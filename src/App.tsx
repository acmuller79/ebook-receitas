import React from 'react';
import { 
  CheckCircle2, 
  Lightbulb, 
  Salad, 
  CircleHelp, 
  Sandwich, 
  RefreshCw, 
  MoveRight, 
  ArrowDown, 
  HeartPulse, 
  BatteryCharging, 
  Clock, 
  Smile, 
  ArrowRight,
  BookOpen,
  Sparkles,
  Flame,
  ShoppingBag,
  Zap,
  Users,
  Gift,
  ShieldCheck,
  AlertCircle,
  TrendingDown,
  Coins,
  History,
  Check
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-gray-800 font-sans overflow-x-hidden">
      
      {/* STICKY CTA (Mobile only) */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 z-[100] md:hidden">
        <button className="w-full bg-brand-red text-white py-4 rounded-xl font-black shadow-lg shadow-brand-red/30 flex items-center justify-center gap-2 animate-bounce-subtle">
           <span>¡CONSEGUIR MI PACK AHORA!</span>
           <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* FLASH ANNOUNCEMENT */}
      <div className="bg-brand-red text-white py-2 px-4 text-center text-xs font-black tracking-widest uppercase animate-pulse">
        ⏳ OFERTA DE LANZAMIENTO: 50% DE DESCUENTO SOLO POR LAS PRÓXIMAS 24 HORAS
      </div>
      
      {/* HEADER / HERO SECTION */}
      <header className="max-w-5xl mx-auto px-4 pt-12 pb-8 md:pt-16 md:pb-12 text-center md:text-left flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="font-display font-bold leading-[1.1] flex flex-col">
            <span className="text-brand-green text-5xl md:text-6xl tracking-tight">LUNES MOTIVADA.</span>
            <span className="text-brand-yellow text-5xl md:text-6xl tracking-tight mt-1">MIÉRCOLES CANSADA.</span>
            <span className="text-brand-red text-5xl md:text-6xl tracking-tight mt-1">DOMINGO... CULPABLE.</span>
          </h1>
          
          <div className="mt-8 pt-4">
            <span className="brush-stroke text-white font-extrabold text-xl md:text-2xl shadow-sm">
              No es falta de fuerza de voluntad.
            </span>
          </div>
          
          <p className="text-2xl md:text-4xl font-bold mt-4 text-gray-800">
            Es que estás <span className="underline decoration-brand-red decoration-4 opacity-90">improvisando</span><br />
            cada día lo que comes.
          </p>
        </div>

        <div className="w-full md:w-2/5 mt-8 md:mt-0 relative">
          <div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1512427691650-15fcce1dc7b1?auto=format&fit=crop&w=800&q=80" 
              alt="Mujer frustrada con su alimentación"
              className="object-cover w-full h-full opacity-90 transition-opacity duration-500"
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </header>

      {/* THE CYCLE SECTION */}
      <section className="bg-white py-12 border-y border-gray-200 shadow-sm relative z-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          
          <div className="inline-block mb-10">
            <span className="brush-stroke brush-stroke-red text-white font-extrabold text-lg md:text-xl shadow-sm tracking-wide">
              Y ASÍ ES IMPOSIBLE AVANZAR
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mt-6">
            {/* Step 1 */}
            <div className="flex flex-col items-center max-w-[160px] text-center group cursor-default">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-3 shadow-sm border border-green-100 transition-transform group-hover:scale-110">
                <Salad className="w-10 h-10 text-brand-green" />
              </div>
              <p className="font-bold text-gray-700 leading-tight">Comes bien<br/>2 días...</p>
            </div>

            <ArrowDown className="text-brand-red w-8 h-8 md:hidden my-2" />
            <MoveRight className="text-brand-red w-8 h-8 hidden md:block opacity-50" />

            {/* Step 2 */}
            <div className="flex flex-col items-center max-w-[160px] text-center group cursor-default">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-3 shadow-sm border border-gray-200 transition-transform group-hover:scale-110">
                <CircleHelp className="w-10 h-10 text-gray-500" />
              </div>
              <p className="font-bold text-gray-700 leading-tight">Luego no sabes<br/>qué preparar...</p>
            </div>

            <ArrowDown className="text-brand-red w-8 h-8 md:hidden my-2" />
            <MoveRight className="text-brand-red w-8 h-8 hidden md:block opacity-50" />

            {/* Step 3 */}
            <div className="flex flex-col items-center max-w-[160px] text-center group cursor-default">
              <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mb-3 shadow-sm border border-yellow-100 transition-transform group-hover:scale-110">
                <Sandwich className="w-10 h-10 text-brand-yellow" />
              </div>
              <p className="font-bold text-gray-700 leading-tight">Terminas comiendo<br/>cualquier cosa...</p>
            </div>

            <ArrowDown className="text-brand-red w-8 h-8 md:hidden my-2" />
            <MoveRight className="text-brand-red w-8 h-8 hidden md:block opacity-50" />

            {/* Step 4 */}
            <div className="flex flex-col items-center max-w-[160px] text-center group cursor-default">
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-3 shadow-sm border border-red-100 transition-transform group-hover:scale-110">
                <RefreshCw className="w-10 h-10 text-brand-red" />
              </div>
              <p className="font-bold text-gray-700 leading-tight">Y vuelves a<br/>empezar.</p>
            </div>
          </div>

        </div>
      </section>
      
      {/* THE SHIFT (SOLUTION) */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Ese ciclo <span className="text-brand-red font-extrabold uppercase">NO</span> se rompe con más disciplina.
        </h2>
        <div className="mt-4 mb-10">
          <span className="brush-stroke text-white font-extrabold text-2xl md:text-4xl shadow-md">
            Se rompe con un sistema.
          </span>
        </div>

        <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm flex items-start gap-4 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/5 rounded-bl-full -z-0"></div>
          
          <div className="flex-shrink-0 z-10">
            <Lightbulb className="w-10 h-10 text-brand-green" />
          </div>
          <div className="z-10">
            <p className="text-lg md:text-xl text-gray-700 font-medium">La mayoría no necesita otra dieta.</p>
            <p className="text-lg md:text-xl font-bold text-brand-green mt-1">
              <span className="underline decoration-brand-green decoration-2 underline-offset-4">
                Necesita dejar de pensar qué comer cada día.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* THE OFFER SECTION - VISUAL SHOWCASE */}
      <section className="bg-[#FAF7F0] py-16 px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center md:text-left mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-800 leading-tight">
              ESTO ES LO QUE <span className="text-brand-green">CONSEGUIRÁS</span><br className="hidden md:block" /> CON NUESTRO SISTEMA:
            </h2>
            <div className="w-24 h-1.5 bg-brand-yellow mt-4 mx-auto md:mx-0 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Features (Left) */}
            <div className="space-y-6">
              <ul className="space-y-5">
                {[
                  { text: "2 MESES de MENÚS", sub: "Planificados semana a semana", badge: "Ahorra Tiempo" },
                  { text: "+400 RECETAS", sub: "100% Antiinflamatorias y deliciosas", badge: "Variedad Total" },
                  { text: "LISTA DE LA COMPRA", sub: "Ahorra tiempo en el supermercado", badge: "Organización" },
                  { text: "OPCIONES REALES", sub: "Ingredientes que ya tienes en casa", badge: "Sin Gastos Extra" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="mt-1 transition-transform group-hover:scale-110">
                      <CheckCircle2 className="w-7 h-7 text-brand-green fill-brand-green/10" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <p className="font-black text-gray-800 md:text-2xl uppercase leading-none tracking-tight">{item.text}</p>
                        <span className="bg-brand-yellow/20 text-brand-yellow text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-gray-500 mt-1">{item.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="bg-brand-green text-white p-6 rounded-2xl font-bold shadow-xl transform -rotate-1 text-center md:text-left mt-10 inline-block">
                <p className="text-xl md:text-2xl leading-tight">
                  <span className="opacity-80">Olvídate de la pregunta:</span><br/>
                  <span className="text-3xl tracking-tighter">"¿Y hoy qué cocino?"</span>
                </p>
              </div>
            </div>

            {/* Mockup Visual (Right) */}
            <div className="relative flex justify-center py-12">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-yellow/10 blur-3xl rounded-full -z-0"></div>
              
              <div className="relative w-full max-w-[320px] aspect-[4/5] z-10 perspective-1000">
                
                {/* Book 1 - Recetas */}
                <div className="absolute top-4 right-[-10%] w-[85%] h-[85%] bg-white rounded-r-lg shadow-[20px_20px_60px_rgba(0,0,0,0.15)] border-y border-r border-gray-100 flex flex-col items-center justify-start overflow-hidden transform rotate-6 hover:rotate-3 transition-all duration-500 origin-bottom-left group">
                  <div className="absolute left-0 top-0 w-4 h-full bg-gradient-to-r from-gray-200 to-transparent opacity-50"></div>
                  <div className="w-full text-center p-6 bg-brand-green/5 flex-1 flex flex-col justify-center">
                    <p className="text-[10px] font-black text-brand-green uppercase tracking-widest mb-1">MÁS DE</p>
                    <h3 className="font-display font-bold text-5xl md:text-6xl text-brand-green leading-none">400</h3>
                    <h3 className="font-display font-black text-2xl text-gray-800 leading-none mt-1">RECETAS</h3>
                  </div>
                  <div className="w-full h-1/2 p-2 bg-gray-50">
                    <img 
                      src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80" 
                      className="w-full h-full object-cover rounded shadow-inner" 
                      alt="Recetas" 
                      referrerPolicy="no-referrer"
                      crossOrigin="anonymous"
                    />
                  </div>
                </div>
                
                {/* Book 2 - Menus */}
                <div className="absolute top-0 left-[-10%] w-[85%] h-[85%] bg-white rounded-r-lg shadow-[25px_25px_80px_rgba(0,0,0,0.25)] border-y border-r border-gray-200 flex flex-col items-center justify-start overflow-hidden transform -rotate-3 hover:translate-x-[-5px] hover:translate-y-[-5px] transition-all duration-500 z-10 origin-bottom-right">
                   <div className="absolute left-0 top-0 w-3 h-full bg-gradient-to-r from-gray-200 to-transparent opacity-30"></div>
                   <div className="w-full text-center p-6 flex-1 flex flex-col justify-center">
                    <h3 className="font-display font-black text-4xl text-gray-800 leading-none">MENÚS</h3>
                    <div className="h-1 w-10 bg-brand-red mx-auto my-3"></div>
                    <p className="font-black text-brand-green text-xl uppercase tracking-tighter">2 MESES</p>
                  </div>
                  <div className="w-full h-1/2 p-2 relative bg-gray-50">
                    <img 
                      src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80" 
                      className="w-full h-full object-cover rounded shadow-inner" 
                      alt="Menús" 
                      referrerPolicy="no-referrer"
                      crossOrigin="anonymous"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                  </div>
                </div>

                {/* Smartphone */}
                <div className="absolute -bottom-6 -right-4 w-[45%] aspect-[1/2] bg-[#1a1a1a] rounded-[2rem] p-1 shadow-2xl z-20 transform rotate-12 border-4 border-[#333]">
                  <div className="w-full h-full bg-white rounded-[1.8rem] overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=300&q=80" 
                      className="w-full h-full object-cover" 
                      alt="App de Recetas" 
                      referrerPolicy="no-referrer"
                      crossOrigin="anonymous"
                    />
                    <div className="absolute inset-0 bg-brand-green/20 flex items-center justify-center">
                       <p className="text-[8px] font-black text-white uppercase text-center bg-brand-green py-1 px-2 rounded-full rotate-[-15deg] shadow-lg">Digital</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR? SECTION */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-gray-800 mb-4">
              ¿Es este <span className="text-brand-red">PACK</span> para ti?
            </h2>
            <p className="text-gray-600 text-lg">Si te identificas con alguna de estas situaciones, la respuesta es 100% SÍ.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                title: "Vives con prisa y no tienes tiempo", 
                desc: "Llegas cansada del trabajo y terminas pidiendo comida rápida o picando cualquier cosa del refrigerador.", 
                icon: <Clock className="w-6 h-6 text-brand-red" /> 
              },
              { 
                title: "Te sientes hinchada constantemente", 
                desc: "Sufres de inflamación abdominal, pesadez después de comer y falta de energía durante el día.", 
                icon: <TrendingDown className="w-6 h-6 text-brand-green" /> 
              },
              { 
                title: "Odias pensar qué cocinar", 
                desc: "Te estresas cada día decidiendo el menú y al final terminas repitiendo siempre las mismas 3 recetas aburridas.", 
                icon: <AlertCircle className="w-6 h-6 text-brand-yellow" /> 
              },
              { 
                title: "Quieres cuidar a tu familia", 
                desc: "Quieres que tus hijos y pareja coman sano pero sin que parezca 'comida de hospital' o sin sabor.", 
                icon: <HeartPulse className="w-6 h-6 text-brand-red" /> 
              }
            ].map((box, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex gap-6 items-start hover:shadow-md transition-shadow">
                <div className="bg-gray-50 p-4 rounded-2xl flex-shrink-0">{box.icon}</div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800 mb-2">{box.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{box.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OUR METHOD IS DIFFERENT */}
      <section className="py-20 px-4 text-white bg-gray-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-brand-green rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-brand-red rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-6xl mb-8 leading-tight">
                No es una dieta,<br/>es <span className="text-brand-green italic">libertad.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                    <Coins className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Ahorras más de $150 al mes</h4>
                    <p className="text-gray-400">Al dejar de improvisar, dejas de tirar comida que se pudre en el refrigerador y dejas de pedir delivery caro.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                    <History className="w-6 h-6 text-brand-yellow" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Ganarás 5 horas cada semana</h4>
                    <p className="text-gray-400">Nuestro sistema de listas de compra inteligentes te permite hacer el súper en la mitad de tiempo.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-red/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Recetas para toda la familia</h4>
                    <p className="text-gray-400">Sabores reales que les gustarán a todos, no solo a ti. Se acabó cocinar dos platos diferentes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-[3rem] p-8 border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" 
                alt="Madre e hija cocinando" 
                className="rounded-2xl shadow-2xl mb-8"
                referrerPolicy="no-referrer"
              />
              <blockquote className="italic text-xl text-gray-300 border-l-4 border-brand-green pl-6">
                "Desde que uso el Pack, la paz ha vuelto a mi cocina. Sé qué voy a comer, ahorro dinero y mi barriga ya no está siempre hinchada."
                <footer className="mt-4 text-brand-green font-bold text-sm uppercase">— María G., Cliente Satisfecha</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* BONUSES SECTION */}
      <section className="py-20 px-4 bg-brand-red">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 text-white">
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-4">
              🎁 ¡REGALOS EXCLUSIVOS!
            </h2>
            <p className="text-xl opacity-90 font-medium">Si compras el Pack Completo hoy, te llevas esto GRATIS:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Guía de Snacks Saludables", 
                val: "$12,00", 
                img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=400&q=80" 
              },
              { 
                title: "Plan de Salsas Sin Azúcar", 
                val: "$15,00", 
                img: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=400&q=80" 
              },
              { 
                title: "Masterclass: Desinflámate", 
                val: "$29,00", 
                img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80" 
              }
            ].map((bonus, i) => (
              <div key={i} className="bg-white rounded-3xl p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-square rounded-2xl overflow-hidden relative">
                   <img src={bonus.img} alt={bonus.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                   <div className="absolute top-4 right-4 bg-brand-red text-white font-bold py-1 px-3 rounded-full text-xs shadow-lg">GRATIS</div>
                </div>
                <div className="p-6 text-center">
                   <h3 className="font-black text-gray-800 text-lg uppercase leading-tight mb-2">{bonus.title}</h3>
                   <p className="text-brand-red font-bold text-sm line-through opacity-40">Valorado en {bonus.val}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-white/80 font-bold uppercase tracking-widest text-sm bg-black/10 py-4 px-8 rounded-full inline-block mx-auto">
             Valor Total de Bonos: $56,00 <span className="text-white">— Hoy: $0,00</span>
          </div>
        </div>
      </section>

      {/* DETAILED INFO SECTION */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-gray-800 mb-6 leading-tight">
              Transforma tu Salud con Nuestras<br className="hidden md:block" /> 
              <span className="text-brand-red">Recetas Antiinflamatorias</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
              Descubre el poder de la alimentación para reducir la inflamación y mejorar tu bienestar general. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: <BookOpen className="w-8 h-8 text-brand-green" />, title: "+400 Recetas Exclusivas", text: "Variedad increíble de platos deliciosos." },
              { icon: <Sparkles className="w-8 h-8 text-brand-yellow" />, title: "Ingredientes Clave", text: "Seleccionados por su poder antiinflamatorio." },
              { icon: <Flame className="w-8 h-8 text-brand-red" />, title: "Especias Poderosas", text: "Domina el uso de cúrcuma, jengibre y más." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl border border-gray-100 bg-brand-bg/30 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-green/[0.03] rounded-[3rem] p-8 md:p-16 border border-brand-green/10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h3 className="font-display font-bold text-3xl text-gray-800 mb-8">Beneficios:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Menos dolor", "Más energía", "Mejor digestión", "Piel sana"].map((b, i) => (
                    <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                      <Check className="w-5 h-5 text-brand-green" />
                      <span className="font-bold text-gray-700">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80" 
                  className="w-full h-full object-cover" 
                  alt="Comida Saludable" 
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE & FAQ SECTION */}
      <section className="bg-white py-20 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          
          {/* Guarantee */}
          <div className="bg-gray-50 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border-2 border-dashed border-gray-200 mb-20 text-center md:text-left">
            <ShieldCheck className="w-32 h-32 text-brand-green flex-shrink-0" />
            <div>
              <h3 className="font-display font-bold text-3xl text-gray-800 mb-4 tracking-tight">Compra sin ningún riesgo</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Estamos tan seguros de que este sistema cambiará tu vida que te damos <strong>7 días de garantía completa</strong>. Si el material no es lo que esperabas, te devolvemos el 100% de tu inversión. Sin preguntas incómodas.
              </p>
              <div className="font-black text-brand-green text-sm uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Garantía Blindada de Satisfacción
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-gray-800 text-center mb-12">Preguntas Frecuentes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h4 className="font-black text-lg text-brand-red uppercase">¿Cómo recibo el material?</h4>
                <p className="text-gray-600 font-medium">Inmediatamente después del pago, recibirás un correo con acceso directo a todos los archivos en formato PDF, listos para ver en tu celular, tablet o imprimir.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-black text-lg text-brand-red uppercase">¿Necesito ingredientes caros?</h4>
                <p className="text-gray-600 font-medium">¡Para nada! El 95% de los ingredientes los encuentras en cualquier supermercado de barrio. No usamos ingredientes 'exóticos' imposibles de conseguir.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-black text-lg text-brand-red uppercase">¿El pago es mensual?</h4>
                <p className="text-gray-600 font-medium">No. Es un pago <strong>único</strong>. Pagas hoy y tienes acceso ilimitado de por vida al material y a todas las actualizaciones futuras de forma gratuita.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-black text-lg text-brand-red uppercase">¿Sirve para principiantes?</h4>
                <p className="text-gray-600 font-medium">Sí, las recetas están explicadas paso a paso de forma muy sencilla. Incluso si nunca has cocinado, podrás preparar estos platos sin problema.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="bg-brand-bg py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-800 mb-4">
              Elige tu <span className="text-brand-green">Plan</span> de Salud
            </h2>
            <p className="text-gray-600 text-lg">Inversión única, acceso inmediato.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Solo Recetas */}
            <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-xl flex flex-col">
              <h3 className="font-black text-2xl text-gray-800 uppercase mb-2">SÓLO RECETAS</h3>
              <div className="font-display font-black text-gray-800 flex items-start mb-8">
                <span className="text-2xl mt-2 mr-1 opacity-60">$</span>
                <span className="text-6xl">9,90</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {["+400 Recetas Antiinflamatorias", "Ingredientes Naturales", "Fácil de Preparar"].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-green" />
                    <span className="font-bold text-sm uppercase tracking-wide">{t}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gray-800 hover:bg-black text-white py-4 rounded-xl font-black transition-all flex items-center justify-center gap-2">
                <span>COMPRAR RECETAS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Pack Completo */}
            <div className="bg-white border-4 border-brand-green rounded-3xl p-8 shadow-2xl relative transform md:scale-105 flex flex-col">
              <div className="absolute top-0 right-0 bg-brand-green text-white px-6 py-2 rounded-bl-2xl font-black text-[10px] uppercase">Recomendado</div>
              <h3 className="font-black text-2xl text-brand-green uppercase mb-2">PACK COMPLETO</h3>
              <div className="font-display font-black text-brand-red flex items-start mb-8">
                <span className="text-2xl mt-2 mr-1 opacity-60">$</span>
                <span className="text-6xl">14,90</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {["+400 Recetas", "2 MESES DE MENÚS", "LISTAS DE COMPRA", "TODOS LOS BONOS GRATIS", "Sistema Completo"].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-800">
                    <CheckCircle2 className="w-5 h-5 text-brand-green" />
                    <span className={`font-black text-sm uppercase tracking-wide ${t === "TODOS LOS BONOS GRATIS" ? "text-brand-red animate-pulse" : ""}`}>{t}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-brand-red hover:bg-[#B32D25] text-white py-5 rounded-xl font-black shadow-lg transition-all flex items-center justify-center gap-2 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10 text-xl uppercase tracking-tighter">SÍ, QUIERO EL PACK COMPLETO</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER BENEFITS */}
      <section className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: <HeartPulse className="w-8 h-8 text-brand-green" />, text: "Menos Inflamación" },
            { icon: <BatteryCharging className="w-8 h-8 text-brand-green" />, text: "Más Energía" },
            { icon: <Clock className="w-8 h-8 text-brand-red" />, text: "Ahorra Tiempo" },
            { icon: <Smile className="w-8 h-8 text-brand-green" />, text: "Resultados Reales" }
          ].map((b, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              {b.icon}
              <p className="font-bold text-sm text-gray-700 uppercase leading-tight">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-brand-green py-6 px-4 text-center font-display font-bold text-white text-2xl uppercase">
        Tu cuerpo te lo agradecerá ❤️
      </footer>

    </div>
  );
}
