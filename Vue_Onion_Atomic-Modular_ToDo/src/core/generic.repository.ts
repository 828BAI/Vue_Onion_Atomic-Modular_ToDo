
export interface IGenericRepository<T, CreateDTO, UpdateDTO> {
    getRef(): any;

    fetchAll(): Promise<void>;

    // fetchOne(id: number): Promise<void>;

    create(dto: CreateDTO): Promise<void>;

    update(id: number, dto: UpdateDTO): Promise<void>;

    remove(id: number): Promise<void>;
}
