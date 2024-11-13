import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import BoostBrand from "../../components/shared/BoostBrand";
import RotateText from "../../components/shared/RotateText";
import BtnWithArrow from "../../components/shared/BtnWithArrow";
import { Entypo } from "@expo/vector-icons";
import { productsCategories } from "../../constant/newData";
import * as ImagePicker from "expo-image-picker";
import ThumbnailImg from "../../assets/images/listing/thumbnail.png";
import { Video } from "expo-av";
import { StyleSheet } from "react-native";

const AddListing = () => {
  const [selectedButton, setSelectedButton] = useState("ADVERTISE");
  const [selectedCategory, setSelectedCategory] = useState("SELECT A CATEGORY");
  const [showDropdown, setShowDropdown] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const selectingProduct = productsCategories;
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false);
  };

  const pickImage = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "You need to allow permission to access media library"
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri);
      setThumbnail(result.assets[0].uri);
    }
  };

  const pickVideo = async () => {
    // Request permission to access media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Permission to access media library is required!");
      return;
    }

    // Open the video picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setVideo(result.assets[0].uri); // Store the video URI
    }
  };
  const handlePlayPause = async () => {
    if (isPlaying) {
      await videoRef.current.pauseAsync();
    } else {
      await videoRef.current.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

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
          shadowColor: "#000",
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
              <TouchableOpacity>
                <Text
                  className=" font-poppins text-[18px] text-[#00AEF0]"
                  style={{ fontWeight: 600 }}
                >
                  ADVERTISE{" "}
                  <Text className=" text-[23px] text-[#BFBFBF] ">|</Text>{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className=" font-poppins text-[18px] font-[700]">
                  PACKAGES{" "}
                  <Text className=" text-[23px] text-[#BFBFBF] ">|</Text>{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className=" font-poppins text-[18px] font-[700]">
                  PAYMENTS
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Add Information */}
          <View className="border-[#00AEF0] border-b-[1px]  ">
            <View className=" mt-[25px] mb-[10px] flex-row items-center">
              <Image
                source={require("../../assets/images/listing/paperplus.png")}
                resizeMode="cover"
                className="w-5  h-5"
              />
              <Text className=" text-[#00AEF0] text-[18px] font-semibold pl-[10px] ">
                ADD INFORMATION:
              </Text>
            </View>
          </View>

          {/* Custom Select Field */}
          <Text className=" text-[16px] font-semibold mt-[25px]">
            CATEGORY*
          </Text>
          <TouchableOpacity
            onPress={() => setShowDropdown(!showDropdown)}
            className="border-[1px] border-[#DADADA] rounded-[4px] p-[8px] mt-[10px]"
          >
            <View className=" flex-row flex justify-between">
              <Text className="text-[14px] text-[#BFBFBF]">
                {selectedCategory}
              </Text>
              <Image
                source={require("../../assets/images/listing/vector-dwon.png")}
                resizeMode="cover"
                className="w-7  h-7"
              />
            </View>
          </TouchableOpacity>

          {showDropdown && (
            <View
              className=" mt-[10px] rounded-[8px] bg-white px-[20px] pb-[15px] "
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.25,
                shadowRadius: 4.65,
                elevation: 8,
              }}
            >
              <View className="flex-row flex justify-between items-center pt-[15px] ">
                <Text className=" text-[16px] font-semibold  ">
                  Select a category
                </Text>
                <View className="bg-[#00AEF0] p-[6px] rounded-2xl ">
                  <Image
                    source={require("../../assets/images/listing/cross.png")}
                    resizeMode="cover"
                    className="w-3  h-3"
                  />
                </View>
              </View>
              {selectingProduct.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleCategorySelect(category.name)}
                  className="py-[12px]  border-b-[1px] border-[#BFBFBF]"
                >
                  <View className="flex-row items-center">
                    <Image
                      source={category.img}
                      resizeMode="cover"
                      className="w-[20px] h-[20px] "
                    />
                    <Text className="ml-[6px] text-[14px] text-[#010101]">
                      {category.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
          <View className=" mt-[25px] ">
            <Text className=" text-[16px] font-semibold">TITLE*</Text>
            <TextInput
              className="border-[1px] border-[#DADADA] rounded-[4px] p-[8px] mt-[10px]"
              placeholder="AD TITLE"
            />
            <Text className=" mt-[10px] text-[13px] font-semibold">
              A GREAT TITLE NEEDS AT LEAST 60 CHARACTERS.*
            </Text>
            <View className=" mt-[25px] ">
              <Text className=" text-[16px] font-semibold">DESCRIPTION*</Text>
              <TextInput
                className="border-[1px] border-[#DADADA] rounded-[4px] p-[8px] pb-[50px] mt-[10px]"
                placeholder="TELL US ABOUT YOUR PROJECT..."
              />
            </View>
            {/* Thumbnail */}
            <View className="mt-[25px]">
              <Text className="text-[16px] font-semibold">THUMBNAIL</Text>
              <View
                className="border-[1px] border-[#DADADA] rounded-[4px]px-[2px] mt-[10px]"
                style={{ paddingVertical: 50 }}
              >
                <View className="flex-col items-center py-[40px]">
                  <TouchableOpacity onPress={pickImage}>
                    {!thumbnail ? (
                      <Image
                        source={ThumbnailImg}
                        resizeMode="contain"
                        className="w-[50px] h-[50px] mb-[4px]"
                      />
                    ) : (
                      <Image
                        source={{ uri: thumbnail }}
                        className="w-[100px] h-[100px] rounded-[8px] mb-[4px]"
                      />
                    )}
                  </TouchableOpacity>
                  <Text className="text-[14px] text-[#737373] text-center">
                    {thumbnail
                      ? "Change Image"
                      : "ADD 1 APPEALING THUMBNAIL FOR MAXIMUM VISUAL IMPACT (OPTIONAL)."}
                  </Text>
                </View>
              </View>
            </View>
            {/* Video */}
            <View className="mt-[25px]">
              <Text className="text-[16px] font-semibold">VIDEO*</Text>
              <View
                className="border-[1px] border-[#DADADA] rounded-[4px]px-[2px] mt-[10px]"
                style={{ paddingVertical: 50 }}
              >
                <View className="flex-col items-center py-[40px]">
                  {!video ? (
                    <TouchableOpacity onPress={pickVideo}>
                      <Image
                        source={ThumbnailImg}
                        resizeMode="contain"
                        className="w-[50px] h-[50px] mb-[4px]"
                      />
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.videoContainer}>
                      <Video
                        ref={videoRef}
                        source={{ uri: video }}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        style={styles.video}
                        shouldPlay={false}
                        className="w-[300px] h-[180px] rounded-[8px] mb-[4px]"
                      />
                      {!isPlaying && (
                        <TouchableOpacity
                          style={styles.playButton}
                          onPress={handlePlayPause}
                        >
                          <Text style={styles.playButtonText}>Play ▶</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  )}

                  <Text className="text-[14px] text-[#737373] text-center">
                    {video
                      ? "Change Video"
                      : "ADD UP TO 1 VIDEOS. USE REAL VIDEOS OF YOUR PRODUCT."}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* --------------- Form End --------------- */}
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
});

export default AddListing;
