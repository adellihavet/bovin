
import React, { useState, useRef, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { CONTENT, IMAGES } from './constants';
import Quiz from './components/Quiz';
import AlgeriaMap from './components/AlgeriaMap';
import ImageWithSkeleton from './components/ImageWithSkeleton';
import PronunciationBtn from './components/PronunciationBtn';
import ImageZoomModal from './components/ImageZoomModal';
import { Lock, Award, BookOpen, Activity, Map, Microscope, ChevronLeft, CheckSquare, Square, Globe, Book, X, ArrowDown, ArrowUp, ZoomIn, Menu, Printer } from 'lucide-react';
import { BreedDetail, Language, ComparisonDataPoint, QuizQuestion } from './types';

const BreedCard: React.FC<{ breed: BreedDetail; labels: any; readMoreLabel: string; showLessLabel: string; lang: Language; onZoom: (breed: BreedDetail) => void }> = ({ breed, labels, readMoreLabel, showLessLabel, lang, onZoom }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="glass-card rounded-xl overflow-hidden group border-b-4 border-academic-primary hover:border-academic-accent flex flex-col h-full w-full">
      <div className="relative h-56 cursor-zoom-in" onClick={() => onZoom(breed)}>
        <ImageWithSkeleton 
          src={breed.image} 
          alt={breed.name} 
          containerClassName="h-full bg-slate-800"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
           <div className="bg-black/60 p-2 rounded-full text-white backdrop-blur-sm">
             <ZoomIn size={24} />
           </div>
        </div>
        <div className="absolute top-0 right-0 bg-academic-primary text-white text-xs font-bold px-4 py-2 rounded-bl-xl shadow-lg z-20 pointer-events-none">
          {breed.type}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
             <div className="flex items-center gap-2 flex-wrap">
               <h4 className="text-xl md:text-2xl font-heading font-bold text-academic-accent">{breed.name}</h4>
               <PronunciationBtn text={breed.name} lang={lang} />
             </div>
             <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">{labels.origin}: {breed.origin}</p>
          </div>
        </div>
        
        {/* Morphology Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
           <div className="bg-white/5 p-2 rounded">
             <span className="text-slate-400 block">{labels.color}</span>
             <span className="text-slate-200 font-bold">{breed.color}</span>
           </div>
           <div className="bg-white/5 p-2 rounded">
             <span className="text-slate-400 block">{labels.height}</span>
             <span className="text-slate-200 font-bold">{breed.height}</span>
           </div>
           <div className="bg-white/5 p-2 rounded col-span-2">
             <span className="text-slate-400 block">{labels.weight}</span>
             <span className="text-slate-200 font-bold">{breed.stats.weight}</span>
           </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          <div className="bg-black/30 p-3 rounded-lg border border-white/5">
             <span className="text-slate-400 text-xs block mb-1">Milk Yield</span>
             <span className="text-white font-bold font-mono text-sm">{breed.stats.milk}</span>
          </div>
          <div className="bg-black/30 p-3 rounded-lg border border-white/5">
             <span className="text-slate-400 text-xs block mb-1">Fat %</span>
             <span className="text-academic-accent font-bold font-mono text-sm">{breed.stats.fat}</span>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed italic border-l-2 border-white/20 pl-3 mb-4 line-clamp-3">
          "{breed.description}"
        </p>

        <div className="mt-auto">
          <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
            {/* Clinical Profile */}
            <div className="mb-4 space-y-2 pt-4 border-t border-white/10">
              <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest pb-1">{labels.clinicalProfile}</h5>
              <div className="text-sm text-slate-300">
                <p><span className="text-red-400">⚠️</span> <span className="text-xs text-slate-500">{labels.risks}:</span> {breed.clinicalProfile.risks}</p>
                <p><span className="text-green-400">🛡️</span> <span className="text-xs text-slate-500">{labels.resistance}:</span> {breed.clinicalProfile.resistance}</p>
                <p><span className="text-blue-400">🧬</span> <span className="text-xs text-slate-500">{labels.reproductive}:</span> {breed.clinicalProfile.reproductive}</p>
              </div>
            </div>
            
            {/* Detailed Info: Diet, Diseases, Breeding */}
            <div className="space-y-3 border-t border-white/10 pt-3 mb-4">
               <div>
                 <h6 className="text-academic-primary font-bold text-xs uppercase mb-1">{labels.diet}</h6>
                 <p className="text-xs text-slate-300 leading-relaxed">{breed.expandedInfo.diet}</p>
               </div>
               <div>
                 <h6 className="text-academic-primary font-bold text-xs uppercase mb-1">{labels.diseases}</h6>
                 <p className="text-xs text-slate-300 leading-relaxed">{breed.expandedInfo.diseases}</p>
               </div>
               <div>
                 <h6 className="text-academic-primary font-bold text-xs uppercase mb-1">{labels.breeding}</h6>
                 <p className="text-xs text-slate-300 leading-relaxed">{breed.expandedInfo.breeding}</p>
               </div>
            </div>

            {/* Traits */}
            <div className="flex flex-wrap gap-2 mb-4">
              {breed.traits.map((trait, i) => (
                <span key={i} className="text-[10px] bg-slate-700 px-2 py-1 rounded text-slate-300">{trait}</span>
              ))}
            </div>
          </div>

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-academic-primary text-sm font-bold hover:text-white transition-colors flex items-center gap-1 mt-2"
          >
            {isExpanded ? showLessLabel : readMoreLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

const SubBreedCard: React.FC<{ sb: any; labels: any; isSelected: boolean; onClick: () => void; lang: Language }> = ({ sb, labels, isSelected, onClick, lang }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      onClick={onClick}
      className={`glass-card p-6 md:p-8 rounded-2xl border transition-all duration-500 cursor-pointer w-full
        ${isSelected 
          ? 'border-academic-accent bg-academic-accent/10 transform md:scale-105 shadow-[0_0_30px_rgba(245,158,11,0.2)]' 
          : 'border-white/5 hover:border-academic-accent/50'}`
      }
    >
       <div className="flex flex-col md:flex-row justify-between items-start mb-3 gap-2">
          <div className="flex items-center gap-2">
            <h4 className="text-xl font-bold text-white">{sb.name}</h4>
            <PronunciationBtn text={sb.name} lang={lang} />
          </div>
          <span className="text-xs font-bold text-academic-primary bg-blue-950 px-3 py-1 rounded-full uppercase">{sb.region}</span>
       </div>
       {/* Status Badge */}
       <div className="mb-3 flex gap-2">
          <span className={`text-xs font-bold px-2 py-1 rounded border ${
            sb.status.includes('Critical') || sb.status.includes('Critique') || sb.status.includes('حرجة')
            ? 'bg-red-900/40 text-red-200 border-red-500/30' 
            : 'bg-yellow-900/40 text-yellow-200 border-yellow-500/30'
          }`}>
            {sb.status}
          </span>
       </div>
       
       <p className="text-slate-400 text-sm leading-relaxed mb-4">{sb.features}</p>
       
       {/* Morphology Grid */}
       <div className="grid grid-cols-3 gap-2 mb-4 text-[10px] border-t border-b border-white/5 py-2">
          <div className="text-center">
             <span className="text-slate-500 block mb-1">{labels.color}</span>
             <span className="text-slate-300 font-bold">{sb.color}</span>
          </div>
          <div className="text-center border-l border-r border-white/5">
             <span className="text-slate-500 block mb-1">{labels.height}</span>
             <span className="text-slate-300 font-bold">{sb.height}</span>
          </div>
          <div className="text-center">
             <span className="text-slate-500 block mb-1">{labels.weight}</span>
             <span className="text-slate-300 font-bold">{sb.weight}</span>
          </div>
       </div>

       {/* Population Info */}
       <p className="text-xs text-slate-500 mt-2 mb-4">
          <span className="font-bold text-slate-400">{labels.population}:</span> {sb.population}
       </p>

       {/* Expanded Info */}
       <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[600px] opacity-100 mt-4 pt-4 border-t border-white/10' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-4 text-sm">
             <div>
               <h6 className="text-academic-accent font-bold text-xs uppercase mb-1">{labels.diet}</h6>
               <p className="text-slate-300 leading-relaxed">{sb.expandedInfo.diet}</p>
             </div>
             <div>
               <h6 className="text-academic-accent font-bold text-xs uppercase mb-1">{labels.diseases}</h6>
               <p className="text-slate-300 leading-relaxed">{sb.expandedInfo.diseases}</p>
             </div>
             <div>
               <h6 className="text-academic-accent font-bold text-xs uppercase mb-1">{labels.breeding}</h6>
               <p className="text-slate-300 leading-relaxed">{sb.expandedInfo.breeding}</p>
             </div>
          </div>
       </div>

       <button 
          onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
          className="text-academic-accent text-xs font-bold hover:text-white transition-colors flex items-center gap-1 mt-2"
       >
          {isExpanded ? "Hide Details" : "Read Details"}
       </button>
    </div>
  );
};

const GlossaryModal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; terms: {term: string, definition: string}[]; closeLabel: string }> = ({ isOpen, onClose, title, terms, closeLabel }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="glass-panel w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl p-8 relative animate-slide-up shadow-2xl border border-white/20">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
          <X size={24} />
        </button>
        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
          <Book className="text-academic-accent" size={28} />
          <h3 className="text-2xl font-heading font-bold text-white">{title}</h3>
        </div>
        <div className="space-y-6">
          {terms.map((item, idx) => (
            <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
              <h4 className="text-academic-primary font-bold text-lg mb-2">{item.term}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{item.definition}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-end">
           <button onClick={onClose} className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-bold transition-colors">
             {closeLabel}
           </button>
        </div>
      </div>
    </div>
  );
};

// --- PRINTABLE REPORT COMPONENT ---
const PrintableReport: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = CONTENT[lang];
  
  const QuizReview: React.FC<{ questions: QuizQuestion[] }> = ({ questions }) => (
    <div className="mb-4 bg-gray-50 p-4 rounded border border-gray-200">
      <h4 className="font-bold mb-2 uppercase text-xs text-gray-500 border-b pb-1">Quiz Review</h4>
      {questions.map((q, i) => {
        const correctOpt = q.options.find(o => o.isCorrect);
        return (
          <div key={q.id} className="mb-3 text-sm avoid-break">
            <p className="font-bold text-black mb-1">{i + 1}. {q.text}</p>
            <p className="text-green-700 text-xs mb-1"><strong>{t.quizLabels.correctAnswer}:</strong> {correctOpt?.text}</p>
            <p className="text-gray-600 text-xs italic bg-white p-2 rounded border border-gray-100">
               <strong>{t.quizLabels.explanation}:</strong> {q.explanation}
            </p>
          </div>
        )
      })}
    </div>
  );

  return (
    <div id="print-container" className="hidden print:block bg-white text-black p-10 font-sans leading-relaxed max-w-[210mm] mx-auto" dir={t.direction}>
       {/* COVER PAGE */}
       <div className="flex flex-col items-center justify-center min-h-[90vh] text-center border-b-2 border-black mb-8 page-break">
          <div className="mb-8 space-y-1 text-sm uppercase tracking-widest text-gray-600">
             {t.universityHeader.map((line, i) => <p key={i}>{line}</p>)}
          </div>
          
          <div className="mb-12">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/University_of_Laghouat_logo.jpg/250px-University_of_Laghouat_logo.jpg" alt="Logo" className="w-32 h-32 mx-auto grayscale opacity-80" />
          </div>

          <h1 className="text-4xl font-bold mb-6 max-w-2xl leading-tight">{t.sections.cover.title}</h1>
          <p className="text-xl text-gray-500 mb-16 uppercase tracking-widest">{t.header.subtitle}</p>

          <div className="w-full max-w-md border-t border-b border-gray-300 py-8 mb-12">
             <p className="font-bold text-gray-500 text-sm uppercase mb-4">{t.sections.cover.preparedBy}</p>
             <div className="space-y-2 text-xl font-bold">
               {t.sections.cover.students.map(s => <p key={s}>{s}</p>)}
             </div>
          </div>

          <p className="text-sm font-mono text-gray-400 mt-auto">{t.sections.cover.year}</p>
       </div>

       {/* INTRODUCTION */}
       <div className="mb-10">
         <h2 className="text-2xl font-bold border-b-2 border-black mb-4 pb-2 uppercase flex justify-between items-baseline">
            {t.nav.intro}
            <span className="text-xs font-normal text-gray-500">Section 01</span>
         </h2>
         <div className="prose prose-sm max-w-none text-justify mb-6">
            {t.sections.intro.content.text.map((p, i) => (
               <p key={i} className="mb-3">{p}</p>
            ))}
         </div>
         <QuizReview questions={t.sections.intro.quiz.questions} />
       </div>

       <div className="page-break"></div>

       {/* GLOBAL BREEDS */}
       <div className="mb-10">
         <h2 className="text-2xl font-bold border-b-2 border-black mb-4 pb-2 uppercase flex justify-between items-baseline">
            {t.nav.global}
            <span className="text-xs font-normal text-gray-500">Section 02</span>
         </h2>
         <p className="mb-4 text-sm italic">{t.sections.global.content.description}</p>
         
         <QuizReview questions={t.sections.global.quiz.questions} />

         <div className="grid grid-cols-1 gap-6 mt-6">
            {t.sections.global.content.breeds.map(breed => (
               <div key={breed.id} className="border border-gray-300 p-4 rounded avoid-break flex gap-4">
                 <div className="w-32 h-32 flex-shrink-0 bg-gray-100 border border-gray-200">
                    {/* Placeholder for print image to save ink/render cleanly */}
                    <img src={breed.image} alt={breed.name} className="w-full h-full object-cover grayscale opacity-80" />
                 </div>
                 <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start border-b border-gray-100 pb-2 mb-2">
                       <div>
                          <h3 className="font-bold text-lg">{breed.name}</h3>
                          <span className="text-xs uppercase bg-gray-100 px-2 py-0.5 rounded">{breed.type}</span>
                       </div>
                       <div className="text-right text-xs text-gray-500">
                          <p><strong>Origin:</strong> {breed.origin}</p>
                          <p><strong>Height:</strong> {breed.height}</p>
                          <p><strong>Weight:</strong> {breed.stats.weight}</p>
                       </div>
                    </div>
                    
                    <p className="text-xs italic mb-2 text-gray-700">{breed.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-xs bg-gray-50 p-2 rounded mb-2">
                       <div>
                          <p><strong>{t.sections.global.content.labels.diet}:</strong> {breed.expandedInfo.diet}</p>
                          <p className="mt-1"><strong>{t.sections.global.content.labels.diseases}:</strong> {breed.expandedInfo.diseases}</p>
                       </div>
                       <div>
                          <p><strong>{t.sections.global.content.labels.breeding}:</strong> {breed.expandedInfo.breeding}</p>
                          <p className="mt-1"><strong>{t.sections.global.content.labels.clinicalProfile}:</strong> {breed.clinicalProfile.risks} / {breed.clinicalProfile.resistance}</p>
                       </div>
                    </div>
                    
                    <div className="flex gap-2 flex-wrap text-[10px] text-gray-500">
                       {breed.stats.milk && <span>Milk: {breed.stats.milk}</span>} | 
                       {breed.stats.fat && <span>Fat: {breed.stats.fat}</span>} |
                       {breed.traits.map(t => <span key={t} className="border border-gray-300 px-1 rounded">{t}</span>)}
                    </div>
                 </div>
               </div>
            ))}
         </div>
       </div>

       <div className="page-break"></div>

       {/* ALGERIA */}
       <div className="mb-10">
         <h2 className="text-2xl font-bold border-b-2 border-black mb-4 pb-2 uppercase flex justify-between items-baseline">
            {t.nav.algeria}
            <span className="text-xs font-normal text-gray-500">Section 03</span>
         </h2>
         
         <div className="mb-6 bg-gray-50 p-4 border-l-4 border-black">
            <h3 className="font-bold text-lg mb-2">{t.sections.algeria.content.title}</h3>
            <p className="text-sm mb-2">{t.sections.algeria.content.description}</p>
            <p className="text-xs text-justify leading-relaxed">{t.sections.algeria.content.heroExpandedText}</p>
         </div>

         <QuizReview questions={t.sections.algeria.quiz.questions} />
         
         <h3 className="font-bold mt-6 mb-4 uppercase text-sm border-b pb-1">{t.sections.algeria.content.subBreedsTitle}</h3>
         <div className="grid grid-cols-1 gap-4">
            {t.sections.algeria.content.subBreeds.map((sb, i) => (
               <div key={i} className="border border-gray-300 p-4 rounded avoid-break">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold">{sb.name} <span className="text-xs font-normal text-gray-500">({sb.region})</span></h4>
                    <span className="text-xs font-bold border px-2 py-0.5 rounded">{sb.status}</span>
                  </div>
                  <p className="text-xs mb-3 text-gray-700">{sb.features}</p>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-3 border-t border-b py-2 bg-gray-50">
                     <div className="text-center"><strong>{t.sections.algeria.content.labels.height}:</strong> {sb.height}</div>
                     <div className="text-center border-l border-r border-gray-200"><strong>{t.sections.algeria.content.labels.weight}:</strong> {sb.weight}</div>
                     <div className="text-center"><strong>{t.sections.algeria.content.labels.population}:</strong> {sb.population}</div>
                  </div>

                  <div className="text-xs grid grid-cols-1 gap-1">
                     <p><strong>{t.sections.algeria.content.labels.diet}:</strong> {sb.expandedInfo.diet}</p>
                     <p><strong>{t.sections.algeria.content.labels.diseases}:</strong> {sb.expandedInfo.diseases}</p>
                     <p><strong>{t.sections.algeria.content.labels.breeding}:</strong> {sb.expandedInfo.breeding}</p>
                  </div>
               </div>
            ))}
         </div>
       </div>

       <div className="page-break"></div>

       {/* COMPARISON TABLE */}
       <div className="mb-10">
          <h2 className="text-2xl font-bold border-b-2 border-black mb-4 pb-2 uppercase flex justify-between items-baseline">
            {t.nav.compare}
            <span className="text-xs font-normal text-gray-500">Section 04</span>
         </h2>
         <table className="w-full text-xs text-left border-collapse border border-gray-300">
            <thead>
               <tr className="bg-gray-100">
                  <th className="border p-2">{t.sections.compare.labels.tableHeader[0]}</th>
                  <th className="border p-2">{t.sections.compare.labels.tableHeader[1]}</th>
                  <th className="border p-2">{t.sections.compare.labels.tableHeader[2]}</th>
                  <th className="border p-2">{t.sections.compare.labels.tableHeader[3]}</th>
                  <th className="border p-2">{t.sections.compare.labels.tableHeader[4]}</th>
                  <th className="border p-2">{t.sections.compare.labels.cost}</th>
               </tr>
            </thead>
            <tbody>
               {t.sections.compare.data.map(d => (
                  <tr key={d.id}>
                     <td className="border p-2 font-bold">{d.name}</td>
                     <td className="border p-2">{d.milkIndex}</td>
                     <td className="border p-2">{d.fatIndex}</td>
                     <td className="border p-2">{t.sections.global.content.breeds.find(b => b.id === d.id)?.stats.protein || '-'}</td>
                     <td className="border p-2">{d.adaptationIndex}</td>
                     <td className="border p-2">{d.maintenanceCost}</td>
                  </tr>
               ))}
            </tbody>
         </table>
       </div>

       {/* CONCLUSION */}
       <div className="mb-10 avoid-break">
         <h2 className="text-2xl font-bold border-b-2 border-black mb-4 pb-2 uppercase flex justify-between items-baseline">
            {t.nav.conclusion}
            <span className="text-xs font-normal text-gray-500">Section 05</span>
         </h2>
         
         <QuizReview questions={t.sections.conclusion.quiz.questions} />

         <div className="bg-gray-50 p-6 rounded border border-gray-200 mt-4">
            <h3 className="font-bold text-lg mb-4 text-center">{t.sections.conclusion.report.title}</h3>
            {t.sections.conclusion.report.message.map((p, i) => (
               <p key={i} className="mb-2 text-justify text-sm leading-relaxed">{p}</p>
            ))}
         </div>
       </div>

       <div className="text-center text-[10px] text-gray-400 mt-12 border-t pt-4">
         Generated via Interactive Veterinary Ethnology Application - {new Date().getFullYear()} <br/>
         University of Laghouat - Department of Veterinary Sciences
       </div>
    </div>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const t = CONTENT[lang];
  
  const [activeTab, setActiveTab] = useState('cover');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [unlocked, setUnlocked] = useState({
    intro: false,
    global: false,
    algeria: false,
    compare: false,
    conclusion: false
  });
  const [totalScore, setTotalScore] = useState(0);
  const [showGlossary, setShowGlossary] = useState(false);
  const [isHeroExpanded, setIsHeroExpanded] = useState(false);
  
  // Image Zoom State
  const [zoomedBreed, setZoomedBreed] = useState<BreedDetail | null>(null);

  // Algeria Map State
  const [selectedMapRegion, setSelectedMapRegion] = useState<number | null>(null);
  const subBreedRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Comparison State
  const [selectedBreeds, setSelectedBreeds] = useState<string[]>(['holstein', 'atlas']);
  const [hoveredBreed, setHoveredBreed] = useState<string | null>(null);
  
  // Sorting State
  const [sortConfig, setSortConfig] = useState<{ key: keyof ComparisonDataPoint | null, direction: 'asc' | 'desc' }>({ key: null, direction: 'asc' });

  // Reset scroll when tab changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [activeTab]);

  const toggleBreed = (id: string) => {
    setSelectedBreeds(prev => 
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id].slice(0, 3) 
    );
  };

  const handleMapSelect = (index: number) => {
    setSelectedMapRegion(index);
    if (subBreedRefs.current[index]) {
       subBreedRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSort = (key: keyof ComparisonDataPoint) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const NavItem = ({ id, label, icon: Icon, isLocked }: any) => (
    <button
      onClick={() => {
        if (!isLocked) {
          setActiveTab(id);
          setMobileMenuOpen(false);
        }
      }}
      disabled={isLocked}
      className={`flex items-center gap-4 px-6 py-5 w-full transition-all duration-300 border-r-4 group
        ${activeTab === id 
          ? 'border-academic-accent bg-gradient-to-l from-academic-primary/10 to-transparent text-white' 
          : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5'}
        ${isLocked ? 'opacity-40 cursor-not-allowed grayscale' : ''}
      `}
    >
      <Icon size={22} className={`transition-colors ${activeTab === id ? 'text-academic-accent' : 'group-hover:text-white'}`} />
      <span className="font-bold text-lg font-heading">{label}</span>
      {isLocked && <Lock size={14} className="mr-auto text-slate-600" />}
    </button>
  );

  let filteredComparisonData = t.sections.compare.data.filter(d => selectedBreeds.includes(d.id));
  
  if (sortConfig.key) {
    filteredComparisonData = [...filteredComparisonData].sort((a, b) => {
      if (a[sortConfig.key!] < b[sortConfig.key!]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key!] > b[sortConfig.key!]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  const SortIcon = ({ colKey }: { colKey: keyof ComparisonDataPoint }) => {
    if (sortConfig.key !== colKey) return <span className="w-4 inline-block"></span>;
    return sortConfig.direction === 'asc' ? <ArrowUp size={14} className="inline ml-1 text-academic-accent" /> : <ArrowDown size={14} className="inline ml-1 text-academic-accent" />;
  };

  return (
    <>
    <div dir={t.direction} className="min-h-screen flex font-sans text-slate-200 bg-thesis-gradient print:hidden">
      <GlossaryModal 
        isOpen={showGlossary} 
        onClose={() => setShowGlossary(false)} 
        title={t.glossary.title} 
        terms={t.glossary.terms} 
        closeLabel={t.ui.closeBtn}
      />
      
      {/* Zoom Modal */}
      {zoomedBreed && (
        <ImageZoomModal 
          isOpen={!!zoomedBreed}
          onClose={() => setZoomedBreed(null)}
          imageSrc={zoomedBreed.image}
          altText={zoomedBreed.name}
          hotspots={zoomedBreed.hotspots}
        />
      )}
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 bottom-0 z-50 w-80 bg-[#020617] border-l-0 md:border-l border-white/5 
        flex flex-col shadow-[5px_0_30px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-in-out
        ${mobileMenuOpen 
          ? 'translate-x-0' 
          : (t.direction === 'rtl' ? 'translate-x-full md:translate-x-0' : '-translate-x-full md:translate-x-0')
        }
        ${t.direction === 'rtl' ? 'right-0 md:right-0' : 'left-0 md:left-0'}
      `}>
        {/* Mobile Close Button */}
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-4 right-4 md:hidden text-slate-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="p-8 text-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-5">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center mb-6 border-2 border-academic-primary/50 shadow-lg shadow-blue-900/20">
             <Microscope size={48} className="text-academic-accent" />
          </div>
          <h1 className="font-heading font-bold text-xl leading-tight text-white mb-2">{t.header.subtitle}</h1>
        </div>

        <nav className="flex-1 py-4 overflow-y-auto">
          <NavItem id="cover" label={t.nav.cover} icon={BookOpen} />
          <NavItem id="intro" label={t.nav.intro} icon={Activity} isLocked={false} />
          <NavItem id="global" label={t.nav.global} icon={Globe} isLocked={!unlocked.intro} />
          <NavItem id="algeria" label={t.nav.algeria} icon={Map} isLocked={!unlocked.global} />
          <NavItem id="compare" label={t.nav.compare} icon={Activity} isLocked={!unlocked.algeria} />
          <NavItem id="conclusion" label={t.nav.conclusion} icon={Award} isLocked={!unlocked.compare} />
        </nav>
        
        <div className="p-6 border-t border-white/5 bg-black/20">
           {/* Language Switcher */}
           <div className="flex justify-center gap-3 mb-4">
             {(['ar', 'en', 'fr'] as Language[]).map((l) => (
               <button 
                 key={l} 
                 onClick={() => setLang(l)}
                 className={`px-3 py-1 rounded text-xs font-bold border ${lang === l ? 'bg-academic-primary border-academic-primary text-white' : 'border-slate-700 text-slate-500 hover:border-slate-500'}`}
               >
                 {l.toUpperCase()}
               </button>
             ))}
           </div>
           <p className="text-center text-xs text-slate-600 font-mono">{t.sections.cover.year}</p>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full bg-academic-dark/95 backdrop-blur-md z-30 p-4 flex justify-between items-center border-b border-white/10 shadow-lg h-[60px]">
         <div className="flex items-center gap-3">
           <button onClick={() => setMobileMenuOpen(true)} className="text-white hover:text-academic-primary transition-colors">
             <Menu size={24} />
           </button>
           <h1 className="font-bold text-white truncate max-w-[200px] text-sm sm:text-base">{t.header.title}</h1>
         </div>
         <div className="flex items-center gap-2">
            <button onClick={() => setShowGlossary(true)} className="p-2 bg-slate-800 rounded border border-slate-600"><Book size={16} /></button>
            <button onClick={() => setLang(lang === 'ar' ? 'fr' : 'ar')} className="text-xs bg-slate-800 px-2 py-1 rounded border border-slate-600 font-bold">{lang.toUpperCase()}</button>
         </div>
      </div>

      {/* Content Area */}
      <main className={`flex-1 ${t.direction === 'rtl' ? 'md:mr-80' : 'md:ml-80'} p-4 md:p-12 overflow-y-auto w-full pt-[80px] md:pt-12`}>
        {/* Desktop Glossary Trigger */}
        <div className="hidden md:flex justify-end mb-6">
           <button onClick={() => setShowGlossary(true)} className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-academic-accent transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10">
             <Book size={16} /> {t.header.glossaryBtn}
           </button>
        </div>

        {activeTab === 'cover' && (
          <div className="min-h-[85vh] flex flex-col justify-center items-center text-center animate-fade-in relative">
             <div className="mb-8 relative">
               <div className="absolute inset-0 bg-blue-500 blur-[50px] opacity-20 rounded-full"></div>
               <img 
                 src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/University_of_Laghouat_logo.jpg/250px-University_of_Laghouat_logo.jpg" 
                 alt="University Logo" 
                 className="w-32 h-32 md:w-40 md:h-40 mx-auto relative z-10 drop-shadow-2xl rounded-full border-4 border-white/10" 
               />
             </div>

             <div className="space-y-1 mb-10 text-slate-400 font-heading text-xs md:text-sm tracking-wide uppercase px-4">
               {t.universityHeader.map((line, i) => <p key={i}>{line}</p>)}
             </div>
             
             <h1 className="text-3xl md:text-6xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-slate-400 mb-10 max-w-5xl leading-tight drop-shadow-lg px-2">
               {t.sections.cover.title}
             </h1>

             <div className="glass-panel px-8 py-8 md:px-16 md:py-10 rounded-3xl mb-12 border-t border-white/10 shadow-2xl max-w-2xl w-full transform md:hover:scale-105 transition-transform duration-500">
                <p className="text-academic-accent font-bold mb-6 text-sm uppercase tracking-widest">{t.sections.cover.preparedBy}</p>
                <div className="flex flex-col gap-4 justify-center text-xl md:text-3xl font-heading font-bold text-white mb-8">
                  {t.sections.cover.students.map(s => <span key={s} className="border-b-2 border-white/10 pb-2 inline-block">{s}</span>)}
                </div>
                <p className="text-slate-400 text-sm">{t.sections.cover.year}</p>
             </div>

             <button 
               onClick={() => setActiveTab('intro')}
               className="group px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-academic-primary to-blue-700 hover:to-blue-600 text-white rounded-full font-bold text-lg md:text-xl transition-all shadow-[0_10px_40px_-10px_rgba(59,130,246,0.6)] hover:shadow-[0_20px_60px_-10px_rgba(59,130,246,0.8)] hover:-translate-y-1 flex items-center gap-4 ring-4 ring-blue-900/30"
             >
               {t.sections.cover.cta}
               {t.direction === 'rtl' ? <ChevronLeft className="group-hover:-translate-x-2 transition-transform" /> : <ChevronLeft className="rotate-180 group-hover:translate-x-2 transition-transform" />}
             </button>
          </div>
        )}

        {activeTab === 'intro' && (
          <div className="max-w-5xl mx-auto animate-fade-in">
             <div className="mb-12">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">{t.sections.intro.title}</h2>
                <p className="text-xl md:text-2xl text-academic-accent font-light">{t.sections.intro.subtitle}</p>
             </div>

             {!unlocked.intro ? (
               <Quiz 
                 data={t.sections.intro.quiz} 
                 onComplete={() => setUnlocked(p => ({...p, intro: true}))}
                 onScore={(s) => setTotalScore(p => p + s)}
                 labels={t.quizLabels}
               />
             ) : (
               <div className="animate-slide-up space-y-12">
                  <div className="glass-panel p-6 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-academic-primary/10 rounded-full blur-3xl -z-10"></div>
                     <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">{t.sections.intro.content.title}</h3>
                     <div className="text-base md:text-lg text-slate-300 leading-loose space-y-4">
                       {t.sections.intro.content.text.map((paragraph, index) => (
                         <p key={index}>{paragraph}</p>
                       ))}
                     </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                     {t.sections.intro.content.cards.map((card, i) => (
                       <div key={i} className="glass-card p-8 rounded-2xl border-t-4 border-academic-accent hover:bg-white/5 transition-colors group">
                          <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center text-3xl font-bold text-academic-primary mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
                          <h4 className="text-xl md:text-2xl font-heading font-bold text-white mb-3">{card.title}</h4>
                          <p className="text-slate-400 leading-relaxed">{card.desc}</p>
                       </div>
                     ))}
                  </div>
                  
                  <div className="flex justify-center pt-8">
                    <button onClick={() => setActiveTab('global')} className="px-10 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 rounded-xl text-white font-bold text-lg transition-all flex items-center gap-3">
                      {t.nav.global} <ChevronLeft className={`text-academic-accent ${t.direction === 'ltr' ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
               </div>
             )}
          </div>
        )}

        {activeTab === 'global' && (
          <div className="max-w-7xl mx-auto animate-fade-in">
             <div className="mb-12 border-b border-white/10 pb-8">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">{t.sections.global.title}</h2>
                <p className="text-xl md:text-2xl text-academic-accent font-light">{t.sections.global.subtitle}</p>
             </div>

             {!unlocked.global ? (
                <Quiz 
                  data={t.sections.global.quiz} 
                  onComplete={() => setUnlocked(p => ({...p, global: true}))}
                  onScore={(s) => setTotalScore(p => p + s)}
                  labels={t.quizLabels}
                />
             ) : (
                <div className="animate-slide-up space-y-16">
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {t.sections.global.content.breeds.map(breed => (
                        <BreedCard 
                          key={breed.id} 
                          breed={breed} 
                          labels={t.sections.global.content.labels}
                          readMoreLabel={t.sections.global.content.readMore} 
                          showLessLabel={t.sections.global.content.showLess}
                          lang={lang}
                          onZoom={setZoomedBreed}
                        />
                      ))}
                   </div>
                   
                   <div className="flex justify-center pt-8">
                    <button onClick={() => setActiveTab('algeria')} className="px-10 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 rounded-xl text-white font-bold text-lg transition-all flex items-center gap-3">
                      {t.nav.algeria} <ChevronLeft className={`text-academic-accent ${t.direction === 'ltr' ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
             )}
          </div>
        )}

        {activeTab === 'algeria' && (
          <div className="max-w-6xl mx-auto animate-fade-in">
            <div className="mb-12">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">{t.sections.algeria.title}</h2>
                <p className="text-xl md:text-2xl text-academic-accent font-light">{t.sections.algeria.subtitle}</p>
             </div>

            {!unlocked.algeria ? (
              <Quiz 
                data={t.sections.algeria.quiz} 
                onComplete={() => setUnlocked(p => ({...p, algeria: true, compare: true}))}
                onScore={(s) => setTotalScore(p => p + s)}
                labels={t.quizLabels}
              />
            ) : (
               <div className="animate-slide-up space-y-16">
                  {/* Hero Card */}
                  <div className="glass-panel rounded-[2rem] overflow-hidden relative border-0 shadow-2xl group">
                     <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>
                     <ImageWithSkeleton src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Vache_de_l%27Atlas.jpg/1280px-Vache_de_l%27Atlas.jpg" alt="Brown Atlas" className="absolute w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]" />
                     <div className="relative z-20 p-6 md:p-12 lg:p-20 max-w-3xl">
                        <div className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded mb-4">ENDANGERED</div>
                        <h3 className="text-3xl md:text-5xl font-heading font-extrabold text-academic-accent mb-6 drop-shadow-lg">{t.sections.algeria.content.title}</h3>
                        <p className="text-lg md:text-xl text-slate-100 leading-relaxed font-light border-l-4 border-academic-primary pl-6">{t.sections.algeria.content.description}</p>
                        
                        <div className={`overflow-hidden transition-all duration-700 ${isHeroExpanded ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                           <div className="bg-black/40 p-6 rounded-xl border border-white/10 text-base md:text-lg leading-relaxed text-slate-200">
                              {t.sections.algeria.content.heroExpandedText}
                           </div>
                        </div>

                        <div className="mt-6">
                           <button 
                              onClick={() => setIsHeroExpanded(!isHeroExpanded)}
                              className="text-academic-primary font-bold border border-academic-primary px-4 py-2 rounded hover:bg-academic-primary hover:text-white transition-colors"
                           >
                              {isHeroExpanded ? t.sections.algeria.content.showLess : t.sections.algeria.content.readMore}
                           </button>
                        </div>
                     </div>
                  </div>

                  {/* Interactive Map & Sub Breeds Grid */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-8 flex items-center gap-3">
                      <Map className="text-academic-primary" />
                      {t.sections.algeria.content.subBreedsTitle}
                    </h3>

                    {/* Map Integration */}
                    <div className="grid lg:grid-cols-3 gap-8 mb-12">
                       <div className="lg:col-span-1 h-full min-h-[300px]">
                          <AlgeriaMap 
                            locations={t.sections.algeria.content.subBreeds.map((sb, i) => ({
                              name: sb.name,
                              coordinates: sb.coordinates,
                              index: i,
                              status: sb.status,
                              regionPolygon: sb.regionPolygon
                            }))}
                            onSelect={handleMapSelect}
                            selectedIndex={selectedMapRegion}
                          />
                       </div>
                       <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                         {t.sections.algeria.content.subBreeds.map((sb, i) => (
                           <SubBreedCard
                             key={i}
                             sb={sb}
                             labels={t.sections.algeria.content.labels}
                             isSelected={selectedMapRegion === i}
                             onClick={() => handleMapSelect(i)}
                             lang={lang}
                           />
                         ))}
                         <div ref={(el) => { subBreedRefs.current = t.sections.algeria.content.subBreeds.map((_, idx) => subBreedRefs.current[idx] || el); }} />
                         {/* Invisible divs for scrolling refs adjustment */}
                         {t.sections.algeria.content.subBreeds.map((_, i) => <div key={`ref-${i}`} ref={(el) => { subBreedRefs.current[i] = el; }} className="hidden" />)}
                       </div>
                    </div>
                  </div>

                  {/* Conservation */}
                  <div className="bg-gradient-to-br from-orange-900/30 to-slate-900 border border-orange-500/30 p-6 md:p-10 rounded-3xl">
                     <h4 className="text-orange-400 font-bold text-xl md:text-2xl mb-4 flex items-center gap-3">
                        <Lock size={28} /> {t.sections.algeria.content.conservation.title}
                     </h4>
                     <p className="text-orange-100/80 text-base md:text-lg leading-relaxed">{t.sections.algeria.content.conservation.text}</p>
                  </div>
                  
                  <div className="flex justify-center pt-8">
                    <button onClick={() => setActiveTab('compare')} className="px-10 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 rounded-xl text-white font-bold text-lg transition-all flex items-center gap-3">
                      {t.nav.compare} <ChevronLeft className={`text-academic-accent ${t.direction === 'ltr' ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
               </div>
            )}
          </div>
        )}

        {activeTab === 'compare' && (
           <div className="max-w-7xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">{t.sections.compare.title}</h2>
              <p className="text-lg md:text-xl text-academic-primary mb-12">{t.sections.compare.subtitle}</p>
              
              <div className="grid lg:grid-cols-[300px_1fr] gap-8">
                 {/* Controls */}
                 <div className="glass-panel p-6 rounded-2xl h-fit">
                    <h3 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-4">{t.sections.compare.labels.selectBreeds}</h3>
                    <div className="space-y-3">
                       {t.sections.compare.data.map(item => (
                          <button 
                             key={item.id}
                             onClick={() => toggleBreed(item.id)}
                             className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${selectedBreeds.includes(item.id) ? 'bg-academic-primary text-white shadow-lg' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
                          >
                             <span className="font-bold">{item.name}</span>
                             {selectedBreeds.includes(item.id) ? <CheckSquare size={20} /> : <Square size={20} />}
                          </button>
                       ))}
                    </div>
                    <p className="text-xs text-slate-500 mt-6 text-center">Select up to 3 breeds for best visibility</p>
                 </div>

                 {/* Charts Area */}
                 <div className="space-y-8 min-w-0">
                    <div className="glass-panel p-4 md:p-8 rounded-2xl">
                       <h3 className="text-xl font-bold text-white mb-6">{t.sections.compare.labels.adaptation} vs {t.sections.compare.labels.cost}</h3>
                       <div className="h-64 md:h-80 w-full">
                          <ResponsiveContainer>
                             <RadarChart outerRadius={window.innerWidth < 768 ? 60 : 90} data={[
                                { subject: t.sections.compare.labels.milk, ...Object.fromEntries(filteredComparisonData.map(d => [d.name, d.milkIndex])), fullMark: 100 },
                                { subject: t.sections.compare.labels.adaptation, ...Object.fromEntries(filteredComparisonData.map(d => [d.name, d.adaptationIndex])), fullMark: 100 },
                                { subject: t.sections.compare.labels.cost, ...Object.fromEntries(filteredComparisonData.map(d => [d.name, d.maintenanceCost])), fullMark: 100 },
                             ]}>
                                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#e2e8f0', fontSize: window.innerWidth < 768 ? 10 : 14, fontWeight: 'bold' }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                {filteredComparisonData.map((d, i) => (
                                   <Radar 
                                     key={d.id} 
                                     name={d.name} 
                                     dataKey={d.name} 
                                     stroke={['#3b82f6', '#f59e0b', '#10b981'][i % 3]} 
                                     fill={['#3b82f6', '#f59e0b', '#10b981'][i % 3]} 
                                     fillOpacity={hoveredBreed && hoveredBreed !== d.name ? 0.05 : 0.3} 
                                     strokeOpacity={hoveredBreed && hoveredBreed !== d.name ? 0.1 : 1}
                                     activeDot={{ r: 6 }}
                                     dot={{ r: 3, fillOpacity: 1 }}
                                   />
                                ))}
                                <Legend 
                                  wrapperStyle={{ paddingTop: '20px', cursor: 'pointer' }} 
                                  onMouseEnter={(e) => setHoveredBreed(e.value)}
                                  onMouseLeave={() => setHoveredBreed(null)}
                                  formatter={(value) => <span className="text-slate-300 font-bold px-2 hover:text-white transition-colors">{value}</span>}
                                />
                                <Tooltip 
                                  contentStyle={{
                                    backgroundColor: 'rgba(15, 23, 42, 0.95)', 
                                    border: '1px solid rgba(255,255,255,0.1)', 
                                    borderRadius: '8px',
                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
                                  }} 
                                  itemStyle={{color: '#fff'}}
                                  labelStyle={{color: '#94a3b8', marginBottom: '0.5rem'}}
                                />
                             </RadarChart>
                          </ResponsiveContainer>
                       </div>
                    </div>

                    <div className="glass-panel p-4 md:p-8 rounded-2xl overflow-x-auto">
                       <table className="w-full text-right min-w-[600px]">
                          <thead>
                             <tr className="text-slate-400 border-b border-white/10">
                                <th className="pb-4 px-4 font-heading text-left">{t.sections.compare.labels.tableHeader[0]}</th>
                                <th className="pb-4 px-4 font-heading cursor-pointer hover:text-white" onClick={() => handleSort('milkIndex')}>
                                   {t.sections.compare.labels.tableHeader[1]} <SortIcon colKey="milkIndex" />
                                </th>
                                <th className="pb-4 px-4 font-heading cursor-pointer hover:text-white" onClick={() => handleSort('fatIndex')}>
                                   {t.sections.compare.labels.tableHeader[2]} <SortIcon colKey="fatIndex" />
                                </th>
                                <th className="pb-4 px-4 font-heading">{t.sections.compare.labels.tableHeader[3]}</th>
                                <th className="pb-4 px-4 font-heading cursor-pointer hover:text-white" onClick={() => handleSort('adaptationIndex')}>
                                   {t.sections.compare.labels.tableHeader[4]} <SortIcon colKey="adaptationIndex" />
                                </th>
                             </tr>
                          </thead>
                          <tbody className="text-slate-200">
                             {filteredComparisonData.map((d, i) => (
                                <tr key={d.id} className="border-b border-white/5 hover:bg-white/5">
                                   <td className="py-4 px-4 font-bold text-academic-accent">
                                     <div className="flex items-center gap-3 justify-end">
                                       <span className="text-right">{d.name}</span>
                                       <ImageWithSkeleton 
                                         src={IMAGES[d.id as keyof typeof IMAGES]} 
                                         alt={d.name} 
                                         containerClassName="w-10 h-10 rounded-full border-2 border-white/20 shadow-sm"
                                         className="w-full h-full object-cover"
                                       />
                                     </div>
                                   </td>
                                   <td className="py-4 px-4">{d.milkIndex}/100</td>
                                   <td className="py-4 px-4">{d.fatIndex}/100</td>
                                   <td className="py-4 px-4">{t.sections.global.content.breeds.find(b => b.id === d.id)?.stats.protein || '-'}</td>
                                   <td className="py-4 px-4">
                                      <div className="w-full bg-slate-800 rounded-full h-2">
                                         <div className="bg-academic-primary h-2 rounded-full" style={{ width: `${d.adaptationIndex}%` }}></div>
                                      </div>
                                   </td>
                                </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                 </div>
              </div>
              
              <div className="flex justify-center pt-12">
                <button onClick={() => setActiveTab('conclusion')} className="px-10 py-4 bg-academic-primary hover:bg-blue-600 rounded-xl text-white font-bold text-lg transition-all flex items-center gap-3 shadow-lg shadow-blue-900/50">
                  {t.nav.conclusion} <ChevronLeft className={`text-white ${t.direction === 'ltr' ? 'rotate-180' : ''}`} />
                </button>
              </div>
           </div>
        )}

        {activeTab === 'conclusion' && (
           <div className="max-w-3xl mx-auto animate-fade-in">
              {!unlocked.conclusion ? (
                 <div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8 text-center">{t.sections.conclusion.title}</h2>
                    <Quiz 
                      data={t.sections.conclusion.quiz}
                      onComplete={() => setUnlocked(p => ({...p, conclusion: true}))}
                      onScore={(s) => setTotalScore(p => p + s)}
                      labels={t.quizLabels}
                    />
                 </div>
              ) : (
                 <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] text-center border border-academic-accent/30 shadow-[0_0_100px_-20px_rgba(245,158,11,0.3)] animate-slide-up relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-academic-accent to-transparent"></div>
                    <Award size={80} className="mx-auto text-academic-accent mb-8 animate-pulse-slow drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">{t.sections.conclusion.report.title}</h2>
                    
                    <div className="inline-block p-8 rounded-full bg-slate-900 border-4 border-academic-primary/30 mb-8">
                       <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-academic-accent to-yellow-200">
                          {totalScore} <span className="text-3xl text-slate-600">/ 8</span>
                       </div>
                    </div>
                    
                    <div className="mb-8">
                       <p className="text-slate-400 text-sm mb-2">{t.sections.conclusion.report.rank}</p>
                       <p className="text-2xl text-white font-bold">{totalScore > 6 ? "Senior Research Fellow" : "Research Associate"}</p>
                    </div>

                    <div className="border-t border-white/10 pt-6 space-y-4">
                       {t.sections.conclusion.report.message.map((msg, i) => (
                         <p key={i} className="text-slate-300 max-w-md mx-auto leading-relaxed">{msg}</p>
                       ))}
                    </div>

                    <button onClick={() => window.print()} className="mt-12 px-10 py-3 border border-white/20 hover:bg-white/10 hover:border-white/40 rounded-full text-sm font-bold transition-all uppercase tracking-widest flex items-center gap-2 mx-auto">
                       <Printer size={16} /> {t.ui.printBtn}
                    </button>
                 </div>
              )}
           </div>
        )}

      </main>
    </div>
    
    {/* Hidden Print Container */}
    <PrintableReport lang={lang} />
    </>
  );
};

export default App;
