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
  Calendar,
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
        <a 
          href="https://pay.hotmart.com/K105829709J"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).fbq) {
              (window as any).fbq('track', 'InitiateCheckout');
            }
          }}
          className="w-full bg-brand-red text-white py-4 rounded-xl font-black shadow-lg shadow-brand-red/30 flex items-center justify-center gap-2 animate-bounce-subtle outline-none"
        >
           <span>¡CONSEGUIR MI PACK AHORA!</span>
           <ArrowRight className="w-5 h-5" />
        </a>
      </div>

      {/* FLASH ANNOUNCEMENT */}
      <div className="bg-brand-red text-white py-2 px-4 text-center text-xs font-black tracking-widest uppercase animate-pulse">
        ⏳ OFERTA DE LANZAMIENTO: 50% DE DESCUENTO SOLO POR LAS PRÓXIMAS 24 HORAS
      </div>
      
      {/* HEADER / HERO SECTION */}
      <header className="max-w-5xl mx-auto px-4 pt-8 pb-8 md:pt-12 md:pb-12 text-center md:text-left flex flex-col md:flex-row items-center gap-12 relative">
        <div className="flex-1 space-y-6 relative">
          
          {/* HIGH PROMINENCE RECIPE COUNTER */}
          <div className="inline-flex items-center gap-3 bg-white border-2 border-brand-green/20 p-1 pr-4 rounded-full shadow-lg shadow-brand-green/5 mb-2 transform -rotate-1 hover:rotate-0 transition-transform">
            <div className="bg-brand-green text-white font-black px-4 py-2 rounded-full text-xl animate-pulse">
               +400
            </div>
            <span className="text-brand-green font-black text-sm uppercase tracking-widest">Recetas Exclusivas</span>
          </div>

          <h1 className="font-display font-bold leading-[1.1] flex flex-col relative z-10">
            <span className="text-gray-400 text-sm uppercase tracking-[0.3em] font-medium mb-2">TRANSFORMA</span>
            <span className="text-brand-green text-6xl md:text-8xl tracking-tighter">TU SALUD</span>
            <span className="text-gray-400 text-lg font-script italic lowercase mt-2">con nuestras</span>
            <span className="text-brand-yellow text-5xl md:text-7xl tracking-tight mt-1 leading-none">RECETAS</span>
            <span className="bg-brand-green text-white px-4 py-2 rounded-lg text-4xl md:text-5xl mt-2 inline-block w-fit">ANTIINFLAMATORIAS</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium mt-8 text-gray-600 max-w-xl leading-relaxed">
            Deliciosas, fáciles y llenas de nutrientes para <span className="text-brand-green font-bold">reducir la inflamación</span> y mejorar tu bienestar cada día.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            {[
              { icon: <CheckCircle2 className="w-5 h-5 text-brand-green" />, text: "MENOS DOLOR Y RIGIDEZ" },
              { icon: <CheckCircle2 className="w-5 h-5 text-brand-green" />, text: "MÁS ENERGÍA Y VITALIDAD" },
              { icon: <CheckCircle2 className="w-5 h-5 text-brand-green" />, text: "PIEL MÁS SANA" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white px-4 py-3 rounded-2xl shadow-sm border border-gray-100">
                {item.icon}
                <span className="text-xs font-black text-gray-700 tracking-tight uppercase">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-2/5 mt-8 md:mt-0 relative group">
          {/* FLOATING BADGE */}
          <div className="absolute top-4 right-4 md:-top-10 md:-right-10 w-40 h-40 bg-brand-yellow rounded-full flex flex-col items-center justify-center text-white shadow-[0_20px_50px_rgba(236,164,42,0.4)] z-30 transform rotate-12 group-hover:rotate-0 transition-transform duration-500 border-8 border-white cursor-default">
             <span className="text-sm font-black uppercase tracking-tighter opacity-80">MÁS DE</span>
             <span className="text-5xl font-black">+400</span>
             <span className="text-xs font-black uppercase tracking-widest mt-1">RECETAS</span>
             <span className="text-[8px] font-black uppercase tracking-widest opacity-60">EXCLUSIVAS</span>
          </div>
          
          <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] relative border-[12px] border-white ring-1 ring-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80" 
              alt="Plato saludable de salmón y verduras antiinflamatorio"
              className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-1000"
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
            
            {/* BOTTOM OVERLAY INFO */}
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1 opacity-80">Alimentación Funcional</p>
              <h3 className="text-2xl font-black tracking-tight leading-none italic">COME BIEN, SIÉNTETE MEJOR, VIVE MÁS</h3>
            </div>
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
                  { text: "+400 RECETAS EXCLUSIVAS", sub: "Recetas diseñadas para desinflamar", badge: "+400 RECETAS" },
                  { text: "PLAN DE 8 SEMANAS", sub: "Plan de menús completos (2 meses)", badge: "ORGANIZACIÓN" },
                  { text: "MÁS ENERGÍA Y VITALIDAD", sub: "Siéntete ligera y activa cada día", badge: "BIENESTAR" },
                  { text: "SISTEMA INMUNOLÓGICO", sub: "Más fuerte y protegido", badge: "PROTECCIÓN" },
                  { text: "SALUD DIGESTIVA", sub: "Adiós a la pesadez abdominal", badge: "DIGESTIÓN" }
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
                  <span className="opacity-80 uppercase tracking-tighter text-sm">COME BIEN, SIÉNTETE MEJOR, VIVE MÁS</span><br/>
                  <span className="text-3xl tracking-tighter">Resultados Reales.</span>
                </p>
              </div>
            </div>

            {/* Mockup Visual (Right) */}
            <div className="relative flex justify-center py-12">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-yellow/10 blur-3xl rounded-full -z-0"></div>
              
              <div className="relative w-full max-w-[320px] aspect-[4/5] z-10 perspective-1000">
                
                {/* Book 2 - Plan de 8 Semanas (New) */}
                <div className="absolute top-4 left-[-15%] w-[85%] h-[85%] bg-white rounded-r-2xl shadow-[20px_20px_80px_rgba(0,0,0,0.15)] border-y border-r border-gray-100 flex flex-col items-center justify-start overflow-hidden transform -rotate-6 hover:-rotate-3 transition-all duration-500 z-10 origin-bottom-right">
                   <div className="absolute left-0 top-0 w-3 h-full bg-gradient-to-r from-gray-200 to-transparent opacity-30"></div>
                   <div className="w-full text-center p-4 flex-1 flex flex-col justify-center bg-brand-yellow/5">
                    <p className="text-[6px] font-black text-gray-400 uppercase tracking-[0.2em]">E-BOOK</p>
                    <h3 className="font-display font-black text-2xl text-gray-800 leading-none uppercase mt-1">PLAN DE <br/>MENÚS</h3>
                    <div className="h-1 w-8 bg-brand-red mx-auto my-2"></div>
                    <p className="font-black text-brand-yellow text-[10px] uppercase tracking-widest leading-none">8 SEMANAS</p>
                  </div>
                  <div className="w-full h-1/2 p-2 relative bg-gray-50 border-t border-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80" 
                      className="w-full h-full object-cover rounded shadow-inner" 
                      alt="Plan de Menús" 
                      referrerPolicy="no-referrer"
                      crossOrigin="anonymous"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                  </div>
                </div>

                {/* Main Book - Recetas Antiinflamatorias */}
                <div className="absolute top-0 right-[-5%] w-[90%] h-full bg-white rounded-r-2xl shadow-[30px_30px_100px_rgba(34,139,34,0.15)] border-y border-r border-gray-100 flex flex-col items-center justify-start overflow-hidden transform group-hover:scale-[1.02] transition-all duration-700 z-20">
                  <div className="absolute left-0 top-0 w-6 h-full bg-gradient-to-r from-gray-200 to-transparent opacity-40"></div>
                  
                  {/* Cover Header */}
                  <div className="w-full text-center p-6 pb-2">
                    <p className="text-[8px] font-black text-gray-400 uppercase tracking-[0.3em] mb-1">TRANSFORMA</p>
                    <h3 className="font-display font-black text-3xl text-brand-green leading-none tracking-tighter">TU SALUD</h3>
                    <p className="text-[10px] font-script italic text-gray-400 my-1">con nuestras</p>
                    <h4 className="font-display font-black text-xl text-gray-800 leading-tight">RECETAS</h4>
                    <div className="bg-brand-green text-white text-[10px] font-black py-1 px-2 rounded-sm inline-block mx-auto mt-1 uppercase tracking-widest">ANTIINFLAMATORIAS</div>
                  </div>

                  {/* Main Cover Image */}
                  <div className="w-full h-1/2 p-4 relative">
                    <div className="absolute top-2 right-2 w-14 h-14 bg-brand-yellow rounded-full border-4 border-white shadow-lg flex flex-col items-center justify-center text-white z-30">
                      <span className="text-[6px] font-black">MÁS DE</span>
                      <span className="text-sm font-black leading-none">+400</span>
                      <span className="text-[5px] font-black leading-none">RECETAS</span>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" 
                      className="w-full h-full object-cover rounded-xl shadow-inner border border-gray-50" 
                      alt="Recetas Saludables" 
                      referrerPolicy="no-referrer"
                      crossOrigin="anonymous"
                    />
                  </div>

                  {/* Cover Footer Icons */}
                  <div className="w-full px-6 py-4 space-y-2 mt-auto bg-gray-50/50">
                    {[
                      { icon: <Check className="w-3 h-3 text-brand-green" />, text: "MENOS DOLOR" },
                      { icon: <Zap className="w-3 h-3 text-brand-green" />, text: "MÁS ENERGÍA" },
                      { icon: <ShieldCheck className="w-3 h-3 text-brand-green" />, text: "SISTEMA INMUNE" }
                    ].map((li, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border border-brand-green flex items-center justify-center">
                          {li.icon}
                        </div>
                        <span className="text-[7px] font-black text-gray-600 uppercase tracking-widest">{li.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Footer Band */}
                  <div className="w-full bg-brand-green py-2 text-[6px] text-white font-black text-center uppercase tracking-widest mt-auto">
                    LISTA DE COMPRAS • INSTRUCCIONES • INGREDIENTES
                  </div>
                </div>
                
                {/* Smartphone Overlapped */}
                <div className="absolute -bottom-10 -right-8 w-[55%] aspect-[1/2] bg-[#1a1a1a] rounded-[2.5rem] p-1.5 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] z-30 transform rotate-[15deg] transition-transform group-hover:rotate-[8deg] duration-500 border-4 border-[#333]">
                  <div className="w-full h-full bg-white rounded-[1.8rem] overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=300&q=80" 
                      className="w-full h-full object-cover" 
                      alt="App de Recetas" 
                      referrerPolicy="no-referrer"
                      crossOrigin="anonymous"
                    />
                    <div className="absolute inset-0 bg-brand-green/40 flex flex-col items-center justify-center p-4">
                       <div className="bg-white p-2 rounded-lg shadow-xl scale-[0.6] origin-center">
                          <p className="text-[6px] font-black text-gray-400 uppercase tracking-[0.3em] mb-1">TRANSFORMA</p>
                          <h4 className="font-display font-black text-xl text-brand-green tracking-tighter">TU SALUD</h4>
                          <div className="bg-brand-green text-white text-[8px] font-black py-0.5 px-2 mt-1">ANTIINFLAMATORIA</div>
                       </div>
                       <p className="text-[8px] font-black text-white uppercase text-center bg-brand-red py-1 px-4 rounded-full mt-2 shadow-lg tracking-widest">Digital</p>
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            {[
              { icon: <Calendar className="w-8 h-8 text-brand-green" />, title: "Plan de 8 Semanas", text: "Menús antiinflamatorios y equilibrados para transformar tus hábitos." },
              { icon: <ShoppingBag className="w-8 h-8 text-brand-green" />, title: "Lista de Compras", text: "Completa y organizada por categorías para ahorrar tiempo." },
              { icon: <BookOpen className="w-8 h-8 text-brand-green" />, title: "Instrucciones Claras", text: "Pasos fáciles de seguir para resultados perfectos." },
              { icon: <Sparkles className="w-8 h-8 text-brand-yellow" />, title: "Ingredientes Naturales", text: "Poderosos alimentos seleccionados para tu salud." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl border border-gray-100 bg-brand-bg/30 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-green/[0.03] rounded-[3rem] p-8 md:p-16 border border-brand-green/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
              <div className="flex-1 space-y-6">
                <div className="inline-block bg-brand-green text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">
                  Enfoque en Resultados
                </div>
                <h3 className="font-display font-bold text-3xl md:text-5xl text-gray-800 leading-tight">
                  Tu Hoja de Ruta para <span className="text-brand-green italic">Desinflamarte</span>
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed font-black">
                  Plan completo de 8 semanas con menús antiinflamatorios, recetas saludables y comidas equilibradas para ayudarte a reducir la inflamación, mejorar tu energía y transformar tu alimentación.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed italic border-l-4 border-brand-yellow pl-6">
                  Incluye opciones prácticas, nutritivas y fáciles de preparar para crear hábitos saludables, fortalecer tu bienestar y disfrutar de una vida más ligera, saludable y llena de vitalidad cada día.
                </p>
                
                <div className="flex flex-wrap gap-3 pt-4">
                  {[
                    { icon: <Check className="w-4 h-4" />, text: "Menús Semanales" },
                    { icon: <Check className="w-4 h-4" />, text: "Comidas Equilibradas" },
                    { icon: <Check className="w-4 h-4" />, text: "Sin Improvisación" },
                    { icon: <Check className="w-4 h-4" />, text: "Hábitos Reales" }
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-gray-100 px-4 py-2 rounded-xl shadow-sm">
                      <div className="text-brand-green">{feat.icon}</div>
                      <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest">{feat.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="w-full md:w-1/3 group">
                <div className="aspect-[3/4] bg-white rounded-3xl shadow-2xl overflow-hidden border-[12px] border-white ring-1 ring-gray-100 transform rotate-3 group-hover:rotate-0 transition-transform duration-500 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt="Plan de menús" 
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col items-center justify-end p-8 text-white">
                    <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-80">Incluido en el Pack</p>
                    <p className="font-display font-black text-4xl leading-none">8 SEMANAS</p>
                    <p className="text-[8px] font-black uppercase tracking-widest mt-2 border-t border-white/30 pt-2">Plan de Transformación</p>
                  </div>
                </div>
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
              <a 
                href="https://pay.hotmart.com/B105826536U"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).fbq) {
                    (window as any).fbq('track', 'InitiateCheckout', { content_name: 'Solo Recetas' });
                  }
                }}
                className="w-full bg-gray-800 hover:bg-black text-white py-4 rounded-xl font-black transition-all flex items-center justify-center gap-2"
              >
                <span>COMPRAR RECETAS</span>
                <ArrowRight className="w-4 h-4" />
              </a>
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
                {["+400 Recetas", "PLAN DE MENÚS (8 SEMANAS)"].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-800">
                    <CheckCircle2 className="w-5 h-5 text-brand-green" />
                    <span className="font-black text-sm uppercase tracking-wide">{t}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://pay.hotmart.com/K105829709J"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).fbq) {
                    (window as any).fbq('track', 'InitiateCheckout', { content_name: 'Pack Completo' });
                  }
                }}
                className="w-full bg-brand-red hover:bg-[#B32D25] text-white py-5 rounded-xl font-black shadow-lg transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10 text-xl uppercase tracking-tighter">SÍ, QUIERO EL PACK COMPLETO</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
              </a>
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
            { icon: <ShieldCheck className="w-8 h-8 text-brand-red" />, text: "Sistema Inmune" },
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
