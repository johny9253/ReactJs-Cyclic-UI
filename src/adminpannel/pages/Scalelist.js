import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
//   deleteABrand,
  getScales,
  resetState,
} from "../../features/scale/scaleSlice";
import CustomModal from "../components/CustomModal";
import AdminBreadCrum from '../components/AdminBreadCrum';
import { AdminMeta } from '../components/AdminMeta';

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Name",
        dataIndex: "name",
        sorter: (a, b) => a.name.length - b.name.length,
    },
    {
        title: "Action",
        dataIndex: "action",
    },
];
const Scalelist = () => {
    const [open, setOpen] = useState(false);
    const [scaleId, setscaleId] = useState("");
    const showModal = (e) => {
        setOpen(true);
        setscaleId(e);
    };

    const hideModal = () => {
        setOpen(false);
    };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(resetState());
        dispatch(getScales());
    }, []);
    const scaleState = useSelector((state) => state.scale.scales);
    const data1 = [];
    for (let i = 0; i < scaleState.length; i++) {
        data1.push({
            key: i + 1,
            name: scaleState[i].title,
            action: (
                <>
                    <Link
                        to={`/admin/brand/${scaleState[i]._id}`}
                        className=" fs-6"
                        style={{color:"#F06331"}}
                    >
                        <div className="d-flex align-items-center">
                        <BiEdit />Edit
                        </div>
                       
                    </Link>
                    <button
                        className="ms-3 fs-6 bg-transparent border-0"
                        style={{color:"#F06331"}}
                        onClick={() => showModal(scaleState[i]._id)}
                    >
                        <div className="d-flex align-items-center">
                        <AiFillDelete />Delete
                        </div>
                    </button>                   
                </>
            ),
        });
    }
    // const deleteBrand = (e) => {
    //     dispatch(deleteABrand(e));

    //     setOpen(false);
    //     setTimeout(() => {
    //         dispatch(getBrands());
    //     }, 100);
    // };
    return (
        <div>
            <AdminMeta title={"Scale List"} />
            <AdminBreadCrum title='Scale List' />
            <div>            
                <div>
                    <Table columns={columns} dataSource={data1} />
                </div>
                <CustomModal
                    hideModal={hideModal}
                    open={open}
                    // performAction={() => {
                    //     deleteBrand(brandId);
                    // }}
                    title="Are you sure you want to delete this brand?"
                />
            </div>
        </div>
    )
}

export default Scalelist