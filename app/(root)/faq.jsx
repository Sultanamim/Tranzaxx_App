import { ScrollView, View } from "react-native"
import React from "react"
import FaqFirstPart from "../../components/faq/FaqFirstPart"
import FaqContainer from "../../components/faq/FaqContainer"
import BoostBrand from "../../components/shared/BoostBrand"

const faq = () => {
    return (
        <ScrollView>
            <View className="mt-[30px]">
                <View className="mb-[30px] flex-row items-center justify-center">
                    <BoostBrand />
                </View>
                <FaqFirstPart />
            </View>
            <View className="px-4 mt-[50px]">
                <FaqContainer />
            </View>
        </ScrollView>
    )
}

export default faq
