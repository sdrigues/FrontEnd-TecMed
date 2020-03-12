// import React, { useState, useEffect } from "react";
// import { View, Text, FlatList, TextInput } from "react-native";
// import { ListItem, SearchBar } from "react-native-elements";
// import api from '../../services/api';

// export default function FlatListDemo() {
//   const [data, setData] = useState();
//   const [temp, setTemp] = useState();


//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     const response = await api.get('/products');
//     const { docs } = response.data;

//     setData(docs);
//     setTemp(docs);
//   }

//   const searchFilterFunction = text => {
//     const newData = temp.filter(item => {
//       const itemData = `${item.title.toUpperCase()}`;
//       const textData = text.toUpperCase();
//       return itemData.indexOf(textData) > -1;
//     });

//     setData(newData);
//   };

//   return (
//     <View>
//       <TextInput placeholder="Buscar Guias" onChangeText={text => searchFilterFunction(text)} />
//       <FlatList
//         data={data}
//         keyExtractor={item => item.title}
//         renderItem={({ item }) => (
//           <ListItem
//             roundAvatar
//             title={`${item.title}`}
//             subtitle={item.url}
//           />

//         )}
//       />
//     </View>

//   );
// }