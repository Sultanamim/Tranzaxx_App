import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, Image } from "react-native";
import { imageUrlAppend } from "../../constant/newData";
import { Video } from "expo-av";

//
/*  

 {
        category: "automobile",
        title: "cars",
        img: car,
        icon: carIcon,
        place: "MONTREAL",
        price: "125,000",
        name: "VOITURE DE SPORT EXCEPTIONNELLE",
    },

*/
const AdsCard = ({ ads }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // console.log(ads.category.picture);

  const handlePlayPause = async () => {
    if (isPlaying) {
      await videoRef.current.pauseAsync();
    } else {
      await videoRef.current.playAsync();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <TouchableOpacity
      onPress={() => {
        router.push("(root)/exceptionelle");
        router.setParams({ id: ads.id });
      }}
      className="p-5 border-[1px] bg-white border-transparent shadow-custom-blue"
    >
      <View className="relative">
        {/* <Image source={ads.img} className="w-full rounded-[4px]" /> */}
        <View style={styles.videoContainer}>
          <Video
            ref={videoRef}
            source={{ uri: ads.videos.url }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            style={styles.video}
            shouldPlay={false}
            className="w-[300px] h-[180px] rounded-[8px] mb-[4px]"
          />
          {/* {!isPlaying && (
            <TouchableOpacity
              style={styles.playButton}
              //onPress={handlePlayPause}
            >
              <Text style={styles.playButtonText}>Play ▶</Text>
            </TouchableOpacity>
          )} */}
        </View>

        <TouchableOpacity
          className="absolute bg-white right-[15px] p-[6px] rounded-[2px] top-3"
          onPress={() => setIsLiked(!isLiked)}
        >
          <AntDesign
            name="heart"
            size={20}
            color={`${isLiked ? "red" : "#00AEF0"}`}
          />
        </TouchableOpacity>
      </View>
      <View className="mt-6 flex-row items-center gap-2">
        <Image
          source={{ uri: `${imageUrlAppend}${ads.parentCat.picture}` }}
          style={{ width: 34, height: 34 }}
        />
        <Text
          className="text-primaryBlk text-[12px] font-poppins font-medium uppercase"
          style={{ fontFamily: "Poppins-SemiBold", marginTop: 2 }}
        >
          {ads.parentCat.name}
        </Text>
        <View className="bg-primaryBlk w-[5px] h-[2px]"></View>
        <Text
          className="text-primaryBlk text-[12px] font-poppins font-medium uppercase"
          style={{ fontFamily: "Poppins-SemiBold", marginTop: 2 }}
        >
          {ads.category.name}
        </Text>
      </View>
      <View className="mt-[15px] font-poppins text-primaryBlk text-[20px] font-semibold uppercase">
        <Text
          className="text-primaryBlk  font-semibold font-poppins uppercase"
          style={{ fontFamily: "Poppins-SemiBold", fontSize: 17 }}
        >
          {ads.title}
        </Text>
        <View className="mt-2 flex-row gap-2 items-center">
          <Image source={require("../../assets/images/ads/place.png")} />
          <Text
            className="text-primaryBlk font-semibold font-poppins text-[16px] tracking-[-.5px] uppercase"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            {ads.city.name}
          </Text>
        </View>
        <View className="mt-2 flex-row gap-2 items-center">
          <Image source={require("../../assets/images/ads/price.png")} />
          <Text className="text-primary font-semibold font-poppins text-[20px] tracking-[-.5px]">
            {ads.price} $
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AdsCard;

const styles = StyleSheet.create({
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
