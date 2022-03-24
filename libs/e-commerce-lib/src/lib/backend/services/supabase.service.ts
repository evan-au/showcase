import { Injectable } from '@angular/core';
import {
  // AuthChangeEvent,
  createClient,
  PostgrestError,
  // Session,
  SupabaseClient,
} from '@supabase/supabase-js';
// import { from, of } from 'rxjs';
import { environment } from '../environments/environment';
// import { BlogArticleInterface } from '../interfaces/blog-article.interface';
import { ProductInterface } from '../interfaces/product.interface';

// export interface Profile {
//   username: string;
//   website: string;
//   avatar_url: string;
// }

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
      .select('*')
      // .select('*, categories(*), brands(*), dimensions(*)')
      .limit(10);

    return {
      products: products as ProductInterface[],
      error: error as PostgrestError,
    };
  }

  // Authentication

  get user() {
    return this.supabase.auth.user();
  }

  get session() {
    return this.supabase.auth.session();
  }

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
