import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MotoristaService } from './motorista.service';
import { environment } from '../../../environments/environment';
import { Motorista } from '../interfaces/motorista';
import { UtilsService } from '../util/util.service';

describe('MotoristaService', () => {
  let service: MotoristaService;
  let httpMock: HttpTestingController;

  const URL_MOTORISTAS = environment.urlSistema.concat('/motorista');

  beforeEach(() => {
    const utilsServiceMock = {
      removeNullValuesFromQueryParams: (params: any) => params,
    };
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MotoristaService, { provide: UtilsService, useValue: utilsServiceMock }],
    });

    service = TestBed.inject(MotoristaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Garante que nenhuma requisição ficou pendente
    httpMock.verify();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve buscar a lista de motoristas (getMotoristas)', () => {
    const mockMotoristas: Motorista[] = [
      { codigo: '1', nome: 'João' } as unknown as Motorista,
      { codigo: '2', nome: 'Maria' } as unknown as Motorista,
    ];

    // Simula uma chamada HTTP GET
    service.getMotoristas({} as any).subscribe((motoristas) => {
      expect(motoristas.length).toBe(2);
      expect(motoristas).toEqual(mockMotoristas);
    });

    // Verifica se foi feita a requisição correta
    const req = httpMock.expectOne(`${URL_MOTORISTAS}/filtrar`);
    expect(req.request.method).toBe('GET');

    // Retorna a resposta simulada
    req.flush(mockMotoristas);
  });

  it('deve adicionar um motorista (addMotorista)', () => {
    const novoMotorista: Motorista = { codigo: '3', nome: 'Pedro' } as unknown as Motorista;

    service.addMotorista(novoMotorista).subscribe((res) => {
      expect(res).toEqual(novoMotorista);
    });

    const req = httpMock.expectOne(URL_MOTORISTAS);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(novoMotorista);

    req.flush(novoMotorista);
  });

  it('deve atualizar um motorista (updateMotorista)', () => {
    const motoristaAtualizado: Motorista = { codigo: '1', nome: 'João Silva' } as unknown as Motorista;

    service.updateMotorista(motoristaAtualizado).subscribe((res) => {
      expect(res).toEqual(motoristaAtualizado);
    });

    const req = httpMock.expectOne(URL_MOTORISTAS);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(motoristaAtualizado);

    req.flush(motoristaAtualizado);
  });

  it('deve deletar um motorista (deleteMotorista)', () => {
    const codigoMotorista = '1';

    service.deleteMotorista(codigoMotorista).subscribe((res) => {
      expect(res).toBeTruthy();
    });

    const req = httpMock.expectOne(`${URL_MOTORISTAS}/${codigoMotorista}`);
    expect(req.request.method).toBe('DELETE');

    req.flush({ sucesso: true });
  });

  it('deve buscar motorista por código (getMotorista)', () => {
    const codigoMotorista = '2';
    const mockMotorista: Motorista = { codigo: '2', nome: 'Maria' } as unknown as Motorista;

    service.getMotorista(codigoMotorista).subscribe((res) => {
      expect(res).toEqual(mockMotorista);
    });

    const req = httpMock.expectOne(`${URL_MOTORISTAS}/${codigoMotorista}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockMotorista);
  });
});
