import { View, Text, Image, TouchableOpacity } from "react-native"
import { productsCategories } from "../../constant/data"

const Categories = () => {
    return (
        <View className="flex-col gap-5">
            {productsCategories.map((category, index) => (
                <TouchableOpacity
                    key={category.name}
                    className="flex items-center justify-center gap-12 border-[1px] border-[#EBEBEB] shadow-custom
                    px-6 py-[42px]
                    
                    "
                >
                    <Image
                        source={category.img}
                        className="w-[70px] h-[70px]"
                    />
                    <Text className="text-[#010101] text-[28px] font-medium font-poppins">
                        {category.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default Categories
