import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Eye from "../../assets/images/exceptionelle/eye.png";
import Share from "../../assets/images/exceptionelle/share.png";
import Car from "../../assets/images/exceptionelle/car.png";
import Message from "../../assets/images/exceptionelle/message.png";
import Export from "../../assets/images/exceptionelle/export.png";
import Location from "../../assets/images/exceptionelle/location.png";
import Warning from "../../assets/images/exceptionelle/warning.png";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { getSinglePosts, getSinglePostsWithDetail } from "../../apiService";
import {
  additionalDetail,
  characteristics,
  videoUrlPrepend,
} from "../../constant/newData";
import { WebView } from "react-native-webview";
import { Dimensions, useWindowDimensions } from "react-native";
import RenderHTML from "react-native-render-html";
import { format } from "date-fns";

const Exceptionelle = () => {
  const { id } = useLocalSearchParams();
  const { width } = useWindowDimensions();
  const [isModalVisible, setModalVisible] = useState(false);
  const [detail, setDetail] = useState(null);
  const [extraDetail, setExtraDetail] = useState(null);
  const [extras, setExtras] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getSinglePosts(id);
        //console.log(data.result.videos);
        setDetail(data?.result);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchUsers();
  }, [id]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getSinglePostsWithDetail(id);
        //console.log(data?.extra.fields.original.result);
        setExtraDetail(data?.result);
        setExtras(data?.extra.fields.original.result);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchUsers();
  }, [id]);

  function formatDate(dateString) {
    return format(
      new Date(dateString),
      "MMMM do, yyyy 'AT' HH:mm"
    ).toUpperCase();
  }

  if (detail) {
    //console.log(detail);
  }

  //console.log(id);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [isModalMessageVisible, setModalMessageVisible] = useState(false);

  const toggleModalMessage = () => {
    setModalMessageVisible(!isModalMessageVisible);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {isLoading && !detail && !extraDetail && !extras ? (
        <ActivityIndicator size="large" color="#00AEF0" />
      ) : (
        <>
          <View className="mx-[16px] font-[poppins] mb-[20px] ">
            {/* -----Category Title -- */}
            <View className="flex-row mt-[40px]">
              <Text className=" text-[14px]  " style={styles.regularTxt}>
                ALL CATEGORIES/
              </Text>
              <Text
                className=" text-[14px] font-semibold "
                style={styles.semiboldTxt}
              >
                {extraDetail?.category.name}
              </Text>
            </View>
            {/* ------- Title ------ */}
            <Text
              className=" text-[22px] mt-[16px] font-semibold "
              style={styles.semiboldTxt}
            >
              {detail?.title}
            </Text>
            {/* ---- POSt time & Views ---- */}
            <View className="flex-row mt-[16px] items-center ">
              <Text
                className=" text-[16px]  font-semibold "
                style={styles.semiboldTxt}
              >
                {detail?.created_at_formatted}
              </Text>
              <Text className="ml-[10px] text-[#BFBFBF] text-[18px]  ">|</Text>
              <Image
                source={Eye}
                resizeMode="cover"
                className="w-5  h-5 ml-[10px] "
              />
              <Text
                className="ml-[10px]  text-[16px]"
                style={styles.semiboldTxt}
              >
                {detail?.visits}
              </Text>
            </View>
            {/* ----- Post Video ------- */}
            <Image
              source={Share}
              resizeMode="cover"
              className="w-5  h-5 mt-[30px] "
            />

            {detail && (
              <View
                key={detail?.id}
                style={[styles.videoContainer, { height: 200 }]}
              >
                <WebView
                  source={{
                    html: `
                  <style>
                    body {
                      margin: 0;
                      padding: 0;
                      background: transparent;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      height: 100%;
                      overflow: hidden;
                    }
                    iframe {
                      width: 100%;
                      height: 100%;
                      border: none;
                    }
                  </style>
                  <iframe src="${videoUrlPrepend}${detail?.videos[0].url}" allowfullscreen></iframe>
                `,
                  }}
                  javaScriptEnabled
                  allowsFullscreenVideo
                  // onLoad={() => handleWebViewLoad(index)}
                  style={{ flex: 1 }}
                />
              </View>
            )}

            <Text
              className=" text-[22px] mt-[30px] "
              style={styles.semiboldTxt}
            >
              AD DETAILS
            </Text>
            {/* ------- Price ----- */}
            <View className="flex-row mt-[16px] items-center ">
              <Text className=" text-[#999999] font-semibold text-[19px] ">
                PRICE:
              </Text>
              <Image
                source={Export}
                resizeMode="cover"
                className="w-5  h-5 ml-[10px] "
              />
              <Text
                className="ml-[5px] text-[#00AEF0] text-[19px]"
                style={styles.semiboldTxt}
              >
                {detail?.price} $
              </Text>
            </View>
            <Text
              className="mt-[16px]  text-[20px] "
              style={styles.semiboldTxt}
            >
              VOITURE DE SPORT EXCEPTIONNELLE
            </Text>
            {/* ---- Location ----- */}
            <View className="flex-row mt-[16px] items-center ">
              <Image
                source={Location}
                resizeMode="cover"
                className="w-[14px]  h-[19px]  "
              />
              <Text
                className=" ml-[8px] text-[18px]  font-semibold text-[#061B3B] "
                style={styles.semiboldTxt}
              >
                {extraDetail?.city.name}
              </Text>
            </View>
            <Text className="text-[14px] mt-[5px] text-[#565656] ">
              À vendre : Voiture de sport exceptionnelle{" "}
            </Text>
            {/* ---- Post Description ----- */}
            <RenderHTML
              contentWidth={width}
              source={{ html: detail?.description }}
            />
            {/*----- Characteristics -----*/}
            <View className="mt-[20px] ">
              <Text
                className="font-semibold text-[#565656]"
                style={[styles.semiboldTxt, { fontSize: 24 }]}
              >
                Caractéristiques principales:
              </Text>
              {characteristics.map((item, index) => (
                <View className="flex-row mt-[10px] ml-[3px] " key={index}>
                  <Entypo name="dot-single" size={24} color="#061B3B" />
                  <Text
                    className="text-[18px] font-semibold text-#061B3B]"
                    style={styles.semiboldTxt}
                  >
                    {item}
                  </Text>
                </View>
              ))}

              <Text className="text-[14px] mt-[15px] text-[#565656] ">
                Contact: Pour plus d'informations et pour organiser une visite,
                veuillez contacter Jean Dupont.
              </Text>
            </View>
            {/*----- Aditional Details-----*/}
            <View className="mt-[20px] ">
              <Text
                className=" text-[22px]  font-semibold "
                style={styles.semiboldTxt}
              >
                ADDITIONAL DETAILS
              </Text>
              {extras?.map((item, index) => {
                // Check if item.default_value is not an object
                if (
                  typeof item.default_value === "object" &&
                  item.default_value !== null
                ) {
                  return null; // Skip rendering this item if default_value is an object
                }

                return (
                  <View
                    className="flex-row mt-[10px] py-[7px] px-[10px] border-[1px] rounded border-[#BFBFBF] items-center justify-between "
                    key={index}
                  >
                    <Text
                      className="text-[18px] font-semibold"
                      style={styles.semiboldTxt}
                    >
                      {item.name}
                    </Text>
                    <Text
                      className="text-[18px] font-semibold"
                      style={styles.semiboldTxt}
                    >
                      {item.default_value}
                    </Text>
                  </View>
                );
              })}

              {/* Features */}
              <View className=" mt-[10px] py-[7px] px-[10px] border-[1px] rounded border-[#BFBFBF]   ">
                <Text
                  className=" text-[18px]  font-semibold mt-[5px] "
                  style={styles.semiboldTxt}
                >
                  FEATURES:
                </Text>
                <View className="flex-row mt-[20px] ml-[10px] items-center ">
                  <AntDesign name="check" size={18} color="black" />
                  <Text
                    className=" text-[18px] ml-[5px] font-medium "
                    style={styles.mediumTxt}
                  >
                    AIR CONDITIONER
                  </Text>
                  <AntDesign
                    name="check"
                    size={18}
                    color="black"
                    className="ml-[5px] "
                  />
                  <Text
                    className=" text-[18px] ml-[5px] font-medium "
                    style={styles.mediumTxt}
                  >
                    GPS
                  </Text>
                </View>
                <View className="flex-row mt-[10px] ml-[10px] items-center mb-[10px] ">
                  <AntDesign name="check" size={18} color="black" />
                  <Text
                    className=" text-[18px] ml-[5px] font-medium "
                    style={styles.mediumTxt}
                  >
                    SECURITY SYSTEM
                  </Text>
                  <AntDesign
                    name="check"
                    size={18}
                    color="black"
                    className="ml-[5px] "
                  />
                  <Text
                    className=" text-[18px] ml-[5px] font-medium "
                    style={styles.mediumTxt}
                  >
                    SPARE TIRE
                  </Text>
                </View>
              </View>
            </View>
            {/* ------- Tags -------- */}
            <View className="flex-row mt-[25px] items-start justify-between ">
              <Text
                className=" text-[22px] font-semibold  mr-2"
                style={styles.semiboldTxt}
              >
                TAGS:
              </Text>
              <View className="flex-row flex-wrap gap-3" style={{ width: 280 }}>
                {extraDetail?.tags.split(",").map((tag, index) => (
                  <Text
                    key={index}
                    className=" text-[14px] rounded-[4px] mr-[10px] bg-[#00AEF0] px-[13px] py-[10px] uppercase"
                  >
                    {tag.trim()}
                  </Text>
                ))}
              </View>
            </View>
          </View>
          {/* ------- MODALS ---------- */}
          <View
            style={{
              backgroundColor: "#FFFFFF",
              shadowColor: "#00AEF0",
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.3,
              shadowRadius: 10,
              elevation: 5,
              paddingTop: 15,
              borderRadius: 8,
              marginTop: 20,
              marginHorizontal: 15,
              marginVertical: 15,
              paddingBottom: 15,
            }}
          >
            <View className="  mx-[15px] border-[#BFBFBF] border-t-[1px] border-b-[1px] ">
              <View className="flex-row my-[10px] justify-between ">
                <Text
                  className=" text-[#BFBFBF] text-[16px]  font-semibold "
                  style={styles.semiboldTxt}
                >
                  FEATURES:
                </Text>
                <Text
                  className="  text-[16px]  font-semibold "
                  style={styles.semiboldTxt}
                >
                  {extraDetail && formatDate(extraDetail?.featured_end)}
                </Text>
              </View>
            </View>
            {/* PHONE */}
            <View style={{ flex: 1 }}>
              {/* Phone Button */}
              <TouchableOpacity
                className="bg-[#00ADEF] mt-[15px] mx-[15px] rounded-[4px] py-[10px] px-[15px] items-center"
                onPress={toggleModal}
              >
                <Text className="text-center text-[#FFFFFF]">Phone</Text>
              </TouchableOpacity>

              {/* Modal for Phone */}
              <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={toggleModal} // Close the modal when clicking outside or pressing back
              >
                <View
                  className=""
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <View className="w-[300px] h-auto pb-[15px]  bg-white rounded-[16px]  ">
                    <View className=" flex-row justify-between px-[20px] pt-[20px] pb-[10px] ">
                      <Text className="text-[24px] uppercase font-BebasNeue">
                        Phone Number
                      </Text>
                      <TouchableOpacity
                        onPress={toggleModal}
                        className="bg-[#00AEF0] p-[8px] rounded-[16px] "
                      >
                        <Image
                          source={require("../../assets/images/listing/cross.png")}
                          resizeMode="cover"
                          className="w-3  h-3"
                        />
                      </TouchableOpacity>
                    </View>
                    <View className="border-t-[1px] border-[#BFBFBF] ">
                      <TouchableOpacity className="bg-[#00ADEF] mt-[10px] mx-[20px] rounded-[4px] py-[10px] px-[15px] items-center">
                        <Text className="font-BebasNeue text-[24px]  text-[#FFFFFF]">
                          {extraDetail?.phone}
                        </Text>
                      </TouchableOpacity>
                      <View className="mx-[20] mt-[10px] flex-row items-center mb-[20px] ">
                        <Image
                          source={Warning}
                          resizeMode="cover"
                          className="w-[24px]  h-[24px]  "
                        />
                        <Text className=" text-[30px] ml-[10px] font-BebasNeue text-[#00AEF0] ">
                          Safety tips
                        </Text>
                      </View>
                      <View className="flex-row mx-[20px] ">
                        <Entypo name="dot-single" size={24} color="#061B3B" />
                        <Text className="text-[18px] ml-[-2px] font-BebasNeue text-[16px] w-[242px] ">
                          THE ADVERTISEMENTS ARE PUBLISHED BY INDIVIDUALS OR
                          PROFESSIONALS AND DON'T DIRECTLY CONCERN TRANZAXX. OUR
                          SITE IS A CHANNEL FOR CONNECTING PEOPLE. SO PLEASE
                          CHECK THE QUALITY OF THE PRODUCT OR SERVICE BEFORE
                          BUYING OR RENTING IT.
                        </Text>
                      </View>
                      <View className="flex-row mt-[5px] mx-[20px] ">
                        <Entypo name="dot-single" size={24} color="#061B3B" />
                        <Text className="text-[18px] ml-[-2px] font-BebasNeue text-[16px] w-[242px] ">
                          IMPORTANT: DON'T SEND MONEY REMOTELY FOR A PRODUCT OR
                          FOR A SERVICE.
                        </Text>
                      </View>
                    </View>

                    <View className="border-t-[1px] mt-[20px]  border-[#061B3B] ">
                      <View className="mx-[20px] flex-row">
                        <TouchableOpacity
                          onPress={toggleModal}
                          className="bg-[#00ADEF] mt-[10px]  w-[125px] mr-[10px] rounded-[4px] py-[10px] px-[15px] items-center"
                        >
                          <Text className="font-BebasNeue text-[18px]  text-[#FFFFFF]">
                            Close
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-[#00ADEF] mt-[10px] w-[125px] rounded-[4px] py-[10px] px-[15px] items-center">
                          <Text className="font-BebasNeue text-[18px]  text-[#FFFFFF]">
                            send
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
            {/* SEND MESSAGE */}
            <View style={{ flex: 1 }}>
              {/* Send Message Button */}
              <TouchableOpacity
                className="bg-[#00ADEF] mt-[15px] mx-[15px] rounded-[4px] py-[10px] px-[15px] items-center"
                onPress={toggleModalMessage}
              >
                <View className="flex-row">
                  <Image
                    source={Message}
                    resizeMode="cover"
                    className="w-5  h-5  "
                  />
                  <Text className="ml-[7px] text-center text-[#FFFFFF] ">
                    Send A Message
                  </Text>
                </View>
              </TouchableOpacity>

              {/* Send Message Modal*/}
              <Modal
                animationType="slide"
                transparent={true}
                visible={isModalMessageVisible}
                onRequestClose={toggleModalMessage} // Close the modal when clicking outside or pressing back
              >
                <View
                  className=""
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <View className="w-[300px] h-auto pb-[15px]  bg-white rounded-[16px]  ">
                    <View className=" flex-row justify-between px-[20px] pt-[20px] pb-[15px] ">
                      <Text className="text-[24px] font-BebasNeue">
                        Contact Advertiser
                      </Text>
                      <TouchableOpacity
                        onPress={toggleModalMessage}
                        className="bg-[#00AEF0] p-[8px] rounded-[16px] "
                      >
                        <Image
                          source={require("../../assets/images/listing/cross.png")}
                          resizeMode="cover"
                          className="w-3  h-3"
                        />
                      </TouchableOpacity>
                    </View>
                    <View className="border-t-[1px] border-[#BFBFBF] ">
                      <View className="mx-[20px] ">
                        <Text className="text-[16px] mt-[12px] font-BebasNeue">
                          Phone number
                        </Text>
                        <TextInput
                          className="border-[1px] border-[#DADADA] font-BebasNeue rounded-[6px] py-[10px] px-[12px] mt-[10px]"
                          placeholder="Phone number"
                        />

                        <Text className="text-[16px] mt-[12px] font-BebasNeue">
                          Message (500 Max) *
                        </Text>
                        <TextInput
                          style={{
                            borderWidth: 1,
                            borderColor: "#DADADA",
                            fontFamily: "BebasNeue",
                            borderRadius: 6,
                            paddingVertical: 10,
                            paddingHorizontal: 12,
                            marginTop: 10,
                            textAlignVertical: "top",
                            height: 80,
                          }}
                          placeholder="Your Message Here"
                          maxLength={500}
                          multiline
                        />
                      </View>
                    </View>

                    <View className="border-t-[1px] mt-[20px]  border-[#061B3B] ">
                      <View className="mx-[20px] flex-row">
                        <TouchableOpacity
                          onPress={toggleModalMessage}
                          className="bg-[#00ADEF] mt-[10px]  w-[125px] mr-[10px] rounded-[4px] py-[10px] px-[15px] items-center"
                        >
                          <Text className="font-BebasNeue text-[18px]  text-[#FFFFFF]">
                            Close
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-[#00ADEF] mt-[10px] w-[125px] rounded-[4px] py-[10px] px-[15px] items-center">
                          <Text className="font-BebasNeue text-[18px]  text-[#FFFFFF]">
                            send
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
          {/* ------- Safety Tips ----- */}
          <View
            style={{
              backgroundColor: "#FFFFFF",
              shadowColor: "#00AEF0",
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.3,
              shadowRadius: 10,
              elevation: 5,
              paddingTop: 15,
              borderRadius: 8,
              marginHorizontal: 15,
              marginVertical: 30,
              paddingBottom: 15,
            }}
          >
            <Text
              className="text-center text-[22px] font-semibold "
              style={styles.semiboldTxt}
            >
              SAFETY TIPS FOR BUYERS
            </Text>
            <View className="flex-row mt-[20px] ml-[10px] items-center mb-[10px] ">
              <AntDesign name="check" size={18} color="#00AEF0" />
              <Text
                className=" text-[18px] ml-[5px] font-medium "
                style={styles.mediumTxt}
              >
                MEET SELLER AT A PUBLIC PLACE
              </Text>
            </View>
            <View className="flex-row mt-[10px] ml-[10px] items-center mb-[10px] ">
              <AntDesign name="check" size={18} color="#00AEF0" />
              <Text
                className=" text-[18px] ml-[5px] font-medium "
                style={styles.mediumTxt}
              >
                CHECK THE ITEM BEFORE YOU BUY
              </Text>
            </View>
            <View className="flex-row mt-[10px] ml-[10px] items-center mb-[10px] ">
              <AntDesign name="check" size={18} color="#00AEF0" />
              <Text
                className=" text-[18px] ml-[5px] font-medium w-[300px] "
                style={styles.mediumTxt}
              >
                PAY ONLY AFTER COLLECTING THE ITEM
              </Text>
            </View>
          </View>
          {/* --------- Report Abuse button -------- */}
          <TouchableOpacity
            onPress={() => {
              router.push("/report");
              router.setParams({ id: id });
            }}
            className="mx-[15] mt-[15px] flex-row items-center justify-center mb-[20px] "
          >
            <Image
              source={Warning}
              resizeMode="cover"
              className="w-[19px]  h-5"
            />
            <Text className=" text-[18px] ml-[5px] text-[#00AEF0] ">
              REPORT ABUSE
            </Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
};

export default Exceptionelle;

const styles = StyleSheet.create({
  regularTxt: {
    fontFamily: "Poppins-Regular",
  },
  mediumTxt: {
    fontFamily: "Poppins-Medium",
  },
  semiboldTxt: {
    fontFamily: "Poppins-SemiBold",
  },
  videoContainer: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  video: {
    flex: 1, // Let the WebView fill its container
    width: "100%", // Ensure full width
    height: "100%", // Ensure full height
  },
});
