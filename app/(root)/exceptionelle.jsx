import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
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

const Exceptionelle = () => {
  const { id } = useLocalSearchParams();
  const [isModalVisible, setModalVisible] = useState(false);

  console.log(id);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [isModalMessageVisible, setModalMessageVisible] = useState(false);

  const toggleModalMessage = () => {
    setModalMessageVisible(!isModalMessageVisible);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="mx-[16px] font-[poppins] mb-[20px] ">
        <View className="flex-row mt-[40px]">
          <Text className=" text-[14px]  " style={styles.regularTxt}>
            ALL CATEGORIES/
          </Text>
          <Text
            className=" text-[14px] font-semibold "
            style={styles.semiboldTxt}
          >
            HOUSES & APARTMENTS FOR RENT
          </Text>
        </View>
        <Text
          className=" text-[22px] mt-[16px] font-semibold "
          style={styles.semiboldTxt}
        >
          MODERN HOUSE IN CHARMING SUBURB
        </Text>
        <View className="flex-row mt-[16px] items-center ">
          <Text
            className=" text-[16px]  font-semibold "
            style={styles.semiboldTxt}
          >
            SEP 22ND, 2024 AT 02:36
          </Text>
          <Text className="ml-[10px] text-[#BFBFBF] text-[18px]  ">|</Text>
          <Image
            source={Eye}
            resizeMode="cover"
            className="w-5  h-5 ml-[10px] "
          />
          <Text
            className="ml-[10px]  text-[16px]  font-semibold  "
            style={styles.semiboldTxt}
          >
            1000
          </Text>
        </View>
        <Image
          source={Share}
          resizeMode="cover"
          className="w-5  h-5 mt-[30px] "
        />
        <Image
          source={Car}
          resizeMode="cover"
          className="w-[361px]  h-[207px] mt-[25px] "
        />
        <Text className=" text-[22px]  font-semibold mt-[30px] ">
          AD DETAILS
        </Text>
        <View className="flex-row mt-[16px] items-center ">
          <Text className=" text-[#999999] font-semibold text-[19px] ">
            PRICE:
          </Text>
          <Image
            source={Export}
            resizeMode="cover"
            className="w-5  h-5 ml-[10px] "
          />
          <Text className="ml-[5px] text-[#00AEF0] text-[19px]  font-semibold  ">
            125,000 $
          </Text>
        </View>
        <Text className="mt-[16px]  text-[20px]  font-semibold  ">
          VOITURE DE SPORT EXCEPTIONNELLE
        </Text>
        <View className="flex-row mt-[16px] items-center ">
          <Image
            source={Location}
            resizeMode="cover"
            className="w-[14px]  h-[19px]  "
          />
          <Text className=" ml-[8px] text-[18px]  font-semibold text-[#061B3B] ">
            MONTREAL
          </Text>
        </View>
        <Text className="text-[14px] mt-[5px] text-[#565656] ">
          À vendre : Voiture de sport exceptionnelle{" "}
        </Text>
        <Text className="text-[14px] mt-[20px] text-[#565656] ">
          Découvrez cette magnifique voiture de sport au design aérodynamique et
          aux couleurs saisissantes orange et noir. Dotée de technologies de
          pointe et de performances inégalées, elle est prête à offrir une
          expérience de conduite palpitante. Ne manquez pas l’occasion de
          posséder le summum du luxe et de la vitesse.
        </Text>
        <View className="mt-[20px] ">
          <Text className="text-[26px] font-semibold text-[#565656]">
            Caractéristiques principales:
          </Text>
          <View className="flex-row mt-[10px] ml-[3px] ">
            <Entypo name="dot-single" size={24} color="#061B3B" />
            <Text className="text-[18px] font-semibold text-#061B3B]">
              DESIGN AERODYNAMIQUE AVEC UN AILERON ARRIÈRE DISTINCTIF
            </Text>
          </View>
          <View className="flex-row mt-[10px] ml-[3px] ">
            <Entypo name="dot-single" size={24} color="#061B3B" />
            <Text className="text-[18px] font-semibold text-#061B3B]">
              COULEURS ORANGE ET NOIR ATTRAYANTES
            </Text>
          </View>
          <View className="flex-row mt-[10px] ml-[3px] ">
            <Entypo name="dot-single" size={24} color="#061B3B" />
            <Text className="text-[18px] font-semibold text-#061B3B]">
              TECHNOLOGIE DE POINTE
            </Text>
          </View>
          <View className="flex-row mt-[10px] ml-[3px] ">
            <Entypo name="dot-single" size={24} color="#061B3B" />
            <Text className="text-[18px] font-semibold text-#061B3B]">
              PERFORMANCES EXCEPTIONNELLES
            </Text>
          </View>
          <Text className="text-[14px] mt-[15px] text-[#565656] ">
            Contact: Pour plus d'informations et pour organiser une visite,
            veuillez contacter Jean Dupont.
          </Text>
        </View>
        {/*----- Aditional Details-----*/}
        <View className="mt-[20px] ">
          <Text className=" text-[22px]  font-semibold ">
            ADDITIONAL DETAILS
          </Text>
          <View className="flex-row mt-[10px] py-[7px] px-[10px] border-[1px] rounded border-[#BFBFBF] items-center justify-between ">
            <Text className=" text-[18px]  font-semibold ">CAR BRAND</Text>
            <Text className=" text-[18px]  font-semibold ">PORSCHE</Text>
          </View>
          <View className="flex-row mt-[10px] py-[7px] px-[10px] border-[1px] rounded border-[#BFBFBF] items-center justify-between ">
            <Text className=" text-[18px]  font-semibold ">
              YEAR OF REGISTRATION
            </Text>
            <Text className=" text-[18px]  font-semibold ">2022</Text>
          </View>
          <View className="flex-row mt-[10px] py-[7px] px-[10px] border-[1px] rounded border-[#BFBFBF] items-center justify-between ">
            <Text className=" text-[18px]  font-semibold ">FUEL TYPE</Text>
            <Text className=" text-[18px]  font-semibold ">ESSENCE</Text>
          </View>
          <View className="flex-row mt-[10px] py-[7px] px-[10px] border-[1px] rounded border-[#BFBFBF] items-center justify-between ">
            <Text className=" text-[18px]  font-semibold ">TRANSMISSION</Text>
            <Text className=" text-[18px]  font-semibold ">AUTOMATIC</Text>
          </View>
          <View className="flex-row mt-[10px] py-[7px] px-[10px] border-[1px] rounded border-[#BFBFBF] items-center justify-between ">
            <Text className=" text-[18px]  font-semibold ">CONDITION</Text>
            <Text className=" text-[18px]  font-semibold ">USED</Text>
          </View>
          <View className="flex-row mt-[10px] py-[7px] px-[10px] border-[1px] rounded border-[#BFBFBF] items-center justify-between ">
            <Text className=" text-[18px]  font-semibold ">MILEAGE</Text>
            <Text className=" text-[18px]  font-semibold ">25000</Text>
          </View>
          <View className=" mt-[10px] py-[7px] px-[10px] border-[1px] rounded border-[#BFBFBF]   ">
            <Text className=" text-[18px]  font-semibold mt-[5px] ">
              FEATURES:
            </Text>
            <View className="flex-row mt-[20px] ml-[10px] items-center ">
              <AntDesign name="check" size={18} color="black" />
              <Text className=" text-[18px] ml-[5px] font-medium ">
                AIR CONDITIONER
              </Text>
              <AntDesign
                name="check"
                size={18}
                color="black"
                className="ml-[5px] "
              />
              <Text className=" text-[18px] ml-[5px] font-medium ">GPS</Text>
            </View>
            <View className="flex-row mt-[10px] ml-[10px] items-center mb-[10px] ">
              <AntDesign name="check" size={18} color="black" />
              <Text className=" text-[18px] ml-[5px] font-medium ">
                SECURITY SYSTEM
              </Text>
              <AntDesign
                name="check"
                size={18}
                color="black"
                className="ml-[5px] "
              />
              <Text className=" text-[18px] ml-[5px] font-medium ">
                SPARE TIRE
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-row mt-[25px] items-center justify-between ">
          <Text className=" text-[22px] font-semibold ">TAGS:</Text>
          <View className="flex-row">
            <Text className=" text-[14px] rounded-[4px] mr-[10px] bg-[#00AEF0] px-[13px] py-[10px] ">
              SPORT
            </Text>
            <Text className=" text-[14px] rounded-[4px] mr-[10px] bg-[#00AEF0] px-[13px] py-[10px] ">
              SPEED
            </Text>
            <Text className=" text-[14px] rounded-[4px] bg-[#00AEF0] px-[13px] py-[10px] ">
              EXPERIMENTAL
            </Text>
          </View>
        </View>
      </View>

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
            <Text className=" text-[#BFBFBF] text-[18px]  font-semibold ">
              FEATURES:
            </Text>
            <Text className="  text-[18px]  font-semibold ">
              MAY 17TH, 2022 AT 19:11
            </Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          {/* Phone Button */}
          <TouchableOpacity
            className="bg-[#00ADEF] mt-[15px] mx-[15px] rounded-[4px] py-[10px] px-[15px] items-center"
            onPress={toggleModal}
          >
            <Text className="text-center text-[#FFFFFF]">Phone</Text>
          </TouchableOpacity>

          {/* Modal for Popup */}
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
                      +15146785432
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
                      SITE IS A CHANNEL FOR CONNECTING PEOPLE. SO PLEASE CHECK
                      THE QUALITY OF THE PRODUCT OR SERVICE BEFORE BUYING OR
                      RENTING IT.
                    </Text>
                  </View>
                  <View className="flex-row mt-[5px] mx-[20px] ">
                    <Entypo name="dot-single" size={24} color="#061B3B" />
                    <Text className="text-[18px] ml-[-2px] font-BebasNeue text-[16px] w-[242px] ">
                      IMPORTANT: DON'T SEND MONEY REMOTELY FOR A PRODUCT OR FOR
                      A SERVICE.
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

        <View style={{ flex: 1 }}>
          {/* Phone Button */}
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

          {/* Modal for Popup */}
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
        <Text className="text-center text-[22px] font-semibold ">
          SAFETY TIPS FOR BUYERS
        </Text>
        <View className="flex-row mt-[20px] ml-[10px] items-center mb-[10px] ">
          <AntDesign name="check" size={18} color="#00AEF0" />
          <Text className=" text-[18px] ml-[5px] font-medium ">
            MEET SELLER AT A PUBLIC PLACE
          </Text>
        </View>
        <View className="flex-row mt-[10px] ml-[10px] items-center mb-[10px] ">
          <AntDesign name="check" size={18} color="#00AEF0" />
          <Text className=" text-[18px] ml-[5px] font-medium ">
            CHECK THE ITEM BEFORE YOU BUY
          </Text>
        </View>
        <View className="flex-row mt-[10px] ml-[10px] items-center mb-[10px] ">
          <AntDesign name="check" size={18} color="#00AEF0" />
          <Text className=" text-[18px] ml-[5px] font-medium w-[300px] ">
            PAY ONLY AFTER COLLECTING THE ITEM
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => router.push("/report")}
        className="mx-[15] mt-[15px] flex-row items-center justify-center mb-[20px] "
      >
        <Image source={Warning} resizeMode="cover" className="w-[19px]  h-5" />
        <Text className=" text-[18px] ml-[5px] text-[#00AEF0] ">
          REPORT ABUSE
        </Text>
      </TouchableOpacity>
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
});
