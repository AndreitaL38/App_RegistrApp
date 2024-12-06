import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    const storageServiceStub = () => ({
      get: () => ({ find: () => ({}) })
    });
    TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: StorageService, useFactory: storageServiceStub }
      ]
    });
    service = TestBed.inject(UserService);
  });

  it('P1 - Verificar la creación del servicio', () => {
    expect(service).toBeTruthy();
  });
});
