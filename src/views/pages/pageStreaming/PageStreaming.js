/**
 * Created by thinh on 1/6/2021.
 */
import React from 'react'
import { ThemeProvider } from 'styled-components';
import {
    MeetingProvider,
    lightTheme
  } from 'amazon-chime-sdk-component-library-react';
import MyApp from './mainApp'

const PageStreaming = () => {

    return (
        <ThemeProvider theme={lightTheme}>
            <MeetingProvider>
                <div style={{ padding: '2rem', height: '70vh', boxSizing: 'border-box' }}>
                    <MyApp />
                </div>
            </MeetingProvider>
        </ThemeProvider>
    )
}

export default PageStreaming
