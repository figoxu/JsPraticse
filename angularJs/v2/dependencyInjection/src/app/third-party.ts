import { OpaqueToken } from '@angular/core';

const API_URL = new OpaqueToken('apiUrl');

export const THIRD_PARTY_PROVIDERS = [
  {
    provide: API_URL,
    useValue: 'some other value'
  }
];