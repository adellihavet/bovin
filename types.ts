
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

export interface QuizLabels {
  nextQuestion: string;
  completeSelection: string;
  confirmSelection: string;
  correctFeedback: string;
  incorrectFeedback: string;
  excellentAnalysis: string;
  incorrectAssessment: string;
  question: string;
  explanation: string; // Added for print
  correctAnswer: string; // Added for print
}

export interface TranslationContent {
  direction: 'ltr' | 'rtl';
  universityHeader: string[];
  header: {
    title: string;
    subtitle: string;
    glossaryBtn: string;
  };
  ui: {
    printBtn: string;
    closeBtn: string;
    printTitle: string;
  };
  quizLabels: QuizLabels;
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
        text: string[]; // Changed to array for multiple paragraphs
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
          clinicalProfile: string;
          diet: string;
          diseases: string;
          breeding: string;
          traits: string;
          risks: string;
          resistance: string;
          reproductive: string;
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
          population: string;
          diet: string;
          diseases: string;
          breeding: string;
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
        message: string[]; // Changed to array
      };
    };
  };
}
