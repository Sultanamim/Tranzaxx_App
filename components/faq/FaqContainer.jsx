import { View, Text, Image } from "react-native"
import { faq } from "../../constant/data"
import { useState } from "react"
import { TouchableOpacity } from "react-native"

export default function FaqContainer() {
    const [selectedFaw, setSelectedFaq] = useState("")
    const handleFaq = (id = "") => {
        if (selectedFaw === id) return setSelectedFaq("")
        else if (id > 0) return setSelectedFaq(id)
        else return setSelectedFaq("")
    }
    return (
        <View className="flex gap-4 mb-4">
            {faq.map((question, index) => (
                <View key={index}>
                    <TouchableOpacity
                        className="bg-primary px-6 py-[10px] flex-row items-center justify-between gap-[10px] rounded-t-xl"
                        onPress={() => handleFaq(index + 1)}
                    >
                        <Text className="text-white text-[16px] font-medium font-poppins">
                            {question.question}
                        </Text>
                        <Image
                            source={
                                selectedFaw === index + 1
                                    ? require("../../assets/images/faq/minus.png")
                                    : require("../../assets/images/faq/plus.png")
                            }
                        />
                    </TouchableOpacity>
                    {selectedFaw === index + 1 && (
                        <View className="p-5">
                            <TouchableOpacity onPress={handleFaq}>
                                <Text className="text-[#565656] font-poppins text-[12px]">
                                    {question.ans}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            ))}
        </View>
    )
}
