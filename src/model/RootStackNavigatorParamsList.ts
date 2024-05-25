import { ScreenNames } from "utils/constants/ScreenNames"

export type RootStackNavigatorParamsList = {
    [ScreenNames.CREATE_POST]: undefined,
    [ScreenNames.HOME]: undefined,
    [ScreenNames.NEWS_POST]: { postTitle: string },
    [ScreenNames.MODAL_HOME]: undefined,
}
