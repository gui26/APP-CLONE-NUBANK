import React, { Children, ReactNode } from "react";
import{ LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../../Global/theme';

type Props = {
children: ReactNode;
}

export function Back ({ children }: Props) {

    const { secondary70, secondary80} = theme.colors;
return (

    <LinearGradient 
    style={ styles.container}
    colors= {[secondary80, secondary70]}
    >

    {children}

    </LinearGradient>
)




}