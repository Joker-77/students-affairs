import { HallModel } from "./HallModel";
import { ExamModel } from "./ExamModel";

export interface ExamHallsModel {
    date: string;
    hall: HallModel;
    exams: ExamModel[];
    exam_halls_ids: number[];
    maxTimePeriod: number;
    timePeriod: string;
    observers: number;
}