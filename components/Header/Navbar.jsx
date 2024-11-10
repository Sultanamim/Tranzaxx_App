import { View, Image } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import { AppContext } from "../../store/store"
import { useContext } from "react"
import { TouchableOpacity } from "react-native"

const Navbar = ({ setIsShowMenu }) => {
    const { showMenu, setShowMenu } = useContext(AppContext)
    const handleOpenMenu = () => {
        setShowMenu(true)
        setIsShowMenu(true)
    }
    const handleCloseMenu = () => {
        setShowMenu(false)
        setIsShowMenu(false)
    }
    return (
        <View className="px-4 py-[10px] flex-row justify-between items-center bg-primary">
            <Image
                source={require("../../assets/images/navbar/navlogo.png")}
                className="w-[115px] h-7"
            />
            <View>
                {!showMenu ? (
                    <TouchableOpacity onPress={handleOpenMenu}>
                        <Ionicons name="menu" size={28} color="white" />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={handleCloseMenu}>
                        <Image
                            source={require("../../assets/images/navbar/close.png")}
                            className="w-7 h-7"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default Navbar
