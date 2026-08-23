import { StyleSheet } from "react-native";
import { Colors } from '@/constants/theme'

export const globalStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 60,
    },
    mainResult: {
        color: Colors.textPrimary,
        fontSize: 70,
        fontWeight: 400,
        textAlign: 'right',
    },
    subResult: {
        color: Colors.textSecondary,
        fontSize: 40,
        fontWeight: 300,
        textAlign: 'right',
    }
});