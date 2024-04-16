import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import API, { endpoints } from '../../configs/API';
import MyStyles from '../../styles/MyStyles';

const Course = () => {
    [categories, setCategories] = React.useState(null);
    
    const loadCategories = async () => {
        try {
            let res = await API.get(endpoints['categories']);
            setCategories(res.data);
        } catch (ex) {
            console.error(ex);
        }
    }

    React.useEffect(() => {
        loadCategories();
    }, [])

    return (
        <View style={MyStyles.container}>
          <Text style={MyStyles.subject}>eCourseApp</Text>
          {categories===null?<ActivityIndicator/>:{categories.map}}
        </View>
    );
};

export default Course