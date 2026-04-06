export interface VerbConjugation {
  verbId: string;
  czech: string;
  russian: string;
  isPerfective: boolean;
  conjugations: {
    present: string[];
    past: string[];
    future: string[];
  };
  pronunciations: {
    present: string[];
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
    pronunciations: {
      present: ['йду', 'йдэш', 'йдэ', 'йдэмэ', 'йдэтэ', 'йдоу'],
      past: ['шэл йэм', 'шэл йси', 'шэл', 'шли йсмэ', 'шли йстэ', 'шли'],
      future: ['пойду', 'пойдэш', 'пойдэ', 'пойдэмэ', 'пойдэтэ', 'пойдоу'],
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
    pronunciations: {
      present: ['бжэжим', 'бжэжиш', 'бжэжи', 'бжэжимэ', 'бжэжитэ', 'бжэжи'],
      past: ['бжэжэл йэм', 'бжэжэл йси', 'бжэжэл', 'бжэжэли йсмэ', 'бжэжэли йстэ', 'бжэжэли'],
      future: ['побжэжим', 'побжэжиш', 'побжэжи', 'побжэжимэ', 'побжэжитэ', 'побжэжи'],
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
    pronunciations: {
      present: ['йим', 'йиш', 'йи', 'йимэ', 'йитэ', 'йэди'],
      past: ['йэдл йэм', 'йэдл йси', 'йэдл', 'йэдли йсмэ', 'йэдли йстэ', 'йэдли'],
      future: ['буду йист', 'будэш йист', 'будэ йист', 'будэмэ йист', 'будэтэ йист', 'будоу йист'],
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
    pronunciations: {
      present: ['пийу', 'пиеш', 'пиэ', 'пийэмэ', 'пийэтэ', 'пийи'],
      past: ['пил йэм', 'пил йси', 'пил', 'пили йсмэ', 'пили йстэ', 'пили'],
      future: ['буду пит', 'будэш пит', 'будэ пит', 'будэмэ пит', 'будэтэ пит', 'будоу пит'],
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
    pronunciations: {
      present: ['спим', 'спиш', 'спи', 'спимэ', 'спитэ', 'спи'],
      past: ['спал йэм', 'спал йси', 'спал', 'спали йсмэ', 'спали йстэ', 'спали'],
      future: ['буду спат', 'будэш спат', 'будэ спат', 'будэмэ спат', 'будэтэ спат', 'будоу спат'],
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
    pronunciations: {
      present: ['чту', 'чтэш', 'чтэ', 'чтэмэ', 'чтэтэ', 'чтоу'],
      past: ['чтэл йэм', 'чтэл йси', 'чтэл', 'чтэли йсмэ', 'чтэли йстэ', 'чтэли'],
      future: ['буду чист', 'будэш чист', 'будэ чист', 'будэмэ чист', 'будэтэ чист', 'будоу чист'],
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
    pronunciations: {
      present: ['пишу', 'пишэш', 'пишэ', 'пишэмэ', 'пишэтэ', 'пишоу'],
      past: ['псал йэм', 'псал йси', 'псал', 'псали йсмэ', 'псали йстэ', 'псали'],
      future: ['буду псат', 'будэш псат', 'будэ псат', 'будэмэ псат', 'будэтэ псат', 'будоу псат'],
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
    pronunciations: {
      present: ['млувим', 'млувиш', 'млувим', 'млувимэ', 'млувитэ', 'млувим'],
      past: ['млувил йэм', 'млувил йси', 'млувил', 'млувили йсмэ', 'млувили йстэ', 'млувили'],
      future: ['буду млувит', 'будэш млувит', 'будэ млувит', 'будэмэ млувит', 'будэтэ млувит', 'будоу млувит'],
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
    pronunciations: {
      present: ['слишим', 'слишиш', 'слишим', 'слишимэ', 'слишитэ', 'слишим'],
      past: ['слишэл йэм', 'слишэл йси', 'слишэл', 'слишэли йсмэ', 'слишэли йстэ', 'слишэли'],
      future: ['буду слишэт', 'будэш слишэт', 'будэ слишэт', 'будэмэ слишэт', 'будэтэ слишэт', 'будоу слишэт'],
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
    pronunciations: {
      present: ['видим', 'видиш', 'видим', 'видимэ', 'видитэ', 'видим'],
      past: ['видэл йэм', 'видэл йси', 'видэл', 'видэли йсмэ', 'видэли йстэ', 'видэли'],
      future: ['буду видэт', 'будэш видэт', 'будэ видэт', 'будэмэ видэт', 'будэтэ видэт', 'будоу видэт'],
    },
  },
  {
    verbId: 'vb11',
    czech: 'Dělat',
    russian: 'Делать',
    isPerfective: false,
    conjugations: {
      present: ['dělám', 'děláš', 'dělá', 'děláme', 'děláte', 'dělají'],
      past: ['dělál jsem', 'dělál jsi', 'dělál', 'dělali jsme', 'dělali jste', 'dělali'],
      future: ['budu dělat', 'budeš dělat', 'bude dělat', 'budeme dělat', 'budete dělat', 'budou dělat'],
    },
    pronunciations: {
      present: ['дэлам', 'дэлаш', 'дэла', 'дэламэ', 'дэлатэ', 'дэлайи'],
      past: ['дэлал йэм', 'дэлал йси', 'дэлал', 'дэлали йсмэ', 'дэлали йстэ', 'дэлали'],
      future: ['буду дэлат', 'будэш дэлат', 'будэ дэлат', 'будэмэ дэлат', 'будэтэ дэлат', 'будоу дэлат'],
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
    pronunciations: {
      present: ['працуйи', 'працуеш', 'працуэ', 'працуемэ', 'працуютэ', 'працуйи'],
      past: ['працовал йэм', 'працовал йси', 'працовал', 'працовали йсмэ', 'працовали йстэ', 'працовали'],
      future: ['буду працовать', 'будэш працовать', 'будэ працовать', 'будэмэ працовать', 'будэтэ працовать', 'будоу працовать'],
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
    pronunciations: {
      present: ['учим сэ', 'учиш сэ', 'учи сэ', 'учимэ сэ', 'учитэ сэ', 'учи сэ'],
      past: ['учил йэм сэ', 'учил сэс', 'учил сэ', 'учили йсмэ сэ', 'учили йстэ сэ', 'учили сэ'],
      future: ['буду сэ учить', 'будэш сэ учить', 'будэ сэ учить', 'будэмэ сэ учить', 'будэтэ сэ учить', 'будоу сэ учить'],
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
    pronunciations: {
      present: ['', '', '', '', '', ''],
      past: ['коупил йэм', 'коупил йси', 'коупил', 'коупили йсмэ', 'коупили йстэ', 'коупили'],
      future: ['коупим', 'коуипиш', 'коупи', 'коупимэ', 'коупитэ', 'коупи'],
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
    pronunciations: {
      present: ['глэдам', 'глэдаш', 'глэда', 'глэдамэ', 'глэдатэ', 'глэдайи'],
      past: ['глэдал йэм', 'глэдал йси', 'глэдал', 'глэдали йсмэ', 'глэдали йстэ', 'глэдали'],
      future: ['буду глэдат', 'будэш глэдат', 'будэ глэдат', 'будэмэ глэдат', 'будэтэ глэдат', 'будоу глэдат'],
    },
  },
  {
    verbId: 'vb16',
    czech: 'Bydlet',
    russian: 'Жить / Проживать',
    isPerfective: false,
    conjugations: {
      present: ['bydlím', 'bydlíš', 'bydlí', 'bydlíme', 'bydlíte', 'bydlí'],
      past: ['bydlel jsem', 'bydlel jsi', 'bydlel', 'bydleli jsme', 'bydleli jste', 'bydleli'],
      future: ['budu bydlet', 'budeš bydlet', 'bude bydlet', 'budeme bydlet', 'budete bydlet', 'budou bydlet'],
    },
    pronunciations: {
      present: ['бидлим', 'бидлиш', 'бидли', 'бидлимэ', 'бидлитэ', 'бидли'],
      past: ['бидлэл йэм', 'бидлэл йси', 'бидлэл', 'бидлэли йсмэ', 'бидлэли йстэ', 'бидлэли'],
      future: ['буду бидлэт', 'будэш бидлэт', 'будэ бидлэт', 'будэмэ бидлэт', 'будэтэ бидлэт', 'будоу бидлэт'],
    },
  },
  {
    verbId: 'vb17',
    czech: 'Chtít',
    russian: 'Хотеть',
    isPerfective: false,
    conjugations: {
      present: ['chci', 'chceš', 'chce', 'chceme', 'chcete', 'chtějí'],
      past: ['chtěl jsem', 'chtěl jsi', 'chtěl', 'chtěli jsme', 'chtěli jste', 'chtěli'],
      future: ['budu chtít', 'budeš chtít', 'bude chtít', 'budeme chtít', 'budete chtít', 'budou chtít'],
    },
    pronunciations: {
      present: ['хти', 'хтэш', 'хтэ', 'хтэмэ', 'хтэтэ', 'хтьэйи'],
      past: ['хтэл йэм', 'хтэл йси', 'хтэл', 'хтьэли йсмэ', 'хтьэли йстэ', 'хтьэли'],
      future: ['буду хтит', 'будэш хтит', 'будэ хтит', 'будэмэ хтит', 'будэтэ хтит', 'будоу хтит'],
    },
    notes: 'Неправильный глагол. Настоящее: chci, chceš, chce, chtějí. Прошедшее: chtěl, chtěli.',
  },
  {
    verbId: 'vb18',
    czech: 'Mít',
    russian: 'Иметь',
    isPerfective: false,
    conjugations: {
      present: ['mám', 'máš', 'má', 'máme', 'máte', 'mají'],
      past: ['měl jsem', 'měl jsi', 'měl', 'měli jsme', 'měli jste', 'měli'],
      future: ['budu mít', 'budeš mít', 'bude mít', 'budeme mít', 'budete mít', 'budou mít'],
    },
    pronunciations: {
      present: ['мам', 'маш', 'ма', 'мамэ', 'матэ', 'майи'],
      past: ['мэл йэм', 'мэл йси', 'мэл', 'мэли йсмэ', 'мэли йстэ', 'мэли'],
      future: ['буду мит', 'будэш мит', 'будэ мит', 'будэмэ мит', 'будэтэ мит', 'будоу мит'],
    },
    notes: 'Неправильный глагол. Краткая форма в настоящем: mám, máš, má. 3-е лицо мн.ч.: mají.',
  },
  {
    verbId: 'vb19',
    czech: 'Moct',
    russian: 'Мочь',
    isPerfective: false,
    conjugations: {
      present: ['mohu', 'můžeš', 'může', 'můžeme', 'můžete', 'mohou'],
      past: ['mohl jsem', 'mohl jsi', 'mohl', 'mohli jsme', 'mohli jste', 'mohli'],
      future: ['budu moci', 'budeš moci', 'bude moci', 'budeme moci', 'budete moci', 'budou moci'],
    },
    pronunciations: {
      present: ['могу', 'можэш', 'можэ', 'мувжэмэ', 'мувжэтэ', 'могоу'],
      past: ['мохл йэм', 'мохл йси', 'мохл', 'мохли йсмэ', 'мохли йстэ', 'мохли'],
      future: ['буду моци', 'будэш моци', 'будэ моци', 'будэмэ моци', 'будэтэ моци', 'будоу моци'],
    },
    notes: 'Неправильный глагол. ů в формách můžeme, můžete произносится как «ув».',
  },
  {
    verbId: 'vb20',
    czech: 'Stát',
    russian: 'Стоять / Стоить',
    isPerfective: false,
    conjugations: {
      present: ['stojím', 'stojíš', 'stojí', 'stojíme', 'stojíte', 'stojí'],
      past: ['stál jsem', 'stál jsi', 'stál', 'stáli jsme', 'stáli jste', 'stáli'],
      future: ['budu stát', 'budeš stát', 'bude stát', 'budeme stát', 'budete stát', 'budou stát'],
    },
    pronunciations: {
      present: ['стойим', 'стойиш', 'стойи', 'стоимэ', 'стоитэ', 'стойи'],
      past: ['стал йэм', 'стал йси', 'стал', 'стали йсмэ', 'стали йстэ', 'стали'],
      future: ['буду стат', 'будэш стат', 'будэ стат', 'будэмэ стат', 'будэтэ стат', 'будоу стат'],
    },
    notes: 'Двойное значение: «стоять» (физически) и «стоить» (о цене).',
  },
  {
    verbId: 'vb21',
    czech: 'Dávat',
    russian: 'Давать',
    isPerfective: false,
    conjugations: {
      present: ['dávám', 'dáváš', 'dává', 'dáváme', 'dáváte', 'dávají'],
      past: ['dával jsem', 'dával jsi', 'dával', 'dávali jsme', 'dávali jste', 'dávali'],
      future: ['budu dávat', 'budeš dávat', 'bude dávat', 'budeme dávat', 'budete dávat', 'budou dávat'],
    },
    pronunciations: {
      present: ['давам', 'даваш', 'дава', 'давамэ', 'даватэ', 'давайи'],
      past: ['давал йэм', 'давал йси', 'давал', 'давали йсмэ', 'давали йстэ', 'давали'],
      future: ['буду дават', 'будэш дават', 'будэ дават', 'будэмэ дават', 'будэтэ дават', 'будоу дават'],
    },
  },
  {
    verbId: 'vb22',
    czech: 'Znát',
    russian: 'Знать',
    isPerfective: false,
    conjugations: {
      present: ['znám', 'znáš', 'zná', 'známe', 'znáte', 'znají'],
      past: ['znal jsem', 'znal jsi', 'znal', 'znali jsme', 'znali jste', 'znali'],
      future: ['budu znát', 'budeš znát', 'bude znát', 'budeme znát', 'budete znát', 'budou znát'],
    },
    pronunciations: {
      present: ['знам', 'знаш', 'зна', 'знамэ', 'знатэ', 'знайи'],
      past: ['знал йэм', 'знал йси', 'знал', 'знали йсмэ', 'знали йстэ', 'знали'],
      future: ['буду знат', 'будэш знат', 'будэ знат', 'будэмэ знат', 'будэтэ знат', 'будоу знат'],
    },
    notes: 'Неправильный глагол. Корень zná- в настоящем, znal- в прошедшем.',
  },
  {
    verbId: 'vb23',
    czech: 'Rozumět',
    russian: 'Понимать',
    isPerfective: false,
    conjugations: {
      present: ['rozumím', 'rozumíš', 'rozumí', 'rozumíme', 'rozumíte', 'rozumí'],
      past: ['rozuměl jsem', 'rozuměl jsi', 'rozuměl', 'rozuměli jsme', 'rozuměli jste', 'rozuměli'],
      future: ['budu rozumět', 'budeš rozumět', 'bude rozumět', 'budeme rozumět', 'budete rozumět', 'budou rozumět'],
    },
    pronunciations: {
      present: ['розумим', 'розумиш', 'розуми', 'розумимэ', 'розумитэ', 'розуми'],
      past: ['розумэл йэм', 'розумэл йси', 'розумэл', 'розумэли йсмэ', 'розумэли йстэ', 'розумэли'],
      future: ['буду розумэт', 'будэш розумэт', 'будэ розумэт', 'будэмэ розумэт', 'будэтэ розумэт', 'будоу розумэт'],
    },
  },
  {
    verbId: 'vb24',
    czech: 'Najít',
    russian: 'Найти',
    isPerfective: true,
    conjugations: {
      present: ['—', '—', '—', '—', '—', '—'],
      past: ['našel jsem', 'našel jsi', 'našel', 'našli jsme', 'našli jste', 'našli'],
      future: ['najdu', 'najdeš', 'najde', 'najdeme', 'najdete', 'najdou'],
    },
    pronunciations: {
      present: ['', '', '', '', '', ''],
      past: ['нашэл йэм', 'нашэл йси', 'нашэл', 'нашли йсмэ', 'нашли йстэ', 'нашли'],
      future: ['найду', 'найдэш', 'найдэ', 'найдэмэ', 'найдэтэ', 'найдоу'],
    },
    notes: 'Совершенный вид. Глаголы совершенного вида не имеют настоящего времени. Будущее совпадает с формой настоящего несовершенного вида.',
  },
  {
    verbId: 'vb25',
    czech: 'Otevřít',
    russian: 'Открыть',
    isPerfective: true,
    conjugations: {
      present: ['—', '—', '—', '—', '—', '—'],
      past: ['otevřel jsem', 'otevřel jsi', 'otevřel', 'otevřeli jsme', 'otevřeli jste', 'otevřeli'],
      future: ['otevřu', 'otevřeš', 'otevře', 'otevřeme', 'otevřete', 'otevřou'],
    },
    pronunciations: {
      present: ['', '', '', '', '', ''],
      past: ['отэвржэл йэм', 'отэвржэл йси', 'отэвржэл', 'отэвржэли йсмэ', 'отэвржэли йстэ', 'отэвржэли'],
      future: ['отэвржу', 'отэвржэш', 'отэвржэ', 'отэвржэмэ', 'отэвржэтэ', 'отэвржоу'],
    },
    notes: 'Совершенный вид. Глаголы совершенного вида не имеют настоящего времени. Несовершенный пара: otevírat.',
  },
  {
    verbId: 'vb26',
    czech: 'Vést',
    russian: 'Вести / Руководить',
    isPerfective: false,
    conjugations: {
      present: ['vedu', 'vedeš', 'vede', 'vedeme', 'vedete', 'vedou'],
      past: ['vedl jsem', 'vedl jsi', 'vedl', 'vedli jsme', 'vedli jste', 'vedli'],
      future: ['budu vést', 'budeš vést', 'bude vést', 'budeme vést', 'budete vést', 'budou vést'],
    },
    pronunciations: {
      present: ['вэду', 'вэдэш', 'вэдэ', 'вэдэмэ', 'вэдэтэ', 'вэдоу'],
      past: ['вэдл йэм', 'вэдл йси', 'вэдл', 'вэдли йсмэ', 'вэдли йстэ', 'вэдли'],
      future: ['буду вэст', 'будэш вэст', 'будэ вэст', 'будэмэ вэст', 'будэтэ вэст', 'будоу вэст'],
    },
  },
  {
    verbId: 'vb27',
    czech: 'Myslet',
    russian: 'Думать / Считать',
    isPerfective: false,
    conjugations: {
      present: ['myslím', 'myslíš', 'myslí', 'myslíme', 'myslíte', 'myslí'],
      past: ['myslel jsem', 'myslel jsi', 'myslel', 'mysleli jsme', 'mysleli jste', 'mysleli'],
      future: ['budu myslet', 'budeš myslet', 'bude myslet', 'budeme myslet', 'budete myslet', 'budou myslet'],
    },
    pronunciations: {
      present: ['мыслим', 'мыслиш', 'мысли', 'мыслимэ', 'мыслитэ', 'мысли'],
      past: ['мыслэл йэм', 'мыслэл йси', 'мыслэл', 'мыслэли йсмэ', 'мыслэли йстэ', 'мыслэли'],
      future: ['буду мыслэт', 'будэш мыслэт', 'будэ мыслэт', 'будэмэ мыслэт', 'будэтэ мыслэт', 'будоу мыслэт'],
    },
  },
  {
    verbId: 'vb28',
    czech: 'Čekat',
    russian: 'Ждать',
    isPerfective: false,
    conjugations: {
      present: ['čekám', 'čekáš', 'čeká', 'čekáme', 'čekáte', 'čekají'],
      past: ['čekal jsem', 'čekal jsi', 'čekal', 'čekali jsme', 'čekali jste', 'čekali'],
      future: ['budu čekat', 'budeš čekat', 'bude čekat', 'budeme čekat', 'budete čekat', 'budou čekat'],
    },
    pronunciations: {
      present: ['чэкам', 'чэкаш', 'чэка', 'чэкамэ', 'чэкатэ', 'чэкайи'],
      past: ['чэкал йэм', 'чэкал йси', 'чэкал', 'чэкали йсмэ', 'чэкали йстэ', 'чэкали'],
      future: ['буду чэкат', 'будэш чэкат', 'будэ чэкат', 'будэмэ чэкат', 'будэтэ чэкат', 'будоу чэкат'],
    },
  },
  {
    verbId: 'vb29',
    czech: 'Sedět',
    russian: 'Сидеть',
    isPerfective: false,
    conjugations: {
      present: ['sedím', 'sedíš', 'sedí', 'sedíme', 'sedíte', 'sedí'],
      past: ['seděl jsem', 'seděl jsi', 'seděl', 'seděli jsme', 'seděli jste', 'seděli'],
      future: ['budu sedět', 'budeš sedět', 'bude sedět', 'budeme sedět', 'budete sedět', 'budou sedět'],
    },
    pronunciations: {
      present: ['сэдим', 'сэдиш', 'сэди', 'сэдимэ', 'сэдитэ', 'сэди'],
      past: ['сэдэл йэм', 'сэдэл йси', 'сэдэл', 'сэдэли йсмэ', 'сэдэли йстэ', 'сэдэли'],
      future: ['буду сэдэт', 'будэш сэдэт', 'будэ сэдэт', 'будэмэ сэдэт', 'будэтэ сэдэт', 'будоу сэдэт'],
    },
  },
  {
    verbId: 'vb30',
    czech: 'Pomáhat',
    russian: 'Помогать',
    isPerfective: false,
    conjugations: {
      present: ['pomáhám', 'pomáháš', 'pomáhá', 'pomáháme', 'pomáháte', 'pomáhají'],
      past: ['pomáhal jsem', 'pomáhal jsi', 'pomáhal', 'pomáhali jsme', 'pomáhali jste', 'pomáhali'],
      future: ['budu pomáhat', 'budeš pomáhat', 'bude pomáhat', 'budeme pomáhat', 'budete pomáhat', 'budou pomáhat'],
    },
    pronunciations: {
      present: ['помахам', 'помахаш', 'помаха', 'помахамэ', 'помахатэ', 'помахайи'],
      past: ['помахал йэм', 'помахал йси', 'помахал', 'помахали йсмэ', 'помахали йстэ', 'помахали'],
      future: ['буду помахат', 'будэш помахат', 'будэ помахат', 'будэмэ помахат', 'будэтэ помахат', 'будоу помахат'],
    },
  },
  {
    verbId: 'vb31',
    czech: 'Volat',
    russian: 'Звонить / Называть',
    isPerfective: false,
    conjugations: {
      present: ['volám', 'voláš', 'volá', 'voláme', 'voláte', 'volají'],
      past: ['volal jsem', 'volal jsi', 'volal', 'volali jsme', 'volali jste', 'volali'],
      future: ['budu volat', 'budeš volat', 'bude volat', 'budeme volat', 'budete volat', 'budou volat'],
    },
    pronunciations: {
      present: ['волам', 'волаш', 'вола', 'воламэ', 'волатэ', 'волайи'],
      past: ['волал йэм', 'волал йси', 'волал', 'волали йсмэ', 'волали йстэ', 'волали'],
      future: ['буду волат', 'будэш волат', 'будэ волат', 'будэмэ волат', 'будэтэ волат', 'будоу волат'],
    },
  },
  {
    verbId: 'vb32',
    czech: 'Plavat',
    russian: 'Плыть',
    isPerfective: false,
    conjugations: {
      present: ['plavu', 'plaveš', 'plave', 'plaveme', 'plavete', 'plavou'],
      past: ['plaval jsem', 'plaval jsi', 'plaval', 'plavali jsme', 'plavali jste', 'plavali'],
      future: ['budu plavat', 'budeš plavat', 'bude plavat', 'budeme plavat', 'budete plavat', 'budou plavat'],
    },
    pronunciations: {
      present: ['плаву', 'плавэш', 'плавэ', 'плавэмэ', 'плавэтэ', 'плавоу'],
      past: ['плавал йэм', 'плавал йси', 'плавал', 'плавали йсмэ', 'плавали йстэ', 'плавали'],
      future: ['буду плават', 'будэш плават', 'будэ плават', 'будэмэ плават', 'будэтэ плават', 'будоу плават'],
    },
  },
  {
    verbId: 'vb33',
    czech: 'Vařit',
    russian: 'Готовить',
    isPerfective: false,
    conjugations: {
      present: ['vařím', 'vaříš', 'vaří', 'vaříme', 'vaříte', 'vaří'],
      past: ['vařil jsem', 'vařil jsi', 'vařil', 'vařili jsme', 'vařili jste', 'vařili'],
      future: ['budu vařit', 'budeš vařit', 'bude vařit', 'budeme vařit', 'budete vařit', 'budou vařit'],
    },
    pronunciations: {
      present: ['варжим', 'варжиш', 'варжи', 'варжимэ', 'варжитэ', 'варжи'],
      past: ['варжил йэм', 'варжил йси', 'варжил', 'варжили йсмэ', 'варжили йстэ', 'варжили'],
      future: ['буду варжит', 'будэш варжит', 'будэ варжит', 'будэмэ варжит', 'будэтэ варжит', 'будоу варжит'],
    },
  },
  {
    verbId: 'vb34',
    czech: 'Nosit',
    russian: 'Носить',
    isPerfective: false,
    conjugations: {
      present: ['nosím', 'nosíš', 'nosí', 'nosíme', 'nosíte', 'nosí'],
      past: ['nosil jsem', 'nosil jsi', 'nosil', 'nosili jsme', 'nosili jste', 'nosili'],
      future: ['budu nosit', 'budeš nosit', 'bude nosit', 'budeme nosit', 'budete nosit', 'budou nosit'],
    },
    pronunciations: {
      present: ['носим', 'ношиш', 'носим', 'носимэ', 'носитэ', 'носим'],
      past: ['носил йэм', 'носил йси', 'носил', 'носили йсмэ', 'носили йстэ', 'носили'],
      future: ['буду носит', 'будэш носит', 'будэ носит', 'будэмэ носит', 'будэтэ носит', 'будоу носит'],
    },
  },
  {
    verbId: 'vb35',
    czech: 'Zaplatit',
    russian: 'Заплатить',
    isPerfective: true,
    conjugations: {
      present: ['—', '—', '—', '—', '—', '—'],
      past: ['zaplatil jsem', 'zaplatil jsi', 'zaplatil', 'zaplatili jsme', 'zaplatili jste', 'zaplatili'],
      future: ['zaplatím', 'zaplatíš', 'zaplatí', 'zaplatíme', 'zaplatíte', 'zaplatí'],
    },
    pronunciations: {
      present: ['', '', '', '', '', ''],
      past: ['заплатил йэм', 'заплатил йси', 'заплатил', 'заплатили йсмэ', 'заплатили йстэ', 'заплатили'],
      future: ['заплатим', 'заплатиш', 'заплати', 'заплатимэ', 'заплатитэ', 'заплати'],
    },
    notes: 'Совершенный вид. Глаголы совершенного вида не имеют настоящего времени. Будущее совпадает с формой настоящего несовершенного вида.',
  },
  {
    verbId: 'vb36',
    czech: 'Cestovat',
    russian: 'Путешествовать',
    isPerfective: false,
    conjugations: {
      present: ['cestuji', 'cestuješ', 'cestuje', 'cestujeme', 'cestujete', 'cestují'],
      past: ['cestoval jsem', 'cestoval jsi', 'cestoval', 'cestovali jsme', 'cestovali jste', 'cestovali'],
      future: ['budu cestovat', 'budeš cestovat', 'bude cestovat', 'budeme cestovat', 'budete cestovat', 'budou cestovat'],
    },
    pronunciations: {
      present: ['цэстуйи', 'цэстуеш', 'цэстуэ', 'цэстуемэ', 'цэстуетэ', 'цэстуйи'],
      past: ['цэстовал йэм', 'цэстовал йси', 'цэстовал', 'цэстовали йсмэ', 'цэстовали йстэ', 'цэстовали'],
      future: ['буду цэстоват', 'будэш цэстоват', 'будэ цэстоват', 'будэмэ цэстоват', 'будэтэ цэстоват', 'будоу цэстоват'],
    },
  },
  {
    verbId: 'vb37',
    czech: 'Zapomínat',
    russian: 'Забывать',
    isPerfective: false,
    conjugations: {
      present: ['zapomínám', 'zapomínáš', 'zapomíná', 'zapomínáme', 'zapomínáte', 'zapomínají'],
      past: ['zapomínal jsem', 'zapomínal jsi', 'zapomínal', 'zapomínali jsme', 'zapomínali jste', 'zapomínali'],
      future: ['budu zapomínat', 'budeš zapomínat', 'bude zapomínat', 'budeme zapomínat', 'budete zapomínat', 'budou zapomínat'],
    },
    pronunciations: {
      present: ['запоминам', 'запоминаш', 'запомина', 'запоминамэ', 'запоминатэ', 'запоминайи'],
      past: ['запоминал йэм', 'запоминал йси', 'запоминал', 'запоминали йсмэ', 'запоминали йстэ', 'запоминали'],
      future: ['буду запоминат', 'будэш запоминат', 'будэ запоминат', 'будэмэ запоминат', 'будэтэ запоминат', 'будоу запоминат'],
    },
  },
  {
    verbId: 'vb38',
    czech: 'Zapomenout',
    russian: 'Забыть',
    isPerfective: true,
    conjugations: {
      present: ['—', '—', '—', '—', '—', '—'],
      past: ['zapomněl jsem', 'zapomněl jsi', 'zapomněl', 'zapomněli jsme', 'zapomněli jste', 'zapomněli'],
      future: ['zapomenu', 'zapomeneš', 'zapomene', 'zapomeneme', 'zapomenete', 'zapomenou'],
    },
    pronunciations: {
      present: ['', '', '', '', '', ''],
      past: ['запомнэл йэм', 'запомнэл йси', 'запомнэл', 'запомнэли йсмэ', 'запомнэли йстэ', 'запомнэли'],
      future: ['запомэну', 'запомэнэш', 'запомэнэ', 'запомэнэмэ', 'запомэнэтэ', 'запомэноу'],
    },
    notes: 'Совершенный вид. Неправильный глагол. Будущее: zapomenu, zapomeneš, zapomene (от корня zapomen-). Прошедшее: zapomněl (от корня zapomně-).',
  },
  {
    verbId: 'vb39',
    czech: 'Stát se',
    russian: 'Становиться',
    isPerfective: false,
    conjugations: {
      present: ['stávám se', 'stáváš se', 'stává se', 'stáváme se', 'stáváte se', 'stávají se'],
      past: ['stal jsem se', 'stal jsi se', 'stal se', 'stali jsme se', 'stali jste se', 'stali se'],
      future: ['stanu se', 'staneš se', 'stane se', 'staneme se', 'stanete se', 'stanou se'],
    },
    pronunciations: {
      present: ['ставам сэ', 'ставаш сэ', 'става сэ', 'ставамэ сэ', 'ставатэ сэ', 'ставайи сэ'],
      past: ['стал йэм сэ', 'стал йси сэ', 'стал сэ', 'стали йсмэ сэ', 'стали йстэ сэ', 'стали сэ'],
      future: ['стану сэ', 'станэш сэ', 'станэ сэ', 'станэмэ сэ', 'станэтэ сэ', 'станоу сэ'],
    },
    notes: 'Возвратный глагол с частицей se. Настоящее время: stávám se. Будущее: stanu se (от корня stan-).',
  },
  {
    verbId: 'vb40',
    czech: 'Přijít',
    russian: 'Прийти',
    isPerfective: true,
    conjugations: {
      present: ['—', '—', '—', '—', '—', '—'],
      past: ['přišel jsem', 'přišel jsi', 'přišel', 'přišli jsme', 'přišli jste', 'přišli'],
      future: ['přijdu', 'přijdeš', 'přijde', 'přijdeme', 'přijdete', 'přijdou'],
    },
    pronunciations: {
      present: ['', '', '', '', '', ''],
      past: ['пшишэл йэм', 'пшишэл йси', 'пшишэл', 'пшишли йсмэ', 'пшишли йстэ', 'пшишли'],
      future: ['пшийду', 'пшийдэш', 'пшийдэ', 'пшийдэмэ', 'пшийдэтэ', 'пшийдоу'],
    },
    notes: 'Совершенный вид. Неправильный глагол. Будущее: přijdu (от корня přijd-). Прошедшее: přišel (от корня přiš-). Př- произносится как «пш».',
  },
  {
    verbId: 'vb41',
    czech: 'Pamatovat si',
    russian: 'Помнить',
    isPerfective: false,
    conjugations: {
      present: ['pamatuji si', 'pamatuješ si', 'pamatuje si', 'pamatujeme si', 'pamatujete si', 'pamatují si'],
      past: ['pamatoval jsem si', 'pamatoval jsi si', 'pamatoval si', 'pamatovali jsme si', 'pamatovali jste si', 'pamatovali si'],
      future: ['budu si pamatovat', 'budeš si pamatovat', 'bude si pamatovat', 'budeme si pamatovat', 'budete si pamatovat', 'budou si pamatovat'],
    },
    pronunciations: {
      present: ['паматуйи си', 'паматуеш си', 'паматуэ си', 'паматуэмэ си', 'паматуетэ си', 'паматуйи си'],
      past: ['паматовал йэм си', 'паматовал йси си', 'паматовал си', 'паматовали йсмэ си', 'паматовали йстэ си', 'паматовали си'],
      future: ['буду си паматоват', 'будэш си паматоват', 'будэ си паматоват', 'будэмэ си паматоват', 'будэтэ си паматоват', 'будоу си паматоват'],
    },
    notes: 'Возвратный глагол с частицей si. В предложении si стоит после глагола: pamatuji si.',
  },
  {
    verbId: 'vb42',
    czech: 'Odejít',
    russian: 'Уйти',
    isPerfective: true,
    conjugations: {
      present: ['—', '—', '—', '—', '—', '—'],
      past: ['odešel jsem', 'odešel jsi', 'odešel', 'odešli jsme', 'odešli jste', 'odešli'],
      future: ['odejdu', 'odejdeš', 'odejde', 'odejdeme', 'odejdete', 'odejdou'],
    },
    pronunciations: {
      present: ['', '', '', '', '', ''],
      past: ['одэшэл йэм', 'одэшэл йси', 'одэшэл', 'одэшли йсмэ', 'одэшли йстэ', 'одэшли'],
      future: ['одэйду', 'одэйдэш', 'одэйдэ', 'одэйдэмэ', 'одэйдэтэ', 'одэйдоу'],
    },
    notes: 'Совершенный вид. Неправильный глагол. Будущее: odejdu (от корня ojd-). Прошедшее: odešel (от корня odeš-).',
  },
  {
    verbId: 'vb43',
    czech: 'Sednout si',
    russian: 'Сесть',
    isPerfective: true,
    conjugations: {
      present: ['—', '—', '—', '—', '—', '—'],
      past: ['sedl jsem si', 'sedl jsi si', 'sedl si', 'sedli jsme si', 'sedli jste si', 'sedli si'],
      future: ['sednu si', 'sedneš si', 'sedne si', 'sedneme si', 'sednete si', 'sednou si'],
    },
    pronunciations: {
      present: ['', '', '', '', '', ''],
      past: ['сэдл йэм си', 'сэдл йси си', 'сэдл си', 'сэдли йсмэ си', 'сэдли йстэ си', 'сэдли си'],
      future: ['сэдну си', 'сэднэш си', 'сэднэ си', 'сэднэмэ си', 'сэднэтэ си', 'сэдноу си'],
    },
    notes: 'Совершенный вид. Возвратный глагол с частицей si. Будущее совпадает с формой настоящего несовершенного вида. Несовершенный пара: sedat si.',
  },
  {
    verbId: 'vb44',
    czech: 'Umět',
    russian: 'Уметь / Мочь',
    isPerfective: false,
    conjugations: {
      present: ['umím', 'umíš', 'umí', 'umíme', 'umíte', 'umí'],
      past: ['uměl jsem', 'uměl jsi', 'uměl', 'uměli jsme', 'uměli jste', 'uměli'],
      future: ['budu umět', 'budeš umět', 'bude umět', 'budeme umět', 'budete umět', 'budou umět'],
    },
    pronunciations: {
      present: ['умим', 'умиш', 'умим', 'умимэ', 'умитэ', 'умим'],
      past: ['умэл йэм', 'умэл йси', 'умэл', 'умэли йсмэ', 'умэли йстэ', 'умэли'],
      future: ['буду умэт', 'будэш умэт', 'будэ умэт', 'будэмэ умэт', 'будэтэ умэт', 'будоу умэт'],
    },
    notes: 'Неправильный глагол. Прошедшее: uměl, uměli (с чередованием ě).',
  },
  {
    verbId: 'vb45',
    czech: 'Poslouchat',
    russian: 'Слушать',
    isPerfective: false,
    conjugations: {
      present: ['poslouchám', 'posloucháš', 'poslouchá', 'posloucháme', 'posloucháte', 'poslouchají'],
      past: ['poslouchal jsem', 'poslouchal jsi', 'poslouchal', 'poslouchali jsme', 'poslouchali jste', 'poslouchali'],
      future: ['budu poslouchat', 'budeš poslouchat', 'bude poslouchat', 'budeme poslouchat', 'budete poslouchat', 'budou poslouchat'],
    },
    pronunciations: {
      present: ['послоухам', 'послоухаш', 'послоуха', 'послоухамэ', 'послоухатэ', 'послоухайи'],
      past: ['послоухал йэм', 'послоухал йси', 'послоухал', 'послоухали йсмэ', 'послоухали йстэ', 'послоухали'],
      future: ['буду послоухат', 'будэш послоухат', 'будэ послоухат', 'будэмэ послоухат', 'будэтэ послоухат', 'будоу послоухат'],
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
