import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoriesRepository } from 'src/shared/database/repositories/categories.repositories';

@Injectable()
export class ValidateCategoryOwnershipService {
  constructor(private readonly categoriesRepo: CategoriesRepository) {}

  async validate(userId: string, categoryID: string) {
    const isOwner = this.categoriesRepo.findFirst({
      where: { userId, id: categoryID },
    });

    if (!isOwner) {
      throw new NotFoundException('Category not found.');
    }
  }
}
