import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import Btn from "./shared/Btn";
import { useState } from "react";

const ForgetPassword = ({ setIsLogin }) => {
  const [fromdata, setFromdata] = useState("");
  const goLogin = () => {
    setIsLogin(true);
  };

  const handlerPass = async () => {
    try {
      const response = await fetch(
        `https://tranzaxx.com/api/auth/password/email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            login: fromdata,
          }),
        }
      );

      if (!response.ok) {
        alert("Something went wrong");
      }

      const data = await response.json();
      if (!data.success) {
        if (data.message === "passwords.throttled") {
          alert("Please wait a few seconds then try again");
          return;
        }
        alert(`${data.message}`);
      }
      if (data.success) {
        alert("Check your email for password reset link");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ScrollView className="px-4">
      <View className="shadow-loginShadow rounded-[12px]  bg-white pb-6 mt-[50px]">
        <View className="pt-6 pl-6 pr-6">
          <Text
            className="text-[#010101] text-[24px] text-center"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            Forgot Password{" "}
          </Text>
          <View className="flex-row items-center mt-[50px]">
            <Text
              className=" text-[#010101] text-[16px]"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              Login
            </Text>
            <Text
              className="text-[16px]"
              style={{ fontFamily: "Poppins-Regular" }}
            >
              {" "}
              (Email or phone)
            </Text>
          </View>
          <View
            className="border-[1px] border-[#BFBFBF] rounded-[4px]"
            style={{ paddingVertical: 0, paddingHorizontal: 14 }}
          >
            <View className="flex-row-reverse justify-end items-center gap-2 mt-[10px]">
              <TextInput
                placeholder="EMAIL OR PHONE"
                className=" placeholder:text-[#BFBFBF] font-poppins text-[16px] "
                value={fromdata}
                onChangeText={(e) => setFromdata(e)}
              />
              <Image
                source={require("../assets/images/form/men.png")}
                resizeMode="cover"
                style={{ marginTop: -5, marginRight: -3 }}
              />
            </View>
          </View>
          <View className="flex-1 gap-5" style={{ marginTop: 20 }}>
            <Btn title={"submit"} handler={handlerPass} />
            <Btn title={"Back To Login"} handler={goLogin} />
          </View>
        </View>
        <View className="mt-5">{/* <Btn title={Login} /> */}</View>
        <View className="mt-5 text-[#999] flex-row items-center justify-center">
          <Text style={{ fontFamily: "Poppins-Regular" }}>
            DO NOT HAVE AN ACCOUNT?
          </Text>
          <TouchableOpacity className="">
            <Text
              className="text-[#010101] text-[14px]"
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgetPassword;
