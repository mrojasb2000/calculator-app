import { globalStyles } from '@/styles/global-styles';
import { Text, type TextProps } from 'react-native'

interface Props extends TextProps {
    variant?: 'h1' | 'h2';
}

const CustomText = ({children, variant = 'h2', ...res}: Props) => {
  return (

      <Text 
        style={[
            { color: '#fff', fontFamily: 'SpaceMono' }, 
            variant === 'h1' && globalStyles.mainResult,
            variant === 'h2' && globalStyles.subResult
        ]}
        numberOfLines={1}
        adjustsFontSizeToFit
        {...res}>
            {children}
        </Text>
      
  )
}

export default CustomText