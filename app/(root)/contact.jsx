import { View, Text, ImageBackground, ScrollView } from "react-native"
import BoostBrand from "../../components/shared/BoostBrand"
import RotateText from "../../components/shared/RotateText"
import Btn from "../../components/shared/Btn"
import BtnWithArrow from "../../components/shared/BtnWithArrow"
import ContactForm from "../../components/contact/ContactForm"
import StayTouch from "../../components/contact/StayTouc"

export default function Contact() {
    return (
        <ScrollView>
            <View className="mt-[60px]">
                <View className="mb-[30px] flex-row items-center justify-center">
                    <BoostBrand />
                </View>
                <View className="flex-row items-center justify-center">
                    <View className="max-w-[334px] flex-row">
                        <Text className="uppercase text-[34px] font-BebasNeue text-primaryBlk ">
                            Stay in
                        </Text>
                        <RotateText text={"touch"} />

                        <Text className="font-BebasNeue text-primaryBlk text-[34px]">
                            With us anytime
                        </Text>
                    </View>
                </View>
                <View className="flex-row items-center justify-center mt-[30px] ">
                    <Text className="max-w-[350px] font-poppins text-[#565656] text-[12px] text-center">
                        WE'RE HERE TO ASSIST YOU WITH ANY QUESTIONS OR INQUIRIES
                        YOU HAVE. WHETHER IT'S ABOUT OUR SERVICES, PRICING, OR
                        SUPPORT, FEEL FREE TO REACH OUT. OUR TEAM IS ALWAYS
                        READY TO HELP YOU.
                    </Text>
                </View>
                <View className="flex-row items-center justify-center mt-[30px]">
                    <BtnWithArrow title={"Contact us now"} handler={() => {}} />
                </View>
            </View>
            <View className="px-6 mt-[50px]">
                <ContactForm />
            </View>
            <View className="px-4 mt-6">
                <StayTouch />
            </View>
        </ScrollView>
    )
}
