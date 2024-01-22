import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout, Menu, Button, theme } from 'antd';
import { AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineUserSwitch, AiOutlineBgColors, AiFillCustomerService } from 'react-icons/ai';
import { SiBrandfolder } from 'react-icons/si'
import { MdCategory } from 'react-icons/md'
import { FaBalanceScaleRight, FaBloggerB } from 'react-icons/fa'
import { HiClipboardDocumentList } from 'react-icons/hi2'
import { ImBlog } from 'react-icons/im'
import { IoMdNotifications } from 'react-icons/io'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { RiCustomerService2Line } from 'react-icons/ri'
import { RiAccountCircleLine, RiCouponLine } from 'react-icons/ri'
import { LiaSignOutAltSolid } from 'react-icons/lia'
import { MdOutlineInventory, MdAssignmentAdd, MdAddToPhotos } from 'react-icons/md'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BsCardChecklist } from 'react-icons/bs'
import logo from '../../images/ecomupdatedlogo.png'
const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" >
                    <img src={logo} className='img-fluid adminlogo mt-0 ' alt='logo' />
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['']}
                    onClick={({ key }) => {
                        if (key == 'signout') {

                        } else {
                            navigate(key);
                        }
                    }}
                    items={[
                        {
                            key: '',
                            icon: <AiOutlineDashboard className='fs-4' />,
                            label: 'Dashboard',
                        },
                        {
                            key: 'customers',
                            icon: <AiOutlineUserSwitch className='fs-4' />,
                            label: 'Customers',
                        },
                        {
                            key: 'catalog',
                            icon: <AiOutlineShoppingCart className='fs-4' />,
                            label: 'Catalog',
                            children: [
                                {
                                    key: 'scale',
                                    icon: <FaBalanceScaleRight className='fs-4' />,
                                    label: 'Product Scale',
                                },
                                {
                                    key: 'list-scale',
                                    icon: <FaBalanceScaleRight className='fs-4' />,
                                    label: 'Scale List',
                                },
                                {
                                    key: 'product',
                                    icon: <AiOutlineShoppingCart className='fs-4' />,
                                    label: 'Add Product',
                                },
                                {
                                    key: 'list-product',
                                    icon: <AiOutlineShoppingCart className='fs-4' />,
                                    label: 'Product List',
                                },
                                {
                                    key: 'brand',
                                    icon: <SiBrandfolder className='fs-4' />,
                                    label: 'Brand',
                                },
                                {
                                    key: 'list-brand',
                                    icon: <SiBrandfolder className='fs-4' />,
                                    label: 'Brand List',
                                },
                                {
                                    key: 'category',
                                    icon: <MdCategory className='fs-4' />,
                                    label: 'Category',
                                },
                                {
                                    key: 'list-category',
                                    icon: <MdCategory className='fs-4' />,
                                    label: 'Category List',
                                },
                                {
                                    key: 'color',
                                    icon: <AiOutlineBgColors className='fs-4' />,
                                    label: 'Color',
                                },
                                {
                                    key: 'list-color',
                                    icon: <AiOutlineBgColors className='fs-4' />,
                                    label: 'Color List',
                                }
                            ]
                        },
                        {
                            key: 'inventories',
                            icon: <MdOutlineInventory className='fs-4' />,
                            label: 'inventory',
                            children: [
                                {
                                    key: 'inventory',
                                    icon: <MdAssignmentAdd className='fs-4' />,
                                    label: 'Add Inventory'
                                },
                                {
                                    key: 'inventory-list',
                                    icon: <BsCardChecklist className='fs-4' />,
                                    label: 'inventory List'
                                }
                            ]
                        },
                        {
                            key: 'orders',
                            icon: <HiClipboardDocumentList className='fs-4' />,
                            label: 'Orders',
                        },
                        {
                            key: 'marketing',
                            icon: <RiCouponLine className='fs-4' />,
                            label: 'Marketing',
                            children: [
                                {
                                    key: 'coupon',
                                    icon: <MdAddToPhotos className='fs-4' />,
                                    label: 'Add Coupon'
                                },
                                {
                                    key: 'coupon-list',
                                    icon: <RiCouponLine className='fs-4' />,
                                    label: 'Coupon List'
                                }                                
                            ]
                        },
                        {
                            key: 'blogs',
                            icon: <FaBloggerB className='fs-4' />,
                            label: 'Blogs',
                            children: [
                                {
                                    key: 'blog',
                                    icon: <ImBlog className='fs-4' />,
                                    label: 'Add Blogs'
                                },
                                {
                                    key: 'blog-list',
                                    icon: <FaBloggerB className='fs-4' />,
                                    label: 'Blog List'
                                },
                                {
                                    key: 'blog-category',
                                    icon: <ImBlog className='fs-4' />,
                                    label: 'Add Blog Category'
                                },
                                {
                                    key: 'blog-category-list',
                                    icon: <FaBloggerB className='fs-4' />,
                                    label: 'Blog Category List'
                                }
                            ]
                        },
                        {
                            key: 'enquiries',
                            icon: <RiCustomerService2Line className='fs-4' />,
                            label: 'Enquiries',
                        }
                    ]}
                />
            </Sider>
            <Layout>
                <Header className='d-flex justify-content-between ps-1 pe-5' style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div className='d-flex gap-4 align-items-center'>
                        <div className='position-relative'>
                            <IoMdNotifications className='fs-4' />
                            <span className='badge bg-danger rounded-circle p-1 position-absolute'>3</span>
                        </div>
                        <div className='d-flex gap-3 align-items-center dropdown'>
                            <div>
                                <img src='https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg'
                                    alt='profile'
                                    className='img-fluid round user-image rounded-circle'
                                    width={32}
                                    height={32} />
                            </div>
                            <div role="button" id="dropdownMenuLink"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <h5 className='mb-0'>Deepak Singh</h5>
                                <p className='mb-0'>Deepak.singh@careerbuilder.com</p>
                            </div>
                            <div className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink">
                                <li className=''><Link to='' className="dropdown-item py-2 mb-0" style={{ height: "auto", lineHeight: "20px" }}><RiAccountCircleLine className='me-1' />View Profile</Link></li>
                                <li className=''><Link to='' className="dropdown-item py-2 mb-0" style={{ height: "auto", lineHeight: "20px" }}><LiaSignOutAltSolid className='me-1' />Signout</Link></li>
                                <li className=''><Link to='' className="dropdown-item py-2 mb-0" style={{ height: "auto", lineHeight: "20px" }}><IoMdNotificationsOutline className='me-1' />Notifications</Link></li>

                            </div>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <ToastContainer
                        position="top-right"
                        autoClose={400}
                        hideProgressBar={false}
                        newestOnTop={true}
                        closeOnClick
                        rtl={false}                
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;