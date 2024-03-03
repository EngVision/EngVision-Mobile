import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { SvgUri } from 'react-native-svg';
import HomeCard from './Card';
import { useQuery } from '@tanstack/react-query';
import { getCourses } from '../../services/course';
import { useStore } from '../../zustand/store';
import { instance } from '../../services/instance';

interface TeacherHomeProps {}

const TeacherHome = (props: TeacherHomeProps) => {
	const user: any = useStore(state => state.user);
	const [courseStats, setCourseStats] = React.useState({
		totalStudents: 0,
		totalRevenue: 0,
		rating: '0',
		total: 0,
	});

	React.useEffect(() => {
		(async () => {
			const response = await getCourses({ status: 'All', limit: -1 });

			let totalStudents = 0;
			let totalRevenue = 0;
			let totalRating = 0;
			response.data.forEach((course: any) => {
				totalStudents += course.attendance;
				totalRevenue += course.attendance * course.price;
				totalRating += course.avgStar ? +course.avgStar : 0;
			});

			const rating = (
				totalRating /
					response.data.filter((course: any) => course.avgStar > 0).length || 0
			).toFixed(2);

			setCourseStats({
				totalStudents,
				totalRevenue,
				rating,
				total: response.data?.length || 0,
			});
		})();
	}, []);

	return (
		<SafeAreaView
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				flexDirection: 'row',
				gap: 16,
				padding: 16,
			}}
		>
			<View
				style={{
					paddingHorizontal: 24,
					paddingVertical: 24,
					backgroundColor: '#41AB3F',
					borderRadius: 8,
				}}
			>
				<Text style={{ color: '#fff', fontSize: 18, lineHeight: 24 }}>
					Hi, {user.firstName} {user.lastName}! Thank you for choosing to share
					your knowledge and inspire others on our platform. We are here to
					support you every step on this journey with us!
				</Text>

				<Text
					style={{
						color: '#fff',
						fontSize: 18,
						lineHeight: 24,
						fontStyle: 'italic',
						marginTop: 8,
					}}
				>
					If you want to manage your courses, please using the web version.
				</Text>

				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
					}}
				>
					<SvgUri uri="https://svgshare.com/i/13ih.svg" />
				</View>
			</View>

			<View
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					flexDirection: 'row',
					gap: 12,
					width: '100%',
				}}
			>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: 12,
					}}
				>
					<HomeCard label="TOTAL YOUR COURSES" value={courseStats.total} />
					<HomeCard
						label="TOTAL YOUR STUDENTS"
						value={courseStats.totalStudents}
					/>
				</View>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: 12,
					}}
				>
					<HomeCard
						label="TOTAL YOUR REVENUE"
						value={`${courseStats.totalRevenue} VNĐ`}
					/>
					<HomeCard
						label="AVG RATING YOUR COURSES"
						value={courseStats.rating}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default TeacherHome;
