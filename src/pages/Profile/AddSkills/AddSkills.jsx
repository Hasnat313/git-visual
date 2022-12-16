// Library Imports
import { useState } from "react";
import { Row, Col, Typography, Form, Input, Button, Space, Select, Upload, Image, message } from "antd";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// Pages, Components, Media & StyleSheets

import "../JobPost/JobPost.scss";
import css from "./AddSkills.module.scss";
import Banner from "../../../components/Banner/Banner";
import uploadIcon from "../../../assets/svg/uploadIcon.svg";
import BannerImage from "../../../assets/Banners/banner3.png";

// Library Constants
const { Text, Title } = Typography;
const { Dragger } = Upload;

const props = {
	name: "file",
	multiple: true,
	action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
	onChange(info) {
		const { status } = info.file;
		if (status !== "uploading") {
			// console.log(info.file, info.fileList);
		}
		if (status === "done") {
			message.success(`${info.file.name} file uploaded successfully.`);
		} else if (status === "error") {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
	onDrop(e) {
		// console.log("Dropped files", e.dataTransfer.files);
	},
};

export default function AddSkills() {
	const [value, setValue] = useState("");

	const modules = {
		toolbar: [[{ header: [1, 2, false] }], ["bold", "italic", "underline", "link", { list: "ordered" }, { list: "bullet" }]],
	};

	const formats = ["header", "bold", "italic", "underline", "link", { list: "ordered" }, { list: "bullet" }];

	const options = [];
	for (let i = 10; i < 36; i++) {
		options.push({
			value: i.toString(36) + i,
			label: i.toString(36) + i,
		});
	}

	const codingLanguages = [
		{ value: 1, label: "Web" },
		{ value: 2, label: "Mobile" },
		{ value: 3, label: "Python" },
		{ value: 4, label: "Node" },
		{ value: 5, label: "React" },
	];

	const uploadLogo = (data) => {
		// console.log(data);
		// setTradeLicense(data?.fileList);
		// console.log("tradeLicense State", tradeLicense);
	};

	return (
		<section className="AddSkills">
			<Row justify="center" style={{ overflow: "hidden", width: "100%" }}>
				<Col span={24} className="banner">
					<Banner Image={BannerImage} />
				</Col>
			</Row>

			<Row justify="center" style={{ overflow: "hidden", width: "100%" }}>
				<Col xs={{ span: 20 }} sm={{ span: 18 }} md={{ span: 16 }} lg={{ span: 14 }} xl={{ span: 12 }}>
					<Space>
						<br />
						<br />
						<br />
						<br />
						<br />
					</Space>
					<Title className={css["page-title"]} style={{ color: "white" }} level={3}>
						Showcase your skills !
					</Title>
					<Col span={24} className="SkillsPageForm">
						<Title level={4}>Tell us about your Project</Title>
						<br />
						<Form
							size="large"
							name="skill_form"
							autoComplete="on"
							layout="vertical"
							scrollToFirstError
							requiredMark="optional"
							// onFinish={}
							initialValues={{
								remember: true,
							}}
						>
							<Col span={24}>
								<Form.Item
									label="Title"
									name="title"
									rules={[
										{
											required: true,
											message: "Please enter a valid Title!",
										},
										{ min: 2, message: "Too Short!" },
										{ max: 50, message: "Too Long!" },
									]}
								>
									<Input />
								</Form.Item>
							</Col>

							<Col span={24} className="upload_section">
								<Dragger {...props}>
									<p className="ant-upload-drag-icon">
										<Image src={uploadIcon} alt="uploadIcon" preview={false} />
									</p>
									<p className="ant-upload-text">Drag and drop and Image or Video or Browse</p>
									<p className="ant-upload-hint">1600x1200 or higher recommended. Max 10MB each (20MB for videos)</p>

									<Row>
										<Col span={12}>
											<Text type="secondary" className="hint">
												High resolution Images(png,jpg,gif)
											</Text>
										</Col>
										<Col span={12} className="hint">
											<Text type="secondary">{"Videos(MP$,4:3,<60secs)"}</Text>
										</Col>
									</Row>
									<Row>
										<Col span={12}>
											<Text type="secondary" className="hint">
												Animated gifs(4:3,800x600,1600x1200)
											</Text>
										</Col>
										<Col span={12}>
											<Text type="secondary" className="hint">
												You must own the rights to media uploaded
											</Text>
										</Col>
									</Row>
								</Dragger>
							</Col>

							<br />

							<Col span={24}>
								<Form.Item
									label="Description"
									name="description"
									rules={[
										{
											required: true,
											message: "Describe yourself!",
										},
										{ min: 2, message: "Too Short!" },
										{ max: 200, message: "Too Long!" },
									]}
								>
									<ReactQuill theme="snow" modules={modules} formats={formats} value={value} onChange={setValue} />
									{/* <Input.TextArea /> */}
								</Form.Item>
							</Col>

							<Col span={24}>
								<Form.Item
									label="Coding Languages"
									name="coding"
									rules={[
										{
											required: true,
											message: "Please enter languages!",
										},
									]}
								>
									<Select
										mode="tags"
										size="large"
										placeholder="Please select"
										defaultValue={["Web", "React"]}
										//   onChange={handleChange}
										style={{
											width: "100%",
										}}
										options={codingLanguages}
									/>
								</Form.Item>
							</Col>

							<Col span={24}>
								<Form.Item
									label="Tags"
									name="tags"
									rules={[
										{
											required: true,
											message: "Please enter tags!",
										},
									]}
								>
									<Select
										mode="tags"
										size="large"
										placeholder="Please select"
										defaultValue={["a10", "c12"]}
										//   onChange={handleChange}
										style={{
											width: "100%",
										}}
										options={options}
									/>
								</Form.Item>
							</Col>

							<Col span={24} style={{ textAlign: "end", marginTop: "200px" }}>
								<Space direction="horizontal">
									<Form.Item>
										<Link to="/profile">
											<Button type="ghost" className="cancel">
												Cancel
											</Button>
										</Link>
									</Form.Item>

									<Form.Item>
										<Link to="/skills">
											<Button
												className="save"
												type="primary"
												htmlType="submit"
												// block
											>
												Continue
											</Button>
										</Link>
									</Form.Item>
								</Space>
							</Col>
						</Form>
					</Col>
				</Col>
			</Row>
		</section>
	);
}
