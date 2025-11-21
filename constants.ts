
import { TranslationContent } from './types';

export const IMAGES = {
  holstein: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Cow_female_black_white.jpg/640px-Cow_female_black_white.jpg",
  montbeliarde: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Vache_Montb%C3%A9liarde_Jura.jpg/640px-Vache_Montb%C3%A9liarde_Jura.jpg",
  angus: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Black_Angus_cow_and_calf.jpg/640px-Black_Angus_cow_and_calf.jpg",
  brahman: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Brahman_Cattle.jpg/640px-Brahman_Cattle.jpg",
  atlas: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Vache_de_l%27Atlas.jpg/640px-Vache_de_l%27Atlas.jpg",
  jersey: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Jersey_Cow.jpg/640px-Jersey_Cow.jpg",
  simmental: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Simmentaler_Fleckvieh.jpg/640px-Simmentaler_Fleckvieh.jpg"
};

export const CONTENT: Record<string, TranslationContent> = {
  ar: {
    direction: 'rtl',
    universityHeader: [
      "الجمهورية الجزائرية الديمقراطية الشعبية",
      "وزارة التعليم العالي والبحث العلمي",
      "جامعة عمار الثليجي - الأغواط",
      "قسم العلوم البيطرية"
    ],
    header: {
      title: "دراسة إثنولوجية معمقة لسلالات الماشية",
      subtitle: "بحث أكاديمي: الواقع، التحديات، والآفاق",
      badges: ["ماستر 2026", "علم الجينوم", "الأمن الغذائي"],
      glossaryBtn: "المصطلحات العلمية"
    },
    nav: {
      cover: "الرئيسية",
      intro: "مدخل إثنولوجي",
      global: "السلالات العالمية",
      algeria: "السلالات المحلية",
      compare: "مقارنة تقنية",
      conclusion: "التقييم النهائي"
    },
    glossary: {
      title: "قاموس المصطلحات البيطرية والإثنولوجية",
      terms: [
        { term: "الإثنولوجيا (Ethnology)", definition: "فرع من علم الحيوان يدرس أصل السلالات، تطورها، خصائصها وتوزيعها الجغرافي." },
        { term: "النمط الظاهري (Phenotype)", definition: "الخصائص المرئية للحيوان الناتجة عن تفاعل جيناته مع البيئة (مثل اللون، الحجم)." },
        { term: "التهاب الضرع (Mastitis)", definition: "التهاب في نسيج الغدة الثديية، غالباً بسبب عدوى بكتيرية، يؤثر سلباً على إنتاج الحليب." },
        { term: "عسر الولادة (Dystocia)", definition: "صعوبة في عملية الولادة تتطلب تدخلاً بيطرياً، شائعة في سلالات اللحم الكبيرة." },
        { term: "الزيبو (Zebu)", definition: "ماشية Bos indicus التي تتميز بسنام دهني ومقاومة عالية للحرارة والطفيليات." },
        { term: "الترخيم (Marbling)", definition: "توزع الدهون داخل الألياف العضلية، وهو معيار رئيسي لجودة اللحم." }
      ]
    },
    sections: {
      cover: {
        title: "دراسة تحليلية مقارنة لسلالات الماشية في الجزائر والعالم",
        preparedBy: "من إعداد الطلبة الباحثين:",
        students: ["أحمد رياض دليحة", "منى لخذاري"],
        supervisor: "تحت إشراف هيئة التدريس",
        year: "السنة الجامعية: 2025 / 2026",
        cta: "بدء العرض التقديمي"
      },
      intro: {
        title: "الأسس النظرية للإثنولوجيا",
        subtitle: "التطور التاريخي والتصنيف الفيلوجيني",
        quiz: {
          title: "بوابة المعرفة الأساسية",
          questions: [
            {
              id: "i1",
              text: "ما هو الغرض الأساسي من علم الإثنولوجيا الحيوانية؟",
              explanation: "الإثنولوجيا تدرس العلاقة بين الوراثة والبيئة وتاريخ التدجين لفهم قدرات السلالة.",
              options: [{ id: "a", text: "دراسة الشكل الخارجي فقط", isCorrect: false }, { id: "b", text: "دراسة الأصول والتطور والتكيف البيئي", isCorrect: true }]
            },
            {
              id: "i2",
              text: "ينقسم البقر المستأنس عالمياً إلى فرعين رئيسيين هما:",
              explanation: "Bos taurus (الأوروبي) و Bos indicus (الآسيوي ذو السنام) هما الأفرع الرئيسية.",
              options: [{ id: "a", text: "اللاحم والحلوب", isCorrect: false }, { id: "b", text: "Bos taurus & Bos indicus", isCorrect: true }]
            }
          ]
        },
        content: {
          title: "مفهوم التدجين والتطور",
          text: "بدأت عملية تدجين الماشية قبل حوالي 10,500 سنة في الهلال الخصيب. أدى هذا المسار الطويل إلى تمايز وراثي هائل استجابةً للظروف المناخية.",
          cards: [
            { title: "Bos taurus", desc: "سلالات المناطق المعتدلة. نضج مبكر وإنتاجية عالية.", icon: "T" },
            { title: "Bos indicus", desc: "سلالات المناطق الحارة (الزيبو). مقاومة للطفيليات.", icon: "I" }
          ]
        }
      },
      global: {
        title: "أطلس السلالات العالمية",
        subtitle: "الخصائص السريرية والإنتاجية",
        quiz: {
          title: "اختبار المعرفة الإنتاجية",
          questions: [
            {
              id: "g1",
              text: "أي سلالة تعتبر 'مصنع الحليب' الأول في العالم؟",
              explanation: "هولشتاين فريزيان هي السلالة المهيمنة عالمياً بإنتاج يتجاوز 10,000 لتر.",
              options: [{ id: "a", text: "المونبيليارد", isCorrect: false }, { id: "b", text: "هولشتاين", isCorrect: true }]
            },
            {
              id: "g2",
              text: "لماذا تفضل سلالة 'أنجوس' في إنتاج اللحوم؟",
              explanation: "تتميز بقدرتها العالية على 'الترخيم' (Marbling) وجودة اللحم.",
              options: [{ id: "a", text: "لكبر عظامها", isCorrect: false }, { id: "b", text: "لجودة اللحم والترخيم", isCorrect: true }]
            }
          ]
        },
        content: {
          title: "السلالات الاقتصادية الكبرى",
          description: "دراسة تفصيلية لأهم السلالات المؤثرة في الاقتصاد العالمي للإنتاج الحيواني.",
          readMore: "اقرأ المزيد",
          showLess: "إخفاء التفاصيل",
          breeds: [
            {
              id: "holstein",
              name: "هولشتاين (Holstein)",
              origin: "هولندا",
              type: "حلوب (صناعي)",
              image: IMAGES.holstein,
              stats: { milk: "10,000+ كغ", fat: "3.7%", protein: "3.2%", weight: "650 كغ" },
              clinicalProfile: { risks: "التهاب الضرع، العرج، انزياح المنفحة", resistance: "ضعيفة للمناخ الحار", reproductive: "صعوبة ولادة متوسطة" },
              description: "السلالة الأكثر انتشاراً عالمياً. تتطلب إدارة بيطرية دقيقة جداً وتغذية مركزة.",
              traits: ["إنتاج غزير", "تطلب غذائي عالي", "حساسة بيئياً"],
              expandedInfo: {
                diet: "نظام غذائي عالي الطاقة (TMR) يعتمد على السيلاج والمركزات لتلبية متطلبات الإنتاج العالي (16-18 MJ/kg).",
                diseases: "عرضة لأمراض التمثيل الغذائي (حمى الحليب، الكيتوزية) بسبب الإنتاج العالي.",
                breeding: "تلقيح اصطناعي مكثف باستخدام ثيران مختبرة جينياً لتحسين إنتاج الحليب وشكل الضرع."
              }
            },
            {
              id: "montbeliarde",
              name: "مونبيليارد (Montbéliarde)",
              origin: "فرنسا",
              type: "مختلطة",
              image: IMAGES.montbeliarde,
              stats: { milk: "7,500 كغ", fat: "3.9%", protein: "3.45%", weight: "700 كغ" },
              clinicalProfile: { risks: "مقاومة جيدة للتهاب الضرع", resistance: "صلابة بدنية عالية", reproductive: "خصوبة ممتازة" },
              description: "مثالية لصناعة الأجبان بفضل بروتين الكازين بيتا.",
              traits: ["جبنة ممتازة", "صلابة بدنية", "طول عمر"],
              expandedInfo: {
                diet: "مرنة؛ تزدهر على المراعي العشبية والقش، ويمكنها تحويل الأعلاف الخشنة بكفاءة.",
                diseases: "مقاومة نسبياً لالتهاب الضرع بفضل صحة الضرع الجيدة، أقل عرضة للعرج.",
                breeding: "تربية تركز على جودة البروتين (Kappa Casein B) لإنتاج الأجبان الفرنسية الراقية (Comté)."
              }
            },
            {
              id: "brahman",
              name: "براهمان (Brahman)",
              origin: "الولايات المتحدة (أصل هندي)",
              type: "لاحم (مناخ حار)",
              image: IMAGES.brahman,
              stats: { milk: "منخفض", fat: "4.5%", protein: "3.6%", weight: "500-800 كغ" },
              clinicalProfile: { risks: "قليلة الأمراض", resistance: "عالية جداً للقراد والحرارة", reproductive: "نضج متأخر قليلاً" },
              description: "سنام مميز وغدد عرقية كثيفة تجعلها سيدة المناطق الحارة.",
              traits: ["مقاومة الحرارة", "مقاومة الطفيليات", "لحم قليل الدهون"],
              expandedInfo: {
                diet: "قادرة على هضم الأعلاف الاستوائية منخفضة الجودة والألياف العالية بكفاءة.",
                diseases: "جلد سميك ومتحرك يمنع لدغات الحشرات، ومقاومة طبيعية للتريبانوسوميات والقراد.",
                breeding: "تستخدم بكثرة في برامج التهجين (F1) لإضافة الصلابة الهجينة للسلالات الأوروبية في المناطق الحارة."
              }
            },
            {
              id: "jersey",
              name: "جيرسي (Jersey)",
              origin: "جزيرة جيرسي (المملكة المتحدة)",
              type: "حلوب (دسم عالي)",
              image: IMAGES.jersey,
              stats: { milk: "6,000 كغ", fat: "5.4%", protein: "3.9%", weight: "450 كغ" },
              clinicalProfile: { risks: "حمى الحليب (Hypocalcemia)", resistance: "تحمل جيد للحرارة، حوافر صلبة", reproductive: "سهولة ولادة ممتازة" },
              description: "أصغر السلالات الحلوب حجماً ولكنها الأكثر كفاءة في تحويل العلف إلى دسم.",
              traits: ["دسم عالي", "سهولة ولادة", "كفاءة تحويل"],
              expandedInfo: {
                diet: "تتطلب علفاً عالي الكثافة الطاقوية نظراً لصغر حجم الكرش، حساسة لنقص الكالسيوم.",
                diseases: "أكثر عرضة لحمى الحليب بعد الولادة مباشرة بسبب ارتفاع تركيز الكالسيوم في اللبأ.",
                breeding: "مفضلة جداً لتلقيح العجلات (Bakers) نظراً لصغر حجم المواليد وسهولة الولادة."
              }
            },
            {
              id: "angus",
              name: "أنجوس (Aberdeen Angus)",
              origin: "اسكتلندا",
              type: "لاحم (فاخر)",
              image: IMAGES.angus,
              stats: { milk: "منخفض", fat: "عالٍ (مرخم)", protein: "جودة عضلية", weight: "800-1000 كغ" },
              clinicalProfile: { risks: "مشاكل وراثية نادرة", resistance: "مقاومة للبرد، بدون قرون", reproductive: "سهولة ولادة ونضج مبكر" },
              description: "السلالة الأولى عالمياً لإنتاج اللحم الفاخر (Premium Beef) بفضل خاصية الترخيم.",
              traits: ["جودة اللحم", "بدون قرون", "نضج مبكر"],
              expandedInfo: {
                diet: "تستجيب جيداً للتسمين بالحبوب (Grain-finished) للحصول على درجة ترخيم عالية.",
                diseases: "يجب مراقبة الأمراض الوراثية المتنحية (مثل AM).",
                breeding: "الخيار الأول في برامج التسمين لإنتاج لحوم الستيك عالية الجودة."
              }
            },
            {
              id: "simmental",
              name: "سيمينتال (Simmental)",
              origin: "سويسرا",
              type: "مختلطة (لحم وحليب)",
              image: IMAGES.simmental,
              stats: { milk: "7,000 كغ", fat: "4.0%", protein: "3.5%", weight: "700-900 كغ" },
              clinicalProfile: { risks: "عسر ولادة (عجول ضخمة)", resistance: "تأقلم جبلي ممتاز", reproductive: "خصوبة جيدة، توائم شائعة" },
              description: "سلالة قوية البنية، تجمع بين إنتاج الحليب الجيد والنمو العضلي السريع للعجول.",
              traits: ["نمو سريع", "حليب دسم", "بنية قوية"],
              expandedInfo: {
                diet: "تتطلب كميات كبيرة من العلف (High Intake Capacity) للحفاظ على حجمها وإنتاجها.",
                diseases: "معدلات التهاب ضرع منخفضة، لكن يجب الحذر من مشاكل الأقدام في الأرضيات الصلبة.",
                breeding: "شائعة جداً في أوروبا لإنتاج عجول تسمين ممتازة مع الحفاظ على دخل من الحليب."
              }
            }
          ]
        }
      },
      algeria: {
        title: "السلالات المحلية الجزائرية",
        subtitle: "التنوع الوراثي المهدد",
        quiz: {
          title: "مدخل للواقع المحلي",
          questions: [
            {
              id: "dz1",
              text: "السلالة المحلية الأولى في الجزائر هي:",
              explanation: "براون أطلس (Brune de l'Atlas) هي السلالة الأم في شمال إفريقيا.",
              options: [{ id: "a", text: "الشرقية المرقطة", isCorrect: false }, { id: "b", text: "السمراء الأطلسية", isCorrect: true }]
            }
          ]
        },
        content: {
          title: "السمراء الأطلسية: إرث بيولوجي",
          description: "تعتبر سلالة 'Brune de l'Atlas' خزاناً وراثياً نادراً، يتميز بمقاومة استثنائية للظروف القاسية.",
          heroExpandedText: "تكيفت هذه السلالة عبر آلاف السنين مع بيئة شمال إفريقيا. تمتلك كفاءة تحويل غذائي فريدة للنباتات الخشنة، ومقاومة طبيعية لأمراض الدم المنقولة بالقراد (Babesiosis & Theileriosis). ومع ذلك، فإن إنتاجها للحليب منخفض (حوالي 1000 لتر) مما دفع المربين للتهجين العشوائي.",
          readMore: "التفاصيل البيئية",
          showLess: "إخفاء التفاصيل",
          subBreedsTitle: "الأنواع الفرعية (Ecotypes)",
          subBreeds: [
            { 
              name: "الڤالمية (Guelmoise)", 
              region: "الشرق الجبلي", 
              features: "صغيرة، رمادية، متسلقة للجبال.",
              status: "مهددة بالانقراض",
              population: "جيوب معزولة في جبال قلمة وسوق أهراس.",
              coordinates: [36.4621, 7.4261],
              regionPolygon: [[36.2, 7.2], [36.8, 7.2], [36.8, 8.0], [36.2, 8.0]],
              expandedInfo: {
                diet: "تعتمد على رعي النباتات الجبلية والشجيرات الغابية، تتحمل فترات شح الغذاء.",
                diseases: "مقاومة عالية لمرض البابيزيا (Babesiosis) المنقول عبر القراد الجبلي.",
                breeding: "تربية تقليدية واسعة النطاق، الولادات سهلة جداً دون مساعدة."
              }
            },
            { 
              name: "الشيورفا (Cheurfa)", 
              region: "السهوب", 
              features: "فاتحة اللون، مقاومة للجفاف.",
              status: "هشة",
              population: "تتناقص بسبب التصحر وتغير نمط الرعي.",
              coordinates: [34.6728, 3.2630],
              regionPolygon: [[34.0, 2.5], [35.2, 2.5], [35.2, 4.0], [34.0, 4.0]],
              expandedInfo: {
                diet: "تكيفت مع نباتات السهوب (الحلفاء والشيح)، تشرب كميات قليلة من الماء.",
                diseases: "مقاومة للجفاف الحراري والأمراض الطفيلية الجلدية.",
                breeding: "نظام رعوي بدوي أو شبه بدوي، انتقاء طبيعي للقوة والتحمل."
              }
            },
            { 
              name: "السطايفية (Sétifienne)", 
              region: "سطيف", 
              features: "سوداء، متعددة الأغراض.",
              status: "في خطر",
              population: "تعاني من التهجين العشوائي المكثف.",
              coordinates: [36.1898, 5.4108],
              regionPolygon: [[35.8, 5.0], [36.5, 5.0], [36.5, 5.8], [35.8, 5.8]],
              expandedInfo: {
                diet: "تتغذى على بقايا المحاصيل (التبن) والمراعي الطبيعية في الهضاب العليا.",
                diseases: "تتحمل البرد القارس في شتاء الهضاب، ولكنها حساسة للتهجين غير المدروس.",
                breeding: "تستخدم للعمل والحليب، التلقيح الاصطناعي يهدد نقاءها الوراثي."
              }
            },
            { 
              name: "الشليفية (Chélifienne)", 
              region: "الغرب", 
              features: "بنية محمرة، الأفضل حليباً.",
              status: "حرجة جداً",
              population: "شبه منقرضة في حالتها النقية.",
              coordinates: [36.1652, 1.3345],
              regionPolygon: [[35.8, 0.8], [36.5, 0.8], [36.5, 1.8], [35.8, 1.8]],
              expandedInfo: {
                diet: "تستفيد من الأراضي الزراعية الخصبة في وادي الشلف.",
                diseases: "كانت سابقاً مقاومة للأمراض المحلية، لكن الأعداد القليلة تزيد خطر الأمراض الوراثية.",
                breeding: "تم استبدالها تقريباً بالكامل بسلالات مستوردة لإنتاج الحليب."
              }
            }
          ],
          conservation: {
            title: "استراتيجيات الحفاظ",
            text: "يجب تفعيل برامج الانتقاء النقي وإنشاء بنوك للجينات لحماية هذا الإرث من التآكل الوراثي."
          }
        }
      },
      compare: {
        title: "المقارنة التقنية المتقدمة",
        subtitle: "أداة اتخاذ القرار البيطري",
        labels: {
          milk: "إنتاج الحليب",
          adaptation: "التكيف المناخي",
          cost: "تكلفة الرعاية",
          fat: "الدسم",
          protein: "البروتين",
          selectBreeds: "اختر السلالات للمقارنة:",
          tableHeader: ["السلالة", "الحليب", "الدهون", "البروتين", "التكيف"]
        },
        data: [
          { id: "holstein", name: "هولشتاين", milkIndex: 100, fatIndex: 50, adaptationIndex: 20, maintenanceCost: 100 },
          { id: "montbeliarde", name: "مونبيليارد", milkIndex: 75, fatIndex: 70, adaptationIndex: 60, maintenanceCost: 70 },
          { id: "jersey", name: "جيرسي", milkIndex: 60, fatIndex: 100, adaptationIndex: 50, maintenanceCost: 60 },
          { id: "atlas", name: "براون أطلس", milkIndex: 15, fatIndex: 65, adaptationIndex: 100, maintenanceCost: 20 },
          { id: "brahman", name: "براهمان", milkIndex: 20, fatIndex: 60, adaptationIndex: 95, maintenanceCost: 30 }
        ]
      },
      conclusion: {
        title: "التقييم النهائي",
        quiz: {
          title: "الامتحان الشامل",
          questions: [
            {
              id: "f1",
              text: "لتحقيق إنتاج مستدام في الصحراء الجزائرية، الأفضل هو:",
              explanation: "النظام شبه المكثف والتهجين المدروس هو الحل الأمثل.",
              options: [{ id: "a", text: "هولشتاين نقي", isCorrect: false }, { id: "b", text: "تهجين مدروس وسلالات محلية", isCorrect: true }]
            }
          ]
        },
        report: {
          title: "تقرير الكفاءة البحثية",
          rank: "الرتبة العلمية:",
          score: "المعدل النهائي:",
          message: "أداء ممتاز يدل على استيعاب عميق للمفاهيم."
        }
      }
    }
  },
  en: {
    direction: 'ltr',
    universityHeader: [
      "People's Democratic Republic of Algeria",
      "Ministry of Higher Education and Scientific Research",
      "University of Laghouat",
      "Department of Veterinary Sciences"
    ],
    header: {
      title: "Ethnological Study of Cattle Breeds",
      subtitle: "Academic Research: Reality, Challenges & Prospects",
      badges: ["Master 2026", "Genomics", "Food Security"],
      glossaryBtn: "Scientific Glossary"
    },
    nav: {
      cover: "Home",
      intro: "Introduction",
      global: "Global Breeds",
      algeria: "Algerian Breeds",
      compare: "Comparison",
      conclusion: "Conclusion"
    },
    glossary: {
      title: "Veterinary & Ethnological Glossary",
      terms: [
        { term: "Ethnology", definition: "Branch of zoology studying breed origins, evolution, characteristics, and geographic distribution." },
        { term: "Phenotype", definition: "The observable characteristics of an animal resulting from the interaction of its genotype with the environment." },
        { term: "Mastitis", definition: "Inflammation of the mammary gland tissue, usually due to bacterial infection, affecting milk production." },
        { term: "Dystocia", definition: "Difficult birth/labor requiring veterinary intervention, common in large beef breeds." },
        { term: "Zebu", definition: "Bos indicus cattle characterized by a fatty hump, drooping ears, and heat/parasite resistance." },
        { term: "Marbling", definition: "Intramuscular fat distribution, a key quality standard for beef tenderness and flavor." }
      ]
    },
    sections: {
      cover: {
        title: "Comparative Analytical Study of Cattle Breeds in Algeria and the World",
        preparedBy: "Prepared by Research Students:",
        students: ["Ahmed Ryadh Delliha", "Mouna Lakhdari"],
        supervisor: "Supervised by Faculty Staff",
        year: "Academic Year: 2025 / 2026",
        cta: "Start Presentation"
      },
      intro: {
        title: "Theoretical Foundations of Ethnology",
        subtitle: "Phylogeny and Domestication History",
        quiz: {
          title: "Knowledge Gateway",
          questions: [
            {
              id: "i1",
              text: "What is the primary purpose of animal ethnology?",
              explanation: "Ethnology links genetics, environment, and history to understand breed potential.",
              options: [{ id: "a", text: "Morphology only", isCorrect: false }, { id: "b", text: "Origins, evolution & adaptation", isCorrect: true }]
            },
            {
              id: "i2",
              text: "Domestic cattle are divided into two main lineages:",
              explanation: "Bos taurus (taurine) and Bos indicus (zebu) are the two main subspecies.",
              options: [{ id: "a", text: "Beef & Dairy", isCorrect: false }, { id: "b", text: "Bos taurus & Bos indicus", isCorrect: true }]
            }
          ]
        },
        content: {
          title: "Domestication & Evolution",
          text: "Cattle domestication began ~10,500 years ago in the Fertile Crescent. This long path led to massive genetic differentiation based on climate and human needs.",
          cards: [
            { title: "Bos taurus", desc: "Temperate zones. Early maturity, high production.", icon: "T" },
            { title: "Bos indicus", desc: "Tropical zones (Zebu). Parasite resistance, heat tolerance.", icon: "I" }
          ]
        }
      },
      global: {
        title: "Global Breeds Atlas",
        subtitle: "Clinical & Production Characteristics",
        quiz: {
          title: "Production Knowledge Quiz",
          questions: [
            {
              id: "g1",
              text: "Which breed is the world's #1 milk producer?",
              explanation: "Holstein Friesian dominates globally with >10,000kg yield.",
              options: [{ id: "a", text: "Montbéliarde", isCorrect: false }, { id: "b", text: "Holstein", isCorrect: true }]
            },
            {
              id: "g2",
              text: "Why is Angus preferred for beef?",
              explanation: "Angus is known for superior marbling (intramuscular fat).",
              options: [{ id: "a", text: "Large bones", isCorrect: false }, { id: "b", text: "Meat quality & Marbling", isCorrect: true }]
            }
          ]
        },
        content: {
          title: "Economic Giants",
          description: "Detailed study of the most economically impactful breeds globally.",
          readMore: "Read More",
          showLess: "Show Less",
          breeds: [
            {
              id: "holstein",
              name: "Holstein",
              origin: "Netherlands",
              type: "Dairy (Industrial)",
              image: IMAGES.holstein,
              stats: { milk: "10,000+ kg", fat: "3.7%", protein: "3.2%", weight: "650 kg" },
              clinicalProfile: { risks: "Mastitis, Lameness, LDA", resistance: "Low heat tolerance", reproductive: "Moderate dystocia risk" },
              description: "The most widespread dairy breed. Requires intensive veterinary management and high-energy nutrition.",
              traits: ["High Yield", "High Intake", "Sensitive"],
              expandedInfo: {
                diet: "High-energy Total Mixed Ration (TMR) rich in concentrates to support massive milk production (16-18 MJ/kg DM).",
                diseases: "Prone to metabolic disorders like milk fever and ketosis due to negative energy balance.",
                breeding: "Heavy reliance on Artificial Insemination with genomically tested sires for milk solids and udder conformation."
              }
            },
            {
              id: "montbeliarde",
              name: "Montbéliarde",
              origin: "France",
              type: "Dual Purpose",
              image: IMAGES.montbeliarde,
              stats: { milk: "7,500 kg", fat: "3.9%", protein: "3.45%", weight: "700 kg" },
              clinicalProfile: { risks: "Low mastitis risk", resistance: "High robustness", reproductive: "Excellent fertility" },
              description: "Ideal for cheesemaking due to Kappa Casein B variants.",
              traits: ["Cheese Quality", "Robustness", "Longevity"],
              expandedInfo: {
                diet: "Flexible; thrives on grass/hay-based diets and can convert roughage efficiently.",
                diseases: "Relatively resistant to mastitis due to good udder health; lower incidence of lameness.",
                breeding: "Selection focuses on protein quality (Kappa Casein B) for AOC cheese production (e.g., Comté)."
              }
            },
            {
              id: "brahman",
              name: "Brahman",
              origin: "USA (Indian origin)",
              type: "Beef (Tropical)",
              image: IMAGES.brahman,
              stats: { milk: "Low", fat: "4.5%", protein: "3.6%", weight: "500-800 kg" },
              clinicalProfile: { risks: "Low disease risk", resistance: "Ticks & Heat", reproductive: "Late maturity" },
              description: "Distinctive hump and sweat glands make it the master of tropical climates.",
              traits: ["Heat Tolerance", "Parasite Resistance", "Lean Meat"],
              expandedInfo: {
                diet: "Excellent digester of low-quality, high-fiber tropical forages.",
                diseases: "Thick, mobile skin repels insects; highly resistant to trypanosomiasis and tick-borne diseases.",
                breeding: "Widely used in crossbreeding (F1) to add hybrid vigor and hardiness to European breeds in hot climates."
              }
            },
            {
              id: "jersey",
              name: "Jersey",
              origin: "Jersey Island (UK)",
              type: "Dairy (High Solids)",
              image: IMAGES.jersey,
              stats: { milk: "6,000 kg", fat: "5.4%", protein: "3.9%", weight: "450 kg" },
              clinicalProfile: { risks: "Hypocalcemia (Milk Fever)", resistance: "Heat tolerant, strong hooves", reproductive: "Excellent calving ease" },
              description: "Smallest dairy breed with the highest feed conversion efficiency for milk solids.",
              traits: ["High Butterfat", "Calving Ease", "Efficiency"],
              expandedInfo: {
                diet: "Requires high energy density feed due to smaller rumen capacity; prone to calcium deficiency.",
                diseases: "Susceptible to Milk Fever immediately post-calving due to high calcium output in colostrum.",
                breeding: "Highly preferred for breeding heifers due to small calf size."
              }
            },
            {
              id: "angus",
              name: "Angus",
              origin: "Scotland",
              type: "Beef (Premium)",
              image: IMAGES.angus,
              stats: { milk: "Low", fat: "High (Marbled)", protein: "Muscular", weight: "800-1000 kg" },
              clinicalProfile: { risks: "Genetic defects (AM)", resistance: "Cold hardy, Polled", reproductive: "Early maturity" },
              description: "The world's leading beef breed, famed for its marbling and maternal traits.",
              traits: ["Marbling", "Polled", "Early Maturing"],
              expandedInfo: {
                diet: "Responds well to grain finishing for maximum marbling but performs excellently on grass.",
                diseases: "Carriers of recessive genetic defects like Arthrogryposis Multiplex (AM) must be screened.",
                breeding: "The gold standard for beef quality programs; widely used terminal sire."
              }
            },
            {
              id: "simmental",
              name: "Simmental",
              origin: "Switzerland",
              type: "Dual Purpose",
              image: IMAGES.simmental,
              stats: { milk: "7,000 kg", fat: "4.0%", protein: "3.5%", weight: "700-900 kg" },
              clinicalProfile: { risks: "Dystocia (heavy calves)", resistance: "Alpine adaptation", reproductive: "Good fertility, Twinning" },
              description: "Powerful build offering a balance of rapid growth rates and respectable milk yield.",
              traits: ["Fast Growth", "Heavy Milker", "Robust"],
              expandedInfo: {
                diet: "High intake capacity; requires substantial forage to maintain large body frame.",
                diseases: "Generally healthy udders, but heavy weight can cause hoof issues on concrete.",
                breeding: "Popular in Europe for producing excellent feeder calves while maintaining milk income."
              }
            }
          ]
        }
      },
      algeria: {
        title: "Algerian Indigenous Breeds",
        subtitle: "Endangered Genetic Diversity",
        quiz: {
          title: "Local Context Gateway",
          questions: [
            {
              id: "dz1",
              text: "The primary indigenous breed in Algeria is:",
              explanation: "The Brown Atlas (Brune de l'Atlas) is the ancestral breed of North Africa.",
              options: [{ id: "a", text: "Eastern Spotted", isCorrect: false }, { id: "b", text: "Brown Atlas", isCorrect: true }]
            }
          ]
        },
        content: {
          title: "The Brown Atlas: Biological Heritage",
          description: "The 'Brune de l'Atlas' is a rare genetic reservoir, characterized by exceptional resilience to harsh conditions.",
          heroExpandedText: "This breed has adapted over thousands of years to the North African environment. It possesses unique feed conversion efficiency for rough vegetation and natural resistance to tick-borne blood diseases (Babesiosis & Theileriosis). However, its low milk production (approx. 1000L) has led to indiscriminate crossbreeding.",
          readMore: "Environmental Details",
          showLess: "Show Less",
          subBreedsTitle: "Ecotypes (Sub-breeds)",
          subBreeds: [
            { 
              name: "Guelmoise", 
              region: "Eastern Mountains", 
              features: "Small, grey, climber.",
              status: "Endangered",
              population: "Isolated pockets in Guelma & Souk Ahras.",
              coordinates: [36.4621, 7.4261],
              regionPolygon: [[36.2, 7.2], [36.8, 7.2], [36.8, 8.0], [36.2, 8.0]],
              expandedInfo: {
                diet: "Relies on mountain scrub and forest undergrowth; withstands feed scarcity.",
                diseases: "High resistance to Babesiosis transmitted by mountain ticks.",
                breeding: "Traditional extensive breeding; calving is extremely easy without assistance."
              }
            },
            { 
              name: "Cheurfa", 
              region: "Steppe", 
              features: "Light color, drought resistant.",
              status: "Vulnerable",
              population: "Declining due to desertification.",
              coordinates: [34.6728, 3.2630],
              regionPolygon: [[34.0, 2.5], [35.2, 2.5], [35.2, 4.0], [34.0, 4.0]],
              expandedInfo: {
                diet: "Adapted to steppe vegetation (Alfa grass, Mugwort); low water requirement.",
                diseases: "Resistant to heat stress and cutaneous parasitic diseases.",
                breeding: "Nomadic or semi-nomadic system; natural selection for endurance."
              }
            },
            { 
              name: "Sétifienne", 
              region: "Sétif", 
              features: "Blackish, dual purpose.",
              status: "At Risk",
              population: "Heavily crossed with imported breeds.",
              coordinates: [36.1898, 5.4108],
              regionPolygon: [[35.8, 5.0], [36.5, 5.0], [36.5, 5.8], [35.8, 5.8]],
              expandedInfo: {
                diet: "Feeds on crop residues (stubble) and natural pastures in high plateaus.",
                diseases: "Hardy against cold winters but vulnerable to indiscriminate crossbreeding issues.",
                breeding: "Used for draft power and milk; AI poses a threat to genetic purity."
              }
            },
            { 
              name: "Chélifienne", 
              region: "West", 
              features: "Reddish, best milker.",
              status: "Critical",
              population: "Near extinction in pure form.",
              coordinates: [36.1652, 1.3345],
              regionPolygon: [[35.8, 0.8], [36.5, 0.8], [36.5, 1.8], [35.8, 1.8]],
              expandedInfo: {
                diet: "Utilizes fertile agricultural lands in the Chélif valley.",
                diseases: "Formerly resistant to local pests; low population increases genetic disease risk.",
                breeding: "Almost entirely replaced by imported dairy breeds."
              }
            }
          ],
          conservation: {
            title: "Conservation Strategies",
            text: "Pure breeding programs and gene banks must be activated to protect this heritage from genetic erosion."
          }
        }
      },
      compare: {
        title: "Advanced Technical Comparison",
        subtitle: "Veterinary Decision Support Tool",
        labels: {
          milk: "Milk Yield",
          adaptation: "Adaptation",
          cost: "Maintenance Cost",
          fat: "Fat %",
          protein: "Protein %",
          selectBreeds: "Select Breeds to Compare:",
          tableHeader: ["Breed", "Milk", "Fat", "Protein", "Adaptation"]
        },
        data: [
          { id: "holstein", name: "Holstein", milkIndex: 100, fatIndex: 50, adaptationIndex: 20, maintenanceCost: 100 },
          { id: "montbeliarde", name: "Montbéliarde", milkIndex: 75, fatIndex: 70, adaptationIndex: 60, maintenanceCost: 70 },
          { id: "jersey", name: "Jersey", milkIndex: 60, fatIndex: 100, adaptationIndex: 50, maintenanceCost: 60 },
          { id: "atlas", name: "Brown Atlas", milkIndex: 15, fatIndex: 65, adaptationIndex: 100, maintenanceCost: 20 },
          { id: "brahman", name: "Brahman", milkIndex: 20, fatIndex: 60, adaptationIndex: 95, maintenanceCost: 30 }
        ]
      },
      conclusion: {
        title: "Final Assessment",
        quiz: {
          title: "Comprehensive Exam",
          questions: [
            {
              id: "f1",
              text: "For sustainable production in Algerian desert, the best is:",
              explanation: "Semi-intensive systems with crossbreeding is the optimal solution.",
              options: [{ id: "a", text: "Pure Holstein", isCorrect: false }, { id: "b", text: "Controlled crossbreeding", isCorrect: true }]
            }
          ]
        },
        report: {
          title: "Research Competency Report",
          rank: "Scientific Rank:",
          score: "Final Score:",
          message: "Excellent performance indicating deep understanding of concepts."
        }
      }
    }
  },
  fr: {
    direction: 'ltr',
    universityHeader: [
      "République Algérienne Démocratique et Populaire",
      "Ministère de l'Enseignement Supérieur et de la Recherche Scientifique",
      "Université de Laghouat",
      "Département des Sciences Vétérinaires"
    ],
    header: {
      title: "Étude Ethnologique des Races Bovines",
      subtitle: "Recherche Académique : Réalité, Défis et Perspectives",
      badges: ["Master 2026", "Génomique", "Sécurité Alimentaire"],
      glossaryBtn: "Glossaire Scientifique"
    },
    nav: {
      cover: "Accueil",
      intro: "Introduction",
      global: "Races Mondiales",
      algeria: "Races Locales",
      compare: "Comparaison",
      conclusion: "Conclusion"
    },
    glossary: {
      title: "Glossaire Vétérinaire & Ethnologique",
      terms: [
        { term: "Ethnologie", definition: "Branche de la zoologie étudiant l'origine, l'évolution et la répartition des races." },
        { term: "Phénotype", definition: "Ensemble des caractères apparents d'un individu (morphologie, couleur)." },
        { term: "Mammite", definition: "Inflammation de la glande mammaire, souvent d'origine bactérienne, affectant la production." },
        { term: "Dystocie", definition: "Difficulté lors de la mise bas nécessitant une intervention obstétricale." },
        { term: "Zébu", definition: "Bovins Bos indicus caractérisés par une bosse graisseuse et une résistance à la chaleur." },
        { term: "Persillé", definition: "Graisse intramusculaire donnant tendreté et saveur à la viande (critère de qualité)." }
      ]
    },
    sections: {
      cover: {
        title: "Étude Analytique Comparative des Races Bovines en Algérie et dans le Monde",
        preparedBy: "Préparé par les étudiants chercheurs :",
        students: ["Ahmed Ryadh Delliha", "Mouna Lakhdari"],
        supervisor: "Sous la supervision du corps professoral",
        year: "Année Universitaire : 2025 / 2026",
        cta: "Commencer la Présentation"
      },
      intro: {
        title: "Fondements Théoriques de l'Ethnologie",
        subtitle: "Phylogénie et Histoire de la Domestication",
        quiz: {
          title: "Portail des Connaissances",
          questions: [
            {
              id: "i1",
              text: "Quel est le but principal de l'ethnologie animale ?",
              explanation: "L'ethnologie lie la génétique, l'environnement et l'histoire pour comprendre le potentiel de la race.",
              options: [{ id: "a", text: "Morphologie uniquement", isCorrect: false }, { id: "b", text: "Origines, évolution et adaptation", isCorrect: true }]
            },
            {
              id: "i2",
              text: "Les bovins domestiques sont divisés en deux lignées principales :",
              explanation: "Bos taurus (taurins) et Bos indicus (zébus) sont les deux sous-espèces principales.",
              options: [{ id: "a", text: "Viande & Lait", isCorrect: false }, { id: "b", text: "Bos taurus & Bos indicus", isCorrect: true }]
            }
          ]
        },
        content: {
          title: "Domestication et Évolution",
          text: "La domestication des bovins a commencé il y a environ 10 500 ans dans le Croissant Fertile. Ce long chemin a conduit à une différenciation génétique massive basée sur le climat.",
          cards: [
            { title: "Bos taurus", desc: "Zones tempérées. Maturité précoce, haute production.", icon: "T" },
            { title: "Bos indicus", desc: "Zones tropicales (Zébu). Résistance aux parasites.", icon: "I" }
          ]
        }
      },
      global: {
        title: "Atlas des Races Mondiales",
        subtitle: "Caractéristiques Cliniques et de Production",
        quiz: {
          title: "Quiz sur la Production",
          questions: [
            {
              id: "g1",
              text: "Quelle race est le premier producteur mondial de lait ?",
              explanation: "La Holstein Friesian domine mondialement avec >10 000 kg de rendement.",
              options: [{ id: "a", text: "Montbéliarde", isCorrect: false }, { id: "b", text: "Holstein", isCorrect: true }]
            },
            {
              id: "g2",
              text: "Pourquoi l'Angus est-elle préférée pour la viande ?",
              explanation: "L'Angus est connue pour son persillé supérieur (graisse intramusculaire).",
              options: [{ id: "a", text: "Grands os", isCorrect: false }, { id: "b", text: "Qualité de viande et persillé", isCorrect: true }]
            }
          ]
        },
        content: {
          title: "Géants Économiques",
          description: "Étude détaillée des races ayant le plus d'impact économique au niveau mondial.",
          readMore: "Lire la suite",
          showLess: "Masquer",
          breeds: [
            {
              id: "holstein",
              name: "Holstein",
              origin: "Pays-Bas",
              type: "Laitière (Industrielle)",
              image: IMAGES.holstein,
              stats: { milk: "10 000+ kg", fat: "3.7%", protein: "3.2%", weight: "650 kg" },
              clinicalProfile: { risks: "Mammite, Boiterie, Déplacement de la caillette", resistance: "Faible tolérance à la chaleur", reproductive: "Risque de dystocie modéré" },
              description: "La race laitière la plus répandue. Nécessite une gestion vétérinaire intensive et une nutrition riche en énergie.",
              traits: ["Haut Rendement", "Forte Consommation", "Sensible"],
              expandedInfo: {
                diet: "Ration Totale Mixte (RTM) haute énergie, riche en concentrés pour soutenir une production massive (16-18 MJ/kg MS).",
                diseases: "Sujette aux troubles métaboliques comme la fièvre de lait et l'acétonémie en raison du bilan énergétique négatif.",
                breeding: "Dépendance forte à l'insémination artificielle avec taureaux testés génomiquement pour les solides du lait et la conformation du pis."
              }
            },
            {
              id: "montbeliarde",
              name: "Montbéliarde",
              origin: "France",
              type: "Mixte",
              image: IMAGES.montbeliarde,
              stats: { milk: "7 500 kg", fat: "3.9%", protein: "3.45%", weight: "700 kg" },
              clinicalProfile: { risks: "Faible risque de mammite", resistance: "Grande robustesse", reproductive: "Excellente fertilité" },
              description: "Idéale pour la fabrication de fromage grâce aux variants Kappa Caséine B.",
              traits: ["Qualité Fromagère", "Robustesse", "Longévité"],
              expandedInfo: {
                diet: "Flexible ; prospère sur des régimes à base d'herbe/foin et convertit efficacement les fourrages grossiers.",
                diseases: "Relativement résistante aux mammites grâce à une bonne santé du pis ; faible incidence de boiterie.",
                breeding: "Sélection axée sur la qualité des protéines (Kappa Caséine B) pour la production de fromages AOC (ex : Comté)."
              }
            },
            {
              id: "brahman",
              name: "Brahman",
              origin: "USA (Origine indienne)",
              type: "Viande (Tropicale)",
              image: IMAGES.brahman,
              stats: { milk: "Faible", fat: "4.5%", protein: "3.6%", weight: "500-800 kg" },
              clinicalProfile: { risks: "Faible risque de maladie", resistance: "Tiques & Chaleur", reproductive: "Maturité tardive" },
              description: "Bosse distinctive et glandes sudoripares denses en font le maître des climats tropicaux.",
              traits: ["Tolérance Chaleur", "Résistance Parasites", "Viande Maigre"],
              expandedInfo: {
                diet: "Excellente digestion des fourrages tropicaux de faible qualité et riches en fibres.",
                diseases: "Peau épaisse et mobile repoussant les insectes ; très résistante aux trypanosomoses et maladies à tiques.",
                breeding: "Largement utilisée en croisement (F1) pour ajouter de la vigueur hybride aux races européennes en climats chauds."
              }
            },
            {
              id: "jersey",
              name: "Jersey",
              origin: "Île de Jersey (RU)",
              type: "Laitière (Taux élevés)",
              image: IMAGES.jersey,
              stats: { milk: "6 000 kg", fat: "5.4%", protein: "3.9%", weight: "450 kg" },
              clinicalProfile: { risks: "Fièvre de lait (Hypocalcémie)", resistance: "Tolérance à la chaleur, Sabots durs", reproductive: "Facilité de vêlage" },
              description: "La plus petite race laitière avec la plus haute efficacité de conversion alimentaire.",
              traits: ["Taux Butyreux", "Vêlage Facile", "Efficacité"],
              expandedInfo: {
                diet: "Nécessite une alimentation dense en énergie due à la petite capacité du rumen ; sensible aux carences en calcium.",
                diseases: "Plus susceptible à la fièvre de lait post-partum en raison de la forte production de calcium dans le colostrum.",
                breeding: "Très prisée pour l'insémination des génisses grâce à la petite taille des veaux."
              }
            },
            {
              id: "angus",
              name: "Angus",
              origin: "Écosse",
              type: "Bouchère (Premium)",
              image: IMAGES.angus,
              stats: { milk: "Faible", fat: "Élevé (Persillé)", protein: "Musculaire", weight: "800-1000 kg" },
              clinicalProfile: { risks: "Défauts génétiques (AM)", resistance: "Rustique au froid, Sans cornes", reproductive: "Maturité précoce" },
              description: "La race bovine la plus célèbre au monde pour la qualité de sa viande persillée.",
              traits: ["Persillé", "Sans Cornes", "Précoce"],
              expandedInfo: {
                diet: "Répond bien à la finition au grain pour un persillé maximal mais performe excellemment à l'herbe.",
                diseases: "Porteurs de défauts génétiques récessifs comme l'Arthrogrypose Multiple (AM) à surveiller.",
                breeding: "Le standard d'or pour les programmes de qualité de viande ; largement utilisée comme taureau terminal."
              }
            },
            {
              id: "simmental",
              name: "Simmental",
              origin: "Suisse",
              type: "Mixte (Lait & Viande)",
              image: IMAGES.simmental,
              stats: { milk: "7 000 kg", fat: "4.0%", protein: "3.5%", weight: "700-900 kg" },
              clinicalProfile: { risks: "Dystocie (veaux lourds)", resistance: "Adaptation alpine", reproductive: "Bonne fertilité, Jumeaux fréquents" },
              description: "Une race puissante offrant un équilibre entre croissance rapide et bonne production laitière.",
              traits: ["Croissance Rapide", "Bonne Laitière", "Robuste"],
              expandedInfo: {
                diet: "Grande capacité d'ingestion ; nécessite des fourrages abondants pour maintenir son grand gabarit.",
                diseases: "Généralement saine du pis, mais le poids élevé peut causer des problèmes de sabots sur béton.",
                breeding: "Populaire en Europe pour produire d'excellents veaux d'engraissement tout en maintenant un revenu laitier."
              }
            }
          ]
        }
      },
      algeria: {
        title: "Races Indigènes Algériennes",
        subtitle: "Diversité Génétique Menacée",
        quiz: {
          title: "Portail du Contexte Local",
          questions: [
            {
              id: "dz1",
              text: "La principale race indigène en Algérie est :",
              explanation: "La Brune de l'Atlas est la race ancestrale de l'Afrique du Nord.",
              options: [{ id: "a", text: "Tachetée de l'Est", isCorrect: false }, { id: "b", text: "Brune de l'Atlas", isCorrect: true }]
            }
          ]
        },
        content: {
          title: "La Brune de l'Atlas : Patrimoine Biologique",
          description: "La 'Brune de l'Atlas' est un réservoir génétique rare, caractérisé par une résilience exceptionnelle aux conditions difficiles.",
          heroExpandedText: "Cette race s'est adaptée sur des milliers d'années à l'environnement nord-africain. Elle possède une efficacité unique de conversion des végétaux grossiers et une résistance naturelle aux maladies du sang transmises par les tiques (Babésiose & Theilériose). Cependant, sa faible production laitière (env. 1000L) a conduit à des croisements anarchiques.",
          readMore: "Détails Environnementaux",
          showLess: "Masquer",
          subBreedsTitle: "Écotypes (Sous-races)",
          subBreeds: [
            { 
              name: "Guelmoise", 
              region: "Montagnes de l'Est", 
              features: "Petite, grise, grimpeuse.",
              status: "En Danger",
              population: "Poches isolées à Guelma et Souk Ahras.",
              coordinates: [36.4621, 7.4261],
              regionPolygon: [[36.2, 7.2], [36.8, 7.2], [36.8, 8.0], [36.2, 8.0]],
              expandedInfo: {
                diet: "Dépend des broussailles de montagne et du sous-bois ; résiste à la pénurie alimentaire.",
                diseases: "Haute résistance à la Babésiose transmise par les tiques de montagne.",
                breeding: "Élevage extensif traditionnel ; vêlage extrêmement facile sans assistance."
              }
            },
            { 
              name: "Cheurfa", 
              region: "Steppe", 
              features: "Claire, résistante à la sécheresse.",
              status: "Vulnérable",
              population: "En déclin dû à la désertification.",
              coordinates: [34.6728, 3.2630],
              regionPolygon: [[34.0, 2.5], [35.2, 2.5], [35.2, 4.0], [34.0, 4.0]],
              expandedInfo: {
                diet: "Adaptée à la végétation steppique (Alfa, Armoise) ; faible besoin en eau.",
                diseases: "Résistante au stress thermique et aux maladies parasitaires cutanées.",
                breeding: "Système nomade ou semi-nomade ; sélection naturelle pour l'endurance."
              }
            },
            { 
              name: "Sétifienne", 
              region: "Sétif", 
              features: "Noirâtre, mixte.",
              status: "À Risque",
              population: "Fortement croisée avec races importées.",
              coordinates: [36.1898, 5.4108],
              regionPolygon: [[35.8, 5.0], [36.5, 5.0], [36.5, 5.8], [35.8, 5.8]],
              expandedInfo: {
                diet: "Se nourrit de résidus de récolte (chaumes) et pâturages naturels des hauts plateaux.",
                diseases: "Rustique contre le froid hivernal mais vulnérable aux problèmes de croisement anarchique.",
                breeding: "Utilisée pour le trait et le lait ; l'IA menace sa pureté génétique."
              }
            },
            { 
              name: "Chélifienne", 
              region: "Ouest", 
              features: "Rougeâtre, meilleure laitière.",
              status: "Critique",
              population: "Quasi-éteinte à l'état pur.",
              coordinates: [36.1652, 1.3345],
              regionPolygon: [[35.8, 0.8], [36.5, 0.8], [36.5, 1.8], [35.8, 1.8]],
              expandedInfo: {
                diet: "Valorise les terres agricoles fertiles de la vallée du Chélif.",
                diseases: "Autrefois résistante aux pestes locales ; la faible population augmente le risque de maladies génétiques.",
                breeding: "Presque entièrement remplacée par des races laitières importées."
              }
            }
          ],
          conservation: {
            title: "Stratégies de Conservation",
            text: "Des programmes de sélection pure et des banques de gènes doivent être activés pour protéger ce patrimoine de l'érosion génétique."
          }
        }
      },
      compare: {
        title: "Comparaison Technique Avancée",
        subtitle: "Outil d'Aide à la Décision Vétérinaire",
        labels: {
          milk: "Rendement Laitier",
          adaptation: "Adaptation",
          cost: "Coût d'Entretien",
          fat: "Gras",
          protein: "Protéine",
          selectBreeds: "Sélectionnez les races à comparer :",
          tableHeader: ["Race", "Lait", "Gras", "Protéine", "Adaptation"]
        },
        data: [
          { id: "holstein", name: "Holstein", milkIndex: 100, fatIndex: 50, adaptationIndex: 20, maintenanceCost: 100 },
          { id: "montbeliarde", name: "Montbéliarde", milkIndex: 75, fatIndex: 70, adaptationIndex: 60, maintenanceCost: 70 },
          { id: "jersey", name: "Jersey", milkIndex: 60, fatIndex: 100, adaptationIndex: 50, maintenanceCost: 60 },
          { id: "atlas", name: "Brune de l'Atlas", milkIndex: 15, fatIndex: 65, adaptationIndex: 100, maintenanceCost: 20 },
          { id: "brahman", name: "Brahman", milkIndex: 20, fatIndex: 60, adaptationIndex: 95, maintenanceCost: 30 }
        ]
      },
      conclusion: {
        title: "Évaluation Finale",
        quiz: {
          title: "Examen Complet",
          questions: [
            {
              id: "f1",
              text: "Pour une production durable dans le désert algérien, le mieux est :",
              explanation: "Les systèmes semi-intensifs avec croisement contrôlé sont la solution optimale.",
              options: [{ id: "a", text: "Holstein pure", isCorrect: false }, { id: "b", text: "Croisement contrôlé", isCorrect: true }]
            }
          ]
        },
        report: {
          title: "Rapport de Compétence de Recherche",
          rank: "Rang Scientifique :",
          score: "Score Final :",
          message: "Excellente performance indiquant une compréhension profonde des concepts."
        }
      }
    }
  }
};
