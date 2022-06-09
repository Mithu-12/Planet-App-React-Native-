import { View, Text as RNText } from 'react-native'
import React from 'react'
import { presets } from './text.preset'
import { StyleSheet } from 'react-native'

export default function Text({children, preset, style}) {
    const textStyle = StyleSheet.compose(presets[preset], style);
    return <RNText style={textStyle}>
        {children}
    </RNText>
}