export interface ExperienceType{
    _id:string,
    StartDate: string,
    EndDate: string,
    Company: string,
    Title: string,
    Description: string,
    Category: category
}

export interface ExperienceList extends Array<ExperienceType>{
    [index: number]: ExperienceType
};

interface category{
    tag: string,
    color: string
}
const data:ExperienceList = 
    [{
        _id: '1',
        StartDate: '02/2018',
        EndDate: '04/2019',
        Company: 'Rhede Systems',
        Title: 'Delphi developer Jr.',
        Description: 'Most of the time working on custom Pascal scripts to make specific calcs of sale\'s comission and regional taxes, these scripts usually run on before or after post of the transations of the system, sometimes I used to fix some bugs too',
        Category:{
            tag: 'medium',
            color: '#018f69'
        }
    },{
        _id: '2',
        StartDate: '10/2019',
        EndDate: '12/2020',
        Company: 'Eco Centauro Smart Systems',
        Title: 'Delphi developer Jr.',
        Description: 'Worked on the main project on the finance team fixing bugs and creating new features to improve routines like credcard integrations and a new profit-and-loss form more easy and functional to be handled by the user, another important thing was an work tool made by myself to save me a lot of development time while I was making new forms',
        Category:{
            tag: 'medium',
            color: '#018f69'
        }
    },{
        _id: '3',
        StartDate: '12/2020',
        EndDate: '06/2021',
        Company: 'Sysmo Systems',
        Title: 'Delphi developer.',
        Description: 'Worked on the main project with the logistic team fixing bugs and creating new features related to the shipping process and purchase order routine improving the client\'s operation',
        Category:{
            tag: 'medium',
            color: '#018f69'
        }
    },{
        _id: '4',
        StartDate: '07/2021',
        EndDate: '12/2021',
        Company: 'Agrotis AgroInformatics',
        Title: 'Delphi developer.',
        Description: 'Worked on the main project fixing bugs and creating new features related to the agro-busines sector improving the client\'s production',
        Category:{
            tag: 'medium',
            color: '#018f69'
        }
    },{
        _id: '5',
        StartDate: '12/2021',
        EndDate: 'Present',
        Company: 'Agrotis AgroInformatics',
        Title: 'Front-end developer.',
        Description: 'I just started it, I have no idea about what kind of chalenges are waiting for me',
        Category:{
            tag: 'medium',
            color: '#018f69'
        }
    },
];

export default data;