import { View, Text, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { getPrivacyPage } from "../../apiService";
import RenderHTML from "react-native-render-html";

const Privacy = () => {
  const { width } = useWindowDimensions();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getPrivacyPage();
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
      fontSize: 15,
      color: "#565656",
      lineHeight: 24,
      fontFamily: "Poppins-Medium",
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
        className="text-center font-semibold mt-[30px] text-[44px] "
        style={{ fontFamily: "Poppins-SemiBold" }}
      >
        PRIVACY
      </Text>
      <Text
        className="text-center text-[#00AEF0] font-semibold mt-[15px] text-[36px] uppercase"
        style={{ fontFamily: "Poppins-SemiBold" }}
      >
        {detail?.name}
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

export default Privacy;
