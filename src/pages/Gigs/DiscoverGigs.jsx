// import { profile } from "../../utils/data";
import { ArrowRightOutlined, SearchOutlined } from "@ant-design/icons";
import { Checkbox, Col, Collapse, Input, Radio, Row, Select, Space, Typography } from "antd";
import { Link } from "react-router-dom";

import JobCard from "./Components/JobCard";
import css from "./DiscoverGigs.module.scss";

const { Search } = Input;
const { Panel } = Collapse;
const { Text, Title } = Typography;

const locationOptions = ["Work Remotely", "Relocation"];
const jobOptions = ["Permanent", "Contract", "Freelance", "Other"];

export default function DiscoverGigs() {
	// const userProfile = profile();
	// console.log(userProfile);

	const onSearch = (value) => {
		console.log(value);
	};
	const Exp = [
		{ value: 1, label: "Exp1" },
		{ value: 2, label: "Exp2" },
	];
	const Ind = [
		{ value: 1, label: "Ind1" },
		{ value: 2, label: "Ind2" },
	];
	const Tag = [
		{ value: 1, label: "Tag1" },
		{ value: 2, label: "Tag2" },
	];
	return (
		<Col span={24} className={css["DiscoverGigs"]}>
			<Row gutter={[0, { xs: 40, sm: 40, md: 60, lg: 70 }]} style={{ overflow: "hidden", width: "100%" }} justify="center">
				<Col
					span={24}
					style={{
						textAlign: "center",
					}}
				>
					<Col span={24}>
						<Title strong>
							Discover Gigs and Jobs that are right for &nbsp;
							<span className={css["title"]}>You</span>
						</Title>
					</Col>

					<Col span={24}>
						<Text strong>Find your next Gig !</Text>
					</Col>

					<Link to="/pricing">
						<button className={css["btn-green"]}>
							Looking for Talent? <ArrowRightOutlined />
						</button>
					</Link>
				</Col>
				<Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }}>
					<Radio.Group
						defaultValue="a"
						size="large"
						className={css["radio"]}
						style={{
							gap: "20px",
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "space-between",
						}}
					>
						<Radio.Button className={css["radio__btn"] + " options"} value="a">
							Freelance
						</Radio.Button>
						<Radio.Button className={css["radio__btn"] + " options"} value="b">
							Studio
						</Radio.Button>
						<Radio.Button className={css["radio__btn"] + " options"} value="c">
							Game Dev
						</Radio.Button>
						<Radio.Button className={css["radio__btn"] + " options"} value="d">
							Remote
						</Radio.Button>
						<Radio.Button className={css["radio__btn"] + " options"} value="e">
							Fixed Pay
						</Radio.Button>
					</Radio.Group>
				</Col>
				<Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 14 }} lg={{ span: 12 }} xl={{ span: 12 }}>
					<Input maxLength="100" allowClear className={css["search"]} placeholder=" Search Jobs" prefix={<SearchOutlined />} onPressEnter={onSearch} onChange={onSearch} />
				</Col>

				<Col span={24} className={css["cards-content"]}>
					<Row justify="space-between" style={{ width: "100%", overflow: "hidden" }} gutter={[0, 20]}>
						<Col lg={{ span: 17, order: 1 }} md={{ span: 16, order: 1 }} sm={{ span: 24, order: 2 }} xs={{ span: 24, order: 2 }}>
							<Row
								style={{
									width: "100%",
									overflow: "hidden",
								}}
								gutter={[0, 20]}
							>
								<JobCard />
								<JobCard />
								<JobCard />
							</Row>
						</Col>

						{/* // FILTER  */}
						<Col lg={{ span: 6 }} md={{ span: 7 }} sm={{ span: 24, order: 1 }} xs={{ span: 24, order: 1 }} className={css["filter"]}>
							<Collapse bordered={false} defaultActiveKey={["1"]} expandIconPosition="right" ghost={true} className="collapse">
								<Panel
									className={css["filter__panel"]}
									header={
										<Text className={css["filter__panel"]} strong>
											Location
										</Text>
									}
									style={{ color: "red" }}
									key="1"
								>
									<Space direction="vertical" size="middle" style={{ width: "100%" }}>
										<Input className={css["filter__input"]} placeholder="Country" />
										<Input className={css["filter__input"]} placeholder="City" />

										<Checkbox.Group
											className={css["filter__checkboxes"]}
											options={locationOptions}
											// onChange={onChange}
										/>
									</Space>
								</Panel>
								<Panel
									className={css["filter__panel"]}
									header={
										<Text className={css["filter__panel"]} strong>
											Job Type
										</Text>
									}
									key="2"
								>
									<Checkbox.Group
										className={css["filter__checkboxes"]}
										options={jobOptions}
										// onChange={onChange}
									/>
								</Panel>
								<Panel
									className={css["filter__panel"]}
									header={
										<Text className={css["filter__panel"]} strong>
											Expertise
										</Text>
									}
									key="3"
								>
									<Space direction="vertical" size="middle" style={{ width: "100%" }}>
										<Select
											mode="tags"
											size="large"
											placeholder="Please select"
											//   onChange={handleChange}
											style={{
												minWidth: 220,
												background: "black",
												color: "black",
											}}
											className={css["filter__input"]}
											options={Exp}
										/>
									</Space>
									{/* <Checkbox.Group
										className={css["filter__checkboxes"]}
										options={["Expertise 1", "Expertise 2"]}
										// onChange={onChange}
									/> */}
								</Panel>
								<Panel
									className={css["filter__panel"]}
									header={
										<Text className={css["filter__panel"]} strong>
											Industry
										</Text>
									}
									key="4"
								>
									<Space direction="vertical" size="middle" style={{ width: "100%" }}>
										<Select
											mode="tags"
											size="large"
											placeholder="Please select"
											//   onChange={handleChange}
											style={{
												minWidth: 220,
												background: "black",
												color: "black",
											}}
											className={css["filter__input"]}
											options={Ind}
										/>
									</Space>
								</Panel>
								<Panel
									className={css["filter__panel"]}
									header={
										<Text className={css["filter__panel"]} strong>
											Tags
										</Text>
									}
									key="5"
								>
									<Space direction="vertical" size="middle" style={{ width: "100%" }}>
										<Select
											mode="tags"
											size="large"
											placeholder="Please select"
											//   onChange={handleChange}
											style={{
												minWidth: 220,
												background: "black",
												color: "black",
												padding: "1px 1px",
											}}
											options={Tag}
										/>
									</Space>
								</Panel>
							</Collapse>
						</Col>
					</Row>
				</Col>
			</Row>
		</Col>
	);
}
