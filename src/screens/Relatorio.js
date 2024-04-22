import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const Relatorio = (props) => {
  const data = [
    { caption: 'Excelente', color: '#F1CE7E' },
    { caption: 'Bom', color: '#6994FE' },
    { caption: 'Neutro', color: '#5FCDA4' },
    { caption: 'Ruim', color: '#EA7288' },
    { caption: 'Péssimo', color: '#53D8D8' },
  ];

  return (
    <View style={styles.container}>
    <Image
        source={require('../../assets/images/pizza.png')}
        style={styles.image}
      />
      <View style={styles.legenda}>
        {data.map((item, index) => (
          <View key={index} style={styles.legendaInside}>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: item.color,
                marginRight: 8,
              }}
            />
            <Text style={styles.legendaTexto}>{item.caption}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#372775',
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginHorizontal: 20,
  },
  legenda: {
    flexDirection: 'column',
    marginHorizontal: 150,

  },
  legendaInside: {
    flexDirection: 'row',
  },
  legendaTexto: {
    fontSize: 20,
    textAlign: 'left',
    color: '#FFFFFF',
  },
});

export default Relatorio;
