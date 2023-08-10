export class PlanDto {
  id: number;
  name: string;
  max_images: number;
  storage_space: number;
  start_date: Date;
  end_date: Date;
  user_id: number;
  price: number;
  observation: string;
  active: boolean;
  months_of_validity: number;
  site_emphasis: boolean;
}
