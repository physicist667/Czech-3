export interface NounDeclension {
  wordId: string;
  czech: string;
  russian: string;
  gender: 'masculine' | 'feminine' | 'neuter' | 'adjective';
  isAnimate: boolean;
  singular: string[];
  plural: string[];
  singularPron: string[];
  pluralPron: string[];
  notes?: string;
  isPluralOnly?: boolean;
}

export const caseLabels = [
  { key: 'nom', russian: 'Именительный', czech: 'Nominativ', question: 'кто? что?' },
  { key: 'gen', russian: 'Родительный', czech: 'Genitiv', question: 'кого? чего?' },
  { key: 'dat', russian: 'Дательный', czech: 'Dativ', question: 'кому? чему?' },
  { key: 'acc', russian: 'Винительный', czech: 'Akuzativ', question: 'кого? что?' },
  { key: 'voc', russian: 'Звательный', czech: 'Vokativ', question: 'о!' },
  { key: 'loc', russian: 'Местный', czech: 'Lokál', question: 'о ком? о чём?' },
  { key: 'ins', russian: 'Творительный', czech: 'Instrumentál', question: 'кем? чем?' },
];

const empty7 = ['', '', '', '', '', '', ''];

// ========================
// СЕМЬЯ (Family) — fm1-fm25
// ========================
const familyDeclensions: NounDeclension[] = [
  {
    wordId: 'fm1', czech: 'Matka', russian: 'Мать',
    gender: 'feminine', isAnimate: true,
    singular: ['matka', 'matky', 'matce', 'matku', 'matko', 'matce', 'matkou'],
    plural: ['matky', 'matek', 'matkám', 'matky', 'matky', 'matkách', 'matkami'],
    singularPron: ['матка', 'матки', 'матцэ', 'матку', 'матко', 'матцэ', 'маткоу'],
    pluralPron: ['матки', 'матэк', 'маткам', 'матки', 'матки', 'матках', 'матками'],
  },
  {
    wordId: 'fm2', czech: 'Otec', russian: 'Отец',
    gender: 'masculine', isAnimate: true,
    singular: ['otec', 'otce', 'otci', 'otce', 'otče', 'otci', 'otcem'],
    plural: ['otcové', 'otců', 'otcům', 'otce', 'otcové', 'otcích', 'otci'],
    singularPron: ['отэц', 'отцэ', 'отци', 'отцэ', 'отчэ', 'отци', 'отцэм'],
    pluralPron: ['отцовэ', 'отцув', 'отцум', 'отцэ', 'отцовэ', 'отцах', 'отци'],
  },
  {
    wordId: 'fm3', czech: 'Bratr', russian: 'Брат',
    gender: 'masculine', isAnimate: true,
    singular: ['bratr', 'bratra', 'bratrovi', 'bratra', 'bratře', 'bratrovi', 'bratrem'],
    plural: ['bratři', 'bratrů', 'bratrům', 'bratry', 'bratři', 'bratrech', 'bratry'],
    singularPron: ['братр', 'брата', 'братрови', 'брата', 'бржэ', 'братрови', 'брарэм'],
    pluralPron: ['брати', 'бартрув', 'бартрум', 'батри', 'брати', 'бартрех', 'батри'],
  },
  {
    wordId: 'fm4', czech: 'Sestra', russian: 'Сестра',
    gender: 'feminine', isAnimate: true,
    singular: ['sestra', 'sestry', 'sestře', 'sestru', 'sestro', 'sestře', 'sestrou'],
    plural: ['sestry', 'sester', 'sestrám', 'sestry', 'sestry', 'sestrách', 'sestrami'],
    singularPron: ['сэстра', 'сэстри', 'сэстржэ', 'сэстру', 'сэстро', 'сэстржэ', 'сэстроу'],
    pluralPron: ['сэстри', 'сэстэр', 'сэстрам', 'сэстри', 'сэстри', 'сэстрах', 'сэстрами'],
  },
  {
    wordId: 'fm5', czech: 'Dítě', russian: 'Ребёнок',
    gender: 'neuter', isAnimate: true,
    singular: ['dítě', 'dítěte', 'dítěti', 'dítě', 'dítě', 'dítěti', 'dítětem'],
    plural: ['děti', 'dětí', 'dětem', 'děti', 'děti', 'dětech', 'dětmi'],
    singularPron: ['дитэ', 'дитэтэ', 'дитэти', 'дитэ', 'дитэ', 'дитэти', 'дитэтэм'],
    pluralPron: ['дэти', 'дити', 'дэтэм', 'дэти', 'дэти', 'дэтех', 'дитми'],
  },
  {
    wordId: 'fm6', czech: 'Manžel', russian: 'Муж',
    gender: 'masculine', isAnimate: true,
    singular: ['manžel', 'manžela', 'manželovi', 'manžela', 'manželi', 'manželovi', 'manželem'],
    plural: ['manželé', 'manželů', 'manželům', 'manžele', 'manželé', 'manželích', 'manželi'],
    singularPron: ['манжэл', 'манжэла', 'манжэлови', 'манжэла', 'манжэли', 'манжэлови', 'манжэлэм'],
    pluralPron: ['манжелэ', 'манжэлув', 'манжэлум', 'манжэлэ', 'манжелэ', 'манжэлих', 'манжэли'],
  },
  {
    wordId: 'fm7', czech: 'Manželka', russian: 'Жена',
    gender: 'feminine', isAnimate: true,
    singular: ['manželka', 'manželky', 'manželce', 'manželku', 'manželko', 'manželce', 'manželkou'],
    plural: ['manželky', 'manželek', 'manželkám', 'manželky', 'manželky', 'manželkách', 'manželkami'],
    singularPron: ['манжелка', 'манжелки', 'манжелцэ', 'манжелку', 'манжелко', 'манжелцэ', 'манжелкоу'],
    pluralPron: ['манжелки', 'манжэлэк', 'манжелкам', 'манжелки', 'манжелки', 'манжелках', 'манжелками'],
  },
  {
    wordId: 'fm8', czech: 'Dědeček', russian: 'Дедушка',
    gender: 'masculine', isAnimate: true,
    singular: ['dědeček', 'dědečka', 'dědečkovi', 'dědečka', 'dědečku', 'dědečkovi', 'dědečkem'],
    plural: ['dědečci', 'dědečků', 'dědečkům', 'dědečky', 'dědečci', 'dědečcích', 'dědečky'],
    singularPron: ['дэдэчэк', 'дэдэчка', 'дэдэчкови', 'дэдэчка', 'дэдэчку', 'дэдэчкови', 'дэдэчкэм'],
    pluralPron: ['дэдэчци', 'дэдэчкув', 'дэдэчкум', 'дэдэчки', 'дэдэчци', 'дэдэчцих', 'дэдэчки'],
  },
  {
    wordId: 'fm9', czech: 'Babička', russian: 'Бабушка',
    gender: 'feminine', isAnimate: true,
    singular: ['babička', 'babičky', 'babičce', 'babičku', 'babičko', 'babičce', 'babičkou'],
    plural: ['babičky', 'babiček', 'babičkám', 'babičky', 'babičky', 'babičkách', 'babičkami'],
    singularPron: ['бабичка', 'бабички', 'бабичцэ', 'бабичку', 'бабичко', 'бабичцэ', 'бабичкоу'],
    pluralPron: ['бабички', 'бабичэк', 'бабичкам', 'бабички', 'бабички', 'бабичках', 'бабичками'],
  },
  {
    wordId: 'fm10', czech: 'Syn', russian: 'Сын',
    gender: 'masculine', isAnimate: true,
    singular: ['syn', 'syna', 'synovi', 'syna', 'syne', 'synovi', 'synem'],
    plural: ['synové', 'synů', 'synům', 'syny', 'synové', 'synech', 'syny'],
    singularPron: ['сын', 'сина', 'синови', 'сина', 'сунэ', 'синови', 'сунэм'],
    pluralPron: ['синовэ', 'синув', 'синум', 'сини', 'синовэ', 'синэх', 'сини'],
  },
  {
    wordId: 'fm11', czech: 'Dcera', russian: 'Дочь',
    gender: 'feminine', isAnimate: true,
    singular: ['dcera', 'dcery', 'dceři', 'dceru', 'dcero', 'dceři', 'dcerou'],
    plural: ['dcery', 'dcer', 'dcerám', 'dcery', 'dcery', 'dcerách', 'dcerami'],
    singularPron: ['дцэра', 'дцэри', 'дцэржи', 'дцэру', 'дцэро', 'дцэржи', 'дцэроу'],
    pluralPron: ['дцэри', 'дцэр', 'дцэрам', 'дцэри', 'дцэри', 'дцэрах', 'дцэрами'],
  },
  {
    wordId: 'fm12', czech: 'Rodina', russian: 'Семья',
    gender: 'feminine', isAnimate: false,
    singular: ['rodina', 'rodiny', 'rodině', 'rodinu', 'rodino', 'rodině', 'rodinou'],
    plural: ['rodiny', 'rodin', 'rodinám', 'rodiny', 'rodiny', 'rodinách', 'rodinami'],
    singularPron: ['родина', 'родини', 'родинэ', 'родину', 'родино', 'родинэ', 'родиноу'],
    pluralPron: ['родини', 'родин', 'родинам', 'родини', 'родини', 'родинах', 'родинами'],
  },
  {
    wordId: 'fm13', czech: 'Strýc', russian: 'Дядя',
    gender: 'masculine', isAnimate: true,
    singular: ['strýc', 'strýce', 'strýci', 'strýce', 'strýci', 'strýci', 'strýcem'],
    plural: ['strýcové', 'strýců', 'strýcům', 'strýce', 'strýcové', 'strýcích', 'strýci'],
    singularPron: ['стрыц', 'стрыцэ', 'стрыци', 'стрыцэ', 'стрыци', 'стрыци', 'стрыцэм'],
    pluralPron: ['стрыцовэ', 'стрыцув', 'стрыцум', 'стрыцэ', 'стрыцовэ', 'стрыцих', 'стрыци'],
  },
  {
    wordId: 'fm14', czech: 'Teta', russian: 'Тётя',
    gender: 'feminine', isAnimate: true,
    singular: ['teta', 'tety', 'tetě', 'tetu', 'teto', 'tetě', 'tetou'],
    plural: ['tety', 'tet', 'tétám', 'tety', 'tety', 'tétách', 'tétami'],
    singularPron: ['тэта', 'тэти', 'тэтэ', 'тэту', 'тэто', 'тэтэ', 'тэтоу'],
    pluralPron: ['тэти', 'тэт', 'тэтам', 'тэти', 'тэти', 'тэтах', 'тэтами'],
  },
  {
    wordId: 'fm15', czech: 'Bratranec', russian: 'Двоюродный брат',
    gender: 'masculine', isAnimate: true,
    singular: ['bratranec', 'bratrance', 'bratranci', 'bratrance', 'bratrance', 'bratranci', 'bratancem'],
    plural: ['bratranci', 'bratranců', 'bratrancům', 'bratrance', 'bratranci', 'bratrancích', 'bratranci'],
    singularPron: ['братранэц', 'батанцэ', 'батанци', 'батанцэ', 'батанцэ', 'батанци', 'батанцэм'],
    pluralPron: ['батанци', 'батанцув', 'батанцум', 'батанцэ', 'батанци', 'батанцих', 'батанци'],
  },
  {
    wordId: 'fm20', czech: 'Rodiče', russian: 'Родители',
    gender: 'masculine', isAnimate: true, isPluralOnly: true,
    singular: empty7,
    plural: ['rodiče', 'rodičů', 'rodičům', 'rodiče', 'rodiče', 'rodičích', 'rodiči'],
    singularPron: empty7,
    pluralPron: ['родичэ', 'родичув', 'родичум', 'родичэ', 'родичэ', 'родичих', 'родичи'],
  },
  {
    wordId: 'fm21', czech: 'Prarodiče', russian: 'Бабушка и дедушка',
    gender: 'masculine', isAnimate: true, isPluralOnly: true,
    singular: empty7,
    plural: ['prarodiče', 'prarodičů', 'prarodičům', 'prarodiče', 'prarodiče', 'prarodičích', 'prarodiči'],
    singularPron: empty7,
    pluralPron: ['прородичэ', 'прородичув', 'прородичум', 'прородичэ', 'прородичэ', 'прородичих', 'прородичи'],
  },
];

// ========================
// ЕДА И НАПИТКИ (Food) — f1-f20
// ========================
const foodDeclensions: NounDeclension[] = [
  {
    wordId: 'f1', czech: 'Chléb', russian: 'Хлеб',
    gender: 'masculine', isAnimate: false,
    singular: ['chléb', 'chleba', 'chlebu', 'chléb', 'chlebe', 'chlebu', 'chlebem'],
    plural: ['chleby', 'chlebů', 'chlebům', 'chleby', 'chleby', 'chlebech', 'chleby'],
    singularPron: ['хлэб', 'хлэба', 'хлэбу', 'хлэб', 'хлэбэ', 'хлэбу', 'хлэбэм'],
    pluralPron: ['хлэби', 'хлэбув', 'хлэбум', 'хлэби', 'хлэби', 'хлэбэх', 'хлэби'],
  },
  {
    wordId: 'f2', czech: 'Maso', russian: 'Мясо',
    gender: 'neuter', isAnimate: false,
    singular: ['maso', 'masa', 'masu', 'maso', 'maso', 'masu', 'masem'],
    plural: ['masa', 'mas', 'masům', 'masa', 'masa', 'mazech', 'masy'],
    singularPron: ['масо', 'маса', 'масу', 'масо', 'масо', 'масу', 'масэм'],
    pluralPron: ['маса', 'мас', 'масум', 'маса', 'маса', 'мазэх', 'маси'],
  },
  {
    wordId: 'f3', czech: 'Rýže', russian: 'Рис',
    gender: 'feminine', isAnimate: false,
    singular: ['rýže', 'rýže', 'rýži', 'rýži', 'rýže', 'rýži', 'rýží'],
    plural: ['rýže', 'rýží', 'rýžím', 'rýže', 'rýže', 'rýžích', 'rýžemi'],
    singularPron: ['рыжэ', 'рыжэ', 'рыжи', 'рыжи', 'рыжэ', 'рыжи', 'рыжи'],
    pluralPron: ['рыжэ', 'рыжи', 'рыжим', 'рыжэ', 'рыжэ', 'рыжих', 'рыжэми'],
  },
  {
    wordId: 'f4', czech: 'Brambory', russian: 'Картофель',
    gender: 'neuter', isAnimate: false,
    singular: ['brambor', 'bramboru', 'bramboru', 'brambor', 'brambore', 'bramboru', 'bramborem'],
    plural: ['brambory', 'brambor', 'bramborům', 'brambory', 'brambory', 'bramborách', 'bramborami'],
    singularPron: ['брамбор', 'брамбору', 'брамбору', 'брамбор', 'брамборэ', 'брамбору', 'брамборэм'],
    pluralPron: ['брамбори', 'брамбор', 'брамборум', 'брамбори', 'брамбори', 'брамборах', 'брамборами'],
  },
  {
    wordId: 'f5', czech: 'Sýr', russian: 'Сыр',
    gender: 'masculine', isAnimate: false,
    singular: ['sýr', 'sýra', 'sýru', 'sýr', 'sýre', 'sýru', 'sýrem'],
    plural: ['sýry', 'sýrů', 'sýrům', 'sýry', 'sýry', 'sýrech', 'sýry'],
    singularPron: ['сыр', 'сыра', 'сыру', 'сыр', 'сырэ', 'сыру', 'сырэм'],
    pluralPron: ['сыри', 'сырув', 'сырум', 'сыри', 'сыри', 'сырэх', 'сыри'],
  },
  {
    wordId: 'f6', czech: 'Mléko', russian: 'Молоко',
    gender: 'neuter', isAnimate: false,
    singular: ['mléko', 'mléka', 'mléku', 'mléko', 'mléko', 'mléku', 'mlékem'],
    plural: ['mléka', 'mlék', 'mlékům', 'mléka', 'mléka', 'mlécech', 'mléky'],
    singularPron: ['млэко', 'млэка', 'млэку', 'млэко', 'млэко', 'млэку', 'млэкэм'],
    pluralPron: ['млэка', 'млэк', 'млэкум', 'млэка', 'млэка', 'млэцэх', 'млэки'],
  },
  {
    wordId: 'f7', czech: 'Voda', russian: 'Вода',
    gender: 'feminine', isAnimate: false,
    singular: ['voda', 'vody', 'vodě', 'vodu', 'vodo', 'vodě', 'vodou'],
    plural: ['vody', 'vod', 'vodám', 'vody', 'vody', 'vodách', 'vodami'],
    singularPron: ['вода', 'води', 'водэ', 'воду', 'водо', 'водэ', 'водоу'],
    pluralPron: ['води', 'вод', 'водам', 'води', 'води', 'водах', 'водами'],
  },
  {
    wordId: 'f8', czech: 'Pivo', russian: 'Пиво',
    gender: 'neuter', isAnimate: false,
    singular: ['pivo', 'piva', 'pivu', 'pivo', 'pivo', 'pivu', 'pivem'],
    plural: ['piva', 'piv', 'pivům', 'piva', 'piva', 'pivách', 'pivy'],
    singularPron: ['пиво', 'пива', 'пиву', 'пиво', 'пиво', 'пиву', 'пивэм'],
    pluralPron: ['пива', 'пив', 'пивум', 'пива', 'пива', 'пивах', 'пиви'],
  },
  {
    wordId: 'f9', czech: 'Čaj', russian: 'Чай',
    gender: 'masculine', isAnimate: false,
    singular: ['čaj', 'čaje', 'čaji', 'čaj', 'čaji', 'čaji', 'čajem'],
    plural: ['čaje', 'čajů', 'čajům', 'čaje', 'čaje', 'čajích', 'čaji'],
    singularPron: ['чай', 'чайэ', 'чайи', 'чай', 'чайи', 'чайи', 'чайэм'],
    pluralPron: ['чайэ', 'чайув', 'чайум', 'чайэ', 'чайэ', 'чайих', 'чайи'],
  },
  {
    wordId: 'f10', czech: 'Káva', russian: 'Кофе',
    gender: 'feminine', isAnimate: false,
    singular: ['káva', 'kávy', 'kávě', 'kávu', 'kávo', 'kávě', 'kávou'],
    plural: ['kávy', 'káv', 'kávám', 'kávy', 'kávy', 'kávách', 'kávami'],
    singularPron: ['кава', 'кави', 'кавэ', 'каву', 'каво', 'кавэ', 'кавоу'],
    pluralPron: ['кави', 'кав', 'кавам', 'кави', 'кави', 'ках', 'кавами'],
  },
  {
    wordId: 'f11', czech: 'Jablko', russian: 'Яблоко',
    gender: 'neuter', isAnimate: false,
    singular: ['jablko', 'jablka', 'jablku', 'jablko', 'jablko', 'jablku', 'jablkem'],
    plural: ['jablka', 'jablek', 'jablkům', 'jablka', 'jablka', 'jablkách', 'jablky'],
    singularPron: ['яблко', 'яблка', 'яблку', 'яблко', 'яблко', 'яблку', 'яблкэм'],
    pluralPron: ['яблка', 'яблэк', 'яблкум', 'яблка', 'яблка', 'яблках', 'яблки'],
  },
  {
    wordId: 'f12', czech: 'Ryba', russian: 'Рыба',
    gender: 'feminine', isAnimate: true,
    singular: ['ryba', 'ryby', 'rybě', 'rybu', 'rybo', 'rybě', 'rybou'],
    plural: ['ryby', 'ryb', 'rybám', 'ryby', 'ryby', 'rybách', 'rybami'],
    singularPron: ['рыба', 'рыби', 'рыбэ', 'рыбу', 'рыбо', 'рыбэ', 'рыбоу'],
    pluralPron: ['рыби', 'рыб', 'рыбам', 'рыби', 'рыби', 'рыбах', 'рыбами'],
  },
  {
    wordId: 'f13', czech: 'Kuře', russian: 'Курица',
    gender: 'neuter', isAnimate: true,
    singular: ['kuře', 'kuřete', 'kuřeti', 'kuře', 'kuře', 'kuřeti', 'kuřetem'],
    plural: ['kuřata', 'kuřat', 'kuřatům', 'kuřata', 'kuřata', 'kuřatech', 'kuřaty'],
    singularPron: ['куржэ', 'куржэтэ', 'куржэти', 'куржэ', 'куржэ', 'куржэти', 'куржэтэм'],
    pluralPron: ['куржата', 'куржат', 'куржатум', 'куржата', 'куржата', 'куржатэх', 'куржати'],
  },
  {
    wordId: 'f14', czech: 'Salát', russian: 'Салат',
    gender: 'masculine', isAnimate: false,
    singular: ['salát', 'salátu', 'salátu', 'salát', 'saláte', 'salátu', 'salátem'],
    plural: ['saláty', 'salátů', 'salátům', 'saláty', 'saláty', 'salátech', 'saláty'],
    singularPron: ['салат', 'салату', 'салату', 'салат', 'салатэ', 'салату', 'салатэм'],
    pluralPron: ['салати', 'салатув', 'салатум', 'салати', 'салати', 'салатэх', 'салати'],
  },
  {
    wordId: 'f15', czech: 'Polévka', russian: 'Суп',
    gender: 'feminine', isAnimate: false,
    singular: ['polévka', 'polévky', 'polévce', 'polévku', 'polévko', 'polévce', 'polévkou'],
    plural: ['polévky', 'polévek', 'polévkám', 'polévky', 'polévky', 'polévkách', 'polévkami'],
    singularPron: ['полэвка', 'полэвки', 'полэвцэ', 'полэвку', 'полэвко', 'полэвцэ', 'полэвкоу'],
    pluralPron: ['полэвки', 'полэвэк', 'полэвкам', 'полэвки', 'полэвки', 'полэвках', 'полэвками'],
  },
  {
    wordId: 'f16', czech: 'Cukr', russian: 'Сахар',
    gender: 'masculine', isAnimate: false,
    singular: ['cukr', 'cukru', 'cukru', 'cukr', 'cukre', 'cukru', 'cukrem'],
    plural: ['cukry', 'cukrů', 'cukrům', 'cukry', 'cukry', 'cukrech', 'cukry'],
    singularPron: ['цукр', 'цукру', 'цукру', 'цукр', 'цукрэ', 'цукру', 'цукрэм'],
    pluralPron: ['цукри', 'цукрув', 'цукрум', 'цукри', 'цукри', 'цукрэх', 'цукри'],
  },
  {
    wordId: 'f17', czech: 'Sůl', russian: 'Соль',
    gender: 'feminine', isAnimate: false,
    singular: ['sůl', 'soli', 'soli', 'sůl', 'soli', 'soli', 'solí'],
    plural: ['soli', 'solí', 'solím', 'soli', 'soli', 'solích', 'solmi'],
    singularPron: ['сул', 'соли', 'соли', 'сул', 'соли', 'соли', 'соли'],
    pluralPron: ['соли', 'соли', 'солим', 'соли', 'соли', 'солих', 'солми'],
  },
  {
    wordId: 'f18', czech: 'Vejce', russian: 'Яйцо',
    gender: 'neuter', isAnimate: false,
    singular: ['vejce', 'vejce', 'vejcí', 'vejce', 'vejce', 'vejcích', 'vajíčkem'],
    plural: ['vejce', 'vajec', 'vejci', 'vejce', 'vejce', 'vejcích', 'vejci'],
    singularPron: ['вэйцэ', 'вэйцэ', 'вэйци', 'вэйцэ', 'вэйцэ', 'вэйцих', 'вайичкэм'],
    pluralPron: ['вэйцэ', 'вайцэц', 'вэйци', 'вэйцэ', 'вэйцэ', 'вэйцих', 'вэйци'],
  },
  {
    wordId: 'f19', czech: 'Máslo', russian: 'Масло (сливочн.)',
    gender: 'neuter', isAnimate: false,
    singular: ['máslo', 'másla', 'máslu', 'máslo', 'máslo', 'máslu', 'máslem'],
    plural: ['másla', 'másel', 'máslům', 'másla', 'másla', 'másech', 'másly'],
    singularPron: ['масло', 'масла', 'маслу', 'масло', 'масло', 'маслу', 'маслэм'],
    pluralPron: ['масла', 'масэл', 'маслум', 'масла', 'масла', 'масэх', 'масли'],
  },
  {
    wordId: 'f20', czech: 'Džus', russian: 'Сок',
    gender: 'masculine', isAnimate: false,
    singular: ['džus', 'džusu', 'džusu', 'džus', 'džuse', 'džusu', 'džusem'],
    plural: ['džusy', 'džusů', 'džusům', 'džusy', 'džusy', 'džusech', 'džusy'],
    singularPron: ['джус', 'джусу', 'джусу', 'джус', 'джусэ', 'джусу', 'джусэм'],
    pluralPron: ['джуси', 'джусув', 'джусум', 'джуси', 'джуси', 'джусэх', 'джуси'],
  },
];

// ========================
// ТРАНСПОРТ (Transport) — t1-t20
// ========================
const transportDeclensions: NounDeclension[] = [
  {
    wordId: 't1', czech: 'Auto', russian: 'Машина',
    gender: 'neuter', isAnimate: false,
    singular: ['auto', 'auta', 'autu', 'auto', 'auto', 'autu', 'autem'],
    plural: ['auta', 'aut', 'autům', 'auta', 'auta', 'autech', 'auty'],
    singularPron: ['ауто', 'аута', 'ауту', 'ауто', 'ауто', 'ауту', 'аутэм'],
    pluralPron: ['аута', 'аут', 'аутум', 'аута', 'аута', 'аутэх', 'аути'],
  },
  {
    wordId: 't2', czech: 'Autobus', russian: 'Автобус',
    gender: 'masculine', isAnimate: false,
    singular: ['autobus', 'autobusu', 'autobusu', 'autobus', 'autobuse', 'autobusu', 'autobusem'],
    plural: ['autobusy', 'autobusů', 'autobusům', 'autobusy', 'autobusy', 'autobusech', 'autobusy'],
    singularPron: ['аутобус', 'аутобусу', 'аутобусу', 'аутобус', 'аутобусэ', 'аутобусу', 'аутобусэм'],
    pluralPron: ['аутобуси', 'аутобусув', 'аутобусум', 'аутобуси', 'аутобуси', 'аутобусэх', 'аутобуси'],
  },
  {
    wordId: 't3', czech: 'Vlak', russian: 'Поезд',
    gender: 'masculine', isAnimate: false,
    singular: ['vlak', 'vlaku', 'vlaku', 'vlak', 'vlaku', 'vlaku', 'vlakem'],
    plural: ['vlaky', 'vlaků', 'vlakům', 'vlaky', 'vlaky', 'vlacích', 'vlaky'],
    singularPron: ['влак', 'влаку', 'влаку', 'влак', 'влаку', 'влаку', 'влакэм'],
    pluralPron: ['влаки', 'влакув', 'влакум', 'влаки', 'влаки', 'влацих', 'влаки'],
  },
  {
    wordId: 't4', czech: 'Letadlo', russian: 'Самолёт',
    gender: 'neuter', isAnimate: false,
    singular: ['letadlo', 'letadla', 'letadlu', 'letadlo', 'letadlo', 'letadlu', 'letadlem'],
    plural: ['letadla', 'letadel', 'letadlům', 'letadla', 'letadla', 'letadlech', 'letadly'],
    singularPron: ['летадло', 'летадла', 'летадлу', 'летадло', 'летадло', 'летадлу', 'летадлэм'],
    pluralPron: ['летадла', 'летадэл', 'летадлум', 'летадла', 'летадла', 'летадлэх', 'летадли'],
  },
  {
    wordId: 't5', czech: 'Metro', russian: 'Метро',
    gender: 'neuter', isAnimate: false,
    singular: ['metro', 'metra', 'metru', 'metro', 'metro', 'metru', 'metrem'],
    plural: ['metra', 'metr', 'metrům', 'metra', 'metra', 'metrech', 'metry'],
    singularPron: ['метро', 'метра', 'метру', 'метро', 'метро', 'метру', 'метрэм'],
    pluralPron: ['метра', 'метр', 'метрум', 'метра', 'метра', 'метрэх', 'метри'],
  },
  {
    wordId: 't6', czech: 'Kolo', russian: 'Велосипед',
    gender: 'neuter', isAnimate: false,
    singular: ['kolo', 'kola', 'kolu', 'kolo', 'kolo', 'kolu', 'kolem'],
    plural: ['kola', 'kol', 'kolům', 'kola', 'kola', 'kolech', 'koly'],
    singularPron: ['коло', 'кола', 'колу', 'коло', 'коло', 'колу', 'колэм'],
    pluralPron: ['кола', 'кол', 'колум', 'кола', 'кола', 'колэх', 'коли'],
  },
  {
    wordId: 't7', czech: 'Taxi', russian: 'Такси',
    gender: 'neuter', isAnimate: false,
    singular: ['taxi', 'taxi', 'taxi', 'taxi', 'taxi', 'taxi', 'taxi'],
    plural: ['taxi', 'taxi', 'taxi', 'taxi', 'taxi', 'taxi', 'taxi'],
    singularPron: ['такси', 'такси', 'такси', 'такси', 'такси', 'такси', 'такси'],
    pluralPron: ['такси', 'такси', 'такси', 'такси', 'такси', 'такси', 'такси'],
    notes: 'Неизменяемое слово (не склоняется)',
  },
  {
    wordId: 't8', czech: 'Tramvaj', russian: 'Трамвай',
    gender: 'feminine', isAnimate: false,
    singular: ['tramvaj', 'tramvaje', 'tramvaji', 'tramvaj', 'tramvaji', 'tramvaji', 'tramvají'],
    plural: ['tramvaje', 'tramvají', 'tramvajím', 'tramvaje', 'tramvaje', 'tramvajích', 'tramvajemi'],
    singularPron: ['трамвай', 'трамвайэ', 'трамвайи', 'трамвай', 'трамвайи', 'трамвайи', 'трамвайи'],
    pluralPron: ['трамвайэ', 'трамвайи', 'трамвайим', 'трамвайэ', 'трамвайэ', 'трамвайих', 'трамвайэми'],
  },
  {
    wordId: 't10', czech: 'Nádraží', russian: 'Вокзал',
    gender: 'neuter', isAnimate: false,
    singular: ['nádraží', 'nádraží', 'nádraží', 'nádraží', 'nádraží', 'nádraží', 'nádražím'],
    plural: ['nádraží', 'nádraží', 'nádražím', 'nádraží', 'nádraží', 'nádražích', 'nádražími'],
    singularPron: ['надражи', 'надражи', 'надражи', 'надражи', 'надражи', 'надражи', 'надражим'],
    pluralPron: ['надражи', 'надражи', 'надражим', 'надражи', 'надражи', 'надражих', 'надражими'],
  },
  {
    wordId: 't12', czech: 'Stanice', russian: 'Станция',
    gender: 'feminine', isAnimate: false,
    singular: ['stanice', 'stanice', 'stanici', 'stanici', 'stanice', 'stanici', 'stanicí'],
    plural: ['stanice', 'stanic', 'stanicím', 'stanice', 'stanice', 'stanicích', 'stanicemi'],
    singularPron: ['станицэ', 'станицэ', 'станицы', 'станицы', 'станицэ', 'станицы', 'станицы'],
    pluralPron: ['станицэ', 'станиц', 'станицым', 'станицэ', 'станицэ', 'станицых', 'станицэми'],
  },
  {
    wordId: 't13', czech: 'Jízdenka', russian: 'Билет',
    gender: 'feminine', isAnimate: false,
    singular: ['jízdenka', 'jízdenky', 'ízdence', 'jízdenku', 'jízdenko', 'ízdence', 'jízdenkou'],
    plural: ['jízdenky', 'ízenek', 'jízdenkám', 'jízdenky', 'jízdenky', 'jízdenkách', 'jízdenkami'],
    singularPron: ['йиждэнка', 'йиждэнки', 'йиждэнцэ', 'йиждэнку', 'йиждэнко', 'йиждэнцэ', 'йиждэнкоу'],
    pluralPron: ['йиждэнки', 'йиждэнэк', 'йиждэнкам', 'йиждэнки', 'йиждэнки', 'йиждэнках', 'йиждэнками'],
  },
  {
    wordId: 't14', czech: 'Cesta', russian: 'Дорога',
    gender: 'feminine', isAnimate: false,
    singular: ['cesta', 'cesty', 'cestě', 'cestu', 'cesto', 'cestě', 'cestou'],
    plural: ['cesty', 'cest', 'cestám', 'cesty', 'cesty', 'cestách', 'cestami'],
    singularPron: ['цэста', 'цэсти', 'цэстэ', 'цэсту', 'цэсто', 'цэстэ', 'цэстоу'],
    pluralPron: ['цэсти', 'цэст', 'цэстам', 'цэсти', 'цэсти', 'цэстах', 'цэстами'],
  },
  {
    wordId: 't18', czech: 'Zastávka', russian: 'Остановка',
    gender: 'feminine', isAnimate: false,
    singular: ['zastávka', 'zastávky', 'zastávce', 'zastávku', 'zastávko', 'zastávce', 'zastávkou'],
    plural: ['zastávky', 'zastávek', 'zastávkám', 'zastávky', 'zastávky', 'zastávkách', 'zastávkami'],
    singularPron: ['заставка', 'заставки', 'заставцэ', 'заставку', 'заставко', 'заставцэ', 'заставкоу'],
    pluralPron: ['заставки', 'заставэк', 'заставкам', 'заставки', 'заставки', 'заставках', 'заставками'],
  },
  {
    wordId: 't19', czech: 'Řidič', russian: 'Водитель',
    gender: 'masculine', isAnimate: true,
    singular: ['řidič', 'řidiče', 'řidiči', 'řidiče', 'řidiči', 'řidiči', 'řidičem'],
    plural: ['řidiči', 'řidičů', 'řidičům', 'řidiče', 'řidiči', 'řidičích', 'řidiči'],
    singularPron: ['ржидич', 'ржидичэ', 'ржидичи', 'ржидичэ', 'ржидичи', 'ржидичи', 'ржидичэм'],
    pluralPron: ['ржидичи', 'ржидичув', 'ржидичум', 'ржидичэ', 'ржидичи', 'ржидичих', 'ржидичи'],
  },
];

// ========================
// В ГОРОДЕ (City) — ct1-ct25
// ========================
const cityDeclensions: NounDeclension[] = [
  {
    wordId: 'ct1', czech: 'Ulice', russian: 'Улица',
    gender: 'feminine', isAnimate: false,
    singular: ['ulice', 'ulice', 'ulici', 'ulici', 'ulice', 'ulici', 'ulicí'],
    plural: ['ulice', 'ulic', 'ulicím', 'ulice', 'ulice', 'ulicích', 'ulicemi'],
    singularPron: ['улицэ', 'улицэ', 'улицы', 'улицы', 'улицэ', 'улицы', 'улицы'],
    pluralPron: ['улицэ', 'улиц', 'улицым', 'улицэ', 'улицэ', 'улицых', 'улицэми'],
  },
  {
    wordId: 'ct3', czech: 'Dům', russian: 'Дом',
    gender: 'masculine', isAnimate: false,
    singular: ['dům', 'domu', 'domu', 'dům', 'dome', 'domu', 'domem'],
    plural: ['domy', 'domů', 'domům', 'domy', 'domy', 'domech', 'domy'],
    singularPron: ['дум', 'дому', 'дому', 'дум', 'домэ', 'дому', 'домэм'],
    pluralPron: ['доми', 'домув', 'домум', 'доми', 'доми', 'домэх', 'доми'],
  },
  {
    wordId: 'ct4', czech: 'Obchod', russian: 'Магазин',
    gender: 'masculine', isAnimate: false,
    singular: ['obchod', 'obchodu', 'obchodu', 'obchod', 'obchode', 'obchodu', 'obchodem'],
    plural: ['obchody', 'obchodů', 'obchodům', 'obchody', 'obchody', 'obchodech', 'obchody'],
    singularPron: ['обход', 'обходу', 'обходу', 'обход', 'обходэ', 'обходу', 'обходэм'],
    pluralPron: ['обходи', 'обходув', 'обходум', 'обходи', 'обходи', 'обходэх', 'обходи'],
  },
  {
    wordId: 'ct5', czech: 'Restaurace', russian: 'Ресторан',
    gender: 'feminine', isAnimate: false,
    singular: ['restaurace', 'restaurace', 'restauraci', 'restauraci', 'restaurace', 'restauraci', 'restaurací'],
    plural: ['restaurace', 'restaurací', 'restauracím', 'restaurace', 'restaurace', 'restauracích', 'restauracemi'],
    singularPron: ['рэстаурацэ', 'рэстаурацэ', 'рэстаурацы', 'рэстаурацы', 'рэстаурацэ', 'рэстаурацы', 'рэстаурацы'],
    pluralPron: ['рэстаурацэ', 'рэстаурацы', 'рэстаурацым', 'рэстаурацэ', 'рэстаурацэ', 'рэстаурацых', 'рэстаурацэми'],
  },
  {
    wordId: 'ct6', czech: 'Hotel', russian: 'Отель',
    gender: 'masculine', isAnimate: false,
    singular: ['hotel', 'hotelu', 'hotelu', 'hotel', 'hotele', 'hotelu', 'hotelem'],
    plural: ['hotely', 'hotelů', 'hotelům', 'hotely', 'hotely', 'hotelech', 'hotely'],
    singularPron: ['хотэл', 'хотэлу', 'хотэлу', 'хотэл', 'хотэлэ', 'хотэлу', 'хотэлэм'],
    pluralPron: ['хотэли', 'хотэлув', 'хотэлум', 'хотэли', 'хотэли', 'хотэлэх', 'хотэли'],
  },
  {
    wordId: 'ct7', czech: 'Nemocnice', russian: 'Больница',
    gender: 'feminine', isAnimate: false,
    singular: ['nemocnice', 'nemocnice', 'nemocnici', 'nemocnici', 'nemocnice', 'nemocnici', 'nemocnicí'],
    plural: ['nemocnice', 'nemocnic', 'nemocnicím', 'nemocnice', 'nemocnice', 'nemocnicích', 'nemocnicemi'],
    singularPron: ['нэмоцницэ', 'нэмоцницэ', 'нэмоцницы', 'нэмоцницы', 'нэмоцницэ', 'нэмоцницы', 'нэмоцницы'],
    pluralPron: ['нэмоцницэ', 'нэмоцниц', 'нэмоцницым', 'нэмоцницэ', 'нэмоцницэ', 'нэмоцницых', 'нэмоцницэми'],
  },
  {
    wordId: 'ct8', czech: 'Škola', russian: 'Школа',
    gender: 'feminine', isAnimate: false,
    singular: ['škola', 'školy', 'škole', 'školu', 'školo', 'škole', 'školou'],
    plural: ['školy', 'škol', 'školám', 'školy', 'školy', 'školách', 'školami'],
    singularPron: ['школа', 'школи', 'школэ', 'школу', 'школо', 'школэ', 'школоу'],
    pluralPron: ['школи', 'школ', 'школам', 'школи', 'школи', 'школах', 'школами'],
  },
  {
    wordId: 'ct9', czech: 'Park', russian: 'Парк',
    gender: 'masculine', isAnimate: false,
    singular: ['park', 'parku', 'parku', 'park', 'parke', 'parku', 'parkem'],
    plural: ['parky', 'parků', 'parkům', 'parky', 'parky', 'parcích', 'parky'],
    singularPron: ['парк', 'парку', 'парку', 'парк', 'паркэ', 'парку', 'паркэм'],
    pluralPron: ['парки', 'паркув', 'паркум', 'парки', 'парки', 'парцих', 'парки'],
  },
  {
    wordId: 'ct10', czech: 'Museum', russian: 'Музей',
    gender: 'neuter', isAnimate: false,
    singular: ['museum', 'museum', 'museu', 'museum', 'museum', 'museu', 'museem'],
    plural: ['museum', 'museum', 'museum', 'museum', 'museum', 'museích', 'museum'],
    singularPron: ['музэум', 'музэум', 'музэу', 'музэум', 'музэум', 'музэу', 'музээм'],
    pluralPron: ['музэум', 'музэум', 'музэум', 'музэум', 'музэум', 'музэих', 'музэум'],
    notes: 'Иностранное слово, склоняется частично',
  },
  {
    wordId: 'ct11', czech: 'Divadlo', russian: 'Театр',
    gender: 'neuter', isAnimate: false,
    singular: ['divadlo', 'divadla', 'divadlu', 'divadlo', 'divadlo', 'divadlu', 'divadlem'],
    plural: ['divadla', 'divadel', 'divadlům', 'divadla', 'divadla', 'divadlech', 'divadly'],
    singularPron: ['дивадло', 'дивадла', 'дивадлу', 'дивадло', 'дивадло', 'дивадлу', 'дивадлэм'],
    pluralPron: ['дивадла', 'дивадэл', 'дивадлум', 'дивадла', 'дивадла', 'дивадлэх', 'дивадли'],
  },
  {
    wordId: 'ct12', czech: 'Kino', russian: 'Кино',
    gender: 'neuter', isAnimate: false,
    singular: ['kino', 'kina', 'kinu', 'kino', 'kino', 'kinu', 'kinem'],
    plural: ['kina', 'kin', 'kinům', 'kina', 'kina', 'cinech', 'kina'],
    singularPron: ['кино', 'кино', 'кино', 'кино', 'кино', 'кино', 'кино'],
    pluralPron: ['кино', 'кино', 'кино', 'кино', 'кино', 'кино', 'кино'],
    notes: 'Иностранное слово, в основном не склоняется',
  },
  {
    wordId: 'ct14', czech: 'Knihovna', russian: 'Библиотека',
    gender: 'feminine', isAnimate: false,
    singular: ['knihovna', 'knihovny', 'knihovně', 'knihovnu', 'knihovno', 'knihovně', 'knihovnou'],
    plural: ['knihovny', 'knihoven', 'knihovnám', 'knihovny', 'knihovny', 'knihovnách', 'knihovnami'],
    singularPron: ['киховна', 'киховни', 'киховнэ', 'киховну', 'киховно', 'киховнэ', 'киховноу'],
    pluralPron: ['киховни', 'киховэн', 'киховнам', 'киховни', 'киховни', 'киховнах', 'киховнами'],
  },
  {
    wordId: 'ct15', czech: 'Lékárna', russian: 'Аптека',
    gender: 'feminine', isAnimate: false,
    singular: ['lékárna', 'lékárny', 'lékárně', 'lékárně', 'lékárno', 'lékárně', 'lékárnou'],
    plural: ['lékárny', 'lékáren', 'lékárnám', 'lékárny', 'lékárny', 'lékárnách', 'lékárnami'],
    singularPron: ['лекарна', 'лекарни', 'лекарнэ', 'лекарнэ', 'лекарно', 'лекарнэ', 'лекарноу'],
    pluralPron: ['лекарни', 'лекарэн', 'лекарнам', 'лекарни', 'лекарни', 'лекарнах', 'лекарнами'],
  },
  {
    wordId: 'ct16', czech: 'Banka', russian: 'Банк',
    gender: 'feminine', isAnimate: false,
    singular: ['banka', 'banky', 'bance', 'banku', 'banko', 'bance', 'bankou'],
    plural: ['banky', 'bank', 'bankám', 'banky', 'banky', 'bankách', 'bankami'],
    singularPron: ['банка', 'банкт', 'банцэ', 'банку', 'банко', 'банцэ', 'банкоу'],
    pluralPron: ['банкт', 'банк', 'банкам', 'банкт', 'банкт', 'банках', 'банками'],
  },
  {
    wordId: 'ct17', czech: 'Pošta', russian: 'Почта',
    gender: 'feminine', isAnimate: false,
    singular: ['pošta', 'pošty', 'poště', 'poštu', 'pošto', 'poště', 'poštou'],
    plural: ['pošty', 'pošt', 'poštám', 'pošty', 'pošty', 'poštách', 'poštami'],
    singularPron: ['пошта', 'пошти', 'поштэ', 'пошту', 'пошто', 'поштэ', 'поштоу'],
    pluralPron: ['пошти', 'пошт', 'поштам', 'пошти', 'пошти', 'поштах', 'поштами'],
  },
  {
    wordId: 'ct19', czech: 'Město', russian: 'Город',
    gender: 'neuter', isAnimate: false,
    singular: ['město', 'města', 'městu', 'město', 'město', 'městu', 'městem'],
    plural: ['města', 'měst', 'městům', 'města', 'města', 'městech', 'městy'],
    singularPron: ['мнэсто', 'мнэста', 'мнэсту', 'мнэсто', 'мнэсто', 'мнэсту', 'мнэстэм'],
    pluralPron: ['мнэста', 'мнэст', 'мнэстум', 'мнэста', 'мнэста', 'мнэстэх', 'мнэсти'],
  },
  {
    wordId: 'ct20', czech: 'Vesnice', russian: 'Деревня',
    gender: 'feminine', isAnimate: false,
    singular: ['vesnice', 'vesnice', 'vesnici', 'vesnici', 'vesnice', 'vesnici', 'vesnicí'],
    plural: ['vesnice', 'vesnic', 'vesnicím', 'vesnice', 'vesnice', 'vesnicích', 'vesnicemi'],
    singularPron: ['вэсницэ', 'вэсницэ', 'вэсницы', 'вэсницы', 'вэсницэ', 'вэсницы', 'вэсницы'],
    pluralPron: ['вэсницэ', 'вэсниц', 'вэсницым', 'вэсницэ', 'вэсницэ', 'вэсницых', 'вэсницэми'],
  },
];

// ========================
// ТЕЛО И ЗДОРОВЬЕ (Body) — bd1-bd25
// ========================
const bodyDeclensions: NounDeclension[] = [
  {
    wordId: 'bd1', czech: 'Hlava', russian: 'Голова',
    gender: 'feminine', isAnimate: true,
    singular: ['hlava', 'hlavy', 'hlavě', 'hlavu', 'hlavo', 'hlavě', 'hlavou'],
    plural: ['hlavy', 'hlav', 'hlavám', 'hlavy', 'hlavy', 'hlavách', 'hlavami'],
    singularPron: ['глава', 'глави', 'главэ', 'главу', 'главо', 'главэ', 'главоу'],
    pluralPron: ['глави', 'глав', 'главам', 'глави', 'глави', 'главах', 'главами'],
  },
  {
    wordId: 'bd2', czech: 'Obličej', russian: 'Лицо',
    gender: 'masculine', isAnimate: false,
    singular: ['obličej', 'obličeje', 'obličeji', 'obličej', 'obličeji', 'obličeji', 'obličejem'],
    plural: ['obličeje', 'obličejů', 'obličejům', 'obličeje', 'obličeje', 'obličejích', 'obličeji'],
    singularPron: ['обличэй', 'обличэйэ', 'обличэйи', 'обличэй', 'обличэйи', 'обличэйи', 'обличэйэм'],
    pluralPron: ['обличэйэ', 'обличэйув', 'обличэйум', 'обличэйэ', 'обличэйэ', 'обличэйих', 'обличэйи'],
  },
  {
    wordId: 'bd3', czech: 'Oči', russian: 'Глаза',
    gender: 'feminine', isAnimate: true,
    singular: ['oko', 'oka', 'oku', 'oko', 'oko', 'oku', 'okem'],
    plural: ['oči', 'očí', 'očím', 'oči', 'oči', 'očích', 'očima'],
    singularPron: ['око', 'ока', 'оку', 'око', 'око', 'оку', 'окэм'],
    pluralPron: ['очи', 'очи', 'очим', 'очи', 'очи', 'очих', 'очима'],
  },
  {
    wordId: 'bd4', czech: 'Ucho', russian: 'Ухо',
    gender: 'neuter', isAnimate: false,
    singular: ['ucho', 'ucha', 'uchu', 'ucho', 'ucho', 'uchu', 'uchem'],
    plural: ['uši', 'uší', 'uším', 'uši', 'uši', 'uších', 'ušima'],
    singularPron: ['ухо', 'уха', 'уху', 'ухо', 'ухо', 'уху', 'ухэм'],
    pluralPron: ['уши', 'уши', 'ушим', 'уши', 'уши', 'уших', 'ушима'],
  },
  {
    wordId: 'bd5', czech: 'Nos', russian: 'Нос',
    gender: 'masculine', isAnimate: false,
    singular: ['nos', 'nosu', 'nosu', 'nos', 'nose', 'nosu', 'nosem'],
    plural: ['nosy', 'nosů', 'nosům', 'nosy', 'nosy', 'nosech', 'nosy'],
    singularPron: ['нос', 'носу', 'носу', 'нос', 'носэ', 'носу', 'носэм'],
    pluralPron: ['носи', 'носув', 'носум', 'носи', 'носи', 'носэх', 'носи'],
  },
  {
    wordId: 'bd6', czech: 'Ústa', russian: 'Рот',
    gender: 'neuter', isAnimate: false, isPluralOnly: true,
    singular: empty7,
    plural: ['ústa', 'úst', 'ústům', 'ústa', 'ústa', 'ústech', 'ústy'],
    singularPron: empty7,
    pluralPron: ['уста', 'уст', 'устум', 'уста', 'уста', 'устэх', 'усти'],
  },
  {
    wordId: 'bd7', czech: 'Zuby', russian: 'Зубы',
    gender: 'masculine', isAnimate: false,
    singular: ['zub', 'zubu', 'zubu', 'zub', 'zube', 'zubu', 'zubem'],
    plural: ['zuby', 'zubů', 'zubům', 'zuby', 'zuby', 'zubech', 'zuby'],
    singularPron: ['зуб', 'зубу', 'зубу', 'зуб', 'зубэ', 'зубу', 'зубэм'],
    pluralPron: ['зуби', 'зубув', 'зубум', 'зуби', 'зуби', 'зубэх', 'зуби'],
  },
  {
    wordId: 'bd8', czech: 'Vlasy', russian: 'Волосы',
    gender: 'masculine', isAnimate: false, isPluralOnly: true,
    singular: empty7,
    plural: ['vlasy', 'vlasů', 'vlasům', 'vlasy', 'vlasy', 'vlasech', 'vlasmi'],
    singularPron: empty7,
    pluralPron: ['власи', 'власув', 'власум', 'власи', 'власи', 'власэх', 'власми'],
  },
  {
    wordId: 'bd9', czech: 'Krk', russian: 'Шея',
    gender: 'masculine', isAnimate: false,
    singular: ['krk', 'krku', 'krku', 'krk', 'krku', 'krku', 'krkem'],
    plural: ['krky', 'krků', 'krkům', 'krky', 'krky', 'krcích', 'krky'],
    singularPron: ['крк', 'крку', 'крку', 'крк', 'крку', 'крку', 'кркэм'],
    pluralPron: ['крки', 'кркув', 'кркум', 'крки', 'крки', 'крацих', 'крки'],
  },
  {
    wordId: 'bd10', czech: 'Rameno', russian: 'Плечо',
    gender: 'neuter', isAnimate: false,
    singular: ['rameno', 'ramena', 'rameni', 'rameno', 'rameno', 'rameni', 'ramenem'],
    plural: ['ramena', 'ramen', 'ramenům', 'ramena', 'ramena', 'ramenech', 'rameny'],
    singularPron: ['рамэно', 'рамэна', 'рамэни', 'рамэно', 'рамэно', 'рамэни', 'рамэнэм'],
    pluralPron: ['рамэна', 'рамэн', 'рамэнум', 'рамэна', 'рамэна', 'рамэнэх', 'рамэни'],
  },
  {
    wordId: 'bd11', czech: 'Ruka', russian: 'Рука',
    gender: 'feminine', isAnimate: true,
    singular: ['ruka', 'ruky', 'ruce', 'ruku', 'ruko', 'ruce', 'rukou'],
    plural: ['ruky', 'ruk', 'rukám', 'ruky', 'ruky', 'rukách', 'rukami'],
    singularPron: ['рука', 'руки', 'руцэ', 'руку', 'руко', 'руцэ', 'рукоу'],
    pluralPron: ['руки', 'рук', 'рукам', 'руки', 'руки', 'руках', 'руками'],
  },
  {
    wordId: 'bd12', czech: 'Prst', russian: 'Палец',
    gender: 'masculine', isAnimate: false,
    singular: ['prst', 'prstu', 'prstu', 'prst', 'prste', 'prstu', 'prstem'],
    plural: ['prsty', 'prstů', 'prstům', 'prsty', 'prsty', 'prstech', 'prsty'],
    singularPron: ['прст', 'прсту', 'прсту', 'прст', 'прстэ', 'прсту', 'прстэм'],
    pluralPron: ['прсти', 'прстув', 'прстум', 'прсти', 'прсти', 'прстэх', 'прсти'],
  },
  {
    wordId: 'bd13', czech: 'Noha', russian: 'Нога',
    gender: 'feminine', isAnimate: true,
    singular: ['noha', 'nohy', 'noze', 'nohu', 'noho', 'noze', 'nohou'],
    plural: ['nohy', 'nohou', 'nohám', 'nohy', 'nohy', 'nohách', 'nohama'],
    singularPron: ['нога', 'нохи', 'нозэ', 'ногу', 'нохо', 'нозэ', 'ногоу'],
    pluralPron: ['нохи', 'ногоу', 'ногам', 'нохи', 'нохи', 'ногах', 'ногама'],
  },
  {
    wordId: 'bd14', czech: 'Koleno', russian: 'Колено',
    gender: 'neuter', isAnimate: false,
    singular: ['koleno', 'kolena', 'koleni', 'koleno', 'koleno', 'koleni', 'kolenem'],
    plural: ['kolena', 'kolen', 'kolenům', 'kolena', 'kolena', 'kolenech', 'koleny'],
    singularPron: ['колэно', 'колэна', 'колэни', 'колэно', 'колэно', 'колэни', 'колэнэм'],
    pluralPron: ['колэна', 'колэн', 'колэнум', 'колэна', 'колэна', 'колэнэх', 'колэни'],
  },
  {
    wordId: 'bd16', czech: 'Srdce', russian: 'Сердце',
    gender: 'neuter', isAnimate: false,
    singular: ['srdce', 'srdce', 'srdci', 'srdce', 'srdce', 'srdci', 'srdcem'],
    plural: ['srdce', 'srdcí', 'srdcím', 'srdce', 'srdce', 'srdcích', 'srdci'],
    singularPron: ['срцэ', 'срцэ', 'срци', 'срцэ', 'срцэ', 'срци', 'срцэм'],
    pluralPron: ['срцэ', 'срци', 'срцим', 'срцэ', 'срцэ', 'срцих', 'срци'],
  },
];

// ========================
// ЖИВОТНЫЕ (Animals) — an1-an20
// ========================
const animalsDeclensions: NounDeclension[] = [
  {
    wordId: 'an1', czech: 'Pes', russian: 'Собака',
    gender: 'masculine', isAnimate: true,
    singular: ['pes', 'psa', 'psovi', 'psa', 'pse', 'psovi', 'psem'],
    plural: ['psi', 'psů', 'psům', 'psy', 'psi', 'psech', 'psy'],
    singularPron: ['пэс', 'пса', 'псови', 'пса', 'псэ', 'псови', 'псэм'],
    pluralPron: ['пси', 'псув', 'псум', 'пси', 'пси', 'псэх', 'пси'],
  },
  {
    wordId: 'an2', czech: 'Kočka', russian: 'Кошка',
    gender: 'feminine', isAnimate: true,
    singular: ['kočka', 'kočky', 'kočce', 'kočku', 'kočko', 'kočce', 'kočkou'],
    plural: ['kočky', 'koček', 'kočkám', 'kočky', 'kočky', 'kočkách', 'kočkami'],
    singularPron: ['кочка', 'кочки', 'кочцэ', 'кочку', 'кочко', 'кочцэ', 'кочкоу'],
    pluralPron: ['кочки', 'кочэк', 'кочкам', 'кочки', 'кочки', 'кочках', 'кочками'],
  },
  {
    wordId: 'an3', czech: 'Kůň', russian: 'Лошадь',
    gender: 'masculine', isAnimate: true,
    singular: ['kůň', 'koně', 'koni', 'koně', 'koni', 'koni', 'koněm'],
    plural: ['koně', 'koní', 'koním', 'koně', 'koně', 'koních', 'koňmi'],
    singularPron: ['кунь', 'конэ', 'кони', 'конэ', 'кони', 'кони', 'конэм'],
    pluralPron: ['конэ', 'кони', 'коним', 'конэ', 'конэ', 'коних', 'конми'],
  },
  {
    wordId: 'an4', czech: 'Kráva', russian: 'Корова',
    gender: 'feminine', isAnimate: true,
    singular: ['kráva', 'krávy', 'krávě', 'krávu', 'krávo', 'krávě', 'krávou'],
    plural: ['krávy', 'krav', 'kravám', 'krávy', 'krávy', 'kravách', 'kravami'],
    singularPron: ['крава', 'крави', 'кравэ', 'краву', 'краво', 'кравэ', 'кравоу'],
    pluralPron: ['крави', 'крав', 'кравам', 'крави', 'крави', 'кравах', 'кравами'],
  },
];

// ========================
// РАБОТА И ПРОФЕССИИ (Professions) — pr1-pr20
// ========================
const professionsDeclensions: NounDeclension[] = [
  {
    wordId: 'pr1', czech: 'Lékař', russian: 'Врач',
    gender: 'masculine', isAnimate: true,
    singular: ['lékař', 'lékaře', 'lékaři', 'lékaře', 'lékaři', 'lékaři', 'lékařem'],
    plural: ['lékaři', 'lékařů', 'lékařům', 'lékaře', 'lékaři', 'lékařích', 'lékaři'],
    singularPron: ['лежр', 'лежрэ', 'лежри', 'лежрэ', 'лежри', 'лежри', 'лежрэм'],
    pluralPron: ['лежри', 'лежрув', 'лежрум', 'лежрэ', 'лежри', 'лежрих', 'лежри'],
  },
  {
    wordId: 'pr2', czech: 'Učitel', russian: 'Учитель',
    gender: 'masculine', isAnimate: true,
    singular: ['učitel', 'učitele', 'učiteli', 'učitele', 'učiteli', 'učiteli', 'učitelem'],
    plural: ['učitelé', 'učitelů', 'učitelům', 'učitele', 'učitelé', 'učitelích', 'učiteli'],
    singularPron: ['учитэл', 'учитэлэ', 'учитэли', 'учитэлэ', 'учитэли', 'учитэли', 'учитэлэм'],
    pluralPron: ['учитэлэ', 'учитэлув', 'учитэлум', 'учитэлэ', 'учитэлэ', 'учитэлих', 'учитэли'],
  },
  {
    wordId: 'pr4', czech: 'Advokát', russian: 'Адвокат',
    gender: 'masculine', isAnimate: true,
    singular: ['advokát', 'advokáta', 'advokátovi', 'advokáta', 'advokáte', 'advokátovi', 'advokátem'],
    plural: ['advokáti', 'advokátů', 'advokátům', 'advokáty', 'advokáti', 'advokátech', 'advokáty'],
    singularPron: ['адвокат', 'адвоката', 'адвокатови', 'адвоката', 'адвокатэ', 'адвокатови', 'адвокатэм'],
    pluralPron: ['адвокати', 'адвокатув', 'адвокатум', 'адвокати', 'адвокати', 'адвокатэх', 'адвокати'],
  },
  {
    wordId: 'pr5', czech: 'Kuchař', russian: 'Повар',
    gender: 'masculine', isAnimate: true,
    singular: ['kuchař', 'kuchaře', 'kuchaři', 'kuchaře', 'kuchaři', 'kuchaři', 'kuchařem'],
    plural: ['kuchaři', 'kuchařů', 'kuchařům', 'kuchaře', 'kuchaři', 'kuchařích', 'kuchaři'],
    singularPron: ['кухнарж', 'кухнаржэ', 'кухнаржи', 'кухнаржэ', 'кухнаржи', 'кухнаржи', 'кухнаржэм'],
    pluralPron: ['кухнаржи', 'кухнаржув', 'кухнаржум', 'кухнаржэ', 'кухнаржи', 'кухнаржих', 'кухнаржи'],
  },
  {
    wordId: 'pr7', czech: 'Policista', russian: 'Полицейский',
    gender: 'masculine', isAnimate: true,
    singular: ['policista', 'policisty', 'policistovi', 'policistu', 'policisto', 'policistovi', 'policistou'],
    plural: ['policisté', 'policistů', 'policistům', 'policisty', 'policisté', 'policistech', 'policisty'],
    singularPron: ['полициста', 'полицисти', 'полицистови', 'полицисту', 'полицисто', 'полицистови', 'полицистоу'],
    pluralPron: ['полицистэ', 'полицистув', 'полицистум', 'полицисти', 'полицистэ', 'полицистэх', 'полицисти'],
  },
  {
    wordId: 'pr10', czech: 'Ředitel', russian: 'Директор',
    gender: 'masculine', isAnimate: true,
    singular: ['ředitel', 'ředitele', 'rediteli', 'ředitele', 'rediteli', 'rediteli', 'ředitelem'],
    plural: ['ředitelé', 'ředitelů', 'ředitelům', 'ředitele', 'ředitelé', 'ředitelích', 'řediteli'],
    singularPron: ['ржидитэл', 'ржидитэлэ', 'ржидитэли', 'ржидитэлэ', 'ржидитэли', 'ржидитэли', 'ржидитэлэм'],
    pluralPron: ['ржидитэлэ', 'ржидитэлув', 'ржидитэлум', 'ржидитэлэ', 'ржидитэлэ', 'ржидитэлих', 'ржидитэли'],
  },
  {
    wordId: 'pr11', czech: 'Programátor', russian: 'Программист',
    gender: 'masculine', isAnimate: true,
    singular: ['programátor', 'programátora', 'programátorovi', 'programátora', 'programátore', 'programátorovi', 'programátorem'],
    plural: ['programátoři', 'programátorů', 'programátorům', 'programátory', 'programátoři', 'programátorech', 'programátory'],
    singularPron: ['програматор', 'програматора', 'програматорови', 'програматора', 'програматорэ', 'програматорови', 'програматорэм'],
    pluralPron: ['програматори', 'програматорув', 'програматорум', 'програматори', 'програматори', 'програматорэх', 'програматори'],
  },
];

// ========================
// ЦВЕТА (Colors) — c1-c15 (adjectives)
// ========================
const colorsDeclensions: NounDeclension[] = [
  {
    wordId: 'c1', czech: 'Červená', russian: 'Красный',
    gender: 'adjective', isAnimate: false,
    singular: ['červený', 'červeného', 'červenému', 'červený', 'červený', 'červeném', 'červeným'],
    plural: empty7,
    singularPron: ['чэрвэни', 'чэрвэного', 'чэрвэному', 'чэрвэни', 'чэрвэни', 'чэрвэнэм', 'чэрвэним'],
    pluralPron: empty7,
    notes: 'Прилагательное. Форма согласуется с существительным: červený (м.р.), červená (ж.р.), červené (ср.р.), červené (мн.ч.)',
  },
  {
    wordId: 'c2', czech: 'Modrá', russian: 'Синий',
    gender: 'adjective', isAnimate: false,
    singular: ['modrý', 'modrého', 'modrému', 'modrý', 'modrý', 'modrém', 'modrým'],
    plural: empty7,
    singularPron: ['модри', 'модрего', 'модрэму', 'модри', 'модри', 'модрэм', 'модрим'],
    pluralPron: empty7,
    notes: 'Прилагательное. Форма согласуется с существительным: modrý (м.р.), modrá (ж.р.), modré (ср.р.), modré (мн.ч.)',
  },
  {
    wordId: 'c3', czech: 'Zelená', russian: 'Зелёный',
    gender: 'adjective', isAnimate: false,
    singular: ['zelený', 'zeleného', 'zelenému', 'zelený', 'zelený', 'zeleném', 'zeleným'],
    plural: empty7,
    singularPron: ['зэлэни', 'зэлэного', 'зэлэному', 'зэлэни', 'зэлэни', 'зэлэнэм', 'зэлэним'],
    pluralPron: empty7,
    notes: 'Прилагательное. Форма согласуется с существительным: zelený (м.р.), zelená (ж.р.), zelené (ср.р.), zelené (мн.ч.)',
  },
  {
    wordId: 'c4', czech: 'Žlutá', russian: 'Жёлтый',
    gender: 'adjective', isAnimate: false,
    singular: ['žlutý', 'žlutého', 'žlutému', 'žlutý', 'žlutý', 'žlutém', 'žlutým'],
    plural: empty7,
    singularPron: ['жлути', 'жлутого', 'жлутому', 'жлути', 'жлути', 'жлутэм', 'жлутим'],
    pluralPron: empty7,
    notes: 'Прилагательное. Форма согласуется с существительным: žlutý (м.р.), žlutá (ж.р.), žluté (ср.р.), žluté (мн.ч.)',
  },
  {
    wordId: 'c5', czech: 'Černá', russian: 'Чёрный',
    gender: 'adjective', isAnimate: false,
    singular: ['černý', 'černého', 'černému', 'černý', 'černý', 'černém', 'černým'],
    plural: empty7,
    singularPron: ['чэрни', 'чэрнэго', 'чэрнэму', 'чэрни', 'чэрни', 'чэрнэм', 'чэрним'],
    pluralPron: empty7,
    notes: 'Прилагательное. Форма согласуется с существительным: černý (м.р.), černá (ж.р.), černé (ср.р.), černé (мн.ч.)',
  },
  {
    wordId: 'c6', czech: 'Bílá', russian: 'Белый',
    gender: 'adjective', isAnimate: false,
    singular: ['bílý', 'bílého', 'bílému', 'bílý', 'bílý', 'bílém', 'bílým'],
    plural: empty7,
    singularPron: ['били', 'билэго', 'билэму', 'били', 'били', 'билэм', 'билим'],
    pluralPron: empty7,
    notes: 'Прилагательное. Форма согласуется с существительным: bílý (м.р.), bílá (ж.р.), bílé (ср.р.), bílé (мн.ч.)',
  },
  {
    wordId: 'c7', czech: 'Hnědá', russian: 'Коричневый',
    gender: 'adjective', isAnimate: false,
    singular: ['hnědý', 'hnědého', 'hnědému', 'hnědý', 'hnědý', 'hnědém', 'hnědým'],
    plural: empty7,
    singularPron: ['хнэди', 'хнэдэго', 'хнэдэму', 'хнэди', 'хнэди', 'хнэдэм', 'хнэдим'],
    pluralPron: empty7,
    notes: 'Прилагательное. Форма согласуется с существительным: hnědý (м.р.), hnědá (ж.р.), hnědé (ср.р.), hnědé (мн.ч.)',
  },
  {
    wordId: 'c9', czech: 'Fialová', russian: 'Фиолетовый',
    gender: 'adjective', isAnimate: false,
    singular: ['fialový', 'fialového', 'fialovému', 'fialový', 'fialový', 'fialovém', 'fialovým'],
    plural: empty7,
    singularPron: ['фиалови', 'фиалового', 'фиаловому', 'фиалови', 'фиалови', 'фиаловэм', 'фиаловим'],
    pluralPron: empty7,
    notes: 'Прилагательное. Форма согласуется с существительным: fialový (м.р.), fialová (ж.р.), fialové (ср.р.), fialové (мн.ч.)',
  },
  {
    wordId: 'c10', czech: 'Růžová', russian: 'Розовый',
    gender: 'adjective', isAnimate: false,
    singular: ['růžový', 'růžového', 'růžovému', 'růžový', 'růžový', 'růžovém', 'růžovým'],
    plural: empty7,
    singularPron: ['ружови', 'ружового', 'ружовому', 'ружови', 'ружови', 'ружовэм', 'ружовим'],
    pluralPron: empty7,
    notes: 'Прилагательное. Форма согласуется с существительным: růžový (м.р.), růžová (ж.р.), růžové (ср.р.), růžové (мн.ч.)',
  },
];

// ========================
// Group all by category
// ========================
export interface DeclensionCategory {
  categoryId: string;
  categoryName: string;
  categoryIcon: string;
  declensions: NounDeclension[];
}

export const declensionCategories: DeclensionCategory[] = [
  { categoryId: 'family', categoryName: 'Семья', categoryIcon: '👨‍👩‍👧‍👦', declensions: familyDeclensions },
  { categoryId: 'food', categoryName: 'Еда и напитки', categoryIcon: '🍽️', declensions: foodDeclensions },
  { categoryId: 'transport', categoryName: 'Транспорт', categoryIcon: '🚂', declensions: transportDeclensions },
  { categoryId: 'city', categoryName: 'В городе', categoryIcon: '🏙️', declensions: cityDeclensions },
  { categoryId: 'body', categoryName: 'Тело и здоровье', categoryIcon: '🏃', declensions: bodyDeclensions },
  { categoryId: 'animals', categoryName: 'Животные', categoryIcon: '🐾', declensions: animalsDeclensions },
  { categoryId: 'professions', categoryName: 'Работа и профессии', categoryIcon: '💼', declensions: professionsDeclensions },
  { categoryId: 'colors', categoryName: 'Цвета', categoryIcon: '🎨', declensions: colorsDeclensions },
];

// Helper: get category IDs that have declension data
export const categoryIdsWithDeclensions = new Set(declensionCategories.map((c) => c.categoryId));

// Helper: get declensions for a category
export function getDeclensionsForCategory(categoryId: string): NounDeclension[] {
  return declensionCategories.find((c) => c.categoryId === categoryId)?.declensions ?? [];
}
