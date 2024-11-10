import { View, Text } from "react-native"

const RotateText = ({ text }) => {
    return (
        <View className="border-[1px] border-primary relative">
            <View
                className="border-[1px] border-primary rotate"
                style={{ transform: [{ rotate: "-5deg" }] }}
            >
                <Text className="font-BebasNeue text-primary text-[34px] uppercase">
                    {text}
                </Text>
            </View>
        </View>
    )
}

export default RotateText
