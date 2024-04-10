import React from 'react';
import {Image, Text, View} from 'react-native';
import {NavBtn} from '../../components';
import AnimatedSwiper from '../../components/Swiper/AnimatedSwiper';
import {styles} from './style';

const listData = [
  {
    key: '1',
    title: 'What is Lorem Ipsum?',
    img: 'https://cdn.pixabay.com/photo/2023/07/24/07/23/forest-8146417_640.png',
  },
  {
    key: '2',
    title: 'Where does it come from?',
    img: 'https://w0.peakpx.com/wallpaper/136/336/HD-wallpaper-plumeria-flower-flower-flowers-full-screen-pink-pink-thumbnail.jpg',
  },
  {
    key: '3',
    title: 'Why do we use it?',
    img: 'https://i.pinimg.com/236x/60/27/c0/6027c0fe7ef0505ffe6d72b3f3b8d455.jpg',
  },
  {
    key: '4',
    title: 'Why do we use it?',
    img: 'https://i.pinimg.com/originals/2d/82/80/2d8280ed3fa83b83f0b1e53f27efecbd.jpg',
  },
];
export const TaskSecondScreen = () => {
  return (
    <AnimatedSwiper paginationStyle={{marginBottom: '7%'}} duration={600}>
      {listData.map((data, i) => (
        <View style={styles.imageContainer} key={data.key}>
          <View style={styles.btnWrapper}>
            <NavBtn isGoBack={true} btnTitle="Go Back" />
          </View>
          <Image
            source={{uri: data.img}}
            alt="Test image"
            style={styles.img}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>{`Current image is ${data.key}`}</Text>
          </View>
        </View>
      ))}
    </AnimatedSwiper>
  );
};
