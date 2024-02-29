export interface User {
	firstName: string;
	lastName: string;
	email: string;
	avatar?: string;
}
export interface Review {
	id: string;
	user: User;
	courseId: string;
	star: number;
	comment: string;
	updatedAt: string;
}
export interface Exercise {
	id: string;
	title: string;
	completed: boolean;
}
export interface Lesson {
	id: string;
	title: string;
	exercises: Exercise[];
	materials: File[];
	completed: boolean;
	totalExerciseCompleted: number;
}

export interface Section {
	id: string;
	title: string;
	lessons: Lesson[];
	completed: boolean;
	totalLessonCompleted: number;
}

export interface CourseDetails {
	id: string;
	title: string;
	teacher: {
		id: string;
		firstName: string;
		lastName: string;
		fullName: string;
		email: string;
		avatar: string;
		gender: string;
	};
	about: string;
	introVideo: string;
	thumbnail: string;
	price: number;
	level: string;
	sections: Section[];
	posts: string[];
	reviews: Review[];
	avgStar: number;
	isAttended: boolean;
	isReviewed: boolean;
	attendance: number;
	isPublished: boolean;
	tags: string[];
	totalLessons: number;
	submissionAmount: number;
	pendingSubmissionAmount: number;
	exercises?: Exercise[];
	createdAt: string;
	updatedAt: string;
	progress: number;
}
