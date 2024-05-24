import { ScreenNames } from "utils/constants/ScreenNames"

export type RootStackNavigatorParamsList = {
    [ScreenNames.CREATE_POST]: undefined,
    [ScreenNames.HOME]: undefined,
    [ScreenNames.NEWS_POST]: { postId: string },
}
