import { Redirect } from "expo-router"
import { useSession } from "../lib/cts";
import { Text } from "react-native";


const index = () => {
    const { userInfo, session, isLoading } = useSession();

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    if (!session) {
        return <Redirect href={"(auth)/welcome"} />
    }

    // if is admin 
    // if (userInfo && userInfo.admin) {
    //     return <Redirect href={"(admin)/admin-personalhome"} />
    // }
    // <Redirect href={"(admin)/admin-personalhome"} />
    //  <Redirect href={"(root)/home"} />

    return <Redirect href={"(admin)/admin-personalhome"} />
}

export default index

