import { InfoCircleOutlined } from "@ant-design/icons";
import { Col, Collapse, Radio, Row, Select, Typography, Button, Space, Tooltip, Input } from "antd";

import { useState } from "react";
import { profile } from "../../utils/data";

import ProjectItem from "./../../components/ProjectItem/ProjectItem";
import ProjectItemAlt from "./../../components/ProjectItemAlt/ProjectItemAlt";
import "./DiscoverPage.scss";

const { Panel } = Collapse;
const { Text, Title } = Typography;

export default function DiscoverPage() {
	const userProfile = profile();
	const [projects, setProjects] = useState(userProfile?.projects?.slice(0, 12));
	const [projectsLoaded, setProjectLoaded] = useState(false);
	const toggleFilters = () => {
		setFiltersShown((current) => !current);
	};
	const [filtersShown, setFiltersShown] = useState(false);
	const codingLanguages = [
		{ value: 1, label: "Web" },
		{ value: 2, label: "Mobile" },
		{ value: 3, label: "Python" },
		{ value: 4, label: "Node" },
		{ value: 5, label: "React" },
	];
	const mediaMatch = window.matchMedia("(max-width: 400px)");
	const enterLoading = () => {
		setProjectLoaded(true);
		setTimeout(() => {
			setProjectLoaded(false);
			setProjects(userProfile?.projects);
		}, 3000);
	};

	return (
		<section
			className="DiscoverPage"
			style={{
				paddingTop: "5rem",
				paddingBottom: "5rem",
				paddingLeft: "1rem",
				paddingRight: "0rem",
			}}
		>
			<Row gutter={[0, 70]} style={{ overflow: "hidden", width: "100%" }}>
				<Col
				style={{padding:"0rem 5rem"}}
				 xs={{ span: 24 }} 
				sm={{ span: 24 }} 
				md={{ span: 24 }}
				lg={{ span: 24 }}
				xl={{ span: 24 }}>
					<Radio.Group
						defaultValue="a"
						className="radio"
						style={{
							gap: "20px",
							display: "flex",
							flexWrap: "wrap",
							
							justifyContent: "space-evenly",
						}}
					>
						<Radio.Button className="radio__item" value="a">
							Web Apps
						</Radio.Button>
						<Radio.Button className="radio__item" value="b">
							Static
						</Radio.Button>
						<Radio.Button className="radio__item" value="c">
							Dapps
						</Radio.Button>
						<Radio.Button className="radio__item" value="d">
							Mobile
						</Radio.Button>
						<Radio.Button className="radio__item" value="e">
							Desktop
						</Radio.Button>

						{/* <Radio.Button value="f">Print</Radio.Button>
              <Radio.Button value="g">Product Design</Radio.Button>
              <Radio.Button value="h">Typography</Radio.Button>
              <Radio.Button value="i">Web Design</Radio.Button> */}
					</Radio.Group>
				</Col>

				<Col span={24}>
					<Space direction="vertical" size="middle">
						<Col span={24} xs={24}>
							<Title level={4} xs={24}>
								Explore projects made by community members!
							</Title>
							<Row align="middle" style={{ width: "100%", justifyContent: "space-between" }}>
								<Select
									defaultValue="Trending"
									style={{
										width: 120,
									}}
									// onChange={handleChange}
									options={[
										{
											value: "New",
											label: "New",
										},
										{
											value: "Trending",
											label: "Trending",
										},
										{
											value: "Followings",
											label: "Followings",
										},
									]}
								/>

								<Button onClick={toggleFilters}>Filters</Button>
							</Row>
							<br />
							<Row
								justify="end"
								align="middle"
								style={{
									justifyContent: "end",
									overflow: "hidden",
									minWidth: 350,
									maxWidth: "100%",
								}}
							>
								<Space
									className=""
									direction="horizontal"
									size="middle"
									style={{
										display: filtersShown ? "flex" : "none",
										// width: 250,
										minWidth: 350,
										maxWidth: "100%",
									}}
								>
									<Col>
										<Typography.Title level={5}>Tag</Typography.Title>
										<Select
											mode="tags"
											size="large"
											defaultValue={["Web", "React"]}
											//   onChange={handleChange}
											style={{
												minWidth: 220,
											}}
											options={codingLanguages}
										/>
									</Col>
									<Col>
										<Typography.Title level={5}>Coded with</Typography.Title>
										<Select
											size="large"
											//   onChange={handleChange}
											style={{
												minWidth: 220,
											}}
											options={codingLanguages}
										/>
									</Col>
								</Space>
							</Row>
						</Col>

						<Row style={{ width: "100%", margin: "auto", ...(mediaMatch.matches && { width: "85%" }) }} gutter={[30, 30]}>
							{projects.map((project, key) => {
								return (
									<Col key={key} xl={{ span: 6 }} lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
										<ProjectItem project={project} />
									</Col>
								);
							})}
						</Row>
					</Space>
				</Col>
				<Col span={24}>
					<div className="load-posts-wrapper">
						<Button className="load-posts" type="primary" loading={projectsLoaded} onClick={() => enterLoading()}>
							Load More Posts...
						</Button>
					</div>
				</Col>
			</Row>
		</section>
	);
}
