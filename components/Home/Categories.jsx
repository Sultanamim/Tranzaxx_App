import { View, Text, Image, TouchableOpacity } from "react-native";
import { productsCategories } from "../../constant/data";

const Categories = ({ categories }) => {
  //console.log();
  return (
    <View className="flex-col gap-5">
      {categories
        ? Object.values(categories?.data.categories).map((category) => (
          <TouchableOpacity
            key={category.name}
            className="flex items-center justify-center gap-8 border-[1px] border-[#EBEBEB] shadow-custom
                    px-6 py-[42px]
                    "
            style={{ backgroundColor: "#fff", marginTop: 10 }}
          >
            <Image
              source={{
                uri: `https://tranzaxx.com/storage/${category.picture}`,
              }}
              className="w-[70px] h-[70px]"
            />
            <Text className="text-[#010101] text-[28px] font-medium font-poppins">
              {category.name}
            </Text>
          </TouchableOpacity>
        ))
        : null}
    </View>
  );
};

export default Categories;
