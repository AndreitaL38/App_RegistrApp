import { TestBed } from '@angular/core/testing';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    const storageStub = () => ({ create: () => ({}) });
    TestBed.configureTestingModule({
      providers: [StorageService, { provide: Storage, useFactory: storageStub }]
    });
    spyOn(StorageService.prototype, 'init');
    service = TestBed.inject(StorageService);
  });

  it('P1 - Verificar la creación del servicio', () => {
    expect(service).toBeTruthy();
  });

});
