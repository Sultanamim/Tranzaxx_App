import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import BoostBrand from "../../components/shared/BoostBrand";
import RotateText from "../../components/shared/RotateText";
import BtnWithArrow from "../../components/shared/BtnWithArrow";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { productsCategories } from "../../constant/newData";
import * as ImagePicker from "expo-image-picker";
import ThumbnailImg from "../../assets/images/listing/thumbnail.png";
import DollerCircleImg from "../../assets/images/listing/doller-circle.png";
import UserImg from "../../assets/images/listing/user.png";
import FeaturedImg from "../../assets/images/listing/featured.png";
import Packages from "../../components/add-listing/Packages";
import Payments from "../../components/add-listing/Payments";
import Advertise from "../../components/add-listing/Advertise";

const AddListing = () => {
  const [selectedButton, setSelectedButton] = useState("ADVERTISE");
  const [selectedCategory, setSelectedCategory] = useState("SELECT A CATEGORY");
  const [showDropdown, setShowDropdown] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [negotiable, setNegotiable] = useState(false);
  const [hide, setHide] = useState(false);
  const [featured, setFeatured] = useState(false);
  const videoRef = useRef(null);

  const cardformItems = [
    {
      title: "CARD NUMBER*",
      placeholder: "CARD NUMBER",
      type: "text",
      value: "",
      changeFunction: "",
    },
    {
      title: "CARD EXPIRATION MONTH*",
      placeholder: "MM",
      type: "text",
      value: "",
      changeFunction: "",
    },
    {
      title: "CARD EXPIRATION YEAR*",
      placeholder: "YY",
      type: "text",
      value: "",
      changeFunction: "",
    },
    {
      title: "CARD CVV*",
      placeholder: "CVV",
      type: "text",
      value: "",
      changeFunction: "",
    },
  ];

  return (
    <ScrollView style={{ flex: 1, marginBottom: 5 }}>
      {/* Boost Brand Section */}
      <View className="mb-[30px] flex-row items-center justify-center">
        <BoostBrand />
      </View>

      {/* Promote Your Ad Section */}
      <View className="flex-row items-center justify-center">
        <View className="max-w-[334px] flex-row">
          <Text className="uppercase text-[34px] font-BebasNeue text-primaryBlk">
            promote your
          </Text>
          <RotateText text={"ads"} />
          <Text className="font-BebasNeue text-primaryBlk text-[34px]">
            instantly
          </Text>
        </View>
      </View>

      {/* Description Section */}
      <View className="flex-row items-center justify-center mt-[30px]">
        <Text className="max-w-[230px] font-poppins text-[#565656] text-[12px] text-center">
          Reach more customers with targeted ad posts. Boost your visibility
          today!
        </Text>
      </View>

      {/* Post Your Ad Button */}
      <View className="flex-row items-center justify-center mt-[30px]">
        <BtnWithArrow title={"Post Your Ad Now"} handler={() => {}} />
      </View>

      {/* --------------- Form Start --------------- */}
      <View
        className="bg-white mt-[20px] rounded-[12px] mx-[16px] px-[10px] w-[full] pb-[20px] mb-[20px]"
        style={{
          shadowColor: "#acacad",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.25,
          shadowRadius: 4.65,
          elevation: 8,
          marginBottom: 20,
        }}
      >
        <View className="font-poppins px-[10px]">
          {/* Tabs */}
          <View className="mt-[15px]  border-[#00AEF0] border-b-[3px] ">
            <View className=" mb-[9px] flex-row items-center justify-center ">
              <View>
                <Text
                  className={`font-poppins text-[18px] ${
                    selectedButton === "ADVERTISE"
                      ? "text-[#00AEF0]"
                      : "text-[#010101]"
                  }`}
                  style={{ fontFamily: "Poppins-SemiBold" }}
                >
                  ADVERTISE{" "}
                  <Text
                    className=" text-[23px] text-[#BFBFBF] "
                    style={{ fontFamily: "Poppins-Regular" }}
                  >
                    |
                  </Text>{" "}
                </Text>
              </View>
              <View>
                <Text
                  className={`font-poppins text-[18px] ${
                    selectedButton === "PACKAGES"
                      ? "text-[#00AEF0]"
                      : "text-[#010101]"
                  }`}
                  style={{ fontFamily: "Poppins-SemiBold" }}
                >
                  PACKAGES{" "}
                  <Text
                    className=" text-[23px] text-[#BFBFBF] "
                    style={{ fontFamily: "Poppins-Regular" }}
                  >
                    |
                  </Text>{" "}
                </Text>
              </View>
              <View>
                <Text
                  className={`font-poppins text-[18px] ${
                    selectedButton === "PAYMENTS"
                      ? "text-[#00AEF0]"
                      : "text-[#010101]"
                  }`}
                  style={{ fontFamily: "Poppins-SemiBold" }}
                >
                  PAYMENTS
                </Text>
              </View>
            </View>
          </View>

          {selectedButton === "PACKAGES" ? (
            <Packages />
          ) : selectedButton === "PAYMENTS" ? (
            <Payments />
          ) : (
            <Advertise />
          )}
        </View>
      </View>
      {/* --------------- Form End --------------- */}
      {/* Seller Info */}
      {selectedButton === "ADVERTISE" && (
        <View
          className="bg-white mt-[20px] rounded-[12px] mx-[16px] w-[full] mb-[20px]"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 4.65,
            elevation: 8,
            marginBottom: 20,
            paddingVertical: 20,
            paddingHorizontal: 15,
            paddingBottom: 30,
          }}
        >
          <View className="flex flex-row items-center">
            <Image
              source={UserImg}
              className="w-[20px] h-[20px]"
              style={{ marginRight: 10 }}
            />
            <Text
              className="text-primary text-[18px]"
              style={{ fontFamily: "Poppins-SemiBold", marginTop: 5 }}
            >
              SELLER INFORMATION:
            </Text>
          </View>
          <Text
            className=" text-[16px]"
            style={{ fontFamily: "Poppins-SemiBold", marginTop: 10 }}
          >
            YOUR NAME*
          </Text>
          <TextInput
            className="border-[1px] border-[#DADADA] rounded-[4px] p-[8px] mt-[10px]"
            placeholder="YOUR NAME"
          />
          <Text
            className=" text-[16px]"
            style={{ fontFamily: "Poppins-SemiBold", marginTop: 10 }}
          >
            PHONE NUMBER
          </Text>
          <TextInput
            className="border-[1px] border-[#DADADA] rounded-[4px] p-[8px] mt-[10px]"
            placeholder="PHONE NUMBER"
          />
          <View className="flex flex-row items-center mt-2">
            <TouchableOpacity onPress={() => setHide((prev) => !prev)}>
              {hide ? (
                <AntDesign
                  name="checksquareo"
                  size={20}
                  color="#00AEF0"
                  style={{ opacity: 0.8, marginRight: 5 }}
                />
              ) : (
                <Feather
                  name="square"
                  size={20}
                  color="#00AEF0"
                  style={{ opacity: 0.8, marginRight: 5 }}
                />
              )}
            </TouchableOpacity>
            <Text
              className="text-[#010101] text-[12px]"
              style={{ fontFamily: "Poppins-Regular", marginTop: 2 }}
            >
              HIDE
            </Text>
          </View>

          <Text
            className=" text-[16px]"
            style={{ fontFamily: "Poppins-SemiBold", marginTop: 15 }}
          >
            EMAIL*
          </Text>
          <TextInput
            className="border-[1px] border-[#DADADA] rounded-[4px] p-[8px] mt-[10px]"
            placeholder="EMAIL"
          />
        </View>
      )}

      {/* Featured Ads */}
      {selectedButton === "ADVERTISE" && (
        <View
          className="bg-white mt-[20px] rounded-[12px] mx-[16px] w-[full] mb-[20px]"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 4.65,
            elevation: 8,
            marginBottom: 20,
            paddingVertical: 20,
            paddingHorizontal: 25,
            paddingBottom: 30,
          }}
        >
          <View className="flex flex-row items-center">
            <Image
              source={FeaturedImg}
              className="w-[20px] h-[20px]"
              style={{ marginRight: 10 }}
            />
            <Text
              className="text-primary text-[18px]"
              style={{ fontFamily: "Poppins-SemiBold", marginTop: 5 }}
            >
              FEATURED ADS (20$ PER DAY):
            </Text>
          </View>
          <Text
            className="text-primary text-[20px]"
            style={{ fontFamily: "Poppins-SemiBold", marginVertical: 15 }}
          >
            PREMIUM AD*
          </Text>
          <Text
            className="text-[15px] text-[#565656] leading-[24px]"
            style={{ fontFamily: "Poppins_Regular" }}
          >
            WHEN SELECTING THE FEATURED ADS OPTIONS, YOUR AD WILL APPEAR ON THE
            HOME PAGE OF THE WEBSITE. WITH THIS HIGHER VISIBILITY YOU WILL BE
            ABLE TO PROMOTE YOUR AD MORE EFFECTIVELY, ATTRACT MORE BUYER AND
            SELL FASTER.
          </Text>
          <View className="flex flex-row items-center mt-2">
            <TouchableOpacity onPress={() => setFeatured((prev) => !prev)}>
              {featured ? (
                <AntDesign
                  name="checksquareo"
                  size={20}
                  color="#00AEF0"
                  style={{ opacity: 0.8, marginRight: 5 }}
                />
              ) : (
                <Feather
                  name="square"
                  size={20}
                  color="#00AEF0"
                  style={{ opacity: 0.8, marginRight: 5 }}
                />
              )}
            </TouchableOpacity>
            <Text
              className="text-[#010101] text-[15px]"
              style={{ fontFamily: "Poppins-SemiBold", marginTop: 2 }}
            >
              MAKE THIS AD FEATURED
            </Text>
          </View>
        </View>
      )}

      {selectedButton === "PAYMENTS" && (
        <>
          {/* Card Information form  */}
          <View
            className="bg-white mt-[20px] rounded-[12px] mx-[16px] w-[full] pb-[20px] mb-[20px]"
            style={{
              shadowColor: "#acacad",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.25,
              shadowRadius: 4.65,
              elevation: 8,
              marginBottom: 30,
              paddingHorizontal: 20,
            }}
          >
            <View
              className=" mb-[10px] flex-row items-center"
              style={{ marginTop: 35 }}
            >
              <Image
                source={require("../../assets/images/payments.png")}
                resizeMode="cover"
                className="w-[24px]  h-[24px]"
                style={{ marginTop: -3 }}
              />
              <Text
                className=" text-[#00AEF0] text-[20px] font-semibold pl-[10px] "
                style={{ fontFamily: "Poppins-SemiBold" }}
              >
                Card Information
              </Text>
            </View>
            {cardformItems.map((item, index) => (
              <>
                <Text className=" text-[16px]" style={styles.itemTitle}>
                  {item.title}
                </Text>
                {item.type === "text" && (
                  <TextInput
                    className="border-[1px] border-[#DADADA] rounded-[4px] p-[8px] mt-[10px]"
                    placeholder={item.placeholder}
                  />
                )}
              </>
            ))}
          </View>
        </>
      )}

      {/* Next Button */}
      {/* <View className="flex-row items-center justify-center mt-[30px]"> */}
      {selectedButton === "ADVERTISE" && (
        <BtnWithArrow
          title={"Next"}
          handler={() => {
            setSelectedButton("PACKAGES");
          }}
          styles={{
            marginHorizontal: 16,
            // width: 350,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        />
      )}
      {selectedButton === "PACKAGES" && (
        <BtnWithArrow
          title={"Next"}
          handler={() => {
            setSelectedButton("PAYMENTS");
          }}
          styles={{
            marginHorizontal: 16,
            // width: 350,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
            //zIndex: 10,
            // position: "absolute",
          }}
        />
      )}
      {selectedButton === "PAYMENTS" && (
        <BtnWithArrow
          title={"Next"}
          handler={() => {}}
          styles={{
            marginHorizontal: 16,
            // width: 350,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        />
      )}

      {/* </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  videoContainer: {
    position: "relative",
    width: 300,
    height: 300,
    marginTop: 20,
  },
  video: {
    width: "100%",
    height: "100%",
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  playButtonText: {
    color: "white",
    fontSize: 18,
  },
  itemTitle: {
    fontFamily: "Poppins-SemiBold",
    marginTop: 15,
  },
});

export default AddListing;
