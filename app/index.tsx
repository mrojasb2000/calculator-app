import { View, Text } from 'react-native'
import { globalStyles } from '@/styles/global-styles';


const CalculatorApp = () => {
  return (
    <View style={ globalStyles.calculatorContainer }>
      <Text style={globalStyles.mainResult}>25 x 25</Text>
      <Text style={globalStyles.subResult}>625</Text>
    </View>
  )
}

export default CalculatorApp