import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Appearance, Text } from 'react-native';
import PagerView from 'react-native-pager-view';
import { lightTheme, darkTheme } from './theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import StatusPage from './pages/status';
import { Data, saveCharacterData, loadCharacterData, loadAppData, saveAppData } from './data';
import EmptyPage from './pages/empty';

const App: React.FC = () => {

    const [isLoading, setIsLoading] = useState(true);

    const colorScheme = Appearance.getColorScheme();
    const [activePage, setActivePage] = useState(0);
    const pagerRef = useRef<PagerView>(null);

    useEffect(() => {
        const initializeApp = async () => {
            try {
                await loadAppData();
    
                // Check if a character is already selected, then load it
                if (Data.appData.openCharacterFn !== '') {
                    await loadCharacterData(Data.appData.openCharacterFn);
                }

                // Set active page based on loaded app data
                setActivePage(Data.appData.openTabIndex);
            } catch (error) {
                console.error('Error during app initialization:', error);
                console.log(Data); // Log the current Data for debugging
            } finally {
                setIsLoading(false); // Mark initialization as complete
            }
        };
    
        initializeApp(); // Run the initialization function once
    }, []);
    

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: colorScheme === 'dark' ? '#fff' : '#000' }}>Loading...</Text>
            </View>
        );
    }

    // Combine tabs and icons
    const tabs: { name: string; icon: React.ComponentProps<typeof MaterialCommunityIcons>['name']; page: React.FC }[] = [
        { name: "Inventory", icon: "treasure-chest", page: EmptyPage },
        { name: "Feats", icon: "star-outline", page: EmptyPage },
        { name: "Status", icon: "account", page: EmptyPage },
        { name: "Ability Scores", icon: "chart-box-outline", page: EmptyPage },
        { name: "Weapons", icon: "sword-cross", page: EmptyPage },
        { name: "Spells", icon: "book-open-variant", page: EmptyPage },
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

        Data.appData.openTabIndex = relativePosition;
        saveAppData();

        setActivePage(relativePosition);
    };

    const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

    return (
        <View style={theme.container}>
            <PagerView
                ref={pagerRef}
                style={styles.pagerView}
                initialPage={totalTabs + activePage} // Start at the middle set of tabs
                offscreenPageLimit={3}
                onPageSelected={(e) => handlePageSelected(e.nativeEvent.position)}
            >
                {extendedTabs.map((tab, index) => (
                    <View key={index} style={theme.page}>
                        {tab.page ? <tab.page /> : <MaterialCommunityIcons
                            name={tab.icon}
                            size={100}
                            color={colorScheme === 'dark' ? '#fff' : '#000'}
                        />}
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
