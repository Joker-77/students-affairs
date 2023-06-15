export interface IObservationModel {
    id: number;
    date: string;
    is_master: number;
    from: string;
    to: string;
    exam_halls_ids: number[];
    employee_id: number;
    hall_id: number;
}