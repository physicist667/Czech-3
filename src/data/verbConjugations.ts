export interface VerbConjugation {
  verbId: string;
  czech: string;
  russian: string;
  isPerfective: boolean;
  conjugations: {
    present: string[]; // 6 forms: já, ty, on/ona/ono, my, vy, oni
    past: string[];
    future: string[];
  };
  notes?: string;
}

export const verbConjugations: VerbConjugation[] = [
  {
    verbId: 'vb1',
    czech: 'Jít',
    russian: 'Идти',
    isPerfective: false,
    conjugations: {
      present: ['jdu', 'jdeš', 'jde', 'jdeme', 'jdete', 'jdou'],
      past: ['šel jsem', 'šel jsi', 'šel', 'šli jsme', 'šli jste', 'šli'],
      future: ['půjdu', 'půjdeš', 'půjde', 'půjdeme', 'půjdete', 'půjdou'],
    },
    notes: 'Неправильный глагол. Прошедшее время от корня jít (šel), будущее — от корня půjdu.',
  },
  {
    verbId: 'vb2',
    czech: 'Běžet',
    russian: 'Бежать',
    isPerfective: false,
    conjugations: {
      present: ['běžím', 'běžíš', 'běží', 'běžíme', 'běžíte', 'běží'],
      past: ['běžel jsem', 'běžel jsi', 'běžel', 'běželi jsme', 'běželi jste', 'běželi'],
      future: ['poběžím', 'poběžíš', 'poběží', 'poběžíme', 'poběžíte', 'poběží'],
    },
    notes: 'Неправильный глагол. Будущее время образуется с приставкой po-.',
  },
  {
    verbId: 'vb3',
    czech: 'Jíst',
    russian: 'Есть (кушать)',
    isPerfective: false,
    conjugations: {
      present: ['jím', 'jíš', 'jí', 'jíme', 'jíte', 'jedí'],
      past: ['jedl jsem', 'jedl jsi', 'jedl', 'jedli jsme', 'jedli jste', 'jedli'],
      future: ['budu jíst', 'budeš jíst', 'bude jíst', 'budeme jíst', 'budete jíst', 'budou jíst'],
    },
  },
  {
    verbId: 'vb4',
    czech: 'Pít',
    russian: 'Пить',
    isPerfective: false,
    conjugations: {
      present: ['piju', 'piješ', 'pije', 'pijeme', 'pijete', 'pijí'],
      past: ['pil jsem', 'pil jsi', 'pil', 'pili jsme', 'pili jste', 'pili'],
      future: ['budu pít', 'budeš pít', 'bude pít', 'budeme pít', 'budete pít', 'budou pít'],
    },
  },
  {
    verbId: 'vb5',
    czech: 'Spát',
    russian: 'Спать',
    isPerfective: false,
    conjugations: {
      present: ['spím', 'spíš', 'spí', 'spíme', 'spíte', 'spí'],
      past: ['spal jsem', 'spal jsi', 'spal', 'spali jsme', 'spali jste', 'spali'],
      future: ['budu spát', 'budeš spát', 'bude spát', 'budeme spát', 'budete spát', 'budou spát'],
    },
  },
  {
    verbId: 'vb6',
    czech: 'Číst',
    russian: 'Читать',
    isPerfective: false,
    conjugations: {
      present: ['čtu', 'čteš', 'čte', 'čteme', 'čtete', 'čtou'],
      past: ['četl jsem', 'četl jsi', 'četl', 'četli jsme', 'četli jste', 'četli'],
      future: ['budu číst', 'budeš číst', 'bude číst', 'budeme číst', 'budete číst', 'budou číst'],
    },
    notes: 'Неправильный глагол. Чередование согласных: č-t → četl в прошедшем.',
  },
  {
    verbId: 'vb7',
    czech: 'Psát',
    russian: 'Писать',
    isPerfective: false,
    conjugations: {
      present: ['píšu', 'píšeš', 'píše', 'píšeme', 'píšete', 'píšou'],
      past: ['psal jsem', 'psal jsi', 'psal', 'psali jsme', 'psali jste', 'psali'],
      future: ['budu psát', 'budeš psát', 'bude psát', 'budeme psát', 'budete psát', 'budou psát'],
    },
  },
  {
    verbId: 'vb8',
    czech: 'Mluvit',
    russian: 'Говорить',
    isPerfective: false,
    conjugations: {
      present: ['mluvím', 'mluvíš', 'mluví', 'mluvíme', 'mluvíte', 'mluví'],
      past: ['mluvil jsem', 'mluvil jsi', 'mluvil', 'mluvili jsme', 'mluvili jste', 'mluvili'],
      future: ['budu mluvit', 'budeš mluvit', 'bude mluvit', 'budeme mluvit', 'budete mluvit', 'budou mluvit'],
    },
  },
  {
    verbId: 'vb9',
    czech: 'Slyšet',
    russian: 'Слышать',
    isPerfective: false,
    conjugations: {
      present: ['slyším', 'slyšíš', 'slyší', 'slyšíme', 'slyšíte', 'slyší'],
      past: ['slyšel jsem', 'slyšel jsi', 'slyšel', 'slyšeli jsme', 'slyšeli jste', 'slyšeli'],
      future: ['budu slyšet', 'budeš slyšet', 'bude slyšet', 'budeme slyšet', 'budete slyšet', 'budou slyšet'],
    },
  },
  {
    verbId: 'vb10',
    czech: 'Vidět',
    russian: 'Видеть',
    isPerfective: false,
    conjugations: {
      present: ['vidím', 'vidíš', 'vidí', 'vidíme', 'vidíte', 'vidí'],
      past: ['viděl jsem', 'viděl jsi', 'viděl', 'viděli jsme', 'viděli jste', 'viděli'],
      future: ['budu vidět', 'budeš vidět', 'bude vidět', 'budeme vidět', 'budete vidět', 'budou vidět'],
    },
  },
  {
    verbId: 'vb11',
    czech: 'Dělat',
    russian: 'Делать',
    isPerfective: false,
    conjugations: {
      present: ['dělám', 'děláš', 'dělá', 'děláme', 'děláte', 'dělají'],
      past: ['dělal jsem', 'dělal jsi', 'dělal', 'dělali jsme', 'dělali jste', 'dělali'],
      future: ['budu dělat', 'budeš dělat', 'bude dělat', 'budeme dělat', 'budete dělat', 'budou dělat'],
    },
  },
  {
    verbId: 'vb12',
    czech: 'Pracovat',
    russian: 'Работать',
    isPerfective: false,
    conjugations: {
      present: ['pracuji', 'pracuješ', 'pracuje', 'pracujeme', 'pracujete', 'pracují'],
      past: ['pracoval jsem', 'pracoval jsi', 'pracoval', 'pracovali jsme', 'pracovali jste', 'pracovali'],
      future: ['budu pracovat', 'budeš pracovat', 'bude pracovat', 'budeme pracovat', 'budete pracovat', 'budou pracovat'],
    },
  },
  {
    verbId: 'vb13',
    czech: 'Učit se',
    russian: 'Учиться',
    isPerfective: false,
    conjugations: {
      present: ['učím se', 'učíš se', 'učí se', 'učíme se', 'učíte se', 'učí se'],
      past: ['učil jsem se', 'učil ses', 'učil se', 'učili jsme se', 'učili jste se', 'učili se'],
      future: ['budu se učit', 'budeš se učit', 'bude se učit', 'budeme se učit', 'budete se učit', 'budou se učit'],
    },
    notes: 'Возвратный глагол с частицей se. В прошедшем: učil ses (ты), učil jsem se (я).',
  },
  {
    verbId: 'vb14',
    czech: 'Koupit',
    russian: 'Купить',
    isPerfective: true,
    conjugations: {
      present: ['—', '—', '—', '—', '—', '—'],
      past: ['koupil jsem', 'koupil jsi', 'koupil', 'koupili jsme', 'koupili jste', 'koupili'],
      future: ['koupím', 'koupíš', 'koupí', 'koupíme', 'koupíte', 'koupí'],
    },
    notes: 'Совершенный вид. Глаголы совершенного вида не имеют настоящего времени. Форма будущего совпадает с формой настоящего несовершенного вида.',
  },
  {
    verbId: 'vb15',
    czech: 'Hledat',
    russian: 'Искать',
    isPerfective: false,
    conjugations: {
      present: ['hledám', 'hledáš', 'hledá', 'hledáme', 'hledáte', 'hledají'],
      past: ['hledal jsem', 'hledal jsi', 'hledal', 'hledali jsme', 'hledali jste', 'hledali'],
      future: ['budu hledat', 'budeš hledat', 'bude hledat', 'budeme hledat', 'budete hledat', 'budou hledat'],
    },
  },
];

export const personLabels = [
  { russian: 'я', czech: 'já' },
  { russian: 'ты', czech: 'ty' },
  { russian: 'он/она/оно', czech: 'on/ona/ono' },
  { russian: 'мы', czech: 'my' },
  { russian: 'вы', czech: 'vy' },
  { russian: 'они', czech: 'oni' },
];

export const tenseLabels = [
  { key: 'present' as const, russian: 'Настоящее', czech: 'Přítomný' },
  { key: 'past' as const, russian: 'Прошлое', czech: 'Minulý' },
  { key: 'future' as const, russian: 'Будущее', czech: 'Budoucí' },
];
