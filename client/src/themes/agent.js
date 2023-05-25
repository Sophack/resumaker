//Main Section
export const MainSection =`
  float: right;
  width: 70%;

  padding-bottom: 30px;
  background-attachment: fixed;
  background-color: #D8E5F7;
  border: 4px ridge;
  postion:absolute;

`;

export const SideSection = `
  top: 0 !important;
  float: left;
  width: 30%;
  height: 50%;
  background-color: #426FC2;  
`;

export const Title = `
    font-family: 'Comfortaa' !important;
    font-color:#1a2c4d;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-left: 20px;
`;

export const Background = `
    background-color:#274274;
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
`

export const sBox = `
  margin-top: 30px;
`

export const sTitle = `
    font-family: 'Comfortaa' !important;
    font-color:#1a2c4d;
    font-size: 15px;
    font-weight: 700;
    text-alight: centre;
    letter-spacing: 1px;
    color: white;
`

export const sParagraph = `
    font-family: 'Comfortaa' !important;
    font-color:#1a2c4d;
    font-size: 10px;
    margin-right: 10px;
    margin-bottom: 30px;
    color: white;
`

//Personal

export const pContainer = `
    margin-top: 20px;
    margin-left: 10px;
    
`

export const pName = ` 
  
  font-family: 'Comfortaa' !important;
  border-bottom: 4px solid #426FC2;
  font-color:#1a2c4d;
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
    font-color:#1a2c4d;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 5px;
    margin-top: 25px;
    text-align:center;
`

export const pPersonalInfo =`
    font-family: 'Comfortaa' !important;
    font-color: #1a2c4d;
    font-size: 10px;
    font-weight: 400;
    margin-bottom: 26px;    
    text-align:center;
    padding-bottom: 20px;
    border-bottom: 4px solid #426FC2;
`

export const pTitle = `
    
    font-family: 'Comfortaa' !important;
    font-color:#1a2c4d;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-top:20px;
`

export const pParagraph = `
    font-size: 10px;
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
`

export const eSchool = `
    font-size: 12px;
    letter-spacing: 1px;
    margin-top: 0px;
`

export const eTime = `
    color: #a5a5a5;
    margin-top: -6px;
    display: flex;
`

export const eStartEnd = `
    color: #a5a5a5;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 0;
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
`
export const wBox = `
    padding-left: 13px;
    border-left: 4px solid;
    border-color: #426FC2;
`

export const wRoleCompany = `
    display: flex;
`

export const wRole = `
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-top: 0;
    margin-right: 8px;
`

export const wCompany = `
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-top: 0;
    margin-right: 8px;
`

export const wTime = `
    color: #a5a5a5;
    margin-top: -3px;
    margin-bottom: 5px;
    display: flex;
`

export const wStartEnd = `
    color: #a5a5a5;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 0;
`

export const wParagraph = `
    font-size: 10px;
    margin-right: 10px;
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