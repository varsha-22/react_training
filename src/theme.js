import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography:{
        fontFamily: [
            'Cosmic Sans Ms',
            'cursive',
            'sans-serif',
          ].join(','),
        subtitle1:{
            fontFamily: 'sans-serif',
            fontSize: 24,
            fontStyle: 'bold',
            algin: 'center'
        },
        subtitle2:{
            fontFamily:'Cosmic Sans Ms',
            fontSize: 18,
            fontStyle:'undeline',
        },
        body1:{
            fontWeight:500,
        },
        button:{

        },
        htmlFontSize: 10,
    },
});


export default theme;