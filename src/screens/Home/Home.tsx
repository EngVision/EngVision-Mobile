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
} from '@gluestack-ui/themed';
import { BookOpen, MoveRight } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ApplicationScreenProps } from '../../../types/navigation';
import { StreakIcon } from '../../../assets/icons/StreakIcon';

export const Home = ({ navigation }: ApplicationScreenProps) => {
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
								Welcome back, Michael!
							</Text>
							<Avatar bgColor="$amber600" borderRadius="$full">
								<AvatarFallbackText>Michael!</AvatarFallbackText>
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
										B1
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
							>
								<ButtonText color="black">Show all</ButtonText>
								<MoveRight color={'black'} />
							</Button>
						</HStack>
						<VStack gap={10}>
							<VStack
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
											English Grammar and Composition
										</Text>
										<Text fontSize={14} fontWeight="$thin" color="black">
											Teacher: John E. Warriner
										</Text>
									</VStack>
								</HStack>
								<HStack justifyContent="space-between" alignItems="center">
									<Progress value={80} w={140} size="sm">
										<ProgressFilledTrack />
									</Progress>
									<VStack alignItems="center">
										<Text fontSize={14} fontWeight="bold">
											80%
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
							<VStack
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
											English Grammar and Composition
										</Text>
										<Text fontSize={14} fontWeight="$thin" color="black">
											Teacher: John E. Warriner
										</Text>
									</VStack>
								</HStack>
								<HStack justifyContent="space-between" alignItems="center">
									<Progress value={80} w={140} size="sm">
										<ProgressFilledTrack />
									</Progress>
									<VStack alignItems="center">
										<Text fontSize={14} fontWeight="bold">
											80%
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
							<VStack
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
											English Grammar and Composition
										</Text>
										<Text fontSize={14} fontWeight="$thin" color="black">
											Teacher: John E. Warriner
										</Text>
									</VStack>
								</HStack>
								<HStack justifyContent="space-between" alignItems="center">
									<Progress value={80} w={140} size="sm">
										<ProgressFilledTrack />
									</Progress>
									<VStack alignItems="center">
										<Text fontSize={14} fontWeight="bold">
											80%
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
							>
								<ButtonText color="black">Show all</ButtonText>
								<MoveRight color={'black'} />
							</Button>
						</HStack>
						<VStack>
							<VStack
								gap={10}
								p={10}
								backgroundColor="#F7F4F4"
								borderRadius={12}
							>
								<Image
									h={200}
									w={'100%'}
									borderRadius={8}
									alt="Alternate Text"
									source={{
										uri: 'https://s3-alpha-sig.figma.com/img/eb14/21d4/643a4f49b74abbb194848b99dfa5b075?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jzkXmsULNVXnjjoxCl-b6syuaDVbc55V-IwEpRGIA5~4W~Zp2Aw-9v0Ol6zY-d2FoPw1fbzy8DDFeGVrVDmXGhiglXwP-19u-L0883MR3ucIPhWXKIywXfhsENC0M71sbiTGX4Q-bz9sCOZUiXWJioxU0hbsBUNFl4dFjvXtnitro~ZK2DS0Ywy5xP69cp2RlW6Xu42nwH68HpNyt8FBiOgSHfMaloHGvQlxv6E5v3oZu60TcvPWlIlO3vD2ZmiWe1tO3~IhcaPnJL0x-1udAQm0~2LK2UvKhZ3GBhT4pPqUJFlNPNvaPYPyeLPy980wC5IYXwak0HbAOSal9~JWxg__',
									}}
								/>
								<VStack gap={10}>
									<Text fontSize={16} fontWeight="bold" color="black">
										English for job interviews
									</Text>
									<Text fontSize={14} fontWeight="$thin" color="black">
										Teacher: John E. Warriner
									</Text>
								</VStack>
							</VStack>
							<VStack
								gap={10}
								p={10}
								backgroundColor="#F7F4F4"
								borderRadius={12}
							>
								<Image
									h={200}
									w={'100%'}
									borderRadius={8}
									alt="Alternate Text"
									source={{
										uri: 'https://s3-alpha-sig.figma.com/img/eb14/21d4/643a4f49b74abbb194848b99dfa5b075?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jzkXmsULNVXnjjoxCl-b6syuaDVbc55V-IwEpRGIA5~4W~Zp2Aw-9v0Ol6zY-d2FoPw1fbzy8DDFeGVrVDmXGhiglXwP-19u-L0883MR3ucIPhWXKIywXfhsENC0M71sbiTGX4Q-bz9sCOZUiXWJioxU0hbsBUNFl4dFjvXtnitro~ZK2DS0Ywy5xP69cp2RlW6Xu42nwH68HpNyt8FBiOgSHfMaloHGvQlxv6E5v3oZu60TcvPWlIlO3vD2ZmiWe1tO3~IhcaPnJL0x-1udAQm0~2LK2UvKhZ3GBhT4pPqUJFlNPNvaPYPyeLPy980wC5IYXwak0HbAOSal9~JWxg__',
									}}
								/>
								<VStack gap={10}>
									<Text fontSize={16} fontWeight="bold" color="black">
										English for job interviews
									</Text>
									<Text fontSize={14} fontWeight="$thin" color="black">
										Teacher: John E. Warriner
									</Text>
								</VStack>
							</VStack>
						</VStack>
					</Box>
				</VStack>
			</ScrollView>
		</SafeAreaView>
	);
};
