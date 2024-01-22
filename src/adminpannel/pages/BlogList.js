import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteABlog, getBlogs, resetState } from "../../features/blogs/blogSlice";
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
        title: "Category",
        dataIndex: "category",
        sorter: (a, b) => a.category.length - b.category.length
    },
    {
        title: "Action",
        dataIndex: "action",
    },
];
const BlogList = () => {
    const [open, setOpen] = useState(false);
    const [blogId, setblogId] = useState("");
    const showModal = (e) => {
        setOpen(true);
        setblogId(e);
    };

    const hideModal = () => {
        setOpen(false);
    };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(resetState());
        dispatch(getBlogs());
    }, []);
    const getBlogState = useSelector((state) => state.blog.blogs);
    const data1 = [];
    for (let i = 0; i < getBlogState.length; i++) {
        data1.push({
            key: i + 1,
            name: getBlogState[i].title,
            category: getBlogState[i].category,

            action: (
                <>
                    <Link
                        to={`/admin/blog/${getBlogState[i].id}`}
                        className=" fs-6"
                        style={{ color: "#F06331" }}
                    >
                        <div className="d-flex align-items-center">
                            <BiEdit />Edit
                        </div>
                    </Link>
                    <button
                        className="ms-3 fs-6 bg-transparent border-0"
                        onClick={() => showModal(getBlogState[i]._id)}
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
    const deleteBlog = (e) => {
        dispatch(deleteABlog(e));

        setOpen(false);
        setTimeout(() => {
            dispatch(getBlogs());
        }, 100);
    };
    return (
        <div>
            <h3 className="mb-4 title">Blogs List</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModal
                hideModal={hideModal}
                open={open}
                performAction={() => {
                    deleteBlog(blogId);
                }}
                title="Are you sure you want to delete this blog?"
            />
        </div>
    )
}

export default BlogList