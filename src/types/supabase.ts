export type Deal = {
  id: string;
  created_at: string;
  founder_name: string;
  company_name: string;
  email: string;
  pitch_deck_url?: string;
  description: string;
  status: 'pending' | 'approved' | 'rejected';
};

export type Event = {
  id: string;
  created_at: string;
  title: string;
  description: string;
  date: string;
  location: string;
  is_virtual: boolean;
  registration_link?: string;
};

export type LimitedPartner = {
  id: string;
  created_at: string;
  user_id: string;
  full_name: string;
  organization: string;
  investment_focus: string[];
  is_approved: boolean;
};