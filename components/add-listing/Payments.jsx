import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const Country = ["Canada", "USA", "Bangladesh"];

export default function Payments({ cardholderData, setCardHolderData }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(Country[0]);

  const handleInputChange = (field, value) => {
    setCardHolderData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };


  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    handleInputChange("country", country);
    setShowDropdown(false);
  };

  const holderformItems = [
    {
      title: "FIRST NAME*",
      placeholder: "CARD HOLDER'S FIRST NAME",
      type: "text",
      value: cardholderData.first_name,
      changeFunction: (value) => handleInputChange("first_name", value),
    },
    {
      title: "LAST NAME*",
      placeholder: "CARD HOLDER'S LAST NAME",
      type: "text",
      value: cardholderData.last_name,
      changeFunction: (value) => handleInputChange("last_name", value),
    },
    {
      title: "ADDRESS*",
      placeholder: "CARD HOLDER'S ADDRESS",
      type: "text",
      value: cardholderData.address,
      changeFunction: (value) => handleInputChange("address", value),
    },
    {
      title: "CITY*",
      placeholder: "CARD HOLDER'S CITY",
      type: "text",
      value: cardholderData.city,
      changeFunction: (value) => handleInputChange("city", value),
    },
    {
      title: "STATE/PROVINCE*",
      placeholder: "CARD HOLDER'S STATE/PROVINCE",
      type: "text",
      value: cardholderData.state,
      changeFunction: (value) => handleInputChange("state", value),
    },
    {
      title: "POSTAL CODE*",
      placeholder: "CARD HOLDER'S POSTAL CODE",
      type: "text",
      value: cardholderData.postal_code,
      changeFunction: (value) => handleInputChange("postal_code", value),
    },
    {
      title: "COUNTRY*",
      placeholder: "CARD HOLDER'S COUNTRY",
      type: "select",
      value: cardholderData.country,
      dropdownItems: Country,
    },
  ];

  return (
    <>
      {/* Payments title */}
      <View className="border-[#00AEF0] border-b-[1px]  ">
        <View className=" mt-[25px] mb-[10px] flex-row items-center">
          <Image
            source={require("../../assets/images/payments.png")}
            resizeMode="cover"
            className="w-[24px]  h-[24px]"
            style={{ marginTop: -3 }}
          />
          <Text
            className=" text-[#00AEF0] text-[18px] font-semibold pl-[10px] "
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            PAYMENTS:
          </Text>
        </View>
      </View>

      {/* Card holder title */}
      <View
        className=" mb-[10px] flex-row items-center"
        style={{ marginTop: 35 }}
      >
        <Image
          source={require("../../assets/images/card-holder.png")}
          resizeMode="cover"
          className="w-[24px]  h-[24px]"
          style={{ marginTop: -3 }}
        />
        <Text
          className=" text-[#00AEF0] text-[20px] font-semibold pl-[10px] "
          style={{ fontFamily: "Poppins-SemiBold" }}
        >
          CARD HOLDER INFORMATION:
        </Text>
      </View>

      {/* Card Holder Information form  */}
      {holderformItems.map((item, index) => (
        <>
          <Text className=" text-[16px]" style={styles.itemTitle}>
            {item.title}
          </Text>
          {item.type === "text" ? (
            <TextInput
              className="border-[1px] border-[#DADADA] rounded-[4px] p-[8px] mt-[10px]"
              placeholder={item.placeholder}
              value={item.value}
              onChangeText={item.changeFunction}
            // keyboardType={item?.type === "numeric" ? "numeric" : "default"}
            />
          ) : (
            <View>
              <TouchableOpacity
                onPress={() => setShowDropdown(!showDropdown)}
                className="border-[1px] border-[#DADADA] rounded-[4px] p-[8px] mt-[10px]"
              >
                <View className=" flex-row flex justify-between">
                  <Text className="text-[14px] text-[#BFBFBF]">
                    {selectedCountry}
                  </Text>
                  <Image
                    source={require("../../assets/images/listing/vector-dwon.png")}
                    resizeMode="cover"
                    className="w-7  h-7"
                  />
                </View>
              </TouchableOpacity>
              {showDropdown && (
                <View className=" w-full   z-50 " style={{ marginTop: 20 }}>
                  <View
                    className=" relative bg-white border-[1px] border-black rounded-xl px-5 py-5"
                    style={{ marginHorizontal: 0 }}
                  >
                    <View
                      className=" absolute bg-white border-[1px] border-black"
                      style={{
                        width: 28,
                        height: 25,
                        top: -10,
                        right: 25,
                        transform: [{ rotate: "50deg" }],
                      }}
                    ></View>
                    <View
                      className=" absolute bg-white "
                      style={{
                        width: 50,
                        height: 25,
                        right: 9,
                      }}
                    ></View>

                    {item.dropdownItems?.map((item, index) => (
                      <TouchableOpacity
                        onPress={() => handleCountrySelect(item)}
                      >
                        <Text
                          key={index}
                          className="mb-4 "
                          style={{
                            color: "#010101",
                            fontFamily: "Poppins-SemiBold",
                            fontSize: 15,
                          }}
                        >
                          {item}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              )}
            </View>
          )}
        </>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  itemTitle: {
    fontFamily: "Poppins-SemiBold",
    marginTop: 15,
  },
});
