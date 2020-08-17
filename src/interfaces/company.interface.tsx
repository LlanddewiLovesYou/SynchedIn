export interface Company {
  name: string;
  contacts: Contact[];
}

interface Contact {
  displayName: string;
  email: string;
}
