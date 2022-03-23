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

export interface Profile {
  username: string;
  website: string;
  avatar_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  async getAllProducts() {
    const { data: products, error } = await this.supabase
      .from<ProductInterface>('products')
      .select('*')
      // .select('*, categories(*), brands(*), dimensions(*)')
      .limit(10);

    // console.log('All products =>', products);

    // this._supabase
    //   .from('products')
    //   .on('*', (payload) => {
    //     console.log('Product changed =>', payload);
    //   })
    //   .subscribe();

    return {
      products: products as ProductInterface[],
      error: error as PostgrestError,
    };
  }
  // return p

  // async realTimeProducts() {
  //   await this.supabase
  //     .from('products')
  //     .on('*', (payload) => {
  //       console.log('Product changed =>', payload);
  //     })
  //     .subscribe();

  // }

  // async getAllBlogs() {
  //   const { data: blogs, error } = await this._supabase
  //     .from<BlogArticleInterface>('blog-articles')
  //     .select('*')
  //     .limit(10);

  //   console.log('All Blog articles =>', blogs);
  // }

  //   get user() {
  //     return this.supabase.auth.user();
  //   }

  //   get session() {
  //     return this.supabase.auth.session();
  //   }

  //   get profile() {
  //     return this.supabase
  //       .from('profiles')
  //       .select(`username, website, avatar_url`)
  //       .eq('id', this.user?.id)
  //       .single();
  //   }

  //   authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
  //     return this.supabase.auth.onAuthStateChange(callback);
  //   }

  //   signIn(email: string) {
  //     return this.supabase.auth.signIn({email});
  //   }

  //   signOut() {
  //     return this.supabase.auth.signOut();
  //   }

  //   updateProfile(profile: Profile) {
  //     const update = {
  //       ...profile,
  //       id: this.user?.id,
  //       updated_at: new Date()
  //     }

  //     return this.supabase.from('profiles').upsert(update, {
  //       returning: 'minimal', // Don't return the value after inserting
  //     });
  //   }

  //   downLoadImage(path: string) {
  //     return this.supabase.storage.from('avatars').download(path);
  //   }

  //   uploadAvatar(filePath: string, file: File) {
  //     return this.supabase.storage
  //       .from('avatars')
  //       .upload(filePath, file);
  //   }
}
