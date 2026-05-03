import * as fs from 'fs';
import * as path from 'path';

const DICT_DIR = '/home/z/my-project/src/data/specialized';

const GROUP_TRANSLATIONS = {
  'body parts': { name: 'Части тела', icon: '🦴' },
  'medical specialties': { name: 'Медицинские специальности', icon: '👨‍⚕️' },
  'diseases & conditions': { name: 'Заболевания и состояния', icon: '🦠' },
  'symptoms & signs': { name: 'Симптомы и признаки', icon: '🤒' },
  'hospital departments': { name: 'Отделения больницы', icon: '🏥' },
  'medications': { name: 'Лекарства', icon: '💊' },
  'medical equipment & procedures': { name: 'Оборудование и процедуры', icon: '🔬' },
  'emergency & patient care': { name: 'Скорая помощь и уход', icon: '🚑' },
  'programming languages & concepts': { name: 'Языки и концепции программирования', icon: '💻' },
  'hardware': { name: 'Аппаратное обеспечение', icon: '🖥️' },
  'software & os': { name: 'Программное обеспечение и ОС', icon: '💿' },
  'networking': { name: 'Сетевые технологии', icon: '🌐' },
  'web development': { name: 'Веб-разработка', icon: '🕸️' },
  'databases': { name: 'Базы данных', icon: '🗄️' },
  'mobile development': { name: 'Мобильная разработка', icon: '📱' },
  'cybersecurity': { name: 'Кибербезопасность', icon: '🔒' },
  'devops & cloud': { name: 'DevOps и облака', icon: '☁️' },
  'ai & ml': { name: 'ИИ и машинное обучение', icon: '🤖' },
  'finance & accounting': { name: 'Финансы и бухгалтерия', icon: '💰' },
  'marketing': { name: 'Маркетинг', icon: '📢' },
  'management': { name: 'Менеджмент', icon: '📊' },
  'hr & employment': { name: 'Кадры и трудоустройство', icon: '👥' },
  'economics & trade': { name: 'Экономика и торговля', icon: '📈' },
  'insurance & banking': { name: 'Страхование и банки', icon: '🏦' },
  'corporate & entrepreneurship': { name: 'Корпоративное управление', icon: '🏢' },
  'building materials': { name: 'Строительные материалы', icon: '🧱' },
  'tools': { name: 'Инструменты', icon: '🔧' },
  'construction processes': { name: 'Строительные процессы', icon: '🏗️' },
  'electrical & plumbing': { name: 'Электрика и сантехника', icon: '⚡' },
  'architecture & design': { name: 'Архитектура и дизайн', icon: '📐' },
  'heavy machinery & safety': { name: 'Техника и безопасность', icon: '🚜' },
  'measurements & finishing': { name: 'Замеры и отделка', icon: '📏' },
  'mathematics': { name: 'Математика', icon: '🔢' },
  'physics': { name: 'Физика', icon: '⚛️' },
  'chemistry': { name: 'Химия', icon: '🧪' },
  'biology': { name: 'Биология', icon: '🧬' },
  'general science': { name: 'Общие науки', icon: '🔬' },
  'hotel': { name: 'Гостиница', icon: '🏨' },
  'restaurant & kitchen': { name: 'Ресторан и кухня', icon: '🍽️' },
  'tourism & travel': { name: 'Туризм и путешествия', icon: '✈️' },
  'customer service': { name: 'Обслуживание клиентов', icon: '🤝' },
  'housekeeping & events': { name: 'Обслуживание номеров и мероприятия', icon: '🧹' },
  'restaurant positions & processes': { name: 'Должности и процессы в ресторане', icon: '👨‍🍳' },
  'general legal terms': { name: 'Основные юридические термины', icon: '⚖️' },
  'court proceedings': { name: 'Судебные процессы', icon: '🔨' },
  'criminal law': { name: 'Уголовное право', icon: '👮' },
  'civil law': { name: 'Гражданское право', icon: '📋' },
  'family law and property': { name: 'Семейное право и недвижимость', icon: '🏠' },
  'employment law and constitutional law': { name: 'Трудовое и конституционное право', icon: '📜' },
  'school types and levels': { name: 'Типы и уровни школ', icon: '🏫' },
  'subjects and curriculum': { name: 'Предметы и учебные планы', icon: '📚' },
  'teaching methods': { name: 'Методы преподавания', icon: '🎓' },
  'grading and exams': { name: 'Оценки и экзамены', icon: '📝' },
  'education administration and special education': { name: 'Администрация и спецобразование', icon: '🏛️' },
  'vehicles': { name: 'Транспортные средства', icon: '🚗' },
  'public transport and infrastructure': { name: 'Общественный транспорт', icon: '🚌' },
  'logistics and warehousing': { name: 'Логистика и склады', icon: '📦' },
  'shipping and customs': { name: 'Перевозки и таможня', icon: '🚢' },
  'navigation, safety and additional terms': { name: 'Навигация и безопасность', icon: '🧭' },
  'visual arts and techniques': { name: 'Изобразительное искусство', icon: '🎨' },
  'graphic design': { name: 'Графический дизайн', icon: '🖌️' },
  'art history and movements': { name: 'История искусств', icon: '🖼️' },
  'photography and interior design': { name: 'Фотография и дизайн интерьеров', icon: '📸' },
  'fashion, materials and colors': { name: 'Мода, материалы и цвета', icon: '👗' },
};

// Main group comments match: // === ... === or // ============ ... ============
const MAIN_COMMENT_RE = /^\s*\/\/\s*={3,}\s*(.+?)\s*={3,}\s*$/;
// Word entry match
const WORD_RE = /^\s*\{\s*czech:/;

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function getTranslation(englishName) {
  return GROUP_TRANSLATIONS[englishName.toLowerCase()] || null;
}

function extractGroupName(commentText) {
  // Remove word count suffixes like "(100 words)", "(1–30)", or "(40)"
  let name = commentText
    .replace(/\s*\(\d+\s*words?\)\s*/i, '')
    .replace(/\s*\(\d+\s*\)\s*/, '')
    .replace(/\s*\(\d+[–-]\d+\)\s*/, '')
    .trim();
  return name;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const groups = [];
  let wordIndex = 0;
  let groupStartIndex = 0;
  let currentGroupName = '';
  let inVocabulary = false;

  for (const line of lines) {
    // Detect vocabulary array start
    if (/vocabulary:\s*\[/.test(line)) {
      inVocabulary = true;
      continue;
    }
    // Detect vocabulary array end (phrases: or closing bracket of object)
    if (inVocabulary && /phrases:\s*\[/.test(line)) {
      inVocabulary = false;
      continue;
    }

    if (!inVocabulary) continue;

    // Check for group comment
    const commentMatch = line.match(MAIN_COMMENT_RE);
    if (commentMatch) {
      // Save previous group
      if (currentGroupName && wordIndex > groupStartIndex) {
        const translated = getTranslation(currentGroupName);
        groups.push({
          id: slugify(currentGroupName),
          name: translated ? translated.name : currentGroupName,
          icon: translated ? translated.icon : '📋',
          startIndex: groupStartIndex,
          endIndex: wordIndex,
        });
      }
      currentGroupName = extractGroupName(commentMatch[1]);
      groupStartIndex = wordIndex;
      continue;
    }

    // Count words
    if (WORD_RE.test(line)) {
      wordIndex++;
    }
  }

  // Save last group
  if (currentGroupName && wordIndex > groupStartIndex) {
    const translated = getTranslation(currentGroupName);
    groups.push({
      id: slugify(currentGroupName),
      name: translated ? translated.name : currentGroupName,
      icon: translated ? translated.icon : '📋',
      startIndex: groupStartIndex,
      endIndex: wordIndex,
    });
  }

  return { groups, totalWords: wordIndex };
}

function formatGroups(groups, indent) {
  if (groups.length === 0) return '[]';
  const items = groups.map(g =>
    `    { id: '${g.id}', name: '${g.name}', icon: '${g.icon}', startIndex: ${g.startIndex}, endIndex: ${g.endIndex} },`
  );
  return '[\n' + items.join('\n') + '\n  ]';
}

function injectGroups(filePath, groups) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Remove empty groups array if previously injected with no results
  content = content.replace(/,\s*groups:\s*\[\]\s*\n(\s*phrases:)/, ',\n  $1');

  if (content.includes('groups:')) {
    console.log(`  SKIP: groups already exists in ${path.basename(filePath)}`);
    return true;
  }

  const groupsStr = `  groups: ${formatGroups(groups, '  ')},`;

  // Insert before "phrases:"
  const phrasesIdx = content.indexOf('phrases:');
  if (phrasesIdx === -1) {
    console.error(`  ERROR: Could not find 'phrases:' in ${path.basename(filePath)}`);
    return false;
  }

  // Find the newline before "phrases:"
  let nlIdx = content.lastIndexOf('\n', phrasesIdx);
  content = content.slice(0, nlIdx) + ',\n' + groupsStr + '\n' + content.slice(nlIdx + 1);

  fs.writeFileSync(filePath, content, 'utf-8');
  return true;
}

// Main
const files = [
  'medicine.ts', 'it.ts', 'business.ts', 'construction.ts',
  'hospitality.ts', 'law.ts', 'education.ts', 'transport.ts',
  'art-design.ts', 'exact-sciences.ts',
];

for (const file of files) {
  const fp = path.join(DICT_DIR, file);
  console.log(`\nProcessing ${file}...`);
  const { groups, totalWords } = processFile(fp);
  console.log(`  Total words: ${totalWords}`);
  console.log(`  Found ${groups.length} groups:`);
  for (const g of groups) {
    console.log(`    "${g.name}" (${g.icon}): [${g.startIndex}..${g.endIndex}) = ${g.endIndex - g.startIndex} words`);
  }
  injectGroups(fp, groups);
}
