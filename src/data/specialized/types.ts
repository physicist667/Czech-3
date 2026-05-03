export interface SpecializedWord {
  czech: string;
  russian: string;
  pronunciation: string;
  example?: string;
  exampleTranslation?: string;
}

export interface SpecializedPhrase {
  czech: string;
  russian: string;
  pronunciation: string;
  context?: string;
}

export interface VocabularyGroup {
  id: string;
  name: string;
  icon: string;
  startIndex: number;
  endIndex: number;
}

export interface SpecializedDirection {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  vocabulary: SpecializedWord[];
  phrases: SpecializedPhrase[];
  groups: VocabularyGroup[];
}
