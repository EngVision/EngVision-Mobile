import {
	Avatar,
	AvatarFallbackText,
	Box,
	Button,
	ButtonText,
	HStack,
	Icon,
	Image,
	Progress,
	ProgressFilledTrack,
	ScrollView,
	Text,
	VStack,
	View,
} from '@gluestack-ui/themed';
import { BookOpen, MoveRight } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ApplicationScreenProps } from '../../../types/navigation';
import { StreakIcon } from '../../../assets/icons/StreakIcon';
import { useQuery } from '@tanstack/react-query';
import { fetchUserLevel } from '../../services/dashboard';
import { IUserLevel } from '../../../types/dashboard';
import { useStore } from '../../zustand/store';
import { fetchCoursesExercises } from '../../services/dashboard';
import { CourseDetails } from '../../../types/courseDetails';
import { fetchSuggestedCourses } from '../../services/dashboard';
import { SERVER_FILES_URL } from '../../utils/constants';
import MyImage from '../../components/common/MyImage';
export const Home = ({ navigation }: ApplicationScreenProps) => {
	const user: any = useStore(state => state.user);
	const { data: userLevel } = useQuery<IUserLevel>({
		queryKey: ['user-level'],
		queryFn: () => fetchUserLevel(),
	});
	const { data: coursesExercises } = useQuery<CourseDetails[]>({
		queryKey: ['courses-exercise'],
		queryFn: () => fetchCoursesExercises(),
	});
	const { data: suggestedCourses } = useQuery<CourseDetails[]>({
		queryKey: ['suggested-courses'],
		queryFn: () => fetchSuggestedCourses(),
	});

	return (
		<SafeAreaView>
			<ScrollView p={20} backgroundColor="#FFFCF7">
				<VStack
					w={'100%'}
					justifyContent="space-between"
					alignItems="center"
					gap={20}
				>
					<Box>
						<HStack
							w={'100%'}
							justifyContent="space-between"
							alignItems="center"
						>
							<Text fontSize={20} fontWeight="bold" color="black">
								Welcome back, {user.firstName + ' ' + user.lastName}!
							</Text>
							<Avatar bgColor="$amber600" borderRadius="$full">
								<AvatarFallbackText>
									{user.firstName + ' ' + user.lastName}
								</AvatarFallbackText>
							</Avatar>
						</HStack>
					</Box>
					<Box>
						<HStack
							w={'100%'}
							justifyContent="center"
							alignItems="center"
							gap={20}
						>
							<HStack
								flex={1}
								p={20}
								bgColor="#FFD43B"
								borderRadius={12}
								alignItems="center"
								justifyContent="center"
							>
								<VStack alignItems="center">
									<Text fontSize={24} color="$primary500" fontWeight="bold">
										30
									</Text>
									<Text fontSize={14} color="$primary500" fontWeight="bold">
										Day Streaks
									</Text>
								</VStack>
								<Icon as={StreakIcon} w={50} h={50} />
							</HStack>
							<HStack
								flex={1}
								p={20}
								bgColor="#F3EFE2"
								borderRadius={12}
								alignItems="center"
								justifyContent="center"
							>
								<VStack alignItems="center">
									<Text fontSize={24} color="$primary500" fontWeight="bold">
										{userLevel?.CEFRLevel || 'C2'}
									</Text>
									<Text fontSize={14} color="$primary500" fontWeight="bold">
										Your level
									</Text>
								</VStack>
								<Icon as={StreakIcon} w={50} h={50} />
							</HStack>
						</HStack>
					</Box>
					<Box>
						<HStack
							w={'100%'}
							justifyContent="space-between"
							alignItems="center"
						>
							<Text fontSize={18} fontWeight="bold" color="black">
								Your Progress
							</Text>
							<Button
								action={'primary'}
								variant={'link'}
								size={'md'}
								isDisabled={false}
								gap={2}
								onPress={() => navigation.navigate('MyHub')}
							>
								<ButtonText color="black">Show all</ButtonText>
								<MoveRight color={'black'} />
							</Button>
						</HStack>
						<VStack gap={10}>
							{coursesExercises?.slice(0, 5).map(course => (
								<VStack
									key={course.id}
									gap={10}
									p={10}
									backgroundColor="#F7F4F4"
									borderRadius={8}
								>
									<HStack gap={10}>
										<Box backgroundColor="#2769E7" p={6} borderRadius={8}>
											<BookOpen color={'white'} size={40} />
										</Box>
										<VStack>
											<Text fontSize={16} fontWeight="bold" color="black">
												{course.title}
											</Text>
										</VStack>
									</HStack>
									<HStack justifyContent="space-between" alignItems="center">
										<Progress value={course.progress * 100} w={140} size="sm">
											<ProgressFilledTrack />
										</Progress>
										<VStack alignItems="center">
											<Text fontSize={14} fontWeight="bold">
												{course.progress * 100}%
											</Text>
											<Text fontSize={12}>Completed</Text>
										</VStack>
										<Button
											size="md"
											variant="solid"
											action="positive"
											isDisabled={false}
											isFocusVisible={false}
											borderRadius={8}
										>
											<ButtonText>Continue</ButtonText>
										</Button>
									</HStack>
								</VStack>
							))}
						</VStack>
					</Box>
					<Box paddingBottom={100}>
						<HStack
							w={'100%'}
							justifyContent="space-between"
							alignItems="center"
						>
							<Text fontSize={18} fontWeight="bold" color="black">
								Top picks for you
							</Text>
							<Button
								action={'primary'}
								variant={'link'}
								size={'md'}
								isDisabled={false}
								gap={2}
								onPress={() => navigation.navigate('Discover')}
							>
								<ButtonText color="black">Show all</ButtonText>
								<MoveRight color={'black'} />
							</Button>
						</HStack>
						<VStack gap={10}>
							{suggestedCourses?.slice(0, 5).map(course => (
								<VStack
									key={course.id}
									gap={10}
									p={10}
									backgroundColor="#F7F4F4"
									borderRadius={12}
								>
									<MyImage source={course.thumbnail} />
									<VStack gap={10}>
										<Text fontSize={16} fontWeight="bold" color="black">
											{course.title}
										</Text>
									</VStack>
								</VStack>
							))}
						</VStack>
					</Box>
				</VStack>
			</ScrollView>
		</SafeAreaView>
	);
};
