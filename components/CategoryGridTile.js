import { View, Text, Pressable, StyleSheet, Platform } from "react-native"; 

function CategoriesGridTile({title, color, onPress}) {
   return (
     <View style={styles.gridItem}>
           <Pressable 
           android_ripple={{ color: "#ccc" }} 
           style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
           onPress={onPress}
          >
               <View style={[styles.innerContainer, { backgroundColor: color }]}>
                 <Text style={styles.title}>{title}</Text>
             </View>
         </Pressable>
     </View>
   )
}

export default CategoriesGridTile;

const styles = StyleSheet.create({
    gridItem: {
      flex: 1,
      margin: 16,
      height: 150,
      borderRadius: 8,
      elevation: 4,
      overflow: Platform.OS === "android" ? "hidden" : "visible",
      // for IOS shadow
      backgroundColor: "white",
      shadowColor: "black",
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 8
    },
    button: {
      flex: 1
    },
    buttonPressed: {
       opacity: 0.5
    }, 
    innerContainer: {
        flex: 1,
        padding: 16,
        shadowRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    }
})