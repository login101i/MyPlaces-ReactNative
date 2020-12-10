import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors'
import { Platform } from 'react-native';

export default CustomHeaderButton = props => {

    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={30}
            color={Platform.OS === "android" ? 'white' : Colors.primary}
        />
    )

}



