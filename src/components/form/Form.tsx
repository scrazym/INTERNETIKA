import React from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Formik} from 'formik';
import {validationSchema} from './FormSchema';
import {MyTextInput} from './InputText';
import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';
import {ImagesSlider} from '../NewImage/ImagesSlider';

export const Form = () => {
  const createFormData = (
    images: {
      id: string;
      fileName: string;
      uri: string;
      type: string;
      imageUrl: string;
    }[],
    title: string,
    descr: string,
  ) => {
    const formData = new FormData();
    formData.append('description', {
      title,
      descr,
    });
    images.forEach(file => {
      if (!file.id) {
        formData.append('files', {
          name: file.fileName,
          type: file.type,
          uri:
            Platform.OS === 'android'
              ? file.uri
              : file.uri.replace('file://', ''),
        });
      } else {
        formData.append('files', {
          name: file.id,
          type: 'image/jpeg',
          uri: file.imageUrl,
        });
      }
    });
    return formData;
  };

  const posData = async (title: string, descr: string, image: any[]) => {
    const formData = createFormData(image, title, descr);
    Alert.alert(`title: ${title}, descr: ${descr}`);

    try {
      await fetch('https://localhost:8080', {
        body: formData,
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  return (
    <Formik
      initialValues={{
        title: '',
        descr: '',
        images: [],
      }}
      enableReinitialize={true}
      validateOnMount={true}
      validationSchema={validationSchema}
      onSubmit={() => console.log('Succses')}>
      {({
        handleChange,
        values,
        errors,
        touched,
        setFieldTouched,
        isValid,
        handleSubmit,
      }) => (
        <KeyboardAvoidingView style={FormStyles.container} behavior="height">
          <ScrollView>
            <Text>Title</Text>
            <View style={FormStyles.containerInput}>
              <MyTextInput
                onChangeText={handleChange('title')}
                value={values.title}
                name="title"
                placeholder="Enter title"
                onBlur={() => setFieldTouched('title')}
                keyboard="default"
              />
              {errors.title && touched.title ? (
                <Text>{errors.title}</Text>
              ) : null}
            </View>
            <View style={FormStyles.containerInput}>
              <Text> Description </Text>
              <View style={FormStyles.containerInput}>
                <MyTextInput
                  onChangeText={handleChange('descr')}
                  value={values.descr}
                  name="descr"
                  placeholder="Description"
                  multiline={true}
                  keyboard="default"
                  onBlur={() => setFieldTouched('descr')}
                />
                {errors.descr && touched.descr ? (
                  <Text>{errors.descr}</Text>
                ) : null}
              </View>
              <Text>Product images</Text>
            </View>
            <ImagesSlider name="images" dataImage={values.images} />
            {errors.images && touched.images ? (
              <Text>{errors.images}</Text>
            ) : null}
            <TouchableOpacity
              onPress={() => {
                isValid
                  ? posData(values.title, values.descr, values.images)
                  : handleSubmit();
              }}
              style={isValid ? FormStyles.BtnWrap : FormStyles.BtnWrapDisable}>
              <Text>Press</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export const FormStyles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  container: {
    flexShrink: 1,
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 24,
    paddingBottom: 55,
    backgroundColor: Colors.MAIN_WHITE,
  },
  containerInput: {
    marginTop: 5,
    marginBottom: 5,
    flex: 1,
  },
  BtnWrap: {
    paddingHorizontal: 16,
    paddingTop: 1,
    paddingBottom: 24,
    backgroundColor: Colors.TURQUOISE_PRIMARY,
    alignItems: 'center',
  },
  BtnWrapDisable: {
    paddingHorizontal: 16,
    paddingTop: 1,
    paddingBottom: 24,
    backgroundColor: Colors.BLUE_EXTRA_LIGHT,
    alignItems: 'center',
  },
});
