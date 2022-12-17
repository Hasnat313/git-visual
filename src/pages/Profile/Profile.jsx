import { Avatar, Button, Card, Col, FloatButton, Grid, Image, Row, Space, Typography, Dropdown, Divider, List, Popover } from "antd";
import { Link } from "react-router-dom";
import { profile } from "../../utils/data";
import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { BiLocationPlus } from "react-icons/bi";
import { BsChat } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import VirtualList from "rc-virtual-list";
import { useState, useEffect } from "react";
import avatar from "./Assets/avatar.jpg";
// import Banner from "./../../components/Banner/Banner";
import ProfileTabs from "./Components/ProfileTabs/ProfileTabs";
import "./Profile.scss";
import { MenuProps, message } from "antd";
import { Co } from "react-flags-select";
const { Meta } = Card;
const { Text, Title } = Typography;

const { useBreakpoint } = Grid;

export default function Profile() {
	const userProfile = profile();
	const screens = useBreakpoint();

	const fakeDataUrl = "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
	const ContainerHeight = 400;
	const [data, setData] = useState([]);
	const appendData = () => {
		fetch(fakeDataUrl)
			.then((res) => res.json())
			.then((body) => {
				setData(data.concat(body.results));
				message.success(`${body.results.length} more items loaded!`);
			});
	};
	useEffect(() => {
		appendData();
	}, []);
	const onScroll = (e) => {
		if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
			appendData();
		}
	};
	const content = (
		<List style={{ width: "500px" }}>
			<VirtualList data={data} height={ContainerHeight} itemHeight={47} itemKey="email" onScroll={onScroll}>
				{(item) => (
					<List.Item key={item.email} style={{ cursor: "pointer" }}>
						<List.Item.Meta avatar={<Avatar src={item.picture.large} />} title={<a href="#">{item.name.last}</a>} description={item.email} />
						<div style={{ border: "1px solid black", width: "120px", textAlign: "center", padding: "3px", borderRadius: "20px" }}>Followers</div>
					</List.Item>
				)}
			</VirtualList>
		</List>
	);
	const content2 = (
		<List style={{ width: "500px" }}>
			<VirtualList data={data} height={ContainerHeight} itemHeight={47} itemKey="email" onScroll={onScroll}>
				{(item) => (
					<List.Item key={item.email} style={{ cursor: "pointer" }}>
						<List.Item.Meta avatar={<Avatar src={item.picture.large} />} title={<a href="#">{item.name.last}</a>} description={item.email} />
						<div style={{ border: "1px solid black", width: "120px", textAlign: "center", padding: "3px", borderRadius: "20px" }}>Follwing</div>
					</List.Item>
				)}
			</VirtualList>
		</List>
	);

	return (
		<section span={24} className="Profile">
			<Row
				style={{
					width: "100%",
					overflow: "hidden",
				}}
				gutter={[0, 0]}
			>
				{/* <Col span={24} style={{ maxHeight: "480px" }} className="userImage"> */}
				<Col span={24} className="userImage">
					<Col span={24}>
						<Image src={userProfile?.coverPhoto} preview={false} className="cover-photo" width={"-webkit-fill-available"} />
						{/* <Banner Image={userProfile?.coverPhoto} /> */}
						<FloatButton style={{ position: "absolute", right: "60px" }} icon={<EditOutlined />} type="default" />
					</Col>
					<Col
						// xs={{ span: 16 }}
						// sm={{ span: 14 }}
						// md={{ span: 11 }}
						// lg={{ span: 9 }}
						// xl={{ span: 8 }}
						span={24}
						className="user-picture-container"
					>
						<Avatar className="user-picture" size="large" shape="square" icon={<UserOutlined />} src={avatar} style={{ boxShadow: "10px 20px 20px black !important" }} />

						<FloatButton
							style={{
								position: "initial",
								top: "20px",
								marginTop: "90px",
								marginLeft: "-25px",
							}}
							icon={<EditOutlined />}
							type="default"
						/>
					</Col>

					<Col span={24} className="editIcons">
						<Space
							direction="vertical"
							style={{
								alignItems: "end",
								height: "22rem",
								justifyContent: "space-between",
							}}
						>
							<Link to="/editprofile">
								<Button
									icon={<FiEdit />}
									style={{
										borderRadius: "0px",
										display: "flex",
										alignItems: "center",
										gap: "10px",
										justifyContent: "space-between",
									}}
								>
									Edit Profile
								</Button>
							</Link>
						</Space>
					</Col>
				</Col>

				<div className="user-wrapper">
					<Row
						gutter={[0, 20]}
						style={{
							width: "100%",
							overflow: "hidden",
						}}
					>
						<Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
							<Space size="middle" direction="vertical" style={{ width: "100%" }}>
								<Text>
									<span className="name">{userProfile?.name}</span>
									<span className="location">
										&nbsp; <BiLocationPlus /> &nbsp;
										{userProfile?.location}
									</span>
								</Text>

								<Text className="username">{userProfile?.userName}</Text>

								<Space direction="horizontal" style={{ textAlign: "center" }} size="large">
									<Col>
										<Title level={4} strong style={{ margin: 0 }}>
											{userProfile?.posts}
										</Title>
										<Text type="secondary">Posts</Text>
									</Col>
									<Popover placement="bottomRight" content={content} title="Followers">
										<Col style={{ cursor: "pointer" }}>
											<Title level={4} strong style={{ margin: 0 }}>
												{userProfile?.followers}
											</Title>
											<Text type="secondary">Followers</Text>
										</Col>
									</Popover>
									<Popover placement="bottomRight" content={content2} style={{ width: "1000px !important" }} title="Following">
										<Col style={{ cursor: "pointer" }}>
											<Title level={4} strong style={{ margin: 0 }}>
												{userProfile?.following}
											</Title>
											<Text type="secondary">Following</Text>
										</Col>
									</Popover>
								</Space>
							</Space>
						</Col>

						<Col
							xl={{ span: 12 }}
							lg={{ span: 12 }}
							md={{ span: 12 }}
							sm={{ span: 24 }}
							xs={{ span: 24 }}
							style={{
								textAlign: "right",
							}}
						>
							<Space
								// direction={screens.xs ? "vertical" : "horizontal"}
								// direction={screens.xs ? "vertical" : "horizontal"}
								size="large"
							>
								<button className="follow-btn">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
										<path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
										<path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
									</svg>
									&nbsp; Follow
								</button>
								<button className="message-btn">
									<BsChat /> &nbsp; Message
								</button>
							</Space>
						</Col>
					</Row>

					<Col xl={{ span: 20 }} lg={{ span: 20 }} md={{ span: 24 }} style={{ padding: "20px 0px" }}>
						<Title level={4}>about</Title>
						<Text>{userProfile?.about}</Text>
					</Col>

					<Col span={24} style={{ padding: "0" }}>
						<Title level={4} style={{ padding: "10px 0px", margin: 0 }}>
							joined
						</Title>
						<Text>{userProfile?.joined}</Text>
					</Col>

					<Col span={24} style={{ padding: "20px 0px" }}>
						<Title level={4} style={{ padding: "20px 0px" }}>
							socials
						</Title>
						<Space direction="horizontal" size="large">
							{userProfile?.soialLinks?.map((social, index) => {
								return (
									<a href={social.link} target="_blank" key={index}>
										<Image preview={false} src={social.logo} width="2.5rem" />
									</a>
								);
							})}
						</Space>
					</Col>

					<Col style={{ padding: "1.5rem 0" }}>
						{/* // PROFILE TABs  */}
						<ProfileTabs />
					</Col>
				</div>
			</Row>
		</section>
	);
}
