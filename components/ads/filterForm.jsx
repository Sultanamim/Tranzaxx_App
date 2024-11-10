import { Picker } from "@react-native-picker/picker"
import { View, Text, TextInput } from "react-native"
import Btn from "../shared/Btn"
import { TouchableOpacity } from "react-native"
import { AntDesign } from "@expo/vector-icons"

const FilterForm = () => {
    return (
        <View className="px-4">
            <View className="flex-row items-center gap-2">
                <View className="border-[1px] border-[#8E8E8E] rounded-lg px-3 py-[14px] flex-1">
                    <TextInput
                        placeholder="LOOKING FOR SOMETHING"
                        className=" font-poppins"
                    />
                </View>
                <View className="max-w-[96px] w-full">
                    <TouchableOpacity className="bg-[#00ADEF] py-4 rounded-[12px] flex-row items-center px-3 justify-center gap-[2px]">
                        <Text className="font-poppins text-[12px] text-white uppercase font-semibold text-center">
                            find
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* <View className=" bg-primary rounded-lg max-w-[100px]">
                <Picker
                    dropdownIconColor={"white"}
                    itemStyle={`text-red-700`}
                    dropdownIconRippleColor={"red"} // Set text color for items
                    className=""
                >
                    <Picker.Item
                        label="Java"
                        value="java"
                        className="text-red-500"
                    />
                    <Picker.Item label="JavaScript" value="javascript" />
                    <Picker.Item label="Python" value="python" />
                    <Picker.Item label="C++" value="c++" />
                </Picker>
            </View> */}
            <View className="flex-row items-center gap-2 mt-3">
                <View className="border-[1px] border-[#8E8E8E] rounded-lg px-3 py-[14px] flex-1">
                    <TextInput
                        placeholder="LOOKING FOR SOMETHING"
                        className="uppercase text-primary font-semibold font-poppins"
                        value="ALL ADS"
                    />
                </View>
                <View className="max-w-[96px] w-full">
                    <View>
                        <TouchableOpacity className="bg-[#00ADEF] py-4 rounded-[12px] flex-row items-center px-3 gap-[2px]">
                            <Text className="font-poppins text-[12px] text-white uppercase font-semibold text-center">
                                Sort by
                            </Text>
                            <AntDesign
                                name="caretdown"
                                size={8}
                                color="white"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FilterForm
