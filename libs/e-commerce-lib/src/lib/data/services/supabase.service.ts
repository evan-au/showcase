import { Injectable } from '@angular/core';
// import { environment } from '../environments/environment';

// BAAS - Supabase
import {
  createClient,
  PostgrestError,
  SupabaseClient,
} from '@supabase/supabase-js';

// Interfaces
import { AddProductInterface } from '../interfaces/add-product.interface';
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
      'https://priehnestgjdhjczgyta.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByaWVobmVzdGdqZGhqY3pneXRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc4MTgxMzYsImV4cCI6MTk2MzM5NDEzNn0.f5Njr02kBQhZf_QWl_RfH1xrqxf6VQjue9mnWnfYe1I'
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

  async addProduct(payload: AddProductInterface) {
    const { data: products, error } = await this.supabase
      .from<AddProductInterface>('products')
      .insert({ ...payload }, { returning: 'minimal' });

    return {
      products,
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
