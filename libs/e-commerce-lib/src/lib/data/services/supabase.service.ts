import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

// BAAS - Supabase
import {
  createClient,
  PostgrestError,
  SupabaseClient,
} from '@supabase/supabase-js';

// Interfaces
import { BrandInterface } from '../interfaces/brand.interface';
import { CategoryInterface } from '../interfaces/category.interface';
import { ProductInterface } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  public supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  // Products
  async getAllProducts() {
    const { data: products, error } = await this.supabase
      .from<ProductInterface>('products')
      .select('*, brands(*), categories(*)');

    return {
      products: products as ProductInterface[],
      error: error as PostgrestError,
    };
  }

  async addProduct(payload: ProductInterface) {
    const { data: products, error } = await this.supabase
      .from<ProductInterface>('products')
      .upsert([{ ...payload }], {
        returning: 'minimal',
        ignoreDuplicates: true,
        onConflict: 'name',
      });

    return {
      products: products as ProductInterface[],
      error: error as PostgrestError,
    };
  }

  async deleteProduct(payload: ProductInterface['id']) {
    const { data, error } = await this.supabase
      .from('products')
      .delete({ returning: 'minimal' })
      .match({ id: payload });

    return {
      data,
      error: error as PostgrestError,
    };
  }

  async updateProduct(payload: {
    id: ProductInterface['id'];
    product: Partial<ProductInterface>;
  }) {
    const { data, error } = await this.supabase
      .from('products')
      .update({ ...payload.product })
      .match({ id: payload.id });

    return {
      data,
      error: error as PostgrestError,
    };
  }

  // Categories
  async getAllCategories() {
    const { data: categories, error } = await this.supabase
      .from<CategoryInterface>('categories')
      .select('*');

    return {
      categories: categories as CategoryInterface[],
      error: error as PostgrestError,
    };
  }

  // Brands
  async getAllBrands() {
    const { data: brands, error } = await this.supabase
      .from<BrandInterface>('brands')
      .select('*');

    return {
      brands: brands as BrandInterface[],
      error: error as PostgrestError,
    };
  }

  // Authentication
  signIn(email: string, password: string) {
    return this.supabase.auth.signIn({ email, password });
  }

  signUp(email: string, password: string) {
    return this.supabase.auth.signUp({
      email,
      password,
    });
  }

  signOut() {
    return this.supabase.auth.signOut();
  }
}
