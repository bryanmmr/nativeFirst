import { Text, StyleSheet, View, Image } from "react-native";
import { Icon } from 'react-native-elements';


const  ComponenteData = ({data}) => {
    const numberComments = data.comments.length
    return (
        <View style={styles.dataContainer}>
            <Image source={{uri: data.picture}} style={styles.img}/>
            <View>
                <Text style={styles.about} numberOfLines={2}>{data.about}</Text>
                <Text style={styles.author}>by {data.author}</Text>
                <View style={styles.tagContainer}>
                    {data.tags.map((tag) => (
                        <Text style={styles.tag}>{tag}</Text>
                    ))}
                </View>
                <Text style={styles.comments}>                    
                    <Icon style={styles.icon} name='comment-discussion' type="octicon" />
                    {numberComments} Comments
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  dataContainer: {
    maxWidth: '100vw',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopColor: 'lightgray',
    borderTopWidth: 2,
  },
  about: {
    backgroundColor: '#fff',
    maxWidth: '40vw',
    marginTop: '1.5rem',
    fontWeight: 500,
    color: 'gray',
  },
  author: {
    color: '#c0c0c0',
    marginBottom: '.7rem'
  },
  comments: {
    display: 'flex',
    flexDirection: 'row',
    color: 'gray'
  },
  img: {
      width: '125px',
      height: '125px',
      margin: '1.5rem',
  },
  icon: {
    marginRight: '.5rem',
    transform: 'scale(-1, 1)',
    filter: 'invert(.5)',
  },
  tagContainer: {
      display: 'flex',
      flexDirection: 'row',
      overflowX: 'scroll',
      width: '40vw',
      marginBottom: '.5rem',
  },
  tag: {
      backgroundColor: 'gray',
      color: '#fff',
      borderRadius: '5px',
      marginRight: '.5rem',
      paddingVertical: '.1rem',
      paddingHorizontal: '.7rem',
      textTransform: 'uppercase'
  }
});

export default ComponenteData;
