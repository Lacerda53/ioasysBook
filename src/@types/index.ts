export type BooksProps = {
    id: string;
    title: string;
    description: string;
    authors: [string];
    pageCount: number;
    category: CategoryEnum;
    imageUrl: string;
    isbn10: string;
    isbn13: string;
    language: string;
    publisher: string;
    published: number;
};

export enum CategoryEnum {
    Biographies= 'biographies',
    Collections = 'collections',
    Behavior = 'behavior',
    Tales = 'tales',
    LiteraryCriticism = 'literary-criticism',
    ScienceFiction = 'scienceFiction',
    Folklore = 'folklore',
    Genealogy = 'genealogy',
    Humor = 'humor',
    Children = 'children',
    Games = 'games',
    Newspapers = 'newspapers',
    BrazilianLiterature = 'brazilian-literature',
    ForeignLiterature = 'foreign-literature',
    RareBooks = 'rare-books',
    Manuscripts = 'manuscripts',
    Poetry = 'poetry',
    AnotherSubjects = 'another-subjects'
}

export enum RoutesEnum {
    Home = 'Home',
    BookDetails = 'BookDetails'
}