import {Dimensions, StyleSheet} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    flex: 1,
  },
  btnWrapper: {
    position: 'absolute',
    top: 10,
    zIndex: 20,
    width: '100%',
    backgroundColor: 'transparent',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: SCREEN_WIDTH / 2 - 70,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: SCREEN_WIDTH,
  },
  textTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
});
