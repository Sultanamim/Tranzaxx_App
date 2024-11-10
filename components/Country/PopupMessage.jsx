import { router } from "expo-router"
import { TouchableOpacity } from "react-native"
import { View, Text } from "react-native"

const PopupMessage = () => {
    return (
        <View className="bg-black p-[10px]">
            <View className=" flex-row items-center">
                <TouchableOpacity onPress={() => router.push("(auth)/login")}>
                    <Text className="font-poppins text-[11px] text-primary uppercase">
                        Login{" "}
                    </Text>
                </TouchableOpacity>
                <Text className="text-white font-poppins text-[11px] uppercase flex-row items-center">
                    for faster access to the best deals.{" "}
                </Text>
                <TouchableOpacity className="">
                    <Text
                        className="font-poppins mt-[2px] text-[12px] uppercase text-primary"
                        onPress={() => router.push("(auth)/register ")}
                    >
                        Click here
                    </Text>
                </TouchableOpacity>
            </View>
            <Text className="text-white font-poppins text-[11px] uppercase ">
                IF YOU DON'T HAVE AN ACCOUNT.
            </Text>
        </View>
    )
}

export default PopupMessage
