import type { NavLink } from '@/config'
import type { ResourcesContent } from '@/data/en/resources'

const demo: NavLink = { label: 'احجز عرضًا توضيحيًا', href: '/contact' }
const apiAccess: NavLink = { label: 'اطلب الوصول إلى API', href: '/contact' }

export const resources: ResourcesContent = {
  menu: {
    label: 'الموارد',
    groups: { platform: 'منصة RunFleet' },
    promo: {
      title: 'ابدأ العمل خلال أقل من 7 أيام',
      description:
        'مع RunFleet EasyOnboard، يتولى فريق الإعداد تهيئة سير عملك في Fleet خلال الأسبوع الأول.',
      action: { label: 'اكتشف EasyOnboard', href: '/resources/easyonboard' },
    },
  },
  pages: {
    contentLibrary: {
      label: 'مكتبة المحتوى',
      summary: 'أدلة وأفكار ورؤى لفرق العقارات والمرافق.',
      meta: {
        title: 'مكتبة المحتوى | Fleet',
        description:
          'مقالات عملية عن الصيانة والذكاء الاصطناعي وتشغيل العقارات من فريق Fleet، متاحة مجانًا.',
      },
    },
    customerStories: {
      label: 'قصص العملاء',
      summary: 'كيف تدير الفرق كل موقع مع Fleet.',
      meta: {
        title: 'قصص العملاء | Fleet',
        description:
          'اكتشف كيف تخفض فرق العقارات والخدمات اللوجستية والتجزئة الصيانة التفاعلية وتستجيب بسرعة أكبر في كل موقع مع Fleet.',
      },
    },
    easyOnboard: {
      label: 'RunFleet EasyOnboard',
      summary: 'الإعداد والتدريب والدعم للانطلاق خلال أيام.',
      meta: {
        title: 'RunFleet EasyOnboard: الإعداد والتدريب والدعم | Fleet',
        description:
          'ابدأ مع Fleet خلال أقل من 7 أيام. يتولى فريق الإعداد تهيئة سير عملك واستيراد بياناتك وتدريب فرقك.',
      },
    },
    developers: {
      label: 'بوابة المطورين',
      summary: 'اربط Fleet بأنظمتك عبر REST API.',
      meta: {
        title: 'بوابة المطورين | Fleet',
        description:
          'اربط Fleet بالأدوات المالية وأنظمة ERP وأنظمة العقارات عبر REST API وأكثر من 20 تكاملًا.',
      },
    },
  },
  contentLibrary: {
    title: 'استكشف مكتبة المحتوى',
    description:
      'أفكار عملية عن الصيانة والذكاء الاصطناعي وتشغيل العقارات من فريق Fleet، متاحة مجانًا.',
    search: { label: 'ابحث في المقالات', placeholder: 'ابحث بكلمة مفتاحية', button: 'بحث' },
    featured: { badge: 'مميز', action: 'اقرأ المقال' },
    topics: {
      label: 'الموضوعات',
      all: 'كل الموضوعات',
      items: {
        ai: 'الذكاء الاصطناعي والأتمتة',
        maintenance: 'الصيانة',
        operations: 'التشغيل الرقمي',
        retail: 'التجزئة ومراكز التسوق',
      },
    },
    card: { type: 'مقال', action: 'اقرأ المقال', englishOnly: 'بالإنجليزية' },
    empty: 'جرّب كلمة مفتاحية أو موضوعًا آخر لعرض مزيد من المقالات.',
    cta: {
      title: 'هل أنت مستعد لتطبيق هذه الأفكار؟',
      description: 'احجز جولة إرشادية واكتشف كيف تجمع Fleet فرقك وأصولك ومورّديك.',
      primaryAction: demo,
      secondaryAction: { label: 'استكشف المنصة', href: '/platform' },
    },
  },
  customerStories: {
    hero: {
      eyebrow: 'قصص العملاء',
      title: 'فرق تدير كل موقع بثقة',
      description:
        'اكتشف كيف تستخدم فرق العقارات والخدمات اللوجستية والتجزئة Fleet لتقليل الأعمال التفاعلية وربط فنييها والاستجابة بسرعة أكبر.',
      action: { label: 'استعرض كل القصص', href: '#stories' },
    },
    spotlight: {
      label: 'عميل في الواجهة',
      previous: 'القصة السابقة',
      next: 'القصة التالية',
      action: 'اقرأ القصة',
    },
    results: [
      { value: 'حتى 40%', label: 'صيانة تفاعلية أقل' },
      { value: 'أقل من 7 أيام', label: 'لإعداد فريقك' },
      { value: '99.99%', label: 'جاهزية مضمونة باتفاقية SLA' },
      { value: '20+', label: 'تكاملًا مع أنظمتك' },
    ],
    filter: {
      label: 'ابحث عن قطاعك',
      all: 'كل القطاعات',
      sectors: {
        realEstate: 'العقارات',
        logistics: 'الخدمات اللوجستية والمستودعات',
        retail: 'التجزئة ومراكز التسوق',
      },
    },
    stories: [
      {
        sector: 'realEstate',
        organization: 'مشروع متعدد الاستخدامات',
        metric: 'نحو 40%',
        metricLabel: 'أعمال صيانة تفاعلية أقل',
        title: 'كيف جمع مشروع متعدد الاستخدامات الفنيين وسجلات الأصول وأوامر العمل في مكان واحد',
        quote:
          'خفّضت Fleet أعمال الصيانة التفاعلية لدينا بنحو 40%. أصبح الفنيون وسجلات الأصول وأوامر العمل أخيرًا في مكان واحد.',
        author: 'مسؤول عمليات العقارات',
      },
      {
        sector: 'logistics',
        organization: 'مركز لوجستي',
        metric: 'مصمم خصيصًا',
        metricLabel: 'حل مع دعم أسرع',
        title: 'لماذا اختار مركز لوجستي منصة مصممة لعملياته',
        quote:
          'بدت المنصات الأخرى معقدة جدًا أو عامة جدًا. قدمت لنا Fleet حلًا مصممًا لاحتياجاتنا مع دعم أسرع.',
        author: 'مدير الصيانة',
      },
      {
        sector: 'retail',
        organization: 'مشغّل إقليمي لمراكز التسوق',
        metric: 'نحو 40%',
        metricLabel: 'صيانة تفاعلية أقل',
        title: 'كيف اكتسب مشغّل إقليمي لمراكز التسوق رؤية شاملة لكل مواقعه',
        quote:
          'ساعدتنا Fleet على خفض الصيانة التفاعلية بنحو 40%. أصبحنا نرى جميع مواقعنا ونستجيب بسرعة أكبر.',
        author: 'مدير العمليات',
      },
    ],
    readStory: 'اقرأ القصة',
    serve: {
      title: 'فرق من كل أنواع المحافظ تثق بـ Fleet',
      description: 'من فرق تشغيل صغيرة من ثلاثة أشخاص إلى أقسام صيانة بمئات الموظفين في مدن عدة.',
      items: [
        {
          label: 'العقارات',
          detail: 'التجارية والسكنية ومتعددة الاستخدامات',
          href: '/solutions/offices-mixed-use',
        },
        {
          label: 'الخدمات اللوجستية والمستودعات',
          detail: 'مراكز وأرصفة وأساطيل',
          href: '/solutions/shipping-logistics',
        },
        {
          label: 'التعليم والحرم الجامعية',
          detail: 'مدارس وجامعات وحرم جامعية',
          href: '/solutions/healthcare-education',
        },
        {
          label: 'التجزئة والشركات متعددة الفروع',
          detail: 'مراكز تسوق ومتاجر وفروع',
          href: '/solutions/shopping-malls-retail',
        },
        {
          label: 'المنظمات غير الربحية والمرافق البلدية',
          detail: 'مبانٍ عامة ومجتمعية',
          href: '/solutions/facility-management',
        },
      ],
    },
    share: {
      title: 'شاركنا قصتك مع Fleet',
      description: 'هل تحقق نتائج رائعة مع Fleet؟ يسعدنا أن نعرض قصة فريقك.',
      action: { label: 'تواصل معنا', href: '/contact' },
    },
    cta: {
      title: 'اكتب قصة نجاحك الخاصة',
      description: 'احجز جولة إرشادية واكتشف كيف تدعم Fleet فرقك وأصولك ومورّديك.',
      primaryAction: demo,
      secondaryAction: { label: 'استكشف المنصة', href: '/platform' },
    },
  },
  easyOnboard: {
    hero: {
      eyebrow: 'RunFleet EasyOnboard',
      title: 'ابدأ العمل مع Fleet خلال أقل من 7 أيام',
      description:
        'يتولى فريق الإعداد تهيئة سير عملك واستيراد بياناتك وتدريب موظفيك، ليكون كل موقع جاهزًا من الأسبوع الأول.',
      highlights: ['إعداد محلي', 'تدريب لكل دور', 'دعم عبر الدردشة المباشرة'],
      primaryAction: demo,
      secondaryAction: { label: 'تصفح قاعدة المعرفة', href: '#knowledge-base' },
    },
    stats: [
      { value: 'أقل من 7 أيام', label: 'حتى وصول المورّدين الكامل وتشغيل سير العمل' },
      { value: 'الأسبوع الأول', label: 'تهيئة سير العمل مع فريق الإعداد' },
      { value: 'كل دور', label: 'مدرَّب، من الفنيين إلى القيادة' },
      { value: 'دردشة مباشرة', label: 'دعم مباشر من فريقنا' },
    ],
    steps: {
      title: 'أسبوعك الأول مع Fleet',
      description: 'مسار موجّه من الانطلاق حتى التشغيل، مصمم حول محفظتك.',
      label: 'الخطوة',
      items: [
        {
          title: 'الانطلاق والإعداد',
          description: 'إعداد محلي وتهيئة الحساب لمناطقك ومواقعك وفرقك.',
        },
        {
          title: 'تهيئة سير العمل',
          description: 'يهيئ فريق الإعداد سير عمل الصيانة والفحص وإدارة المورّدين في Fleet.',
        },
        {
          title: 'نقل بياناتك',
          description:
            'استورد الأصول والمستندات عبر استيراد البيانات أو مزامنة API أو الرفع اليدوي بمساعدتنا.',
        },
        {
          title: 'دعوة الفرق والمورّدين',
          description: 'امنح الفنيين والمديرين والمورّدين حق الوصول، مع سير عمل جاهز للتشغيل.',
        },
        {
          title: 'التدريب والانطلاق',
          description: 'تدريب حسب الدور وأدلة للتحول الرقمي تساعد كل فريق على العمل بثقة.',
        },
      ],
    },
    knowledge: {
      title: 'قاعدة المعرفة',
      description: 'أدلة تساعد كل فريق على الاستفادة القصوى من Fleet.',
      search: { label: 'ابحث في قاعدة المعرفة', placeholder: 'ابحث في موضوعات الإعداد' },
      empty: 'جرّب كلمة مفتاحية أخرى لعرض مزيد من الموضوعات.',
      groups: {
        start: 'ابدأ من هنا',
        maintenance: 'الصيانة',
        assets: 'الأصول والامتثال',
        automation: 'الأتمتة والتكاملات',
      },
      faqs: 'الأسئلة الشائعة',
    },
    training: {
      title: 'تدريب يبني الثقة',
      description: 'يمنح التدريب المنظم المديرين والفرق المهارات ومؤشرات الأداء لإدارة كل عقار.',
      items: [
        { title: 'توحيد سير العمل', description: 'للصيانة والفحوصات وإدارة المورّدين.' },
        {
          title: 'إعداد مؤشرات الأداء',
          description: 'لأوقات الاستجابة واتفاقيات SLA لأوامر العمل ومعدلات الإغلاق وحالة الأصول.',
        },
        { title: 'التواصل بين الفرق', description: 'لتنسيق المناطق في عمليات العقارات.' },
        {
          title: 'أدلة التحول الرقمي',
          description: 'ترشد الفرق في الانتقال من العمل الورقي أو الأنظمة القديمة.',
        },
        { title: 'لوحات القيادة', description: 'لرؤية فورية للمواقع والمناطق ومجموعات الأصول.' },
      ],
    },
    support: {
      title: 'دعم متى احتجت إليه',
      description: 'أشخاص حقيقيون جاهزون لمساعدة فرقك بعد الانطلاق بوقت طويل.',
      items: [
        { title: 'دعم عبر الدردشة المباشرة', description: 'دردشة ودودة تصلك مباشرة بفريقنا.' },
        {
          title: 'فريق متعدد المناطق الزمنية',
          description: 'فريق دعم يعمل عبر مناطق زمنية عدة للمحافظ متعددة المناطق.',
        },
        { title: 'موارد التدريب', description: 'فريق دعم مخصص إلى جانب موارد التدريب والإعداد.' },
      ],
    },
    faqTitle: 'أسئلة عن الإعداد',
    faq: [
      {
        question: 'كم يستغرق إعداد Fleet؟',
        answer:
          'تبدأ معظم الفرق العمل مع Fleet خلال أقل من 7 أيام، مع وصول كامل للمورّدين وسير عمل جاهز.',
      },
      {
        question: 'هل يمكننا نقل بياناتنا الحالية؟',
        answer:
          'نعم. تدعم Fleet مسارات نقل مخصصة، منها استيراد بيانات الأصول ومزامنة API والرفع اليدوي بمساعدتنا.',
      },
      {
        question: 'من يهيئ Fleet لسير عملنا؟',
        answer:
          'يتيح منشئ سير العمل المرئي لفريقك تهيئة Fleet بسهولة، ويساعدك فريق الإعداد على تهيئة سير عملك خلال الأسبوع الأول.',
      },
      {
        question: 'كيف يصل الفنيون والمورّدون إلى Fleet؟',
        answer:
          'تعمل Fleet في أي متصفح على الجوال، فيبدأ الفنيون والمورّدون فورًا بالأعمال المسندة إليهم.',
      },
    ],
    cta: {
      title: 'ابدأ أسبوعك الأول مع Fleet',
      description: 'احجز جولة وسنخطط معك مسار إعداد يناسب محفظتك.',
      primaryAction: demo,
      secondaryAction: { label: 'تواصل مع فريقنا', href: '/contact' },
    },
  },
  developers: {
    hero: {
      eyebrow: 'بوابة المطورين',
      title: 'Fleet للمطورين',
      description: 'كل ما تحتاجه لربط Fleet بأنظمتك، من الأدوات المالية إلى أنظمة العقارات.',
      primaryAction: apiAccess,
      secondaryAction: { label: 'استكشف التكاملات', href: '/platform/integrations' },
    },
    cards: [
      {
        title: 'ابنِ تكاملك',
        description:
          'اربط المحاسبة والحسابات الدائنة والمدينة وأنظمة ERP بـ Fleet عبر REST API، مع دعم فريقنا.',
        action: apiAccess,
      },
      {
        title: 'استكشف التكاملات',
        description:
          'تعرّف على كيفية ارتباط Fleet بالأدوات المالية وأنظمة ERP وبوابات المستأجرين وأنظمة المباني.',
        action: { label: 'عرض التكاملات', href: '/platform/integrations' },
      },
      {
        title: 'ابقَ على اطلاع',
        description: 'تابع أخبار المنتج وأفكار فريق Fleet في مكتبة المحتوى.',
        action: { label: 'زر مكتبة المحتوى', href: '/insights' },
      },
    ],
    capabilities: {
      title: 'قدرات التكامل',
      description: 'طرق شائعة تربط بها الفرق Fleet لتبسيط العمليات.',
      items: [
        {
          title: 'أوامر العمل',
          description: 'أدخل الطلبات من الأنظمة الأخرى إلى Fleet وأبقِ حالة الأعمال متزامنة.',
          points: ['إنشاء الطلبات', 'تحديثات الحالة'],
        },
        {
          title: 'بيانات الأصول',
          description: 'استورد سجلات الأصول وزامنها لتتشارك كل الأنظمة مصدرًا واحدًا للبيانات.',
          points: ['استيراد الأصول', 'مزامنة API'],
        },
        {
          title: 'المالية والحسابات الدائنة والمدينة',
          description:
            'اربط أعمال الصيانة بالمحاسبة والحسابات الدائنة والمدينة وأنظمة ERP لتقارير موحدة.',
          points: ['التكاليف والفواتير', 'تقارير موحدة'],
        },
        {
          title: 'أنظمة العقارات',
          description: 'اربط بوابات المستأجرين والتحكم في الدخول وأنظمة إدارة المباني.',
          points: ['بوابات المستأجرين', 'أنظمة إدارة المباني'],
        },
      ],
    },
    platform: {
      title: 'مبنية على منصة آمنة وموثوقة',
      items: [
        { value: 'REST API', label: 'للأدوات المالية وأنظمة ERP وأنظمة العقارات' },
        { value: '20+', label: 'تكاملًا مع أنظمتك' },
        { value: '99.99%', label: 'جاهزية مضمونة باتفاقية SLA' },
        { value: 'سجلات التدقيق', label: 'وتخزين مشفّر' },
      ],
    },
    cta: {
      title: 'هل أنت مستعد لربط Fleet؟',
      description: 'أخبرنا عن أنظمتك وسيساعدك فريقنا في التخطيط للتكامل.',
      primaryAction: apiAccess,
      secondaryAction: demo,
    },
  },
}
