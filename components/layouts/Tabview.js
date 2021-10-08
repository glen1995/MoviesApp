import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar,Text } from 'react-native';
import { TabView, SceneMap,TabBar} from 'react-native-tab-view';
import { Movies } from '../Tabs/Movies';
import { Search } from '../Tabs/Search';
import { TV } from '../Tabs/TV'


 const initialLayout = { width: Dimensions.get('window').width };

const renderScene = ({ route, jumpTo }) => {
  switch (route.key) {
    case "first":
      return <Movies jumpTo={jumpTo} />;
    case "second":
      return <Search jumpTo={jumpTo} />;
    case "third":
      return <TV jumpTo={jumpTo} />;
  }
};

export default function TabViewer(props) {
const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Movies' },
    { key: 'second', title: 'Search Results' },
    {key:'third',title:'Tv shows'}
  ]);
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          renderLabel={({ route, color }) => (
            <Text style={{ color: "black", margin: 8 }}>{route.title}</Text>
          )}
          indicatorStyle={{ backgroundColor: "#2c3e50" }}
          style={{ backgroundColor: "white" }}
        />
      )}
      style={styles.container}

    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor:"white"

  },
  scene: {
    flex: 1,
  },
});