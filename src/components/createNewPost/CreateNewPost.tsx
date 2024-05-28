import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { CustomButton } from 'components/customButton/CustomButton';
import { CustomInput } from 'components/customInput/CustomInput';
import { RootStackNavigatorParamsList } from 'model/RootStackNavigatorParamsList';
import useNewsStore from 'store/newsStore';
import { z } from 'zod';

import { NewPostSchema } from './constants/NewPostSchema';
import { defaultValuesForm } from './constants/defaultValuesForm';
import { minHeightInputMultiline } from './constants/minHeightInputMultiline';

import { stylesCreateNewPost as styles } from './CreateNewPost.styles';

export const CreateNewPost = () => {
    const [inputHeight, setInputHeight] = useState(minHeightInputMultiline);

    const onSetNewPost = useNewsStore((state) => state.onSetNewPost);

    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigatorParamsList>>();

    const {
        control,
        handleSubmit,
        formState: { isValid },
    } = useForm<z.infer<typeof NewPostSchema>>({
        defaultValues: defaultValuesForm,
        resolver: zodResolver(NewPostSchema),
        mode: 'onChange',
    });

    const handleChangeSize = (sizeHeight: number) => {
        setInputHeight(sizeHeight);
    };

    const handleCreatePost = handleSubmit((data) => {
        onSetNewPost(data);
        navigation.goBack();
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView>
                <View style={styles.formWrapper}>
                    <Controller
                        name="title"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <CustomInput
                                placeholder="Title*"
                                style={styles.inputTex}
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                    <Controller
                        name="img"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <CustomInput
                                placeholder="Image url"
                                style={styles.inputTex}
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                    <Controller
                        name="link"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <CustomInput
                                placeholder="Link"
                                style={styles.inputTex}
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                    <View style={{ height: Math.max(minHeightInputMultiline, inputHeight) }}>
                        <Controller
                            name="description"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <CustomInput
                                    isMultiline
                                    placeholder="Type  your message here..*"
                                    onSetSize={handleChangeSize}
                                    style={styles.inputTex}
                                    value={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonWrapper}>
                <CustomButton text="Public" onPress={handleCreatePost} isDisabled={!isValid} />
            </View>
        </KeyboardAvoidingView>
    );
};
