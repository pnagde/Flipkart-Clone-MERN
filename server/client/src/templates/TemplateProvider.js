import React from 'react'
import { createTheme ,ThemeProvider} from '@material-ui/core/styles';
import { createContext } from 'react';
import { CssBaseline } from '@material-ui/core';

const TemplateContext=createContext(null);
export default function TemplateProvider({children}) {
    const theme = createTheme({
        overrides:{
            MuiDialog:{
                paperWidthSm:{
                    maxWidth:'unset'
                }
            },
            MuiDialogContent:{
                root:{
                    padding:0,
                    '&:first-child':{
                        paddingTop:0,
                    }
                }
            }
        }
    })
    return (
        <div>
            <TemplateContext.Provider>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    {children}
                </ThemeProvider>
            </TemplateContext.Provider>
        </div>
    )
}