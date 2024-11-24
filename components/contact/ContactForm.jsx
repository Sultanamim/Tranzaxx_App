import { View, Text, TextInput, Alert } from "react-native";
import { contactUsForm } from "../../constant/data";
import { useState } from "react";
import BtnWithArrow from "../shared/BtnWithArrow";
import { sendContact } from "../../apiService";

const ContactForm = () => {
  const [values, setValues] = useState({
    "First Name": "",
    "Last Name": "",
    "Company Name": "",
    "Email Address": "",
    Message: "",
  });
  const handleSubmit = async () => {
    const data = {
      first_name: values["First Name"],
      last_name: values["Last Name"],
      email: values["Email Address"],
      message: values.Message,
      country_code: "US",
      country_name: "United Sates",
      captcha_key: "",
    };
    //console.log(data);
    try {
      const result = await sendContact(data);
      if (result.success) {
        Alert.alert("", result.message, [
          {
            text: "Close",
            // onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          // {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
        setValues({
          "First Name": "",
          "Last Name": "",
          "Company Name": "",
          "Email Address": "",
          Message: "",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View
      className="flex gap-4 bg-white rounded-[12px]"
      style={{
        shadowColor: "#acacad",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4.65,
        elevation: 8,
        marginBottom: 30,
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}
    >
      {contactUsForm.map((data) => (
        <View key={data.name}>
          <Text
            className="text-[16px] text-primaryBlk"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
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
              }));
            }}
            multiline={data.name === "Message"}
            numberOfLines={data.name === "Message" ? 4 : 1}
          />
        </View>
      ))}
      {/* <View className="mt-4 flex-row items-center justify-center"> */}
      <BtnWithArrow
        title={"Send Message"}
        //px={"px-[50px]"}
        styles={{ paddingHorizontal: 100 }}
        py={"py-[10px]"}
        handler={() => handleSubmit()}
      />
      {/* </View> */}
    </View>
  );
};

export default ContactForm;
