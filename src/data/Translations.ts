import { TranslatableText } from "../utilities/TranslatableText";
import { LanguageProficiency } from "../utilities/Types";

export const LanguageProficiencies : { [language in LanguageProficiency] : TranslatableText } = 
{
    A1 : new TranslatableText
    ({
        sk : "začiatočník",
        en : "beginner"
    }),
    A2 : new TranslatableText
    ({
        sk : "začiatočník",
        en : "elementary"
    }),
    B1 : new TranslatableText
    ({
        sk : "stredne pokročilý",
        en : "intermidiate"
    }),
    B2 : new TranslatableText
    ({
        sk : "stredne pokročilý",
        en : "upper intermidiate"
    }),
    C1 : new TranslatableText
    ({
        sk : "pokročilý",
        en : "advanced"
    }),
    C2 : new TranslatableText
    ({
        sk : "pokročilý",
        en : "mastery"
    }),
    MOTHER_TONGUE : new TranslatableText
    ({
        sk : "materinský jazyk",
        en : "mother tongue"
    })
};


export const EmptySection : TranslatableText = new TranslatableText
({
    sk : "Žiadne relevantné",
    en : "None that are relevant"
});

export const ExpertSkill : TranslatableText = new TranslatableText
({
    sk : "Expert v:",
    en : "Expert in:"
});

export const FluentSkill : TranslatableText = new TranslatableText
({
    sk : "Zručný v:",
    en : "Proficient in:"
});

export const FamiliarSkill : TranslatableText = new TranslatableText
({
    sk : "Oboznámený s:",
    en : "Familiar with:"
});


export const Education : TranslatableText = new TranslatableText
({
    sk : "Vzdelanie",
    en : "Education",
});

export const LanguageSkills : TranslatableText = new TranslatableText
({
    sk : "Jazykové znalosti",
    en : "Language skills"
});

export const WorkExperience : TranslatableText = new TranslatableText
({
    sk : "Pracovné skúsenosti",
    en : "Work experience"
});

export const TechnicalSkills : TranslatableText = new TranslatableText
({
    sk : "Technické znalosti",
    en : "Technical skills"
});

export const Projects : TranslatableText = new TranslatableText
({
    sk : "Projekty",
    en : "Projects"
});

export const Language : TranslatableText = new TranslatableText
({
    sk : "Jazyk",  
    en : "Language"
});

export const ProjectsAll : TranslatableText = new TranslatableText
({
    sk : "Všetky moje projekty nájdete na mojom GitHub-e (odkaz v hlavičke)...",  
    en : "All my projects can be found on my GitHub (link in the header)..."
});

export const Link : TranslatableText = new TranslatableText
({
    sk : "Odkaz",  
    en : "Link"
});

export const For : TranslatableText = new TranslatableText
({
    sk : "Pre",  
    en : "For"
});

export const PersonalProject : TranslatableText = new TranslatableText
({
    sk : "Osobný projekt",  
    en : "Personal project"
});

export const Languages : TranslatableText = new TranslatableText
({
    sk : "Jazyky",  
    en : "Languages"
});

export const Technologies : TranslatableText = new TranslatableText
({
    sk : "Technológie",  
    en : "Technologies"
});

export const Programs : TranslatableText = new TranslatableText
({
    sk : "Programy",  
    en : "Programs"
});

export const Description : TranslatableText = new TranslatableText
({
    sk : "Popis",  
    en : "Description"
});