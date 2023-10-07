import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>me</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>scroll</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>more...</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>:@</Text>
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        padding: 8
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8
    },
    elevatedCard: {
        backgroundColor: "green",
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: 'blue',
        shadowOpacity: 0.8,
        shadowRadius: 2
    }
})