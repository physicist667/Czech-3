---
Task ID: 1
Agent: Main Agent
Task: Добавить новые типы упражнений для повторения слов в приложение изучения чешского языка

Work Log:
- Проанализировал текущую структуру приложения (Next.js, Zustand, Framer Motion)
- Изучил существующие 4 типа упражнений: Multiple Choice, Fill Blank, Matching, Sentence Building
- Обновил store/czech-store.ts: добавил новые типы упражнений в QuizScore type
- Обновил data/exercises.ts: добавил интерфейс TrueFalseQuestion и 35 вопросов Верно/Неверно
- Полностью переписал components/sections/exercises-section.tsx с 5 новыми компонентами:
  1. FlashcardsQuiz - флеш-карточки с анимацией переворота (20 карточек)
  2. ReverseQuiz - обратный перевод: русский → чешский (15 вопросов)
  3. TrueFalseQuiz - быстрый тест Верно/Неверно (15 вопросов)
  4. WordScrambleQuiz - составление слова из перемешанных букв (15 вопросов)
  5. TypingPracticeQuiz - ввод чешского слова вручную с подсказками (12 вопросов)
- Добавил разделение на странице: «Новые упражнения» с бейджем «Новое» и «Классические упражнения»
- Вынес ResultsCard в общий компонент для переиспользования
- Успешная сборка проекта без ошибок

Stage Summary:
- Добавлено 5 новых типов упражнений для повторения изученных слов
- Все упражнения используют существующие данные из словаря (200 слов)
- Упражнения помечены как «Новые» с визуальным выделением
- Общее количество типов упражнений: 9

---
## Task ID: 2 - exercises-rewriter
### Work Task
Rewrite exercises-section.tsx to add category selection before vocabulary-based exercises, allowing users to practice ALL words from a category or all 200 words instead of a fixed random slice.

### Work Summary
**Problem**: Each vocab-based exercise hardcoded a small slice of words (12-20 random words), limiting practice scope.

**Solution implemented**:

1. **Category Selection Screen** (`CategorySelector` component): Added a new screen that appears before any vocabulary-based exercise. Users can choose:
   - "Все слова" (all 200 words from all categories) — highlighted card at top
   - Individual category from 9 categories (greetings, food, family, numbers, colors, transport, city, time, body) — each showing icon, name, and word count

2. **Props-based word passing**: Changed all 5 vocab-based exercises to accept `words: VocabWord[]` as a prop:
   - `FlashcardsQuiz({ words, onFinish, onBack, onNewRound })`
   - `ReverseQuiz({ words, onFinish, onBack, onNewRound })`
   - `TrueFalseQuiz({ words, onFinish, onBack, onNewRound })`
   - `WordScrambleQuiz({ words, onFinish, onBack, onNewRound })`
   - `TypingPracticeQuiz({ words, onFinish, onBack, onNewRound })`
   - Each component uses ALL passed words without slicing

3. **Dynamic True/False generation**: Replaced static `trueFalseQuestions` import with `generateTrueFalseQuestions(words)` function that dynamically generates True/False questions from any set of vocabulary words. For each word, randomly decides correct/incorrect pairing, picking a random different Russian translation for incorrect ones.

4. **Enhanced ResultsCard**: Added three buttons:
   - "Повторить" (retry same words)
   - "Новый раунд" (go back to category selection)
   - "Назад" (go back to exercise list)

5. **3-step navigation flow**: `ExercisesSection` now has:
   - Step 1: Exercise type selection (grid of cards)
   - Step 2: Category selection (for vocab-based exercises only)
   - Step 3: Playing the exercise
   - Classic exercises (Multiple Choice, Fill Blank, Matching, Sentence Building) skip directly to step 3

6. **Word-scramble filtering**: Multi-word phrases (containing spaces) are automatically filtered out since they can't be scrambled letter-by-letter.

7. **Preserved all existing exercises**: MultipleChoiceQuiz, FillBlankQuiz, MatchingExercise, SentenceBuildingQuiz remain unchanged.

8. **Imports updated**: Removed `trueFalseQuestions` from exercises.ts import; added `vocabularyData` from vocabulary.ts.

**Build status**: Compiled successfully with no errors.
