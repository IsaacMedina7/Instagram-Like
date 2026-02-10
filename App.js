import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";


import icon from './assets/foto_de_perfil.png';
import icon2 from './assets/verified_account.jpg';
import icon3 from './assets/3puntos.jpg';
import icon4 from './assets/badbunnyimg.jpg';
import icon6 from './assets/comentar_insta.jpg';
import icon7 from './assets/repost_insta.png';
import icon8 from './assets/compartir_insta.png';
import icon10 from './assets/corazon_transparente.png';
import icon11 from './assets/subirinsta.png';
import icon12 from './assets/home_insta.png';
import icon13 from './assets/reels.png';
import icon14 from './assets/buscar.png';
import icon15 from './assets/linea.png';

const App = () => {

  const [numberLikes, setNumberLikes] = useState(10371)
  const [liked, setLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLikesAndColor = () => {
    if (liked) {
      setNumberLikes(numberLikes - 1);
      setLiked(false);
    } else {
      setNumberLikes(numberLikes + 1);
      setLiked(true);
    }
  }

  const handleSave = () => {
    setIsSaved(!isSaved);
  }

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Image source={icon11} style={styles.image11} />
        <Text style={styles.textTitle}>Instagram</Text>
        <Image source={icon10} style={styles.image10} />
      </View>

      <View style={styles.usernameContainer}>
        <Image source={icon} style={styles.image} />
        <Text style={styles.textUsername}>badbunnypr</Text>
        <Image source={icon2} style={styles.image2} />
        <Image source={icon3} style={styles.image3} />
      </View>

      <View style={styles.imageContainer}>
        <Image source={icon4} style={styles.image4} />
      </View>

      <View style={styles.iconosContainer}>
        <TouchableOpacity onPress={handleLikesAndColor} >
          <Ionicons name={liked ? "heart" : "heart-outline"} size={28} color={liked ? "red" : "black"} style={styles.image5}></Ionicons>
        </TouchableOpacity>
        <Text style={styles.numberLikes}>{numberLikes}</Text>
        <Image source={icon6} style={styles.image6} />
        <Text style={styles.textcomentarios}>143 mil</Text>
        <Image source={icon7} style={styles.image7} />
        <Text style={styles.textrepost}>749 mil</Text>
        <Image source={icon8} style={styles.image8} />
        <Text style={styles.textguardar}>594 mil</Text>
        <TouchableOpacity onPress={handleSave} >
          <Ionicons name={isSaved ? "bookmark" : "bookmark-outline"} size={25} color="black" style={styles.image9}></Ionicons>
        </TouchableOpacity>
      </View>

      <View style={styles.descripcionContainer}>
        <Text style={styles.textdescripcion}>Les gusta a isaac_cisneross y 12,5 M personas más</Text>
        <Text style={styles.textdescripcion}>vinijr Legend</Text>
        <Text style={styles.textdescripcion2}>Hace 4 días</Text>
      </View>

      <View style={styles.lineaContainer}>
        <Image source={icon15} style={styles.image15} />
      </View>

      <View style={styles.bottomContainer}>
        <Image source={icon12} style={styles.image12} />
        <Image source={icon13} style={styles.image13} />
        <Image source={icon8} style={styles.image8bC} />
        <Image source={icon14} style={styles.image14} />
        <Image source={icon} style={styles.imagebC} />
      </View>

    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 70,
  },
  headerContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginBottom: 8,
  },
  textTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: 'black',
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'Snell Roundhand',
    marginLeft: 70,
  },
  image11: {
    width: 30,
    height: 30,
    marginTop: 5,
    marginLeft: 0,
  },
  image10: {
    width: 25,
    height: 25,
    marginTop: 8,
    marginLeft: 70,
  },
  usernameContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginBottom: 8,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  textUsername: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Arial',
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 18,
  },
  image2: {
    width: 20,
    height: 20,
    borderRadius: 50,
    marginTop: 18,
    marginLeft: 5,
  },
  image3: {
    width: 20,
    height: 20,
    borderRadius: 50,
    marginTop: 18,
    marginLeft: 130,
  },
  image4: {
    width: '100%',
    height: 450,
  },
  iconosContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginBottom: 8,
  },
  image5: {
    width: 28,
    height: 25,
    marginTop: 15,
    marginLeft: -16,
  },
  image6: {
    width: 30,
    height: 26,
    marginTop: 18,
    marginLeft: 10,
  },
  image7: {
    width: 50,
    height: 25,
    marginTop: 18,
    marginLeft: -2,
  },
  image8: {
    width: 60,
    height: 25,
    marginTop: 15,
    marginLeft: -8,
  },
  image9: {
    width: 30,
    height: 25,
    marginTop: 16,
    marginLeft: 24,
  },
  numberLikes: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Arial',
    justifyContent: 'center',
    marginLeft: 4,
    marginTop: 22,
  },
  textcomentarios: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Arial',
    justifyContent: 'center',
    marginLeft: 4,
    marginTop: 22,
  },
  textrepost: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Arial',
    justifyContent: 'center',
    marginLeft: -8,
    marginTop: 22,
  },
  textguardar: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Arial',
    justifyContent: 'center',
    marginLeft: -14,
    marginTop: 22,
  },
  descripcionContainer: {
    flexDirection: 'column',
    marginLeft: 2,
    marginBottom: 2,
    marginTop: -10,
  },
  textdescripcion: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    fontFamily: 'Arial',
    justifyContent: 'flex-start',
    marginLeft: 18,
    marginTop: 8,
  },
  textdescripcion2: {
    fontSize: 14,
    fontWeight: '600',
    color: 'gray',
    fontFamily: 'Arial',
    justifyContent: 'flex-start',
    marginLeft: 18,
    marginTop: 8,
  },
  bottomContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: -10,
  },
  image12: {
    width: 25,
    height: 25,
    marginTop: 25,
    marginLeft: 8,
  },
  image13: {
    width: 30,
    height: 30,
    marginTop: 22,
    marginLeft: 50,
  },
  image14: {
    width: 25,
    height: 25,
    marginTop: 22,
    marginLeft: 50,
  },
  image8bC: {
    width: 40,
    height: 45,
    marginTop: 12,
    marginLeft: 50,
  },
  imagebC: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginTop: 20
    ,
    marginLeft: 40,
  },
  lineaContainer: {
    flexDirection: 'row',
    width: '180%',
    marginLeft: -140,
    marginTop: 25,
  },
  image15: {
    width: '100%',
    height: 3,
  },
});
