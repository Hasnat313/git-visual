import { SearchOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Space, Tabs, Typography } from "antd";
import { useState } from "react";

// Pages, Components, Media & StyleSheets
import ProjectItem from "./../../../../components/ProjectItem/ProjectItem";
import ProjectItemAlt from "./../../../../components/ProjectItemAlt/ProjectItemAlt";
import { profile } from "./../../../../utils/data";
import filter from "./filte.svg";
import css from "./ProfileTabs.module.scss";
import "./Tabs.scss";

// Library Constants
const { Text, Title } = Typography;

export default function JobPost() {
	const userProfile = profile();
	const [projects, setProjects] = useState(userProfile?.projects?.slice(0, 12));
	const [projectsLoaded, setProjectLoaded] = useState(false);

	const enterLoading = () => {
		setProjectLoaded(true);
		setTimeout(() => {
			setProjectLoaded(false);
			setProjects(userProfile?.projects);
		}, 3000);
	};
	const onSearch = (value) => {
		console.log(value);
	};

	const items = [
		{
			label: "Projects",
			key: "item-1",
			children: (
				<>
					<Col xs={{ span: 24 }} sm={{ span: 22 }} md={{ span: 12 }} lg={{ span: 9 }} xl={{ span: 8 }} style={{ borderRadius: "50px" }}>
						<Space size="middle" style={{ borderRadius: "100px" }}>
							<Input maxLength="100" allowClear className={css["search-btn"]} placeholder=" Search " prefix={<SearchOutlined />} onPressEnter={onSearch} onChange={onSearch} />
						</Space>
					</Col>
					<Space direction="vertical" size="middle">
						<br />
					</Space>
					<Space direction="vertical" size="middle">
						<br />
					</Space>
					<Col span={24}>
						<Row style={{ overflow: "hidden", width: "100%" }} gutter={[10, 20]}>
							{projects?.map((project, key) => {
								return (
									<Col key={key} xl={{ span: 6 }} lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
										<ProjectItemAlt project={project} />
									</Col>
								);
							})}
						</Row>
					</Col>
					<Space direction="vertical" size="middle">
						<br />
						<br />
					</Space>
					<Col span={24}>
						<div className="load-posts-wrapper">
							<Button className="load-posts" type="primary" loading={projectsLoaded} onClick={() => enterLoading()}>
								Load More Posts...
							</Button>
						</div>
					</Col>
				</>
			),
		},

		{ label: "Liked", key: "item-3", children: "Liked Content" },
		{
			label: "Jobs ",
			key: "item-4",
			children: (
				<>
					<Col span={24}>
						<Row style={{ overflow: "hidden", width: "100%" }} gutter={[10, 20]}>
							{projects?.map((project, key) => {
								return (
									<Col key={key} xl={{ span: 6 }} lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
										<ProjectItemAlt project={project} />
									</Col>
								);
							})}
						</Row>
					</Col>
					<Space direction="vertical" size="middle">
						<br />
						<br />
					</Space>
					<Col span={24}>
						<div className="load-posts-wrapper">
							<Button className="load-posts" type="primary" loading={projectsLoaded} onClick={() => enterLoading()}>
								Load More Posts...
							</Button>
						</div>
					</Col>
				</>
			),
		},
	];

	return (
		<>
			<Tabs
				//  className={css["profile-tabs"]}
				className="profile-tabs"
				items={items}
			/>
		</>
	);
}
