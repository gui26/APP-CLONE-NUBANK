import React, { Children, ReactNode } from "react";
import{ LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../../Global/theme';

type Props = {
children: ReactNode;
}

export function Background ({ children }: Props) {

    const { secondary90, secondary100} = theme.colors;
return (

    <LinearGradient 
    style={ styles.container}
    colors= {[secondary100, secondary100]}
    >

    {children}

    </LinearGradient>
)




}