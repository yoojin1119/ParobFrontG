const color = {
    primaryYellow: '#FBC531',
    primaryOrange: '#ED6F1E',
    primaryRed: '#E83B3C',
    primaryBlue: '#3FBDEE',
    secondaryYellow: '#EDA311',
    secondaryBrown: '#B84C17',
    secondaryRed:'#C01717',
    secondaryBule: '#0FA1CD',
    secondaryGreen: '#64BD9E',
    secondaryDeepGreeon: '#1D9B65',
    textWhite:'#FFFFFF',
    textDeepGray: '#3D3D3D',
    textGray: '#7B7B7B',
    textLightGray: '#B7B7B7',
    textBlack: '#000000',
    lineBlack:'#000000',
    lineDeepGray: '#7B7B7B',
    lineGray: '#B7B7B7',
    lineLightGray: '#D3D3D3',
    Select: '#FFF4D8',
    backGray: '#EDEDED',
    backLight: '#F9F9F9'
};

const fontSize = {
    h1 :`font-family: IBMPlexSansKR-Bold;
    font-size: 2.25rem;
    font-weight: bold;
    line-height: 2.75rem`,
    h2:`font-family: IBMPlexSansKR-Bold;
    font-size: 1.75rem;
    font-weight: bold;`,
    h3 :`font-family: IBMPlexSansKR-Medium;
    font-size: 1.25rem;
    font-weight: 500;`,
    h4 :`font-family: IBMPlexSansKR-Regular;
    font-size: 1.125rem;
    font-weight: 400;`,
    bigRegular :`font-family:IBMPlexSansKR-Regular;
    font-size: 1rem;
    font-weight: 400;
    line-height:1.5rem`,
    bigBold :`font-family: IBMPlexSansKR-Bold;
    font-size: 1rem;
    font-weight: 600;
    line-height:1.5rem`,
    middleRegular :`font-family: IBMPlexSansKR-Regular;
    font-size: 0.875rem
    font-weight: 400;
    line-height:1.5rem`,
    middleBold :`font-family: IBMPlexSansKR-Bold;
    font-size: 0.875rem
    font-weight: 600;
    line-height:1.25rem`,
    smallRegular :`font-family: IBMPlexSansKR-Regular;
    font-size: 0.75rem;
    font-weight: 400;
    line-height:1.125rem`,
    Message :`font-family:  IBMPlexSansKR-Regular;
    font-size: 0.625rem;
    font-weight: 400;
    line-height:1rem`,
};

const logos = {
    bigLogo: `background: url(/assets/images/logos/bigLogo.png) no-repeat;`,
    smallLogo: `background: url(/assets/images/logos/smallLogo.png) no-repeat;`,
};
const check = {
    unchecked:  `background: url(/assets/images/icons/unchecked.png) no-repeat;`,
    checked: `background: url(/assets/images/icons/checked.svg) no-repeat;`
};
const line = {
    bold: `border: 1px solid #000000;`,
    regular: `border: 1px solid #7B7B7B;`,
    light: `border: 1px solid #B7B7B7;`,
    arrow: `border: 1px solid #D3D3D3;`,
    dashed: `border: 1px dashed #B7B7B7;`
};
const theme = {
    color,
    fontSize,
    logos,
    check,
    line,
};

export default theme;