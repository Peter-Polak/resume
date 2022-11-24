import { TranslatableText } from "./TranslatableText";

export enum SupportedLanguage
{
    sk = "sk",
    en = "en"
}

export interface ISectionComponent<T>
{
    data : Array<T>
};

export interface ISectionComponent<T>
{
    data : Array<T>
};

export interface IPerson
{
    personalInformation : IPersonalInformation
    contactInformation : IContactInformation
    education : Array<ISchool>
    workExperience : Array<IWorkExperience>
    languageSkills : Array<ILanguage>
    technicalSkills : Array<ITechnicalSkills>
    projects : Array<IProject>
}

//#region Personal information

export interface IPersonalInformation
{
    name : string
    surname : string
    gender : TranslatableText
    birthday : string
}

//#endregion

export interface IContactInformation
{
    address : TranslatableText
    phoneNumber : string
    emailAddress : string
    websiteUrl : string
    birthday? : string
}

//#region Education

export interface ISchool
{
    name : TranslatableText
    faculty? : TranslatableText
    program? : TranslatableText
    study? : TranslatableText
    attendanceYears : 
    {
        start : string
        end : string
    }
}

//#endregion

export interface IWorkExperience
{
    
}

//#region Language skills

export enum LanguageProficiency
{
    A1 = "A1",
    A2 = "A2",
    B1 = "B1",
    B2 = "B2",
    C1 = "C1",
    C2 = "C2",
    MOTHER_TONGUE = "MOTHER_TONGUE"
}

export interface ILanguage
{
    name : TranslatableText
    proficiency : LanguageProficiency
}

//#endregion

//#region Technical skills

export interface ITechnicalSkills
{
    name : TranslatableText,
    skills : 
    {
        expert?: Array<ITechnicalSkill>,
        fluent?: Array<ITechnicalSkill>,
        familiar?: Array<ITechnicalSkill>,
        nocategory?: Array<ITechnicalSkill>
    }
}


export interface ITechnicalSkill
{
    name : string
}

//#endregion

//#region Projects

export interface IProjects
{
    
}


export interface IProject
{
    name : TranslatableText
    link : string
    languages : Array<string>
    technologies : Array<string>
    programs : Array<string>
    for : TranslatableText
    description : TranslatableText
}

//#endregion