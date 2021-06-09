export type Person = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  phone: string;
  cell: string;
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
  email: string;
};
