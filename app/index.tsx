import { View } from 'react-native';
import { globalStyles } from '@/styles/global-styles';
import CustomText from '@/components/atoms/CustomText';

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30 }}>
        <CustomText variant="h1">25 x 25</CustomText>
        <CustomText variant="h2">625</CustomText>
      </View>
    </View>
  );
};

export default CalculatorApp;
