import { View, Text, TextInput } from "react-native"
import { personalForm } from "../../constant/data"
import { useState } from "react"
import BtnWithArrow from "../shared/BtnWithArrow"
import Checkbox from 'expo-checkbox';
import { TouchableOpacity } from "react-native";

const genderInput = [
    { label: "Mr", value: "mr" },
    { label: "Mrs", value: "mrs" },
]

const PersonalDetailsForm = ({ isCheckboxshow, checkboxContent, fromDatas, children }) => {
    const [gender, setGender] = useState("mr");
    const [isChecked, setChecked] = useState(false);
    const [values, setValues] = useState({})



    return (
        <View className="flex gap-4">

            {fromDatas?.map((data) => (

                <View key={data.name}>
                    <Text className="text-[16px] text-primaryBlk font-semibold font-poppins">
                        {data.name}
                    </Text>
                    {
                        data.name === "Gender" ?
                            <View className=" flex flex-row mt-2">
                                {
                                    genderInput.map((item) => (

                                        <TouchableOpacity key={item.label} onPress={() => setGender(item.value)} className=" flex flex-row  items-center">
                                            <View className={` rounded-full border-[1px]  flex flex-row justify-center items-center mr-3 
                                             ${gender === item.value ? "bg-[#00AEF0] border-[#00AEF0] " : "border-[#BFBFBF]"}
                                            `}>
                                                <View className=" w-3 h-3  rounded-full  bg-white " style={{ margin: 4 }}>
                                                </View>
                                            </View>
                                            <Text className=" text-[16px] text-primaryBlk font-semibold font-poppins mr-3">
                                                {item.label}
                                            </Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View> : <TextInput
                                className="border-[1px] mt-[10px] border-primary rounded px-[14px] py-[10px] placeholder:text-[#999] text-[16px] font-poppins "
                                placeholder={data.placeholder}
                                value={values[data.name]}
                                onChangeText={(text) => {
                                    setValues((prevValues) => ({
                                        ...prevValues,
                                        [data.name]: text,
                                    }))
                                }}
                                multiline={data.name === "Message"}
                                numberOfLines={data.name === "Message" ? 4 : 1}
                            />
                    }


                </View>
            ))}
            {
                isCheckboxshow && <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Checkbox color={isChecked ? '#00AEF0' : undefined} style={{ borderColor: '#00AEF0' }} value={isChecked} onValueChange={setChecked} />
                    <Text className="  ml-2 font-poppins font-normal text-[14px] text-[#010101]">{checkboxContent}</Text>
                </View>
            }

            {
                children
            }

            <View className="mt-4 flex-row items-center justify-center">
                <BtnWithArrow
                    title={"Update"}
                    px={"px-[100px]"}
                    py={"py-[10px]"}
                    isArrowShow={false}
                />
            </View>
        </View>
    )
}

export default PersonalDetailsForm
