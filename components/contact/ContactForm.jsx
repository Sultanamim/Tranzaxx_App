import { View, Text, TextInput } from "react-native"
import { contactUsForm } from "../../constant/data"
import { useState } from "react"
import BtnWithArrow from "../shared/BtnWithArrow"

const ContactForm = () => {
    const [values, setValues] = useState({
        "First Name": "",
        "Last Name": "",
        "Company Name": "",
        "Email Address": "",
        Message: "",
    })
    return (
        <View className="flex gap-4">
            {contactUsForm.map((data) => (
                <View key={data.name}>
                    <Text className="text-[16px] text-primaryBlk font-semibold font-poppins">
                        {data.name}
                    </Text>
                    <TextInput
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
                </View>
            ))}
            <View className="mt-4 flex-row items-center justify-center">
                <BtnWithArrow
                    title={"Send Message"}
                    px={"px-[100px]"}
                    py={"py-[10px]"}
                />
            </View>
        </View>
    )
}

export default ContactForm
