export interface IUserLevel {
	id: string;
	user: string;
	overall: number;
	listening: {
		grammar: number;
		vocabulary: number;
		comprehension: number;
		overall: number;
	};
	reading: {
		grammar: number;
		vocabulary: number;
		skimming: number;
		scanning: number;
		comprehension: number;
		overall: number;
	};
	writing: {
		coherence: number;
		conciseness: number;
		grammar: number;
		vocabulary: number;
		organization: number;
		overall: number;
	};
	speaking: {
		grammar: number;
		vocabulary: number;
		pronunciation: number;
		fluency: number;
		overall: number;
	};
	CEFRLevel: string;
}
export interface SubmissionResponse {
	id: string;
	course: {
		id: string;
		title: string;
		thumbnail: string;
	};
	section: {
		id: string;
		title: string;
	};
	lesson: {
		id: string;
		title: string;
	};
	exercise: {
		id: string;
		title: string;
		tags: string[];
	};
	user: {
		id: string;
		firstName: string;
		lastName: string;
		avatar: string;
	};
	totalCorrect: number;
	totalQuestion: number;
	totalDone: number;
	progress: number;
	grade: number;
	status: 'graded' | 'pending';
	createdAt: Date;
	updatedAt: Date;
}
export interface ResponseData<T = any> {
	data: T;
	message: string;
	success: boolean;
	limit?: number;
	offset?: number;
	total?: number;
}
