import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { View, Text, Image } from "react-native";
import {
  imageUrlAppend,
  PostImgAppend,
  PostImgPrepend,
  videoUrlPrepend,
} from "../../constant/newData";
import { WebView } from "react-native-webview";

const AdsCard = ({ ads, index }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [heights, setHeights] = useState({});
  const [imageUri, setImageUri] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://vz-9285a61e-4e6.b-cdn.net/${ads.videos[0].url}/thumbnail.jpg`,
          {
            method: "GET",
            headers: {
              Referer: "https://tranzaxx.com",
            },
          }
        );

        if (response.ok) {
          const blob = await response.blob();
          const uri = URL.createObjectURL(blob);
          setImageUri(uri);
        } else {
          console.error("Failed to fetch image:", response.status);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  const handleWebViewLoad = (index) => {
    setHeights((prevHeights) => ({
      ...prevHeights,
      [index]: (Dimensions.get("window").width * 9) / 16, // 16:9 aspect ratio
    }));
  };

  const video = `${videoUrlPrepend}${ads.videos[0].url}`;

  // console.log(imageUri);

  return (
    <View className="p-5 border-[1px] bg-white border-transparent shadow-custom-blue">
      <View className="relative">
        {/* <Image source={ads.img} className="w-full rounded-[4px]" /> */}
        {/* {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Image
            source={{ uri: imageUri }}
            style={{ height: 200 }}
            className="w-full rounded-[4px]"
          />
        )} */}
        <View
          key={index}
          style={[styles.videoContainer, { height: heights[index] || 200 }]}
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
                <iframe src="${video}" allowfullscreen></iframe>
              `,
            }}
            javaScriptEnabled
            allowsFullscreenVideo
            onLoad={() => handleWebViewLoad(index)}
            style={{ flex: 1 }}
          />
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
      <TouchableOpacity
        onPress={() => {
          router.push("(root)/exceptionelle");
          router.setParams({ id: ads.id });
        }}
      >
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
    </View>
  );
};

export default AdsCard;

const styles = StyleSheet.create({
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
