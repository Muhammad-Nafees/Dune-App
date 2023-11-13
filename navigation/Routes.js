import Mainstack from "./MainStack";
import AuthStack from "./AuthStack";
import { login } from "../store/UserSlices";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";




const Routes = () => {

    const { duneUser } = useSelector((state) => state)
    console.log("duneuser---Routes", duneUser)

    return (
        <NavigationContainer independent={true}>
            {
                duneUser.name ? <Mainstack /> : <AuthStack />
            }
        </NavigationContainer>
    )
}

export default Routes;
