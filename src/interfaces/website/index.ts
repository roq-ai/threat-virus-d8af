import { DataInterface } from 'interfaces/data';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface WebsiteInterface {
  id?: string;
  url: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  data?: DataInterface[];
  organization?: OrganizationInterface;
  _count?: {
    data?: number;
  };
}

export interface WebsiteGetQueryInterface extends GetQueryInterface {
  id?: string;
  url?: string;
  organization_id?: string;
}
