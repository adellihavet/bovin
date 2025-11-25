
export type Language = 'en' | 'fr' | 'ar';

export interface Hotspot {
  x: number; // Percentage from left
  y: number; // Percentage from top
  label: string;
  text: string;
}

export interface BreedDetail {
  id: string;
  name: string;
  origin: string; // Acts as "Localisation"
  type: string;   // Acts as "Production"
  color: string;
  height: string;
  image: string;
  stats: {
    milk: string;
    fat: string;
    protein: string;
    weight: string;
  };
  clinicalProfile: {
    risks: string;
    resistance: string;
    reproductive: string;
  };
  description: string;
  traits: string[];
  expandedInfo: {
    diet: string;
    diseases: string;
    breeding: string;
  };
  hotspots?: Hotspot[]; // Added hotspots
}

export interface ComparisonDataPoint {
  id: string;
  name: string;
  milkIndex: number; // Normalized 0-100
  fatIndex: number;
  adaptationIndex: number;
  maintenanceCost: number;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: { id: string; text: string; isCorrect: boolean }[];
  explanation: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface TranslationContent {
  direction: 'ltr' | 'rtl';
  universityHeader: string[];
  header: {
    title: string;
    subtitle: string;
    badges: string[];
    glossaryBtn: string;
  };
  nav: {
    cover: string;
    intro: string;
    global: string;
    algeria: string;
    compare: string;
    conclusion: string;
  };
  glossary: {
    title: string;
    terms: GlossaryTerm[];
  };
  sections: {
    cover: {
      title: string;
      preparedBy: string;
      students: string[];
      supervisor: string;
      year: string;
      cta: string;
    };
    intro: {
      title: string;
      subtitle: string;
      quiz: { title: string; questions: QuizQuestion[] };
      content: {
        title: string;
        text: string;
        cards: { title: string; desc: string; icon: string }[];
      };
    };
    global: {
      title: string;
      subtitle: string;
      quiz: { title: string; questions: QuizQuestion[] };
      content: {
        title: string;
        description: string;
        readMore: string;
        showLess: string;
        labels: {
          color: string;
          height: string;
          weight: string;
          origin: string;
        };
        breeds: BreedDetail[];
      };
    };
    algeria: {
      title: string;
      subtitle: string;
      quiz: { title: string; questions: QuizQuestion[] };
      content: {
        title: string;
        description: string;
        heroExpandedText: string;
        readMore: string;
        showLess: string;
        subBreedsTitle: string;
        labels: {
          color: string;
          height: string;
          weight: string;
        };
        subBreeds: { 
          name: string; 
          region: string; 
          features: string;
          color: string;
          height: string;
          weight: string;
          status: string;      
          population: string;  
          coordinates: [number, number]; 
          regionPolygon: [number, number][]; 
          expandedInfo: {
            diet: string;
            diseases: string;
            breeding: string;
          };
        }[];
        conservation: { title: string; text: string; };
      };
    };
    compare: {
      title: string;
      subtitle: string;
      labels: {
        milk: string;
        adaptation: string;
        cost: string;
        fat: string;
        protein: string;
        selectBreeds: string;
        tableHeader: string[]; // [Breed, Milk, Fat, Protein, Adaptation]
      };
      data: ComparisonDataPoint[];
    };
    conclusion: {
      title: string;
      quiz: { title: string; questions: QuizQuestion[] };
      report: {
        title: string;
        rank: string;
        score: string;
        message: string;
      };
    };
  };
}
