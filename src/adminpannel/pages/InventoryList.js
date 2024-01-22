import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getInventories, resetState } from "../../features/inventory/inventorySlice";
import CustomModal from "../components/CustomModal";
import AdminBreadCrum from '../components/AdminBreadCrum';
import { AdminMeta } from '../components/AdminMeta';

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length
  },
  {
    title: "Address",
    dataIndex: "address",
    sorter: (a, b) => a.address.length - b.address.length
  },
  {
    title: "Description",
    dataIndex: "description",
    sorter: (a, b) => a.description.length - b.description.length
  },

];
const InventoryList = () => {
  const [open, setOpen] = useState(false);
  const [inventoryId, setinventoryId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setinventoryId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getInventories());
  }, []);
  const getInventoryState = useSelector((state) => state.inventory.inventories);
  const data1 = [];
  for (let i = 0; i < getInventoryState.length; i++) {
    data1.push({
      key: i + 1,
      name: getInventoryState[i].title,
      address: getInventoryState[i].address1 + " " + getInventoryState[i].address2 + " " + getInventoryState[i].country + " " +
        getInventoryState[i].state + " " + getInventoryState[i].city + " " + getInventoryState[i].postalcode,
      description: getInventoryState[i].description,
      action: (
        <>
          <Link
            to={`/admin/inventory/${getInventoryState[i].id}`}
            className=" fs-6"
            style={{ color: "#F06331" }}
          >
            <div className="d-flex align-items-center">
              <BiEdit />Edit
            </div>
          </Link>
          <button
            className="ms-3 fs-6 bg-transparent border-0"
            onClick={() => showModal(getInventoryState[i]._id)}
            style={{ color: "#F06331" }}
          >
            <div className="d-flex align-items-center">
              <AiFillDelete />Delete
            </div>
          </button>
        </>
      ),
    });
  }
  // const deleteInventory = (e) => {
  //   dispatch(deleteAInventory(e));

  //   setOpen(false);
  //   setTimeout(() => {
  //     dispatch(getInventories());
  //   }, 100);
  // };
  return (
    <div>
      <h3 className="mb-4 title">Inventory List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          // deleteInventory(inventoryId);
        }}
        title="Are you sure you want to delete this inventory?"
      />
    </div>
  )
}

export default InventoryList