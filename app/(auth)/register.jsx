import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Btn from "../../components/shared/Btn";
import { registerInputData } from "../../constant/data";
import { router } from "expo-router";

const handleErrorResponse = (response) => {
  const { errors, message } = response;

  if (errors) {
    // Collect all error messages
    const errorMessages = Object.keys(errors)
      .map(
        (key) =>
          `${key.charAt(0).toUpperCase() + key.slice(1)}: ${errors[key][0]}`
      )
      .join("\n");

    alert(`${errorMessages}`);
  } else {
    alert("Error", message || "An unknown error occurred.");
  }
};

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [hidePhoneNumber, setHidePhoneNumber] = useState(false);
  const [receiveMarketingEmail, setReceiveMarketingEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);
  // const toggleCheckbox = () => {}

  const [formValues, setFormValues] = useState(
    registerInputData.reduce((acc, field) => {
      acc[field.value] = "";
      return acc;
    }, {})
  );

  const handleInputChange = (value, fieldName) => {
    setFormValues((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async () => {
    // Validate form fields
    const missingFields = registerInputData.filter(
      (field) => !formValues[field.value]
    );
    if (missingFields.length > 0) {
      alert(
        `Please fill in the following fields: ${missingFields
          .map((field) => field.value)
          .join(", ")}`
      );
      return;
    }
    if (!agree) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    const userInfo = {
      name: formValues.name,
      phone: formValues.phone,
      phone_hidden: hidePhoneNumber,
      email: formValues.email,
      username: formValues.name,
      password: formValues.password,
      password_confirmation: formValues.confirmedpassword,
      accept_terms: agree,
      accept_marketing_offers: receiveMarketingEmail,
      captcha_key: "",
    };

    setIsLoading(true);

    try {
      const response = await fetch(`https://tranzaxx.com/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'multipart/form-data',
          Accept: "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      if (!response.ok) {
        alert("Failed to register. Please check your credentials.");
      }

      const data = await response.json();

      if (!data.success) {
        handleErrorResponse(data);
      }
      if (data.success) {
        setisSuccess(true);
        alert(data.extra.sendEmailVerification.message);

        // reset
        setFormValues(
          registerInputData.reduce((acc, field) => {
            acc[field.value] = "";
            return acc;
          }, {})
        );
      }
      if (isSuccess) {
        router.replace("/login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView className="px-4">
      <View className="shadow-loginShadow rounded-[12px]  bg-white pb-6 mt-[50px]">
        <View className="pt-6 pl-6 pr-6">
          <Text
            className="text-capitalize  text-[#010101] text-[16px] text-center uppercase"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            CREATE YOUR ACCOUNT, IT'S 100% FREE{" "}
          </Text>
          <View className="flex gap-5 py-[] mt-[50px]">
            {registerInputData.map((data, index) => {
              return (
                <View key={index}>
                  <Text
                    className="uppercase text-[#010101] text-[16px]"
                    style={{ fontFamily: "Poppins-Medium" }}
                  >
                    {data.name}
                  </Text>
                  <View
                    className=" border-[1px] border-[#BFBFBF] mt-[10px] rounded-[4px]"
                    style={{ paddingVertical: 5, paddingHorizontal: 14 }}
                  >
                    <View className=" flex-row items-center gap-2 ">
                      <Image
                        source={data.firstIcon}
                        style={{ marginTop: -5, marginRight: -3 }}
                      />
                      <TextInput
                        placeholder={data.placeholder}
                        className="text-[#BFBFBF] text-[16px] font-poppins min-w-[80%]"
                        value={formValues[data.value]}
                        onChangeText={(text) =>
                          handleInputChange(text, data.value)
                        }
                      />
                      {data.thirdIcon !== "" && (
                        <Image source={data.thirdIcon} />
                      )}
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
        <View className="px-4">
          <View className="mt-4 flex-row items-center">
            <TouchableOpacity
              onPress={() => setAgree(!agree)}
              className="w-7 h-7 border-[1px] border-[#BFBFBF] mr-2 items-center justify-center"
            >
              {agree && <View className="w-3 h-3 bg-[#000]" />}
            </TouchableOpacity>
            <View className="flex-row items-center">
              <Text className="text-[#010101] font-poppins text-[12px] uppercase">
                I HAVE READ AND AGREE TO THE
              </Text>
              <Text className="text-primary font-poppins text-[12px] uppercase">
                {" "}
                TERMS & CONDITIONS
              </Text>
            </View>
          </View>
        </View>
        <View className="px-4">
          <View className="mt-3 flex-row items-center">
            <TouchableOpacity
              onPress={() => setHidePhoneNumber(!hidePhoneNumber)}
              className="w-7 h-7 border-[1px] border-[#BFBFBF] mr-2 items-center justify-center"
            >
              {hidePhoneNumber && <View className="w-3 h-3 bg-[#000]" />}
            </TouchableOpacity>
            <View className="flex-row items-center">
              <Text className="text-[#010101] font-poppins text-[12px] uppercase">
                HIDE THE PHONE NUMBER ON THE ADS.
              </Text>
            </View>
          </View>
        </View>
        <View className="px-4">
          <View className="mt-3 flex-row items-center">
            <TouchableOpacity
              onPress={() => setReceiveMarketingEmail(!receiveMarketingEmail)}
              className="w-7 h-7 border-[1px] border-[#BFBFBF] mr-2 items-center justify-center"
            >
              {receiveMarketingEmail && <View className="w-3 h-3 bg-[#000]" />}
            </TouchableOpacity>
            <View className="flex-row items-center">
              <Text className="text-[#010101] font-poppins text-[12px] uppercase">
                I ACCEPT TO RECEIVE MARKETING EMAILS{" "}
              </Text>
            </View>
          </View>
          <View className="mt-5">
            <View className="">
              <Btn
                title={"Register"}
                handler={() => {
                  if (!isLoading) {
                    handleSubmit();
                  }
                  // router.push("(root)/home")
                }}
              />
            </View>
            <View className="mt-5 text-[#999] font-poppins flex-row items-center justify-center">
              <Text
                className="text-[14px]"
                style={{ fontFamily: "Poppins-Regular" }}
              >
                Already Have Account?
              </Text>
              <TouchableOpacity
                className=""
                onPress={() => router.replace("/login")}
              >
                <Text
                  className="text-[#010101]  text-[14px]"
                  style={{ fontFamily: "Poppins-SemiBold" }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
