export interface IORMData<T> {
  dataValues: T;
  options: {
    attributes: string[];
  };
  isNewRecord: boolean;
  id: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  closedAt: string | null;
  deletedAt: string | null;
}
