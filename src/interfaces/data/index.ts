import { WebsiteInterface } from 'interfaces/website';
import { GetQueryInterface } from 'interfaces';

export interface DataInterface {
  id?: string;
  content: string;
  website_id?: string;
  created_at?: any;
  updated_at?: any;

  website?: WebsiteInterface;
  _count?: {};
}

export interface DataGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  website_id?: string;
}
