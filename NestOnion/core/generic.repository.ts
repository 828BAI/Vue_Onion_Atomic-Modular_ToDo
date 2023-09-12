export interface IGenericRepository<T, CreateDTO, UpdateDTO> {
    findAll(): Promise<T[]>;

    findOne(id: number): Promise<T>;

    create(dto: CreateDTO): Promise<T>;

    update(id: number, dto: UpdateDTO): Promise<T>;

    remove(id: number): Promise<void>;
}
