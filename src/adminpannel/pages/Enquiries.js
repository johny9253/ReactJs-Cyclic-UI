import React from 'react'
import { Table } from 'antd';
import AdminBreadCrum from '../components/AdminBreadCrum';
import { AdminMeta } from '../components/AdminMeta';
const Enquiries = () => {
    const columns = [
        {
            title: 'SNo',
            dataIndex: 'name',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Product',
            dataIndex: 'product',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
    ];
    const data1 = [];
    for (let i = 0; i < 46; i++) {
        data1.push({
            key: i,
            name: `Edward King ${i}`,
            product: 32,
            status: `London, Park Lane no. ${i}`,
        });
    }
    return (
        <div>
            <AdminMeta title={"Enquiries List"} />
            <AdminBreadCrum title='Enquiries List' />
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default Enquiries