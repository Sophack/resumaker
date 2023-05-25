//Main Section
export const MainSection =`
  width: 100%;
  background-attachment: fixed;
  postion:absolute;

`;

export const SideSection = `
  width: 105%;
  height: fit-content;
  background-color: #426FC2;  
`;

export const Title = `    
    font-family: 'Comfortaa' !important;
    font-color:#FFFFFF;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-left: 20px;
    color:white;
`;

export const Background = `
    background-color: black;
    display: block;
    border-radius: 10px;
    height: 580px;
    width: 407px;
    overflow-y: auto;
    overflow-wrap: break-word;
    position:relative;
  } 
`

//Skills
export const sContainer = `
    margin-left: 10px;
    margin-right: 10px;
`

export const sBox = `
  display: flex;
  flex-direction: row;  
  justify-content: space-between;
`

export const sTitle = `
    margin-top:20px;
    font-family: 'Comfortaa' !important;
    font-color:#1a2c4d;
    font-size: 10px;
    font-weight: 700;
    text-align: centre;
    letter-spacing: 1px;
    color: white;
`

export const sParagraph = `
    font-family: 'Comfortaa' !important;
    font-color:#1a2c4d;
    font-size: 7px;

    color: white;
`

//Personal

export const pContainer = `
    margin-top: 20px;
    
`

export const pName = `   
  font-family: 'Comfortaa' !important;
  border-bottom: 4px solid #426FC2;
  color:white;
  font-size: 19px;
  font-weight: bold;
  letter-spacing: 1px;
  
`

export const pBox = `
    margin-left: auto;
    margin-right: auto;
    padding: 0px 4px 0px 4px;
    width: fit-content;
    height: 19px;
    margin-bottom: 8px;
    
`

export const pRole = `
    font-family: 'Comfortaa' !important;
    color:white;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 5px;
    margin-top: 25px;
    text-align:center;
`

export const pPersonalInfo =`
    font-family: 'Comfortaa' !important;
    color:white;
    font-size: 10px;
    font-weight: 400;
    margin-bottom: 26px;    
    text-align:center;
    padding-bottom: 20px;
    border-bottom: 4px solid #426FC2;
`

export const pTitle = `
    margin-left:20px;
    font-family: 'Comfortaa' !important;
    color:white;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-top:20px;
`

export const pParagraph = `
    margin-left:20px;
    font-size: 10px;
    color:white;
    margin-right: 10px;
    padding-bottom:29px
`

//Education Section

export const eContainer = `
    margin-left: 20px;
`

export const eTitle = `
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    color:white;
`
export const eBox = `
    padding-left: 13px;
    border-left: 4px solid;
    border-color: #426FC2;
`

export const eProgram = `
    font-size: 13px;
    letter-spacing: 1px;
    margin-top: -5px;
    color:white;
`

export const eSchool = `
    font-size: 12px;
    letter-spacing: 1px;
    margin-top: 0px;
    color:white;
`

export const eTime = `
    color: #a5a5a5;
    margin-top: -6px;
    display: flex;
    color:white;
`

export const eStartEnd = `
    color: #a5a5a5;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 0;
    color:white;
`
//Work Section

export const wContainer = `
    margin-left: 20px;
`

export const wTitle = `
    font-family: 'Comfortaa' !important;
    font-color:#1a2c4d;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-top: 20px;
    color:white;
`
export const wBox = `
    padding-left: 13px;
    border-left: 4px solid;
    border-color: #426FC2;
`

export const wRoleCompany = `
    display: flex;
    color:white;
`

export const wRole = `
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-top: 0;
    margin-right: 8px;
    color:white;
`

export const wCompany = `
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-top: 0;
    margin-right: 8px;
    color:white;
`

export const wTime = `
    color: #a5a5a5;
    margin-top: -3px;
    margin-bottom: 5px;
    display: flex;
    color:white;
`

export const wStartEnd = `
    color: #a5a5a5;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 0;
    color:white;
`

export const wParagraph = `
    font-size: 10px;
    margin-right: 10px;
    color:white;
`
export default { 
    Background,
    MainSection, 
    SideSection, 
    Title,
    sContainer,
    sBox,
    sTitle,
    sParagraph,
    pContainer,
    pName,
    pBox,
    pRole,
    pPersonalInfo,
    pTitle,
    pParagraph,
    eContainer,
    eBox,
    eProgram,
    eSchool,
    eStartEnd,
    eTime,
    eTitle,
    wContainer,
    wTitle,
    wBox,
    wRoleCompany,
    wRole,
    wCompany,
    wTime,
    wStartEnd,
    wParagraph
    }