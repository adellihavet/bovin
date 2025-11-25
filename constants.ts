import { TranslationContent } from './types';

export const IMAGES = {
  holstein: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Cow_female_black_white.jpg/640px-Cow_female_black_white.jpg",
  montbeliarde: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/La_ferme_en_ville_2009_-_Montbeliarde.JPG/960px-La_ferme_en_ville_2009_-_Montbeliarde.JPG",
  angus: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Angus_cattle_10.jpg/640px-Angus_cattle_10.jpg",
  brahman: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Brahman_%28EMAPA%29_110307_REFON.jpg/960px-Brahman_%28EMAPA%29_110307_REFON.jpg",
  atlas: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vatche_Brune_Atlasse_emey_veye.jpg/640px-Vatche_Brune_Atlasse_emey_veye.jpg",
  jersey: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Jersey_cow_J4.jpg/640px-Jersey_cow_J4.jpg",
  simmental: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg/640px-Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg",
  charolais: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Taureau_charolais.jpg",
  limousin: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Vache-de-race-limousine-en-correze-2.jpg/960px-Vache-de-race-limousine-en-correze-2.jpg",
  aubrac: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Vache_Aubrac.jpg/960px-Vache_Aubrac.jpg",
  normande: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Vachesnormandes.jpg/960px-Vachesnormandes.jpg",
  brown_swiss: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Braunvieh06.JPG/960px-Braunvieh06.JPG",
  tarentaise: "https://americantarentaise.org/wp-content/uploads/2025/04/Bull-Ad-3.png"
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
          labels: {
            color: "اللون",
            height: "الارتفاع",
            weight: "الوزن",
            origin: "المنشأ"
          },
          breeds: [
            {
              id: "holstein",
              name: "هولشتاين (Holstein)",
              origin: "هولندا",
              type: "حلوب (صناعي)",
              color: "أسود وأبيض / أحمر",
              height: "145 سم",
              image: IMAGES.holstein,
              stats: { milk: "10,000+ كغ", fat: "3.7%", protein: "3.2%", weight: "650 كغ" },
              clinicalProfile: { risks: "التهاب الضرع، العرج، انزياح المنفحة", resistance: "ضعيفة للمناخ الحار", reproductive: "صعوبة ولادة متوسطة" },
              description: "السلالة الأكثر انتشاراً عالمياً. تتطلب إدارة بيطرية دقيقة جداً وتغذية مركزة.",
              traits: ["إنتاج غزير", "تطلب غذائي عالي", "حساسة بيئياً"],
              expandedInfo: {
                diet: "نظام غذائي عالي الطاقة (TMR) يعتمد على السيلاج والمركزات لتلبية متطلبات الإنتاج العالي (16-18 MJ/kg).",
                diseases: "عرضة لأمراض التمثيل الغذائي (حمى الحليب، الكيتوزية) بسبب الإنتاج العالي.",
                breeding: "تلقيح اصطناعي مكثف باستخدام ثيران مختبرة جينياً لتحسين إنتاج الحليب وشكل الضرع."
              },
              hotspots: [
                { x: 50, y: 75, label: "الضرع", text: "ضرع ضخم وعروق لبنية بارزة لدعم الإنتاج الغزير." },
                { x: 20, y: 40, label: "الجسم", text: "هيكل زاوي (مثلثي) يشير إلى تحويل العلف إلى حليب وليس لحم." }
              ]
            },
            {
              id: "montbeliarde",
              name: "مونبيليارد (Montbéliarde)",
              origin: "فرنسا",
              type: "مختلطة",
              color: "أحمر مرقط (Pie Rouge)",
              height: "140 سم",
              image: IMAGES.montbeliarde,
              stats: { milk: "7,500 كغ", fat: "3.9%", protein: "3.45%", weight: "700 كغ" },
              clinicalProfile: { risks: "مقاومة جيدة للتهاب الضرع", resistance: "صلابة بدنية عالية", reproductive: "خصوبة ممتازة" },
              description: "مثالية لصناعة الأجبان بفضل بروتين الكازين بيتا.",
              traits: ["جبنة ممتازة", "صلابة بدنية", "طول عمر"],
              expandedInfo: {
                diet: "مرنة؛ تزدهر على المراعي العشبية والقش، ويمكنها تحويل الأعلاف الخشنة بكفاءة.",
                diseases: "مقاومة نسبياً لالتهاب الضرع بفضل صحة الضرع الجيدة، أقل عرضة للعرج.",
                breeding: "تربية تركز على جودة البروتين (Kappa Casein B) لإنتاج الأجبان الفرنسية الراقية (Comté)."
              },
              hotspots: [
                { x: 50, y: 50, label: "الصلابة", text: "بنية عضلية قوية تجعلها مناسبة للإنتاج المختلط." },
                { x: 30, y: 30, label: "الرأس", text: "رأس أبيض مميز (Tête Blanche) وهو علامة السلالة." }
              ]
            },
            {
              id: "brahman",
              name: "براهمان (Brahman)",
              origin: "الولايات المتحدة (أصل هندي)",
              type: "لاحم (مناخ حار)",
              color: "رمادي فاتح / أحمر",
              height: "145 سم",
              image: IMAGES.brahman,
              stats: { milk: "منخفض", fat: "4.5%", protein: "3.6%", weight: "500-800 كغ" },
              clinicalProfile: { risks: "قليلة الأمراض", resistance: "عالية جداً للقراد والحرارة", reproductive: "نضج متأخر قليلاً" },
              description: "سنام مميز وغدد عرقية كثيفة تجعلها سيدة المناطق الحارة.",
              traits: ["مقاومة الحرارة", "مقاومة الطفيليات", "لحم قليل الدهون"],
              expandedInfo: {
                diet: "قادرة على هضم الأعلاف الاستوائية منخفضة الجودة والألياف العالية بكفاءة.",
                diseases: "جلد سميك ومتحرك يمنع لدغات الحشرات، ومقاومة طبيعية للتريبانوسوميات والقراد.",
                breeding: "تستخدم بكثرة في برامج التهجين (F1) لإضافة الصلابة الهجينة للسلالات الأوروبية في المناطق الحارة."
              },
              hotspots: [
                { x: 30, y: 20, label: "السنام", text: "كتلة عضلية ودهنية تساعد في تخزين الطاقة وتنظيم الحرارة." },
                { x: 45, y: 60, label: "الجلد (اللبب)", text: "جلد مترهل يزيد مساحة السطح لتبريد الجسم بفعالية." }
              ]
            },
            {
              id: "jersey",
              name: "جيرسي (Jersey)",
              origin: "جزيرة جيرسي (المملكة المتحدة)",
              type: "حلوب (دسم عالي)",
              color: "بني فاتح (Fawn)",
              height: "125 سم",
              image: IMAGES.jersey,
              stats: { milk: "6,000 كغ", fat: "5.4%", protein: "3.9%", weight: "450 كغ" },
              clinicalProfile: { risks: "حمى الحليب (Hypocalcemia)", resistance: "تحمل جيد للحرارة، حوافر صلبة", reproductive: "سهولة ولادة ممتازة" },
              description: "أصغر السلالات الحلوب حجماً ولكنها الأكثر كفاءة في تحويل العلف إلى دسم.",
              traits: ["دسم عالي", "سهولة ولادة", "كفاءة تحويل"],
              expandedInfo: {
                diet: "تتطلب علفاً عالي الكثافة الطاقوية نظراً لصغر حجم الكرش، حساسة لنقص الكالسيوم.",
                diseases: "أكثر عرضة لحمى الحليب بعد الولادة مباشرة بسبب ارتفاع تركيز الكالسيوم في اللبأ.",
                breeding: "مفضلة جداً لتلقيح العجلات (Bakers) نظراً لصغر حجم المواليد وسهولة الولادة."
              },
              hotspots: [
                { x: 50, y: 50, label: "الحجم", text: "حجم صغير يقلل تكلفة الصيانة ويزيد كفاءة التحويل." },
                { x: 30, y: 30, label: "العيون", text: "عيون كبيرة وبارزة تميز السلالة." }
              ]
            },
            {
              id: "angus",
              name: "أنجوس (Aberdeen Angus)",
              origin: "اسكتلندا",
              type: "لاحم (فاخر)",
              color: "أسود / أحمر",
              height: "135 سم",
              image: IMAGES.angus,
              stats: { milk: "منخفض", fat: "عالٍ (مرخم)", protein: "جودة عضلية", weight: "800-1000 كغ" },
              clinicalProfile: { risks: "مشاكل وراثية نادرة", resistance: "مقاومة للبرد، بدون قرون", reproductive: "سهولة ولادة ونضج مبكر" },
              description: "السلالة الأولى عالمياً لإنتاج اللحم الفاخر (Premium Beef) بفضل خاصية الترخيم.",
              traits: ["جودة اللحم", "بدون قرون", "نضج مبكر"],
              expandedInfo: {
                diet: "تستجيب جيداً للتسمين بالحبوب (Grain-finished) للحصول على درجة ترخيم عالية.",
                diseases: "يجب مراقبة الأمراض الوراثية المتنحية (مثل AM).",
                breeding: "الخيار الأول في برامج التسمين لإنتاج لحوم الستيك عالية الجودة."
              },
              hotspots: [
                { x: 50, y: 50, label: "الجسم", text: "جسم اسطواني ممتلئ باللحم." },
                { x: 80, y: 50, label: "الأرداف", text: "عضلات خلفية ممتلئة تعطي قطع لحم ممتازة." }
              ]
            },
            {
              id: "simmental",
              name: "سيمينتال (Simmental)",
              origin: "سويسرا",
              type: "مختلطة (لحم وحليب)",
              color: "أبيض قشدي وأحمر",
              height: "145 سم",
              image: IMAGES.simmental,
              stats: { milk: "7,000 كغ", fat: "4.0%", protein: "3.5%", weight: "700-900 كغ" },
              clinicalProfile: { risks: "عسر ولادة (عجول ضخمة)", resistance: "تأقلم جبلي ممتاز", reproductive: "خصوبة جيدة، توائم شائعة" },
              description: "سلالة قوية البنية، تجمع بين إنتاج الحليب الجيد والنمو العضلي السريع للعجول.",
              traits: ["نمو سريع", "حليب دسم", "بنية قوية"],
              expandedInfo: {
                diet: "تتطلب كميات كبيرة من العلف (High Intake Capacity) للحفاظ على حجمها وإنتاجها.",
                diseases: "معدلات التهاب ضرع منخفضة، لكن يجب الحذر من مشاكل الأقدام في الأرضيات الصلبة.",
                breeding: "شائعة جداً في أوروبا لإنتاج عجول تسمين ممتازة مع الحفاظ على دخل من الحليب."
              },
              hotspots: [
                { x: 50, y: 50, label: "الهيكل", text: "هيكل عظمي قوي وعضلات بارزة." },
                { x: 50, y: 70, label: "الإنتاج", text: "توازن جيد بين الضرع واللحم." }
              ]
            },
            {
              id: "charolais",
              name: "شاروليه (Charolais)",
              origin: "فرنسا",
              type: "لاحم (مصرحة للاستيراد)",
              color: "أبيض كريمي",
              height: "135-150 سم",
              image: IMAGES.charolais,
              stats: { milk: "للعجول فقط", fat: "منخفض الدهون", protein: "عالي جداً", weight: "1000-1400 كغ" },
              clinicalProfile: { risks: "عسر ولادة مرتفع", resistance: "تحمل جيد للطقس", reproductive: "خصوبة متوسطة" },
              description: "عملاقة اللحوم الفرنسية. تتميز بنمو عضلي استثنائي وسرعة تسمين عالية.",
              traits: ["نمو عضلي هائل", "لحم قليل الدهون", "وزن ثقيل"],
              expandedInfo: {
                diet: "شرهة جداً؛ تحتاج مراعي غنية أو أعلاف مركزة لتحقيق إمكانات النمو.",
                diseases: "المشكلة الرئيسية هي عسر الولادة (Dystocia) بسبب ضخامة الأجنة.",
                breeding: "غالباً ما تستخدم في التهجين لزيادة وزن عجول الفطام."
              },
              hotspots: [
                { x: 50, y: 50, label: "العضلات", text: "تضخم عضلي وراثي (Double Muscling)." },
                { x: 80, y: 50, label: "الفخذ", text: "فخذ ضخم ومستدير." }
              ]
            },
            {
              id: "limousin",
              name: "ليموزين (Limousin)",
              origin: "فرنسا",
              type: "لاحم (مصرحة للاستيراد)",
              color: "أحمر ذهبي",
              height: "135-145 سم",
              image: IMAGES.limousin,
              stats: { milk: "متوسط", fat: "منخفض", protein: "عالي الجودة", weight: "900-1100 كغ" },
              clinicalProfile: { risks: "عصبية المزاج", resistance: "مناعة قوية", reproductive: "سهولة ولادة جيدة" },
              description: "توازن مثالي بين النمو العضلي وسهولة الولادة. لحمها ذو ألياف دقيقة وممتازة.",
              traits: ["سهولة ولادة", "مردود ذبيحة عالٍ", "جودة ألياف"],
              expandedInfo: {
                diet: "كفاءة تحويل غذائي ممتازة حتى مع الأعلاف المتوسطة.",
                diseases: "صحة عامة جيدة، لكن يجب الحذر من مزاجها العصبي أثناء التعامل البيطري.",
                breeding: "مفضلة لإنتاج لحم العجل (Veal) واللحوم الحمراء الخالية من الدهون."
              },
              hotspots: [
                { x: 50, y: 50, label: "الظهر", text: "خط ظهر مستقيم وعريض." },
                { x: 30, y: 30, label: "اللون", text: "هالات فاتحة حول العينين والخطم." }
              ]
            },
            {
              id: "aubrac",
              name: "أوبراك (Aubrac)",
              origin: "فرنسا",
              type: "لاحم (مصرحة للاستيراد)",
              color: "بني (قمحي) مع كحل",
              height: "130 سم",
              image: IMAGES.aubrac,
              stats: { milk: "جيد للأمومة", fat: "متوسط", protein: "جيد", weight: "600-800 كغ" },
              clinicalProfile: { risks: "منخفضة", resistance: "عالية جداً (ريفية)", reproductive: "خصوبة وأمومة ممتازة" },
              description: "سلالة ريفية (Rustique) بامتياز. صلبة، وتتحمل الظروف القاسية مع قدرات أمومة رائعة.",
              traits: ["ريفية", "سهولة ولادة", "أمومة"],
              expandedInfo: {
                diet: "تثمن المراعي الفقيرة والنباتات الخشنة بكفاءة عالية.",
                diseases: "مقاومة استثنائية للأمراض ومشاكل الأقدام.",
                breeding: "تستخدم كخط أمومي لإنتاج عجول هجينة قوية."
              },
              hotspots: [
                { x: 30, y: 30, label: "العيون", text: "عيون مكحلة بالسواد (Maquillée)." },
                { x: 50, y: 80, label: "الأقدام", text: "أظلاف سوداء صلبة جداً." }
              ]
            },
            {
              id: "normande",
              name: "نورماند (Normande)",
              origin: "فرنسا",
              type: "مختلطة",
              color: "ثلاثية الألوان (أبيض، بني، أسود)",
              height: "140 سم",
              image: IMAGES.normande,
              stats: { milk: "6,500 كغ", fat: "4.2%", protein: "3.6%", weight: "700-800 كغ" },
              clinicalProfile: { risks: "متوسطة", resistance: "جيدة للمناخ الرطب", reproductive: "خصوبة عالية" },
              description: "تشتهر بحليبها الغني جداً بالبروتين (الجبن) ولحمها الرخامي ذي النكهة المميزة.",
              traits: ["حليب دسم", "لحم رخامي", "تأقلم"],
              expandedInfo: {
                diet: "تستفيد جيداً من المراعي الخضراء الغنية.",
                diseases: "مقاومة جيدة لأشعة الشمس بفضل البقع حول العينين (النظارات).",
                breeding: "الخيار الأول لأجبان الكاممبير."
              },
              hotspots: [
                { x: 30, y: 30, label: "العيون", text: "بقع 'النظارات' تحمي من السرطان وأشعة الشمس." },
                { x: 50, y: 50, label: "اللون", text: "نمط لوني مميز (مبقع)." }
              ]
            },
            {
              id: "brown_swiss",
              name: "برون دي آلب (Brune des Alpes)",
              origin: "سويسرا",
              type: "مختلطة (ميل للحليب)",
              color: "بني رمادي موحد",
              height: "140-150 سم",
              image: IMAGES.brown_swiss,
              stats: { milk: "8,000 كغ", fat: "4.0%", protein: "3.5%", weight: "650-700 كغ" },
              clinicalProfile: { risks: "منخفضة", resistance: "تحمل حرارة ممتاز", reproductive: "طول عمر إنتاجي" },
              description: "ثاني أكبر سلالة حليب عالمياً. تتميز بطول العمر الإنتاجي وتحمل الظروف المناخية المتنوعة.",
              traits: ["طول عمر", "بروتين عال", "تحمل حرارة"],
              expandedInfo: {
                diet: "كفاءة تحويل ممتازة للأعلاف الليفية.",
                diseases: "أقدام قوية جداً ومقاومة للعرج.",
                breeding: "تستخدم لتحسين نسبة البروتين وصلابة السلالات الأخرى."
              },
              hotspots: [
                { x: 30, y: 30, label: "الأذنين", text: "داخل الأذنين فاتح اللون ومكسو بالشعر." },
                { x: 50, y: 80, label: "الأقدام", text: "أقدام سوداء قوية جداً." }
              ]
            },
            {
              id: "tarentaise",
              name: "تارانتيز (Tarentaise)",
              origin: "فرنسا (جبال الألب)",
              type: "مختلطة",
              color: "بني محمر (أجوري)",
              height: "130 سم",
              image: IMAGES.tarentaise,
              stats: { milk: "5,000 كغ", fat: "3.8%", protein: "3.4%", weight: "550 كغ" },
              clinicalProfile: { risks: "منخفضة", resistance: "عالية جداً (جبلية)", reproductive: "خصوبة عالية" },
              description: "سلالة جبلية صلبة جداً. تتسلق المنحدرات الوعرة وتنتج حليباً خاصاً للأجبان.",
              traits: ["جبلية", "حليب أجبان", "صلابة"],
              expandedInfo: {
                diet: "تقتات على مراعي المرتفعات الفقيرة.",
                diseases: "مقاومة استثنائية لأمراض الجهاز التنفسي والظروف المناخية القاسية.",
                breeding: "تستخدم في المناطق الجبلية الوعرة."
              },
              hotspots: [
                { x: 30, y: 30, label: "الرأس", text: "رأس معبر وعيون داكنة." },
                { x: 50, y: 50, label: "الجسم", text: "جسم مدمج وقوي للعضلات." }
              ]
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
          labels: {
            color: "اللون",
            height: "الارتفاع",
            weight: "الوزن"
          },
          subBreeds: [
            { 
              name: "الڤالمية (Guelmoise)", 
              region: "الشرق الجبلي", 
              features: "صغيرة، رمادية، متسلقة للجبال.",
              color: "رمادي داكن",
              height: "115 cm",
              weight: "250-300 كغ",
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
              color: "أبيض / رملي",
              height: "120 سم",
              weight: "300 كغ",
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
              color: "أسود / بني داكن",
              height: "125 سم",
              weight: "350 كغ",
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
              color: "بني محمر / أصفر",
              height: "128 سم",
              weight: "380 كغ",
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
          { id: "brahman", name: "براهمان", milkIndex: 20, fatIndex: 60, adaptationIndex: 95, maintenanceCost: 30 },
          { id: "simmental", name: "سيمينتال", milkIndex: 70, fatIndex: 60, adaptationIndex: 75, maintenanceCost: 80 },
          { id: "charolais", name: "شاروليه", milkIndex: 10, fatIndex: 40, adaptationIndex: 65, maintenanceCost: 90 },
          { id: "limousin", name: "ليموزين", milkIndex: 15, fatIndex: 30, adaptationIndex: 70, maintenanceCost: 65 },
          { id: "aubrac", name: "أوبراك", milkIndex: 20, fatIndex: 45, adaptationIndex: 90, maintenanceCost: 40 },
          { id: "brown_swiss", name: "برون دي آلب", milkIndex: 80, fatIndex: 60, adaptationIndex: 85, maintenanceCost: 75 }
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
          labels: {
            color: "Color",
            height: "Height",
            weight: "Weight",
            origin: "Origin"
          },
          breeds: [
            {
              id: "holstein",
              name: "Holstein",
              origin: "Netherlands",
              type: "Dairy (Industrial)",
              color: "Black & White / Red",
              height: "145 cm",
              image: IMAGES.holstein,
              stats: { milk: "10,000+ kg", fat: "3.7%", protein: "3.2%", weight: "650 kg" },
              clinicalProfile: { risks: "Mastitis, Lameness, LDA", resistance: "Low heat tolerance", reproductive: "Moderate dystocia risk" },
              description: "The most widespread dairy breed. Requires intensive veterinary management and high-energy nutrition.",
              traits: ["High Yield", "High Intake", "Sensitive"],
              expandedInfo: {
                diet: "High-energy Total Mixed Ration (TMR) rich in concentrates to support massive milk production (16-18 MJ/kg DM).",
                diseases: "Prone to metabolic disorders like milk fever and ketosis due to negative energy balance.",
                breeding: "Heavy reliance on Artificial Insemination with genomically tested sires for milk solids and udder conformation."
              },
              hotspots: [
                { x: 50, y: 75, label: "Udder", text: "Huge udder with prominent veins to support massive production." },
                { x: 20, y: 40, label: "Body", text: "Angular, triangular body shape indicating feed conversion to milk." }
              ]
            },
            {
              id: "montbeliarde",
              name: "Montbéliarde",
              origin: "France",
              type: "Dual Purpose",
              color: "Red Pied",
              height: "140 cm",
              image: IMAGES.montbeliarde,
              stats: { milk: "7,500 kg", fat: "3.9%", protein: "3.45%", weight: "700 kg" },
              clinicalProfile: { risks: "Low mastitis risk", resistance: "High robustness", reproductive: "Excellent fertility" },
              description: "Ideal for cheesemaking due to Kappa Casein B variants.",
              traits: ["Cheese Quality", "Robustness", "Longevity"],
              expandedInfo: {
                diet: "Flexible; thrives on grass/hay-based diets and can convert roughage efficiently.",
                diseases: "Relatively resistant to mastitis due to good udder health; lower incidence of lameness.",
                breeding: "Selection focuses on protein quality (Kappa Casein B) for AOC cheese production (e.g., Comté)."
              },
              hotspots: [
                { x: 50, y: 50, label: "Strength", text: "Strong muscular build suitable for dual purpose." },
                { x: 30, y: 30, label: "Head", text: "Distinctive white head (Tête Blanche)." }
              ]
            },
            {
              id: "brahman",
              name: "Brahman",
              origin: "USA (Indian origin)",
              type: "Beef (Tropical)",
              color: "Light Grey / Red",
              height: "145 cm",
              image: IMAGES.brahman,
              stats: { milk: "Low", fat: "4.5%", protein: "3.6%", weight: "500-800 kg" },
              clinicalProfile: { risks: "Low disease risk", resistance: "Ticks & Heat", reproductive: "Late maturity" },
              description: "Distinctive hump and sweat glands make it the master of tropical climates.",
              traits: ["Heat Tolerance", "Parasite Resistance", "Lean Meat"],
              expandedInfo: {
                diet: "Excellent digester of low-quality, high-fiber tropical forages.",
                diseases: "Thick, mobile skin repels insects; highly resistant to trypanosomiasis and tick-borne diseases.",
                breeding: "Widely used in crossbreeding (F1) to add hybrid vigor and hardiness to European breeds in hot climates."
              },
              hotspots: [
                { x: 30, y: 20, label: "Hump", text: "Muscle and fat hump for energy storage and thermoregulation." },
                { x: 45, y: 60, label: "Dewlap", text: "Loose skin to increase surface area for cooling." }
              ]
            },
            {
              id: "jersey",
              name: "Jersey",
              origin: "Jersey Island (UK)",
              type: "Dairy (High Solids)",
              color: "Fawn",
              height: "125 cm",
              image: IMAGES.jersey,
              stats: { milk: "6,000 kg", fat: "5.4%", protein: "3.9%", weight: "450 kg" },
              clinicalProfile: { risks: "Hypocalcemia (Milk Fever)", resistance: "Heat tolerant, strong hooves", reproductive: "Excellent calving ease" },
              description: "Smallest dairy breed with the highest feed conversion efficiency for milk solids.",
              traits: ["High Butterfat", "Calving Ease", "Efficiency"],
              expandedInfo: {
                diet: "Requires high energy density feed due to smaller rumen capacity; prone to calcium deficiency.",
                diseases: "Susceptible to Milk Fever immediately post-calving due to high calcium output in colostrum.",
                breeding: "Highly preferred for breeding heifers due to small calf size."
              },
              hotspots: [
                { x: 50, y: 50, label: "Size", text: "Small size reduces maintenance costs." },
                { x: 30, y: 30, label: "Eyes", text: "Large, prominent eyes are characteristic." }
              ]
            },
            {
              id: "angus",
              name: "Angus",
              origin: "Scotland",
              type: "Beef (Premium)",
              color: "Black / Red",
              height: "135 cm",
              image: IMAGES.angus,
              stats: { milk: "Low", fat: "High (Marbled)", protein: "Muscular", weight: "800-1000 kg" },
              clinicalProfile: { risks: "Genetic defects (AM)", resistance: "Cold hardy, Polled", reproductive: "Early maturity" },
              description: "The world's leading beef breed, famed for its marbling and maternal traits.",
              traits: ["Marbling", "Polled", "Early Maturing"],
              expandedInfo: {
                diet: "Responds well to grain finishing for maximum marbling but performs excellently on grass.",
                diseases: "Carriers of recessive genetic defects like Arthrogryposis Multiplex (AM) must be screened.",
                breeding: "The gold standard for beef quality programs; widely used terminal sire."
              },
              hotspots: [
                { x: 50, y: 50, label: "Body", text: "Cylindrical, meat-filled body shape." },
                { x: 80, y: 50, label: "Rump", text: "Full hindquarters providing excellent meat cuts." }
              ]
            },
            {
              id: "simmental",
              name: "Simmental",
              origin: "Switzerland",
              type: "Dual Purpose",
              color: "Straw & Red",
              height: "145 cm",
              image: IMAGES.simmental,
              stats: { milk: "7,000 kg", fat: "4.0%", protein: "3.5%", weight: "700-900 kg" },
              clinicalProfile: { risks: "Dystocia (heavy calves)", resistance: "Alpine adaptation", reproductive: "Good fertility, Twinning" },
              description: "Powerful build offering a balance of rapid growth rates and respectable milk yield.",
              traits: ["Fast Growth", "Heavy Milker", "Robust"],
              expandedInfo: {
                diet: "High intake capacity; requires substantial forage to maintain large body frame.",
                diseases: "Generally healthy udders, but heavy weight can cause hoof issues on concrete.",
                breeding: "Popular in Europe for producing excellent feeder calves while maintaining milk income."
              },
              hotspots: [
                { x: 50, y: 50, label: "Frame", text: "Heavy skeletal frame and muscularity." },
                { x: 50, y: 70, label: "Udder", text: "Good balance of udder health and beef capacity." }
              ]
            },
            {
              id: "charolais",
              name: "Charolais",
              origin: "France",
              type: "Beef (Authorized)",
              color: "Cream White",
              height: "135-150 cm",
              image: IMAGES.charolais,
              stats: { milk: "Nurse only", fat: "Lean", protein: "Very High", weight: "1000-1400 kg" },
              clinicalProfile: { risks: "High Dystocia", resistance: "Good weather tolerance", reproductive: "Moderate fertility" },
              description: "French beef giant. Known for exceptional muscle growth and high finishing speeds.",
              traits: ["Huge Muscle", "Lean Meat", "Heavy Weight"],
              expandedInfo: {
                diet: "Voracious eater; requires rich pastures or concentrates to meet growth potential.",
                diseases: "Main issue is Dystocia (difficult birth) due to large calf size.",
                breeding: "Often used in terminal crossing to increase weaning weight."
              },
              hotspots: [
                { x: 50, y: 50, label: "Muscling", text: "Double muscling gene often present." },
                { x: 80, y: 50, label: "Thigh", text: "Massive round thigh." }
              ]
            },
            {
              id: "limousin",
              name: "Limousin",
              origin: "France",
              type: "Beef (Authorized)",
              color: "Golden Red",
              height: "135-145 cm",
              image: IMAGES.limousin,
              stats: { milk: "Moderate", fat: "Low", protein: "High Quality", weight: "900-1100 kg" },
              clinicalProfile: { risks: "Nervous temperament", resistance: "Strong immunity", reproductive: "Good calving ease" },
              description: "Perfect balance of muscle growth and calving ease. Meat has fine fibers and excellent yield.",
              traits: ["Calving Ease", "High Yield", "Fine Fiber"],
              expandedInfo: {
                diet: "Excellent feed conversion efficiency even on moderate forage.",
                diseases: "Good general health, but watch for nervous temperament during handling.",
                breeding: "Preferred for producing high-quality lean beef and veal."
              },
              hotspots: [
                { x: 50, y: 50, label: "Back", text: "Straight and broad back line." },
                { x: 30, y: 30, label: "Color", text: "Lighter circles around eyes and muzzle." }
              ]
            },
            {
              id: "aubrac",
              name: "Aubrac",
              origin: "France",
              type: "Beef (Authorized)",
              color: "Wheat (Fawn) with black points",
              height: "130 cm",
              image: IMAGES.aubrac,
              stats: { milk: "Good Maternal", fat: "Moderate", protein: "Good", weight: "600-800 kg" },
              clinicalProfile: { risks: "Low", resistance: "Very High (Rustic)", reproductive: "Excellent fertility & mothering" },
              description: "A rustic breed par excellence. Hardy, withstands harsh conditions with great maternal abilities.",
              traits: ["Rustic", "Easy Calving", "Maternal"],
              expandedInfo: {
                diet: "Valorizes poor pastures and roughage efficiently.",
                diseases: "Exceptional resistance to diseases and foot problems.",
                breeding: "Used as a maternal line for hardy crossbred calves."
              },
              hotspots: [
                { x: 30, y: 30, label: "Eyes", text: "Black-lined eyes (Makeup)." },
                { x: 50, y: 80, label: "Feet", text: "Very hard black hooves." }
              ]
            },
            {
              id: "normande",
              name: "Normande",
              origin: "France",
              type: "Mixed",
              color: "Tricolor (White, Brown, Black)",
              height: "140 cm",
              image: IMAGES.normande,
              stats: { milk: "6,500 kg", fat: "4.2%", protein: "3.6%", weight: "700-800 kg" },
              clinicalProfile: { risks: "Moderate", resistance: "Good in damp climate", reproductive: "High fertility" },
              description: "Famous for very protein-rich milk (cheese) and marbled meat with distinctive flavor.",
              traits: ["Rich Milk", "Marbled Meat", "Adaptable"],
              expandedInfo: {
                diet: "Benefits well from rich green pastures.",
                diseases: "Good resistance to sun due to eye patches ('spectacles').",
                breeding: "Top choice for Camembert cheese production."
              },
              hotspots: [
                { x: 30, y: 30, label: "Eyes", text: "'Spectacle' patches protect from sun cancer." },
                { x: 50, y: 50, label: "Coat", text: "Distinctive spotted coat pattern." }
              ]
            },
            {
              id: "brown_swiss",
              name: "Brown Swiss",
              origin: "Switzerland",
              type: "Mixed (Dairy lean)",
              color: "Solid Grey-Brown",
              height: "140-150 cm",
              image: IMAGES.brown_swiss,
              stats: { milk: "8,000 kg", fat: "4.0%", protein: "3.5%", weight: "650-700 kg" },
              clinicalProfile: { risks: "Low", resistance: "Excellent heat tolerance", reproductive: "Long productive life" },
              description: "Second largest dairy breed globally. Known for longevity and tolerance to diverse climates.",
              traits: ["Longevity", "High Protein", "Heat Tolerance"],
              expandedInfo: {
                diet: "Excellent conversion of fibrous feed.",
                diseases: "Very strong feet and legs; resistant to lameness.",
                breeding: "Used to improve protein ratio and robustness in other breeds."
              },
              hotspots: [
                { x: 30, y: 30, label: "Ears", text: "Light colored inner ears with fur." },
                { x: 50, y: 80, label: "Feet", text: "Very strong black feet." }
              ]
            },
            {
              id: "tarentaise",
              name: "Tarentaise",
              origin: "France (Alps)",
              type: "Mixed",
              color: "Reddish Brown",
              height: "130 cm",
              image: IMAGES.tarentaise,
              stats: { milk: "5,000 kg", fat: "3.8%", protein: "3.4%", weight: "550 kg" },
              clinicalProfile: { risks: "Low", resistance: "Very High (Mountain)", reproductive: "High fertility" },
              description: "Very hardy mountain breed. Climbs steep slopes and produces special milk for cheese.",
              traits: ["Mountain", "Cheese Milk", "Hardiness"],
              expandedInfo: {
                diet: "Survives on poor high-altitude pastures.",
                diseases: "Exceptional resistance to respiratory issues and harsh weather.",
                breeding: "Used in rugged mountain areas."
              },
              hotspots: [
                { x: 30, y: 30, label: "Head", text: "Expressive head with dark eyes." },
                { x: 50, y: 50, label: "Body", text: "Compact and muscular body." }
              ]
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
          labels: {
            color: "Color",
            height: "Height",
            weight: "Weight"
          },
          subBreeds: [
            { 
              name: "Guelmoise", 
              region: "Eastern Mountains", 
              features: "Small, grey, climber.",
              color: "Dark Grey",
              height: "115 cm",
              weight: "250-300 kg",
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
              color: "White / Sandy",
              height: "120 cm",
              weight: "300 kg",
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
              color: "Black / Dark Brown",
              height: "125 cm",
              weight: "350 kg",
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
              color: "Reddish / Fawn",
              height: "128 cm",
              weight: "380 kg",
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
          { id: "brahman", name: "Brahman", milkIndex: 20, fatIndex: 60, adaptationIndex: 95, maintenanceCost: 30 },
          { id: "simmental", name: "Simmental", milkIndex: 70, fatIndex: 60, adaptationIndex: 75, maintenanceCost: 80 },
          { id: "charolais", name: "Charolais", milkIndex: 10, fatIndex: 40, adaptationIndex: 65, maintenanceCost: 90 },
          { id: "limousin", name: "Limousin", milkIndex: 15, fatIndex: 30, adaptationIndex: 70, maintenanceCost: 65 },
          { id: "aubrac", name: "Aubrac", milkIndex: 20, fatIndex: 45, adaptationIndex: 90, maintenanceCost: 40 },
          { id: "brown_swiss", name: "Brown Swiss", milkIndex: 80, fatIndex: 60, adaptationIndex: 85, maintenanceCost: 75 }
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
          labels: {
            color: "Couleur",
            height: "Hauteur",
            weight: "Poids",
            origin: "Origine"
          },
          breeds: [
            {
              id: "holstein",
              name: "Holstein",
              origin: "Pays-Bas",
              type: "Laitière (Industrielle)",
              color: "Pie Noire / Rouge",
              height: "145 cm",
              image: IMAGES.holstein,
              stats: { milk: "10 000+ kg", fat: "3.7%", protein: "3.2%", weight: "650 kg" },
              clinicalProfile: { risks: "Mammite, Boiterie, Déplacement de la caillette", resistance: "Faible tolérance à la chaleur", reproductive: "Risque de dystocie modéré" },
              description: "La race laitière la plus répandue. Nécessite une gestion vétérinaire intensive et une nutrition riche en énergie.",
              traits: ["Haut Rendement", "Forte Consommation", "Sensible"],
              expandedInfo: {
                diet: "Ration Totale Mixte (RTM) haute énergie, riche en concentrés pour soutenir une production massive (16-18 MJ/kg MS).",
                diseases: "Sujette aux troubles métaboliques comme la fièvre de lait et l'acétonémie en raison du bilan énergétique négatif.",
                breeding: "Dépendance forte à l'insémination artificielle avec taureaux testés génomiquement pour les solides du lait et la conformation du pis."
              },
              hotspots: [
                { x: 50, y: 75, label: "Pis", text: "Pis énorme avec veines apparentes pour soutenir une production massive." },
                { x: 20, y: 40, label: "Corps", text: "Forme angulaire indiquant la conversion de nourriture en lait." }
              ]
            },
            {
              id: "montbeliarde",
              name: "Montbéliarde",
              origin: "France",
              type: "Mixte",
              color: "Pie Rouge",
              height: "140 cm",
              image: IMAGES.montbeliarde,
              stats: { milk: "7 500 kg", fat: "3.9%", protein: "3.45%", weight: "700 kg" },
              clinicalProfile: { risks: "Faible risque de mammite", resistance: "Grande robustesse", reproductive: "Excellente fertilité" },
              description: "Idéale pour la fabrication de fromage grâce aux variants Kappa Caséine B.",
              traits: ["Qualité Fromagère", "Robustesse", "Longévité"],
              expandedInfo: {
                diet: "Flexible ; prospère sur des régimes à base d'herbe/foin et convertit efficacement les fourrages grossiers.",
                diseases: "Relativement résistante aux mammites grâce à une bonne santé du pis ; faible incidence de boiterie.",
                breeding: "Sélection axée sur la qualité des protéines (Kappa Caséine B) pour la production de fromages AOC (ex : Comté)."
              },
              hotspots: [
                { x: 50, y: 50, label: "Force", text: "Construction musculaire solide adaptée à l'usage mixte." },
                { x: 30, y: 30, label: "Tête", text: "Tête blanche distinctive (Tête Blanche)." }
              ]
            },
            {
              id: "brahman",
              name: "Brahman",
              origin: "USA (Origine indienne)",
              type: "Viande (Tropicale)",
              color: "Gris / Rouge",
              height: "145 cm",
              image: IMAGES.brahman,
              stats: { milk: "Faible", fat: "4.5%", protein: "3.6%", weight: "500-800 kg" },
              clinicalProfile: { risks: "Faible risque de maladie", resistance: "Tiques & Chaleur", reproductive: "Maturité tardive" },
              description: "Bosse distinctive et glandes sudoripares denses en font le maître des climats tropicaux.",
              traits: ["Tolérance Chaleur", "Résistance Parasites", "Viande Maigre"],
              expandedInfo: {
                diet: "Excellente digestion des fourrages tropicaux de faible qualité et riches en fibres.",
                diseases: "Peau épaisse et mobile repoussant les insectes ; très résistante aux trypanosomoses et maladies à tiques.",
                breeding: "Largement utilisée en croisement (F1) pour ajouter de la vigueur hybride aux races européennes en climats chauds."
              },
              hotspots: [
                { x: 30, y: 20, label: "Bosse", text: "Bosse musculaire et graisseuse pour le stockage d'énergie et la thermorégulation." },
                { x: 45, y: 60, label: "Fanon", text: "Peau lâche augmentant la surface pour le refroidissement." }
              ]
            },
            {
              id: "jersey",
              name: "Jersey",
              origin: "Île de Jersey (RU)",
              type: "Laitière (Taux élevés)",
              color: "Fauve",
              height: "125 cm",
              image: IMAGES.jersey,
              stats: { milk: "6 000 kg", fat: "5.4%", protein: "3.9%", weight: "450 kg" },
              clinicalProfile: { risks: "Fièvre de lait (Hypocalcémie)", resistance: "Tolérance à la chaleur, Sabots durs", reproductive: "Facilité de vêlage" },
              description: "La plus petite race laitière avec la plus haute efficacité de conversion alimentaire.",
              traits: ["Taux Butyreux", "Vêlage Facile", "Efficacité"],
              expandedInfo: {
                diet: "Nécessite une alimentation dense en énergie due à la petite capacité du rumen ; sensible aux carences en calcium.",
                diseases: "Plus susceptible à la fièvre de lait post-partum en raison de la forte production de calcium dans le colostrum.",
                breeding: "Très prisée pour l'insémination des génisses grâce à la petite taille des veaux."
              },
              hotspots: [
                { x: 50, y: 50, label: "Taille", text: "Petite taille réduisant les coûts d'entretien." },
                { x: 30, y: 30, label: "Yeux", text: "Grands yeux proéminents caractéristiques." }
              ]
            },
            {
              id: "angus",
              name: "Angus",
              origin: "Écosse",
              type: "Bouchère (Premium)",
              color: "Noire / Rouge",
              height: "135 cm",
              image: IMAGES.angus,
              stats: { milk: "Faible", fat: "Élevé (Persillé)", protein: "Musculaire", weight: "800-1000 kg" },
              clinicalProfile: { risks: "Défauts génétiques (AM)", resistance: "Rustique au froid, Sans cornes", reproductive: "Maturité précoce" },
              description: "La race bovine la plus célèbre au monde pour la qualité de sa viande persillée.",
              traits: ["Persillé", "Sans Cornes", "Précoce"],
              expandedInfo: {
                diet: "Répond bien à la finition au grain pour un persillé maximal mais performe excellemment à l'herbe.",
                diseases: "Porteurs de défauts génétiques récessifs comme l'Arthrogrypose Multiple (AM) à surveiller.",
                breeding: "Le standard d'or pour les programmes de qualité de viande ; largement utilisée comme taureau terminal."
              },
              hotspots: [
                { x: 50, y: 50, label: "Corps", text: "Corps cylindrique rempli de viande." },
                { x: 80, y: 50, label: "Croupe", text: "Arrière-train plein offrant d'excellents morceaux de viande." }
              ]
            },
            {
              id: "simmental",
              name: "Simmental",
              origin: "Suisse",
              type: "Mixte (Lait & Viande)",
              color: "Pie Rouge (Paille)",
              height: "145 cm",
              image: IMAGES.simmental,
              stats: { milk: "7 000 kg", fat: "4.0%", protein: "3.5%", weight: "700-900 kg" },
              clinicalProfile: { risks: "Dystocie (veaux lourds)", resistance: "Adaptation alpine", reproductive: "Bonne fertilité, Jumeaux fréquents" },
              description: "Une race puissante offrant un équilibre entre croissance rapide et bonne production laitière.",
              traits: ["Croissance Rapide", "Bonne Laitière", "Robuste"],
              expandedInfo: {
                diet: "Grande capacité d'ingestion ; nécessite des fourrages abondants pour maintenir son grand gabarit.",
                diseases: "Généralement saine du pis, mais le poids élevé peut causer des problèmes de sabots sur béton.",
                breeding: "Populaire en Europe pour produire d'excellents veaux d'engraissement tout en maintenant un revenu laitier."
              },
              hotspots: [
                { x: 50, y: 50, label: "Charpente", text: "Ossature lourde et muscularité." },
                { x: 50, y: 70, label: "Pis", text: "Bon équilibre entre santé du pis et capacité bouchère." }
              ]
            },
            {
              id: "charolais",
              name: "Charolaise",
              origin: "France",
              type: "Bouchère (Autorisée)",
              color: "Blanc crème",
              height: "135-150 cm",
              image: IMAGES.charolais,
              stats: { milk: "Allaitement seulement", fat: "Maigre", protein: "Très Élevé", weight: "1000-1400 kg" },
              clinicalProfile: { risks: "Forte dystocie", resistance: "Bonne tolérance climatique", reproductive: "Fertilité moyenne" },
              description: "Géante française de la viande. Connue pour sa croissance musculaire exceptionnelle et sa vitesse d'engraissement.",
              traits: ["Muscle Massif", "Viande Maigre", "Poids Lourd"],
              expandedInfo: {
                diet: "Très gourmande ; nécessite des pâturages riches ou des concentrés pour atteindre son potentiel de croissance.",
                diseases: "Le problème principal est la dystocie (mise bas difficile) due à la grande taille des veaux.",
                breeding: "Souvent utilisée en croisement terminal pour augmenter le poids au sevrage."
              },
              hotspots: [
                { x: 50, y: 50, label: "Musculature", text: "Gène culard souvent présent." },
                { x: 80, y: 50, label: "Cuisse", text: "Cuisse ronde et massive." }
              ]
            },
            {
              id: "limousin",
              name: "Limousine",
              origin: "France",
              type: "Bouchère (Autorisée)",
              color: "Rouge doré",
              height: "135-145 cm",
              image: IMAGES.limousin,
              stats: { milk: "Modéré", fat: "Faible", protein: "Haute Qualité", weight: "900-1100 kg" },
              clinicalProfile: { risks: "Tempérament nerveux", resistance: "Forte immunité", reproductive: "Bonne facilité de vêlage" },
              description: "Équilibre parfait entre croissance musculaire et facilité de naissance. Viande à fibres fines et excellent rendement.",
              traits: ["Vêlage Facile", "Haut Rendement", "Fibre Fine"],
              expandedInfo: {
                diet: "Excellente efficacité de conversion alimentaire même sur fourrage moyen.",
                diseases: "Bonne santé générale, mais attention au tempérament nerveux lors des manipulations.",
                breeding: "Préférée pour la production de veau de boucherie et de viande rouge maigre."
              },
              hotspots: [
                { x: 50, y: 50, label: "Dos", text: "Ligne de dos droite et large." },
                { x: 30, y: 30, label: "Couleur", text: "Auréoles claires autour des yeux et du mufle." }
              ]
            },
            {
              id: "aubrac",
              name: "Aubrac",
              origin: "France",
              type: "Bouchère (Autorisée)",
              color: "Fauve (Froment) avec extrémités noires",
              height: "130 cm",
              image: IMAGES.aubrac,
              stats: { milk: "Bonne Maternelle", fat: "Modéré", protein: "Bon", weight: "600-800 kg" },
              clinicalProfile: { risks: "Faible", resistance: "Très Élevée (Rustique)", reproductive: "Fertilité & Maternité excellentes" },
              description: "Une race rustique par excellence. Robuste, résiste aux conditions difficiles avec de grandes capacités maternelles.",
              traits: ["Rustique", "Vêlage Facile", "Maternelle"],
              expandedInfo: {
                diet: "Valorise les pâturages pauvres et les fourrages grossiers avec une grande efficacité.",
                diseases: "Résistance exceptionnelle aux maladies et aux problèmes de pieds.",
                breeding: "Utilisée comme lignée maternelle pour produire des veaux croisés robustes."
              },
              hotspots: [
                { x: 30, y: 30, label: "Yeux", text: "Yeux maquillés de noir." },
                { x: 50, y: 80, label: "Pieds", text: "Sabots noirs très durs." }
              ]
            },
            {
              id: "normande",
              name: "Normande",
              origin: "France",
              type: "Mixte",
              color: "Tricolore (Blanc, Brun, Noir)",
              height: "140 cm",
              image: IMAGES.normande,
              stats: { milk: "6 500 kg", fat: "4.2%", protein: "3.6%", weight: "700-800 kg" },
              clinicalProfile: { risks: "Modéré", resistance: "Bonne en climat humide", reproductive: "Haute fertilité" },
              description: "Célèbre pour son lait très riche en protéines (fromage) et sa viande persillée au goût distinctif.",
              traits: ["Lait Riche", "Viande Persillée", "Adaptable"],
              expandedInfo: {
                diet: "Profite bien des riches pâturages verts.",
                diseases: "Bonne résistance au soleil grâce aux taches autour des yeux ('lunettes').",
                breeding: "Premier choix pour la production de Camembert."
              },
              hotspots: [
                { x: 30, y: 30, label: "Yeux", text: "Taches 'lunettes' protégeant du cancer solaire." },
                { x: 50, y: 50, label: "Robe", text: "Motif tacheté distinctif." }
              ]
            },
            {
              id: "brown_swiss",
              name: "Brune des Alpes",
              origin: "Suisse",
              type: "Mixte (Tendance lait)",
              color: "Brun gris uniforme",
              height: "140-150 cm",
              image: IMAGES.brown_swiss,
              stats: { milk: "8 000 kg", fat: "4.0%", protein: "3.5%", weight: "650-700 kg" },
              clinicalProfile: { risks: "Faible", resistance: "Excellente tolérance chaleur", reproductive: "Longue vie productive" },
              description: "Deuxième plus grande race laitière mondiale. Connue pour sa longévité et sa tolérance aux climats divers.",
              traits: ["Longévité", "Haut Protéine", "Tolérance Chaleur"],
              expandedInfo: {
                diet: "Excellente conversion des aliments fibreux.",
                diseases: "Pieds et jambes très solides ; résistante aux boiteries.",
                breeding: "Utilisée pour améliorer le taux de protéines et la robustesse d'autres races."
              },
              hotspots: [
                { x: 30, y: 30, label: "Oreilles", text: "Intérieur des oreilles clair et velu." },
                { x: 50, y: 80, label: "Pieds", text: "Pieds noirs très forts." }
              ]
            },
            {
              id: "tarentaise",
              name: "Tarentaise",
              origin: "France (Alpes)",
              type: "Mixte",
              color: "Brun rougeâtre (Fauve)",
              height: "130 cm",
              image: IMAGES.tarentaise,
              stats: { milk: "5 000 kg", fat: "3.8%", protein: "3.4%", weight: "550 kg" },
              clinicalProfile: { risks: "Faible", resistance: "Très Élevée (Montagne)", reproductive: "Haute fertilité" },
              description: "Race de montagne très rustique. Grimpe les pentes raides et produit un lait spécial fromages.",
              traits: ["Montagne", "Lait Fromage", "Rusticité"],
              expandedInfo: {
                diet: "Survit sur les pâturages pauvres de haute altitude.",
                diseases: "Résistance exceptionnelle aux problèmes respiratoires et au climat rude.",
                breeding: "Utilisée dans les zones montagneuses difficiles."
              },
              hotspots: [
                { x: 30, y: 30, label: "Tête", text: "Tête expressive aux yeux sombres." },
                { x: 50, y: 50, label: "Corps", text: "Corps compact et musclé." }
              ]
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
          heroExpandedText: "Cette race s'est adaptée sur des milliers d'années à l'environnement nord-africain. Elle possède une efficacité unique de conversion des végétaux grossiers et une résistance naturelle aux maladies du sang transmises par les tiques (Babésiose & Theilériose). Cependant, sa faible production laitière (env. 1000L) has conduit à des croisements anarchiques.",
          readMore: "Détails Environnementaux",
          showLess: "Masquer",
          subBreedsTitle: "Écotypes (Sous-races)",
          labels: {
            color: "Couleur",
            height: "Hauteur",
            weight: "Poids"
          },
          subBreeds: [
            { 
              name: "Guelmoise", 
              region: "Montagnes de l'Est", 
              features: "Petite, grise, grimpeuse.",
              color: "Gris foncé",
              height: "115 cm",
              weight: "250-300 kg",
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
              color: "Blanche / Sable",
              height: "120 cm",
              weight: "300 kg",
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
              color: "Noire / Brun foncé",
              height: "125 cm",
              weight: "350 kg",
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
              color: "Rougeâtre / Fauve",
              height: "128 cm",
              weight: "380 kg",
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
          { id: "brahman", name: "Brahman", milkIndex: 20, fatIndex: 60, adaptationIndex: 95, maintenanceCost: 30 },
          { id: "simmental", name: "Simmental", milkIndex: 70, fatIndex: 60, adaptationIndex: 75, maintenanceCost: 80 },
          { id: "charolais", name: "Charolaise", milkIndex: 10, fatIndex: 40, adaptationIndex: 65, maintenanceCost: 90 },
          { id: "limousin", name: "Limousine", milkIndex: 15, fatIndex: 30, adaptationIndex: 70, maintenanceCost: 65 },
          { id: "aubrac", name: "Aubrac", milkIndex: 20, fatIndex: 45, adaptationIndex: 90, maintenanceCost: 40 },
          { id: "brown_swiss", name: "Brune des Alpes", milkIndex: 80, fatIndex: 60, adaptationIndex: 85, maintenanceCost: 75 }
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
