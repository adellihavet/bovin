
import React, { useState, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { CONTENT, IMAGES } from './constants';
import Quiz from './components/Quiz';
import AlgeriaMap from './components/AlgeriaMap';
import ImageWithSkeleton from './components/ImageWithSkeleton';
import PronunciationBtn from './components/PronunciationBtn';
import { Lock, Award, BookOpen, Activity, Map, Microscope, ChevronLeft, CheckSquare, Square, Globe, Book, X, ArrowDown, ArrowUp } from 'lucide-react';
import { BreedDetail, Language, ComparisonDataPoint } from './types';

const BreedCard: React.FC<{ breed: BreedDetail; labels: any; readMoreLabel: string; showLessLabel: string; lang: Language }> = ({ breed, labels, readMoreLabel, showLessLabel, lang }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="glass-card rounded-xl overflow-hidden group border-b-4 border-academic-primary hover:border-academic-accent flex flex-col h-full">
      <ImageWithSkeleton 
        src={breed.image} 
        alt={breed.name} 
        containerClassName="h-56 bg-slate-800"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute top-0 right-0 bg-academic-primary text-white text-xs font-bold px-4 py-2 rounded-bl-xl shadow-lg z-20">
        {breed.type}
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
             <div className="flex items-center gap-2">
               <h4 className="text-2xl font-heading font-bold text-academic-accent">{breed.name}</h4>
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
           <div className="bg-white/5 p-2 rounded">
             <span className="text-slate-400 block">{labels.weight}</span>
             <span className="text-slate-200 font-bold">{breed.stats.weight}</span>
           </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          <div className="bg-black/30 p-3 rounded-lg border border-white/5">
             <span className="text-slate-400 text-xs block mb-1">Milk Yield</span>
             <span className="text-white font-bold font-mono">{breed.stats.milk}</span>
          </div>
          <div className="bg-black/30 p-3 rounded-lg border border-white/5">
             <span className="text-slate-400 text-xs block mb-1">Fat %</span>
             <span className="text-academic-accent font-bold font-mono">{breed.stats.fat}</span>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed italic border-l-2 border-white/20 pl-3 mb-4 line-clamp-3">
          "{breed.description}"
        </p>

        <div className="mt-auto">
          <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
            {/* Clinical Profile */}
            <div className="mb-4 space-y-2 pt-4 border-t border-white/10">
              <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest pb-1">Clinical Profile</h5>
              <div className="text-sm text-slate-300">
                <p><span className="text-red-400">⚠️</span> {breed.clinicalProfile.risks}</p>
                <p><span className="text-green-400">🛡️</span> {breed.clinicalProfile.resistance}</p>
                <p><span className="text-blue-400">🧬</span> {breed.clinicalProfile.reproductive}</p>
              </div>
            </div>
            
            {/* Detailed Info: Diet, Diseases, Breeding */}
            <div className="space-y-3 border-t border-white/10 pt-3 mb-4">
               <div>
                 <h6 className="text-academic-primary font-bold text-xs uppercase mb-1">Diet & Nutrition</h6>
                 <p className="text-xs text-slate-300 leading-relaxed">{breed.expandedInfo.diet}</p>
               </div>
               <div>
                 <h6 className="text-academic-primary font-bold text-xs uppercase mb-1">Common Diseases</h6>
                 <p className="text-xs text-slate-300 leading-relaxed">{breed.expandedInfo.diseases}</p>
               </div>
               <div>
                 <h6 className="text-academic-primary font-bold text-xs uppercase mb-1">Breeding Practices</h6>
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
      className={`glass-card p-8 rounded-2xl border transition-all duration-500 cursor-pointer
        ${isSelected 
          ? 'border-academic-accent bg-academic-accent/10 transform scale-105 shadow-[0_0_30px_rgba(245,158,11,0.2)]' 
          : 'border-white/5 hover:border-academic-accent/50'}`
      }
    >
       <div className="flex justify-between items-start mb-3">
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
          <span className="font-bold text-slate-400">Population:</span> {sb.population}
       </p>

       {/* Expanded Info */}
       <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[600px] opacity-100 mt-4 pt-4 border-t border-white/10' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-4 text-sm">
             <div>
               <h6 className="text-academic-accent font-bold text-xs uppercase mb-1">Diet & Grazing</h6>
               <p className="text-slate-300 leading-relaxed">{sb.expandedInfo.diet}</p>
             </div>
             <div>
               <h6 className="text-academic-accent font-bold text-xs uppercase mb-1">Disease Resistance</h6>
               <p className="text-slate-300 leading-relaxed">{sb.expandedInfo.diseases}</p>
             </div>
             <div>
               <h6 className="text-academic-accent font-bold text-xs uppercase mb-1">Breeding System</h6>
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

const GlossaryModal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; terms: {term: string, definition: string}[] }> = ({ isOpen, onClose, title, terms }) => {
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
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const t = CONTENT[lang];
  
  const [activeTab, setActiveTab] = useState('cover');
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
  
  // Algeria Map State
  const [selectedMapRegion, setSelectedMapRegion] = useState<number | null>(null);
  const subBreedRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Comparison State
  const [selectedBreeds, setSelectedBreeds] = useState<string[]>(['holstein', 'atlas']);
  const [hoveredBreed, setHoveredBreed] = useState<string | null>(null);
  
  // Sorting State
  const [sortConfig, setSortConfig] = useState<{ key: keyof ComparisonDataPoint | null, direction: 'asc' | 'desc' }>({ key: null, direction: 'asc' });

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
      onClick={() => !isLocked && setActiveTab(id)}
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
    <div dir={t.direction} className="min-h-screen flex font-sans text-slate-200 bg-thesis-gradient">
      <GlossaryModal isOpen={showGlossary} onClose={() => setShowGlossary(false)} title={t.glossary.title} terms={t.glossary.terms} />
      
      {/* Sidebar */}
      <aside className="w-80 bg-[#020617] border-l border-white/5 flex flex-col fixed h-full z-30 hidden md:flex shadow-[5px_0_30px_rgba(0,0,0,0.5)]">
        <div className="p-8 text-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-5">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center mb-6 border-2 border-academic-primary/50 shadow-lg shadow-blue-900/20">
             <Microscope size={48} className="text-academic-accent" />
          </div>
          <h1 className="font-heading font-bold text-xl leading-tight text-white mb-2">{t.header.subtitle}</h1>
          <div className="flex justify-center gap-2 flex-wrap">
            {t.header.badges.map(b => (
              <span key={b} className="text-[10px] bg-academic-primary/20 text-blue-300 px-2 py-1 rounded border border-blue-500/20">{b}</span>
            ))}
          </div>
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
      <div className="md:hidden fixed top-0 w-full bg-academic-dark z-50 p-4 flex justify-between items-center border-b border-white/10 shadow-lg">
         <h1 className="font-bold text-white truncate pr-4">{t.header.title}</h1>
         <div className="flex items-center gap-2">
            <button onClick={() => setShowGlossary(true)} className="p-2 bg-slate-800 rounded border border-slate-600"><Book size={16} /></button>
            <button onClick={() => setLang(lang === 'ar' ? 'fr' : 'ar')} className="text-xs bg-slate-800 px-2 py-1 rounded border border-slate-600">{lang.toUpperCase()}</button>
            <div className="text-xs bg-academic-primary px-2 py-1 rounded font-bold">{activeTab}</div>
         </div>
      </div>

      {/* Content Area */}
      <main className={`flex-1 ${t.direction === 'rtl' ? 'md:mr-80' : 'md:ml-80'} p-4 md:p-12 overflow-y-auto`}>
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
                 className="w-40 h-40 mx-auto relative z-10 drop-shadow-2xl rounded-full border-4 border-white/10" 
               />
             </div>

             <div className="space-y-1 mb-10 text-slate-400 font-heading text-sm tracking-wide uppercase">
               {t.universityHeader.map((line, i) => <p key={i}>{line}</p>)}
             </div>
             
             <h1 className="text-4xl md:text-7xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-slate-400 mb-10 max-w-5xl leading-tight drop-shadow-lg">
               {t.sections.cover.title}
             </h1>

             <div className="glass-panel px-16 py-10 rounded-3xl mb-12 border-t border-white/10 shadow-2xl max-w-2xl w-full transform hover:scale-105 transition-transform duration-500">
                <p className="text-academic-accent font-bold mb-6 text-sm uppercase tracking-widest">{t.sections.cover.preparedBy}</p>
                <div className="flex flex-col gap-4 justify-center text-2xl md:text-3xl font-heading font-bold text-white mb-8">
                  {t.sections.cover.students.map(s => <span key={s} className="border-b-2 border-white/10 pb-2 inline-block">{s}</span>)}
                </div>
                <p className="text-slate-400 text-sm">{t.sections.cover.year}</p>
             </div>

             <button 
               onClick={() => setActiveTab('intro')}
               className="group px-10 py-5 bg-gradient-to-r from-academic-primary to-blue-700 hover:to-blue-600 text-white rounded-full font-bold text-xl transition-all shadow-[0_10px_40px_-10px_rgba(59,130,246,0.6)] hover:shadow-[0_20px_60px_-10px_rgba(59,130,246,0.8)] hover:-translate-y-1 flex items-center gap-4 ring-4 ring-blue-900/30"
             >
               {t.sections.cover.cta}
               {t.direction === 'rtl' ? <ChevronLeft className="group-hover:-translate-x-2 transition-transform" /> : <ChevronLeft className="rotate-180 group-hover:translate-x-2 transition-transform" />}
             </button>
          </div>
        )}

        {activeTab === 'intro' && (
          <div className="max-w-5xl mx-auto animate-fade-in">
             <div className="mb-12">
                <h2 className="text-5xl font-heading font-bold text-white mb-4">{t.sections.intro.title}</h2>
                <p className="text-2xl text-academic-accent font-light">{t.sections.intro.subtitle}</p>
             </div>

             {!unlocked.intro ? (
               <Quiz 
                 data={t.sections.intro.quiz} 
                 onComplete={() => setUnlocked(p => ({...p, intro: true}))}
                 onScore={(s) => setTotalScore(p => p + s)}
               />
             ) : (
               <div className="animate-slide-up space-y-12">
                  <div className="glass-panel p-10 rounded-3xl border border-white/10 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-academic-primary/10 rounded-full blur-3xl -z-10"></div>
                     <h3 className="text-3xl font-bold text-white mb-6">{t.sections.intro.content.title}</h3>
                     <p className="text-lg text-slate-300 leading-loose">{t.sections.intro.content.text}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                     {t.sections.intro.content.cards.map((card, i) => (
                       <div key={i} className="glass-card p-8 rounded-2xl border-t-4 border-academic-accent hover:bg-white/5 transition-colors group">
                          <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center text-3xl font-bold text-academic-primary mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
                          <h4 className="text-2xl font-heading font-bold text-white mb-3">{card.title}</h4>
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
                <h2 className="text-5xl font-heading font-bold text-white mb-4">{t.sections.global.title}</h2>
                <p className="text-2xl text-academic-accent font-light">{t.sections.global.subtitle}</p>
             </div>

             {!unlocked.global ? (
                <Quiz 
                  data={t.sections.global.quiz} 
                  onComplete={() => setUnlocked(p => ({...p, global: true}))}
                  onScore={(s) => setTotalScore(p => p + s)}
                />
             ) : (
                <div className="animate-slide-up space-y-16">
                   <div className="grid md:grid-cols-3 gap-8">
                      {t.sections.global.content.breeds.map(breed => (
                        <BreedCard 
                          key={breed.id} 
                          breed={breed} 
                          labels={t.sections.global.content.labels}
                          readMoreLabel={t.sections.global.content.readMore} 
                          showLessLabel={t.sections.global.content.showLess}
                          lang={lang}
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
                <h2 className="text-5xl font-heading font-bold text-white mb-4">{t.sections.algeria.title}</h2>
                <p className="text-2xl text-academic-accent font-light">{t.sections.algeria.subtitle}</p>
             </div>

            {!unlocked.algeria ? (
              <Quiz 
                data={t.sections.algeria.quiz} 
                onComplete={() => setUnlocked(p => ({...p, algeria: true, compare: true}))}
                onScore={(s) => setTotalScore(p => p + s)}
              />
            ) : (
               <div className="animate-slide-up space-y-16">
                  {/* Hero Card */}
                  <div className="glass-panel rounded-[2rem] overflow-hidden relative border-0 shadow-2xl group">
                     <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>
                     <ImageWithSkeleton src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Vache_de_l%27Atlas.jpg/1280px-Vache_de_l%27Atlas.jpg" alt="Brown Atlas" className="absolute w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]" />
                     <div className="relative z-20 p-12 md:p-20 max-w-3xl">
                        <div className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded mb-4">ENDANGERED</div>
                        <h3 className="text-5xl font-heading font-extrabold text-academic-accent mb-6 drop-shadow-lg">{t.sections.algeria.content.title}</h3>
                        <p className="text-xl text-slate-100 leading-relaxed font-light border-l-4 border-academic-primary pl-6">{t.sections.algeria.content.description}</p>
                        
                        <div className={`overflow-hidden transition-all duration-700 ${isHeroExpanded ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                           <div className="bg-black/40 p-6 rounded-xl border border-white/10 text-lg leading-relaxed text-slate-200">
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
                    <h3 className="text-3xl font-heading font-bold text-white mb-8 flex items-center gap-3">
                      <Map className="text-academic-primary" />
                      {t.sections.algeria.content.subBreedsTitle}
                    </h3>

                    {/* Map Integration */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                       <div className="md:col-span-1 h-full">
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
                       <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
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
                  <div className="bg-gradient-to-br from-orange-900/30 to-slate-900 border border-orange-500/30 p-10 rounded-3xl">
                     <h4 className="text-orange-400 font-bold text-2xl mb-4 flex items-center gap-3">
                        <Lock size={28} /> {t.sections.algeria.content.conservation.title}
                     </h4>
                     <p className="text-orange-100/80 text-lg leading-relaxed">{t.sections.algeria.content.conservation.text}</p>
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
              <h2 className="text-4xl font-heading font-bold text-white mb-2">{t.sections.compare.title}</h2>
              <p className="text-xl text-academic-primary mb-12">{t.sections.compare.subtitle}</p>
              
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
                 <div className="space-y-8">
                    <div className="glass-panel p-8 rounded-2xl">
                       <h3 className="text-xl font-bold text-white mb-6">{t.sections.compare.labels.adaptation} vs {t.sections.compare.labels.cost}</h3>
                       <div className="h-80 w-full">
                          <ResponsiveContainer>
                             <RadarChart outerRadius={90} data={[
                                { subject: t.sections.compare.labels.milk, ...Object.fromEntries(filteredComparisonData.map(d => [d.name, d.milkIndex])), fullMark: 100 },
                                { subject: t.sections.compare.labels.adaptation, ...Object.fromEntries(filteredComparisonData.map(d => [d.name, d.adaptationIndex])), fullMark: 100 },
                                { subject: t.sections.compare.labels.cost, ...Object.fromEntries(filteredComparisonData.map(d => [d.name, d.maintenanceCost])), fullMark: 100 },
                             ]}>
                                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#e2e8f0', fontSize: 14, fontWeight: 'bold' }} />
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

                    <div className="glass-panel p-8 rounded-2xl overflow-x-auto">
                       <table className="w-full text-right">
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
                    <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">{t.sections.conclusion.title}</h2>
                    <Quiz 
                      data={t.sections.conclusion.quiz}
                      onComplete={() => setUnlocked(p => ({...p, conclusion: true}))}
                      onScore={(s) => setTotalScore(p => p + s)}
                    />
                 </div>
              ) : (
                 <div className="glass-panel p-12 rounded-[2.5rem] text-center border border-academic-accent/30 shadow-[0_0_100px_-20px_rgba(245,158,11,0.3)] animate-slide-up relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-academic-accent to-transparent"></div>
                    <Award size={80} className="mx-auto text-academic-accent mb-8 animate-pulse-slow drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
                    <h2 className="text-4xl font-heading font-bold text-white mb-4">{t.sections.conclusion.report.title}</h2>
                    <p className="text-slate-400 mb-10 uppercase tracking-widest text-sm">Official Assessment Record</p>
                    
                    <div className="inline-block p-8 rounded-full bg-slate-900 border-4 border-academic-primary/30 mb-8">
                       <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-academic-accent to-yellow-200">
                          {totalScore} <span className="text-3xl text-slate-600">/ 8</span>
                       </div>
                    </div>
                    
                    <div className="mb-8">
                       <p className="text-slate-400 text-sm mb-2">{t.sections.conclusion.report.rank}</p>
                       <p className="text-2xl text-white font-bold">{totalScore > 6 ? "Senior Research Fellow" : "Research Associate"}</p>
                    </div>

                    <p className="text-slate-300 max-w-md mx-auto leading-relaxed border-t border-white/10 pt-6">{t.sections.conclusion.report.message}</p>

                    <button onClick={() => window.print()} className="mt-12 px-10 py-3 border border-white/20 hover:bg-white/10 hover:border-white/40 rounded-full text-sm font-bold transition-all uppercase tracking-widest">
                       Print Official Transcript
                    </button>
                 </div>
              )}
           </div>
        )}

      </main>
    </div>
  );
};

export default App;
