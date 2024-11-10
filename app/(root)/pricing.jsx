import { ScrollView, View } from "react-native"
import EngaggingVideos from "../../components/pricing/EngaggingVideos"
import PricingCard from "../../components/pricing/PricingCard"

const Pricing = () => {
    return (
        <ScrollView>
            <View className="mt-[60px]">
                <EngaggingVideos />
            </View>
            <View className="px-4 mb-10">
                <PricingCard />
            </View>
        </ScrollView>
    )
}

export default Pricing
