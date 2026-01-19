import { MenuEntity } from "../../../domain/entity";
import { MenuRepository } from "../../../domain/repository/menu.repository";
import { DBConfig } from "../../../shared/config/config-db";

/**  */
export class MenuImplement implements MenuRepository {
  async create(menu: any): Promise<any> {
    // Persistir y retornar el registro creado
    const repo = DBConfig.dataSource.getRepository(MenuEntity);
    const entity = repo.create(menu);
    return await repo.save(entity);
  }

  async update(id: number, menu: any): Promise<any> {
    return await DBConfig.dataSource
      .getRepository(MenuEntity)
      .update({ id }, menu);
  }

  async delete(id: number): Promise<any> {
    return await DBConfig.dataSource.getRepository(MenuEntity).delete({ id });
  }

  async findAll(): Promise<any[]> {
    return await DBConfig.dataSource.getRepository(MenuEntity).find();
  }

  async findById(id: number): Promise<any> {
    return await DBConfig.dataSource
      .getRepository(MenuEntity)
      .findOneBy({ id });
  }
}
