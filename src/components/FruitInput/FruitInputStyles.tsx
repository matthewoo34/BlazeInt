export const FruitInputStyles = {
    container: {
        flexDirection: 'row' as const,
        flex: 1,
        display: 'flex',
    },
    fruitColumnContainer: {
        padding: 10,
        flexDirection: 'column' as const,
        flex: 1 / 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
    },
    imgContainer: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column' as const,
        marginTop: 10,
    },
    img: {
        maxWidth: 100,
        maxHeight: 100,
    },
}