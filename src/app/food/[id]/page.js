
import FoodDetails from '@/app/component/FoodDetails/FoodDetails';
import React from 'react';

const page = ({params}) => {


    const id = params.id
    return (
        <FoodDetails id={id}/>
    );
};

export default page;