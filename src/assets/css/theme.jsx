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
    font-size: 36px;
    font-weight: bold;`,
    h2:`font-family: IBMPlexSansKR-Bold;
    font-size: 28px;
    font-weight: bold;`,
    h3 :`font-family: IBMPlexSansKR-Medium;
    font-size: 20px;
    font-weight: 500;`,
    h4 :`font-family: IBMPlexSansKR-Regular;
    font-size: 18px;
    font-weight: 400;`,
    bigRegular :`font-family:IBMPlexSansKR-Regular;
    font-size: 16px;
    font-weight: 400;
    line-height:24px`,
    bigBold :`font-family: IBMPlexSansKR-Bold;
    font-size: 16px;
    font-weight: 600;
    line-height:24px;`,
    middleRegular :`font-family: IBMPlexSansKR-Regular;
    font-size: 14px;
    font-weight: 400;
    line-height:20px`,
    middleBold :`font-family: IBMPlexSansKR-Bold;
    font-size: 14px;
    font-weight: 600;
    line-height:20px;`,
    smallRegular :`font-family: IBMPlexSansKR-Regular;
    font-size: 12px;
    font-weight: 400;
    line-height:18px`,
    Message :`font-family:  IBMPlexSansKR-Regular;
    font-size: 10px;
    font-weight: 400;
    line-height:16px`,
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