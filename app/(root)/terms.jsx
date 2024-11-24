import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getTermsPage } from "../../apiService";
import RenderHTML from "react-native-render-html";

const Terms = () => {
  const { width } = useWindowDimensions();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getTermsPage();
        //  console.log(data.result);
        setDetail(data?.result);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  const tagsStyles = {
    p: {
      fontSize: 14,
      color: "#565656",
      lineHeight: 24,
      fontFamily: "Poppins-Medium",
      textTransform: "uppercase",
    },
    ol: {
      fontSize: 14,
      color: "#565656",
      lineHeight: 24,
      fontFamily: "Poppins-Medium",
      textTransform: "uppercase",
    },
    h4: {
      color: "#010101",
      fontSize: 22,
      lineHeight: 33,
      fontFamily: "Poppins-SemiBold",
      textTransform: "uppercase",
    },
  };

  const systemFonts = ["Poppins-Regular", "Poppins-Medium", "Poppins-SemiBold"];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="mx-[16px] font-poppins mb-[30px] "
    >
      <Text
        className="text-center font-semibold mt-[30px] text-[44px] uppercase"
        style={{ fontFamily: "Poppins-SemiBold" }}
      >
        {detail?.name}
      </Text>
      <Text
        className="text-center text-[#00AEF0] mt-[15px] text-[33px] uppercase"
        style={{ fontFamily: "Poppins-SemiBold", fontSize: 33 }}
      >
        {detail?.title}
      </Text>
      {detail && (
        <RenderHTML
          contentWidth={width}
          source={{ html: detail?.content }}
          tagsStyles={tagsStyles}
          systemFonts={systemFonts}
        />
      )}
    </ScrollView>
  );
};

export default Terms;
