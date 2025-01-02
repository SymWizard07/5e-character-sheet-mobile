import React, { useRef, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Appearance } from 'react-native';
import PagerView from 'react-native-pager-view';
import { lightTheme, darkTheme } from './theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState(3); // Start at Status tab
  const pagerRef = useRef<PagerView>(null);
  const colorScheme = Appearance.getColorScheme(); // Use Appearance module directly

  // Combine tabs and icons
  const tabs: { name: string; icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'] }[] = [
    { name: "Inventory", icon: "treasure-chest" },
    { name: "Feats", icon: "star-outline" },
    { name: "Status", icon: "account" },
    { name: "Ability Scores", icon: "chart-box-outline" },
    { name: "Weapons", icon: "sword-cross" },
    { name: "Spells", icon: "book-open-variant" },
  ];

  // Create a tripled list of tabs for looping
  const extendedTabs = [...tabs, ...tabs, ...tabs];
  const totalTabs = tabs.length;

  const handlePageSelected = (position: number) => {
    const relativePosition = position % totalTabs;
    const middleIndex = Math.floor(extendedTabs.length / 3) + relativePosition;

    if (position < totalTabs || position >= totalTabs * 2) {
      // Redirect to middle set without animation
      pagerRef.current?.setPageWithoutAnimation(middleIndex);
    }

    setActivePage(relativePosition);
  };

  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={theme.container}>
      <PagerView
        ref={pagerRef}
        style={styles.pagerView}
        initialPage={totalTabs} // Start at the middle set of tabs
        offscreenPageLimit={3}
        onPageSelected={(e) => handlePageSelected(e.nativeEvent.position)}
      >
        {extendedTabs.map((tab, index) => (
          <View key={index} style={theme.page}>
            <MaterialCommunityIcons
              name={tab.icon}
              size={100}
              color={colorScheme === 'dark' ? '#fff' : '#000'}
            />
          </View>
        ))}
      </PagerView>

      <View style={theme.tabBar}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[
              theme.tabButton,
              activePage === index && theme.activeTabButton,
            ]}
            onPress={() => {
              const targetPage = totalTabs + index; // Middle set index
              pagerRef.current?.setPage(targetPage);
              setActivePage(index);
            }}
          >
            <MaterialCommunityIcons
              name={tab.icon}
              size={24}
              color={
                activePage === index
                  ? theme.activeTabText.color
                  : theme.tabText.color
              }
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});

export default App;
