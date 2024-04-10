// import React from 'react';
// import {View, StyleSheet} from 'react-native';

// export const TaskFirstScreen = () => {
//   const cardHeights = [50, 50, 200, 200, 100, 100];
//   const containerWidth = 250;
//   // Определяем количество рядов и количество карточек в каждом ряду
//   const calculateRows = () => {
//     const rowWidth = 40; // Ширина каждой карточки
//     const numberOfRows = Math.floor(containerWidth / rowWidth); // Количество рядов

//     const rows = [];
//     let startIndex = 0;

//     for (let i = 0; i < numberOfRows; i++) {
//       const rowHeights = cardHeights.slice(
//         startIndex,
//         startIndex + numberOfRows,
//       );
//       const maxRowHeight = Math.max(...rowHeights);
//       rows.push({
//         heights: rowHeights.map(height => maxRowHeight),
//         maxRowHeight,
//       });
//       startIndex += numberOfRows;
//     }
//     console.log(rows);
//     return rows;
//   };

//   // Рендерим карточки для каждого ряда
//   const renderRows = () => {
//     const rows = calculateRows();
//     return rows.map((row, index) => (
//       <View key={index} style={styles.row}>
//         {row.heights.map((height, index) => (
//           <View key={index} style={[styles.card, {height: height}]} />
//         ))}
//       </View>
//     ));
//   };

//   return <View style={styles.container}>{renderRows()}</View>;
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     flexWrap: 'wrap',
//     backgroundColor: 'gray',
//   },
//   row: {
//     flexDirection: 'row',
//     marginBottom: 10,
//     backgroundColor: 'red',
//   },
//   card: {
//     width: 50,
//     marginHorizontal: 5,
//     backgroundColor: 'lightblue',
//     borderWidth: 1,
//     borderColor: 'gray',
//   },
// });

import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Dimensions, Text} from 'react-native';
import {MyTextInput} from '../../components/form/InputText';
import {NavBtn} from '../../components';

export const TaskFirstScreen = () => {
  const [containerWidth, setContainerWidth] = useState(300);
  const cardHeights = [50, 50, 200, 200, 100, 100];
  const calculateRows = width => {
    const containerWidth = width - 20; // Предполагается, что есть отступы по 10px с каждой стороны
    const numColumns = Math.floor(containerWidth / 50); // Ширина карточки равна 50px
    const rows = [];
    let row = [];
    let maxHeightInRow = 0;

    cardHeights.forEach(height => {
      if (row.length === numColumns) {
        rows.push({cards: row, maxHeight: maxHeightInRow});
        row = [];
        maxHeightInRow = 0;
      }
      row.push(height);
      maxHeightInRow = Math.max(maxHeightInRow, height);
    });

    if (row.length > 0) {
      rows.push({cards: row, maxHeight: maxHeightInRow});
    }

    return rows;
  };
  const handleChange = (e: string) => {
    setContainerWidth(Number(e));
  };

  return (
    <View style={styles.container}>
      <NavBtn btnTitle="GoBack" isGoBack={true} />
      <MyTextInput
        value={containerWidth.toString()}
        onChangeText={handleChange}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {calculateRows(containerWidth).map((row, index) => (
          <View key={index} style={{flexDirection: 'row'}}>
            {row.cards.map((height, idx) => (
              <View key={idx} style={[styles.card, {height: row.maxHeight}]}>
                <Text>{height}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  scrollContainer: {
    marginTop: 30,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  card: {
    width: 50,
    marginHorizontal: 5,
    marginBottom: 10,
    backgroundColor: 'lightblue',
    borderWidth: 1,
    borderColor: 'gray',
  },
});
