const styles = {
    a: {
      textDecoration: 'none',
    },
    '.MuiBox-root': {
      padding: 0,
    },
    '.floatRight': {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItem: 'center',
    },
    '.tableOfContent': {
      border: '1px solid #e7e7e7',
      borderRadius: '15px',
      padding: '20px',
      margin: '12px 0',
      '& ul': {
        padding: '0 0 0 20px',
        margin: '14px 0 0 0',
      },
      '& .heading': {
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '1.25',
        color: '#25282B',
        margin: 0,
      },
      '& .subtitle': {
        margin: '14px 0',
        fontSize: '14px',
        fontWeight: 400,
        color: '#A0A4A8',
      },
    },
    '.paddingBottom': {
      li: {
        paddingBottom: '1rem',
        p: {
          lineHeight: '1.5',
          margin: 0,
        },
        '&:last-child': {
          paddingBottom: 0,
        },
      },
    },
    '.transition': {
      transition: 'all 0.3s ease-in-out',
    },
    '.cursor': {
      cursor: 'pointer',
    },
    '.alignCenter': {
      justifyContent: 'flex-start',
      display: 'flex',
    },
    '.responsiveContainer': {
      '@media(max-width:450px)': {
        height: '255px',
      },
      '@media(min-width:400px) and (max-width:600px)': {
        height: '335px',
      },
      '@media(min-width:600px) and (max-width:900px)': {
        height: '450px',
      },
      '@media(min-width:900px)': {
        height: '550px',
      },
    },
    '.articleDetailsImg': {
      maxWidth: '100%',
      height: 'auto',
      objectFit: 'cover' as const,
    },
    '.CTA_BUTTON': {
      display: 'flex',
      padding: '1rem',
      fontSize: '16px',
      background: '#006FD1',
      color: '#FFFFFF',
      borderRadius: '2rem',
      justifyContent: 'center',
    },
    '.nativeImage': {
      display: 'flex',
      justifyContent: 'center',
    },
    '.lineClamp1': {
      display: '-webkit-box',
      '-webkit-line-clamp': '1',
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
    },
    '.lineClamp2': {
      display: '-webkit-box',
      '-webkit-line-clamp': '2',
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
      color: 'black',
    },
    '.lineClamp3': {
      display: '-webkit-box',
      '-webkit-line-clamp': '3',
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
    },
    '.deskView': {
      display: 'block',
      '@media(max-width:767px)': {
        display: 'none',
      },
    },
    '.mobView': {
      display: 'none',
      '@media(max-width:767px)': {
        display: 'block',
      },
    },
    '.bgColor': {
      div: {
        backgroundColor: '#1a1a1a',
        h5: {
          color: '#fff',
        },
        h6: {
          color: '#fff',
        },
      },
    },
    '.tabBG': {
      '.MuiButtonBase-root': {
        p: { color: '#fff' },
      },
      '.MuiPaper-root': {
        border: '1px #1a1a1a solid',
      },
      '.MuiAccordionSummary-root': {
        backgroundColor: '#1a1a1a',
      },
      '.MuiAccordionDetails-root': {
        backgroundColor: '#3a3a3a!important',
        borderTop: '1px #3a3a3a solid!important',
        p: {
          color: '#fff',
        },
      },
      '.MuiSvgIcon-root': {
        color: '#fff!important',
      },
    },
    ellipsis: {
      width: 300,
      height: '30px',
      overflow: 'hidden',
      textOverflow: 'ellipsis' as const,
      whiteSpace: 'nowrap' as const,
      ml: 2,
    },
  };
  
  export default styles;