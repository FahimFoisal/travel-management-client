import React, { useEffect, useState } from 'react';
import AllServiceList from '../AllServiceList/AllServiceList';

const ManageService = () => {
    
    const [serviceList, setServiceList] = useState([]);
    useEffect(() => {
        fetch('https://floating-forest-16007.herokuapp.com/servicelist')
            .then(res => res.json())
            .then(data => setServiceList(data))
    }, [])
    return (
        <div className="row text-center">
            {
                serviceList.map(email => <AllServiceList email={email}></AllServiceList>)
            }
        </div>
    );
};
export default ManageService;