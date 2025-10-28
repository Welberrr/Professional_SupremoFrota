import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DestroyRef, Injectable, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Motorista } from '../interfaces/motorista';
import { UtilsService } from '../util/util.service';

const URL_MOTORISTAS = environment.urlSistema;
const ENDPOINT_MOTORISTAS = URL_MOTORISTAS.concat('/motorista');

@Injectable({
    providedIn: "root"
})
export class MotoristaService {

    public utils = inject(UtilsService);

    public destroyRef = inject(DestroyRef);

    public http = inject(HttpClient);

    public motoristasList = signal<Motorista[]>([]);

    public motorista = signal<Partial<Motorista>>({});

    public addMotorista(motorista: Motorista): Observable<Motorista> {
        return this.http.post<Motorista>(ENDPOINT_MOTORISTAS, motorista);
    }

    public updateMotorista(motorista: Motorista): Observable<Motorista> {
        return this.http.put<Motorista>(ENDPOINT_MOTORISTAS, motorista);
    }

    public deleteMotorista(codigoMotorista: string): Observable<Motorista> {
        return this.http.delete<Motorista>(ENDPOINT_MOTORISTAS + '/' + codigoMotorista);
    }

    public getMotoristas(params: HttpParams): Observable<Motorista[]> {
        return this.http.get<Motorista[]>(ENDPOINT_MOTORISTAS + '/filtrar', { params: this.utils.removeNullValuesFromQueryParams(params) });
    }
    public all(authorizationString: string): Observable<Motorista[]> {

        const headers = new HttpHeaders({
            Authorization: authorizationString
        });

        return this.http.get<Motorista[]>(ENDPOINT_MOTORISTAS, { headers });
    }

    public getMotorista(codigoMotorista: string): Observable<Motorista> {
        return this.http.get<Motorista>(ENDPOINT_MOTORISTAS + '/' + codigoMotorista);
    }

}


