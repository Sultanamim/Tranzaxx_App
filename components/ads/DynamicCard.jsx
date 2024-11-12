import { AntDesign, FontAwesome5, FontAwesome6, Octicons } from "@expo/vector-icons"
import { useState } from "react"
import { TouchableOpacity } from "react-native"
import { View, Text, Image } from "react-native"
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

const DynamicCard = ({ ads, isMyads }) => {

    return (
        <View className="p-5   bg-white rounded-lg "
            style={{ borderWidth: 2, borderColor: "#B0E6FA" }}
        >
            <View className="relative">
                <Image source={ads.img} className="w-full rounded-lg" />
            </View>
            <View className="  mt-5 flex-row items-center gap-2">
                {/* <Image source={ads.icon} /> */}
                <Text className=" text-[12px]   text-base font-poppins  font-normal  uppercase text-[#00AEF0]">
                    OCT 16TH, 2024 AT 09:30
                </Text>
            </View>
            <View className="mt-[7px] font-poppins  text-[20px] font-semibold uppercase">
                <Text className="text-[18px] font-semibold font-poppins ">
                    TESYEUSYE
                </Text>
                <View className=" mt-4 flex-row gap-1 items-center">
                    <SimpleLineIcons name="location-pin" size={14} color="#00AEF0" />
                    <Text className="  font-normal font-poppins text-[14px] tracking-[21px]  text-lightColor">
                        Cambridge
                    </Text>
                </View>
                <View className=" mt-[14px] flex flex-row  flex-wrap">
                    <View className="flex-row gap-1 items-center
                  ">
                        <FontAwesome5 name="medal" size={13} color="#00AEF0" />
                        <Text className="  font-normal font-poppins text-[14px] tracking-[21px]  text-lightColor">
                            Featured AD
                        </Text>
                    </View>
                    <View className=" ml-1 mr-2 "
                        style={{ width: 1, height: 25, backgroundColor: "#D9D9D9" }}
                    ></View>


                    <View className="flex-row gap-1 items-center">

                        <SimpleLineIcons name="eye" size={13} color="#00AEF0" />
                        <Text className="  font-normal font-poppins text-[14px] tracking-[21px]  text-lightColor">
                            5000 Views
                        </Text>
                    </View>
                    <View className=" ml-1 mr-2 "
                        style={{ width: 1, height: 25, backgroundColor: "#D9D9D9" }}
                    ></View>

                    <View className="flex-row gap-1 items-center">
                        <SimpleLineIcons name="eye" size={13} color="#00AEF0" />
                        <Text className="  font-normal font-poppins text-[14px] tracking-[21px]  text-lightColor">
                            5000 Remaining
                        </Text>
                    </View>
                </View>
                <View className=" mt-5 flex flex-row justify-between items-center">
                    <Text className="font-poppins text-lg text-[#00AEF0] ">10,000 $</Text>
                    <View className="flex flex-row">
                        {
                            isMyads && (
                                <>
                                    <View className=" ml-3 mr-2">
                                        <Octicons name="pencil" size={20} color="#00AEF0" />
                                    </View>
                                    <View className=" ml-1 mr-2 "
                                        style={{ width: 1, height: 25, backgroundColor: "#D9F3FD" }}
                                    ></View>
                                    <View className=" ml-3 mr-2 ">

                                        <FontAwesome6 name="share-from-square" size={20} color="#00AEF0" />
                                    </View>
                                    <View className=" ml-1 mr-2 "
                                        style={{ width: 1, height: 25, backgroundColor: "#D9F3FD" }}
                                    ></View>
                                </>
                            )
                        }


                        <View className=" ml-3">
                            <AntDesign name="delete" size={20} color="#00AEF0" />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DynamicCard
