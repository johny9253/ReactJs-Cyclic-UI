import React, { useState } from 'react'
import { Table } from 'antd';
import AdminBreadCrum from '../components/AdminBreadCrum';
import { AdminMeta } from '../components/AdminMeta';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from '../../features/customers/customerSlice';

const columns = [
    {
        title: 'SNo',
        dataIndex: 'key',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        defaultSortOrder:"descend",
        sorter: (a, b) => a.name.length - b.name.length,
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Mobile',
        dataIndex: 'mobile',
    },
];


const Customers = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, []);
    const customerState = useSelector((state) => state.customer.customers);
    // const {data} = customerState
    const data1 = [];
    for (let i = 0; i < customerState.length; i++) {
        if(customerState[i].role!=='admin'){
            data1.push({
                key: i + 1,
                name: customerState[i].firstname+" "+customerState[i].lastname,
                email: customerState[i].email,
                mobile: customerState[i].mobile,
            });
        }
    }    

    return (
        <div>
            <AdminMeta title={"Customers List"} />
            <AdminBreadCrum title='Customers List' />
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default Customers