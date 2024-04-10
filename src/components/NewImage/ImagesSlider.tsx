import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import {EmptyImg} from './EmptyImg';
import {useField} from 'formik';
import {AddNewImg, ImgStyles} from './AddNewImage';

type imgProps = {
  name: string;
  dataImage: any;
};

export const ImagesSlider = ({name, dataImage}: imgProps) => {
  const [value, meta, helpers] = useField(name);
  const [selectImage, setSelectImage] = useState<Asset[]>([]);
  const [imagesArr, setImagesArr] = useState(dataImage || []);
  const [emptyImgLength, setEmptyImgLength] = useState(5);

  useEffect(() => {
    if (dataImage && dataImage.length > 0) {
      setImagesArr(dataImage);
      const usedImgLength = dataImage.length;
      setEmptyImgLength(5 - usedImgLength);
    } else {
      setImagesArr([]);
      setEmptyImgLength(5);
    }
  }, [dataImage]);

  const handleChange = (new_value: Asset) => {
    helpers.setValue([...value.value, new_value]);
  };

  const handleDelete = (img: string) => {
    const updatedImages = imagesArr.filter(
      (image: any) => image.uri !== img && image.imageUrl !== img,
    );
    setImagesArr(updatedImages);
    setEmptyImgLength(emptyImgLength + 1);
    helpers.setValue(updatedImages);
  };

  const renderedImages = imagesArr.length
    ? imagesArr.map((image: any) => (
        <View key={image.imageId || image.uri}>
          <TouchableOpacity
            onPress={() => handleDelete(image.imageUrl || image.uri)}
            style={ImgStyles.deleteWrapper}
            onPressOut={() => handleDelete(image.imageUrl || image.uri)}>
            <FontAwesomeIcon
              icon={faXmark}
              style={{
                position: 'absolute',
              }}
            />
          </TouchableOpacity>
          <Image
            source={{uri: image.imageUrl || image.uri}}
            style={ImgStyles.imgContainer}
          />
        </View>
      ))
    : null;
  const imageContainerEmp = (
    <View style={ImgStyles.imgContainer}>
      <EmptyImg />
    </View>
  );

  const emptyArrImg = Array(emptyImgLength).fill(imageContainerEmp);
  const renderEmptyImg =
    emptyImgLength > 0 ? emptyArrImg.map(item => item) : null;

  const NewImgFromLibrary = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
    });
    if (result.assets) {
      const selectedImages = result.assets;
      setSelectImage(prevImages => [...prevImages, ...selectedImages]);
      setImagesArr((prev: Asset[]) => [...prev, ...selectedImages]);
      setEmptyImgLength(prev => prev - selectedImages.length);
      selectedImages.forEach(assets => handleChange(assets));
    } else {
      setSelectImage(prev => [...prev]);
    }
  };

  const isCanAdd =
    emptyImgLength > 0 ? <AddNewImg onPress={NewImgFromLibrary} /> : null;

  return (
    <View>
      <ScrollView horizontal={true}>
        <View style={ImgStyles.newImgContainer}>
          {isCanAdd}
          {renderedImages}
          {renderEmptyImg}
        </View>
      </ScrollView>
      <Text>{5 - emptyImgLength} of 5 images</Text>
    </View>
  );
};
