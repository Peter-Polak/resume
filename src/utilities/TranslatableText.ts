import { defaultLanguage } from "./Settings";
import { SupportedLanguage } from "./Types";

export class TranslatableText
{
  static currentLanguage: SupportedLanguage = defaultLanguage;

    translations: 
    {
        [language in SupportedLanguage]: string;
    };
 
  constructor(translations: { [language in SupportedLanguage]: string;}) 
  {
    this.translations = translations;
  }
 
  Translate() : string
  {
    return this.translations[TranslatableText.currentLanguage];
  }
}